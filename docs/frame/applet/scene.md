---
toc: menu
---

# 小程序场景

## 1.获取 openid / unionid

### 1）wx.login

- 获取登录凭证（code）

- 客户端调用

```js
wx.login({
  success: async ({ code }) => {
    console.log('wx.login', code);
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    const { data } = await services.getOpenId({
      data: { code },
      preloader: true,
    });
    const { unionid, session_key, openid } = data;
  },
});
```

### 2）通过 code 换取用户登录态信息

- 服务端获取

- openid：用户在当前小程序的唯一标识

- session_key：登录的会话密钥

- unionid：微信开放平台帐号下的唯一标识

  - 需要将当前小程序绑定到微信开放平台

```js
const wechatConfig = {
  appid: 'xxx', // 小程序 appId
  secret: 'xxx', // 小程序 appSecret
};

const { code } = ctx.request.body;
const { data } = await axios.get(
  'https://api.weixin.qq.com/sns/jscode2session',
  {
    params: {
      appid: wechatConfig.appid,
      secret: wechatConfig.secret,
      js_code: code,
      grant_type: 'authorization_code',
    },
  },
);
```

## 2.获取用户信息

- wx.getUserProfile：获取用户信息，页面产生点击事件（例如 button 上 bindtap 的回调中）后才可调用

- 该接口用于替换 wx.getUserInfo

```js
wx.getUserProfile({
  desc: '用于获取用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  success: (res) => {
    console.log('getUserProfile', res.userInfo);
  },
  fail: (err) => {
    console.log('getUserProfile失败', err);
  },
});
```

| 参数      | 说明                                    |
| :-------- | :-------------------------------------- |
| nickName  | 用户昵称                                |
| avatarUrl | 用户头像图片的 URL                      |
| language  | 显示 country，province，city 所用的语言 |

## 3.获取手机号

### 1）wxml 部分

- `button` 的 `open-type` 属性设置为 `getPhoneNumber`

### 2）小程序 js 部分

```js
function getPhone(e) {
  const { encryptedData, iv } = e.detail;
  if (!encryptedData) {
    return openTip('获取手机号失败');
  };
},
```

- 将 encryptedData, iv 以及 wx.login 换取的 session_key 发送给服务端

### 3）服务端处理

- 通过 appid、session_key、encryptedData、iv 解密

```js
const WXBizDataCrypt = require('../tools/WXBizDataCrypt');

async function getPhoneNumber(ctx) {
  try {
    const { session_key, encryptedData, iv } = ctx.request.body;
    const pc = new WXBizDataCrypt(appid, session_key);
    const data = pc.decryptData(encryptedData, iv);
    ctx.state.code = 0;
    ctx.state.data = data; // phoneNumber
  } catch (err) {
    ctx.state.code = -1;
    throw new Error(err);
  }
}
```

- WXBizDataCrypt.js

```js
var crypto = require('crypto');

function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId;
  this.sessionKey = sessionKey;
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  var sessionKey = new Buffer(this.sessionKey, 'base64');
  encryptedData = new Buffer(encryptedData, 'base64');
  iv = new Buffer(iv, 'base64');

  try {
    // 解密
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true);
    var decoded = decipher.update(encryptedData, 'binary', 'utf8');
    decoded += decipher.final('utf8');

    decoded = JSON.parse(decoded);
  } catch (err) {
    throw new Error('登录过期，请重新获取');
  }

  if (decoded.watermark.appid !== this.appId) {
    throw new Error('Illegal Buffer');
  }

  return decoded;
};

module.exports = WXBizDataCrypt;
```

## 4.接口调用凭证

- auth.getAccessToken：获取小程序全局唯一后台接口调用凭据（access_token）

- 内容安全校验：文字、图片，需携带 access_token

- 需要存储在服务端，过期时常：2h

```js
const { data } = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
  params: {
    grant_type: 'client_credential',
    appid,
    secret,
  },
  timeout: 40 * 1000,
});
console.log('getAccessToken', data);
if (data.errmsg) {
  throw 'err';
}
// 写入文件
await wirteFileFun('/file/access_token.txt', data.access_token);

function wirteFileFun(filePath, result) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, result, 'binary', async (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('生成成功！');
        resolve();
      }
    });
  });
}
```

## 5.内容安全

- 单个 appId 调用上限为 2000 次/分钟，200,000 次/天

- 文件大小限制：单个文件大小不超过 10M

### 1）文本安全

```js
// 校验文本安全
function msgSecCheck(content, name) {
  return new Promise(async (resolve, reject) => {
    try {
      const access_token = await readAccessToken();
      const { data } = await axios.post(
        `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${access_token}`,
        { content },
      );
      console.log('msgSecCheck res', data);
      if (data.errcode === 0) {
        return resolve();
      }
      if (data.errcode === 87014) {
        return reject(`${name}含有敏感词汇`);
      }
      reject(data.errmsg);
    } catch (err) {
      console.log('msgSecCheck err', err);
      reject(err);
    }
  });
}
```

### 2）图片安全

```js
// 校验图片安全
function imgSecCheck(media) {
  return new Promise(async (resolve, reject) => {
    try {
      const access_token = await readAccessToken();
      const form = {
        media: fs.createReadStream(media),
      };
      const data = await httpForm(
        `https://api.weixin.qq.com/wxa/img_sec_check?access_token=${access_token}`,
        form,
      );
      console.log('data', data);
      console.log('imgSecCheck res', data);
      if (data.errcode === 0) {
        return resolve();
      }
      if (data.errcode === 87014) {
        return reject('图片含有违法违规内容');
      }
      reject(data.errmsg);
    } catch (err) {
      console.log('imgSecCheck err', err);
      reject(err);
    }
  });
}
```

## 6.处理图片

### 1）图片选择时进行图片安全校验

- 校验图片是否违法违规

### 2）图片选择后，将图片路径信息存储在本地缓存中

- 防止用户意外退出页面，图片重新选择

### 3）图片上传进入审核

- 清除本地图片缓存

- 新增的图片直接存储在 review 目录下

- 之前的图片，不做处理，只把图片路径放在存储在数据库中

  - 前提是商品在审核期，不能再进行商品修改操作，防止用户删除原图片，导致在审核列表中不能进行预览

  - 在审核期可以进行撤销审核，撤销审核后，可以再次进行修改

### 4）图片审核通过

- 将审核通过的图片 copy 到商品目录下

- 对比原图片列表和审核通过后的图片列表

  - 如果审核通过后的图片中有原图片列表中的图片，保持不变

  - 审核通过后的图片是新增的，直接 copy 进目录

  - 原图片在审核通过后的列表中找不到，删除原图片

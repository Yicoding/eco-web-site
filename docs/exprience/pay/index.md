---
toc: menu
---

# 微信支付-小程序支付

## 1.分类-两种模式

- 微信支付目前提供两种接入方式：`直连模式(普通商户模式)`和`服务商模式`

### 1）直连模式

- 是指使用微信支付收银的商户，一个账户服务于一个商户

- 信息、资金流：微信支付—>直连商户

- 直连模式，商户自行申请入驻微信支付，无需服务商协助。（商户平台申请）成为普通商户

### 2）服务商模式

- 具有`技术开发能力`且能够为普通商户`提供微信支付`技术开发、营销方案的第三方开发者

  - 1.服务商自身无法作为一个普通商户直接发起交易，其发起交易必须传入相关`特约商户`商户号的参数信息
  - 2.服务商的商户号无结算功能，发起交易时，对应交易款直接进入其特约商户的商户号账户

- 服务商模式，商户申请成为微信支付服务商，服务商自身无法作为一个普通商户直接发起交易，其发起交易必须传入相关特约商户商户号的参数信息。（服务商平台申请）成为普通服务商

## 2.直连模式

### 1）JSAPI 下单（服务端提供接口给前端）

**1.参数**

| 参数           | 说明                                                                            |
| :------------- | :------------------------------------------------------------------------------ |
| `appid`        | 小程序的应用 ID(微信支付的配置项)                                               |
| `mchid`        | 商家的商户号，在申请成为商户时微信生成的商户号(微信支付的配置项)                |
| `description`  | 商品描述(由客户端传入)                                                          |
| `out_trade_no` | 商户系统内部订单号(由服务端生成)                                                |
| `notify_url`   | 微信支付结果通知的回调地址(需要服务端配置一个可以接收回调的接口)                |
| `amount`       | 订单金额信息(由客户端传入)，包括订单金额(以`分`为单位)和货币类型(`CNY`：人民币) |
| `payer`        | 支付者信息(由客户端传入)，需要用户在小程序中的 `openid`                         |

**2.生成签名**

- 1.格式：

  - 签名串一共有`五行`，每一行为一个参数。行尾以 `\n`（换行符，ASCII 编码值为 0x0A）`结束`，包括最后一行。如果参数本身以`\n 结束`，也需要`附加`一个`\n`

  ```js
  HTTP请求方法\n
  URL\n
  请求时间戳\n
  请求随机串\n
  请求报文主体\n
  ```

- 2.封装签名方法

```js
const fs = require('fs');

function getSign(content, hash = 'SHA256withRSA') {
  const pem = fs.readFileSync('./server/apiclient_key.pem'); // 微信支付平台证书
  const prvkeypem = pem.toString('ascii'); // 生成私钥

  // 创建 Signature 对象
  const signature = new KJUR.crypto.Signature({
    alg: hash,
    //!这里指定 私钥 pem!
    prvkeypem,
  });
  signature.updateString(content);
  const signData = signature.sign();
  // 将内容转成base64
  return hextob64(signData);
}
```

- 3.计算签名值

```js
const timestamp = `${parseInt(new Date().getTime() / 1000)}`; // 时间戳
const nonce_str = Math.random().toString(36).substr(2, 15); // 随机字符串，长度为32个字符以下

const values = {
  appid,
  mchid,
  description,
  out_trade_no,
  notify_url,
  amount: {
    total,
    currency: 'CNY',
  },
  payer: { openid },
};
const signature = getSign(
  `POST\n/v3/pay/transactions/jsapi\n${timestamp}\n${nonce_str}\n${JSON.stringify(
    values,
  )}\n`,
);
```

- 4.设置 HTTP 头

> Authorization: 认证类型 签名信息
>
> > 认证类型: WECHATPAY2-SHA256-RSA2048

```js
const Authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${mchid}",serial_no="${serial_no}",nonce_str="${nonce_str}",timestamp="${timestamp}",signature="${signature}"`;
const url = 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi';

const res = await axios.post(url, values, {
  headers: { Authorization },
});
```

- 5.签名验证

```js
应答时间戳\n
应答随机串\n
应答报文主体\n
```

```js
const newsignature = getSign(
  `${appid}\n${timestamp}\n${nonce_str}\nprepay_id=${res.data.prepay_id}\n`,
);
```

- 6.返回客户端支付时需要的参数

```js
ctx.state.data = {
  prepay_id: res.data.prepay_id,
  timeStamp: timestamp,
  nonceStr: nonce_str,
  paySign: newsignature,
};
```

### 2）小程序发起微信支付

```js
// 先调用服务端下单接口，返回支付所需的参数后，再发起微信支付
wx.requestPayment({
  timeStamp: data.timeStamp,
  nonceStr: data.nonceStr,
  package: 'prepay_id=' + data.prepay_id,
  signType: 'RSA',
  paySign: data.paySign,
  success: (res) => {
    console.log('success', res);
    resolve(res);
  },
  fail: (err) => {
    console.log('fail', err);
    reject(err);
  },
  complete: (e) => {
    console.log('complete', e);
  },
});
```

## 3.服务商模式

- 服务商模式可以选择`特约商户进件`和行业方案中的`电商收付通`方案

- 区别：
  - 特约商户进件的商户，分账时，需要特约商户签署协议，特约商户须配置允许服务商分账的最大比例，
  - 电商收付通，服务商可以自行设置分账比例，无需商户确认
  - 分账比例最高 30%

### 1）二级商户进件

**1.客户端收集商户所需信息，上送服务端**

**2.平台证书回调报文解密**

```js
/**
 * 解密
 *
 * @param {string} cipherText 文本
 * @param {string} key 平台密钥
 * @param {string} nonce 偏移量（nonce）
 * @param {string} associated_data associated_data
 */
function decryptAes(key, cipherText, nonce, associated_data) {
  // console.log('key', key, cipherText, nonce, associated_data)
  const result = AesGcm.decrypt(nonce, key, cipherText, associated_data);
  // console.log('result', result);
  return result;
}
```

**3.获取平台证书**

```js
function getCertificates() {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        mchid_service, // 微信商户号-服务商
        serial_no_service, // 商户API证书
        mchkey, // 微信商户的key 32位
      } = config;

      const nonce_str = Math.random().toString(36).substr(2, 15);
      const timestamp = `${parseInt(new Date().getTime() / 1000)}`;
      const signature = getSignServer(
        `GET\n/v3/certificates\n${timestamp}\n${nonce_str}\n\n`,
      );

      const Authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${mchid_service}",serial_no="${serial_no_service}",nonce_str="${nonce_str}",timestamp="${timestamp}",signature="${signature}"`;

      const url = 'https://api.mch.weixin.qq.com/v3/certificates';

      const res = await axios.get(url, {
        headers: {
          Authorization,
          Accept: 'application/json',
        },
      });
      const {
        encrypt_certificate: { ciphertext, nonce, associated_data }, // 证书内容
        serial_no, // 序列号
      } = res.data.data[0];
      const publicKey = decryptAes(mchkey, ciphertext, nonce, associated_data);
      resolve({
        serial_no,
        publicKey,
      });
    } catch (err) {
      reject(err);
    }
  });
}
```

**3.图片上传 API**

- 获取图片 MediaID

```js
const request = require('superagent');
const WxPay = require('wechatpay-node-v3');
const crypto = require('crypto');

/*
 * @pic_buffer: 图片的buffer
 */
function mediaUploadBuffer(pic_buffer) {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        appid, // 小程序id
        mchid_service, // 微信商户号-服务商
        serial_no_service, // 商户API证书
      } = config;
      const pay = new WxPay({
        appid,
        mchid: mchid_service,
        serial_no: serial_no_service,
        publicKey: fs.readFileSync('./server/apiclient_cert_server.pem'), // 公钥
        privateKey: fs.readFileSync('./server/apiclient_key_server.pem'), // 秘钥
      });
      // meta信息
      const fileinfo = {
        filename: '',
        sha256: '',
      };
      const sign = crypto.createHash('sha256');
      sign.update(pic_buffer);
      fileinfo.filename = 'filea.png';
      fileinfo.sha256 = sign.digest('hex');
      const timestamp = `${parseInt(new Date().getTime() / 1000)}`;
      const nonce_str = Math.random().toString(36).substr(2, 15);
      const url = '/v3/merchant/media/upload';

      const signature = pay.getSignature(
        'POST',
        nonce_str,
        timestamp,
        url,
        fileinfo,
      );
      const authorization = pay.getAuthorization(
        nonce_str,
        timestamp,
        signature,
      );
      const result = await request
        .post('https://api.mch.weixin.qq.com/v3/merchant/media/upload')
        .set({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;boundary=boundary',
          'User-Agent': '127.0.0.1',
          Authorization: authorization,
          Charsert: 'UTF-8',
        })
        .attach('file', pic_buffer, {
          filename: 'filea.png',
          contentType: 'image/png',
        })
        .field('meta', JSON.stringify(fileinfo));

      // console.log('result', result);
      if (result.status === 200 && result.text) {
        const { media_id } = JSON.parse(result.text);
        resolve(media_id);
      } else {
        ctx.state.data = result;
        reject(result);
      }
    } catch (err) {
      reject(err);
    }
  });
}
```

**4.平台证书加密**

```js
/*
 * @data: 需要加密的信息
 * @publicKey: 需要加密的信息
 */
function encryptParams(data, publicKey) {
  const encodeData = crypto
    .publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(data),
    )
    .toString('base64');
  // console.log("encode: ", encodeData)
  return encodeData;
}
```

**5.商户进件**

```js
const {
  mchid_service, // 微信商户号-服务商
  serial_no_service, // 商户API证书
} = gouxuanStore;
const nonce_str = Math.random().toString(36).substr(2, 15);
const timestamp = `${parseInt(new Date().getTime() / 1000)}`;

const url = 'https://api.mch.weixin.qq.com/v3/ecommerce/applyments/';
const signature = getSignServer(
  `POST\n/v3/ecommerce/applyments/\n${timestamp}\n${nonce_str}\n${JSON.stringify(
    values,
  )}\n`,
);

const Authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${mchid_service}",serial_no="${serial_no_service}",nonce_str="${nonce_str}",timestamp="${timestamp}",signature="${signature}"`;

// Wechatpay_serial_no: getCertificates方法返回的serial_no(序列号)
const res = await axios.post(url, values, {
  headers: {
    Authorization,
    Accept: 'application/json',
    'Wechatpay-Serial': Wechatpay_serial_no,
  },
});
```

### 2）服务商帮客户发起支付付款到商家商户号

| 参数           | 说明                                                                            |
| :------------- | :------------------------------------------------------------------------------ |
| `sp_appid`     | 小程序客户端的应用 ID(微信支付的配置项)                                         |
| `sp_mchid`     | 微信商户号-服务商(微信支付的配置项)                                             |
| `sub_mchid`    | 二级商户的商户号                                                                |
| `description`  | 商品描述(由客户端传入)                                                          |
| `out_trade_no` | 商户系统内部订单号(由服务端生成)                                                |
| `notify_url`   | 微信支付结果通知的回调地址(需要服务端配置一个可以接收回调的接口)                |
| `settle_info`  | 结算信息(profit_sharing: 是否指定分账)                                          |
| `amount`       | 订单金额信息(由客户端传入)，包括订单金额(以`分`为单位)和货币类型(`CNY`：人民币) |
| `payer`        | 支付者信息(由客户端传入)，sp_openid 需要用户在小程序中的 `openid`               |

```js
// 服务商签名
function getSignServer(content, hash = 'SHA256withRSA') {
  var pem = fs.readFileSync('./server/apiclient_key_server.pem');
  var prvkeypem = pem.toString('ascii');

  // 创建 Signature 对象
  const signature = new KJUR.crypto.Signature({
    alg: hash,
    //!这里指定 私钥 pem!
    prvkeypem,
  });
  signature.updateString(content);
  const signData = signature.sign();
  // 将内容转成base64
  return hextob64(signData);
}

// 服务商帮客户发起支付付款到商家商户号
async function wxapiServer(ctx) {
  try {
    const {
      total,
      openid,
      description = '商品',
      sub_mchid,
      out_trade_no,
    } = ctx.request.body;
    const {
      mchid_service,
      notify_url_server,
      serial_no_service,
      appid: c_appid,
    } = config;
    const nonce_str = Math.random().toString(36).substr(2, 15);
    const timestamp = `${parseInt(new Date().getTime() / 1000)}`;

    const values = {
      sp_appid: c_appid,
      sp_mchid: mchid_service,
      sub_mchid,
      description,
      out_trade_no,
      notify_url: notify_url_server,
      settle_info: {
        profit_sharing: true,
      },
      amount: {
        total,
        currency: 'CNY',
      },
      payer: { sp_openid: openid },
    };

    const url =
      'https://api.mch.weixin.qq.com/v3/pay/partner/transactions/jsapi';
    const signature = getSignServer(
      `POST\n/v3/pay/partner/transactions/jsapi\n${timestamp}\n${nonce_str}\n${JSON.stringify(
        values,
      )}\n`,
    );

    const Authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${mchid_service}",serial_no="${serial_no_service}",nonce_str="${nonce_str}",timestamp="${timestamp}",signature="${signature}"`;

    const res = await wxapiRequest(url, values, {
      headers: {
        Authorization,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const newsignature = getSignServer(
      `${c_appid}\n${timestamp}\n${nonce_str}\nprepay_id=${res.data.prepay_id}\n`,
    );
    ctx.state.code = 0;
    ctx.state.data = {
      appId: c_appid,
      prepay_id: res.data.prepay_id,
      timeStamp: timestamp,
      nonceStr: nonce_str,
      paySign: newsignature,
    };
  } catch (err) {
    ctx.state.code = -1;
    throw new Error(err);
  }
}
```

### 3）客户端发起微信支付

```js
wx.requestPayment({
  appId: data.appId,
  timeStamp: data.timeStamp,
  nonceStr: data.nonceStr,
  package: 'prepay_id=' + data.prepay_id,
  signType: 'RSA',
  paySign: data.paySign,
  success: (res) => {
    console.log('success', res);
    resolve(res);
  },
  fail: (err) => {
    console.log('fail', err);
    reject(err);
  },
  complete: (e) => {
    console.log('complete', e);
  },
});
```

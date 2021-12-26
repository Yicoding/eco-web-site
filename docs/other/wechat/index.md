---
toc: menu
---

# 微信公众号开发

- 服务号

## 1.启用服务器配置

- 1.配置服务器地址(URL)

- 2.设置令牌(Token)

- 3.消息加解密密钥（可随机生成）

## 2.监听用户在公众号内的操作

```js
var xml2js = require('xml2js');
const { parseString } = xml2js;

// 解析xml
function parseXml(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, function (err, result) {
      console.dir(result);
      if (err) {
        return reject(err);
      }
      resolve(result?.xml);
    });
  });
}

// 监听post
async function getconfigPost(ctx) {
  try {
    const xml = ctx.request.body;
    const result = await parseXml(xml);
    if (result.MsgType[0] === 'event') {
      if (result.Event[0] === 'subscribe') {
        // 关注微信公众号
        const res = await getUserUnionIDFunc(result.FromUserName[0]);
        // 将用户数据添加到openid和unionid对号表中
        await addRelationFunc(res);
      } else if (result.Event[0] === 'unsubscribe') {
        // 取关
        unsubscribeClientUser(result.FromUserName[0]);
      }
    }
    ctx.state.code = 0;
    ctx.body = `<xml><ToUserName><![CDATA[${
      result.FromUserName[0]
    }]]></ToUserName><FromUserName><![CDATA[${
      result.ToUserName[0]
    }]]></FromUserName><CreateTime>${Date.now()}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[你好]]></Content></xml>`;
  } catch (err) {
    ctx.state.code = -1;
    throw new Error(err);
  }
}
```

## 3.自定义菜单

```js
// 创建菜单
async function createMenu(ctx) {
  try {
    const access_token = await readAccessTokenWeixin(); // 读取token
    const url = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`;
    const values = {
      button: [
        {
          type: 'miniprogram',
          name: 'name',
          url: 'https://xxx.com',
          appid: 'xxx',
          pagepath: 'pages/index/index',
        },
        {
          type: 'miniprogram',
          name: 'name2',
          url: 'https://xxx.com',
          appid: 'xxx',
          pagepath: 'pages/home/index',
        },
      ],
    };
    const res = await axios.post(url, values);
    ctx.state.code = 0;
    ctx.state.data = res.data;
  } catch (err) {
    ctx.state.code = -1;
    throw new Error(err);
  }
}
```

## 4.根据 openid 获取 UnionID

```js
function getUserUnionIDFunc(openid) {
  return new Promise(async (resolve, reject) => {
    try {
      const access_token = await readAccessTokenWeixin();
      const url = 'https://api.weixin.qq.com/cgi-bin/user/info';
      const values = { access_token, openid };
      const { data } = await axios.get(url, { params: values });
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}
```

## 5.模板消息

```js
function templateSend(values) {
  return new Promise(async (resolve, reject) => {
    try {
      const access_token = await readAccessTokenWeixin();
      const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${access_token}`;
      const { data } = await axios.post(url, values);
      console.log('templateSend', data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}

// 订单通知
async function sendOrderTemplate(ctx) {
  try {
    const { openid, amount, order_id, user_info, store_id } = ctx.request.body; // type: 1 审核通过  2 审核驳回
    const currentTime = changedate(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const values = {
      touser: openid,
      template_id: 'RKlqOxxxhRROnxxxALvXo',
      miniprogram: {
        appid,
        pagepath: `xxx`, // 小程序中的页面
      },
      data: {
        first: {
          value: '您有一笔新的订单，请及时处理',
          color: '#173177',
        },
        keyword1: {
          value: `No.${order_id}`,
          color: '#173177',
        },
        keyword2: {
          value: user_info,
          color: '#173177',
        },
        keyword3: {
          value: `${amount}元`,
          color: '#173177',
        },
        keyword4: {
          value: '微信支付',
          color: '#173177',
        },
        keyword5: {
          value: currentTime,
          color: '#173177',
        },
        remark: {
          value: '点击查看详情...',
          color: '#173177',
        },
      },
    };
    const res = await templateSend(values);
    ctx.state.code = 0;
    ctx.state.data = res;
  } catch (err) {
    ctx.state.code = -1;
    throw new Error(err);
  }
}
```

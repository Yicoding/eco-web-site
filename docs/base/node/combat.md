---
toc: menu
---

# node 实战

## 1.入口文件

```js
// node自带
const fs = require('fs');
const https = require('https');
const http = require('http');

// 外部npm
const Koa = require('koa');
const cors = require('koa2-cors');
const response = require('./middlewares/response');
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');

// 配置
const config = require('./config');
const env = process.env.NODE_ENV;

// 创建实例
const app = new Koa();

// 同步读取密钥和签名证书
const options = {
  key: fs.readFileSync('./server/index.key'),
  cert: fs.readFileSync('./server/index.crt'),
};

// 定义server
const httpsServer = https.createServer(options, app.callback());
const httpServer = http.createServer(app.callback());

// 解析body
app.use(koaBody({ multipart: true }));

// 解决跨域
app.use(cors());

// 使用响应处理中间件
app.use(response);

// 解析请求体
app.use(bodyParser());

// 引入路由分发
const router = require('./routes');
app.use(router.routes());

// https监听3000端口
httpsServer.listen(config[env].https);

// http监听3003端口
httpServer.listen(config[env].http);
```

## 2.封装中间件

```js
/**
 * 响应处理模块
 */
module.exports = async function (ctx, next) {
  try {
    // 调用下一个 middleware
    await next();

    // 处理响应结果
    // 如果直接写入在 body 中，则不作处理
    // 如果写在 ctx.body 为空，则使用 state 作为响应
    ctx.body = ctx.body ? ctx.body : Object.assign({}, ctx.state, { code: 0 });
  } catch (e) {
    // catch 住全局的错误信息

    // 设置状态码为 200 - 服务端错误
    ctx.status = 200;

    let error = '出错啦';
    if (e) {
      if (e.message) {
        error = e.message;
      } else if (typeof e === 'string') {
        error = e;
      } else {
        error = e.toString();
      }
    }

    // 输出详细的错误信息
    ctx.body = Object.assign({}, ctx.state, { error });
  }
};
```

## 3.pm2 运行

```bash
pm2 start processes.json
```

- processes.json

```json
{
  "apps": [
    {
      "name": "projectname",
      "script": "app.js",
      "cwd": "./",
      "exec_mode": "fork",
      "watch": true,
      "ignore_watch": ["tmp"],
      "env": {
        "NODE_ENV": "production"
      },
      "engines": {
        "node": ">=7.6"
      }
    }
  ]
}
```

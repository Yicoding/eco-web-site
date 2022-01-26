---
toc: menu
---

# 跨域

## 1.同源策略

### 1）定义

- 不同源之间的页面，不准互相访问数据

- 在浏览器中如果两个 URL 的`协议、域名和端口`都相同，我们就称这两个 URL 同源。浏览器默认只允许同源的页面相互访问资源和操作 DOM ，如果是非同源页面，浏览器会作出一连串的安全限制

  - 1.为什么 a.wang.com 访问 wang.com 也算跨域？
    - 因为历史上，出现过不同的公司共用域名，a.wang.com 和 wang.com 不一定是同一个网站，浏览器谨慎起见，认为这是不同的源
  - 2.为什么不同端口也算跨域？
    - 安全链条的强度取决于最弱的一环，所有和安全相关的问题都要谨慎对待
  - 3.为什么两个网站的 IP 一样，也算跨域？
    - 因为 IP 也是可以共用的
  - 4.为什么可以跨域使用 CSS、JS 和图片等？
    - 同源策略限制的是数据访问，我们引用 CSS、JS 和图片的时候，其实并不知道其内容，我们只是在引用

### 2）为什么会有同源策略

- 为了保护用户的隐私，浏览器设置了严格的同源策略

- 之所以会出现这个问题，其根源就在于无法区分发送者

### 3）同源策略的“开放”

- 嵌入第三方资源

- 可以通过一些标签引用非同源的资源

  ```html
  <link href="XXX" />
  <!-- 引用非同源CDN资源 -->
  <script src="http://cdn.xxx.xxx/xxx.js"></script>
  <!-- 引用非同源图片资源 -->
  <image src="http://xxx.xxx.xxx/xxx.png" />
  ```

### 4）同源限制

- cookie、localStorage、IndexDB 无法读取

- DOM 和 js 对象无法获取

- ajax 请求无法发送

## 2.跨域

- 跨域，即浏览器试图执行其他网站的脚本。但是由于同源策略的限制，导致我们无法实现跨域

## 3.跨域资源共享（CORS）

### 1）定义

- 允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。

### 2）两种请求

- CORS 跨域分为两种请求，一种是简单请求，另外一种就是复杂请求

### 3）简单请求

- 请求方式为`HEAD`、`POST` 或者 `GET`
- http 头信息不超出以下字段：Accept、Accept-Language 、 Content-Language、 Last-Event-ID、 Content-Type(限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain)

**1.浏览器端**

- 浏览器会为其添加一个 Origin 的头，其包含页面的源信息（协议、域名和端口）

  ```js
  Origin: http://domain.com
  ```

**2.服务端**

- 若服务器认为该请求可接受，就在 Access-Control-Allow-Origin 头部中回发相同的源信息

  - 设置为`*`，表示接受任意域名的请求（集成环境使用）

  - 1.手动设置

    ```js
    // Node.js后台配置(express框架)
    app.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
      res.header('X-Powered-By', ' 3.2.1');
      // 这段仅仅为了方便返回json而已
      res.header('Content-Type', 'application/json;charset=utf-8');
      if (req.method == 'OPTIONS') {
        // 让options请求快速返回
        res.sendStatus(200);
      } else {
        next();
      }
    });
    ```

  - 2.使用 cors 模块

    ```js
    const cors = require('koa2-cors');

    app.use(cors());
    ```

### 4）复杂请求

- 不满足上述条件的请求就是复杂请求
  - 1.比如请求的方法是 `PUT` 或 `DELETE`，或者 `Content-Type` 字段的类型是 `application/json`
  - 2.复杂请求首先会发起一个`预检请求`，该请求是 `option` 方法的，通过该请求来知道服务端是否允许跨域请求
  - 3.服务器收到预检请求之后，检查了 Origin、Access-Control-Request-Method 和 Access-Control-Request-Headers 字段以后，确认允许跨源请求，才会做出相应的回应

### 5）CORS 存在的问题

- `不支持`IE8/9，如果要在 IE8/9 使用 CORS 跨域需要使用 XDomainRequest 对象来支持 CORS

## 4.JSONP 跨域

### 1）定义

- jsonp： JSON With Padding（填充式 JSON 或参数式 JSON）

- 请求一个 JS 文件，这个 JS 文件会执行一个回调，回调里面就有我们需要的数据

### 2）原理

- 动态创建`<script>`标签，利用`<script>`的 src 属性不受同源策略约束来跨域获取数据

### 3）优点

- 兼容 ie
- 可以跨域

### 4）缺点

- 由于是 script 标签，所以读不到 ajax 那么精确的状态，`不知道状态码`是什么，也`不知道响应头`是什么，它`只知道成功和失败`。
- `不支持 post`（因为是 script 标签，所以`只支持 get 请求`）

### 5）实现

- JSONP 由两部分组成：`回调函数` 和 `数据`

  - 回调函数是用来处理服务器端返回的数据，回调函数的名字一般是在请求中指定的
  - 而数据就是我们需要获取的数据，也就是服务器端的数据

  ```js
  const script = document.createElement('script');

  script.src = 'http://www.wang.cn/login?username=wang&callback=callback';

  document.body.appendChild(script);

  // 回调的名字是可以随机生成的的一个随机数，我们把这个名字当成 callback 的参数传给后台，后台会把这个函数再次返回给我们并执行
  function callback(res) {
    console.log(res);
  }
  ```

## 5.webpack 解决跨域

- 使用代理

### 1）使用

- 在 webpack 的 devServer 中配置 proxy

```js
const webpackConfig = {
  devServer: {
    proxy: {
      // 重写的方式，把请求代理到express服务器上
      '/api': {
        target: 'http://localhost:3000',
        // 如果不希望传递/api，则需要重写路径：
        pathRewrite: { '/api': '' }, // 把/api 替换为空
        // 默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为
        changeOrigin: true,
      },
    },
  },
};
```

### 2）webpack 解决跨域的原理

- 实际上代理是使用了是利用 http-proxy-middleware 这个插件完成的

```js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://www.example.org',
    changeOrigin: true,
  }),
);
app.listen(3000);
```

### 3）http-proxy-middleware 做了什么

- 本地起了一个 node 代理服务器（var httpProxy = require('http-proxy')），通过代理服务器去请求目标服务器，然后返回请求结果

- 由于浏览器请求的是本地路径，所以不会有跨域问题

### 4）代理服务器 http-proxy

- 也就是 node-http-proxy 是一个 HTTP 可编程的，支持 websockets 的代理库。它适合于实现诸如反向代理和负载均衡之类的组件

```js
var httpProxy = require('http-proxy');
// 创建代理服务器
var proxy = httpProxy.createProxyServer({});
var proxyEvents = [
  'error',
  'proxyReq',
  'proxyReqWs',
  'proxyRes',
  'open',
  'close',
];
// 注册代理服务器事件
proxyEvents.forEach((eventName) => {
  proxy.on(eventName, handlers[eventName]);
});
```

## 6.服务端是自己写的，就可以把前端代码启动到服务端上来解决跨域

- 服务端本地 node 搭建

```js
// server.js
const express = require('express');
const app = express();
const webpack = require('webpack');

const middle = require('webpack-dev-middleware'); // 引入这个
const config = require('./webpack.config.js'); // 配置文件
const compiler = webpack(config);

app.use(middle(compiler));

app.get('/user', (req, res) => {
  res.json({ name: '小白2' });
});
app.listen(3001);
```

## 7.Node 中间件代理(两次跨域)

- node 正向代理：利用服务端不跨域的特性

  - /api -> 同域 node 服务 -> /api -> 前端

- 原理：同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略

  - 接受客户端请求
  - 将请求 转发给服务器
  - 拿到服务器 响应 数据
  - 将 响应 转发给客户端

## 8.nginx 反向代理

- 使用 proxy_pass 属性配置

  - /api -> 通过代理转接至/same/api

### 1）原理

- 类似于 Node 中间件代理，需要搭建一个中转 nginx 服务器，用于转发请求
  - 使用 nginx 反向代理实现跨域，是`最简单的跨域方式`
- 只需要修改 nginx 的配置即可解决跨域问题，支持所有浏览器，支持 session，不需要修改任何代码，并且不会影响服务器性能

### 2）实现思路

- 通过 nginx 配置一个代理服务器（域名与 domain1 相同，端口不同）做跳板机，反向代理访问 domain2 接口，并且可以顺便修改 cookie 中 domain 信息，方便当前域 cookie 写入，实现跨域

  ```js
  // proxy服务器
  server {
      listen       81;
      server_name  www.domain1.com;
      location / {
          proxy_pass   http://www.domain2.com:8080;  #反向代理
          proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
          index  index.html index.htm;

          # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
          add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
          add_header Access-Control-Allow-Credentials true;
      }
  }
  ```

- 通过命令行 nginx -s reload 启动 nginx

## 9.postMessage

- postMessage 是 HTML5 XMLHttpRequest Level 2 中的 API，且是为数不多可以跨域操作的 window 属性之一，它可用于解决以下方面的问题：

  - 页面和其打开的新窗口的数据传递
  - 多窗口之间消息传递
  - 页面与嵌套的 iframe 消息传递
  - 上面三个场景的跨域数据传递

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

## 10.websocket

- Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案

- WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据

- Socket.io

```html
<!-- socket.html -->
<script>
  let socket = new WebSocket('ws://localhost:3000');
  socket.onopen = function () {
    socket.send('客户端发送请求'); // 向服务器发送数据
  };
  socket.onmessage = function (e) {
    console.log(e.data); // 接收服务器返回的数据
  };
</script>
```

```js
// server.js
let express = require('express');
let app = express();
let WebSocket = require('ws'); // 记得安装ws
let wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', function (ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('服务端回复请求');
  });
});
```

## 11.window.name + iframe

- name 值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）

```html
<!-- a.html(http://localhost:3000/b.html) -->
<iframe
  src="http://localhost:4000/c.html"
  frameborder="0"
  onload="load()"
  id="iframe"
></iframe>
<script>
  let first = true;
  // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
  function load() {
    if (first) {
      // 第1次onload(跨域页)成功后，切换到同域代理页面
      let iframe = document.getElementById('iframe');
      iframe.src = 'http://localhost:3000/b.html';
      first = false;
    } else {
      // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
      console.log(iframe.contentWindow.name);
    }
  }
</script>
```

- b.html 为中间代理页，与 a.html 同域，内容为空

```html
<!-- c.html(http://localhost:4000/c.html) -->
<script>
  window.name = '我不爱你';
</script>
```

## 12.location.hash + iframe

- a.html 欲与 c.html 跨域相互通信，通过中间页 b.html 来实现。 三个页面，不同域之间利用 iframe 的 location.hash 传值，相同域之间直接 js 访问来通信

## 13.document.domain + iframe

- 该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。 只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域

- 实现原理：两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域

```html
<!-- a.html -->
<body>
  <iframe
    src="http://b.zf1.cn:3000/b.html"
    frameborder="0"
    onload="load()"
    id="frame"
  ></iframe>
  <script>
    document.domain = 'zf1.cn';
    function load() {
      console.log(frame.contentWindow.a);
    }
  </script>
</body>
```

```html
<!-- b.html -->
<body>
  <script>
    document.domain = 'zf1.cn';
    var a = 100;
  </script>
</body>
```

## 14.总结

- 1.`CORS`支持所有类型的 HTTP 请求，是跨域 HTTP 请求的`根本解决方案`
- 2.`JSONP` 只支持 `GET` 请求，JSONP 的优势在于`支持老式浏览器`，以及可以向不支持 CORS 的网站请求数据
- 3.不管是 Node 中间件代理还是 `nginx` 反向代理，主要是通过`同源策略对服务器不加限制`
- 4.日常工作中，用得比较多的跨域方案是 cors 和 nginx 反向代理

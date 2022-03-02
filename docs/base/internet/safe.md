---
toc: menu
---

# 前端网络安全

## 1.XSS（Cross Site Script）- 跨站脚本攻击

### 1）定义

- 跨站脚本攻击

- 攻击者想尽一切办法将可以执行的代码注入到网页中

### 2）攻击方式-外在表现

**1.持久型**

- 评论区植入 js 代码（即可输入的地方）

- 持久型也就是攻击的`代码`被服务端`写入进数据库`中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击(在评论区输入一段代码，会被记录到数据库，下次访问评论列表时会被执行)

**2.非持久型**

- url 上拼接 js 代码

- 非持久型相比于前者危害就小的多了，一般通过修改 URL 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击

```html
<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>
```

### 3）攻击方式-技术角度

**1.存储型 Server：服务端存在数据库**

- 论坛发帖，商品评价，用户私信等这些用户保存数据的网站

- 攻击步骤：

  - 攻击者将恶意代码提交到目标网站的数据库中
  - 用户打开目标网站的时候，服务端将评论（恶意代码）从数据库中取出，拼接到 html 返回给浏览器
  - 用户浏览器收到 html 后，混在其中的恶意代码就会执行
  - 窃取用户数据，发放到攻击者网站

**2.反射型 Server：拼接在 url 上**

- 攻击者结合各种手段，诱导用户点击恶意 url，通过 url 传参数的功能，比如网站的搜索或跳转等。

- 攻击步骤：

  - 攻击者构造出自己的恶意 url
  - 直接执行可执行的恶意代码

**3.Dom 型 Browser**

- 取出和执行恶意代码的操作，由浏览器完成，属于前端 JavaScript ⾃身的安全漏洞，⽽其他两种 XSS 都属于服务端的安全漏洞。

- 攻击步骤：
  - 攻击者构造出特殊的 URL，其中包含恶意代码。
  - ⽤户打开带有恶意代码的 URL。
  - ⽤户浏览器接收到响应后解析执⾏，前端 JavaScript 取出 URL 中的恶意代码并执⾏。
  - 恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作

### 4）防御方式

- 主旨：防止攻击者提交恶意代码，防止浏览器执行恶意代码

**1.对数据进行严格的输入编码**

- 对于用户的输入应该是永远不信任的
- 最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义

- html 元素的编码、js 编码、css 编码、url 编码等；
- 避免拼接 html，eg：Vue/React 技术栈，避免使用 v-html/dangerouslyHtml

  ```js
  function escape(str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quto;');
    str = str.replace(/'/g, '&#39;');
    str = str.replace(/`/g, '&#96;');
    str = str.replace(/\//g, '&#x2F;');
    return str;
  }
  ```

**2.CSP(内容安全策略)**

- CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行

- 开启

  - 设置 HTTP Header 中的 Content-Security-Policy

    - default-src 'self'：所有内容均来⾃站点的同⼀个源（不包括其⼦域名）
    - default-src ‘self’ \*.trusted.com：允许内容来⾃信任的域名及其⼦域名 (域名不必须与 CSP 设置所在的域名相同)
    - default-src https://baidu.com：该服务器仅允许通过HTTPS⽅式并仅从lubai.com域名来访问⽂档

  - 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">

**3.输入验证**

- phone，url，电话号码，邮箱做校验判断

**4.开启浏览器的 XSS 防御**

- http only Cookie，禁止 js 读取 cookie 值，完成 xss 注入也无法窃取 cookie，eg：set-cookie: httponly

**5.验证码**

## 2.CSRF（Cross-Site request forgery）- 跨站请求伪造

### 1）定义

- 跨站请求伪造

### 2）原理

- 攻击者诱导受害者进⼊恶意⽹站，在第三⽅⽹站中，向被攻击⽹站发送跨站请求。利⽤受害者在被攻击⽹站已经获取的注册凭证，绕过后台的⽤户验证，达到冒充⽤户对被攻击的⽹站执⾏某项操作的⽬的

- 攻击者无法直接窃取到用户的信息（Cookie，Header，网站内容等），仅仅是冒用 Cookie 中的信息

### 3）攻击步骤

![image](images/base/5.png)

- 受害者登录 a.com，并且保留了登录凭证 cookie
- 攻击者诱导受害者访问 b.com
- b.com 向 a.com 发送请求，a.com/act=xx，浏览器就会直接带上 a.com 的 cookie
- a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求
- a.com 以受害者的名义执行了 act=xx
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作

### 4）攻击类型

- `GET` 类型的 CSRF：如在⻚⾯的某个 img 中发起⼀个 get 请求

  - 在受害者访问含有这个 img 的页面后，浏览器会自动向`http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker`发出一次 HTTP 请求。 bank.example 就会收到包含受害者登录信息的一次跨域请求

    ```html
    <img src="http://bank.example/withdraw?amount=10000&for=hacker" />
    ```

- `POST` 类型的 CSRF：通常使用的是一个自动提交的表单到恶意⽹站

  - 访问该页面后，表单会自动提交，相当于模拟用户完成了一次 POST 操作

  - POST 类型的攻击通常比 GET 要求更加严格一点，但仍并不复杂。任何个人网站、博客，被黑客上传页面的网站都有可能是发起攻击的来源，后端接口不能将安全寄托在仅允许 POST 上面

    ```html
    <form action="http://bank.example/withdraw" method="POST">
      <input type="hidden" name="account" value="xiaoming" />
      <input type="hidden" name="amount" value="10000" />
      <input type="hidden" name="for" value="hacker" />
    </form>
    <script>
      document.forms[0].submit();
    </script>
    ```

### 5）防御方式

- Get 请求不对数据进行修改
- 不让第三方网站访问到用户 Cookie
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 Token

- CSRF 一般发生在第三方域名，攻击者无法获取到 cookie 信息，只是利用浏览器机制使用 cookie

- 1.同源策略

  - 通过检查 request header 中的 origin、referer、host 等，判断请求站点是否是自己允许的站点。
    - host：任何请求携带，域名和端口号
    - origin：一般存在于跨域请求中，协议和域名，和 Access-Control-Allow-Origin 一起存在
    - referer：告知服务器原始 url，其用于所有类型的请求，并且包括：协议+域名+查询参数
  - Referrer-Policy：可设置携带 referer 头，eg：Referrer-Policy: no-referrer ｜ same-origin 等

- 2.Cookie SameSite

  - Strict：完全禁止第三方 cookie，⽐如 a.com 的⻚⾯中访问 b.com 的资源，那么 a.com 中的 cookie 不会被发送到 b.com 服务器，只有从 b.com 的站点去请求 b.com 的资源，才会带上这些 Cookie
  - Lax：在跨站点的情况下，从第三⽅站点链接打开和从第三⽅站点提交 Get ⽅式的表单这两种⽅式都会携带 Cookie。但如果在第三⽅站点中使⽤ POST ⽅法或者通过 img、Iframe 等标签加载的 URL，这些场景都不会携带 Cookie
  - None：任何情况下都会发送 Cookie 数据

  - 所以，我们可以将 SameSite 设置为 `Strict` 或 `Lax` 来解决 Cookie 问题

- 3.CSRF `Token`：提交请求时携带额外信息
  - 服务器下发一个随机 Token，每次发起请求时将 Token 携带上，服务器验证 Token 是否有效

## 3.点击劫持

### 1）定义

- 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击

### 2）防御方式

**1.X-FRAME-OPTIONS**

- `X-FRAME-OPTIONS` 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。
  - DENY，表示页面不允许通过 iframe 的方式展示
  - SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示
  - ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示

**2.JS 防御**

```html
<head>
  <style id="click-jack">
    html {
      display: none !important;
    }
  </style>
</head>
<body>
  <script>
    if (self == top) {
      var style = document.getElementById('click-jack');
      document.body.removeChild(style);
    } else {
      top.location = self.location;
    }
  </script>
</body>
```

## 4.中间人攻击

- 中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息

- 使用公共的 Wi-Fi，可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了。

- 防御：只需要增加一个安全通道来传输信息。HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击

---
toc: menu
---

# 前端监控与埋点方案

- 目的：前端监控

- 实现方式：前端埋点

## 1.前端监控

- 前端监控可以分为三类：数据监控、性能监控和异常监控

### 1）数据监控

- 监听用户的行为：

  - PV/UV:

    - PV(page view)：即页面浏览量或点击量；
    - UV(user view)：指访问某个站点或点击某条新闻的不同 IP 地址的人数

  - 用户在每一个页面的停留时间

  - 用户通过什么入口来访问该网页

  - 用户在相应的页面中触发的行为

- 数据监控的意义：

  - 统计用户来源的渠道：可以促进产品的推广

  - 统计用户在每一个页面停留的时间：可以针对停留较长的页面，增加广告推送等

### 2）性能监控

- 监听前端的性能，主要包括监听网页或者说产品在用户端的体验

- 常见的性能监控项包括：

  - 不同用户，不同机型和不同系统下的首屏加载时间
  - 白屏时间
  - http 等请求的响应时间
  - 静态资源整体下载时间
  - 页面渲染时间
  - 页面交互动画完成时间

- 性能监控的意义：

  - 展示前端性能的好坏，根据性能监测的结果可以进一步的去优化前端性能，比如兼容低版本浏览器的动画效果，加快首屏加载等

**1.Performance**

```js
//拿到Performance并且初始化一些参数
let timing = performance.timing,
  start = timing.navigationStart,
  dnsTime = 0,
  tcpTime = 0,
  firstPaintTime = 0,
  domRenderTime = 0,
  loadTime = 0;
//根据提供的api和属性，拿到对应的时间
dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
tcpTime = timing.connectEnd - timing.connectStart;
firstPaintTime = timing.responseStart - start;
domRenderTime = timing.domContentLoadedEventEnd - start;
loadTime = timing.loadEventEnd - start;

console.log(
  'DNS解析时间:',
  dnsTime,
  '\nTCP建立时间:',
  tcpTime,
  '\n首屏时间:',
  firstPaintTime,
  '\ndom渲染完成时间:',
  domRenderTime,
  '\n页面onload时间:',
  loadTime,
);
```

### 3）异常监控

- 前端代码在执行过程中发生异常

  - JS 代码异常：运行错误
  - Promise 异常
  - 静态资源加载异常
  - api 请求异常
  - 跨域 script 异常

**1.JS 执行异常**

- try-catch：捕捉不到具体语法错误和异步错误，所以推荐用在可预见情况下的错误监控

- window.onerror：捕获不到资源加载异常或者接口异常

- 推荐两者结合的方式：

  ```js
  window.onerror = function (msg, url, row, col, error) {
    console.table({ msg, url, row, col, error: error.stack });
    const errorMsg = {
      type: 'javascript',
      // msg错误消息，error是错误对象，这里拿的是error.stack(异常信息)
      msg: error.stack || msg,
      // 发生错误的行数
      row,
      // 列数，也就是第几个字符
      col,
      // 发生错误的页面地址
      url,
      // 发生错误的时间
      time: Date.now(),
    };

    // 然后可以把这个 errorMsg 存到一个数组里，统一上报
    // 也可以直接上报
    Axios.post({ 'https://xxxx', errorMsg })

    // 如果return true，错误就不会抛到控制台
  };
  ```

- 上报的方式

  - 1.ajax，存在的问题：可能会存在跨域

  - 2.用 Image 对象：图片请求没有跨域

    - 原理：get 请求`1*1`像素的 git 图片：体积最小、能完成完整的 http 请求、比 xmlHttpRequest 对象发送 get 请求性能好、跨域好

      ```js
      const img = new Image(1, 1);
      const src = `后端脚本地址?args=${encodeURIComponent(args)}`;
      img.src = src;
      ```

**2.资源加载异常**

- 使用 addEventListener('error', callback, true) 在捕获阶段捕捉资源加载错误信息，然后上报服务器

```js
addEventListener(
  'error',
  (e) => {
    const targe = e.target;
    if (target != window) {
      //这里收集错误信息
      let errorMsg = {
        type: target.localName, // 错误来源名称。比如图片这里就是'img'
        url: target.src || target.href, //错误来源的链接
        // .... 还需要其他信息可以自己补充
      };
      // 把这个 errorMsg 存到一个数组里，然后统一上报
      // 或者直接上报
      Axios.post({ 'https://xxxx', errorMsg })
    }
  },
  true,
);
```

**3.Promise 异常**

- 使用 addeventListener('unhandledrejection',callback)捕获 Promise 错误。不过捕捉不到行数，触发时间在被 reject 但没有 reject 处理的时候，可能发生在 window 下，也可能在 Worker 中

```js
window.addEventListener('unhandledrejection', (e) => {
  console.log(e);
  let errorMsg = {
    type: 'promise',
    msg: e.reason.stack || e.reason,
    // .....
  };
  Axios.post({ 'https://xxxx', errorMsg })

  // 如果return true，错误就不会抛到控制台
});
new Promise(() => {
  //
});
```

**4.vue 框架**

- 打开所有日志和警告：Vue.config.silent = true
- errorHandler 函数：指定组件的渲染和观察期间未捕获错误的处理函数

**5.React 异常**

- 生命周期中的 getDerivedStateFromError 和 componentDidCatch

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // error 错误信息
    // info.componentStack 错误组件位置
  }
}
```

## 2.前端容灾

- 前端容灾指的因为各种原因后端接口挂了(比如服务器断电断网等等)，前端依然能保证页面信息能完整展示

### 1）LocalStorage

- 在接口正常返回的时候把数据都存到 LocalStorage ，可以把接口路径作为 key，返回的数据作为 value

- 然后之次再请求，只要请求失败，就读取 LocalStorage，把上次的数据拿出来展示，并上报错误信息，以获得缓冲时间

### 2）CDN

- 同时，每次更新都要备份一份静态数据放到 CDN

- 在接口请求失败的时候，并且 LocalStorage 也没有数据的情况下，就去 CDN 摘取备份的静态数据

### 3）Service Worker

- 假如不只是接口数据，整个 html 都想存起来，就可以使用 Service Worker 做离线存储

- 利用 Service Worker 的请求拦截，不管是存接口数据，还是存页面静态资源文件都可以

```js
// 拦截所有请求事件 缓存中有请求的数据就直接用缓存，否则去请求数据
self.addEventListener('fetch', (e) => {
  // 查找request中被缓存命中的response
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      console.log('fetch source');
    }),
  );
});
```

- 产生的问题：整个网站就完全可以离线运行了，但是问题也很明显，就是时效性较高的页面可能会有数据无法同步更新的问题

## 3.埋点方案

- 目前现有的埋点方案有代码埋点(命令式埋点、声明式埋点)、可视化埋点、无痕埋点

```js
// 页面加载时发送埋点请求
$(document).ready(function () {
  // ... 这里存在一些业务逻辑
  sendRequest(params);
});
// 按钮点击时发送埋点请求
$('button').click(function () {
  //  这里存在一些业务逻辑
  sendRequest(params);
});
// 通过伪装成 Image 对象，传递给后端，防止跨域
const img = new Image(1, 1);
const src = `http://后端接口地址?args=${encodeURIComponent(args)}`;
img.src = src;
//css实现的埋点
.link:active::after{
  content: url("http://www.example.com?action=yourdata");
}
<a class="link">点击我，会发埋点数据</a>;
//data自定义属性，rangjs去拿到属性绑定事件，实现埋点
//<button data-mydata="{key:'uber_comt_share_ck', act: 'click',msg:{}}">打车</button>
```

### 1）命令式埋点

- 是用比较常见的方式，在用户产生行为的地方使用 js 方法进行数据上报，优点是埋点方式比较简单，缺点是与业务耦合度较高

### 2）声明式埋点(常用)

- 是在具体 DOM 元素上进行数据绑定，只需组件开发人员在 sdk 上制定埋点方案，业务开发人员设置数据即可，优点是埋点代码与具体的交互和业务逻辑解耦

- vue 中实现：使用自定义指令

### 3）可视化埋点

- 是通过可视化工具配置埋点，需要另外配套一个平台控制埋点的埋入，优点是自动生成埋点代码嵌入到页面中，减轻业务开发人员的埋点负担，目前做得好得例如 `Mixpanel`

### 4）无埋点

- 是前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据，优点是完全无需业务参与，完全与业务解耦，目前比较流行的例如 `GrowingIO`

- 1.实现：监听所有事件，上报所有点击事件以及对应的事件所在的元素，最后通过后台去分析数据

- 2.监听 window 事件，获取元素唯一标识 id（getXPath）以及位置

```html
<script>
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement('script');
    hm.src =
      'https://hm.baidu.com/hm.js?<%= htmlWebpackPlugin.options.baiduCode %>';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
</script>
```

```js
window.addEventListener(
  'click',
  function (event) {
    let e = window.event || event;
    let target = e.srcElement || e.target;
  },
  false,
);
```

### 5）自动埋点

- 基于 babel 实现自动函数插桩

- 函数插桩是在函数中插入一段逻辑但不影响函数原本逻辑，埋点就是一种常见的函数插桩，完全可以用 babel 来自动做

- 实现思路分为引入 tracker 模块和函数插桩两部分：

  - 引入 tracker 模块需要判断 ImportDeclaration 是否包含了 tracker 模块，没有的话就用 @babel/helper-module-import 来引入

  - 函数插桩就是在函数体开始插入一段代码，如果没有函数体，需要包装一层，并且处理下返回值

## 4.埋点上报

- 1.实时上报：调用 report 之后立即发送请求

- 2.延时上报：sdk 内部统一收集业务方要上报的信息，依拖于防抖或者在浏览器空闲时间或者在页面卸载前统一上送，上报失败做补偿

- 3.埋点补偿

## 5.埋点系统

- 原理：get 请求 1\*1 像素的 git 图片：体积最小、能完成完整的 http 请求、比 xmlHttpRequest 对象发送 get 请求性能好、跨域好

- 埋点数据：埋点标识信息、设备信息、用户信息

- 实时上报

- 使用非侵入式埋点代码埋点：h5 使用装饰器、小程序重写 page 和 app 对象，对生命周期及相关事件添加埋点 hook。

- 后端：pv 服务器记录 web 日志，保存为非机构化数据

  - bdp 通过 ftp 方式每日获取 pv 日志，进行结构化处理，然后入湖
  - pv 服务器扫描 pv 日志通过 kafka 异步消息推送至 bdsp 并准实时入湖

- 反哺：入湖数据分析，客户画像描述。

- 扩展：

  - 异步上报：防抖、上报失败补偿机制

  - 无埋点：使用 sdk 封装好逻辑，业务侧使用，监听页面所有事件，上报点击事件、事件所在元素，发送后台分析

    - 监听所有事件：捕获机制，监听 window 元素
    - 获取元素唯一表示：xPath
    - 获取元素位置：offsetX、offsetY
    - 小程序和 H5 两端代码设计，采用设计模式基类复用，实现不同。

  - 数据采集 baseLogger 基类：

    - 小程序 MPlogger：小程序 api
      - getCurrentPages
      - wx.getSystemInfoSync
      - wx.onError
      - wx.onUnhandledRejection
    - H5 端 H5Logger：浏览器 API
      - window.location.href
      - window.navigator.userAgent
      - Window.addEventListener

  - 用户访问页面路径

    - H5 端：根组件 watch route
    - 小程序：onLoad Mixin

  - 使用 axio 库全局监听请求，记录日志进行分析

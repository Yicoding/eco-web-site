---
toc: menu
---

# PWA

- PWA（Progressive Web App）渐进式 web app，使用多种技术来增强 web app 的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。

## 1.解决 web 的三大问题

- 没有一级入口：只能通过浏览器输入 url 访问
- 不能离线访问：无离线缓冲机制
- 没有消息推送功能

## 2.manifest.json

- 一级入口问题：通过引入 manifest.json 解决，主页通过 link 标签引入即可

```json
// pwa-manifest.html
<link rel="manifest" href="/manifest.json">

// manifest.json
{
  //web app名称
 "name": "PWA Demo",
 "short_name": "PWA",
  //显示模式：fullscreen全屏模式、standalone独⽴应⽤模式
  //minimal-ui比standalone多出地址栏、browser浏览器模式
 "display": "standalone",
  //应用描述
 "description": "pwa demo description",
  //指定了⽤户打开该Web App时加载的URL
 "start_url": "/pwa-manifest.html",
  //指定桌面图标
 "icons": [{
     //图标路径，相对于manifest.json
     "src": "/icon/logo-144.png",
     "sizes": "144x144",  //图标大小
     "type": "image/png"  //图标类型
  }],
 //开屏界面默认背景
 "background_color": "#aaa",
 //应用程序默认背景色
 "theme_color": "#aaa"
}
```

## 3.service worker

- 解决离线访问问题，本质为浏览器和后端服务的代理中间件，兼容性不佳，百度使用 local storage 模拟功能

- 特点：
  - 不能访问／操作 dom
  - 会⾃动休眠，不会随浏览器关闭所失效(必须⼿动卸载)
  - 离线缓存内容开发者可控
  - 必须在 https 或者 localhost 下使⽤
  - 所有的 api 都基于 promise
- 原理：浏览器和后端服务之间的中间件
- 生命周期
  - installing：sw 注册之后，表示开始安装，会触发 install 事件
  - installed
  - activating：触发 activate 事件
  - activated
  - redundant：冗余卸载时触发
- 事件
  - install
    - installing 生命周期函数中触发
    - event.waitUntil(promise)，等待 promise resolved 后进入下一个生命周期 installed
    - self.skipWaiting 可跳过 installed 生命周期，直接进入 activating 生命周期
  - activate
    - activating 生命周期内被触发
    - event.waitUntil(promise)，等待 promise resolved 后进入下一个生命周期 activated
    - self.clients.claim()，执行该方法表示取得页面控制权，这样打开页面就会使用新版本的缓存
  - fetch：监听数据获取 fetch 方法
  - push：监听推送消息

```js
// ***** pwa-demo.html *****
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pwa manifest</title>
  <!-- 引入manifest.json文件 -->
  <link rel="manifest" href="/manifest.json">
</head>
<body>
  <div>pwa manifest 1.01</div>
  <script src="./sw-cache.js"></script>
</body>
</html>

//***** sw-cache.js *****
//serviceworker挂载在navigator下
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('service worker 注册成功')
  })
	//缓存有更新，重新加载页面
  let refreshing = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) {
      return
    }
    refreshing = true;
    window.location.reload();
  });
}

//***** sw.js *****
//pwa全局对象专属对象 self、caches
var cacheName = '1.01'; // 缓存的key
var cacheFiles = [
    './pwa-manifest.html',
    './sw-cache.js',
    './manifest.json',
    './icon/logo-144-144.png',
];

// 监听install事件
self.addEventListener('install', function (e) {
  console.log('Service Worker 状态： install');
  self.skipWaiting()
  const cacheOpenPromise = caches.open(cacheName).then(function (cache) {
    console.log(cache)
    return cache.addAll(cacheFiles);
  });
  e.waitUntil(cacheOpenPromise); // 等待promise resolved后，会进入下一个生命周期 installed
});

// 监听fetch事件，返回fetch数据缓存
self.addEventListener('fetch', function (e) {
  // 如果有cache则直接返回，否则通过fetch请求
  console.log(e.request)
  e.respondWith(
      caches.match(e.request).then(function (cache) {
          return cache || fetch(e.request);
      }).catch(function (err) {
          console.log(err);
          return fetch(e.request);
      })
  );
});

// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener('activate', function (e) {
  console.log('Service Worker 状态： activate');
  const cachePromise = caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
          if (key !== cacheName) {
              return caches.delete(key);
          }
      }));
  })
  e.waitUntil(cachePromise);
  return self.clients.claim();// 激活当前client
});
```

## 4.Push

- 解决通知问题：网站内通知，当前网站收到本网站的消息

- 浏览器和应用服务器间，添加 Push Service 中间代理层，用于消息订阅和推送，核⼼实现流程：

  - Subscribe: 向 Push Service 发起订阅，获取 PushSubscription

  - Monitor: 实现浏览器和 PushService 通信 （⽤户离线，PushSevice 会维护消息列表）

  - Distribute Push Resource: 将 PushSubscription 交给服务器，⽤于通信

  - Push Message: 服务端将消息推送给 Push Service， Push Service 推送给对应的客户端

- 兼容性： Chrome 所依赖的 FCM 服务在国内是⽆法访问的，⽽ Firefox 的服务在国内可以正常使⽤。

## 5.Notification

- 解决消息通知问题：网站外通知，百度收到淘宝发送的通知

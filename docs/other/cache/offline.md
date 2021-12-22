---
toc: menu
---

# 离线存储 Service Worker

- Service Worker 是运行 js 主线程之外的，在浏览器背后的独立线程，自然也无法访问 DOM，它相当于一个代理服务器，可以拦截用户发出的请求，修改请求或者直接向用户发出回应，不用联系服务器。比如加载 JS 和图片，这就让我们可以在离线的情况下使用网络应用

- 一般用于离线缓存(提高首屏加载速度)、消息推送、网络代理等功能。使用 Service Worker 的话必须使用 https 协议，因为 Service Worker 中涉及到请求拦截，需要 https 保障安全

- 用 Service Worker 来实现缓存分三步：

  - 一是注册
  - 然后监听 install 事件后就可以缓存文件
  - 下次再访问的时候就可以通过拦截请求的方式直接返回缓存的数据

```js
// index.js 注册
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('sw.js')
    .then((registration) => {
      console.log('service worker 注册成功');
    })
    .catch((err) => {
      console.log('servcie worker 注册失败');
    });
}
// sw.js  监听 `install` 事件，回调中缓存所需文件
self.addEventListener('install', (e) => {
  // 打开指定的缓存文件名
  e.waitUntil(
    caches.open('my-cache').then((cache) => {
      // 添加需要缓存的文件
      return cache.addAll(['./index.html', './index.css']);
    }),
  );
});
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

---
toc: menu
---

# 本地存储

- 浏览器存储型缓存包含了 Cookie、Web Storage、IndexedDB

## 1. Cookie

### 1）特点

- 最早被提出来的本地存储方式，在每一次 http 请求携带 Cookie，可以判断多个请求是不是同一个用户发起的：
  - 有安全问题，如果被拦截，就可以获得 Session 所有信息，然后将 Cookie 转发就能达到目的
  - 每个域名下的 Cookie 不能超过 20 个，总大小不能超过 4kb
  - Cookie 在请求新页面的时候都会被发送过去
  - Cookie 创建成功名称就不能修改
  - 跨域名不能共享 Cookie

### 2）如果要跨域名共享 Cookie 有两个方法

- 用 Nginx 反向代理
- 在一个站点登录之后，往其他网站写 Cookie。服务端的 Session 存储到一个节点，Cookie 存储 SessionId

### 3）Cookie 的使用场景

- 最常见的就是 Cookie 和 Session 结合使用，将 SessionId 存储到 Cookie 中，每次请求都会带上这个 SessionId 这样服务端就知道是谁发起的请求

- 可以用来统计页面的点击次数

### 4）Cookie 都有哪些字段

| 字段(单位秒)       | 说明                                                                                                        |
| :----------------- | :---------------------------------------------------------------------------------------------------------- |
| `Name、Size`       | 名称、大小                                                                                                  |
| `Value`            | 保存用户登录状态，应该将该值加密，不能使用明文                                                              |
| `Path`             | 可以访问此 Cookie 的路径。比如 juejin.cn/editor ，path 是/editor，只有/editor 这个路径下的才可以读取 Cookie |
| `httpOnly`         | 表示禁止通过 JS 访问 Cookie，减少 XSS 攻击                                                                  |
| `Secure`           | 只能在 https 请求中携带                                                                                     |
| `SameSite`         | 规定浏览器不能在跨域请求中携带 Cookie 减少 CSRF 攻击                                                        |
| `Domain`           | 域名，跨域或者 Cookie 的白名单，允许一个子域获取或操作父域的 Cookie，实现单点登录的话会非常有用             |
| `Expires/Max-size` | 指定时间或秒数的过期时间，没设置的话就和 Session 一样关闭浏览器就失效                                       |

### 5）使用方式

- 在 Cookie 存储 API 方面，浏览器提供的原始 API 使用起来也不是特别方便，比如：

  ```js
  // 存储 Cookie
  document.cookie = 'name=juejin; domain=juejin.cn';
  // 读取 Cookie
  // 只能通过 document.cookie 读取所有 Cookie 并进行字符串截取，非常不便
  // 删除 Cookie
  let date = new Date();
  date.setTime(date.getTime() - 10000); // 设置一个过期时间
  document.cookie = `name=test; domain=juejin.cn; expires=${date.toGMTString()}`;
  ```

- 如此操作起来会编写大量重复糟心的代码，因此封装 Cookie 的增删改查操作十分必要

- 推荐使用`js-cookie`

  ```js
  import Cookies from 'js-cookie';
  // 存储 Cookie
  Cookies.set('name', 'juejin', { domain: 'juejin.cn' });
  // 读取 Cookie
  Cookies.get('name');
  // 删除 Cookie
  Cookies.remove('name');
  ```

## 2.LocaStorage

- 将信息存储到本地

  - 它的存储大小比 Cookie 大得多，有 5M，而且是永久存储，除非主动清理，不然会一直存在

- 属于持久性缓存

- 受到同源策略限制，就是端口、协议、主机地址有任何一样不同都不能访问，还有在浏览器设为隐私模式下，也不能读取 LocalStorage

- 使用场景:
  - 存储网站主题、存储用户信息等
  - 存数数据量多或者不怎么改变的数据都可以用它

## 3.SessionStorage

- 用于临时保存同一窗口或标签页的数据，刷新页面时不会删除，但是关闭窗口或标签页之后就会删除这些数据

- SessionStorage 和 LocalStorage 一样是在本地存储，而且都不能被爬虫爬取，并且都有同源策略的限制，只不过 SessionStorage 更加严格，只有在同一浏览器的同一窗口下才能共享

- 使用场景:
  - 一般是具有时效性的，比如存储一些网站的游客登录信息，还有临时的浏览记录等

## 4.indexDB

- 是浏览器本地数据库，有以下特点:

  - `键值对储存`：内部用对象仓库存放数据，所有类型的数据都可以直接存入，包括 js 对象，以键值对的形式保存，每条数据都有对应的主键，主键是唯一的

  - `异步`：indexDB 操作时用户依然可能进行其他操作，异步设计是为了防止大量数据的读写，拖慢网页的表现

  - `支持事务`：比如说修改整个表的数据，修改了一半的时候报了个错，这时候会全部恢复到没修改之关的状态，不存在修改一半成功的情况

  - `同源限制`：每一个数据库应创建它对应的域名，网页只能访问自身域名下的数据库

  - `存储空间大`：一般来说不少于 250MB，甚至没有上限

  - `支持二进制存储`：比如 ArrayBuffer 对象和 Blob 对象

- IndexedDB 是一个大规模的 NoSQL 存储系统

## 使用

### 1）判断是否支持

```js
if (!('indexedDB' in window)) {
  console.log('浏览器不支持 indexedDB');
  return;
}
```

### 2）创建数据库

```js
request.onupgradeneeded = function (e) {
  idb = e.target.result;
  console.log('running onupgradeneeded');
  // 新建对象表时，先判断该表是否存在
  if (!idb.objectStoreNames.contains('store')) {
    // 创建名为 store 的表，以 id 为主键
    let storeOS = idb.createObjectStore('store', { keyPath: 'id' });
  }
};
```

### 3）打开数据库

```js
let idb;

// 打开名为 sql，版本号为 1 的数据库，如果不存在则自动创建
let request = window.indexedDB.open('sql', 1);

// 错误回调
request.onerror = function (event) {
  console.log('打开数据库失败');
};

// 成功回调
request.onsuccess = function (event) {
  idb = request.result;
  console.log('打开数据库成功');
};
```

### 4）新增数据

```js
// 新增方法
function addItem(item) {
  // 新增时必须指定表名和操作模式
  let transaction = idb.transaction(['store'], 'readwrite');
  // 获取表对象
  let store = transaction.objectStore('store');
  // 调用 add 方法新增数据
  store.add(item);
}
let data = {
  id: 1, // 主键 id
  name: 'test',
  age: '18',
};
addItem(data); // 调用新增方法
```

### 5）查询数据

```js
// 读取方法
function readItem(id) {
  // 创建事务，指定表名
  let transaction = idb.transaction(['store']);
  // 获取表对象
  let store = transaction.objectStore('store');
  // 调用 get 方法获取数据
  let requestStore = store.get(id);
  requestStore.onsuccess = function () {
    if (requestStore.result) {
      console.log(requestStore.result); // { id: 1, name: 'test', age: '18' }
    }
  };
}
readItem(1); // 获取主键 id 为 1 的数据
```

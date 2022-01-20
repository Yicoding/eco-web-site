---
toc: menu
---

# ajax

## 1.AJAX 的优点

- 可以无需刷新页面而与服务器端进行通信

- 允许你根据用户事件来更新部分页面内容

## 2.AJAX 的缺点

- 没有浏览历史，不能回退

- 存在跨域问题(同源)

- SEO 不友好

## 3.创建

```js
let xhr;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  // IE6兼容
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
```

## 4.open 方法开启请求

> xhr.open(method, url, boolean)

- method：请求方法

- url：请求地址

- boolean：是否异步发送请求，默认为 true 异步

  - 同步执行，代码会卡在 xhr.send()这一步，等到所有的数据都传输完成，才会往下执行

```js
xhr.open('GET', 'http://xxx/getInfo', true);
```

## 5.setRequestHeader()方法设置请求头

- 此方法必须在 open() 方法和 send() 之间调用

> xhr.setRequestHeader(header, value)

```js
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

## 6.send 方法发送请求

> xhr.send(body)

- body：在 XHR 请求中要发送的数据体，如果是 get 方法，无需设置数据体，可以传 null 或者不传参

```js
// get请求
xhr.send(null);

// post请求
// 第一种方法
// post请求，必须要设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 执行发送
xhr.send('name=bb&age=23&class=2');

// 第二种方法
xhr.setRequestHeader('Content-Type', 'application/json');
// json数据格式
xhr.send('{"name":"bn","age":23,"class":1}');

// 第三种方法
xhr.setRequestHeader('Content-Type', 'application/json');
// 对象转字符串
xhr.send(
  JSON.stringify({
    name: 'nn',
    age: 12,
    class: 2,
  }),
);
```

## 7.readyState 属性

| readyState | 状态描述 | 说明                                               |
| :--------: | :------: | :------------------------------------------------- |
|     0      | 未初始化 | 尚未调用 open()方法                                |
|     1      |   启动   | 已经调用 open()方法，但未调用 send()方法           |
|     2      |   发送   | 已经调用 send()方法，但尚未接受到响应              |
|     3      |   接收   | 已经收到部分响应数据                               |
|     4      |   完成   | 已经接收到全部响应数据，而且已经可以在客户端使用了 |

## 8.处理回调

- 一般都是在 readyState 值为 `4` 时，执行响应的后续逻辑

- 为了让事件更加可靠（一定触发），在发送请求 send()之前，一定是先注册 onreadystatechange 事件

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('请求成功');
    } else {
      console.log('请求失败');
    }
  }
};

xhr.send('name=mh&age=18');
```

## 9.超时处理

```js
xhr.timeout = 2000;
// 超时回调
xhr.ontimeout = function () {
  alert('网络较慢，请稍后重试！');
};
```

## 10.网络异常处理

```js
xhr.onerror = function () {
  alert('网络异常！');
};
```

## 11.取消请求

```js
xhr.abort();
```

## 12.表单

```js
const form = new FormData();
form.append('image', file);
```

## 13.封装 ajax

```js
/* {string} method 请求方法
  {string} url 请求地址
  {object} params get请求参数
  {object} data post请求body
  {boolean} isAsync是否设置为同步请求
  {number} timeout超时时间设置
*/
function ajax({
  method,
  url,
  params,
  data = null,
  isAsync,
  timeout = 40 * 1000,
}) {
  return new Promise((resolve, reject) => {
    // 创建xhr对象，兼容写法
    const xhr = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP');
    // 将method转换成大写
    method = method.toUpperCase();
    // 处理get请求参数
    if (method === 'GET') {
      const str = Object.keys(params)
        .map((k) => {
          return `${k}=${params[k]}`;
        })
        .join('&');
      url += `?${str}`;
    }
    xhr.open(method, url, isAsync);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log('请求成功');
          resolve();
        } else {
          console.log('请求失败');
          reject();
        }
      }
    };
    xhr.timeout = timeout;
    // 超时回调
    xhr.ontimeout = function () {
      reject();
      alert('网络较慢，请稍后重试！');
    };

    xhr.onerror = function () {
      reject();
      alert('网络异常！');
    };

    if (method === 'GET') {
      xhr.send(null);
    }

    // 处理post请求
    if (method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }
  });
}
```

---
toc: menu
---

# axios

![image](images/base/1.png)

## 1.定义

- axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

## 2.特性

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 CSRF

## 3.axios 可以用在浏览器和 node 中的原因

- 运用了适配器模式，完美地抹平了浏览器和 Node 环境下 api 的调用差异（判断环境）

  ```js
  function getDefaultAdapter() {
    var adapter;
    // 判断当前是否是node环境
    if (
      typeof process !== 'undefined' &&
      Object.prototype.toString.call(process) === '[object process]'
    ) {
      // 如果是node环境，调用node专属的http适配器
      adapter = require('./adapters/http');
    } else if (typeof XMLHttpRequest !== 'undefined') {
      // 如果是浏览器环境，调用基于xhr的适配器
      adapter = require('./adapters/xhr');
    }
    return adapter;
  }
  ```

- 如果是浏览器，就会基于 XMLHttpRequests 实现

- 如果是 node 环境，就会基于 node 内置核心模块 http 实现

- 出参都是一个 Promise

## 4.get 请求

### 1）参数放在 url 中

```js
axios
  .get('/user?id=123')
  .then(() => {})
  .catch(() => {});
```

### 2）参数放在 params 中

```js
axios
  .get('/user', {
    params: {
      id: '123',
    },
  })
  .then(() => {})
  .catch(() => {});
```

## 5.post 请求

```js
axios
  .post('/user', {
    id: '123',
  })
  .then(() => {})
  .catch(() => {});
```

## 6.并发请求 all

```js
function request1() {
  return axios.get('/user?id=1');
}
function request2() {
  return axios.get('/user?id=2');
}

axios.all([request1(), request2()]).then(axios.spread((res1, res2) => {}));
```

## 7.创建实例

- 可以使用自定义配置新建一个 axios 实例

> axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
```

## 8.拦截器

- 在请求或响应被 then 或 catch 处理前拦截它们 interceptors

- 发送一个请求的时候会先执行请求拦截器的代码，然后再真正地执行我们发送的请求，这个过程会对 config，也就是我们发送请求时传送的参数进行一些操作

- 而当接收响应的时候，会先执行响应拦截器的代码，然后再把响应的数据返回来，这个过程会对 response，也就是响应的数据进行一系列操作

### 1）添加请求拦截器 request

```js
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
```

### 2）添加响应拦截器 response

```js
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
```

### 3）移除拦截器 eject

```js
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

### 4）为实例添加拦截器

```js
const instance = axios.create();
instance.interceptors.request.use(function () {
  /*...*/
});
```

## 9.取消请求

- 使用 cancel token 取消请求

- 可以使用同一个 cancel token 取消多个请求

### 1）使用 CancelToken.source 工厂方法创建 cancel token

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get('/user/12345', {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      // 处理错误
    }
  });

axios.post(
  '/user/12345',
  {
    name: 'new name',
  },
  {
    cancelToken: source.token,
  },
);

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

### 2）通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel token

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  }),
});

// cancel the request
cancel();
```

## 10.允许携带 cookie

```js
const defaultOptions = {
  withCredentials: true,
};
```

## 11.请求超时时间

```js
const defaultOptions = {
  timeout: 15000,
};
```

## 12.请求头

```js
const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
};
```

### 1）application/json

- 参数会直接放在请求体中，以 JSON 格式的发送到后端

- 这也是 axios 请求的默认方式

- 这种类型使用最为广泛

### 2）application/x-www-form-urlencoded

- 请求体中的数据会以普通表单形式（键值对）发送到后端

- 1.使用 URLSearchParams API

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

- 2.使用 qs 库

```js
import qs from 'qs';

axios.post('/foo', qs.stringify({ bar: '123' }));
```

### 3）multipart/form-data

- 参数会在请求体中，以标签为单元，用分隔符(可以自定义的 boundary)分开

- 既可以上传键值对，也可以上传文件

- 通常被用来上传文件的格式

## 13.手写 axios

### 1）分析

- 1.从 axios(config)的使用上，可以看出导出的 axios 是一个方法

- 2.从 axios.method(url, data, config)的使用上可以看出导出的 axios 上或者原型 prototype 上挂载了 get、post 等方法

- 3.实际上导出的 axios 是一个 Axios 类中的一个 request 方法

### 2）实现 Axios 类和 request 方法

```js
class Axios {
  constructor() {}

  request(config) {
    return new Promise((resolve) => {
      const { url = '', method = 'get', data = {} } = config;
      // 发送ajax请求
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        resolve(xhr.responseText);
      };
      xhr.send(data);
    });
  }
}

// 最终导出axios的方法，即实例的request方法
function CreateAxiosFn() {
  const axios = new Axios();
  const req = axios.request.bind(axios);
  return req;
}

// 得到最后的全局变量axios
const axios = CreateAxiosFn();
```

### 3）实现 axios.method()

```js
const methodsArr = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'];
methodsArr.forEach((method) => {
  Axios.prototype[method] = function () {
    // 处理单个方法
    if (['get', 'delete', 'head', 'options'].includes(method)) {
      // 接收2个参数(url[, config])的方法
      return this.request({
        method,
        url: arguments[0],
        ...(arguments[1] || {}),
      });
    } else {
      // 接收3个参数(url[,data[,config]])的方法
      return this.request({
        method,
        url: arguments[0],
        data: arguments[1] || {},
        ...(arguments[2] || {}),
      });
    }
  };
});
```

### 4）把 Axios.prototype 上的方法搬运到 request 上

- 实现一个工具方法，实现将 b 的方法混入 a

```js
const utils = {
  extend(a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context);
        } else {
          a[key] = b[key];
        }
      }
    }
  },
};

// 修改一下之前的CreateAxiosFn方法即可
function CreateAxiosFn() {
  const axios = new Axios();

  const req = axios.request.bind(axios);
  // 增加代码
  utils.extend(req, Axios.prototype, axios);

  return req;
}
```

### 5）请求和响应拦截器

```js
// 封装拦截器的类
class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected,
    });
  }
}

// 给Axios添加拦截器
class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage(),
    };
  }
}

// 修改CreateAxiosFn，将interceptors对象挂载到request上
function CreateAxiosFn() {
  let axios = new Axios();

  let req = axios.request.bind(axios);
  // 混入方法， 处理axios的request方法，使之拥有get,post...方法
  utils.extend(req, Axios.prototype, axios);
  // 新增代码
  utils.extend(req, axios);
  return req;
}

// 发送请求的时候，会先获取request拦截器的handlers的方法来执行。再执行我们发送的请求，然后获取response拦截器的handlers的方法来执行
class Axios {
  request(config) {
    // 拦截器和请求组装队列
    let chain = [this.sendAjax.bind(this), undefined]; // 成对出现的，失败回调暂时不处理

    // 请求拦截
    this.interceptors.request.handlers.forEach((interceptor) => {
      chain.unshift(interceptor.fullfield, interceptor.rejected);
    });

    // 响应拦截
    this.interceptors.response.handlers.forEach((interceptor) => {
      chain.push(interceptor.fullfield, interceptor.rejected);
    });

    // 执行队列，每次执行一对，并给promise赋最新的值
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  sendAjax(config) {
    return new Promise((resolve) => {
      const { url = '', method = 'get', data = {} } = config;
      // 发送ajax请求
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        console.log(xhr.responseText);
        resolve(xhr.responseText);
      };
      xhr.send(data);
    });
  }
}
```

### 6）完整代码

```js
class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected,
    });
  }
}

class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage(),
    };
  }

  request(config) {
    // 拦截器和请求组装队列
    let chain = [this.sendAjax.bind(this), undefined]; // 成对出现的，失败回调暂时不处理

    // 请求拦截
    this.interceptors.request.handlers.forEach((interceptor) => {
      chain.unshift(interceptor.fullfield, interceptor.rejected);
    });

    // 响应拦截
    this.interceptors.response.handlers.forEach((interceptor) => {
      chain.push(interceptor.fullfield, interceptor.rejected);
    });

    // 执行队列，每次执行一对，并给promise赋最新的值
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  sendAjax() {
    return new Promise((resolve) => {
      const { url = '', method = 'get', data = {} } = config;
      // 发送ajax请求
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        console.log(xhr.responseText);
        resolve(xhr.responseText);
      };
      xhr.send(data);
    });
  }
}

// 定义get,post...方法，挂在到Axios原型上
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post'];
methodsArr.forEach((met) => {
  Axios.prototype[met] = function () {
    console.log('执行' + met + '方法');
    // 处理单个方法
    if (['get', 'delete', 'head', 'options'].includes(met)) {
      // 2个参数(url[, config])
      return this.request({
        method: met,
        url: arguments[0],
        ...(arguments[1] || {}),
      });
    } else {
      // 3个参数(url[,data[,config]])
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...(arguments[2] || {}),
      });
    }
  };
});

// 工具方法，实现b的方法混入a;
// 方法也要混入进去
const utils = {
  extend(a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context);
        } else {
          a[key] = b[key];
        }
      }
    }
  },
};

// 最终导出axios的方法-》即实例的request方法
function CreateAxiosFn() {
  let axios = new Axios();

  let req = axios.request.bind(axios);
  // 混入方法， 处理axios的request方法，使之拥有get,post...方法
  utils.extend(req, Axios.prototype, axios);
  return req;
}

// 得到最后的全局变量axios
let axios = CreateAxiosFn();
```

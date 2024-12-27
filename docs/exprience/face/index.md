---
toc: menu
---

# 面经

## 1.react

### 1）diff

**1.diff 中的 key**

**2.如果存在重复 key 怎么渲染**

**3.修改其中一个影响另一个吗**

**4.删掉其中一个怎么渲染**

### 2）hooks

[react-hooks 原理](https://juejin.cn/post/6944863057000529933)

**1.原理**

**2.为什么要保证顺序**

**3.怎么让组件拥有状态和生命周期的**

**4.hooks 和 vue 的不同**

**5.hooks 如何实现**

**6.react 链表原理**

- 按顺序去遍历之前构建好的链表，取出对应的数据信息进行渲染

- hooks 的渲染是通过“依次遍历”来定位每个 hooks 内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的

- 因为 useState 这个钩子在设计层面并没有“状态命名”这个动作，也就是说每生成一个新的状态，React 并不知道这个状态名字叫啥，所以需要通过顺序来索引到对应的状态值

**7.hooks 遇到的坑，如何解决**

### 3）合成事件

**1.合成事件原因**

**2.合成事件和原生事件都注册，哪个先触发**

- 都会触发

- 原生事件先触发

- 合成事件后触发

**3.原生事件阻止冒泡后，合成事件还会触发吗**

- 原生事件会触发阻止冒泡前的逻辑

- 合成事件不会

### 4）fiber

**1.fiber 调和**

**2.fiber 怎么中断 js 执行**

利用 requestIdleCallback，只要合适的时机进行释放，就能实现“中断”效果

```js
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);
  while (
    currentTask !== null &&
    !(enableSchedulerDebugging && isSchedulerPaused)
  ) {
    if (
      currentTask.expirationTime > currentTime &&
      (!hasTimeRemaining || shouldYieldToHost())
    ) {
      // 如果超时，则主动退出循环，将控制权交还浏览器
      break;
    }
    ...
  }
  ...
}
```

**3.fiber 怎么恢复执行**

- 当一个任务 A 在执行到一半时，被中断机制强制中断，此时操作系统需要对当前任务 A 进行现场保护，如：寄存器数据，然后切换到下一个任务 B，当任务 A 再次被调度时，操作系统需要还原之前任务 A 的现场信息，如：寄存器数据，从而保证任务 A 能继续执行下一半任务

- React Fiber 的做法将递归过程拆分成一系列小任务(Fiber)，转换成线性的链表结构，此时现场保护只需要保存下一个任务结构信息即可，所以拆分的任务上需要扩展额外信息，该结构记录着任务执行时所需要的必备信息

**4.requestAnimation 每一帧都会执行吗？和 requestIdleCallback 区别**

### 5）react 和 vue 区别

### 6）react 批量更新机制

### 7）自己封装的自定义 hooks

### 8）react 性能优化

## 2.vue

### 1）new Vue 后发生了什么

### 2）vue 如何劫持数据的

### 3）vue 有哪些新特性

### 4）vue 的批量更新机制

### 5）$nextTick 原理

### 6）computed 原理

### 7）如何不通过 this.$router 外部使用 router

- 引入 vue 实例

## 3.webpack

### 1）webpack 打包流程

### 2）plugin 打包原理

### 3）loader 和 pluhin 区别

### 4）用过的 plugin

### 5）打包优化

## 4.项目介绍

## 5.图片上传组件开发细节

- 项目怎么开发图片上传、怎么转 base64、图片压缩原理、base 类怎么写的、怎么扩展为文件上传的、图片预览怎么写的、什么是 blob、fileReader、大文件怎么切片、文件进度

## 6.hybrid

- 怎么处理 jsbride 各个 app 不同

## 7.埋点封装

- 埋点都封装了哪些行为

## 8.网络

### 1）http1.1 和 2.0 区别

- 多路复用为什么比 1.1 快：并行处理

## 9.performance 使用

## 10.axios 拦截器使用各种场景

## 11.练习题

### 1）this 指向

```js
var a = 10;
var obt = {
  a: 20,
  fn: function () {
    var a = 30;
    console.log(this.a);
  },
};
obt.fn(); // 20
obt.fn.call(); // 10
new obt.fn(); // undefined
```

### 2）promise

```js
new Promise(() => {
  setTimeout(() => {
    console.log(0);
  });
  console.log(1);
  throw new Error();
  console.log(2);
})
  .then(
    () => {
      console.log(3);
    },
    () => {
      console.log(4);
    },
  )
  .catch(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
// 1 4 6 0
// catch只执行一个，then每个都执行
```

### 3）链式函数

- 实现 get(1).minus(2).add(10).result()，输出 9

```js
function get(val) {
  this.val = val;
  this.add = function (val) {
    this.val += val;
    return this;
  };
  this.minus = function (val) {
    this.val -= val;
    return this;
  };
  this.result = function () {
    return this.val;
  };
  return this;
}
get(1).minus(2).add(10).result();
```

## 12.import 动态加载 js 原理

- 采用 JSONP 的思路，首先，将动态引入模块单独打成一个 js 文件；其次，在 import 执行时创建 script 标签传入 src 为引入模块地址；从而实现动态加载的效果，注意，JSONP 必然是异步的，所以必须要结合 Promise

## 13.跨域场景

- ip 访问对应域名不跨域，域名访问对应 ip 算跨域，因为一个 ip 地址可能会对应多个域名，一个域名只能对应一个 ip 地址

- http://a.com/a.js访问http://www.a.com/a.js算跨域，域名不同

## 14.遍历值

```js
var tree = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      d: {
        f: 4,
      },
    },
  },
  c: 5,
  d: {
    t: 6,
    h: {
      l: 7,
    },
  },
};

// 深度优先遍历/递归
function recursion(tree) {
  if (!tree) {
    return;
  }
  var result = [];
  if (typeof tree === 'object') {
    Object.keys(tree).forEach((key) => {
      result.push(...recursion(tree[key]));
    });
  } else {
    result.push(tree);
  }
  return result;
}

// 深度优先遍历/迭代法
function dfs(tree) {
  if (!tree) {
    return;
  }
  var result = [];
  var arr = [];
  arr.push(tree);
  while (arr.length) {
    var top = arr.pop();
    if (typeof top === 'object') {
      Object.keys(top)
        .reverse()
        .forEach((key) => {
          arr.push(top[key]);
        });
    } else {
      result.push(top);
    }
  }
  return result;
}

// 广度
function bfs(root) {
  if (!tree) {
    return;
  }
  var result = [];
  const queue = [root];
  while (queue.length) {
    const top = queue.shift();
    if (typeof top === 'object') {
      Object.keys(top).forEach((key) => {
        queue.push(top[key]);
      });
    } else {
      result.push(top);
    }
  }
  return result;
}

recursion(tree);
bfs(tree);
```

## 15.语义化标签的好处

- 去掉或样式丢失的时候能让页面呈现清晰的结构

- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页

- 有利于 SEO

- 便于团队开发和维护，遵循 W3C 标准，可以减少差异化

## 16.webpack 中 module、chunk、bundle 区别

### 1）module

- 模块可以理解为一个单独的文件，一个文件可以看做一个模块

### 2）chunk

- chunk 是 webpack 用来命名编译的中间产物，如一个入口依赖多个模块，编译时就会将多个模块和入口编译到一个文件，这时候这个文件就叫 chunk。当然这是最简单情况，一个入口对应一个 chunk，然后一个 chunk 生成一个 bundle。如果使用了 code spliting，那么一个入口就可能生成多个 chunk，对应的 bundle 也可能会增加

### 3）bundle

- bundle 就是 webpack 编译生成的最终代码，一般来说和 chunk 一一对应

## 17.浏览器的每一帧发生了什么

- 页面的内容都是一帧一帧绘制出来的，浏览器刷新率代表浏览器一秒绘制多少帧。原则上说 1s 内绘制的帧数也多，画面表现就也细腻。目前浏览器大多是 60Hz（60 帧/s），每一帧耗时也就是在 16.6ms 左右。那么在这一帧的（16.6ms） 过程中浏览器又干了些什么呢？

【1】接受输入事件
【2】执行事件回调
【3】开始一帧
【4】执行 RAF (RequestAnimationFrame)
【5】页面布局，样式计算
【6】绘制渲染
【7】执行 RIC (RequestIdelCallback)

- 第七步的 RIC 事件不是每一帧结束都会执行，只有在一帧的 16.6ms 中做完了前面 6 件事儿且还有剩余时间，才会执行。如果一帧执行结束后还有时间执行 RIC 事件，那么下一帧需要在事件执行结束才能继续渲染，所以 RIC 执行不要超过 30ms，如果长时间不将控制权交还给浏览器，会影响下一帧的渲染，导致页面出现卡顿和事件响应不及时

```js
requestIdleCallback(myNonEssentialWork, { timeout: 2000 });

// 任务队列
const tasks = [
  () => {
    console.log('第一个任务');
  },
  () => {
    console.log('第二个任务');
  },
  () => {
    console.log('第三个任务');
  },
];

function myNonEssentialWork(deadline) {
  // 如果帧内有富余的时间，或者超时
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    tasks.length > 0
  ) {
    work();
  }

  if (tasks.length > 0) requestIdleCallback(myNonEssentialWork);
}

function work() {
  tasks.shift()();
  console.log('执行任务');
}
```

## 18.强缓存、协商缓存 区别、应用场景

## 19.为什么代码没有使用 react 相关方法，也要在文件顶部 import react

- 原因：通过 babel 会将 jsx 编译成普通 js 代码会用到 React.createElement，所以需要 React

## 20.算法求数字区间

- 题目描述：给定一个无序整形数组，请设计一个算法找出其中连续出现的数字区间

```js
var list = [7, 2, 11, 2, 0, 1, 2, 4, 5, 10, 13, 14, 15];

// 得到结果
// [0->2, 4->5, 10->11, 13->15]
```

- 思路：先对数组进行去重和排序

```js
var list = [7, 2, 11, 2, 0, 1, 2, 4, 5, 10, 13, 14, 15];

function summaryRanges(arr) {
  arr = [...new Set(arr.sort((a, b) => a - b))];
  var result = [],
    i = 0;
  result[i] = [arr[0]];
  arr.reduce((prev, cur) => {
    cur - prev === 1
      ? result[i].push(cur)
      : (result[result[i].length > 1 ? ++i : i] = [cur]);
    return cur;
  });
  return result;
}

function summaryRanges2(arr) {
  arr = [...new Set(arr.sort((a, b) => a - b))];
  var result = [],
    index = 0;
  result[index] = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      result[index].push(arr[i + 1]);
    } else {
      result[result[index].length > 1 ? ++index : index] = [arr[i + 1]];
    }
  }
  return result;
}

var result = summaryRanges(list);
console.log(result);
```

## 21.http/1.1 的 keep-alive 和 http/2 多路复用的区别

- 1.1 增加了管线化技术，允许客户端不用等到服务器的响应就能发送下一个请求，服务器必须按照请求的顺序来响应。即后续请求的响应必须等到第一个响应发送之后才能发送，即使后续响应已经完成

- 2.0 无需多个 TCP 连接，允许在单一的 HTTP2 连接上发起多重请求

- 1.1 使用的是串行请求，2.0 使用的是并行发送

- 1.1 是基于文本传输，因为是文本，就导致了它必须是个整体，在传输是不可切割的，只能整体去传

- 2.0 是基于二进制流的，将 HTTP 消息分解为独立的帧，交错发送，然后在另一端重新组装

## 22.浏览器进程

## 23.写一个 delay 函数

```js
const delay = (duration) => {
  return function (val) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val);
      }, duration);
    });
  };
};
Promise.resolve('hello')
  .then(delay(1000))
  .then((val) => console.log(val));
```

## 24.查找包含当前节点的所有父级节点

[JavaScript 处理树 列表转树 遍历树 查找树](https://juejin.cn/post/6973923346333302791#heading-3)

```js
function findPath(tree, id) {
  if (tree.id === id) return [id];
  function treeFindPath(arr, id, path = []) {
    if (!tree) return [];
    for (const data of arr) {
      path.push(data.id);
      if (data.id === id) {
        return path;
      }
      if (data.children) {
        const findChildren = treeFindPath(data.children, id, path);
        if (findChildren.length) return findChildren;
      }
      path.pop();
    }
    return [];
  }
  return treeFindPath(tree?.children, id, [tree.id]);
}
findPath(
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [{ id: 3 }, { id: 4 }],
      },
      { id: 5 },
    ],
  },
  3,
);
```

```js
function findPath(arr, id, path = []) {
  if (!arr) return [];
  for (let item of arr) {
    path.push(item.id);
    if (item.id === id) {
      return path;
    }
    if (item.children) {
      const result = findPath(item.children, id, path);
      if (result.length) return result;
    }
    path.pop();
  }
  return [];
}
findPath(
  [
    {
      id: 1,
      children: [{ id: 2, children: [{ id: 3 }] }],
    },
  ],
  3,
);
```

## 25.已知数组 a=[1,[2,[3,[4,null]]]], 实现数组 b=[4,[3,[2,[1,null]]]] ，考虑 n 级嵌套的情况

```js
function reverseArray(arr) {
  let a = arr.flat(Infinity);

  for (let i = 0; i < Math.floor((a.length - 1) / 2); i++) {
    [a[i], a[a.length - 2 - i]] = [a[a.length - 2 - i], a[i]];
  }

  for (let i = a.length - 2; i >= 1; i--) {
    if (i === a.length - 2) {
      a[i] = [a[i], null];
      continue;
    }
    a[i] = [a[i], a[i + 1]];
  }
  return a.slice(0, 2);
}

//测试
let arr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10, [11, null]]]]]]]]]]];

console.log(reverseArray(arr));
```

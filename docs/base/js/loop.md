---
toc: menu
---

## Event Loop 事件循环

- 主线程运行的时候，会产生堆（heap）和栈（stack），其中堆为内存、栈为函数调用栈。Event Loop 负责执行代码、收集和处理事件以及执行队列中的子任务，具体包括以下过程：

  - 1.JavaScript 有一个主线程和调用栈，所有的任务最终都会被放到调用栈等待主线程执行

  - 2.同步任务会被放在调用栈中，按照顺序等待主线程依次执行

  - 3.主线程之外存在一个回调队列，回调队列中的异步任务最终会在主线程中以调用栈的方式运行

  - 4.同步任务都在主线程上执行，栈中代码在执行的时候会调用浏览器的 API，此时会产生一些异步任务

  - 5.异步任务会在有了结果（比如被监听的事件发生时）后，将异步任务以及关联的回调函数放入回调队列中

  - 6.调用栈中任务执行完毕后，此时主线程处于空闲状态，会从回调队列中获取任务进行处理

## 1.什么是 Event Loop

- Event Loop 即事件循环，是浏览器或 Node 解决单线程运行时不会阻塞的一种机制

- javaScript 执行事件的循环机制为事件循环

- JavaScript 的执行机制

  - JS 分为`同步任务`和`异步任务`
  - 同步任务都在 JS 引擎线程上执行，形成一个`执行栈`
  - 事件触发线程管理一个`任务队列`，异步任务触发条件达成，将回调事件放到任务队列中
  - 执行栈中所有同步任务执行完毕，此时 JS 引擎线程`空闲`，系统会`读取任务队列`，将可运行的异步任务回调事件添加到执行栈中，`开始执行`

## 2.为什么有 Event Loop

javaScript 是`单线程`的，JavaScript 中的所有任务都需要排队依次完成，为了解决线程的阻塞问题，使用事件循环解决

- JavaScript 的主要用途是与用户互动，以及操作 DOM。如果它是多线程的会有很多复杂的问题要处理，比如有两个线程同时操作 DOM，一个线程删除了当前的 DOM 节点，一个线程是要操作当前的 DOM 阶段，最后以哪个线程的操作为准？为了避免这种，所以 JS 是单线程的。即使 H5 提出了 `web worker` 标准，它有很多限制，`受主线程控制`，是主线程的`子线程`。

- 非阻塞：通过 event loop 实现。

## 3.宏任务 macrotask（tasks）

- 宏任务会进入任务队列

- 浏览器中：整体代码 script、setTimeout、setInterval、requestAnimationFrame、I/O 操作、UI 渲染、ajax 等

- Node 中：整体代码 script、setTimeout、setInterval、setImmediate、ajax

## 4.微任务 microtask（jobs）

- 微任务不会进入任务队列，但微任务会等待同步任务执行完毕后执行

- 浏览器中：Promise.then/.catch/.finally（promise 本身是同步）、Object.observe 、MutationObserver

- Node 中：process.nextTick、Promise.then/.catch/.finally（promise 本身是同步）、Object.observe 、MutationObserver

## 5.宏任务和微任务的执行过程如下

- 宏任务队列一次只从队列中取一个任务执行，执行完后就去执行微任务队列中的任务

- 微任务队列中所有的任务都会被依次取出来执行，直到微任务队列为空

- 在执行完所有的微任务之后，执行下一个宏任务之前，浏览器会执行 UI 渲染操作、更新界面

## 6.浏览器如何执行 Event Loop

- 同步任务 -> 异步微任务 -> 异步宏任务

## 7.测试题

1.题目 1

```js
// 1.同步任务 2.微任务 3.宏任务
async function async1() {
  console.log('async1 start'); // 1
  await async2();
  console.log('async1 end'); // 2
}

async function async2() {
  console.log('async2'); // 1
}

console.log('script start'); // 1
setTimeout(function () {
  console.log('setTimeout'); // 3
}, 0);
async1();

new Promise(function (resolve) {
  console.log('promise1'); // 1
  resolve();
}).then(function () {
  console.log('promise2'); // 2
});

console.log('script end'); // 1

// 输出顺序
// 执行同步任务
// 1.script start
// 2.async1 start
// 3.async2
// 4.promise1 // Promise本身是同步的
// 5.script end
// 执行微任务
// 6.async1 end
// 7.promise2
// 执行宏任务
// 8.setTimeout
```

解题思路：

- 1.找到所有的同步任务

- 2.找到所有的微任务

- 3.找到所有的宏任务

- 4.按顺序从上往下执行

  2.题目 2

```js
// 1.同步任务 2.微任务 3.宏任务
console.log('start'); // 1
setTimeout(() => {
  console.log('children2'); // 3 1
  Promise.resolve().then(() => {
    console.log('children3'); // 3 2
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log('children4'); // 1
  setTimeout(function () {
    console.log('children5'); // 3 1
    resolve('children6');
  }, 0);
}).then((res) => {
  // 微任务要等待前面的宏任务回调才执行
  console.log('children7'); // 2 1
  setTimeout(() => {
    console.log(res); // 2 3
  }, 0);
});

// 输出顺序
// 1.start
// 2.children4
// 3.children2
// 4.children3
// 5.children5
// 6.children7
// 7.children6
```

解题思路：

- 1.找到所有的同步任务

- 2.有些微任务是在宏任务执行完成后才输出

- 3.宏任务从上往下进入任务队列

  3.题目 3

```js
// 1.同步任务 2.微任务 3.宏任务
const p = function () {
  return new Promise((resolve, reject) => {
    const p1 = new Promise(() => {
      setTimeout(() => {
        resolve(1);
      }, 0);
      resolve(2);
    });
    p1.then((res) => {
      console.log(res); // 2
    });
    console.log(3); // 1
    resolve(4);
  });
};
p().then((res) => {
  console.log(res); // 2
});
console.log('end'); // 1

// 输出顺序
// 2.3
// 1.end
// 3.2
// 4.4
// 5.1
```

## 8.简述

### 1）主线程和执行栈

- Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行

### 2）JS 调用栈

- JS 调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空

### 3）同步任务和异步任务

- Javascript 单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行

- 任务队列 Task Queue，即队列，是一种先进先出的一种数据结构

### 4）事件循环的进程模型

- 执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行 Task（宏任务），否则就一次性执行完所有微任务

- 每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为 null，然后再执行宏任务，如此循环

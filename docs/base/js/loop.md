---
toc: menu
---

## Event Loop 事件循环

## 1.什么是 Event Loop

- Event Loop 即事件循环，是浏览器或 Node 解决单线程运行时不会阻塞的一种机制

- javaScript 执行事件的循环机制为事件循环

- JavaScript 的执行机制主要是以下三步

  - 1.所有同步任务都在主线程上执行，形成一个执行栈

  - 2.主线程之外，还存在一个`任务队列`（task queue）。只要异步任务有了运行结果，就在`任务队列`之中放置一个事件

  - 3.一旦主线程的栈中的所有同步任务执行完毕，系统就会读取任务队列，选择需要首先执行的任务然后执行

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

- 浏览器中：Promise.then/.catch/.finally（promise 本身是同步）、Object.observe 、MutationObserve

- Node 中：process.nextTick、Promise.then/.catch/.finally（promise 本身是同步）、Object.observe 、MutationObserve

## 5.浏览器如何执行 Event Loop

- 同步任务 -> 异步微任务 -> 异步宏任务

## 6.考点

1.题目 1

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');

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

2.题目 2

```js
console.log('start');
setTimeout(() => {
  console.log('children2');
  Promise.resolve().then(() => {
    console.log('children3');
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log('children4');
  setTimeout(function () {
    console.log('children5');
    resolve('children6');
  }, 0);
}).then((res) => {
  console.log('children7');
  setTimeout(() => {
    console.log(res);
  }, 0);
});
```

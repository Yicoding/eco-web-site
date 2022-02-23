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

**1.原理**

**2.为什么要保证顺序**

**3.怎么让组件拥有状态和生命周期的**

**4.hooks 和 vue 的不同**

**5.hooks 如何实现**

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

## 6.hbrid

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

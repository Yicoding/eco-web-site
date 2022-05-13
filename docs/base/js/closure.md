---
toc: menu
---

# 闭包

- 闭包产生的本质就是：当前环境中存在指向父级作用域的引用

## 1.定义

- 闭包是指那些能够访问自由变量的函数

- 函数 `A` 中`嵌套`了函数 `B`，函数 `B` `可以访问`到函数 `A` 中的`变量`，那么`函数 B` 就`是闭包`

  - 错误理解：函数嵌套了函数，然后返回一个函数

- 闭包中的变量`存储`的`位置`是`堆内存`

```js
function A() {
  const a = 'Function A';
  // 函数A中不一定非要返回一个函数才称得上闭包
  window.B = function () {
    console.log(a);
  };
}
A();
B();
```

## 2.作用

- 1.保护函数的私有变量不受外部的干扰。形成不销毁的栈内存

- 2.保存，把一些函数内的值保存下来。闭包可以实现方法和属性的私有化

## 3.副作用

- 1.容易导致内存泄漏，页面不关闭，变量就一直在（页面关闭或刷新后就清空了）

- 2.闭包会携带包含其它的函数作用域，因此会比其他函数占用更多的内存

- 3.过度使用闭包会导致内存占用过多，所以要谨慎使用闭包

## 4.使用

使用闭包我们可以保持对实例的引用，不被垃圾回收机制回收

### 1）return 回一个函数

```js
var n = 10;
function fn() {
  var n = 20;
  function f() {
    n++;
    console.log(n);
  }
  return f;
}

var x = fn();
x(); // 21
```

### 2）函数作为参数

```js
var a = 'top';
function foo() {
  var a = 'foo';
  function fo() {
    console.log(a);
  }
  return fo;
}

function f(p) {
  var a = 'f';
  p();
}
f(foo()); // foo
```

### 3）IIFE（自执行函数）

```js
var n = 'top';
(function p() {
  console.log(n);
})();
// top
```

### 4）循环赋值

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
// 输出结果：0,1,2,3,4
```

### 5）使用回调函数就是在使用闭包

```js
window.name = 'top';
setTimeout(function timeHandler() {
  console.log(window.name);
}, 100);
```

### 6）防抖、截流

```js
// 防抖
function debounce(fn, timeout) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, timeout);
  };
}

// 截流
function throttle(fn, timeout) {
  let timer = null;
  return function (...arg) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arg);
      timer = null;
    }, timeout);
  };
}
```

### 7）柯里化实现

```js
function curry(fn, len = fn.length) {
  return _curry(fn, len);
}

function _curry(fn, len, ...arg) {
  return function (...params) {
    let _arg = [...arg, ...params];
    if (_arg.length >= len) {
      return fn.apply(this, _arg);
    } else {
      return _curry.call(this, fn, len, ..._arg);
    }
  };
}

let fn = curry(function (a, b, c, d, e) {
  console.log(a + b + c + d + e);
});

fn(1, 2, 3, 4, 5); // 15
fn(1, 2)(3, 4, 5);
fn(1, 2)(3)(4)(5);
fn(1)(2)(3)(4)(5);
```

## 5.应用题

埋点计数器

- 产品让做的网站分析的一种常用的数据采集方法

```js
function count() {
  var num = 0;
  return function () {
    return ++num;
  };
}
var getNum = count(); // 第一个需要统计的地方
var getNewNum = count(); //第二个需要统计的地方
// 如果我们统计的是两个button的点击次数
document.querySelectorAll('button')[0].onclick = function () {
  console.log('点击按钮1的次数：' + getNum());
};
document.querySelectorAll('button')[0].onclick = function () {
  console.log('点击按钮2的次数：' + getNewNum());
};
```

## 6.经典面试题

`解决 for 循环 setTimeout`

- 原因：setTimeout 异步任务之宏任务，会进入任务队列，最后执行 console 时，i 的值已经都是最后一个了

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
console.log(i);
// 输出结果：5 -> 5,5,5,5,5 （箭头表示 1s，逗号表示几乎同时输出）
```

- 期望输出结果：5 -> 0,1,2,3,4

### 1）借助立即执行函数（闭包）

在这里创建了一个闭包，每次循环都会把 i 的最新值传进去，然后被闭包保存起来

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 10);
  })(i);
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

- 首先使用了立即执行函数将 i 传入函数内部

- 这个时候值就被固定在了参数 j 上面不会改变

- 当下次执行 timer 这个闭包的时候，就可以使用外部函数的变量 j

### 2）借助 let 的暂时性死区

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 3）借助 setTimeout 的第三个参数

```js
for (var i = 0; i < 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    10,
    i,
  );
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 4）借助形参的特性

```js
var sleepConsole = (i) => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
};

for (var i = 0; i < 5; i++) {
  sleepConsole(i); // i会被复制后传递
}

console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 5）借助 Promise

```js
// 1.建立数组存储 Promise
const task = [];

// 2.抽取方法生成异步操作
const output = (i) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000 * i);
  });

// 3.循环执行异步操作
for (var i = 0; i < 5; i++) {
  task.push(output(i));
}

// 4.异步操作执行完成后输出最后的i
Promise.all(task).then(() => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
});
// 输出结果：0 -> 1 -> 2 -> 3 -> 4 -> 5
```

### 6）借助 async/await

```js
// 生成休眠函数
// 生成休眠函数
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000);
    }
    console.log(i);
  }
  await sleep(1000);
  console.log(i);
})();
// 输出结果：0 -> 1 -> 2 -> 3 -> 4 -> 5
```

## 7.思考题

1.题目 1

```js
var result = [];
var a = 3;
var total = 0;

function foo(a) {
  for (var i = 0; i < 3; i++) {
    result[i] = function () {
      total += i * a;
      console.log(total);
    };
  }
}

foo(1);
result[0](); // 3
result[1](); // 6
result[2](); // 9
```

形成了闭包。total 被外层引用没有被销毁

2.题目 2

```js
var n = 10;
function fn() {
  var n = 20;
  function f() {
    n++;
    console.log(n);
  }
  f();
  return f;
}

var x = fn(); // 21
x(); // 22
x(); // 23
console.log(n); // 10
```

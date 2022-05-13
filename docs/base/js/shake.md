---
toc: menu
---

# 防抖/截流

## 1.防抖（debounce）

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时

### \*定时器实现

```js
function debounce(fn, wait) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
      timer = null;
    }, wait);
  };
}

var fn = function () {
  var date = new Date();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  console.log(`当前时间: ${minute}:${second}`);
};
setInterval(debounce(fn, 500), 1000); // 第一次在1500ms后触发，之后每1000ms触发一次
```

之所以返回一个函数，因为防抖本身更像是一个函数修饰，所以就做了一次函数柯里化。里面也用到了闭包，闭包的变量是 timer

## 2.截流（throttle）

当持续触发事件时，保证一定时间段内只调用一次事件处理函数

### 1）\*定时器实现: setTimeout()------>首次立即执行

事件`第一次触发不会立即执行fn` 定时器会等待时间,但最后一次在预设时间内就算不触发事件,也会执行最后一次

```js
function throttle(fn, wait) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}

var fn = function () {
  var date = new Date();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  console.log(`当前时间: ${minute}:${second}`);
};
setInterval(throttle(fn, 1000), 10);
```

### 2）时间戳实现: +new Date()

事件第一次触发立即执行一次 func 后续在 wait 时间内只执行一次

```js
function throttle(fn, wait) {
  var last = 0;
  return function () {
    var context = this;
    var args = arguments;
    var now = +new Date();
    if (now - last > wait) {
      fn.apply(context, args);
      last = now;
    }
  };
}

var fn = function () {
  var date = new Date();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  console.log(`当前时间: ${minute}:${second}`);
};
setInterval(throttle(fn, 1000), 10);
```

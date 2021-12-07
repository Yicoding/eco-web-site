---
toc: menu
---

# 函数柯里化 curry

## 1.定义

- `把一个多参数的函数，转化为单参数函数`

- 是给函数分步传递参数，每次传递部分参数，并返回一个更具体的函数接收剩下的参数，这中间可嵌套多层这样的接收部分参数的函数，直至返回最后结果

```js
// 柯里化之前
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// 柯里化之后
let addCurry = curry(add);
addCurry(1)(2)(3); // 6
```

## 2.用途

参数复用，本质上是降低通用性，提高适用性。

- 1.比如我们有这样一段数据：

```js
var person = [{ name: 'kevin' }, { name: 'daisy' }];
```

- 2.如果我们要获取所有的 name 值，我们可以这样做：

```js
var name = person.map(function (item) {
  return item.name;
});
```

- 3.curry 函数做法：

```js
var prop = curry(function (key, obj) {
  return obj[key];
});

var name = person.map(prop('name'));
```

prop 函数编写一次后，以后可以多次使用，实际上代码从原本的三行精简成了一行

## 3.\*实现 curry 函数

- 1.封装处理步骤，通过闭包将参数集中起来计算，最后再把需要处理的参数传进去

- 2.实现原理就是用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数

```js
function curry(fn) {
  function judge(...args) {
    // 闭包
    if (args.length < fn.length) {
      // 没有达到函数fn的长度时，继续递归调用
      return (...arg) => judge(...args, ...arg); // 返回一个匿名函数，并且把之前的参数也传入
    }
    // 满足条件，返回
    return fn(...args);
  }
  // 返回闭包
  return judge;
}

var add = curry(function (a, b, c) {
  console.log([a, b, c]);
});

add(1, 2, 3); // 6
add(1, 2)(3); // 6
add(1)(2)(3); // 6
add(1)(2, 3); // 6
```

- 1.调用 curry 函数，获取函数 fn 的参数

- 2.定义一个新的函数 judge，接收参数为...args

- 3.判断新函数接受的参数长度是否大于等于 fn 剩余参数需要接收的长度

- 4.满足要求，则执行 fn 函数，并传入新函数的参数

- 5.否则，返回一个新的匿名函数，这个函数把所有传入参数...args 保存在 arg 数组中，而这个匿名函数被执行后，就把以前收到的参数数组和当前的参数数组合并后，放到前面说的逻辑中，在 judge 函数里判断，重复第 3 步

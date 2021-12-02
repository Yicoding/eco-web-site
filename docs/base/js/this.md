---
toc: menu
---

# this 指向

非严格模式下，`this 是个对象`

参考资料：[MDN 中 this 解析](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

this 的指向，是在调用函数时根据执行上下文所动态确定的

- this 就是函数运行时所在的环境对象，即上下文对象

- 原因：js 是解释型语言，不是一次读取程序，而是逐行解释，所以 this 的指向要在执行时才能根据上下文所动态确定

- 优先级：「new 绑」 > 「显绑」 > 「隐绑」 > 「默认绑定」

## 1.window

对于直接调用的函数来说，不管函数被放在了什么地方，this 都是 `window`，严格模式下 this 绑定到 `undefined`

```js
function test() {
  console.log(this);
}
test(); // window
```

```js
function test() {
  'use strict';
  console.log(this);
}
test(); // undefined
```

## 2.谁调用它，this 就指向谁

对于被别人调用的函数来说，`谁调用它，this 就指向谁`

## 3.call/apply/bind

一般由 call/apply/bind 方法显式调用，绑定到指定`参数的对象上`

```js
// 对象可以作为 bind 或 apply 的第一个参数传递，并且该参数将绑定到该对象。
var obj = { a: 'Custom' };

// 声明一个变量，并将该变量作为全局对象 window 的属性。
var a = 'Global';

function whatsThis() {
  return this.a; // this 的值取决于函数被调用的方式
}

whatsThis(); // 'Global' 因为在这个函数中 this 没有被设定，所以它默认为 全局/ window 对象
whatsThis.call(obj); // 'Custom' 因为函数中的 this 被设置为obj
whatsThis.apply(obj); // 'Custom' 因为函数中的 this 被设置为obj
```

- new 的优先级要大于 bind，bind 的优先级大于 call 和 apply （new > bind > call/apply）

- bind 方法改变 this 指向后，`只生效一次`，后面再用 bind 不能再次改变 this 指向了

```js
function f() {
  return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind只生效一次！
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37(this指向o), azerty, azerty(bind只生效一次)
```

## 4.new

一般构造函数、class（类）用 new 调用，绑定到`新创建的对象上`

## 5.箭头函数

箭头函数中，根据外层上下文绑定的 this 决定 this 指向

```js
var test = {
  name: 'test',
  add: function () {
    console.log(this.name);
  },
};
test.add(); // test
```

```js
var test = {
  name: 'test',
  add: () => {
    console.log(this.name);
  },
};
test.add(); // undefined
```

- 箭头函数会`忽略` call、apply、bind 传递的 this

## 6.getter、setter

getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, 'sum', {
  get: sum,
  enumerable: true, // 表示可枚举的，默认为false；当设置为true时，该属性才会在对象枚举时枚举到
  configurable: true, // 表示可配置的，默认值为false；当值为true时，该属性的描述符才能够被改变，同时该属性也能从对应的对象中删除
});

console.log(o.average, o.sum); // logs 2, 6
```

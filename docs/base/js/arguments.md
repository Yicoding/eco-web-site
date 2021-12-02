---
toc: menu
---

# arguments/callee/caller

## 1.arguments

### 1）概念

是一个包含函数传入参数的类数组

### 2）作用

保存所有传递给函数的实参

### 3）特点

- 可以通过 arguments[n]来访问对应的单个参数的值

- 拥有数组长度属性 length

- arguments 对象存储的是实际传给函数的参数，且不局限于函数声明时所定义的形参

```js
function getQiu() {
  // 注:每个函数都有一个叫做arguments的东西
  console.log(arguments);
  // arguments其实是一个伪数组
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
getQiu(10, 20, 30); // [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

```js
// 实例:遍历参数并求和
function Qiu() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
Qiu(1, 2, 3);
```

### 4）用法

```js
[].slice.call(arguments, 1);

// 也可以使用es6语法[...arguments]
```

相当于

```js
arguments.slice(1);
```

为什么要使用.call 呢？因为 arguments 的原因

- arguments 是一个`类数组`，他并`不具备`数组原型上所有的方法

- 所以如果 arguments `要使用`数组的方法，这里就通过`修改 this 指针`的方式，让 arguments `继承` array

## 2.callee

被召者

- 1.callee 是 arguments 对象的属性

- 2.arguments.callee 指向参数所属的当前执行的函数. 就是说 callee 返回正在被执行的 function 对象, 也就是所指定的 function 对象的正文.

- 3.callee 属性的初始值就是正被执行的 Function 对象

- 4.callee 表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性

- 5.callee 拥有 length 属性，这个属性可用于验证。arguments.length 是实参长度,arguments.callee.length 是形参长度，可以判断调用时形参长度是否和实参长度一致

## 3.caller

调用者

- caller 是 function 的属性，callee 是 arguments 的属性

```js
function myq() {
  if (myq.caller == null) {
    return console.log('该函数在全局作用域内被调用!');
  }
  console.log('调用我的是函数是' + myq.caller);
}
myq(); //该函数在全局作用域内被调用!
```

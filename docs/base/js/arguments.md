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

## 2.callee

被召者

## 3.caller

调用者

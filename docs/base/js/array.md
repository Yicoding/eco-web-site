---
toc: menu
---

# 数组

## 1.Array.of

- 用于将参数依次转化为数组中的一项，然后返回这个新数组

```js
Array.of(8.0); // [8]
Array(8.0); // [empty × 8]

Array.of(8.0, 5); // [8, 5]
Array(8.0, 5); // [8, 5]

Array.of('8'); // ["8"]
Array('8'); // ["8"]
```

## 2.Array.from

- 只要一个对象有迭代器，Array.from 就能把它变成一个数组

- 返回新的数组，不改变原对象

```js
Array.from([1, 2, 3], function (val, index) {
  console.log(val, index);
});
// 1 0
// 2 1
// 3 2

var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
var arr = Array.from(
  obj,
  function (value, index) {
    console.log(value, index, this, arguments.length);
    return value.repeat(3); //必须指定返回值，否则返回 undefined
  },
  obj,
);
// a 0 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
// b 1 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
// c 2 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
arr; // ['aaa', 'bbb', 'ccc']
```

## 3.Array 的判断

```js
var a = [];

// 1.基于instanceof
a instanceof Array;

// 2.基于constructor
a.constructor === Array;

// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);

// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype;

// 5.基于Object.prototype.toString
Object.prototype.toString.apply(a) === '[object Array]';

// 6.ES6
Array.isArray(a);

// 如果 isArray 不存在，那么 Array.isArray 的 polyfill 通常可以这样写：
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 4.改变自身的方法

- 基于 ES6，会改变自身值的方法一共有 9 个，分别为 pop、push、reverse、shift、sort、splice、unshift，以及两个 ES6 新增的方法 copyWithin 和 fill

- 题目：

  - 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组

  - 输入:

  - nums1 = [1,2,3,0,0,0]； m = 3

  - nums2 = [2,5,6]； n = 3

  - 输出: [1,2,2,3,5,6]

```js
function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
}
```

## 5.不改变自身的方法

- 基于 ES7，不会改变自身的方法也有 9 个，分别为 concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、未形成标准的 toSource，以及 ES7 新增的方法 includes

- slice 不改变自身，而 splice 会改变自身：

  - slice 的语法是：arr.slice([start[, end]])

    - splice 第二个参数是删除的个数

  - splice 的语法是：arr.splice(start,deleteCount[, item1[, item2[, …]]])

    - slice 的第二个参数是 end 的坐标（可选）

## 6.数组遍历的方法

- 基于 ES6，不会改变自身的遍历方法一共有 12 个，分别为 forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values

## 7.类数组对象

### 1）arguments

- 它的对象只定义在函数体中，包括了函数的参数和其他属性

```js
function foo(name, age, sex) {
  console.log(arguments); // Arguments(3) ['jack', '18', 'male', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(typeof arguments); // object
  console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
}
foo('jack', '18', 'male');
```

### 2）HTMLCollection

- HTMLCollection 简单来说是 HTML DOM 对象的一个接口，这个接口包含了获取到的 DOM 元素集合，返回的类型是类数组对象

- 当文档中的 DOM 变化时，它也会随之变化

```js
var elem1, elem2;

// document.forms 是一个 HTMLCollection
elem1 = document.forms[0];
elem2 = document.forms.item(0);

console.log(elem1); // <form></form>
console.log(elem2); // <form></form>
console.log(typeof elem1); // object
console.log(Object.prototype.toString.call(elem1)); // [object HTMLCollection]
```

### 3）NodeList

- NodeList 对象是节点的集合，通常是由 querySlector 返回的

- 如果文档中的节点树发生变化，NodeList 也会随之变化

```js
var list = document.querySelectorAll('input[type=checkbox]');
for (var checkbox of list) {
  checkbox.checked = true;
}
console.log(list); // NodeList[input#check1]
console.log(typeof list); // object
console.log(Object.prototype.toString.call(list)); // [object NodeList]
```

## 8.如何将类数组转换成数组

### 1）类数组借用数组方法转数组

```js
var arrayLike = {
  0: 'java',
  1: 'script',
  length: 2,
};
Array.prototype.push.call(arrayLike, 'jack', 'lily');
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}

function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  // let args = [].slice.call(arguments); // 这样写也是一样效果
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
```

### 2）ES6 的方法转数组

```js
function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(...args) {
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
```

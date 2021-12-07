---
toc: menu
---

# 基本概念

## 1.js 定义

JavaScript 属于`解释型`或`即时编译型`语言，JavaScript 的执行分为`解释`和`执行`两个阶段

### 1）解释阶段

- 词法分析

- 语法分析

- 作用域规则确定

### 2）执行阶段

- 创建执行上下文

- 执行函数代码

- 垃圾回收

## 2.js 特点

### 1）多范式

Javascript 支持过程式、面向对象和事件驱动的函数式编程

### 2）解释

Javascript 与 C/C++ 不同，它`不是一次读取程序`，而是`逐行解释`。这就是说 JS 会比 C/C++ 等编译语言`慢`

「警告：」Javascript 因在运行时是一种极其被动的语言而臭名昭著，对错误进行故障排除非常困难

### 3）单线程

Javascript 一次只能执行一项任务。它根据类型将不同的任务排队到不同的队列中。

Javascript 基本上会将`同步任务`和`异步任务`分组，并将它们分开排队

- 同步任务：立即处理的语句，包括日志语句、变量声明、条件检查等

- 异步任务：可能需要可变时间来返回输出的任务

### 4）非阻塞

- 由于 JS 在单线程环境中运行，默认情况下，它不会进行等待！

- 异步代码块只有在所有同步代码块都执行完后才会执行，而不管代码在程序中的位置如何。

```js
console.log('我是第一个语句');

// 宏任务 macrotask（tasks）
setTimeout(() => {
  console.log('我是第二个语句');
}, 0);

// 微任务 microtask(jobs)
Promise.resolve().then(() => {
  console.log('我是第三个语句');
});

console.log('我是最后一个语句');
```

输出结果

```js
// 我是第一个语句
// 我是最后一个语句
// 我是第三个语句
// 我是第二个语句
```

### 5）高级

- JavaScript 是一种`高级语言`

- 高级语言可能只是意味着它们更接近人类所说的语言

- 高级语言能够提供更多功能来帮助程序员更好地表达他们正在尝试构建的内容

- `NodeJs` 允许开发人员使用 Javascript 来构建后端服务器

### 6）动态类型

Javascript 也是一种动态类型语言

Javascript 自动检测数据的类型，变量保存

```js
let a = 5;
console.log(a); // 5，Number类型

a = 'hello';
console.log(a); // 'hello'，String类型
```

## 3.变量提升

```js
console.log(a);
var a = 1;
// undefined，并不会报错，变量和函数的声明会移动到移动到函数或者全局代码的开头位置
```

原因：`JS 引擎会在正式执行代码之前进行一次”预编译“，预编译简单理解就是在内存中开辟一些空间，存放一些变量和函数`

- 1.页面创建 GO 全局对象（Global Object）对象（window 对象）

- 2.加载第一个脚本文件

- 3.脚本加载完毕后，进行语法分析

- 4.开始预编译

  - 查找函数声明，作为 GO 属性，值赋予函数体（函数声明优先）

  - 查找变量声明，作为 GO 属性，值赋予 undefined

- 5.解释执行代码（直到执行函数 b，该部分也被叫做词法分析）

  - 创建 AO 活动对象（Active Object）

  - 查找形参和变量声明，值赋予 undefined

  - 实参值赋给形参

  - 查找函数声明，值赋给函数体

  - 解释执行函数中的代码

- 6.第一个脚本文件执行完毕，加载第二个脚本文件

- 7.第二个文件加载完毕后，进行语法分析

- 8.开始预编译

  - 重复预编译步骤 ....

## 4.严格模式

严格模式 ( strict mode ) 是在 ECMAScript 5 中引入的 , 它为 JavaScript 定义了一种完全不同的解析和执行模型 , 在严格模式下 , 某些不安全的操作会抛出错误

- 在全局模式使用严格模式:

  ```js
  'use strict'; // 在脚本文件顶部添加
  function name() {
    // ...
  }
  ```

- 在函数内部使用严格模式:

  ```js
  function name() {
    'use strict'; // 在函数内部使用严格模式
    // ...
  }
  ```

## 5.语句

### 1）if 语句

```js
if (true) {
  // do something
} else {
  // do something
}
```

### 2）break 和 continue 语句

break 和 continue 语句用于在循环中精确地控制代码的执行

- break: 符合条件, 跳出循环并且不再执行循环体

- continue: 符合条件, 跳过本次循环, 进入下一次循环

### 3）with 语句

with 语句的作用是将代码的作用域设置到一个特定的对象中

- 严格模式下不允许使用 with 语句 , 将视为语法错误

- 大量使用 with 语句会导致性能下降, 也很难维护, 不建议使用 with 语句

```js
var obj = {
  a: 'aa',
  b: 'bb',
  c: 'cc',
};

// 一般获取
var a = obj.a;
var b = obj.b;
var c = obj.c;

// with获取
with (obj) {
  console.log(a, b, c);
}
// 输出： aa bb cc
```

### 4）switch 语句

witch 语句和 if 语句的关系最为密切 , 而且也是在其他语言中普遍适用的一种流控制语句

```js
var a;
switch (typeof a) {
  case 'number':
    console.log('数字');
    // break 用于跳出当前 switch 语句 , 如果省略将会继续执行下一个 case , 如果刻意忽略 break 需要注释说明
    break;
  case 'string':
    console.log('字符串');
    break;
  case 'undefined':
    console.log('未定义');
    break;
  default:
    console.log('默认');
}

// 输出：未定义
```

## 6.数组遍历

### 1）while 循环

前循环语句, 条件值为 false 时结束循环, 先判断条件再执行代码, 如果条件值一开始就是 false 直接跳过循环体里面的语句执行下一步操作

```js
var a = 1;
while (a < 1) {
  a++;
  console.log(a);
}
// 不会执行，不满足条件
```

### 2）do-while 循环

后循环语句, 条件值为 false 时结束循环, 不论条件值是什么, 肯定会执行一次代码

```js
var a = 1;
do {
  a++;
  console.log(a);
} while (a < 1);
// 执行一次，输出2
```

### 3）for 循环

```js
for (var i = 1; i < 10; i++) {
  // do something...
}

// 等同于
var i = 1;
while (i < 10) {
  // do something...
  i++;
}
```

将 for 循环中的表达式省略掉 , 就可以创建一个无限循环

```js
for (;;) {
  // 这是一个无限循环
  // do something...
}

// 等同于
while (true) {
  // 这是一个无限循环
  // do something...
}
```

### 3）for...in 循环

for-in 语句是一种精准的迭代语句 , 可以用来枚举对象的属性

- 1.遍历对象

```js
var obj = { name: 'lucy', age: 20 };
for (var k in obj) {
  console.log(`k: ${k}, obj[k]: ${obj[k]}`);
}
// k: name, obj[k]: lucy
// k: age, obj[k]: 20
```

- 2.遍历数组

```js
var arr = [1, 2, 3];
for (var i in arr) {
  console.log(`i: ${i}, a[i]: ${arr[i]}`);
}
// i: 0, a[i]: 1
// i: 1, a[i]: 2
// i: 2, a[i]: 3
```

缺点：`for…in 并不适合遍历数组`

- 1.数组的键名是数字，但是..in 循环是以字符串作为键名“0”、“1”、“2”等等

- 2.in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。

- 3.某些情况下，..in 循环会以任意顺序遍历键名

### 4）for...of 循环

可以遍历所有数据结构的统一的方法，但是不能遍历 object(object 没有迭代器对象所以无法遍历对象)

for of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的 next() 方法来遍历所有返回值

特点：

- 1.有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点

- 2.不同于 forEach 方法，它可以与 break、continue 和 return 配合使用

- 3.提供了遍历所有数据结构的统一操作接口

- 4.`无法遍历object`

```js
var arr = ['mini', 'small', 'large'];

for (var value of arr) {
  console.log(value);
}
// 'mini'
// 'small'
// 'large'
```

### 5）forEach 循环

array.forEach(function(currentValue, index, arr), thisValue)

- `currentValue` 是`必填`的，其他参数选填

- `无法中途跳出` forEach 循环，break 命令或 return 命令都不能奏效

**`forEach 在对 item 进行修改的时候`**

- 1.如果 item 是原始类型的值，item 对应的 的内存地址实际并没有变化

```js
var arr = [1, 2, 3];
arr.forEach((item) => {
  item += 1;
});
console.log(arr);
// [1, 2, 3]
```

- 2.如果 item 是 引用类型的值，item 对应多的内存地址也没有变化，但是对应的值，已经重写了

```js
var arr = [{ age: 1 }, { age: 2 }, { age: 3 }];
arr.forEach((item) => {
  item.age += 1;
});
console.log(arr);
// [{ age: 2 }, { age: 3 }, { age: 4 }]
```

### 6）map

`创建一个新的数组`，其中每一个元素由调用数组中的每一个元素执行提供的函数得来

var newArr = array.map(function(currentValue,index,arr), thisValue)

```js
var arr = [1, 2, 3];
var newArr = arr.map((item) => (item += 1));
console.log(newArr);
// [2, 3, 4]
```

### 7）filter

array.filter(function(currentValue,index,arr), thisValue)

- filter 返回的也是一个数组

- 但是返回的数组结构与原数组结构一致，可以说返回的数组是基于原数组的

```js
var arr = [1, 2, 3, 4, 5];
var newArr = arr.filter((item) => item > 3);
console.log(newArr);
// [4, 5]
```

### 8）some、every

- some: 若某一元素满足条件，返回 true，循环中断；所有元素不满足条件，返回 false

- every: 若某一元素不满足条件，返回 false，循环中断；所有元素满足条件，返回 true。

- 二者都可以被中断

- 二者都是用来做数组条件判断的，都是`返回一个布尔值`

```js
const list = [
  { name: '头部导航', backward: false },
  { name: '轮播', backward: true },
  { name: '页脚', backward: false },
];
const someBackward = list.some((item) => item.backward);
// someBackward: true
const everyNewest = list.every((item) => !item.backward);
// everyNewest: false
```

### 9）find、findIndex

- 二者都是用来查找数组元素

- find 方法返回数组中满足 callback 函数的第一个元素的值。如果不存在返回 undefined

- findIndex 它返回数组中找到的元素的索引，而不是其值，如果不存在返回 -1

```js
const list = [
  { name: '头部导航', id: 1 },
  { name: '轮播', id: 2 },
  { name: '页脚', id: 3 },
];
const result = list.find((item) => item.id === 3);
// result: { name: '页脚', id: 3 }
result.name = '底部导航';
// list: [
//   { name: '头部导航', id: 1 },
//   { name: '轮播', id: 2 },
//   { name: '底部导航', id: 3 },
// ]

const index = list.findIndex((item) => item.id === 3);
// index: 2
list[index].name; // '底部导航';
```

### 10）reduce、reduceRight

- 1.reduce 方法接收两个参数，第一个参数是回调函数（callback） ，第二个参数是初始值（initialValue）

- 2.reduceRight 方法除了与 reduce 执行方向相反外(从右往左)，其他完全与其一致

- 3.回调函数(callback)接收四个参数：

  - accumulator: 截至当前元素，之前所有的数组元素被回调函数处理累计的结果

  - current: 当前被执行的数组元素

  - currentIndex: 当前被执行的数组元素索引

  - ourceArray：原数组，也就是调用 reduce 方法的数组

- 4.如果不传入初始值，reduce 方法会从索引 1 开始执行回调函数，如果传入初始值，将从索引 0 开始、并从初始值的基础上累计执行回调。

```js
// 不传入初始值
var list = [
  { name: 'left', width: 20 },
  { name: 'center', width: 70 },
  { name: 'right', width: 10 },
];
var total = list.reduce((currentTotal, item) => {
  return currentTotal + item.width;
});
console.log(total);
// [object Object]7010，索引1为{ name: 'left', width: 20 }

// 传入初始值
var list = [
  { name: 'left', width: 20 },
  { name: 'center', width: 70 },
  { name: 'right', width: 10 },
];
var total = list.reduce((currentTotal, item) => {
  return currentTotal + item.width;
}, 0);
console.log(total);
// 100
```

reduce 很强大，更多技巧查看[《25 个你不得不知道的数组 reduce 高级用法》](https://juejin.cn/post/6844904063729926152)

## 7.对象遍历

### 1）for in

```js
var obj = { name: 'lucy', age: 20 };
for (var k in obj) {
  console.log(`k: ${k}, obj[k]: ${obj[k]}`);
}
// k: name, obj[k]: lucy
// k: age, obj[k]: 20
```

### 2）Object.keys

用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组

- `不包括不可枚举属性，原型属性，Symbol`

```js
var obj = { name: 'lucy', age: 20 };
Object.defineProperty(obj, 'method', {
  value: function () {
    alert('Non enumerable property');
  },
  enumerable: false,
});
console.log(Object.keys(obj));
// ['name', 'age']
```

### 3）Object.values

用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性值组成的数组

```js
var obj = { name: 'lucy', age: 20 };
console.log(Object.values(obj));
// ['lucy', 20]
```

### 4）Object.entries

用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回二维数组。每一个子数组由对象的属性名、属性值组成。可以同时拿到属性名与属性值的方法

```js
var obj = { name: 'lucy', age: 20 };
console.log(Object.entries(obj));
// [['name', 'lucy'], ['age', 20]]
```

### 5）Object.getOwnPropertyNames

用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组

`包括不可枚举属性。不包括Symbol，不包括原型`

```js
var obj = { name: 'lucy', age: 20 };
Object.defineProperty(obj, 'method', {
  value: function () {
    alert('Non enumerable property');
  },
  enumerable: false,
});
console.log(Object.getOwnPropertyNames(obj));
// ['name', 'age', 'method']
```

### 6）Reflect.ownKeys

返回所有自有属性 key，不管是否可枚举，但不包括继承自原型的属性

```js
var obj = { name: 'lucy', age: 20 };
Object.defineProperty(obj, 'method', {
  value: function () {
    alert('Non enumerable property');
  },
  enumerable: false,
});
console.log(Reflect.ownKeys(obj));
// ['name', 'age', 'method']
```

## 8.void 运算符

### 1）void 是什么

void 运算符 对给定的表达式进行求值，然后返回 `undefined`，通常用 `void 0`

```js
void xx => undefined
```

### 2）void 的作用

**1.JavaScript URIs**

- 阻止 a 标签的默认事件

  ```js
  <a href="javascript:void(0);">
  ```

**2.立即调用的函数表达式**

- void 运算符让 JavaScript 引擎把一个 function 关键字识别成函数表达式而不是函数声明（语句）

  ```js
  void function getName() {
    console.log('void');
  };

  console.log(getName); // 报错: getName is not defined
  ```

- 立即使用，而不进行声明

  ```js
  void (function getName() {
    console.log('void');
  })();
  // 输出：void
  ```

**3.在箭头函数中避免泄漏**

- 右侧调用了一个原本没有返回值的函数，其返回值改变后，则会导致非预期的副作用

- 当函数返回值是一个不会被使用到的时候，应该使用 void 运算符，来确保返回 undefined

```js
button.onclick = () => void doSomething();
```

- 确保了当 doSomething 的返回值从 undefined 变为 true 的时候，不会改变函数的行为

### 3）void 优先级

- void 运算符的优先级比较高（14）

  ```js
  console.log(void 2 - 1); //返回NaN
  console.log(void (2 - 1)); //返回undefined
  ```

### 4）为什么要用 void

undefined 在 JavaScript 中是一个保留字，但是也可以被赋值，如果` undefined 被污染`，用 undefined 所做的判断就不准确了，因此用 `void 可以确保一定返回 undefined`

```js
function test() {
  var undefined = '我是字符串';
  console.log(undefined); // 我是字符串
  console.log(void 0); // undefined
}
test();
```

## 9.arguments

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

## 10.callee

被召者

- 1.callee 是 arguments 对象的属性

- 2.arguments.callee 指向参数所属的当前执行的函数. 就是说 callee 返回正在被执行的 function 对象, 也就是所指定的 function 对象的正文.

- 3.callee 属性的初始值就是正被执行的 Function 对象

- 4.callee 表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性

- 5.callee 拥有 length 属性，这个属性可用于验证。arguments.length 是实参长度,arguments.callee.length 是形参长度，可以判断调用时形参长度是否和实参长度一致

## 11.caller

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

## 12.函数式编程与命令式编程

### 1）回调函数

- 把一个函数作为值传递给另外一个函数，在另外一个函数中把这个函数执行（这是实现函数式编程重要的知识）

### 2）函数式编程

- `注重结果`，不在乎过程，过程交给别人处理，体现`函数封装性思想`(提倡)

- 把`逻辑如何实现`封装成为 API 方法，我们以后只要调取 API 方法，即可获取想要的结果即可

```js
let arr = [10, 20, 30, 40, 50];

let res = arr.reduce((n, item) => {
  return n + item;
});
```

### 3）命令式编程

- `注重过程`，需要自己去实现过程

- 用代码实现主要的逻辑，注重过程

```js
let res = 0;
for (let i = 0; i < arr.length; i++) {
  res += arr[i];
}
```

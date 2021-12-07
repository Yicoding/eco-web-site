---
toc: menu
---

# ES6(ES2015)

![image](images/es/2.png)

## 1.let 和 const

### 1）区别

- var 有变量提升，有初始化提升，值可变
- let 有变量提升，没有初始化提升，值可变
- const 有变量提升，没有初始化提升，值不可变，但如果是定义对象，则属性可变

|                | var | let | const |
| :------------- | :-- | :-- | :---- |
| 变量提升       | √   | ×   | ×     |
| 全局变量       | √   | ×   | ×     |
| 重复声明       | √   | ×   | ×     |
| 重新赋值       | √   | √   | ×     |
| 暂时性死区     | ×   | √   | √     |
| 块级作用域     | ×   | √   | √     |
| 只声明不初始化 | √   | √   | ×     |

### 2）暂时性死区

- 说明：let 和 const 是有变量提升的，但是没有初始化提升

```js
var name = 'Bob';

function fn() {
  console.log(name);
  let name = 'Lucy';
}
fn(); // Cannot access 'name' before initialization
```

### 3）块级作用域解决问题

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // 5 5 5 5 5

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // 0 1 2 3 4
```

## 2.函数参数默认值

### 1）ES6 之前

- ES6 之前，写函数需要定义初始值的时候，需要这么写：

  ```js
  function fn(name, age) {
    var name = name || 'Bob';
    var age = age || 18;
    console.log(name, age);
  }
  fn(); // Bob 18
  ```

### 2）ES6 写法

- 可以使用 ES6 的默认参数

  ```js
  function fn(name = 'Bob', age = 18) {
    console.log(name, age);
  }
  fn(); // Bob 18
  fn('Lucy', 22); // Lucy 22
  ```

## 3.扩展运算符

- 扩展运算符可以在函数调用/数组构造时, 将数组表达式或者 string 在语法层面展开；还可以在构造字面量对象时, 将对象表达式按 key-value 的方式展开

### 1）ES6 之前

```js
const arr1 = [1, 2, 4];
const arr2 = [4, 5, 7];
const arr3 = [7, 8, 9];

const arr = arr1.concat(arr2).concat(arr3); // [1, 2, 4, 4, 5, 7, 7, 8, 9]
```

### 2）ES6 写法

```js
const arr1 = [1, 2, 4];
const arr2 = [4, 5, 7];
const arr3 = [7, 8, 9];

const arr = [...arr1, ...arr2, ...arr3]; // [1, 2, 4, 4, 5, 7, 7, 8,
```

## 4.剩余参数

- 一个函数，传入参数的个数是不确定的，这就可以用 ES6 的剩余参数

```js
function fn(name, ...params) {
  console.log(name);
  console.log(params);
}
fn('Bob', 1, 2); // Bob [ 1, 2 ]
fn('Bob', 1, 2, 3, 4, 5); // Bob [ 1, 2, 3, 4, 5 ]
```

## 5.模板字符串

- 用来拼接字符串

### 1）ES6 之前

```js
const name = 'Bob';
const age = '22';

console.log(name + '今年' + age + '岁啦'); // Bob今年22岁啦
```

### 2）ES6 写法

```js
const name = 'Bob';
const age = '22';

console.log(`${name}今年${age}岁啦`); // Bob今年22岁啦
```

## 6.解构赋值

### 1）ES6 之前

```js
const obj = {
  name: 'Bob',
  age: 22,
  gender: '男',
};

const name = obj.name;
const age = obj.age;
const gender = obj.gender;
console.log(name, age, gender); // Bob 22 男
```

### 2）ES6 写法

**1.对象解构**

```js
const obj = {
  name: 'Bob',
  age: 22,
  gender: '男',
  doing: {
    morning: '摸鱼',
    afternoon: '摸鱼',
    evening: 'sleep',
  },
};

const { name, age, gender } = obj;
console.log(name, age, gender); // Bob 22 男

// 解构重名
const { name: myname } = obj;
console.log(myname); // Bob

// 嵌套解构
const {
  doing: { evening },
} = obj;
console.log(evening); // sleep
```

**2.数组解构**

```js
const arr = [1, 2, 3];

const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// 默认赋值
const [a, b, c, d = 5] = arr;
console.log(a, b, c, d); // 1 2 3 5

// 乱序解构
const { 1: a, 0: b, 2: c } = arr;
console.log(a, b, c); // 2 1 3
```

## 7.箭头函数

- 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数

### 1）ES6 之前

```js
function fn() {}

const fn = function () {};
```

### 2）ES6 写法

```js
const fn = () => {};

// 如果只有一个参数，可以省略括号
const fn = (name) => {};

// 如果函数体里只有一句return
const fn = (name) => {
  return 2 * name;
};
// 可简写为
const fn = (name) => 2 * name;
// 如果返回的是对象
const fn = (name) => ({ name: name });
```

### 3）普通函数和箭头函数的区别

- 1、箭头函数不可作为构造函数，不能使用 new
- 2、箭头函数没有自己的 this
- 3、箭头函数没有 arguments 对象
- 4、箭头函数没有原型对象

## 8.对象属性简写

### 1）ES6 之前

```js
var cat = 'Miaow';
var dog = 'Woof';
var bird = 'Peet peet';

var someObject = {
  cat: cat,
  dog: dog,
  bird: bird,
};
```

### 2）ES6 写法

```js
const cat = 'Miaow';
const dog = 'Woof';
const bird = 'Peet peet';

const someObject = {
  cat,
  dog,
  bird,
};

console.log(someObject);

// { cat: 'Miaow', dog: 'Woof', bird: 'Peet peet' }
```

## 9.模块化（Module）

在 ES6 之前，JS 并没有模块化的概念，有的也只是社区定制的类似 CommonJS 和 AMD 之类的规则。例如基于 CommonJS 的 NodeJS

### 1）ES6 之前

```js
// circle.js
// 输出
const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;

// index.js
// 输入
const circle = require('./circle.js');
console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);
```

### 2）ES6 写法

```js
// circle.js
// 输出
const { PI } = Math
export const area = (r) => PI * r ** 2
export const circumference = (r) => 2 * PI * r

// index.js
// 输入
import { area } = './circle.js'
console.log(`半径为 4 的圆的面积是: ${area(4)}`)

```

## 10.对象扩展

### 1）Object.is

- 对比两值是否相等

```js
Object.is('foo', 'foo'); // true
Object.is({}, {}); // false
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
```

### 3）Object.assign

- 合并对象(浅拷贝)，返回原对象

  - 第一个参数是目标对象，后面的参数都是源对象

```js
var obj = { a: 1 };

var p1 = Object.assign(obj);
console.log(obj); // {a: 1}
console.log(p1); // {a: 1}

var p2 = Object.assign({}, obj, { b: 2 });
console.log(obj); // {a: 1}
console.log(p2); // {a: 1, b: 2}

var p3 = Object.assign(obj, { b: 2 });
console.log(obj); // {a: 1, b: 2}
console.log(p3); // {a: 1, b: 2}
```

### 1）Object.keys

- 返回一个给定对象的自身可枚举属性组成的数值

```js
const obj = {
  name: 'Bob',
  age: 22,
  gender: '男',
};

const keys = Object.keys(obj);
console.log(keys); // [ 'name', 'age', 'gender' ]
```

### 2）

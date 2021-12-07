---
toc: menu
---

# ES6(ES2015)

![image](images/es/2.png)

## 1.声明 let 和 const

### 1）区别

- var: `有`变量提升，`有`初始化提升，值`可变`
- let: `有`变量提升，`没有`初始化提升，值`可变`，声明`变量`
- const: `有`变量提升，`没有`初始化提升，值`不可变`，但如果是定义对象，则属性可变，声明`常量`

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

### 4）作用

- 作用域

  - 全局作用域
  - 函数作用域：`function() {}`
  - 块级作用域：`{}`

- 作用范围

  - var 命令在全局代码中执行
  - const 命令和 let 命令只能在代码块中执行

- 赋值使用

  - const 命令声明常量后必须立马赋值
  - let 命令声明变量后可立马赋值或使用时赋值

- 声明方法
  - var、const、let、function、class、import

### 5）重点难点

- 不允许重复声明
- 未定义就使用会报错：const 命令和 let 命令不存在变量提升
- 暂时性死区：在代码块内使用 const 命令和 let 命令声明变量之前，该变量都不可用

## 2.解构赋值

### 1）定义

- `字符串解构`：const [a, b, c, d, e] = "hello"
- `数值解构`：const { toString: s } = 123
- `布尔解构`：const { toString: b } = true

- `对象解构`

  - 形式：const { x, y } = { x: 1, y: 2 }
  - 默认：const { x, y = 2 } = { x: 1 }
  - 改名：const { x, y: z } = { x: 1, y: 2 }

- `数组解构`

  - 规则：数据结构具有 Iterator 接口可采用数组形式的解构赋值
  - 形式：const [x, y] = [1, 2]
  - 默认：const [x, y = 2] = [1]

- `函数参数解构`
  - 数组解构：function Func([x = 0, y = 1]) {}
  - 对象解构：function Func({ x = 0, y = 1 } = {}) {}

### 2）应用场景

- 交换变量值：[x, y] = [y, x]
- 返回函数多个值：const [x, y, z] = Func()
- 定义函数参数：Func([1, 2])
- 提取 JSON 数据：const { name, version } = packageJson
- 定义函数参数默认值：function Func({ x = 1, y = 2 } = {}) {}
- 遍历 Map 结构：for (let [k, v] of Map) {}
- 输入模块指定属性和方法：const { readFile, writeFile } = require("fs")

### 3）重点难点

- 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
- 解构默认值生效条件：属性值严格等于 `undefined`
- 解构遵循匹配模式
- 解构不成功时变量的值等于 `undefined`
  `undefined` 和 `null` 无法转为对象，因此无法进行解构

## 3.字符串扩展 String

- Unicode 表示法：`大括号包含`表示 Unicode 字符(\u{0xXX}或\u{0XXX})
- 字符串遍历：可通过`for-of`遍历字符串
- `字符串模板`：可单行可多行可插入变量的增强版字符串 ``

  ```js
  const name = 'Bob';
  const age = '22';
  console.log(`${name}今年${age}岁啦`); // Bob今年22岁啦
  ```

- 标签模板：函数参数的特殊调用
- String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
- String.fromCodePoint()：返回码点对应字符
- codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
- normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode 正规化)
- `repeat()`：把字符串重复 n 次，返回新字符串
  ```js
  var a = 'a';
  console.log(a.repeat(5)); // aaaaa
  ```
- matchAll()：返回正则表达式在字符串的所有匹配
- `includes()`：是否存在指定字符串

  ```js
  var a = 'hello world';
  console.log(a.includes(e)); // true
  ```

- startsWith()：是否存在字符串头部指定字符串
- endsWith()：是否存在字符串尾部指定字符串

## 4.数值扩展 Number

- 二进制表示法：0b 或 0B 开头表示二进制(0bXX 或 0BXX)
- 八进制表示法：0o 或 0O 开头表示二进制(0oXX 或 0OXX)
- Number.EPSILON：数值最小精度
- Number.MIN_SAFE_INTEGER：最小安全数值(-2^53)
- Number.MAX_SAFE_INTEGER：最大安全数值(2^53)
- Number.parseInt()：返回转换值的整数部分
- Number.parseFloat()：返回转换值的浮点数部分
- Number.`isFinite`()：是否为有限数值
- Number.`isNaN`()：是否为 NaN
- Number.isInteger()：是否为整数
- Number.isSafeInteger()：是否在数值安全范围内
- Math.trunc()：返回数值整数部分
- Math.sign()：返回数值类型(正数 1、负数-1、零 0)
- Math.cbrt()：返回数值立方根
- Math.clz32()：返回数值的 32 位无符号整数形式
- Math.imul()：返回两个数值相乘
- Math.fround()：返回数值的 32 位单精度浮点数形式
- Math.hypot()：返回所有数值平方和的平方根
- Math.expm1()：返回 e^n - 1
- Math.log1p()：返回 1 + n 的自然对数(Math.log(1 + n))
- Math.log10()：返回以 10 为底的 n 的对数
- Math.log2()：返回以 2 为底的 n 的对数
- Math.sinh()：返回 n 的双曲正弦
- Math.cosh()：返回 n 的双曲余弦
- Math.tanh()：返回 n 的双曲正切
- Math.asinh()：返回 n 的反双曲正弦
- Math.acosh()：返回 n 的反双曲余弦
- Math.atanh()：返回 n 的反双曲正切

## 5.对象扩展 Object

- 简洁表示法：直接写入变量和函数作为对象的属性和方法(`{ prop, method() {} }`)
- 属性名表达式：字面量定义对象时使用`[]`定义键(`[prop]`，不能与上同时使用)
- 方法的 name 属性：返回方法函数名

  - 取值函数(getter)和存值函数(setter)：`get/set` 函数名(属性的描述对象在 get 和 set 上)
  - bind 返回的函数：`bound 函数名`
  - Function 构造函数返回的函数实例：`anonymous`

- 属性的可枚举性和遍历：描述对象的 enumerable
- super 关键字：指向当前对象的原型对象(只能用在对象的简写方法中 method() {})
- Object.`is`()：对比两值是否相等

  ```js
  Object.is('foo', 'foo'); // true
  Object.is({}, {}); // false
  Object.is(+0, -0); // false
  Object.is(NaN, NaN); // true
  ```

- Object.`assign`()：合并对象(浅拷贝)，返回原对象

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

- Object.getPrototypeOf()：返回对象的原型对象
- Object.setPrototypeOf()：设置对象的原型对象
- \_\_proto\_\_：返回或设置对象的原型对象

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

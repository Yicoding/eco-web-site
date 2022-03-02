---
toc: menu
---

# 类型转换

## 1.显示转换

### 1）Number

> 转换成数值

```js
Number(true); // 1
Number(false); // 0
Number(10); // 10
Number(null); // 0
Number(undefined); // NaN
Number(); // 0
Number(''); // 0
Number('00012'); // 12
Number('hello'); // NaN
```

### 2）parseInt

> 取整

```
parseInt 第二个参数: 转换时使用的基数(即多少进制)
  重点: parseInt(string,radix)
  radix：解析字符串的基数，基数规则如下
    1）区间范围介于 2~36 之间
    2）当参数为 0，parseInt() 会根据十进制来解析
```

```js
parseInt(); // NaN
parseInt(''); // NaN
parseInt(null); // NaN
parseInt(undefined); // NaN
parseInt(true); // NaN
parseInt(false); // NaN
parseInt('123blue'); // 123
parseInt('a123blue'); // NaN
parseInt(22.5); // 22

[1, 2, 3].map(parseInt); // [1, NaN, NaN]
// ===>
[1, 2, 3].map((item, index) => {
  return parseInt(item, index);
});
// ===>
parseInt(1, 0); // 1
parseInt(2, 1); // NaN(1不在parseInt第二个参数解析区间内)
parseInt(3, 2); // NaN(用2进制来解析，应以 0 和 1 开头，所以结果为 NaN)

// parseFloat
[1, 2, 3].map(parseFloat); // [1,2,3]
```

### 3）parseFloat

> 取浮点数

```js
parseFloat(); // NaN
parseFloat(''); // NaN
parseFloat(null); // NaN
parseFloat(undefined); // NaN
parseFloat(true); // NaN
parseFloat(false); // NaN
parseFloat('123blue'); // 123
parseFloat('22.5'); // 22.5
parseFloat('22.5.2'); // 22.5
parseFloat('0901.5'); // 901.5
```

### 4）String

```js
String(); // ''
String(1); // '1'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'
String([1, 2, 3]); // 1,2,3
String({ name: 1 }); // '[object Object]'
String([{ name: 1 }]); // '[object Object]'
String(function () {
  console.log(1);
}); // 'function() {console.log(1)}'
String(new Date()); // 'Mon Nov 29 2021 10:31:45 GMT+0800 (中国标准时间)'
```

### 5）toString

```js
// 整数转换
1.toString(); // 报错，因为 JavaScript 解析器把 . 和 1 连在了一起
// 解决：
1..toString(); // '1'
(1).toString(); // '1'

// 小数转换
1.2.toString(); // '1.2'

// 字符串、 boolean类型、数组、Date也可以调用
'1'.toString(); // '1'
true.toString(); // 'true'
false.toString() // 'false'
[1,2,3].toString(); // '1,2,3'
new Date().toString() // 'Mon Nov 29 2021 10:47:57 GMT+0800 (中国标准时间)'

// null、undefined、object
[{name: 1}].toString(); // '[object Object]'
null.toString(); // 报错
undefined.toString(); // 报错
{}.toString(); // 报错
```

### 6）Boolean

```js
Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(''); // false
```

## 2.隐式转换

在 js 中，当运算符在运算时，如果两边数据不统一，CPU 就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算，这种无需程序员手动转换，而由编译器自动转换的方式就称为隐式转换

### 1）转换为 String 类型

- 转换为 String 类型：可以为任意的数据类型加一个空串的形式将其转换为字符串

- 原理和 String()函数一样

```js
1 + '2'; // '12'
```

### 2）转换为 Number 类型

- 可以通过一元的 + （+0 /1 \*1）来将一个其他的数据类型转换为 Number。

- 原理和 Number()函数一样

```js
var a = '10';
console.log(+a); // 10
console.log(a / 1); // 10
console.log(a * 1); // 10
```

### 3）转成 boolean 类型

- `!` 逻辑非运算符

### 4）== 的转换规则

- 如果其中一个操作数为布尔类型，那么先将布尔类型转换为数字类型

- 如果一个对象与数字或字符串向比较，JavaScript 会尝试返回对象的默认值。操作符会尝试通过方法 valueOf 和 toString 将对象转换为其原始值（一个字符串或数字类型的值）。如果尝试转换失败，会产生一个运行时错误

  1.转换时如果两边都是引用类型，则直接比较内存中的地址（也就是指针指向的地址）

  ```js
  [] == []; //false，指针指向的地址不同
  ```

  2.如果两边类型不一致，则两边都转成 number 类型，引用类型先调用 valueOf()方法，如果能转成数字就 OK，不能转成数字的话，就调用 toString()转成字符串

  ```js
  '123' == false; // false,'123'转成数字是123,右侧转成数字是0,最终比较123==0
  '123' == 123; // true,右边是数字，直接转换左右即可

  [] == 0; // true
  ```

  3.null、NaN、undefined 和 string、number、boolean、object 类型比较时，都不做隐式转换，比较的结果直接为 false

  ```js
  // 特殊情况
  NaN == NaN; //false
  undefined == null; //true
  null == null; //true
  null == undefined; //true
  ```

### 5）大于或小于符

- 字符串类型比较大小时，不进行类型转换，而是逐位比较 ascii 码，第 1 位不同则返回结果，否则继续比较第 2 位，直到某一位不同为止

  ```js
  console.log('23' < '3'); // true
  ```

- sort()方法默认的比较规则会先把每个元素转成字符串，然后比较字符串的 ascii 码来确定先后顺序

  ```js
  [1, 10, 3, 100].sort(); // [1, 10, 100, 3]

  // 正确做法
  [1, 10, 3, 100].sort(function (a, b) {
    return a - b;
  }); // [1, 10, 100, 3]
  ```

### 6）+号规则

- A + B

- 第一步：如果 A 和 B 都是 number 类型，直接相加；

- 第二步：接下来看 A 或 B 中是否有一个是否为 string 类型，如果有，则将另一个也转成字符串，然后连接；

- 第三步：既不是 number,也不是 string,则按如下规则转换：

  - 1.能转换成数字，返回之

  - 2.否则调用 valueOf()，如果执行结果是基本类型，返回之

  - 3.否则调用 toString()，如果执行结果是基础类型，返回之

  - 4.无法得到原始值，抛异常

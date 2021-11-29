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
parseInt(3, 2); // Nan(用2进制来解析，应以 0 和 1 开头，所以结果为 NaN)

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

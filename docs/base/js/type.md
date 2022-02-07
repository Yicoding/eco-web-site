---
toc: menu
---

# 数据类型

![image](images/base/2.png)

> 分为基本数据类型和引用数据类型

## 1.基本类型

> 存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置

| 分类      |     名称     |
| :-------- | :----------: |
| String    |    字符串    |
| Number    |     数值     |
| Boolean   |    布尔值    |
| Null      |      空      |
| Undefined |    未定义    |
| Symbol    | 独一无二的值 |
| BigInt    |    大整数    |

## 2.引用类型 Object

> 存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的`内存地址`

| 分类     |      名称      |
| :------- | :------------: |
| Object   |      对象      |
| Array    |      数组      |
| Function |      函数      |
| Date     |      日期      |
| RegExp   |      正则      |
| Error    | 运行时错误对象 |

## 3.JS 数据类型

> `String`、 `Number`、 `Boolean`、 `Null`、 `Undefined`、 `Object` 以及 ESNext 新加的 `Symbol`和`BigInt`

## 4.null 和 undefined 区别

### 定义

```
null: object 类型，表示一个值被定义了，但是这个值是"空值"，代表一个`空对象指针`

undefined: undefined 类型，代表`未定义`
```

### 转换值

```js
Number(null); // 0
1 + null; // 1
Number(undefined); // NaN
1 + undefined; // NaN
```

### 判断题

```js
null == undefined; // true

null === undefined; // false
```

## 5.NaN

```
代表非数值(Not a Number)，是一个特殊的数值: typeof NaN => 'number'

两个特点
  1.任何涉及 NaN 的操作都返回 NaN: 例如 NaN/10 => NaN
  2.NaN 与任何值都不相等，包括 NaN 本身: NaN === NaN => false

使用isNaN: 判断 NaN
```

```js
isNaN(NaN); // true
isNaN(10); // false
isNaN('10'); // false
isNaN('blue'); // true (不能被转换成数值)
isNaN(true); // false (true被转化成数值1)
isNaN(false); // false (true被转化成数值0)
```

## 6.其他

```js
// Undefined
var a;
console.log(a === undefined); // true
console.log(a); // undefined

// Number
var b = 3.125e7; // 代表 3.125 * 10^7
console.log(b); // 31250000

// 精度缺失
console.log(0.1 + 0.2); // 0.30000000000000004
// 原因: 浮点数值计算会产生舍入误差的问题，这是使用基于IEEE754数值的浮点计算的通病，并非js独有

// 解决方案
console.log(parseFloat((0.1 + 0.2).toFixed(10)));
(0.1 * 10 + 0.2 * 10) / 10; // 转换为整数
```

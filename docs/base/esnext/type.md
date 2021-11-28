---
hide: true
title: 数据类型
---

> 分为基本数据类型和引用数据类型

`1.基本类型`

> 存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置

| 分类      |     名称     |
| :-------- | :----------: |
| String    |    字符串    |
| Number    |     数字     |
| Boolean   |     布尔     |
| Null      |      空      |
| Undefined |    未定义    |
| Symbol    | 独一无二的值 |
| BigInt    |    大整数    |

`2.引用类型`

> 存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的`内存地址`

| 分类     | 名称 |
| :------- | :--: |
| Object   | 对象 |
| Array    | 数组 |
| Function | 函数 |

`3.JS数据类型`

> `String`、 `Number`、 `Boolean`、 `Null`、 `Undefined`、 `Object` 以及 ES6 新加的 `Symbol`和`BigInt`

`4.null 和 undefined 区别`

> 1.定义
>
> > null: object 类型，表示一个值被定义了，但是这个值是"空值"，代表一个`空对象指针`
>
> > undefined: undefined 类型，代表`未定义`

> 2.转换值
>
> > Number(null) => 0
>
> > 1 + null => 1
>
> > Number(undefined) => NaN
>
> > 1 + undefined => NaN

> 3.判断题
>
> > null == undefined => true
>
> > null === undefined => false

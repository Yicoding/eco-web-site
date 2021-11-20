---
hide: true
title: 数据类型检测
---

`1.typeof`

> typeof 操作符可以用来判断变量的数据类型
>
> > 对于值类型有四种结果（undefined、string、number、boolean）
> >
> > > 对于引用类型有两种结果（function、object）
> > >
> > > > 注意: typeof null === 'object'

| 执行                |   输出    |
| :------------------ | :-------: |
| typeof ""           |  string   |
| typeof 1            |  number   |
| typeof true         |  boolean  |
| typeof null         |  object   |
| typeof undefined    | undefined |
| typeof []           |  object   |
| typeof function(){} | function  |
| typeof {}           |  object   |

`2.instanceof`

> instanceof 操作符用来`判断引用类型`
>
> > 语法：A instanceof B
> >
> > > 判断规则：沿着 A 的`_proto_`属性这条线来找，同时沿着 B 的 prototype 属性这条线，若果两条线能找到同一个引用，即 同一个对象，则返回 true
> > >
> > > > instanceof 表示的就是原型链的结构

> 用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的`原型链`上
>
> > 无法通过对象来获得类名(例如: `typeof ''` 得到的类名是`string`)，只能检测对象是否属于指定的类名(例如: `a instanceof String`)

```jsx
/**
 * defaultShowCode: true
 */

var simpleStr = 'This is a simple string';
var myString = new String();
var newStr = new String('String created with constructor');
var myDate = new Date();
var myObj = {};
var myNonObj = Object.create(null);

simpleStr instanceof String; // 返回 false, simpleStr并不是对象
myString instanceof String; // 返回 true
newStr instanceof String; // 返回 true
myString instanceof Object; // 返回 true

myObj instanceof Object; // 返回 true, 尽管原型没有定义
({} instanceof Object); // 返回 true, 同上
myNonObj instanceof Object; // 返回 false, 一种创建非 Object 实例的对象的方法

myString instanceof Date; // 返回 false

myDate instanceof Date; // 返回 true
myDate instanceof Object; // 返回 true
myDate instanceof String; // 返回 false
```

`3.手动实现instanceof`

> 核心: 原型链的向上查找

```jsx
/**
 * defaultShowCode: true
 */

function myInstanceof(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== 'object' || left === null) return false;
  // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) {
    // 查找到尽头，还没找到
    if (proto == null) return false;
    // 找到相同的原型对象
    if (proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// 测试
console.log(myInstanceof('111', String)); // false
console.log(myInstanceof(new String('111'), String)); // true
```

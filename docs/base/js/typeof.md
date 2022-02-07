---
toc: menu
---

# 数据类型检测

## 1.typeof

```
1.typeof 操作符可以用来判断变量的数据类型:

  对于值类型有四种结果（undefined、string、number、boolean）

  对于引用类型有两种结果（function、object）

2.注意: typeof null === 'object'
```

```js
typeof ''; // 'string'
typeof 1; // 'number'
typeof true; // 'boolean'
typeof null; // 'object'
typeof undefined; // 'undefined'
typeof []; // 'object'
typeof function () {}; // 'function'
typeof {}; // 'object'
```

## 2.instanceof

### 1）说明

```
1.instanceof 操作符用来判断 引用类型

  语法：A instanceof B

2.判断规则：沿着 A 的_proto_属性这条线来找，同时沿着 B 的 prototype 属性这条线，若果两条线能找到同一个引用，即 同一个对象，则返回 true

  instanceof 表示的就是原型链的结构

3.用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的`原型链`上

  无法通过对象来获得类名(例如: `typeof ''` 得到的类名是`string`)，只能检测对象是否属于指定的类名(例如: `a instanceof String`)
```

```js
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

### 2）手动实现 instanceof

> 核心: 原型链的向上查找

```js
function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if (typeof left !== 'object' || left === null) return false;
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) {
    //循环往下寻找，直到找到相同的原型对象
    if (proto === null) return false;
    if (proto === right.prototype) return true; //找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto);
  }
}
// 验证一下自己实现的myInstanceof是否OK
console.log(myInstanceof(new Number(123), Number)); // true
console.log(myInstanceof(123, Number));
```

## 3.constructor

> JS 规定，每个构造函数都会有一个 prototype 属性，即为构造函数的原型对象，而原型对象中会有一个 constructor 属性指回到构造函数。当利用构造函数创建新对象时，原型上的 constructor 属性也会被遗传到新创建的对象上，从原型链的角度讲，构造函数也代表了对象的类型

```js
new Number(1).constructor == Number; //true
new String(1).constructor == String; //true
true.constructor == Boolean; //true
new Object().constructor == Object; //true
new Error().constructor == Error; //true
```

## 4.Object.prototype.toString.call()

> toString()方法是 Object 原型上的方法，调用此方法，返回格式为[object,xxx]，xxx 即为判断的结果。对于 Object 对象可以直接调用 Object.prototype.toString()，对于其他数据类型，需要通过.call()来调用

```js
Object.prototype.toString({}); // '[object Object]'
Object.prototype.toString.call(''); // '[object String]'
Object.prototype.toString.call(1); // '[object Number]'
Object.prototype.toString.call(true); // '[object Boolean]'
Object.prototype.toString.call(undefined); // '[object Undefined]'
Object.prototype.toString.call(null); // '[object Null]'
Object.prototype.toString.call(Symbol()); // '[object Symbol]'
Object.prototype.toString.call(new Error()); // '[object Error]'
```

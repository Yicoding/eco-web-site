---
toc: menu
---

# 零散知识点

## 1.i++ 和 ++i

### 1）区别

- i++: 先赋值，再自增

  ```js
  var a = 1;
  var b = a++;
  console.log(`a: ${a}, b: ${b}`); // 2, 1
  ```

- ++i: 先自增，再赋值

  ```js
  var a = 1;
  var b = ++a;
  console.log(`a: ${a}, b: ${b}`); // 2, 2
  ```

### 2）在循环体中没有区别

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

```js
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

### 3）执行效率

- i++

  ```js
  j = i;
  i += 1;
  return j;
  ```

- ++i

  ```js
  i += 1;
  return i;
  ```

## 2.循环执行效率

- `for 和 do while 循环效率最高`

- `for ~= do while > forEach ~= map ~= every > $.each > $(e).each > for in`

## 3. +new Date()

会转数字，等同于 new Date().getTime()

```js
console.log(new Date()); // Tue Nov 30 2021 23:11:55 GMT+0800 (中国标准时间)
console.log(+new Date()); // 1638285115767
```

## 4. 0.1 + 0.2 != 0.3

### 1）原因

因为 JS 采用 IEEE 754 双精度版本（64 位），并且只要采用 IEEE 754 的语言都有该问题。

```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
```

```js
0.100000000000000002 === 0.1; // true
0.200000000000000002 === 0.2; // true\

console.log(0.100000000000000002); // 0.1
```

所以

```js
0.1 + 0.2 === 0.30000000000000004; // true
```

### 2）解决

```js
parseFloat((0.1 + 0.2).toFixed(10)); // 0.3
```

## 5. == 和 === 的区别

### 1）==

只比较双方的值，如果双方的类型不一样，先进行类型转换，转换成一样的类型，然后再比较值

### 2）===

判断双方的类型和值是否都相同

## 6.setTimeout 模拟实现 setInterval(带清除定时器的版本)

- setInterval 用来实现循环定时调用 可能会存在一定的问题 能用 setTimeout 解决吗

```js
function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
let a = mySettimeout(() => {
  console.log(111);
}, 1000);
let b = mySettimeout(() => {
  console.log(222);
}, 1000);
```

## 7.使用 setinterval 模拟实现 settimeout

```js
const mySetTimeout = (fn, time) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
};
mySetTimeout(() => {
  console.log(1);
}, 1000);
```

## 8.{}、new Object()和 Object.create()的区别

- 字面量和 new 关键字创建的对象是 `Object 的实例`，原型指向 Object.prototype，继承内置对象 Object
- Object.create(arg, pro)创建的对象的原型取决于 `arg`，arg 为 null，新对象是空对象，没有原型，不继承任何对象；arg 为指定对象，新对象的原型指向指定对象，继承指定对象

### 1）直接字面量创建{}

```js
var objA = {};
objA.name = 'a';
objA.sayName = function () {
  console.log(`My name is ${this.name} !`);
};
objA.sayName();
console.log(objA.__proto__ === Object.prototype); // true
console.log(objA instanceof Object); // true
```

### 2）new 关键字创建

```js
var objB = new Object();
// var objB = Object();
objB.name = 'b';
objB.sayName = function () {
  console.log(`My name is ${this.name} !`);
};
objB.sayName();
console.log(objB.__proto__ === Object.prototype); // true
console.log(objB instanceof Object); // true
```

**字面量创建和 new 关键字创建并没有区别，创建的新对象的**proto**都指向 Object.prototype**

### 3）Object.create()

- Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的\_\_proto\_\_

> A.prototype = Object.create(B.prototype[, propertiesObject])

- `proto` 必填参数，是新对象的原型对象

- `propertiesObject` 是可选参数，指定要添加到新对象上的可枚举的属性

```js
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person); // me.__proto__ === person
me.name = 'Matthew'; // name属性被设置在新对象me上，而不是现有对象person上
me.isHuman = true; // 继承的属性可以被重写
me.printIntroduction(); // My name is Matthew. Am I human? true
```

## 9.Object.setPrototypeOf() 与 Object.create() 区别

### 1）用法

```js
Object.setPrototypeOf(A.prototype, B.prototype);

A.prototype = Object.create(B.prototype[,propertiesObject])
```

### 2）相同点

- 都可以达到设置对象原型的功能

### 3）不同点

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log(`Animal: ${this.name}`);
};

function Plants(name) {
  this.name = name;
}
Plants.prototype.sayName = function () {
  console.log(`Plants: ${this.name}`);
};
Plants.prototype.open = function () {
  console.log(`open: ${this.name}`);
};
const dog = new Animal('Join');
```

- 使用 Object.create,Animal.prototype 将会指向一个空对象，空对象的原型属性指向 Plants 的 prototytpe。所以我们不能再访问 Animal 的原有 prototypoe 中的属性。Object.create 的使用方式也凸显了直接重新赋值

```js
Animal.prototype = Object.create(Plants.prototype);
const cat = new Animal('Bob');
dog.sayName(); // Animal: Join
cat.sayName(); // Plants: Bob
cat.open(); // open: Bob
```

- 使用 Object.setPrototypeOf 则会将 Animal.prototype 将会指向 Animal 原有的 prototype，然后这个 prototype 的 prototype 再指向 Plants 的 prototytpe。所以我们优先访问的 Animal，然后再是 plants

```js
Object.setPrototypeOf(Animal.prototype, Plants.prototype);
const cat = new Animal('Bob');
dog.sayName(); // Animal: Join
cat.sayName(); // Animal: Bob
cat.open(); // open: Bob
```

### 4）总结

- 在进行俩个原型之间的委托时使用`setPrototype更好`，Object.create 更适和直接对一个无原生原型的对象快速进行委托

## 10.函数传参方式

- 函数传参实际上是：参数如果是基本类型是按值传递，如果是引用类型按共享传递

### 1）按值传递

```js
var name = 'nick';
function foo(v) {
  v = 'tom';
  console.log(v); //tom
}
foo(name);
console.log(name); //nick
```

- 当传递 name 到函数 foo 中，相当于拷贝了一份 name，假设拷贝的这份叫 \_name，函数中修改的都是 \_name 的值，而不会影响原来的 name 值

### 2）引用传递

```js
var obj = {
  value: 1,
};
function foo(o) {
  o.value = 2;
  console.log(o.value); //2
}
foo(obj);
console.log(obj.value); // 2
```

- 修改 o.value，可以通过引用找到原值

### 3）共享传递

```js
var obj = {
  value: 1,
};
function foo(o) {
  o = 2;
  console.log(o); //2
}
foo(obj);
console.log(obj.value); // 1
```

- 直接修改 o，并不会修改原值

## 11.requestIdleCallback

### 1）requestIdleCallback

- window.requestIdleCallback()方法插入一个函数，这个函数将在浏览器空闲时期被调用。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序

- 你可以在空闲回调函数中调用 requestIdleCallback()，以便在下一次通过事件循环之前调度另一个回调

> var handle = window.requestIdleCallback(callback[, options])

- `callback`: 一个在事件循环空闲时即将被调用的函数的引用。函数会接收到一个名为 IdleDeadline 的参数，这个参数可以获取当前空闲时间以及回调是否在超时时间前已经执行的状态

- options: 包括可选的配置参数
  - `timeout`： 如果指定了 timeout，并且有一个正值，而回调在 timeout 毫秒过后还没有被调用，那么回调任务将放入事件循环中排队，即使这样做有可能对性能产生负面影响

### 2）cancelIdleCallback

- window.cancelIdleCallback() 方法用于取消之前调用 window.requestIdleCallback() 的回调

> window.cancelIdleCallback(handle)

- `handle`: 调用 window.requestIdleCallback() 时返回的 ID.

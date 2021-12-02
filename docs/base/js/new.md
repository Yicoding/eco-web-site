---
toc: menu
---

# new/call/apply/bind

## 1.new

### 1）定义

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

### 2）做了哪些事

- 1.创建一个新的空对象

- 2.将这个空对象的**proto**指向构造函数的原型

- 3.将 this 指向空对象

- 4.对构造函数返回值做判断，然后返回对应的值

### 3）模拟实现

方法 1.

```js
function _new() {
  // arguments实际上是一个类数组对象，需要转成数组
  var args = [].slice.call(arguments);
  // 第一个参数是构造函数，把它拿出来
  var constructor = args.shift();
  // Object.create()返回一个新对象，这个对象的构造函数的原型指向Foo
  var context = Object.create(constructor.prototype);
  // 将this指向context
  var result = constructor.apply(context, args);
  // 如果Foo显示的返回了一个对象，那么应该直接返回这个对象
  return typeof result === 'object' && result != null ? result : context;
}
function Foo(name) {
  this.name = name;
}

Foo.prototype.getName = function () {
  console.log(this.name);
};

var a = _new(Foo, 'tom');
a.getName(); // tom
```

方法 2.

```js
function myNew(Con, ...args) {
  // 创建一个新的空对象
  let obj = {};
  // 将这个空对象的__proto__指向构造函数的原型
  // obj.__proto__ = Con.prototype;
  Object.setPrototypeOf(obj, Con.prototype);
  // 将this指向空对象
  let res = Con.apply(obj, args);
  // 对构造函数返回值做判断，然后返回对应的值
  return res instanceof Object ? res : obj;
}
function Foo(name) {
  this.name = name;
}

Foo.prototype.getName = function () {
  console.log(this.name);
};

var a = _new(Foo, 'tom');
a.getName(); // tom
```

## 2.call,apply,bind 的基本介绍

改变函数执行时的 this 指向

### 1）语法

```js
fun.call(thisArg, param1, param2, ...); // 形参
fun.apply(thisArg, [param1,param2,...]); // 数组形式
fun.bind(thisArg, param1, param2, ...); // 形参
```

记忆：
`apply` 是以 `a 开头`，它传给 fun 的参数是 `Array`，也是以 a 开头的

### 2）返回值

- call/apply：fun 执行的结果

  - 改变了函数的 this 上下文后马上执行该函数

- bind：返回 fun 的拷贝，并拥有指定的 this 值和初始参数

  - 返回改变了上下文后的函数,不执行该函数

### 3）参数

**`thisArg`(可选):**

- 1.fun 的 this 指向 thisArg 对象

- 2.非严格模式下：thisArg 指定为 `null，undefined`，fun 中的 this 指向 `window` 对象

- 3.严格模式下：fun 的 this 为 `undefined`

- 4.值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象，如 String、Number、Boolean

**`param1,param2`(可选): 传给 fun 的参数**

## 3.调用 call/apply/bind 的必须是个函数

call、apply 和 bind 是挂在 Function 对象上的三个方法,只有`函数`才有这些方法

## 4.call 和 apply 的应用场景

### 1）判断数据类型

`Object.prototype.toString`

```js
function isType(data, type) {
  const typeObj = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date', // Object.prototype.toString.call(new Date())
    '[object RegExp]': 'regExp',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
    '[object WeakMap]': 'weakMap',
    '[object Window]': 'window', // Object.prototype.toString.call(window)
    '[object Error]': 'error', // new Error('1')
    '[object Arguments]': 'arguments',
  };
  let name = Object.prototype.toString.call(data); // 借用Object.prototype.toString()获取数据类型
  let typeName = typeObj[name] || '未知类型'; // 匹配数据类型
  return typeName === type; // 判断该数据类型是否为传入的类型
}
```

### 2）类数组借用数组的方法

```js
var arrayLike = {
  0: 'OB',
  1: 'Koro1',
  length: 2,
};
Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');
console.log(arrayLike); // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}
```

### 3）apply 获取数组最大值最小值

```js
const arr = [15, 6, 12, 13, 16];
const max = Math.max.apply(Math, arr); // 16
const min = Math.min.apply(Math, arr); // 6
```

### 4）\*继承

ES5 的继承也都是通过借用父类的构造方法来实现父类方法/属性的继承：

```js
// 父类
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};
// 子类
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
// 重写子类的prototype，修正constructor指向
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.sayAge = function () {
  console.log(this.age);
};
// 实例化子类，可以在实例上找到属性、方法
const a = new Child('lucy', 20);
a.colors.push('balck');
const b = new Child('Bob', 18);
console.log(a);
console.log(b);
```

## 5.bind 应用场景

- bind 是创建一个新的函数，我们必须要手动去调用：

- bind 方法改变 this 指向后，只生效一次，后面再用 bind 不能再次改变 this 指向了

```js
for (var i = 1; i < 5; i++) {
  // 缓存参数
  setTimeout(
    function (i) {
      console.log('bind', i); // 依次输出：1 2 3 4 5
    }.bind(null, i),
    i * 10,
  );
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

## 手写 call、apply 及 bind

思路：

- 不传入第一个参数，那么上下文默认为 window

- 改变了 this 指向，让新的对象可以执行该函数，并能接受参数

### 1）call

```js
Function.prototype.call =
  Function.prototype.call ||
  function (context) {
    if (typeof this !== 'function') {
      throw new Error('请使用函数进行调用');
    }
    // context 为可选参数，如果不传的话默认上下文为 window
    context = context || window;
    // context 创建一个 fn 属性，并将值设置为需要调用的函数
    context.fn = this;
    // 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
    const args = [...arguments].slice(1);
    // 然后调用函数并将对象上的函数删除
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
```

### 2）apply

apply 的实现也类似，区别在于对参数的处理，第二个参数为数组

```js
Function.prototype.apply =
  Function.prototype.apply ||
  function (context) {
    if (typeof this !== 'function') {
      return throw new Error('请使用函数进行调用');
    }
    context = context || window;
    context.fn = this;
    let result;
    if (arguments[1]) {
      // 参数存在
      result = context.fn(...arguments[1]);
    } else {
      // 参数不存在
      result = context.fn();
    }
    delete context.fn;
    return result;
  };
```

### 3）bind

bind 需要`返回一个函数`，需要`判断一些边界问题`

```js
Function.prototype.bind =
  Function.prototype.bind ||
  function (context) {
    if (typeof this !== 'function') {
      return throw new Error('请使用函数进行调用');
    }
    const _this = this;
    const args = [...arguments].slice(1);
    return function F() {
      if (this instanceof F) {
        return new _this(...args, ...arguments);
      }
      return _this.apply(context, args.concat(...arguments));
    };
  };
```

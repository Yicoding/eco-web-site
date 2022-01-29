---
toc: menu
---

# 深浅拷贝

![image](images/base/3.png)

## 1.为什么要区分深浅拷贝

浅复制只复制一层对象的属性，而深复制则递归复制了所有层级

## 2.浅拷贝

### 1）数组

只能拷贝一层数组，不能拷贝数组嵌套对象或数组的情况

- 1.slice

  ```js
  const arr = [1, 2, 3];
  const newArr = arr.slice();
  ```

- 2.concat

  ```js
  const arr = [1, 2, 3];
  const newArr = arr.concat();
  ```

- 3.ES6 扩展运算符...

  ```js
  const arr = [1, 2, 3];
  const newArr = [...a];
  ```

### 2）对象

只能拷贝一层对象，不能拷贝深层对象

- 1.for in

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = {};
  for (var k in obj) {
    newObj[k] = obj[k];
  }
  ```

- 2.Object.assign

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = Object.assign({}, obj);
  ```

  - 不会拷贝对象的继承属性

  - 不会拷贝对象的不可枚举的属性

  - 可以拷贝 Symbol 类型的属性

- 3.ES6 扩展运算符...

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = { ...obj };
  ```

### 3）手动实现一个浅拷贝

- 对基础类型做一个最基本的一个拷贝

- 对引用类型开辟一个新的存储，并且拷贝一层对象属性

```js
const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  }
  return target;
};
```

## 3.深拷贝

### 1）JSON.stringify 暴力实现

```js
const arr = [1, { name: 'name' }, [2, 3]];
const newArr = JSON.parse(JSON.stringify(arr));
newArr[0] = 'first';
newArr[1].name = 'Lucy';
newArr[2][1] = 'last';

console.log(arr); // [1, { name: 'name' }, [2, 3]];
console.log(newArr); // ['first', { name: 'Lucy' }, [2, 'last']];
```

存在的问题：

- 1、会忽略 undefined

- 2、会忽略 symbol

- 3、不能序列化函数

- 4、不能解决循环引用的对象，即对象成环 (obj[key] = obj)

- 5、不能正确处理 new Date()，拷贝 Date 引用类型会变成字符串

- 6、不能处理正则，拷贝 RegExp 引用类型会变成空对象

- 7、不能处理 new Error()

- 8、无法拷贝不可枚举的属性

- 9、无法拷贝对象的原型链

- 10、对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null

```js
function Obj() {
  this.func = function () {
    alert(1);
  };
  this.obj = { a: 1 };
  this.arr = [1, 2, 3];
  this.und = undefined;
  this.reg = /123/;
  this.date = new Date(0);
  this.NaN = NaN;
  this.infinity = Infinity;
  this.sym = Symbol(1);
}

let obj1 = new Obj();
Object.defineProperty(obj1, 'innumerable', {
  enumerable: false,
  value: 'innumerable',
});

console.log('obj1', obj1);
let str = JSON.stringify(obj1);

let obj2 = JSON.parse(str);
console.log('obj2', obj2);
```

### 2）基础版（递归浅拷贝）

- 一般是工具库中的深拷贝函数实现方式，比如 loadash 中的 cloneDeep

- 缺点：对于庞大的数据来说性能并不好，因为需要把整个对象都遍历一遍

```js
// 简易基础版
const deepClone = (obj) => {
  // 判断是对象和函数
  const isObject = (o) => {
    return typeof o === 'object' && o !== null;
  };
  // 原始类型直接返回
  if (!isObject(obj)) {
    return obj;
  }
  // 判断是否为数组
  const isArray = Array.isArray(obj);
  const newObj = isArray ? [...obj] : { ...obj }; // 浅拷贝第一层
  Reflect.ownKeys(newObj).forEach((key) => {
    // 遍历第一层
    // 判断第一层是否为对象，不为对象直接返回，是对象递归调用
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });
  return newObj;
};
const obj = {
  name: 'obj',
  b: Symbol('b'),
  c: undefined,
  d: function () {},
};
const newObj = deepClone(obj);
console.log(newObj); // {name: 'obj', b: Symbol('b'), c: undefined, d: function () {}}
```

- 这个深拷贝函数并不能复制不可枚举的属性以及 Symbol 类型

- 这种方法只是针对普通的引用类型的值做递归复制，而对于 Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝

- 对象的属性里面成环，即循环引用没有解决

### 3）改进版（考虑到复制 Symbol）

- 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys 方法

- 当参数为 Date、RegExp 类型，则直接生成一个新的实例返回

- 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性，以及对应的特性，顺便结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链

- 利用 WeakMap 类型作为 Hash 表，因为 WeakMap 是弱引用类型，可以有效防止内存泄漏（你可以关注一下 Map 和 weakMap 的关键区别，这里要用 weakMap），作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值

```js
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
  // return target !== null && type === 'object';
}

// 拷贝函数
function copyFn(fn) {
  const fnStr = fn.toString();
  // 普通函数属于函数声明， 不能直接使用eval， 需要用小括号包起来形成函数表达式， 而箭头函数本身就是函数表达式
  return fn.prototype ? eval(`(${fnStr})`) : eval(fnStr);
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;

  // 处理函数
  if (typeof obj === 'function') {
    return copyFn(obj);
  }

  // 日期对象直接返回一个新的日期对象
  if (obj.constructor === Date) {
    return new Date(obj);
  }

  // 正则对象直接返回一个新的正则对象
  if (obj.constructor === RegExp) {
    return new RegExp(obj);
  }

  // 处理Error
  if (obj.constructor === Error) {
    return new Error(obj);
  }

  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}

var obj1 = {
  a: 1,
  b: { a: 2 },
};
var obj2 = deepClone(obj1);
console.log(obj1); // {a: 1, b: {a: 2}}}
```

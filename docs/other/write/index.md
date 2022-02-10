---
toc: menu
---

# 手写题汇总

## 1.js

### 1）reduce

```js
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce((prev, item) => {
  return prev + item;
}, 0);
console.log('result', result); // 15
```

### 2）some

```js
var arr = [{ flag: true }, { flag: false }, { flag: true }];
var result = arr.some((item) => !item.flag);
console.log('result', result); // true
```

### 3）every

```js
var arr = [{ flag: true }, { flag: false }, { flag: true }];
var result = arr.every((item) => !item.flag);
console.log('result', result); // false
```

### 4）数据类型

```js
// String、Number、Null、Undefined、Boolean、Symbol、BigInt
// Object: Object、Array、Date、Function、RegExp、Error
```

### 5）0.1+0.2 = 0.30000000000000004

```js
// 浮点数计算存在舍入误差，这是由于使用基于IEEE754数值的浮点计算的通病
(0.1 * 10 + 0.2 * 10) / 10;
parseFloat((0.1 + 0.2).toFixed(10));
```

### 6）parseInt

```js
// 第二个参数: 转换时使用的基数(即多少进制)，区间范围介于 2~36 之间
[1, 2, 3].map(parseInt); // [1, NaN, NaN]
// ===>
[1, 2, 3].map((item, index) => {
  return parseInt(item, index);
});
// ===>
parseInt(1, 0); // 1
parseInt(2, 1); // NaN(1不在parseInt第二个参数解析区间内)
parseInt(3, 2); // Nan(用2进制来解析，应以 0 和 1 开头，所以结果为 NaN)
```

### 7）typeof

```js
typeof '1' === 'string';
typeof 1 === 'number';
typeof true === 'boolean';
typeof null === 'object';
typeof undefined === 'undefined';
typeof {} === 'object';
typeof function () {} === 'function';
```

### 8）instanceof

```js
function _instanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(left);
  }
}
```

### 9）new

```js
// 创建一个新的对象
// 将这个对象的__proto__指向构造函数的原型
// 将this指向这个对象
// 对构造函数返回值做判断，然后返回对应的值
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw TypeError('must be a function');
  }
  let obj = {};
  Object.setPrototypeOf(obj, Constructor.prototype);
  const result = Constructor.apply(obj, [...args]);
  return result instanceof Object ? result : obj;
}
```

### 10）call

```js
Function.prototype._call = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('must be a function');
  }
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

### 11）apply

```js
Function.prototype._apply = function (context, args) {
  if (typeof this !== 'function') {
    throw TypeError('must be a function');
  }
  context = context || window;
  context.fn = this;
  let result;
  if (args) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
```

### 12）bind

```js
Function.prototype._bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('must be a function');
  }
  const _this = this;
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
```

### 12）inherit

```js
function inherit(p) {
  if (p === null) {
    throw TypeError();
  }
  if (Object.create) {
    return Object.create(p);
  }
  if (typeof p !== 'object' || typeof p !== 'function') {
    throw TypeError();
  }
  function F() {}
  F.prototype = p;
  return new F();
}
```

### 13）debounce

```js
function debounce(fn, t) {
  let timee = null;
  return function (...args) {
    if (timee) {
      clearTimeout(timee);
    }
    timee = setTimeout(() => {
      fn.apply(this, args);
      timee = null;
    }, t);
  };
}
```

### 14）throttle

```js
function throttle(fn, t) {
  let timee = null;
  return function (...args) {
    if (!timee) {
      timee = setTimeout(() => {
        fn.apply(this, args);
        timee = null;
      }, t);
    }
  };
}
```

### 15）原型继承

```js
function P() {}
P.prototype.say = function () {};
function C() {}
C.prototype = new P();
C.prototype.constructor = C;
```

### 16）构造函数继承

```js
function P() {}
P.prototype.say = function () {};
function C() {
  P.call(this);
}
```

### 17）组合继承

```js
function P() {}
P.prototype.say = function () {};
function C() {
  P.call(this);
}
C.prototype = new P();
C.prototype.constructor = C;
```

### 18）原型式继承

```js
function copyObj(p) {
  function F() {}
  F.prototype = p;
  return new F();
}
// 相当于
Object.create();
```

### 19）寄生式继承

```js
function copyObj(p) {
  function F() {}
  F.prototype = p;
  return new F();
}
function createObj(obj) {
  let clone = copyObj(obj);
  clone.getName = function () {};
  return clone;
}
```

### 20）寄生组合式继承

```js
function clone(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function P() {}
function C() {
  P.call(this);
}
clone(P, C);
let child = new C();
```

### 21）浅拷贝

```js
var arr = [1, 2, 3];
arr.slice();
arr.concat();
var o = [...arr];

var a = { name: 1 };
var b = { ...a };
Object.assign({}, a);
var c = {};
Object.keys(a).forEach((key) => {
  c[key] = a[key];
});
```

### 22）深拷贝

```js
// 暴力
JSON.parse(JSON.stringify());
// 简易版考虑到Symbol
function deepClone(obj, hash = new WeakMap()) {
  function isObj(o) {
    return o !== null && (typeof o === 'object' || typeof o === 'function');
  }
  if (!isObj(obj)) {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((key) => {
    if (isObj(obj[key])) {
      target[key] = deepClone(obj[key], hash);
    } else {
      target[key] = obj[key];
    }
  });
  return target;
}
// 改进版
function isObj(obj) {
  const t = typeof obj;
  return t !== null && (t === 'object' || t === 'function');
}

function copyFn(fn) {
  const fnStr = fn.toString();
  // 普通函数属于函数声明， 不能直接使用eval， 需要用小括号包起来形成函数表达式， 而箭头函数本身就是函数表达式
  return fn.prototype ? eval(`(${fnStr})`) : eval(fnStr);
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObj) return obj;
  // 处理函数
  if (typeof obj === 'function') {
    return copyFn(obj);
  }
  // 处理日期
  if (obj.constructor === Date) {
    return new Date(obj);
  }
  if (obj.constructor === RegExp) {
    return new RegExp(obj);
  }
  if (obj.constructor === Error) {
    return new Error(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((key) => {
    if (isObj(obj[key])) {
      target[key] = deepClone(obj[key], hash);
    } else {
      target[key] = obj[key];
    }
  });
  return target;
}
```

### 23）defineproperty

```js
const obj = {};
let _val = undefined;
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('get', _val);
    return _val;
  },
  set(newVal) {
    console.log('set', newVal);
    if (newVal !== _val) {
      console.log('onChange', newVal);
      _val = newVal;
    }
  },
});
obj.name = 'Bob';
obj.name;
```

### 24）observe

```js
function observe(target) {
  if (typeof target === 'object' && target !== null) {
    if (Array.isArray(target)) {
      target.__proto__ = defineArr();
    } else {
      Object.keys(target).forEach((key) => {
        defineObj(target, key, target[key]);
      });
    }
  }
}
function defineObj(obj, key, val) {
  observe(obj);
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
      }
    },
  });
}
function defineArr() {}
```

### 25）proxy

```js
const info = {};
const proxy = new Proxy(info, {
  get(obj, key) {
    return obj[key];
  },
  set(obj, key, val) {
    obj[key] = val;
  },
});
```

### 26）flat

```js
const flatten = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};

const flatten = (arr) => {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
```

### 27）curry

```js
function curry(fn) {
  return function F(...args) {
    if (args.length < fn.length) {
      return (...arg) => F(...args, ...arg);
    }
    return fn(...args);
  };
}
```

### 28）compose

```js
function compose(...fn) {
  if (fn.length === 0) return (num) => num;
  if (fn.length === 1) return fn[0];
  return fn.reduce((prev, next) => {
    return (num) => {
      return next(prev(num));
    };
  });
}
```

### 29）数组去重

```js
function unique(arr) {
  const newArr = [];
  arr.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 1);
      newArr.push(next);
    }
    return pre;
  }, new Map()); // 这里不能使用WeakMap，WeakMap只接受对象作为key值
  return newArr;
}
```

### 30）EventEmitter

```js
class EventEmitter {
  constructor(maxListeners) {
    this.events = {}; // 监听key-value
    this.maxListeners = maxListeners || Infinity;
  }
  on(event, cb) {
    if (!(cb instanceof Function)) {
      console.warn('must be a function');
      return this;
    }
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (
      this.maxListeners !== Infinity &&
      this.events[event].length >= this.maxListeners
    ) {
      console.warn(`${event} has reached max listeners.`);
      return this;
    }
    this.events[event].push(cb);
    return this;
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.warn(`${event} event is not registered.`);
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  /* 无cb全部移除：事件名、callback */
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this; // 链式调用
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func); // 先移除
      cb.apply(this, args);
    };
    this.on(event, func);
    return this;
  }
}
```

## 2.ES

### 1）Promise

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(exector) {
    this._status = PENDING;
    this._value = undefined;
    this._reason = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];

    let _resolve = (val) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
        while (this._resolveQueue.length) {
          const cb = this._resolveQueue.shift();
          cb(val);
        }
      };
      setTimeout(run);
    };
    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = REJECTED;
        this._reason = val;
        while (this._rejectQueue.length) {
          const cb = this._rejectQueue.shift();
          cb(val);
        }
      };
      setTimeout(run);
    };
    exector(_resolve, _reject);
  }
  then(resolveFn, rejectFn) {
    if (typeof resolveFn !== 'function') {
      resolveFn = (val) => val;
    }
    if (typeof resolveFn !== 'function') {
      resolveFn = (reason) => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      };
    }
    return new MyPromise((resole, reject) => {
      const fulfilledFn = (value) => {
        try {
          let x = resolveFn(value);
          x instanceof MyPromise ? x.then(resole, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };
      const rejectedFn = (reason) => {
        try {
          let x = rejectFn(reason);
          x instanceof MyPromise ? x.then(resole, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };
      switch (this._status) {
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        case FULFILLED:
          fulfilledFn(this._value);
          break;
        case REJECTED:
          fulfilledFn(this._reason);
          break;
      }
    });
  }
  catch(rejectedFn) {
    return this.then(undefined, rejectedFn);
  }
  finally(cb) {
    return this.then(
      (val) => MyPromise.resolve(cb()).then(() => val),
      (reason) =>
        MyPromise.resolve(cb()).then(() => {
          throw reason;
        }),
    );
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }
  static all(promiseQueue) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promiseQueue)) {
        return reject('must be array');
      }
      let index = 0;
      let result = [];
      promiseQueue.forEach((p, i) => {
        MyPromise.resolve(p).then(
          (val) => {
            index++;
            result[i] = val;
            if (index === promiseQueue.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          },
        );
      });
    });
  }
  static allSellte(promiseQueue) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promiseQueue)) {
        return reject('must be array');
      }
      let index = 0;
      let result = [];
      promiseQueue.forEach((p, i) => {
        index++;
        MyPromise.resolve(p).then(
          (val) => {
            result[i] = val;
            if (index === promiseQueue.length) {
              resolve(result);
            }
          },
          (err) => {
            result[i] = err;
            if (index === promiseQueue.length) {
              resolve(result);
            }
          },
        );
      });
    });
  }
  static race(promiseQueue) {
    return new MyPromise((resolve, reject) => {
      for (let p of promiseQueue) {
        MyPromise.resolve(p).then(
          (val) => resolve(val),
          (err) => reject(err),
        );
      }
    });
  }
}
```

### 2）async await

```js
function generatorToAsync(generatorFn) {
  return function () {
    const gen = generatorFn.apply(this, arguments); // gen有可能传参
    // 返回一个Promise
    return new Promise((resolve, reject) => {
      function go(key, arg) {
        let res;
        try {
          res = gen[key](arg); // 这里有可能会执行返回reject状态的Promise
        } catch (error) {
          return reject(error); // 报错的话会走catch，直接reject
        }
        // 解构获得value和done
        const { value, done } = res;
        if (done) {
          // 如果done为true，说明走完了，进行resolve(value)
          return resolve(value);
        } else {
          // 如果done为false，说明没走完，还得继续走
          // value有可能是：常量，Promise，Promise有可能是成功或者失败
          return Promise.resolve(value).then(
            (val) => go('next', val),
            (err) => go('throw', err),
          );
        }
      }
      go('next'); // 第一次执行
    });
  };
}

function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1));
    console.log(yield 2); //2
    console.log(yield Promise.reject('error'));
  } catch (error) {
    console.log(error);
  }
}
const asyncFn = generatorToAsync(myGenerator);
asyncFn().then((res) => console.log(res));
```

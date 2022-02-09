// 一、js基础
// 1.reduce
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce((prev, item) => {
  return prev + item;
}, 0);
console.log('result', result); // 15

// 2.some
var arr = [{ flag: true }, { flag: false }, { flag: true }];
var result = arr.some((item) => !item.flag);
console.log('result', result); // true

// 3.every
var arr = [{ flag: true }, { flag: false }, { flag: true }];
var result = arr.every((item) => !item.flag);
console.log('result', result);

// 4.数据类型
// String、Number、Null、Undefined、Boolean、Symbol、BigInt
// Object: Object、Array、Date、Function、RegExp、Error

// 5.0.1+0.2 = 0.30000000000000004
// 浮点数计算存在舍入误差，这是由于使用基于IEEE754数值的浮点计算的通病
(0.1 * 10 + 0.2 * 10) / 10;

// 6.typeof
typeof '1' === 'string';
typeof 1 === 'number';
typeof true === 'boolean';
typeof null === 'object';
typeof undefined === 'undefined';
typeof {} === 'object';
typeof function () {} === 'function';

// 7.instanceof
var a = {};
a instanceof Object;

var a = [];
a instanceof Array;

// 8.手写instanceof
function _instanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// 9.Object
Object.prototype.toString.call([]);

// 10.new
// 创建一个新的对象
// 将这个对象的__proto__指向构造函数的原型
// 将this指向这个对象
// 对构造函数返回值做判断，然后返回对应的值
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw TypeError('must be a function');
  }
  const obj = {};
  Object.setPrototypeOf(obj, Constructor.prototype);
  const result = Constructor.apply(obj, [...args]);
  return result instanceof Object ? result : obj;
}
// other
function _new(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw TypeError('must be a function');
  }
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, [...args]);
  return result instanceof Object ? result : obj;
}

// 11.call
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

// 12.apply
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

// 13.bind
Function.prototype._bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('must be a function');
  }
  const _this = this;
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};

// 14.inherit
function inherit(p) {
  if (p === null) {
    throw TypeError();
  }
  if (Object.create) {
    return Object.create(p);
  }
  var t = typeof p;
  if (t !== 'object' && t !== 'function') {
    throw TypeError();
  }
  function F() {}
  F.prototype = p;
  return new F();
}

// 15.debounce
function debounce(fn, timeout) {
  let timee = null;
  return function (...args) {
    if (timee) {
      clearTimeout(timee);
    }
    timee = setTimeout(() => {
      fn.apply(this, args);
      timee = null;
    }, timeout);
  };
}

// 16.throttle
function throttle(fn, timeout) {
  let timee = null;
  return function (...args) {
    if (timee) return;
    timee = setTimeout(() => {
      fn.apply(this, args);
      timee = null;
    }, timeout);
  };
}

// 17.闭包
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 10);
  })(i);
}

for (var i = 0; i < 10; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    10,
    i,
  );
}

// 18.原型继承
function Parent() {
  this.name = 'Parent';
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};
function Child() {}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child = new Child();
child.sayName();

// 19.构造函数继承
function Parent() {
  this.name = 'Parent';
  this.getName = function () {
    console.log(`getName: ${this.name}`);
  };
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};
function Child() {
  Parent.call(this);
}

var child = new Child();
child.name;

// 20.组合继承
function Parent() {
  this.name = 'parent';
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};
function Child() {
  Parent.call(this);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

// 21.原型式继承
function createObj(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// 相当于
Object.create();

// 22.寄生式继承
function createObj(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function createAnother(obj) {
  let clone = createObj(obj);
  clone.getName = function () {
    return this.name;
  };
  return clone;
}

// 23.寄生组合式继承
function clone(parent, child) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent() {
  this.name = 'parent';
}
Parent.prototype.sayName = function () {
  return this.name;
};
function Child() {
  Parent.call(this);
}
clone(Parent, Child);
const child = new Child();
child.sayName();

// 24.浅拷贝
var arr = [1, 2, 3];
arr.slice();
arr.concat();
var b = [...arr];

var a = { name: 'a' };
var b = { ...a };

var newObj = {};
for (var k in a) {
  newObj[k] = a[k];
}

var b = Object.assign({}, a);

// 25.深拷贝
var a = {
  name: 'a',
  info: {
    name: 'info',
  },
};
var b = JSON.parse(JSON.stringify(a));

// 递归浅拷贝
function deepClone(obj) {
  function isObj(o) {
    return typeof o === 'object' && o !== null;
  }
  if (!isObj(obj)) {
    return obj;
  }
  const isArray = Array.isArray(obj);
  const newObj = isArray ? [...obj] : { ...obj };
  Reflect.ownKeys(newObj).forEach((key) => {
    newObj[key] = isObj(obj[key]) ? deepClone(obj[key]) : obj[key];
  });
  return newObj;
}
const obj = {
  name: 'obj',
  b: Symbol('b'),
  c: undefined,
  d: function () {},
};
const newObj = deepClone(obj);
console.log(newObj);

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

// 26.defineproperty
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
      _val = newVal;
    }
  },
});
obj.name = 'Bob';
obj.name;

// 27.observe
function observe(data) {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      data.__proto__ = defineArray();
    } else {
      Object.keys(data).forEach((key) => {
        defineObj(data, key, data[key]);
      });
    }
  }
}

function defineObj(obj, key, val) {
  observe(val);
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

function defineArray() {
  const arrayProto = Array.prototype;
  const arrayMethods = Object.create(arrayProto);
  const methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'sort',
    'slice',
    'reverse',
    'splice',
    'concat',
    'join',
    'toString',
    'indexOf',
    'lastIndexOf',
    'toLocalString',
  ];
  methods.forEach((method) => {
    const original = arrayMethods[method];
    Object.defineProperty(arrayMethods, method, {
      value: function v(...args) {
        original.apply(this, [...args]);
      },
    });
  });
}

// 28.proxy
const proxy = new Proxy(
  {},
  {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, val) {
      obj[key] = val;
    },
  },
);

// 29.flat
// 递归
function flatten(arr) {
  if (!arr.length) return;
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

// reduce
function flatten(arr) {
  return arr.reduce((prev, item) => {
    return prev.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

// some
function flatten(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// flat
let a = [1, [2, [3, [4]]]];
a.flat(Infinity);

// 30.闭包实现函数重载
function addMethod(obj, name, fn) {
  const old = obj[name];
  obj[name] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    }
    return old.apply(this, arguments);
  };
}

// 31.curry
function curry(fn) {
  return function F(...args) {
    if (args.length < fn.length) {
      return (...arg) => F(...args, ...arg);
    }
    return fn(...args);
  };
}

// 32.compose
function compose(...fn) {
  if (fn.length === 0) return (num) => num;
  if (fn.length === 1) return fn[0];
  return fn.reduce((pre, next) => {
    return (num) => {
      return next(pre(num));
    };
  });
}

// 33.数组去重
function unique(arr) {
  return [...new Set(arr)];
  return Array.from(new Set(arr));
}

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

// 34.eventBUs
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

// 35.

// 二、es6
function run(gen) {
  return function () {
    const g = gen.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function go(key, arg) {
        let res;
        try {
          res = g[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = res;
        if (done) {
          return resolve(value);
        }
        return Promise.resolve(value).then(
          (val) => go('next', val),
          (err) => go('throw', err),
        );
      }
    });
  };
}

// 三、css：BFC、FFC

// 四、http

// 五、ts范型、Omit、

// 六、react

// 七、webpack

// 八、babel

// 九、git reflog、cherry-picker

// 十、小程序

// 十一、性能优化、指标

// 十二、算法

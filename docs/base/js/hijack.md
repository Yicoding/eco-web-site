---
toc: menu
---

# 数据劫持和代理

## 1.defineproperty

- 利用 Object.defineProperty 劫持对象的访问器,在属性值发生变化时我们可以获取变化,从而进行进一步操作

### 1）语法

- `Object.defineProperty(obj, prop, descriptor)`

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
      _val = newVal;
    }
  },
});
obj.name = 'Bob'; // set Bob
console.log('obj.name', obj.name); // get Bob // Bob
```

### 2）参数

**1.obj**

- 要定义属性的对象

**2.prop**

- 要定义或修改的属性的名称或 Symbol

**3.descriptor**

- 要定义或修改的属性描述符

- 必填，如果没有可以填 `{}`

| 参数           | 含义                                                                                                                                                                                                                  | 默认值      |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| `value`        | 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）                                                                                                                                                  | `undefined` |
| `writable`     | 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变                                                                                                                  | `true`      |
| `configurable` | 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除                                                                                                          | `true`      |
| `enumerable`   | 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中                                                                                                                                          | `true`      |
| `get`          | 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值 | `undefined` |
| `set`          | 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象                                                               | `undefined` |

### 3）value、writable 和 get、set

- 1.属性描述符必须是数据描述符或者存取描述符两种形式之一，不能同时是两者

```js
Object.defineProperty({}, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
});
```

- 2.或者

```js
var value = 1;
Object.defineProperty({}, 'num', {
  get: function () {
    return value;
  },
  set: function (newValue) {
    value = newValue;
  },
  enumerable: true,
  configurable: true,
});
```

- 3.但是不可以

```js
// 报错
Object.defineProperty({}, 'num', {
  value: 1,
  get: function () {
    return 1;
  },
});
// 报错
Object.defineProperty({}, 'num', {
  writable: true,
  get: function () {
    return 1;
  },
});
// 报错
Object.defineProperty({}, 'num', {
  writable: true,
  set: function () {
    return 1;
  },
});
```

### 4）vue2.x 中的数据劫持

```js
function observe(data) {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      // 处理数组
      data.__proto__ = defineArray();
    } else {
      // 处理对象
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
      console.log('对象获取');
      return val;
    },
    set(newVal) {
      console.log('对象赋值');
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
    'slice',
    'sort',
    'reverse',
  ];
  methods.forEach(function (method) {
    const original = arrayMethods[method];
    Object.defineProperty(arrayMethods, method, {
      value: function v(...args) {
        console.log('数组改变');
        original.apply(this, args);
      },
    });
  });
}
var obj = {
  name: 'ok',
  arr: [1, 2, 3],
};
obj.name = 1;
obj.arr.push(1);
```

## 2.Proxy

- Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

### 1）语法

- const proxy = new Proxy(target, handler)

```js
const proxy = new Proxy(
  {},
  {
    get: function (obj, prop) {
      console.log('设置 get 操作');
      return obj[prop];
    },
    set: function (obj, prop, value) {
      console.log('设置 set 操作');
      obj[prop] = value;
    },
  },
);

proxy.time = 35; // 设置 set 操作

console.log(proxy.time); // 设置 get 操作 // 35
```

### 2）参数

**1.target**

- 要代理的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）

**2.handler**

- 定义拦截行为的配置对象（也是一个对象，其内部的属性均为执行操作的函数）

  - proxy 支持的拦截操作一共 13 种，即支持 13 种代理行为（函数），这些函数如果你需要复写其行为方式，均要定义在 handler 这个对象中使用

- **1.get(target, key, receiver)**

  - 含义：拦截对象属性的读取

    - target：要代理的目标对象
    - key：属性名
    - receiver：proxy 实例（可选参数，一般不用）

    ```js
    const proxy1 = new Proxy(
      {
        a: 1,
      },
      {
        get(target, key) {
          if (Reflect.has(target, key)) {
            return Reflect.get(target, key);
          } else {
            return false;
          }
        },
      },
    );
    proxy1.a; // 1
    proxy1.b; // false
    ```

- **2.set(target, key, value, receiver)**

  - 含义：拦截对象属性的设置

    - target：要代理的目标对象
    - key：要设置的属性名
    - value：要设置的属性值
    - receiver：proxy 实例（可选参数，一般不用）

    ```js
    const handler = {
      set(target, key, value) {
        if (!Reflect.has(target, key)) {
          Reflect.set(target, key, value);
        } else {
          console.log(`${key}属性已存在`); //a属性已存在
        }
      },
      get(target, key) {
        return Reflect.get(target, key);
      },
    };
    const proxy = new Proxy({}, handler);
    proxy.a = 1;
    console.log(proxy.a); //1
    proxy.a = 2;
    console.log(proxy.a); //1
    ```

- **3.has(target, Key)**

  - 含义：判断对象是否具有某个属性
    - target：要代理的目标对象
    - key：要设置的属性名

  ```js
  const handler = {
    has(target, key) {
      if (key[0] === '_') {
        console.log('it is a private property');
        return false;
      }
      return key in target;
    },
  };
  const target = {
    _a: 123,
    a: 456,
  };
  const proxy = new Proxy(target, handler);
  console.log('_a' in proxy); // it is a private property  false
  console.log('a' in proxy); //true
  ```

  - 当对 proxy 使用 in 运算符时，就会自动触发 has 方法，如果判断当前属性以\_开头的话，就进行拦截，从而不被后面的 in 运算符发现，实现隐藏某些特定属性的目的

- **4.apply(target, thisArgs, args)**

  - 含义：拦截函数的调用、call 和 apply 操作
    - target：目标对象
    - thisArgs：目标对象的上下文对象（this）
    - args：目标对象的参数数组

  ```js
  const handler = {
    apply(target, ctx, args) {
      return Reflect.apply(...arguments) * 2;
      //或者
      return target(...args) * 2;
    },
  };

  function sum(...args) {
    let num = 0;
    args.forEach((item) => {
      num += item;
    });
    return num;
  }

  var proxy = new Proxy(sum, handler);
  proxy(1, 2); // 6
  proxy.call(null, 5, 6); // 22
  proxy.apply(null, [7, 8]); // 30
  ```

- **5.construct(target, args，newTarget)**

  - 含义：拦截 new 命令

    - target：目标对象。
    - args：构造函数的参数列表。
    - newTarget：创建实例对象时，new 命令作用的构造函数（下面例子的 p）

    ```js
    var p = new Proxy(function () {}, {
      construct: function (target, args, newTarget) {
        console.log('called: ' + args.join(', '));
        return {
          value: args[0] * 10,
        };

        // return 1 //Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')
      },
    });

    new p(1).value;
    // "called: 1"
    // 10
    ```

- **6.Proxy 代理时 target 内部 this 的指向会发生改变**

  ```js
  const target = {
    foo: function () {
      console.log(this === proxy);
    },
  };
  const handler = {};
  const proxy = new Proxy(target, handler);

  target.foo(); // false
  proxy.foo(); // true
  ```

- 当目标对象一旦被 proxy 代理后，其内部 this 就会指向 proxy，而非自身，因此需要注意这点

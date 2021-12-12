---
toc: menu
---

# 创建型

## 1.工厂模式

- 使用工厂模式时，我们要做的就是去抽象不同构造函数（类）之间的变与不变

### 1）简单工厂-区分“变”与“不变”

**1.构造器**

- 当新建对象的内存被分配后，用来初始化该对象的特殊函数，就叫做构造器

```js
function User(name, age, career, word) {
  this.name = name; // 姓名
  this.age = age; // 年龄
  this.career = career; // 工种
  this.word = word; // 工作内容
}
```

- User，就是一个构造器

  - 这里使用了 ES5 `构造函数`的写法

  - ES6 中的 class 其实本质上还是函数，`class 语法只是语法糖`，`本质`是`构造函数`

- `不变`的是 name、age、career 的属性

- `变`的是 name、age、career 的值

**2.简单工厂模式**

```js
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug'];
      break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更'];
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户'];
      break;
    case 'xxx':
    // 其它工种的职责分配
    // ...
  }
  return new User(name, age, career, work);
}

// 调用
Factory('Bob', 20, 'boss'); // {name: 'Bob', age: 20, career: 'boss', work: ['喝茶', '看报', '见客户']}
```

- 工厂模式其实就是将`创建对象的过程`单独`封装`

### 2）抽象工厂-理解“开放封闭”

- 是围绕一个超级工厂创建其他工厂

  - 抽象工厂（抽象类，它不能被用于生成具体实例）

  - 具体工厂（用于生成产品族里的一个具体的产品）

  - 抽象产品（抽象类，它不能被用于生成具体实例）

  - 具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）

## 2.单例模式

### 1）定义

- 保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式

### 2）实现思路

- 需要构造函数具备判断自己是否已经创建过一个实例的能力

**1.ES6 class 静态方法实现**

```js
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingleDog.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog.instance = new SingleDog();
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog.instance;
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

// true
s1 === s2;
```

**2.闭包实现**

```js
function SingleDog() {}
SingleDog.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instance = null;
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new SingleDog();
    }
    return instance;
  };
})();

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

// true
s1 === s2;
```

- 在 getInstance 方法的判断和拦截下，不管调用多少次，SingleDog 都只会给我们返回一个实例，s1 和 s2 现在都指向这个唯一的实例

### 3）Vuex 中的单例模式

- Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照

**1.引入 Vuex**

```js
// 安装vuex插件
Vue.use(Vuex);

// 将store注入到Vue实例中
new Vue({
  el: '#app',
  store,
});
```

**2.内部实现**

- Vuex 插件是一个对象，它在内部实现了一个 install 方法，这个方法会在插件安装时被调用，从而把 Store 注入到 Vue 实例里去。也就是说每 install 一次，都会尝试给 Vue 实例注入一个 Store

```js
let Vue // 这个Vue的作用和楼上的instance作用一样
...

export function install (_Vue) {
  // 判断传入的Vue实例对象是否已经被install过Vuex插件（是否有了唯一的state）
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      )
    }
    return
  }
  // 若没有，则为这个Vue实例对象install一个唯一的Vuex
  Vue = _Vue
  // 将Vuex的初始化逻辑写进Vue的钩子函数里
  applyMixin(Vue)
}
```

### 4）实现一个 Storage（面试题）

- 实现 Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)

**1.静态方法实现**

```js
// 定义Storage
class Storage {
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!Storage.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      Storage.instance = new Storage();
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return Storage.instance;
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem('name', 'Bob');

storage1.getItem('name'); // Bob
storage2.getItem('name'); // Bob

// 返回true
storage1 === storage2;
```

**2.闭包实现**

```js
// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
};

// 以闭包的形式创建一个引用自由变量的构造函数
const Storage = (function () {
  let instance = null;
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new StorageBase();
    }
    return instance;
  };
})();

// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果
const storage1 = new Storage();
const storage2 = new Storage();

storage1.setItem('name', '李雷');
// 李雷
storage1.getItem('name');
// 也是李雷
storage2.getItem('name');

// 返回true
storage1 === storage2;
```

### 5）实现一个全局的模态框（面试题）

- 实现一个全局唯一的 Modal 弹框

**1.css**

```css
#modal {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
```

**2.html**

```html
<button id="open">open</button>
<br />
<button id="close">close</button>
```

**3.js**

```js
// 核心逻辑，这里采用了闭包思路来实现单例模式
const Modal = (function () {
  let modal = null;
  return function () {
    if (!modal) {
      modal = document.createElement('div');
      modal.innerHTML = '我是一个全局唯一的Modal';
      modal.id = 'modal';
      modal.style.display = 'none';
      document.body.appendChild(modal);
    }
    return modal;
  };
})();

// 点击打开按钮展示模态框
document.getElementById('open').addEventListener('click', function () {
  // 未点击则不创建modal实例，避免不必要的内存占用;此处不用 new Modal 的形式调用也可以，和 Storage 同理
  const modal = new Modal();
  modal.style.display = 'block';
});

// 点击关闭按钮隐藏模态框
document.getElementById('close').addEventListener('click', function () {
  const modal = new Modal();
  if (modal) {
    modal.style.display = 'none';
  }
});
```

## 3.原型模式-prototype

- 利用实例来描述对象，用实例作为定义对象和继承的基础

- 基于原型链的继承

- 原型的出现是为了共享实例对象内的属性和方法

### 1）原型

- 每个构造函数都拥有一个 prototype 属性，它指向构造函数的原型对象
- 这个原型对象中有一个 constructor 属性指回构造函数
- 每个实例都有一个`__proto__`属性，当我们使用构造函数去创建实例时，实例的`__proto__`属性就会指向构造函数的原型对象

### 2）原型链

- 试图访问一个 JavaScript 实例的属性/方法时，它首先搜索这个实例本身
- 当发现实例没有定义对应的属性/方法时，它会转而去搜索实例的原型对象
- 如果原型对象中也搜索不到，它就去搜索原型对象的原型对象
- 这个搜索的轨迹，就叫做原型链

### 3）对象的深拷贝

```js
function deepClone(obj) {
  // 如果是 值类型 或 null，则直接return
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  // 定义结果对象
  let copy = {};
  // 如果对象是数组，则定义结果数组
  if (obj.constructor === Array) {
    copy = [];
  }
  // 遍历对象的key
  for (let key in obj) {
    // 如果key是对象的自有属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用深拷贝方法
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}
```

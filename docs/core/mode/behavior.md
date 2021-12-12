---
toc: menu
---

# 行为型

## 1.策略模式-重构拆分胖逻辑

### 1）if-else 处理方案

- 违背了“单一功能”原则

  - 一个 function 处理所有逻辑

- 违背了“开放封闭”原则
  - 后期扩展时要改动 function，继续添加 if

```js
function askPrice(status, originPrice) {
  // 预热价
  if (status === 'pre') {
    if (originPrice > 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  }
  // 大促价
  if (status === 'onSale') {
    if (originPrice > 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  }
  // 返场价
  if (status === 'back') {
    if (originPrice > 200) {
      return originPrice - 50;
    }
    return originPrice;
  }
}
```

### 2）单一功能改造

- 没有违背“单一功能”原则，但是违背了“开放封闭原则”

```js
function askPrice(status, originPrice) {
  // 预热价
  if (status === 'pre') {
    return prePrice(originPrice);
  }
  // 大促价
  if (status === 'onSale') {
    return onSalePrice(originPrice);
  }
  // 返场价
  if (status === 'back') {
    return backPrice(originPrice);
  }
}
function prePrice(originPrice) {
  if (originPrice > 100) {
    return originPrice - 20;
  }
  return originPrice * 0.9;
}
function onSalePrice(originPrice) {
  if (originPrice > 100) {
    return originPrice - 30;
  }
  return originPrice * 0.8;
}
function backPrice(originPrice) {
  if (originPrice > 200) {
    return originPrice - 50;
  }
  return originPrice;
}
```

### 3）开放封闭改造

```js
const priceConfig = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
};
function askPrice(status, originPrice) {
  return priceConfig[status](originPrice);
}
```

**新增一个新人价**

```js
priceConfig.newUser = function (originPrice) {
  if (originPrice >= 100) {
    return originPrice - 50;
  }
  return originPrice;
};
```

- 不直接在 priceConfig 内改动的好处

  - priceConfig 内部没有修改代码，只需要对新增的功能进行测试，无需回归旧逻辑测试

## 2.状态模式

- 允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类

- 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化

## 3.观察者模式

- 也称发布订阅模式，模块间实时互通，当一个属性发生状态改变时，观察者会连续引发所有的相关状态改变

- 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新

- 类似微信群聊中的@

### 1）定义发布者

```js
class Publisher {
  constructor() {
    this.observers = [];
    console.log('Publisher created');
  }
  // 增加订阅者
  add(observer) {
    console.log('Publisher.add invoked');
    this.observers.push(observer);
  }
  // 移除订阅者
  remove(observer) {
    console.log('Publisher.remove invoked');
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  // 通知所有订阅者
  notify() {
    console.log('Publisher.notify invoked');
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
```

### 2）定义订阅者

```js
class Observer {
  constructor() {
    console.log('Observer created');
  }

  update() {
    console.log('Observer.update invoked');
  }
}
```

### 3）监听

```js
// 定义一个具体的需求文档（prd）发布类
class PrdPublisher extends Publisher {
  constructor() {
    super();
    // 初始化需求文档
    this.prdState = null;
    // 韩梅梅还没有拉群，开发群目前为空
    this.observers = [];
    console.log('PrdPublisher created');
  }

  // 该方法用于获取当前的prdState
  getState() {
    console.log('PrdPublisher.getState invoked');
    return this.prdState;
  }

  // 该方法用于改变prdState的值
  setState(state) {
    console.log('PrdPublisher.setState invoked');
    // prd的值发生改变
    this.prdState = state;
    // 需求文档变更，立刻通知所有开发者
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = {};
    console.log('DeveloperObserver created');
  }

  // 重写一个具体的update方法
  update(publisher) {
    console.log('DeveloperObserver.update invoked');
    // 更新需求文档
    this.prdState = publisher.getState();
    // 调用工作函数
    this.work();
  }

  // work方法，一个专门搬砖的方法
  work() {
    // 获取需求文档
    const prd = this.prdState;
    // 开始基于需求文档提供的信息搬砖。。。
    // ...
    console.log('996 begins...');
  }
}
```

### 4）执行

```js
// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver();
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver();
// 创建订阅者：测试同学小B
const B = new DeveloperObserver();
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher();
// 需求文档出现了
const prd = {
  // 具体的需求内容
  // ...
};
// 韩梅梅开始拉群
hanMeiMei.add(liLei);
hanMeiMei.add(A);
hanMeiMei.add(B);
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd);
```

### 5）Vue 数据双向绑定（响应式系统）的实现原理

- observer（监听器）： observer 不仅是一个数据监听器，它还需要对监听到的数据进行转发——也就是说它同时还是一个发布者

- watcher（订阅者）：observer 把数据转发给了真正的订阅者——watcher 对象。watcher 接收到新的数据后，会去更新视图

- compile（编译器）：MVVM 框架特有的角色，负责对每个节点元素指令进行扫描和解析，指令的数据初始化、订阅者的创建这些“杂活”也归它管~

**1.实现 observer**

```js
// observe方法遍历并包装对象属性
function observe(target) {
  // 若target是一个对象，则遍历它
  if (target && typeof target === 'object') {
    Object.keys(target).forEach((key) => {
      // defineReactive方法会给目标属性装上“监听器”
      defineReactive(target, key, target[key]);
    });
  }
}

// 定义defineReactive方法
function defineReactive(target, key, val) {
  // 属性值也可能是object类型，这种情况下需要调用observe进行递归遍历
  observe(val);
  // 为当前属性安装监听器
  Object.defineProperty(target, key, {
    // 可枚举
    enumerable: true,
    // 不可配置
    configurable: false,
    get: function () {
      return val;
    },
    // 监听器函数
    set: function (value) {
      console.log(`${target}属性的${key}属性从${val}值变成了了${value}`);
      val = value;
    },
  });
}
```

**2.实现订阅者 Dep**

```js
// 定义订阅者类Dep
class Dep {
  constructor() {
    // 初始化订阅队列
    this.subs = [];
  }

  // 增加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }

  // 通知订阅者（是不是所有的代码都似曾相识？）
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
```

**3.使用**

```js
function defineReactive(target, key, val) {
  const dep = new Dep();
  // 监听当前属性
  observe(val);
  Object.defineProperty(target, key, {
    set: (value) => {
      // 通知所有订阅者
      dep.notify();
    },
  });
}
```

### 6）实现一个 Event Bus/ Event Emitter

```js
class EventBus {
  constructor(maxListeners) {
    this.events = {};
    this.maxListeners = maxListeners || Infinity;
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.wran(`${event} has not register`);
      return;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (
      this.maxListeners !== Infinity &&
      this.events[event].length >= this.maxListeners
    ) {
      console.wran(`${event} has reached max listeners`);
      return;
    }
    this.events[event].push(cb);
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.apply(this, args);
    };
    this.on(event, func);
  }
  off(event, cb) {
    const cbs = this.events[event];
    const index = cbs.indexOf(cb);
    if (index !== -1) {
      cbs.splice(index, 1);
    }
  }
}
```

### \*观察者模式与发布-订阅模式的区别

- **观察者模式**：发布者直接触及到订阅者的操作，叫观察者模式

  - 观察者模式仅仅是减少了耦合，并没有完全地解决耦合问题（被观察者必须去维护一套观察者的集合，这些观察者必须实现统一的方法供被观察者调用，两者之间还是有着说不清、道不明的关系）
  - 如果两个模块之间本身存在关联，且这种关联是稳定的、必要的，使用观察者模式就够了

- **发布-订阅模式**：发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式
  - 发布-订阅模式下，实现了完全地解耦
  - 模块与模块之间独立性较强、且没有必要单纯为了数据通信而强行为两者制造依赖的情况下，我们往往会倾向于使用发布-订阅模式
  - EventBus 属于发布-订阅模式

## 4.迭代器模式-遍历

- 迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示
  - 目的性极强的模式，解决一个问题——`遍历`

### 1）js 内置的 Array.prototype.forEach

```js
const arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(`索引为${index}的元素是${item}`);
});
```

- 缺点：不能遍历类数组对象

```js
const aNodes = document.getElementsByTagName('a');
aNodes.forEach((aNode, index) => {
  console.log(aNode, index);
});
// 会报错
// aNodes.forEach is not a function
```

### 2）jquery 中的迭代器

- 借助 jQuery 的 each 方法，我们可以用同一套遍历规则遍历不同的集合对象

```js
const aNodes = document.getElementsByTagName('a');
$.each(aNodes, function (index, aNode) {
  console.log(index, aNode);
});
```

### 3）ES6 对迭代器的实现

- ES6 约定，任何数据结构只要具备 Symbol.iterator 属性（这个属性就是 Iterator 的具体实现，它本质上是当前数据结构默认的迭代器生成函数），就可以被遍历
- for...of...的背后正是对 next 方法的反复调用

```js
const arr = [1, 2, 3];
const len = arr.length;
for (const item of arr) {
  console.log(`当前元素是${item}`);
}
```

- 借助数组的 Symbol.iterator 生成了它对应的迭代器对象，通过反复调用迭代器对象的 next 方法访问了数组成员

```js
const arr = [1, 2, 3];
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]();

// 对迭代器对象执行next，就能逐个访问集合的成员
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: undefined, done: true}
```

- 相当于

```js
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]();

// 初始化一个迭代结果
let now = { done: false };

// 循环往外迭代成员
while (!now.done) {
  now = iterator.next();
  if (!now.done) {
    console.log(`现在遍历到了${now.value}`);
  }
}
```

**实现迭代器生成函数**

- 目标

```js
// 编写一个迭代器生成函数
function* iteratorGenerator() {
  yield '1号选手';
  yield '2号选手';
  yield '3号选手';
}

const iterator = iteratorGenerator();

iterator.next();
iterator.next();
iterator.next();
```

- 实现

```js
// 定义生成器函数，入参是任意集合
function iteratorGenerator(list) {
  // idx记录当前访问的索引
  var idx = 0;
  // len记录传入集合的长度
  var len = list.length;
  return {
    // 自定义next方法
    next: function () {
      // 如果索引还没有超出集合长度，done为false
      var done = idx >= len;
      // 如果done为false，则可以继续取值
      var value = !done ? list[idx++] : undefined;

      // 将当前值与遍历是否完毕（done）返回
      return {
        done: done,
        value: value,
      };
    },
  };
}

var iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手']);
iterator.next(); // {value: '1号选手', done: false}
iterator.next(); // {value: '2号选手', done: false}
iterator.next(); // {value: '3号选手', done: false}
```

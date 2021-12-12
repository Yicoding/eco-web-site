---
toc: menu
---

# 结构型

## 1.装饰器模式

- 在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求

- 增强已有模块，动态将责任附加到对象上

### 1）基本用法

```js
// 设备升级
class Device {
  create() {
    console.log('PlayStation4');
  }
}
class Phone {
  create() {
    console.log('iphone18');
  }
}

// 装饰器类：增加update功能
class Decorator {
  constructor(device) {
    this.device = device;
  }
  create() {
    this.device.create();
    this.update(device);
  }
  update(device) {
    console.log(device + 'pro');
  }
}

const device = new Device();
device.create();
const newDevice = new Decorator(device);
newDevice.create();
```

### 2）ES7 中的装饰器 @语法糖

**1.帮助函数传参&调用**

- 装饰器语法糖首先帮我们`做掉的工作` —— `函数传参&调用`

- 在`使用`的时候可以`省略`传参&调用

- 1.放在装饰类外面

  - 此处的 target 就是被装饰的`类本身`

    ```js
    // 放在装饰类外面
    function classDecorator(target) {
      target.hasDecorator = true;
      return target;
    }

    // 将装饰器“安装”到Button类上
    @classDecorator
    class Button {
      // Button类的相关逻辑
    }
    ```

- 2.放在装饰类里面

  - 此处的 target 变成了 Button.prototype，即`类的原型对象`。这是因为 onClick 方法总是要依附其实例存在的，修饰 onClik 其实是修饰它的实例。但装饰器函数执行的时候，Button 实例还并不存在。为了确保实例生成后可以顺利调用被装饰好的方法，装饰器只能去修饰 Button 类的原型对象

    ```js
    // 放在装饰类里面
    function funcDecorator(target, name, descriptor) {
      let originalMethod = descriptor.value;
      descriptor.value = function () {
        console.log('我是Func的装饰器逻辑');
        return originalMethod.apply(this, arguments);
      };
      return descriptor;
    }

    class Button {
      @funcDecorator
      onClick() {
        console.log('我是Func的原有逻辑');
      }
    }
    ```

**2.将“属性描述对象”交到你手里**

- 编写方法装饰器时，需要至少三个参数

```js
function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function () {
    console.log('我是Func的装饰器逻辑');
    return originalMethod.apply(this, arguments);
  };
  return descriptor;
}
```

| 参数       | 含义                                                      |
| :--------- | :-------------------------------------------------------- |
| target     | 放在装饰类外面：`类本身`； 放在装饰类里面：`类的原型对象` |
| name       | 修饰的目标属性属性名                                      |
| descriptor | 属性描述对象                                              |

- 描述符分为数据描述符和存取描述符:
  - `数据描述符`：包括 `value`（存放属性值，默认为默认为 undefined）、`writable`（表示属性值是否可改变，默认为 true）、`enumerable`（表示属性是否可枚举，默认为 true）、`configurable`（属性是否可配置，默认为 true）。
  - `存取描述符`：包括 `get` 方法（访问属性时调用的方法，默认为 undefined），`set`（设置属性时调用的方法，默认为 undefined ）

### 3）React 中的装饰器：HOC

- 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
  - 通过编写高阶组件，可以充分复用现有逻辑，提高编码效率和代码的健壮性

**1.编写**

```js
import React, { Component } from 'react';

const BorderHoc = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <div style={{ border: 'solid 1px red' }}>
          <WrappedComponent />
        </div>
      );
    }
  };
export default borderHoc;
```

**2.使用**

```js
import React, { Component } from 'react';
import BorderHoc from './BorderHoc';

// 用BorderHoc装饰目标组件
@BorderHoc
class TargetComponent extends React.Component {
  render() {
    // 目标组件具体的业务逻辑
  }
}

// export出去的其实是一个被包裹后的组件
export default TargetComponent;
```

### 4）Redux connect

- connect 的两个入参：mapStateToProps 是一个函数，它可以建立组件和状态之间的映射关系；mapDispatchToProps 也是一个函数，它用于建立组件和 store.dispatch 的关系，使组件具备通过 dispatch 来派发状态的能力

- 调用 connect 可以返回一个具有装饰作用的函数，这个函数可以接收一 个 React 组件作为参数，使这个目标组件和 Redux 结合、具备 Redux 提供的数据和能力

- connect 是一个返回高阶组件的高阶函数

**1.编写**

```js
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from './action.js';

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

// 将connect调用后的结果作为一个装饰器导出
export default connect(mapStateToProps, mapDispatchToProps);
```

**2.使用**

```js
import React, { Component } from 'react';
import connect from './connect.js';

@connect
export default class App extends Component {
  render() {
    // App的业务逻辑
  }
}
```

## 2.适配器模式-兼容代码

- 通过把一个类的接口变换成客户端所期待的另一种接口，可以帮我们解决不兼容的问题

- 适配已有模块，保证模块间的独立解耦且连接兼容

- 相当于耳机接口转换器（之前的圆孔耳机要连接新手机的方形接口）

- 之前暴露出的接口不变，内部做兼容处理

### axios 中的适配器

- axios 完美地抹平了浏览器和 Node 环境下 api 的调用差异，靠的正是对适配器模式的灵活运用

**1.使用**

```js
function getDefaultAdapter() {
  var adapter;
  // 判断当前是否是node环境
  if (
    typeof process !== 'undefined' &&
    Object.prototype.toString.call(process) === '[object process]'
  ) {
    // 如果是node环境，调用node专属的http适配器
    adapter = require('./adapters/http');
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // 如果是浏览器环境，调用基于xhr的适配器
    adapter = require('./adapters/xhr');
  }
  return adapter;
}
```

**2.http 适配器**

```js
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    // 具体逻辑
  }
}
```

**2.xhr 适配器**

```js
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    // 具体逻辑
  }
}
```

- 两个适配器的入参都是 config；
- 两个适配器的出参都是一个 Promise

- 把变化留给自己，把统一留给用户

  - 统一的接口，统一的入参，统一的出参，统一的规则

## 3.代理模式

- 某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式（例如：VPN）

- 使用代理人来替代原始对象，集约流程

- A 不能直接访问 B，A 需要借助一个帮手来访问 B，这个帮手就是代理器

  **ES6 中的 Proxy**

  > const proxy = new Proxy(obj, handler)

  - obj：目标对象
  - 当我们通过 proxy 去访问目标对象的时候，handler 会对我们的行为作一层拦截，我们的每次访问都需要经过 handler 这个第三方

### 1）事件代理

- 利用浏览器`事件冒泡机制`

**点击每个 a 标签，都可以弹出“我是 xxx”这样的提示**

- html 部分

```html
<div id="father">
  <a href="#">链接1号</a>
  <a href="#">链接2号</a>
  <a href="#">链接3号</a>
  <a href="#">链接4号</a>
  <a href="#">链接5号</a>
  <a href="#">链接6号</a>
</div>
```

- js 部分

  - 不使用事件代理

  ```js
  const aNodes = document.getElementById('father').getElementByTageName('a');
  for (let i = 0; i < aNodes.length; i++) {
    aNodes[i].addEventListener('click', function (e) {
      e.preventDefault();
      console.log(`我是${aNodes[i].innerText}`);
    });
  }
  ```

  - 使用事件代理

  ```js
  const father = document.getElementById('father');
  father.addEventListener('click', function (e) {
    if (e.target.tagName === 'a') {
      e.preventDefault();
      console.log(`我是${e.target.innerText}`);
    }
  });
  ```

- 点击操作并不会直接触及目标子元素，而是由父元素对事件进行处理和分发、间接地将其作用于子元素，因此这种操作从模式上划分属于代理模式

### 2）虚拟代理

**图片预加载场景**

```js
class PreLoadImage {
  constructor(imgNode) {
    // 获取真实的DOM节点
    this.imgNode = imgNode;
  }
  // 操作img节点的src属性
  setSrc(imgUrl) {
    this.imgNode.src = imgUrl;
  }
}

class ProxyImage {
  // 占位图的url地址
  static LOADING_URL = 'xxxxxx';
  constructor(targetImage) {
    // 目标Image，即PreLoadImage实例
    this.targetImage = targetImage;
  }
  // 该方法主要操作虚拟Image，完成加载
  setSrc(targetUrl) {
    // 真实img节点初始化时展示的是一个占位图
    this.targetImage.setSrc(ProxyImage.LOADING_URL);
    // 创建一个帮我们加载图片的虚拟Image实例
    const virtualImage = new Image();
    // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl);
    };
    // 设置src属性，虚拟Image实例开始加载图片
    virtualImage.src = targetUrl;
  }
}
```

- ProxyImage 调度了预加载相关的工作，可以通过 ProxyImage 这个代理，实现对真实 img 节点的间接访问，并得到想要的效果。

在这个实例中，virtualImage 这个对象是一个“幕后英雄”，它始终存在于 JavaScript 世界中、代替真实 DOM 发起了图片加载请求、完成了图片加载工作，却从未在渲染层面抛头露面。因此这种模式被称为“虚拟代理”模式

### 3）缓存代理

- 用空间换时间

  - 当我们需要用到某个已经计算过的值的时候，不想再耗时进行二次计算，而是希望能从内存里去取出现成的计算结果。这种场景下，就需要一个代理来帮我们在进行计算的同时，进行计算结果的缓存了

  - vue 中的 `computed`、react 中的 `memo`

- 不使用缓存代理（每次都会计算）

  ```js
  // addAll方法会对你传入的所有参数做求和操作
  const addAll = function () {
    console.log('进行了一次新计算');
    let result = 0;
    const len = arguments.length;
    for (let i = 0; i < len; i++) {
      result += arguments[i];
    }
    return result;
  };
  ```

- 使用缓存代理

  ```js
  // 为求和方法创建代理
  const proxyAddAll = (function () {
    // 求和结果的缓存池
    const resultCache = {};
    return function () {
      // 将入参转化为一个唯一的入参字符串
      const args = Array.prototype.join.call(arguments, ',');

      // 检查本次入参是否有对应的计算结果
      if (args in resultCache) {
        // 如果有，则返回缓存池里现成的结果
        return resultCache[args];
      }
      return (resultCache[args] = addAll(...arguments));
    };
  })();
  ```

### 4）保护代理

- 在访问层面做文章，在 getter 和 setter 函数里去进行校验和拦截，确保一部分变量是安全的

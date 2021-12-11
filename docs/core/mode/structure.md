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

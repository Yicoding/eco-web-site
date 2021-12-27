---
toc: menu
---

# react 基础

## 1.简史

- `2011` 年`诞生`
- 2015 年发布 `v0.14.0` 版本：拆分 react package into two，react and react-dom
- 2016 年发布 `v15.0` 版本：`虚拟 dom 的 diff 操作`同步执行
- 2017 年发布 React `v16.0` 版本：为了解决之前大型 React 应用一次更新遍历大量虚拟 DOM 带来个卡顿问题，React 重写了核心模块 Reconciler ，启用了 `Fiber 架构(分片)`；为了在让节点渲染到指定容器内，更好的实现弹窗功能，推出 `createPortal` API；为了捕获渲染中的异常，引入 `componentDidCatch` 钩子，划分了错误边界
- react `v16.2.0`（2017 年）：增加 `Fragment` 组件,解决数组元素问题
- react `V16.3.0`（2018 年）：增加 React.`createRef`() API，可以通过 React.createRef 取得 Ref 对象。增加 React.`forwardRef`() API，解决高阶组件 ref 传递问题；推出新版本 `context` api，迎接 Provider / Consumer 时代；增加 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期 。
- react `V16.6.0`（2018 年）：增加 React.`memo`() API，用于`控制子组件渲染`；增加 React.`lazy`() API 实现`代码分割`；增加 `contextType` 让类组件更便捷的使用 context；增加生命周期 getDerivedStateFromError 代替 componentDidCatch
- react `V16.8.0`（2019 年）：增加 `React Hooks`，用来解决状态逻辑复用问题，且不会产生 JSX 嵌套地狱
- 2020 年发布 React `v17.0` 版本：事件绑定由` document 变成 container` ，移除事件池等

## 2.生态

### 1）脚手架/框架

- umi：可插拔的企业级 react 应用框架
- create react app：官方支持的创建 react 单页应用程序的方法
- Nextjs：ssr 框架
- React-vr：vr 框架，适用于展厅、房屋设计
- Reactxp：多端框架

### 2）组件库

- ant Design 系列：pc、mobile，引入 Ant Design 设计概念
- Material-UI：实现了谷歌 Material Design 设计规范，世界流行界面

### 3）工具类

- Redux：遵循函数式编程思想的状态管理插件
- Mobx：面向对象变迁和响应式编程的状态管理插件
- Immutable-js：解决 javasript Immutable Data 的问题

### 4）跨端类

- Remax：阿里的 React 跨端框架，目前支持支付宝、微信、字节小程序
- Taro：类 React 跨端框架，支持主流小程序及 React Native
- React Native：js 编写原生的 React 框架

### 5）其他

- react-window 和 react-virtualized：虚拟滚动库，提供可服用组件，用于展示列表、网络和表格数据

## 3.ReactDOM

- react-dom 的 package 提供了可在应用顶层使用的 DOM（DOM-specific）方法，可以把这些方法用于 `React 模型以外的地方`

### 1）render()

- 当`首次`调用时，容器节点里的所有 DOM 元素都会被`替换`，`后续`的调用则会使用 React 的 DOM 差分算法 DOM diffing algorithm）进行高效的`更新`

- 不会修改容器节点（只会修改容器的子节点）

```js
ReactDOM.render(element, container[, callback]);
```

- element：被渲染的 React 元素，例如组件

- container：渲染容器

- callback：在组件被渲染或更新之后被执行

### 2）unmountComponentAtNode

- 从 DOM 中`卸载组件`，会将其事件处理器（event handlers）和 state 一并清除。如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。如果组件`被移除`将会返回 `true`，如果`没有`组件`可被移除`将会返回 `false`

```js
ReactDOM.unmountComponentAtNode(container);
```

### 3）createPortal()

```js
ReactDOM.createPortal(child, container);
```

- 创建 `portal`。Portal 将子节点渲染到存在于`父组件以外的 DOM 节点`。

- 当`父组件`有 overflow: hidden 或 z-index 样式时，但你需要`子组件`能够在视觉上`“跳出”`其容器。例如，对话框、悬浮卡以及提示框

```js
render() {
  // React 挂载了一个新的 div，并且把子元素渲染其中
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

=>

```js
render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中
  // `domNode` 是一个可以在任何位置的有效 DOM 节点
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

### 4）使用

```ts
// 封装
import ReactDOM from 'react-dom';
import { ReactElement } from 'react';

export function renderToBody(element: ReactElement) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  function unmount() {
    const unmountResult = ReactDOM.unmountComponentAtNode(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  ReactDOM.render(element, container);
  return unmount;
}

// 使用
import renderToBody from './renderToBody';

const Wrapper = () => {
  return <div>Wrapper</div>;
};
const unmount = renderToBody(<Wrapper />);

// 销毁，执行unmount即可
unmount();
```

## 4.jsx

- Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用

### 1） babel 处理后

- `babel-plugin-transform-react-jsx` 插件，可以将 jsx 编译为 react 的内部⽅法 createElement

```js
React.createElement(type, [props], [...children]);
```

- `type`：如果是组件类型，会传入组件对应的类或函数；如果是 dom 元素类型，传入 div 或者 span 之类的字符串

- `props`：一个对象，在 dom 类型中为标签属性，在组件类型中为 props

- `children`：依次为 children，根据顺序排列

```js
import React from 'react';

function Index() {
  return (
    <div>
      <div className="gree">gree</div>
      Hello {this.props.name}
    </div>
  );
}
```

=>

```js
import React from 'react';

function Index() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      {
        className: 'gree',
      },
      'gree',
    ),
    'Hello ',
    this.props.name,
  );
}
```

- 老版本的 React 中，为什么写 jsx 的文件要默认`引入` React?

  - 因为 jsx 在被 babel 编译后，写的 jsx 会变成上述 React.createElement 形式，所以需要引入 React，`防止找不到 React` 引起报错

### 2）createElement 处理后

- 外层的 div 被 react.createElement 转换成 `react element` 对象，div 里面的 8 个元素分别转换成 children 子元素列表

### 3） React 底层调和处理

- 最终，在调和阶段，React element 对象的每一个子节点都会形成一个与之对应的 fiber 对象，然后通过 sibling、return、child 将每一个 fiber 对象联系起来

```js
export const FunctionComponent = 0; // 函数组件
export const ClassComponent = 1; // 类组件
export const IndeterminateComponent = 2; // 初始化的时候不知道是函数组件还是类组件
export const HostRoot = 3; // Root Fiber 可以理解为根元素 ， 通过reactDom.render()产生的根元素
export const HostPortal = 4; // 对应  ReactDOM.createPortal 产生的 Portal
export const HostComponent = 5; // dom 元素 比如 <div>
export const HostText = 6; // 文本节点
export const Fragment = 7; // 对应 <React.Fragment>
export const Mode = 8; // 对应 <React.StrictMode>
export const ContextConsumer = 9; // 对应 <Context.Consumer>
export const ContextProvider = 10; // 对应 <Context.Provider>
export const ForwardRef = 11; // 对应 React.ForwardRef
export const Profiler = 12; // 对应 <Profiler/ >
export const SuspenseComponent = 13; // 对应 <Suspense>
export const MemoComponent = 14; // 对应 React.memo 返回的组件
```

- fiber 对应关系：

  - child： 一个由父级 fiber 指向子级 fiber 的指针
  - return：一个子级 fiber 指向父级 fiber 的指针
  - sibiling: 一个 fiber 指向下一个兄弟 fiber 的指针

- 对于上述在 jsx 中写的 map 数组结构的子节点，外层会被加上 fragment
  - map 返回数组结构，作为 fragment 的子节点

### 4）React.Children.toArray 扁平化，规范化 children 数组

- React.Children.toArray 可以`扁平化`、`规范化` React.element 的 `children` 组成的数组
- React.Children.toArray 还可以`深层次 flat`

### 5）cloneElement

- cloneElement 的作用是以 element 元素为样板克隆并返回新的 React element 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果

## 5.事件系统

- 1.给元素绑定的事件，不是真正的事件处理函数
- 2.在冒泡/捕获阶段绑定的事件，也不是在冒泡/捕获阶段执行的
- 3.甚至在事件处理函数中拿到的事件源 e ，也不是真正的事件源 e

### 1）原因

- 对于不同的浏览器，对事件存在不同的兼容性，React 想实现一个`兼容全浏览器的框架`， 为了实现这个目标就需要创建一个兼容全浏览器的事件系统，以此`抹平不同浏览器的差异`

- v17 之前 React 事件都是绑定在 `document` 上，v17 之后 React 把事件绑定在应用对应的容器 `container`(#root) 上，将事件绑定在同一容器统一管理，防止很多事件直接绑定在原生的 DOM 元素上。造成一些不可控的情况。由于不是绑定在真实的 DOM 上，所以 React 需要模拟一套事件流：事件捕获-> 事件源 -> 事件冒泡，也包括重写一下事件源对象 event

- 这种事件系统，大部分处理逻辑都在底层处理了，这对后期的 `ssr` 和`跨端支持度`很高

### 2）冒泡阶段和捕获阶段

- 冒泡阶段：开发者正常给 React 绑定的事件比如 onClick，onChange，默认会在模拟冒泡阶段执行
- 捕获阶段：如果想要在捕获阶段执行可以将事件后面加上 `Capture` 后缀，比如 onClickCapture，onChangeCapture

```js
export default function Index() {
  const handleClick = () => {
    console.log('模拟冒泡阶段执行');
  };
  const handleClickCapture = () => {
    console.log('模拟捕获阶段执行');
  };
  return (
    <div>
      <button onClick={handleClick} onClickCapture={handleClickCapture}>
        点击
      </button>
    </div>
  );
}
```

### 3）阻止冒泡

**1.阻止 react 合成事件**

- e.stopPropagation()

**2.阻止 document.addEventListener 注册的原生事件**

- 用 e.stopPropagation()是不能阻止与 document 之间的冒泡
- 这时候需要用到`e.nativeEvent.stopImmediatePropagation()`方法，

**3.阻止合成事件与非合成事件（除了 document）之间的冒泡**

- 需要用到 e.target 判断

  ```js
  if (e.target && e.target === document.querySelector('#inner')) {
    return;
  }
  ```

### 4）阻止默认行为

- `原生事件`：` e.preventDefault()` 和 `return false` 可以用来阻止事件默认行为

- `React事件`： 在 React 应用中，可以用 `e.preventDefault()` 阻止事件默认行为，这个方法并非是原生事件的 preventDefault ，由于 React 事件源 e 也是独立组建的，所以 preventDefault 也是单独处理的
  - 由于在 React 中给元素的事件`并不是真正的事件处理函数`。所以导致 `return false` 方法在 React 应用中完全`失去`了`作用`

### 5）事件合成

- 第一个部分是事件合成系统，初始化会注册不同的事件插件
- 第二个就是在一次渲染过程中，对事件标签中事件的收集，向 `container` 注册事件
- 第三个就是一次用户交互，事件触发，到事件执行一系列过程

### 6）事件合成概念

- React 的事件不是绑定在元素上的，而是`统一绑定在顶部容器上`，在 v17 之前是绑定在 `document` 上的，在 v17 改成了 `app` 容器上。这样更利于一个 html 下存在多个应用（`微前端`）
- 绑定事件并`不是一次性绑定所有事件`，比如发现了 onClick 事件，就会绑定 click 事件，比如发现 onChange 事件，会绑定 [blur，change ，focus ，keydown，keyup] 多个事件
- React 事件合成的概念：React 应用中，元素绑定的`事件`并`不是原生事件`，而`是 React 合成的事件`，比如 onClick 是由 click 合成，onChange 是由 blur ，change ，focus 等多个事件合成

### 7）事件插件机制

- 不同的事件会有不同的事件插件处理

**1.registrationNameModules**

- 记录了 React 事件（比如 onBlur ）和与之对应的处理插件的映射

- 应用于事件触发阶段，根据不同事件使用不同的插件

- 对于不同的事件，有不同的处理逻辑；对应的事件源对象也有所不同，React 的事件和事件源是自己合成的，所以对于不同事件需要不同的事件插件处理

**2.registrationNameDependencies**

- 这个对象保存了 React 事件和原生事件`对应关系`

- 在事件绑定阶段，如果发现有 React 事件，比如 onChange ，就会找到`对应的原生事件数组`，`逐一绑定`

### 8）事件绑定

- 1.在 React `处理 props` 时候，如果遇到事件比如 onClick ，就会通过 `addEventListener` 注册原生事件

  - onClick 会保存在对应 DOM 元素类型 `fiber` 对象（ `hostComponent` ）的 `memoizedProps` 属性上

- 2.React 根据事件注册事件监听器

  - diffProperties 函数在 diff props 如果发现是合成事件( onClick ) 就会调用 legacyListenToEvent 函数

  ```js
  function diffProperties(){
    /* 判断当前的 propKey 是不是 React合成事件 */
    if(registrationNameModules.hasOwnProperty(propKey)){
      /* 这里多个函数简化了，如果是合成事件， 传入成事件名称 onClick ，向document注册事件  */
      legacyListenToEvent(registrationName, document）;
    }
  }
  ```

- 3.`egacyListenToEvent` 注册事件
  - 对 React 合成事件，分别绑定原生事件的事件监听器
  - 遍历绑定

```js
function legacyListenToEvent(registrationName，mountAt){
   const dependencies = registrationNameDependencies[registrationName]; // 根据 onClick 获取  onClick 依赖的事件数组 [ 'click' ]。
    for (let i = 0; i < dependencies.length; i++) {
    const dependency = dependencies[i];
    //  addEventListener 绑定事件监听器
    ...
  }
}
```

- 4.绑定在 `document` 的事件

  - 是 React 统一的事件处理函数 `dispatchEvent` ，React 需要一个统一流程去代理事件逻辑，包括 React 批量更新等逻辑
  - React 事件触发，首先执行的就是 dispatchEvent
  - dispatchEvent 是如何知道是什么事件触发的呢?
    - 在注册的时候，就已经通过 bind ，把参数绑定给 dispatchEvent 了

### 9）事件触发

- 批量更新

- 合成事件源

  - 会通过 onClick 找到对应的处理插件 SimpleEventPlugin ，合成新的事件源 e ，里面包含了 preventDefault 和 stopPropagation 等方法

- 形成事件执行队列

### 10）React 如何模拟阻止事件冒泡

```js
export default function Index() {
  const handleClick1 = () => console.log(1);
  const handleClick2 = () => console.log(2);
  const handleClick3 = () => console.log(3);
  const handleClick4 = () => console.log(4);
  return (
    <div onClick={handleClick3} onClickCapture={handleClick4}>
      <button onClick={handleClick1} onClickCapture={handleClick2}>
        点击
      </button>
    </div>
  );
}

function runEventsInBatch() {
  const dispatchListeners = event._dispatchListeners;
  if (Array.isArray(dispatchListeners)) {
    for (let i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        /* 判断是否已经阻止事件冒泡 */
        break;
      }
      dispatchListeners[i](event); /* 执行真正的处理函数 及handleClick1... */
    }
  }
}
```

- 假设在上述队列中，handleClick2 中调用 e.stopPropagation()，那么事件源里将有状态证明此次事件已经停止冒泡，那么下次遍历的时候， event.`isPropagationStopped`() 就会返回 true ，所以跳出循环，handleClick1, handleClick3 将不再执行，模拟了阻止事件冒泡的过程。

## 6.函数组件和 class 组件

- 组件本质上就是类和函数

```js
//函数组件
function Foo(props) {
  return <div>{props.text || 'Foo'}</div>;
}

//类组件
class Bar extends React.Component {
  render() {
    return <div>{this.props.text || 'Bar'}</div>;
  }
}
```

### 1）class 类组件

- 类组件执行构造函数过程中会在实例上绑定 props 和 context
- 初始化置空 refs 属性，原型链上绑定 setState、forceUpdate 方法
- 对于 updater，React 在实例化类组件之后会单独绑定 update 对象

```js
function Component(props, context, updater) {
  this.props = props; // 绑定props
  this.context = context; // 绑定context
  this.refs = emptyObject; // 绑定ref
  this.updater = updater || ReactNoopUpdateQueue; // 上面所属的updater 对象
}
/* 绑定setState 方法 */
Component.prototype.setState = function (partialState, callback) {
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/* 绑定forceupdate 方法 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
```

- props 是在父类 Component 构造函数中，执行 super 等于执行 Component 函数

- class 组件`需要`使用 `new` 实例化

### 2）函数组件

- 不要尝试给函数组件 prototype 绑定属性或方法，即使绑定了也没有任何作用，因为 React 是采用`直接执行函数的方式`，而`不是`通过 `new` 的方式

### 3）区别

- 对于`类组件`来说，底层`只`需要`实例化一次`，实例中保存了组件的 state 等状态。对于每一次更新只需要调用 render 方法以及对应的生命周期就可以了

- 在`函数组件`中，`每一次更新都是一次新的函数执行`，一次函数组件的更新，里面的`变量会重新声明`

- React Hooks 可以帮助`记录` React 中组件的`状态`，处理一些额外的副作用

## 7.受控组件和非受控组件

- 受控组件：表单`数据`是由 `React` 组件来`管理`的，推荐使用

- 非受控组件：表单`数据`将交`由 DOM 节点来处理`，可以通过 ref 获取表单中数据

```js
//受控组件
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

//非受控组件
class Form extends Component {
  handleSubmitClick = () => {
    const name = this._name.value;
    // do something with `name`
  };

  render() {
    return (
      <div>
        {/* defaultValue为初始值，通过ref可获取input值 */}
        <input
          type="text"
          ref={(input) => (this._name = input)}
          defaultValue="Jian"
        />
        <button onClick={this.handleSubmitClick}>Sign up</button>
      </div>
    );
  }
}
```

## 8.有/无状态组件

### 1）有状态组件

- 特点

  - 是类组件
  - 有继承
  - 可以使用 this
  - 可以使用 react 的生命周期
  - 使用较多，容易频繁触发生命周期钩子函数，影响性能
  - 内部使用 state，维护自身状态的变化，有状态组件根据外部组件传入的 props 和自身的 state 进行渲染

- 使用场景

  - 需要使用到状态的
  - 需要使用状态操作组件的（无状态组件的也可以实现，通过新版本 react hooks 也可实现）

- 总结
  - 类组件可以维护自身的状态变量，即组件的 state ，类组件还有不同的生命周期方法，可以让开发者能够在组件的不同阶段（挂载、更新、卸载）对组件做更多的控制。类组件则既可以充当无状态组件，也可以充当有状态组件。当一个类组件不需要管理自身状态时，也可称为无状态组件

### 2）无状态组件

- 特点

  - 不依赖自身的状态 state
  - 可以是类组件或者函数组件
  - 可以完全避免使用 this 关键字（由于使用的是箭头函数事件无需绑定）
  - 有更高的性能，当不需要使用生命周期钩子时，应该首先使用无状态函数组件
  - 组件内部不维护 state ，只根据外部组件传入的 props 进行渲染的组件，当 props 改变时，组件重新渲染

- 使用场景

  - 组件不需要管理 state，纯展示

- 优点

  - 简化代码、专注于 render
  - 组件不需要被实例化，无生命周期，提升性能。 输出（渲染）只取决于输入（属性），无副作用
  - 视图和数据的解耦分离

- 缺点

  - 无法使用 ref
  - 无生命周期方法
  - 无法控制组件的重渲染，因为无法使用 shouldComponentUpdate 方法，当组件接受到新的属性时则会重渲染

- 总结

  - 组件内部状态且与外部无关的组件，可以考虑用状态组件，这样状态树就不会过于复杂，易于理解和管理。当一个组件不需要管理自身状态时，也就是无状态组件，应该优先设计为函数组件，比如自定义的 Button、Input 等组件

## 9.class 组件生命周期

### 1）老版本

- 挂载

  - constructor
  - `componentWillMount`：在新节点插入 DOM 结构之前触发
  - render: componentWillMount 和 componentDidMount 之间触发
  - `componentDidMount`：在新节点插入 DOM 结构之后触发
    - 在这发送初始化接口请求：请求中可能有操作 dom 操作，确保 dom 已经挂载

- 更新

  - `componentWillReceiveProps`：已加载的组件收到新的参数时调用，只有 props 参数更新时才会触发
  - `shouldComponentUpdate`：组件判断是否重新渲染时调用，返回 false 取消更新组件，不会调用 render
  - `componentWillUpdate`：当组件再次渲染时，在 render 方法前调用（在组件的 props 或者 state 发生改变时会触发该方法）
  - render
  - `componentDidUpdate`：在 render 函数执行完毕，且更新的组件已被同步到 DOM 后立即调用，该方法不会在初始化渲染时触发

- 卸载

  - `componentWillUnmount`：在组件从 DOM 中移除时立即触发

- 加载顺序：

  - 首次加载时：componentWillMount -> render -> componentDidMount

  - 参数变化时：componentWillReceiveProps(props 参数变化) -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

  - 组件卸载：componentWillUnMount

### 2）新版本

- 挂载

  - constructor
  - `getDerivedStateFromProps`：在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。条件： state 的值在任何时候都取决于 props
  - render
  - `componentDidMount`

- 更新

  - `getDerivedStateFromProps`
  - `shouldComponentUpdate`
  - render
  - `getSnapshotBeforeUpdate`： 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
  - `componentDidUpdate`

- 卸载

  - `componentWillUnmount`

- 加载顺序：
  - 挂载时：constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
  - 更新时：static getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()
  - 卸载时：componentWillUnmount()
  - 错误处理：当渲染过程，生命周期，或子组件的构造函数中抛出错误时 getDerivedStateFromError() -> componentDidCatch()

### 3）废弃原因

- React `Fiber` 的机制: 利用浏览器 `requestIdleCallback` 将可中断的任务进行`分片处理`，每一个小片的运行时间很短，这样唯一的线程就不会被独占

- 因为 React Fiber Reconciliation 这个过程有可能`暂停`然后`继续执行`，所以挂载和更新之前的生命周期钩子就有可能不执行或者多次执行

## 10.setState 更新机制

### 1）合成事件中的 setState

- 由于是`合成事件`，try 代码块执行完 state 并没有更新，所以你输入的结果是更新前的 state 值，这就导致了所谓的"`异步`"
- 但是当你的 try 代码块执行完的时候（也就是你的 increment 合成事件），这个时候会去执行 finally 里的代码，在 finally 中执行了 performSyncWork 方法，这个时候才会去更新你的 state 并且渲染到 UI 上

### 2）生命周期函数中的 setState

- `异步`

- 当 componentDidmount 执行的时候，react 内部并没有更新，执行完 componentDidmount 后才去 commitUpdateQueue 更新。这就导致你在 componentDidmount 中 setState 完去 console.log 拿的结果还是更新前的值

### 3）原生事件中的 setState

- 原生事件是指非 react 合成事件，原生自带的事件监听 addEventListener

- 原生事件直接触发 click 事件，可以`同步`拿到更新后的 state 值

### 4）异步函数 setTimeout 中的 setState

- setTimeout 中里去 setState 总能拿到最新的 state 值, 可以`同步`拿到最新的 state 值

### 5）setState 中的批量更新

- 在 setState 的时候 react 内部会创建一个 updateQueue ，通过 firstUpdate 、 lastUpdate 、 lastUpdate.next 去维护一个更新的队列，在最终的 performWork 中，相同的 key 会被覆盖，`只会对最后一次的 setState 进行更新`

```js
class App extends React.Component {
  state = { val: 0 };

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0

    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0

    setTimeout((_) => {
      // 前两次的setState合并，只执行了一次，结果为1
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 2

      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 3
    }, 0);
  }

  render() {
    return <div>{this.state.val}</div>;
  }
}
```

## 11.函数绑定的方法

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: 'Jian',
    };
    // 推荐写法1，在constructor中使用bind
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  // 推荐写法2，使用箭头函数绑定
  handleClick3 = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  render() {
    return (
      <div>
        {/* 不推荐写法 */}
        <div onClick={this.handleClick1.bind(this)}></div>
        <div onClick={() => this.handleClick1()}></div>

        {/* 考点1解决方法：提取函数 */}
        <div onClick={this.handleClick2}></div>
        <div onClick={this.handleClick3}></div>
      </div>
    );
  }
}
```

### 1）render 函数中

- 使用箭头函数或者 bind 向子组件传递函数时，每次会重新创建函数，导致子组件进行渲染，影响性能，不推荐使用

### 2）写在 constructor 中

### 3）外部提取使用箭头函数

## 12.Fragments

- Fragments 允许将子列表分组，而无需向 DOM 添加额外节点

  ```js
  render() {
    return (
      <div>
        {arr.map((item, i) => {
          return (
            <React.Fragment key={item.id}>
              <ChildA />
              <ChildB />
              <ChildC />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
  ```

- 短语法

  ```js
  render() {
    return (
      <>
        <ChildA />
        <ChildB />
        <ChildC />
      </>
    );
  }
  ```

## 13.组件懒加载

- 运行时动态加载

- 通过 `import()`、`React.lazy` 和 `Suspense` 共同一起实现了 React 的`懒加载`

- OtherComponent 组件文件被`拆分打包`为一个`新的包`（bundle）文件，并且只会在 OtherComponent `组件渲染时`，`才`会被`下载`到本地

- 可以使用在等待加载 lazy 组件时做`优雅降级`（如 loading 指示器等）

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

- React 利用 `React.lazy` 与 `import()`实现了`渲染时的动态加载` ，并利用 `Suspense` 来`处理异步加载资源时页面应该如何显示`的问题。

### 1）import() 原理

- `import()` 函数是由 TS39 提出的一种`动态加载模块`的规范实现，其返回是一个 `promise`

- 当 Webpack 解析到该 import()语法时，会自动进行代码分割

```js
function import(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const tempGlobal = "__tempModuleLoadingVariable" + Math.random().toString(32).substring(2);
    script.type = "module";
    script.textContent = `import * as m from "${url}"; window.${tempGlobal} = m;`;

    script.onload = () => {
      resolve(window[tempGlobal]);
      delete window[tempGlobal];
      script.remove();
    };

    script.onerror = () => {
      reject(new Error("Failed to load module script with URL " + url));
      delete window[tempGlobal];
      script.remove();
    };

    document.documentElement.appendChild(script);
  });
}

```

### 2）React.lazy 原理

- 返回了一个 LazyComponent 对象

```js
export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  let lazyType = {
    ?typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null,
  };

  return lazyType;
}
```

### 3）Suspense 原理

- React 捕获到异常之后，会判断异常是不是一个 thenable，如果是则会找到 SuspenseComponent ，如果 thenable 处于 pending 状态，则会将其 children 都渲染成 fallback 的值，一旦 thenable 被 resolve 则 SuspenseComponent 的子组件会重新渲染一次

## 14.路由懒加载

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

## 15.PureComponent

- React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了 shouldComponentUpdate()

- React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用

## 16.React.memo

- 如果你的组件在`相同 props` 的情况下渲染`相同的结果`，那么你可以通过将其包装在 React.`memo` 中调用，以此通过记忆组件渲染结果的方式来`提高组件的性能`表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果

- 默认情况下其只会对复杂对象做`浅层对比`

- React.memo 既利用了 shouldComponentUpdate，又不要求我们写一个 class
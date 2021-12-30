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

![image](images/frame/17.png)

- 挂载

  - constructor
  - static `getDerivedStateFromProps`：在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。条件： state 的值在任何时候都取决于 props
  - render
  - `componentDidMount`

- 更新

  - static `getDerivedStateFromProps`
  - `shouldComponentUpdate`
  - render
  - `getSnapshotBeforeUpdate`： 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
  - `componentDidUpdate`

- 卸载

  - `componentWillUnmount`

- 错误处理

  - static `getDerivedStateFromError`
  - `componentDidCatch`

- 加载顺序：

  - 挂载时：constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
  - 更新时：static getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()
  - 卸载时：componentWillUnmount()
  - 错误处理：当渲染过程，生命周期，或子组件的构造函数中抛出错误时 getDerivedStateFromError() -> componentDidCatch()

- 如果存在 `getDerivedStateFromProps` 和 `getSnapshotBeforeUpdate` 就不会执行生命周期 `componentWillMount`

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

- 浅比较 state 和 props 是否相等

- PureComponent 原理及其浅比较原则:

  - 基于 PureComponent 继承的组件,原型链上会有 `isPureReactComponent` 属性
  - isPureReactComponent 这个属性在更新组件 `updateClassInstance` 方法中使用的
  - 这个函数在更新组件的时候被调用，在这个函数内部，有一个专门负责检查是否更新的函数 `checkShouldComponentUpdate`
    - `isPureReactComponent` 就是判断当前组件是不是纯组件的，如果是 PureComponent 会浅比较 props 和 state 是否相等
    - shouldComponentUpdate 的权重，会大于 PureComponent
    - `shallowEqual` 浅比较流程：
      - 第一步，首先会直接比较新老 props 或者新老 state 是否相等。如果相等那么不更新组件
      - 第二步，判断新老 state 或者 props ，有不是对象，或者为 null 的，那么直接返回 false ，更新组件
      - 第三步，通过 Object.keys 将新老 props 或者新老 state 的属性名 key 变成数组，判断数组的长度是否相等，如果不相等，证明有属性增加或者减少，那么更新组件
      - 第四步，遍历老 props 或者老 state ，判断对应的新 props 或新 state ，有没有与之对应并且相等的（这个相等是浅比较），如果有一个不对应或者不相等，那么直接返回 false ，更新组件

  ```js
  function checkShouldComponentUpdate() {
    if (typeof instance.shouldComponentUpdate === 'function') {
      return instance.shouldComponentUpdate(
        newProps,
        newState,
        nextContext,
      ); /* shouldComponentUpdate 逻辑 */
    }
    if (ctor.prototype && ctor.prototype.isPureReactComponent) {
      return (
        !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      );
    }
  }
  ```

## 16.React.memo

- 如果你的组件在`相同 props` 的情况下渲染`相同的结果`，那么你可以通过将其包装在 React.`memo` 中调用，以此通过记忆组件渲染结果的方式来`提高组件的性能`表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果

- 默认情况下其只会对复杂对象做`浅层对比`

- React.memo 既利用了 shouldComponentUpdate，又不要求我们写一个 class

### React.memo() 和 useMemo() 的主要区别

- `React.memo()` 是一个`高阶组件`，我们可以使用它来包装我们不想重新渲染的组件，除非其中的 props 发生变化
- `useMemo()` 是一个 `React Hook`，我们可以使用它在组件中`包装函数`。 我们可以使用它来确保该函数中的值仅在其依赖项之一发生变化时才重新计算

## 17.state

### 1）setState 用法

```js
setState(obj, callback);
```

- 第一个参数：当 obj 为一个对象，则为即将合并的 state ；如果 obj 是一个函数，那么当前组件的 state 和 props 将作为参数，返回值用于合并新的 state

- 第二个参数 callback ：callback 为一个函数，函数执行上下文中可以获取当前 setState 更新后的最新 state 的值，可以作为依赖 state 变化的副作用函数，可以用来做一些基于 DOM 的操作

```js
/* 第一个参数为function类型 */
this.setState((state, props) => {
  return { number: 1 };
});
/* 第一个参数为object类型 */
this.setState({ number: 1 }, () => {
  console.log(this.state.number); // 获取最新的number
});
```

### 2）触发一次 setState，React 底层做的事情

- 首先，setState 会`产生`当前更新的`优先级`（老版本用 `expirationTime` ，新版本用 `lane` ）
- 接下来 React 会从 fiber Root 根部 fiber 向下调和子节点，调和阶段将对比发生更新的地方，更新对比 expirationTime ，找到发生更新的组件，合并 state，然后触发 render 函数，得到新的 UI 视图层，完成 render 阶段
- 接下来到 commit 阶段，commit 阶段，替换真实 DOM ，完成此次更新流程
- 此时仍然在 commit 阶段，会执行 setState 中 callback 函数,如上的`()=>{ console.log(this.state.number) }`，到此为止完成了一次 setState 全过程

![image](images/frame/1.png)

### 3）setState 和 useState 异同

**1.相同点**

- 底层都调用了 `scheduleUpdateOnFiber` 方法，而且事件驱动情况下都有批量更新规则

**2.不同点**

- 在不是 pureComponent 组件模式下， `setState不会浅比较`两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就`会执行更新`。但是 `useState` 中的 dispatchAction 会默认`比较两次 state 是否相同`，然后决定是否更新组件

- `setState` 有专门监听 state 变化的回调函数 `callback`，可以获取最新 state；但是在`函数组件`中，只能通过 `useEffect` 来执行 `state` 变化引起的副作用

- `setState` 在底层处理逻辑上主要是和老 state 进行`合并处理`，而 `useState` 更倾向于`重新赋值`

## 18.ref

### 1）创建和使用

**1.类组件 React.createRef**

```js
export function createRef() {
  const refObject = {
    current: null,
  };
  return refObject;
}
```

- `createRef` 创建了一个`对象`，对象上的 `current` 属性，用于保存通过 ref 获取的 DOM 元素，组件实例等

- `不要在函数组件中使用 createRef`，否则会造成 Ref 对象内容丢失等情况

**2.函数组件 useRef**

```js
export default function Index() {
  const currentDom = React.useRef(null);
  React.useEffect(() => {
    console.log(currentDom.current); // div
  }, []);
  return <div ref={currentDom}>ref对象模式获取元素或组件</div>;
}
```

### 2）ref 高阶用法

- 1.forwardRef 转发 Ref

- 2.ref 实现组件通信

```js
// 子组件
function Son(props, ref) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  useImperativeHandle(
    ref,
    () => {
      const handleRefs = {
        onFocus() {
          /* 声明方法用于聚焦input框 */
          inputRef.current.focus();
        },
        onChangeValue(value) {
          /* 声明方法用于改变input的值 */
          setInputValue(value);
        },
      };
      return handleRefs;
    },
    [],
  );
  return (
    <div>
      <input placeholder="请输入内容" ref={inputRef} value={inputValue} />
    </div>
  );
}

const ForwarSon = forwardRef(Son);
// 父组件
class Index extends React.Component {
  cur = null;
  handerClick() {
    const { onFocus, onChangeValue } = this.cur;
    onFocus(); // 让子组件的输入框获取焦点
    onChangeValue('let us learn React!'); // 让子组件input
  }
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <ForwarSon ref={(cur) => (this.cur = cur)} />
        <button onClick={this.handerClick.bind(this)}>操控子组件</button>
      </div>
    );
  }
}
```

- 3.函数组件缓存数据

## 19.context

### 1）createContext

```js
const ThemeContext = React.createContext(null); //
const ThemeProvider = ThemeContext.Provider; //提供者
const ThemeConsumer = ThemeContext.Consumer; // 订阅消费者
```

- `createContext` 接受一个参数，作为`初始化` context 的内容，返回一个 context 对象
- Context 对象上的 `Provider` 作为`提供者`
- Context 对象上的 `Consumer` 作为`消费者`

### 2）Provider

```js
const ThemeProvider = ThemeContext.Provider; //提供者
export default function ProviderDemo() {
  const [contextValue, setContextValue] = React.useState({
    color: '#ccc',
    background: 'pink',
  });
  return (
    <div>
      <ThemeProvider value={contextValue}>
        <Son />
      </ThemeProvider>
    </div>
  );
}
```

- provider 作用有两个：

  - value 属性传递 context，供给 Consumer 使用
  - value 属性改变，ThemeProvider 会让消费 Provider value 的组件重新渲染

### 3）Consumer

**1.类组件 contextType 方式**

```js
const ThemeContext = React.createContext(null);
// 类组件 - contextType 方式
class ConsumerDemo extends React.Component {
  render() {
    const { color, background } = this.context;
    return <div style={{ color, background }}>消费者</div>;
  }
}
ConsumerDemo.contextType = ThemeContext;

const Son = () => <ConsumerDemo />;
```

- 组件的静态属性上的 `contextType` 属性，`指向`需要获取的 `context`（ demo 中的 ThemeContext ），就可以方便获取到最近一层 Provider 提供的 contextValue 值

**2.函数组件 useContext 方式**

```js
const ThemeContext = React.createContext(null);
// 函数组件 - useContext方式
function ConsumerDemo() {
  const contextValue = React.useContext(ThemeContext); /*  */
  const { color, background } = contextValue;
  return <div style={{ color, background }}>消费者</div>;
}
const Son = () => <ConsumerDemo />;
```

- `useContext` 接受一个参数，就是想要获取的 `context` ，返回一个 `value` 值，就是最近的 provider 提供 contextValue 值

**3.订阅者 Consumer 方式**

```js
const ThemeConsumer = ThemeContext.Consumer; // 订阅消费者

function ConsumerDemo(props) {
  const { color, background } = props;
  return <div style={{ color, background }}>消费者</div>;
}
const Son = () => (
  <ThemeConsumer>
    {/* 将 context 内容转化成 props  */}
    {(contextValue) => <ConsumerDemo {...contextValue} />}
  </ThemeConsumer>
);
```

- Consumer 订阅者采取 `render props` 方式，接受最近一层 provider 中 value 属性，作为 render props 函数的参数，可以将参数取出来，作为 props 混入 ConsumerDemo 组件

### 4）context 对象

```js
export function createContext(defaultValue, calculateChangedBits) {
  /* context 对象本质  */
  const context = {
    $$typeof: REACT_CONTEXT_TYPE /* 本质上就是 Consumer element 类型 */,
    _calculateChangedBits: calculateChangedBits,
    _currentValue: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
  };
  /* 本质上就是 Provider element 类型。  */
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context,
  };
  context.Consumer = context;
}
```

- `Provider` 本质上是一个 element 对象 $$typeof -> REACT_PROVIDER_TYPE
- `Consumer` 本质上也是一个 element 对象 $$typeof -> REACT_CONTEXT_TYPE
- `_currentValue` 这个用来`保存传递`给 Provider 的 `value`

## 20.模块化 css

### 1）作用

- 防止全局污染，样式被覆盖

- 解决命名混乱

- css 代码冗余，体积庞大

### 2）css 模块化思路

- 第一种 `css module` ，依赖于 webpack 构建和 css-loader 等 loader 处理，将 css 交给 js 来动态加载

- 第二种就是直接放弃 css ，`css in js`用 js 对象方式写 css ，然后作为 style 方式赋予给 React 组件的 DOM 元素，这种写法将不需要 .css .less .scss 等文件，取而代之的是每一个组件都有一个写对应样式的 js 文件

### 3）css module

- 1.css-loader 配置

  - 自定义规则命名

```js
{
  test: /\.css$/ /* 对于 css 文件的处理 */,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName:
            '[path][name]__[local]--[hash:base64:5]' /* 命名规则  [path][name]__[local] 开发环境 - 便于调试   */,
        },
      },
    },
  ],
};
```

- 2.css 文件

```css
.text {
  color: blue;
}
```

- 3.js 文件

```js
import style from './style.css';
export default () => (
  <div>
    <div className={style.text}>验证 css modules </div>
  </div>
);
```

### 4）全局变量

- css

```less
.text {
  color: blue;
}
:global(.text_bg) {
  background-color: pink;
}
```

- js

```js
import style from './style.css';
export default () => (
  <div>
    <div className={style.text + ' text_bg'}>验证 CSS Modules </div>
  </div>
);
```

### 5）组合样式

- CSS Modules 提供了一种 `composes` 组合方式

- css

```less
.base {
  /* 基础样式 */
  color: blue;
}
.text {
  /* 继承基础样式 ，增加额外的样式 backgroundColor */
  composes: base;
  background-color: pink;
}
```

- js

```js
import style from './style.css';
export default () => (
  <div>
    <div className={style.text}>验证 css modules </div>
  </div>
);
```

### 6）配置 less 和 sass

```js
{
  test: /\.less$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[path][name]---[local]---[hash:base64:5]',
        },
      },
    },
    {
      // 可能是其他 loader, 不过不重要。
    },
    'less-loader',
  ],
};
```

### 7）组合方案

- 定对于全局样式或者是公共组件样式，可以用 .css 文件，不需要做 CSS Modules 处理，这样就不需要写 :global 等繁琐语法

- 对于项目中开发的页面和业务组件，统一用 scss 或者 less 等做 CSS Module

```js
import React from 'react';

import Style from './index.less'; /*  less css module */

export default () => (
  <div>
    {/* 公共样式 */}
    <button className="searchbtn">公共按钮组件</button>
    <div className={Style.text}>验证 less + css modules </div>
  </div>
);
```

### 8）动态添加 class

- 组件中使用 `classnames` 库

### 9）CSS Modules 优点

- CSS Modules 的类名都有自己的`私有域`，可以`避免`类名`重复`/`覆盖`，`全局污染`问题
- 引入 css 更加灵活，css 模块之间可以`互相组合`
- class 类名生成规则配置灵活，方便`压缩` class 名

### 10）CSS IN JS

- 用 js 对象形式直接写 style

```js
// 定义
const boxStyle = {
  backgroundColor: 'blue',
};
const textStyle = {
  color: 'orange',
};
export default {
  boxStyle,
  textStyle
}

// 使用
import React from 'react';
import Style from './style';

export default function Index() {
  return (
    <div style={Style.boxStyle}>
      <span style={Style.textStyle}>hi , i am CSS IN JS!</span>
    </div>
  );
}
```

- 灵活运用

```js
const baseStyle = {
  /* 基础样式 */
};

const containerStyle = {
  ...baseStyle, // 继承  baseStyle 样式
  color: '#ccc', // 添加的额外样式
};
```

### 11）style-components

```js
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.theme ? props.theme : '#6a8bad')};
  color: #fff;
  min-width: 96px;
  height: 36px;
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 20px !important;
`;

export default function Index() {
  return (
    <div>
      <Button theme={'#fc4838'}>props主题按钮</Button>
    </div>
  );
}
```

- 继承样式

```js
const NewButton = styled(Button)`
  background: orange;
  color: pink;
`;
export default function Index() {
  return (
    <div>
      <NewButton> 继承按钮</NewButton>
    </div>
  );
}
```

### 12）CSS IN JS 特点

- CSS IN JS 本质上`放弃了 css` ，变成了 css in line 形式，所以`根本上解决了全局污染`，`样式混乱`等问题
- 运用起来`灵活`，可以运用 `js 特性`，更灵活地实现样式`继承`，`动态添加`样式等场景
- 由于编译器对 js 模块化支持度更高，使得可以在项目中更快地找到 style.js 样式文件，以及快捷引入文件中的样式常量
- `无须 webpack 额外配置` css，less 等文件类型

## 21.缓存 React.element 对象

```js
/* 子组件 */
function Children({ number }) {
  console.log('子组件渲染');
  return <div>let us learn React! {number} </div>;
}
/* 父组件 */
export default class Index extends React.Component {
  state = {
    numberA: 0,
    numberB: 0,
  };
  render() {
    return (
      <div>
        <Children number={this.state.numberA} />
        <button
          onClick={() => this.setState({ numberA: this.state.numberA + 1 })}
        >
          改变numberA -{this.state.numberA}{' '}
        </button>
        <button
          onClick={() => this.setState({ numberB: this.state.numberB + 1 })}
        >
          改变numberB -{this.state.numberB}
        </button>
      </div>
    );
  }
}
```

- 问题：无论改变 numberA 还是改变 numberB ，子组件都会重新渲染，显然这不是想要的结果

- 解决：

  - useMemo

  ```js
  export default function Index() {
    const [numberA, setNumberA] = React.useState(0);
    const [numberB, setNumberB] = React.useState(0);
    return (
      <div>
        {useMemo(
          () => (
            <Children number={numberA} />
          ),
          [numberA],
        )}
        <button onClick={() => setNumberA(numberA + 1)}>改变numberA</button>
        <button onClick={() => setNumberB(numberB + 1)}>改变numberB</button>
      </div>
    );
  }
  ```

  - 原理揭秘：
    - 每次执行 render 本质上 createElement 会产生一个新的 props，这个 props 将作为对应 fiber 的 pendingProps
    - 在此 fiber 更新调和阶段，React 会对比 fiber 上老 oldProps 和新的 newProp （ pendingProps ）是否相等，如果相等函数组件就会放弃子组件的调和更新，从而子组件不会重新渲染
    - 如果上述把 element 对象缓存起来，上面 props 也就和 fiber 上 oldProps 指向相同的内存空间，也就是相等，从而跳过了本次更新

## 22.npm 按需引入

- 通过 `.babelrc` 实现按需引入

```js
[
  'import',
  {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  },
];
```

## 23.副作用

- 在 React 组件中执行过`数据获取`、`订阅`或者手动`修改`过 `DOM`

- 我们统一把`这些操作称为“副作用”`，或者简称为“作用”

## 24.render props

- 类似 vue 中的 slot 插槽

### 1）定义

- 就是组件上名为 render 的 prop，该属性可以动态决定要渲染的内容

- 具有 render prop 的组件接受一个返回 React 元素的函数，并在组件内部通过调用此函数来实现自己的渲染逻辑

- render prop 是一个用于告知组件需要渲染什么内容的函数 prop

### 2）作用

- 为了组件的复用，把无关视图的逻辑抽象出来

### 3）使用

```js
class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

<DataProvider render={(data) => <h1>Hello {data.x}</h1>} />;
```

### 4）当子组件使用了 PureComponent 时

- 因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 render 对于 render prop 将会生成一个新的值，导致`抵消了`子组件使用 `PureComponent` 带来的优势

```js
// 父组件
class MouseTracker extends React.Component {
  // 定义为实例方法，`this.renderTheCat`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  renderTheCat = (mouse) => {
    return <Cat mouse={mouse} />;
  };

  render() {
    return (
      <div>
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }
}
```

## 25.children

### 1）定义

- 每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容

### 2）使用

```js
function Welcome(props) {
  return <p>{props.children}</p>;
}
```

### 3）传参

```js
<Mouse
  children={(mouse) => (
    <p>
      鼠标的位置是 {mouse.x}，{mouse.y}
    </p>
  )}
/>
```

### 4）children prop

```js
<Mouse>
  {(mouse) => (
    <p>
      鼠标的位置是 {mouse.x}，{mouse.y}
    </p>
  )}
</Mouse>;

// 声明 children 的类型应为一个函数
Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};
```

## 26.Context

- Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

### 1）创建 context - class 方式

- 使用 `createContext` 创建 Context 对象

```js
// store.js
import { createContext } from 'react';

const ThemeContext = createContext();

export const { Provider, Consumer } = ThemeContext;

export default ThemeContext;
```

### 2）引入

- Context.Provider 发布

```js
// App.js
import { useState } from 'react';
import { Provider } from '@/store';
import Routers from '@/routers';

function App() {
  const [theme, setTheme] = useState('light');

  const initValue = {
    theme,
    setTheme,
  };

  return (
    <div className="App">
      <Provider value={initValue}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
```

### 3）class 组件中使用

- class 中使用 `contextType` 订阅

```js
// home.js
import React from 'react';
import ThemeContext from '@/store';

class Home extends React.Component {
  static contextType = ThemeContext;

  onChange = () => {
    this.context.setTheme('dark');
  };

  render() {
    return (
      <div>
        home theme: {this.context.theme}
        <br />
        <button onClick={this.onChange}>切换theme</button>
      </div>
    );
  }
}
```

### 4）函数组件中使用

- `Consumer` 允许在函数式组件中订阅 context

```js
import React from 'react';
import { Consumer } from '@/store';

function Detail() {
  return (
    <div>
      <Consumer>
        {({ theme, setTheme }) => (
          <div>
            detail theme: {theme}
            <br />
            <button onClick={() => setTheme('light')}>切换theme</button>
          </div>
        )}
      </Consumer>
    </div>
  );
}
```

### 5）hooks 方法使用

- `useContext` 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值

```js
import React, { useContext } from 'react';
import ThemeContext from '@/store';

function Hooks() {
  const themeInfo = useContext(ThemeContext);

  return (
    <div>
      默认 theme: {themeInfo.theme}
      <br />
      <button onClick={() => themeInfo.setTheme('light')}>切换theme</button>
    </div>
  );
}
```

### 6）消费多个 context

```js
// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
  render() {
    const { signedInUser, theme } = this.props;

    // 提供初始 context 值的 App 组件
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// 一个组件可能会消费多个 context
function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(user) => <ProfilePage user={user} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
```

## 27.refs

### 1）定义

- `Refs` 提供了一种方式，`允许`我们`访问 DOM 节点`或在 render 方法中创建的 `React 元素`

- React 会在组件`挂载时`给 `current` 属性传入 `DOM` 元素，并在组件`卸载时`传入 `null` 值
  - ref 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前`更新`

### 2）场景

- 管理焦点，文本选择或媒体播放

- 触发强制动画

- 集成第三方 DOM 库

- ref 转发

### 3）class 组件使用

- 直接使用

```js
// parent
class Parent extends React.Component {
  ref = React.createRef();

  render() {
    return <Mouse ref={this.ref} />;
  }
}

// class组件
class Mouse extends React.Component {}
```

### 4）函数组件

- 默认情况下，`不能`在`函数组件`上`使用` ref 属性，因为它们`没有实例`

- 使用 `forwardRef`（可与 useImperativeHandle 结合使用）

```js
const Mouse = forwardRef((props, ref) => {});
```

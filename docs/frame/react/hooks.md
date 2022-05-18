---
toc: menu
---

# hooks

- 只有 state 改变时， function 组件才会触发 render

- 无论 dom 中是否使用 state，state 改变，都会触发 render

## 1.定义

- Hook 是 React `16.8` 的新增特性。它可以让你在`不编写 class` 的情况下`使用 state` 以及`其他`的 React `特性`，通常以 use 开头

- `Hook` 是一个特殊的`函数`，它可以让你`“钩入”` state 及生命周期等 `特性`

- 从`具象上`来说就是`为函数组件`（纯函数）`提供副作用能力`的 React `API`

- 从`抽象意义上`来说是`确定状态源`的解决方案

## 2.使用规则

### 1）只在`最顶层`使用 Hook

- `不要`在`循环`、`条件判断`或`嵌套函数`中调用 Hook

- `原因`：状态实现是使用单项列表，在循环和条件中调用，会使状态偏移

### 2）只在 `React 函数`中调用 Hook

- 不要在普通的 JavaScript 函数中调用 Hook

### 3）注意 hooks `顺序一致性`

## 3.使用原因

- 解决 class 组件的问题

### 1）在组件之间复用状态逻辑很难

- 1.类组件之间的状态会随着功能增强而变得越来越臃肿，代码维护成本也比较高，而且不利于后期 tree shaking

- 2.class 解决方案： render props 和 高阶组件

  - 这类方案需要重新组织你的组件结构，这可能会很麻烦，使你的代码难以理解

  - 由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”

- 3.`Hook 使你在无需修改组件结构的情况下复用状态逻辑`

### 2）复杂组件变得难以理解

- 1.class 组件逐渐会被状态逻辑和副作用充斥

  - 每个生命周期常常包含一些不相关的逻辑

- 2.Hook 将组件中相互关联的部分拆分成更小的函数，而并非强制按照生命周期划分

### 3）class 难以理解

- 必须去理解 JavaScript 中 this 的工作方式

- 还不能忘记绑定事件处理器

- 没有稳定的语法提案，这些代码非常冗余

- 对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景

- class 不能很好的压缩，并且会使热重载出现不稳定的情况

- Hook 使你在非 class 的情况下可以使用更多的 React 特性

## 4.使用 hook 本质原因

- 让函数组件也能做类组件的事，有自己的状态，可以处理一些副作用，能获取 ref ，也能做数据缓存

- 解决逻辑复用难的问题

- 放弃面向对象编程，拥抱函数式编程

## 5.优势

- 避免地狱式嵌套，可读性提高：hoc 组件套组件

- 比 class 更容易理解

- 使函数组件存在状态

- 解决 Hoc 和 render props 的缺点：数据来源无法追述

- 编写函数比编写类更容易理解

## 6.使用场景优势

- 利用业务逻辑的封装和拆分，可以非常自由的组合各种定义 hooks（自己封装的用到的 hooks 的逻辑）

- 可以在无需修改组件结构的情况下，复用状态逻辑

- 定时器、监听等都被聚合到同一块代码下

## 7.useState()

- 赋值相同的值，`不会`触发 render

### 1）定义

- 通过在函数组件里调用它来`给组件添加`一些内部 `state`

- React 会在`重复渲染`时`保留`这个 `state`

### 2）使用

- 只接受一个参数：state 的初始值

- 返回一个只有两个元素的数组：

  - 第一个元素是 state 的值

  - 第二个元素是更新 state 的函数

    ```js
    const [count, setCount] = useState(0);

    // 相当于
    const result = useState(0);
    const count = result[0];
    const setCount = result[1];
    ```

- setCount 会浅比较前后的值，不同时才会赋值 render

- 每次组件被渲染时，useState 调用都会执行

- 区分第一次调用（组件被 mount 时）和后续调用（重复渲染时）

  - 只有第一次调用才使用初始值，后续调用返回“记住”的 state 值

  - React 是完全根据 useState 的调用顺序来“记住”状态归属的

    - 将顺序记录在内存中，每次调用对应内存记录的上一个位置

    ```js
    // 错误用法
    const Counter = () => {
      const [count, setCount] = useState(0);
      if (count % 2 === 0) {
        const [foo, updateFoo] = useState('foo');
      }
      const [bar, updateBar] = useState('bar');
      // ...
    };
    ```

    - 因为条件判断，让每次渲染中 useState 的调用次序不一致了，于是 React 就错乱了

- 初始值为函数时：

```js
// 错误
function Table(props) {
  // ⚠️ createRows() 每次渲染都会被调用
  const [rows, setRows] = useState(createRows(props.count));
  // ...
}

// 正确
function Table(props) {
  // ✅ createRows() 只会被调用一次
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
```

### 3）第二个元素 setCount 的用法

**1.接收一个值**

```js
setCount(+new Date());
```

**2.接收一个函数**

```js
setCount((val) => val + 1);
```

**3.在函数中判断**

```js
setCount((val) => {
  if (val < 10) {
    return val + 1;
  }
  return val;
});
```

**4.多个 state 变量时**

```js
setState((state) => ({ ...state, left: e.pageX, top: e.pageY }));
```

### 4）原理剖析

- 本质上都是触发更新的函数是 `dispatchAction`

```js
const [number, setNumber] = React.useState(0);
```

- setNumber 本质就是 dispatchAction

```js
function mountState(initialState) {
  const hook = mountWorkInProgressHook();
  if (typeof initialState === 'function') {
    initialState = initialState();
  } // 如果 useState 第一个参数为函数，执行函数得到初始化state
  hook.memoizedState = hook.baseState = initialState;
  const queue = (hook.queue = {
    // ...
  }); // 负责记录更新的各种状态。
  const dispatch = (queue.dispatch = dispatchAction.bind(
    null,
    currentlyRenderingFiber,
    queue,
  )); // dispatchAction 为更新调度的主要函数
  return [hook.memoizedState, dispatch];
}
```

- 上面的 state 会被当前 hooks 的 memoizedState 保存下来，每一个 useState 都会创建一个 queue 里面保存了更新的信息
- 每一个 useState 都会创建一个更新函数，比如如上的 setNumber 本质上就是 dispatchAction，那么值得注意一点是，当前的 fiber 被 bind 绑定了固定的参数传入 dispatchAction 和 queue ，所以当用户触发 setNumber 的时候，能够直观反映出来自哪个 fiber 的更新
- 最后把 memoizedState dispatch 返回给开发者使用

```js
function dispatchAction(fiber, queue, action) {
  /* 第一步：创建一个 update */
  const update = {
    // ...
  };
  const pending = queue.pending;
  if (pending === null) {
    /* 第一个待更新任务 */
    update.next = update;
  } else {
    /* 已经有带更新任务 */
    update.next = pending.next;
    pending.next = update;
  }
  if (fiber === currentlyRenderingFiber) {
    /* 说明当前fiber正在发生调和渲染更新，那么不需要更新 */
  } else {
    if (
      fiber.expirationTime === NoWork &&
      (alternate === null || alternate.expirationTime === NoWork)
    ) {
      const lastRenderedReducer = queue.lastRenderedReducer;
      const currentState = queue.lastRenderedState; /* 上一次的state */
      const eagerState = lastRenderedReducer(
        currentState,
        action,
      ); /* 这一次新的state */
      if (is(eagerState, currentState)) {
        /* 如果每一个都改变相同的state，那么组件不更新 */
        return;
      }
    }
    scheduleUpdateOnFiber(fiber, expirationTime); /* 发起调度更新 */
  }
}
```

- 首先用户每一次调用 dispatchAction（比如如上触发 setNumber ）都会先创建一个 `update` ，然后把它放入待更新 pending `队列`中
- 然后判断如果当前的 fiber `正在更新`，那么也就`不需要再更新`了
- 反之，说明当前 fiber `没有更新任务`，那么会拿出上一次 state 和 这一次 state 进行`对比`，如果`相同`，那么直接`退出更新`。如果`不相同`，那么`发起更新调度任务`。这就解释了，为什么函数组件 useState 改变相同的值，组件不更新了

```js
function updateReducer() {
  // 第一步把待更新的pending队列取出来。合并到 baseQueue
  const first = baseQueue.next;
  let update = first;
  do {
    /* 得到新的 state */
    newState = reducer(newState, action);
  } while (update !== null && update !== first);
  hook.memoizedState = newState;
  return [hook.memoizedState, dispatch];
}
```

- 当再次执行 useState 的时候，会触发更新 hooks 逻辑，本质上调用的就是 updateReducer，如上会把待更新的队列 pendingQueue 拿出来，合并到 baseQueue，循环进行更新
- 循环更新的流程，就是执行每一个 num => num + 1 ，得到最新的 state 。接下来就可以从 useState 中得到最新的值

### 5）模拟实现

```js
// 手写useState，返回数组
// 实际实现是使用单项链表，不是数组
const allState = [];
let stateIndex = 0;
function useState(initialState) {
  const currentIndex = stateIndex;
  allState[currentIndex] = allState[currentIndex] || initialState; // 下一次render时，可以保存之前的值
  function setState(newState) {
    // 浅比较值相等就不更新
    if (allState[currentIndex] === newState) return;
    allState[currentIndex] = newState;
    render();
  }
  stateIndex++; // 每次更新完state值后，index值+1
  return [allState[currentIndex], setState];
}

// 替代原app.js中的render方法
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  // 当渲染完成时，清空， 保证 每次渲染时，hooks 顺序一致性
  stateIndex = 0;
}
```

## 8.useEffect()

### 1）定义

- useEffect 就是一个 Effect Hook，`给函数组件增加`了`操作副作用`的`能力`

- 聚合了 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 的用途

  - 本质上，依然是调用生命周期的这几个函数

- useEffect 的`参数是`一个`函数`，组件每次渲染之后，都会调用这个函数参数

### 2）使用

**1.模拟 componentDidMount 和 componentDidUpdate**

- 第二个参数不传

```js
useEffect(() => {});
```

**2.模拟 componentDidMount**

- 第二个参数为空数组

```js
useEffect(() => {}, []);
```

**3.模拟 componentWillUnmount**

- 清除副作用，return 中执行清除副作用的代码

```js
useEffect(() => {
  return () => {
    clearInterval(timee.current);
  };
}, []);
```

**4.监听 state 值改变**

- 类似 vue 中的 watch

- 依赖第二参数数组中的值改变

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

### 3）原理剖析

- 判断 deps 项有没有发生变化，如果没有发生变化，更新副作用链表就可以了
- 如果发生变化，更新链表同时，打执行副作用的标签：fiber => fiberEffectTag，hook => HookHasEffect
- 在 commit 阶段就会根据这些标签，重新执行副作用

### 4）模拟实现

```js
// 手写useEffect
const allDeps = []; // 二维数组
let effectIndex = 0;

function useEffect(cb, deps) {
  if (Object.prototype.toString.call(cb) !== '[object Function]') {
    throw new Error('第一个参数必须为函数');
  }
  if (deps && Object.prototype.toString.call(deps) !== '[object Array]') {
    throw new Error('第二个参数必须为数组');
  }
  const lastDeps = allDeps[effectIndex];
  // 本次依赖项和上一次存储依赖项数组对比，是否有变化
  const hasChanged =
    !lastDeps || !deps || deps.some((dep, i) => dep !== lastDeps[i]);
  if (hasChanged) {
    cb();
    lastDeps[effectIndex] = deps;
  }
  effectIndex++;
}

// 替代原app.js中的render方法
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  // 当渲染完成时，清空， 保证 每次渲染时，hooks 顺序一致性
  effectIndex = 0;
}
```

### 5）注意事项

- 当 useEffect 中使用函数时，需要将函数作为依赖性，同时被使用的函数应该使用 useCallback 声明，如果被使用的函数中用到了其他变量或函数，也应该加入依赖项

- useEffect 和 useCallback 依赖项需要加入所有被用到的变量或函数

```js
const getNum = useCallback(() => {
  console.log('num', num);
  linkPage();
}, [num, linkPage]);

useEffect(() => {
  getNum();
}, [getNum]);
```

## 9.useContext()

- 赋值相同的值，`不会`触发 render

### 1）定义

- `接收`一个 `context` 对象（React.createContext 的返回值）并`返回`该 `context` 的`当前值`

```js
const value = useContext(MyContext); // 正确

useContext(MyContext.Consumer); // 错误
useContext(MyContext.Provider); // 错误
```

- 调用了 useContext 的组件总会在 `context` 值`变化`时`重新渲染`

  - 如果重渲染组件的开销较大，可以 使用 `memoization` 优化。

### 2）用法

```js
const theme = {
  color: 'red',
  background: 'blue',
};

const ThemeContext = React.createContext(theme);

function App() {
  return <ThemeContext.Provider value={theme}></ThemeContext.Provider>;
}

function Child() {
  const theme = useContext(ThemeContext);

  return <div>color: {theme.value.color}</div>;
}
```

## 10.useReducer

### 1）定义

- useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

### 2）用法

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

### 3）使用

```ts
import React, { useReducer } from 'react';
import { Button, Space } from 'antd-mobile';

interface InitialState {
  count: number;
}

const initialState: InitialState = { count: 0 };

interface actionType {
  type: 'add' | 'reduce';
}

function reducer(state: InitialState, action: actionType) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'reduce':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Space>
        Count: {state.count}
        <Button onClick={() => dispatch({ type: 'reduce' })}>reduce</Button>
        <Button onClick={() => dispatch({ type: 'add' })}>add</Button>
      </Space>
    </div>
  );
}

export default Home;
```

## 11.useCallback

### 1）定义

- 返回一个 `memoized` 回调函数

- 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

- `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`

### 2）使用场景

- 把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时

## 11.useMemo()

### 1）useMemo 用法

```js
const cacheSomething = useMemo(create, deps);
```

- `create`：第一个参数为一个函数，函数的返回值作为缓存值，如上 demo 中把 Children 对应的 element 对象，缓存起来
- `deps`： 第二个参数为一个数组，存放当前 useMemo 的依赖项，在函数组件下一次执行的时候，会对比 deps 依赖项里面的状态，是否有改变，如果有改变重新执行 create ，得到新的缓存值
- `cacheSomething`：返回值，执行 create 的返回值。如果 deps 中有依赖项改变，返回的重新执行 create 产生的值，否则取上一次缓存值

### 2）useMemo 原理

- useMemo 会`记录上一次`执行 create 的`返回值`，并把它`绑定`在函数组件对应的 `fiber` 对象上，只要组件不销毁，缓存值就一直存在，但是 deps 中如果有一项改变，就会重新执行 create ，返回值作为新的值记录到 fiber 对象上

### 3）useMemo 应用场景

- 可以`缓存` element `对象`，从而达到按条件渲染组件，`优化性能`的作用
- 如果组件中不期望每次 render 都重新`计算`一些`值`,可以利用 useMemo 把它`缓存`起来
- 可以把`函数和属性缓存`起来，作为 PureComponent 的绑定方法，或者配合其他 Hooks 一起使用

## 12.memo

- React.memo 为高阶组件

- 用来包裹组件，防止子组件重复渲染

- React.memo 等效于 PureComponent
  - `只`比较 `props`
  - `不`比较 `state`

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

## 13.memo、useMemo 和 useCallback

### 1）作用

- 只做性能优化

### 2）区别

- 在子组件`不需要`父组件的`值和函数`的情况下，只需要使用 `memo` 函数包裹子组件即可

- 如果有`函数传递`给子组件，使用 `useCallback`，useCallback 是来`优化子组件`的，防止子组件的重复渲染

- 如果有`值传递`给子组件，使用 `useMemo`，useMemo 可以`优化当前组件`也可以优化子组件

- useEffect、useMemo、useCallback 都是自带闭包的

  - 也就是说，每一次组件的渲染，其都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种 hooks 的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。对于需要捕获上一次状态值的情况，我们应该使用 ref 来访问

## 14.useEffect 和 useLayoutEffect

### 1）useEffect

- 赋值给 useEffect 的函数会在组件渲染到屏幕之后执行

- `浏览器回流、重绘之后执行`

### 2）useLayoutEffect

- 会在所有的 DOM 变更之后同步调用

- 可以使用它来读取 DOM 布局并同步触发重渲染

- 在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新

- `浏览器回流、重绘之前执行`

### 3）注意点

- 修改 dom 操作需要放在 useLayoutEffect 中，
- 这样做出的修改会和 react 做出的更改一起被一次性渲染到屏幕上，依旧只有一次回流、重绘的代价

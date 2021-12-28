---
toc: menu
---

# hooks

## 1.概述

### 1）定义

- Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- `Hook` 是一个特殊的`函数`，它可以让你`“钩入”` React 的`特性`

- Hook 是 React 16.8 的新增特性。React Hook 从具象上来说就为函数组件（纯函数）提供副作用能力的 React API，从抽象意义上来说是确定状态源的解决方案。其实就是可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性，通常以 use 开头

### 2）使用规则

- 只能在函数`最外层`调用 Hook
  - `不要`在`循环`、`条件判断`或者`子函数`中调用
  - 原因：状态实现是使用单项列表，在循环和条件中调用，会使状态偏移
- 只能在 React 的`函数组件`中调用 Hook
  - 不要在其他 JavaScript 函数中调用
  - 注意 hooks 顺序一致性

### 3）使用原因

- 解决 class 组件的问题

**1.在组件之间复用状态逻辑很难**

- 1.类组件之间的状态会随着功能增强而变得越来越臃肿，代码维护成本也比较高，而且不利于后期 tree shaking

- 2.class 解决方案： render props 和 高阶组件
  - 这类方案需要重新组织你的组件结构，这可能会很麻烦，使你的代码难以理解
  - 由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”
- 3.`Hook 使你在无需修改组件结构的情况下复用状态逻辑`

**2.复杂组件变得难以理解**

- 1.class 组件逐渐会被状态逻辑和副作用充斥

  - 每个生命周期常常包含一些不相关的逻辑

- 2.Hook 将组件中相互关联的部分拆分成更小的函数，而并非强制按照生命周期划分

**3.难以理解的 class**

- 必须去理解 JavaScript 中 this 的工作方式
- 还不能忘记绑定事件处理器
- 没有稳定的语法提案，这些代码非常冗余
- 对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景
- class 不能很好的压缩，并且会使热重载出现不稳定的情况
- Hook 使你在非 class 的情况下可以使用更多的 React 特性

### 4）优势

- 避免地狱式嵌套，可读性提高：hoc 组件套组件
- 比 class 更容易理解
- 使函数组件存在状态
- 解决 Hoc 和 render props 的缺点：数据来源无法追述

- 编写函数比编写类更容易理解

**QA：场景优势**

- 利用业务逻辑的封装和拆分，可以非常自由的组合各种定义 hooks（自己封装的用到的 hooks 的逻辑）
- 可以在无需修改组件结构的情况下，复用状态逻辑
- 定时器、监听等都被聚合到同一块代码下

### 5）使用 hooks 本质原因

- 1.让函数组件也能做类组件的事，有自己的状态，可以处理一些副作用，能获取 ref ，也能做数据缓存
- 2.解决逻辑复用难的问题
- 3.放弃面向对象编程，拥抱函数式编程

## 2.useState()

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

### 模拟实现

```js
// 手写useState，返回数组
// 实际实现是使用单项链表，不是数组
let state = [];
let index = 0;
function useState(initialState) {
  const currentIndex = index;
  state[currentIndex] = state[currentIndex] || initialState; // 下一次render时，可以保存之前的值
  function setState(newState) {
    state[currentIndex] = newState;
    render();
  }
  index++; // 每次更新完state值后，index值+1
  return [state[currentIndex], setState];
}

// 替代原app.js中的render方法
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  // 当渲染完成时，清空， 保证 hooks 顺序一致性
  index = 0; // 重要的一步，必须在渲染前后将index值重置为0，不然index会一种增加1
}
```

## 3.useEffect()

- 判断 deps 项有没有发生变化，如果没有发生变化，更新副作用链表就可以了
- 如果发生变化，更新链表同时，打执行副作用的标签：fiber => fiberEffectTag，hook => HookHasEffect
- 在 commit 阶段就会根据这些标签，重新执行副作用。

### 模拟实现

```js
// 手写useEffect
const allDeps = []; //二维数组
let effectCursor = 0;
function useEffect(callback, depArray) {
  if (!depArray) {
    callback();
    allDeps[effectCursor] = depArray;
    effectCursor++;
    return;
  }

  // 本次依赖项和上一次存储依赖项数组对比，是否有变化
  const deps = allDeps[effectCursor];
  const hasChanged = deps ? depArray.some((el, i) => el !== deps[i]) : true;

  if (hasChanged) {
    callback();
    allDeps[effectCursor] = depArray;
  }
  effectCursor++;
}

// 替代原app.js中的render方法
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
```

## 4.useMemo()

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

---
toc: menu
---

# 状态管理 redux

## 1.状态管理应用场景

### 1）组件之间共用数据

- 应用初始化时候，`只请求一次`数据，然后通过状态管理把数据存起来，需要数据的组件只需要从状态管理中‘拿’就可以了

### 2）复杂组件之间通信

- 对于嵌套比较深的组件之间的通信

- B 组件向 H 组件传递某些信息：
  - 可以把 B 组件的信息传递给状态管理层，H 组件连接状态管理层，再由状态管理层通知 H 组件
  - 这样就本质解决了组件通信问题

## 2.React-Redux,Redux,React 三者关系

![image](images/frame/7.png)

- `Redux`： Redux 是一个应用状态管理 js 库，本身和 React 是没有关系的

  - Redux 可以应用于其他框架构建的前端应用，甚至也可以应用于 Vue 中

- `React-Redux`：React-Redux 是连接 React 应用和 Redux 状态管理的`桥梁`
  - React-redux 主要专注两件事：
    - 一是如何向 React 应用中`注入` redux 中的 `Store`
    - 二是如何根据 Store 的改变，把消息`派发`给应用中需要状态的每一个组件

## 3.Redux

### 1）三大原则

- 1.`单向数据流`：整个 redux ，数据流向都是单向的

![image](images/frame/8.png)

- 2.`state 只读`：在 Redux 中不能通过直接改变 state ，来让状态发生变化，如果想要改变 state ，那就必须`触发`一次 `action` ，`通过 action 执行`每个 `reducer`

- 3.`纯函数执行`：每一个 `reducer` 都是一个`纯函数`，里面不要执行任何副作用，返回的值作为新的 state ，state 改变会触发 store 中的 `subscribe`

### 2）发布订阅思想

- `redux` 可以作为`发布订阅模式`的一个具体实现
- redux 都会创建一个 `store` ，里面`保存`了`状态信息`
- `改变 store` 的方法 `dispatch` ，以及`订阅 store` 变化的方法 `subscribe`

### 3）中间件思想

- 1.`redux` 应用了前端领域为数不多的中间件 `compose`

- 2.`作用`：`强化 dispatch`

  - 传统的 `dispatch` 是`不支持异步`的，但是可以针对 Redux 做`强化`

    - `redux-thunk`、`redux-actions`
    - `dvajs`：也写了一个 redux 支持 promise 的中间件

- 3.`compose` 实现：

  ```js
  const compose = (...funcs) => {
    return funcs.reduce((f, g) => (x) => f(g(x)));
  };
  ```

  - `funcs` 为中间件组成的` 数组``，compose ` 通过数组的 `reduce` 方法，实现执行每一个中间件，强化 `dispatch`

### 4）createStore

- 通过 createStore 可以创建一个 Store
- 使用者可以将这个 Store 保存传递给 React 应用

```js
const Store = createStore(rootReducer, initialState, middleware);
```

- `reducers`： redux 的 reducer ，如果有多个那么可以调用 combineReducers 合并
- `initialState`：初始化的 state
- `middleware`：如果有中间件，那么存放 redux 中间件

### 5）combineReducers

- 正常状态可以会有多个 reducer ，`combineReducers` 可以`合并多个 reducer`

```js
/* 将 number 和 PersonalInfo 两个reducer合并   */
const rootReducer = combineReducers({
  number: numberReducer,
  info: InfoReducer,
});
```

### 6）applyMiddleware

- `applyMiddleware` 用于`注册中间件`
- 支持多个参数
- 每一个参数都是一个中间件
- 每次触发 action ，中间件依次执行

```js
const middleware = applyMiddleware(logMiddleware);
```

## 4.Redux 使用

### 1）编写 reducer

- 管理变量 number

- 保存信息 info

```js
/* number Reducer */
function numberReducer(state = 1, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DEL':
      return state - 1;
    default:
      return state;
  }
}
/* 用户信息reducer */
function InfoReducer(state = {}, action) {
  const { payload = {} } = action;
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
```

### 2）注册中间件

- redux 的`中间件`的编写方式，`本质`上应用了`函数柯里化`

```js
/* 打印中间件 */
/* 第一层在 compose 中被执行 */
function logMiddleware() {
  /* 第二层在reduce中被执行 */
  return (next) => {
    /* 返回增强后的dispatch */
    return (action) => {
      const { type } = action;
      console.log('发生一次action:', type);
      return next(action);
    };
  };
}
```

### 3）生成 Store

```js
/* 注册中间件  */
const rootMiddleware = applyMiddleware(logMiddleware);
/* 注册reducer */
const rootReducer = combineReducers({
  number: numberReducer,
  info: InfoReducer,
});
/* 合成Store */
const Store = createStore(
  rootReducer,
  { number: 1, info: { name: null } },
  rootMiddleware,
);
```

### 4）页面使用

```js
function Index() {
  const [state, changeState] = useState(Store.getState());
  useEffect(() => {
    // 订阅store
    const unSubscribe = Store.subscribe(() => {
      changeState(Store.getState());
    });
    // 解除订阅
    return () => unSubscribe();
  }, []);
  return (
    <div>
      <p>{state.info.name ? `Name: ${state.info.name}` : '你的名字是？'}</p>
      <p>{state.info.mes ? state.info.mes : ' what do you say? '}</p>
      <p>点赞次数：{state.number}</p>
      <button
        onClick={() => {
          Store.dispath({ type: 'ADD' });
        }}
      >
        点赞
      </button>
      <button
        onClick={() => {
          Store.dispatch({
            type: 'SET',
            payload: { name: 'alien', mes: 'let us learn React!' },
          });
        }}
      >
        修改信息
      </button>
    </div>
  );
}
```

## 5.React-Redux 用法

- React-Redux 是沟通 React 和 Redux 的`桥梁`

  - 1.接受 Redux 的 `Store`，并把它合理`分配`到所需要的组件中

  - 2.订阅 Store 中 state 的改变，促使`消费`对应的 `state` 的组件更新

### 1）Provider

- react-redux 中提供了一个 `Provider` 组件，可以`全局注入` redux 中的 `store`
- 使用时需要把 `Provider` 注册到`根部组件`中
- Provider 作用就是`保存` redux 中的 `store` ，`分配`给所有需要 `state` 的`子孙组件`

```js
export default function Root() {
  return (
    <Provider store={Store}>
      <Index />
    </Provider>
  );
}
```

### 2）connect

- `高阶组件` connect
- 作用：

  - 1.能够从 props 中`获取`改变 state 的方法 Store.`dispatch`
  - 2.如果 connect 有`第一个参数`，那么会将 redux state 中的`数据`，`映射到`当前组件的 `props 中`，子组件可以使用消费
  - 3.当需要的 state ，有变化的时候，会`通知`当前组件`更新`，重新`渲染视图`

- 可以利用 connect 提供的功能，做数据获取，数据通信，状态派发等操作

```js
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

**①mapStateToProps**

- 组件依赖 redux 的 `state`，`映射`到业务组件的 `props 中`，state 改变触发，业务组件 props 改变，触发业务组件更新视图
- 当这个参数`没有`的时候，当前组件`不会订阅` store 的改变

```js
const mapStateToProps = (state) => ({ number: state.number });
```

**②mapDispatchToProps**

- 将 redux 中的 `dispatch` 方法，`映射`到业务组件的 `props 中`

```js
const mapDispatchToProps = (dispatch) => {
  return {
    numberAdd: () => dispatch({ type: 'ADD' }),
    setInfo: () => dispatch({ type: 'SET' }),
  };
};
```

**③mergeProps**

```js
/*
 * stateProps , state 映射到 props 中的内容
 * dispatchProps， dispatch 映射到 props 中的内容。
 * ownProps 组件本身的 props
 */
(stateProps, dispatchProps, ownProps) => Object;

// 如果没有这个参数，返回
{ ...ownProps, ...stateProps, ...dispatchProps }
```

**④options**

```js
{
  context?: Object,   // 自定义上下文
  pure?: boolean, // 默认为 true , 当为 true 的时候 ，除了 mapStateToProps 和 props ,其他输入或者state 改变，均不会更新组件。
  areStatesEqual?: Function, // 当pure true , 比较引进store 中state值 是否和之前相等。 (next: Object, prev: Object) => boolean
  areOwnPropsEqual?: Function, // 当pure true , 比较 props 值, 是否和之前相等。 (next: Object, prev: Object) => boolean
  areStatePropsEqual?: Function, // 当pure true , 比较 mapStateToProps 后的值 是否和之前相等。  (next: Object, prev: Object) => boolean
  areMergedPropsEqual?: Function, // 当 pure 为 true 时， 比较 经过 mergeProps 合并后的值 ， 是否与之前等  (next: Object, prev: Object) => boolean
  forwardRef?: boolean, //当为true 时候,可以通过ref 获取被connect包裹的组件实例。
}
```

## 6.React-Redux 实现状态共享

- 1.在根组件中注入 store ，并在 useEffect 中改变 state 内容

```js
export default function Root() {
  React.useEffect(() => {
    Store.dispatch({ type: 'ADD' });
    Store.dispatch({
      type: 'SET',
      payload: { name: 'alien', mes: 'let us learn React!' },
    });
  }, []);
  return (
    <Provider store={Store}>
      <Index />
    </Provider>
  );
}
```

- 2.然后在整个应用中在想要获取数据的组件里，获取 state 中的内容
  - 通过 mapStateToProps 获取指定 state 中的内容，然后渲染视图

```js
import { connect } from 'react-redux';

class Index extends React.Component {
  componentDidMount() {}
  render() {
    const { info, number } = this.props;
    return (
      <div>
        <p>
          {' '}
          {info.name
            ? `hello, my name is ${info.name}`
            : 'what is your name'} ,{info.mes
            ? info.mes
            : ' what do you say? '}{' '}
        </p>
        点赞次数 {number} <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ number: state.number, info: state.info });

export default connect(mapStateToProps)(Index);
```

## 7.React-Redux 实现组件通信

### 1）组件 A

```js
function ComponentA({ toCompB, compBsay }) {
  /* 组件A */
  const [CompAsay, setCompAsay] = useState('');
  return (
    <div className="box">
      <p>我是组件A</p>
      <div> B组件对我说：{compBsay} </div>
      我对B组件说：
      <input
        placeholder="CompAsay"
        onChange={(e) => setCompAsay(e.target.value)}
      />
      <button onClick={() => toCompB(CompAsay)}>确定</button>
    </div>
  );
}
/* 映射state中CompBsay  */
const CompAMapStateToProps = (state) => ({ compBsay: state.info.compBsay });
/* 映射toCompB方法到props中 */
const CompAmapDispatchToProps = (dispatch) => ({
  toCompB: (mes) => dispatch({ type: 'SET', payload: { compAsay: mes } }),
});
/* connect包装组件A */
export const CompA = connect(
  CompAMapStateToProps,
  CompAmapDispatchToProps,
)(ComponentA);
```

### 2）组件 B

```js
class ComponentB extends React.Component {
  /* B组件 */
  state = { compBsay: '' };
  handleToA = () => {
    this.props.dispatch({
      type: 'SET',
      payload: { compBsay: this.state.compBsay },
    });
  };
  render() {
    return (
      <div className="box">
        <p>我是组件B</p>
        <div> A组件对我说：{this.props.compAsay} </div>
        我对A组件说：
        <input
          placeholder="CompBsay"
          onChange={(e) => this.setState({ compBsay: e.target.value })}
        />
        <button onClick={this.handleToA}>确定</button>
      </div>
    );
  }
}
/* 映射state中 CompAsay  */
const CompBMapStateToProps = (state) => ({ compAsay: state.info.compAsay });
export const CompB = connect(CompBMapStateToProps)(ComponentB);
```

## 8.React-Redux 原理

### 1）Provider 注入 Store

```js
const ReactReduxContext = React.createContext(null);
function Provider({ store, context, children }) {
  /* 利用useMemo，跟据store变化创建出一个contextValue 包含一个根元素订阅器和当前store  */
  const contextValue = useMemo(() => {
    /* 创建了一个根级 Subscription 订阅器 */
    const subscription = new Subscription(store);
    return {
      store,
      subscription,
    }; /* store 改变创建新的contextValue */
  }, [store]);
  useEffect(() => {
    const { subscription } = contextValue;
    /* 触发trySubscribe方法执行，创建listens */
    subscription.trySubscribe(); // 发起订阅
    return () => {
      subscription.tryUnsubscribe(); // 卸载订阅
    };
  }, [contextValue]); /*  contextValue state 改变出发新的 effect */
  const Context = ReactReduxContext;
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
```

- 1.React-Redux 是通过 `context` 上下文来保存传递 Store 的，但是上下文 value 保存的除了 Store 还有 `subscription`
- 2.`subscription` 可以理解为`订阅器`，在 React-redux 中一方面用来订阅来自 state 变化，另一方面通知对应的组件更新。在 Provider 中的订阅器 subscription 为`根订阅器`
- 3 在 `Provider` 的 `useEffect` 中，进行真正的`绑定订阅功能`，其原理内部调用了 store.`subscribe` ，只有根订阅器才会触发 store.subscribe

### 2）Subscription 订阅器

![image](images/frame/9.png)

- `层层订阅，上订下发`

```js
/* 发布订阅者模式 */
export default class Subscription {
  constructor(store, parentSub) {
    //....
  }
  /* 负责检测是否该组件订阅，然后添加订阅者也就是listener */
  addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  }
  /* 向listeners发布通知 */
  notifyNestedSubs() {
    this.listeners.notify();
  }
  /* 开启订阅模式 首先判断当前订阅器有没有父级订阅器 ， 如果有父级订阅器(就是父级Subscription)，把自己的handleChangeWrapper放入到监听者链表中 */
  trySubscribe() {
    /*
    parentSub  即是provide value 里面的 Subscription 这里可以理解为 父级元素的 Subscription
    */
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub
        ? this.parentSub.addNestedSub(this.handleChangeWrapper)
        : /* provider的Subscription是不存在parentSub，所以此时trySubscribe 就会调用 store.subscribe   */
          this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  }
  /* 取消订阅 */
  tryUnsubscribe() {
    //....
  }
}
```

- `层层订阅`：

  - 每一个用 connect 包装的组件，内部也有一个 Subscription ，而且这些订阅器一层层建立起关联
  - Provider 中的订阅器是最根部的订阅器，可以通过 trySubscribe 和 addNestedSub 方法可以看到
  - 如果父组件是一个 connect ，子孙组件也有 connect ，那么父子 connect 的 Subscription 也会建立起父子关系

- `上订下发`：
  - 在调用 trySubscribe 的时候，能够看到订阅器会和上一级的订阅器通过 `addNestedSub 建立`起`关联`，当 store 中 state 发生改变，会触发 store.subscribe ，但是`只会通知给 Provider 中的根 Subscription`，`根` Subscription `也不会直接派发更新`，而是`会下发给子代订阅器`（ connect 中的 Subscription ），再`由子代订阅器`，`决定是否更新组件`，层层下发

### 3）connect 控制更新

- 1.connect 中有一个 `selector` ,通过 mapStateToProps ，mapDispatchToProps ，把 redux 中 state 状态`合并`到 props 中，得到最新的 props
- 2.每一个 connect 都会`产生`一个`新的 Subscription` ，和父级订阅器`建立`起`关联`，这样父级会触发子代的 Subscription 来实现`逐层`的状态`派发`
- 3.Subscription 通知的是 checkForUpdates 函数，checkForUpdates 会形成新的 props ，与之前缓存的 props 进行浅比较，如果`不相等`，那么说明 state 已经变化了，直接`触发`一个 `useReducer` 来`更新`组件，如果`相等`，那么当前组件`不需要更新`，直接通知子代 Subscription ，检查子代 Subscription 是否更新，完成整个流程

```js
function connect(mapStateToProps, mapDispatchToProps) {
  const Context = ReactReduxContext;
  /* WrappedComponent 为connect 包裹的组件本身  */
  return function wrapWithConnect(WrappedComponent) {
    function createChildSelector(store) {
      /* 选择器  合并函数 mergeprops */
      return selectorFactory(store.dispatch, {
        mapStateToProps,
        mapDispatchToProps,
      });
    }
    /* 负责更新组件的容器 */
    function ConnectFunction(props) {
      /* 获取 context内容 里面含有 redux中store 和父级subscription */
      const contextValue = useContext(ContextToUse);
      /* 创建子选择器,用于提取state中的状态和dispatch映射，合并到props中 */
      const childPropsSelector = createChildSelector(contextValue.store);
      const [subscription, notifyNestedSubs] = useMemo(() => {
        /* 创建一个子代Subscription，并和父级subscription建立起关系 */
        const subscription = new Subscription(
          store,
          didStoreComeFromProps ? null : contextValue.subscription, // 父级subscription，通过这个和父级订阅器建立起关联。
        );
        return [subscription, subscription.notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]);

      /* 合成的真正的props */
      const actualChildProps = childPropsSelector(
        store.getState(),
        wrapperProps,
      );
      const lastChildProps = useRef();
      /* 更新函数 */
      const [forceUpdate] = useState(0);
      useEffect(() => {
        const checkForUpdates = () => {
          newChildProps = childPropsSelector();
          if (newChildProps === lastChildProps.current) {
            /* 订阅的state没有发生变化，那么该组件不需要更新，通知子代订阅器 */
            notifyNestedSubs();
          } else {
            /* 这个才是真正的触发组件更新的函数 */
            forceUpdate((state) => state + 1);
            lastChildProps.current = newChildProps; /* 保存上一次的props */
          }
        };
        subscription.onStateChange = checkForUpdates;
        //开启订阅者 ，当前是被connect 包转的情况 会把 当前的 checkForceUpdate 放在存入 父元素的addNestedSub中 ，一点点向上级传递 最后传到 provide
        subscription.trySubscribe();
        /* 先检查一遍，反正初始化state就变了 */
        checkForUpdates();
      }, [store, subscription, childPropsSelector]);

      /* 利用 Provider 特性逐层传递新的 subscription */
      return (
        <ContextToUse.Provider value={{ ...contextValue, subscription }}>
          <WrappedComponent {...actualChildProps} />
        </ContextToUse.Provider>
      );
    }
    /* memo 优化处理 */
    const Connect = React.memo(ConnectFunction);
    return hoistStatics(Connect, WrappedComponent); /* 继承静态属性 */
  };
}
```

## 9.实现异步

### 1）redux-thunk

- 代码量少，只有几行，其中大量的逻辑需要开发者实现

### 2）redux-saga

- 基于 generator 实现，用起来稍微繁琐

### 3）dvajs

- 基于 redux-saga 基础上，实现的异步的状态管理工具

---
toc: menu
---

# 状态管理 mobx

## 1.Mobx 特性

- mobx-react 提供了 `HOC` ，可以获取状态管理 Mobx 的数据层，也能接受 mobx 数据改变带来的更新

### 1）观察者模式

- Mobx 采用了一种`'观察者模式'`——`Observer`
  - `ObserverValue`：在 mobx 的状态层，每一个需要观察的`属性`都会`添加`一个`观察者`
  - `收集 listener`：mobx 中 Reaction 模块，可以对一些行为做依赖收集，在 React 中，是通过`劫持 render 函数`执行行为，进行的依赖收集
  - 用自定义存取器属性中的 `get` 和 `set` ，来进行的`依赖收集`和`更新派发`，当状态改变，观察者会直接精确通知每个 listener

### 2）状态提升

- mobx 里面的状态，并不是存在 React 组件里面的，是在外部由一个个 mobx 的模块 `model` 构成
- 每一个 `model` 可以理解成一个`对象`，状态实质存在 model 中，model 状态`通过 props 添加`到组件中，可以用 mobx-react 中的 `Provder` 和 `inject` 便捷获取它们

### 3）装饰器模式

- 支持装饰器模式的写法

```js
class Root {
  @observable name = 'alien'; /* 建立观察者name属性 */
  @action setName(name) {
    this.name = name;
  } /* 改变 name 属性 */
}
```

### 4）精确颗粒化收集

- 对于属性的`依赖收集`是`精确`的，`颗粒化`的

```js
class Root {
  @observable object = {
    //C组件使用
    name: 'alien', // A组件使用
    mes: 'let us learn React!', // B组件使用
  };
  @action setName(name) {
    this.object.name = name;
  }
  @action setMes(mes) {
    this.object.mes = mes;
  }
  @action setObject(object) {
    this.object = object;
  }
}
```

- 执行 `setName`：`只有`组件 `A` 会`更新`
- 执行 `setMes`：`只有`组件 `B` 会`更新`
- 执行 `setObject`：A、B、C `全部渲染`

### 5）引用类型处理

- 对于引用数据类型，比如 Object ，Array ，Set ，Map 等，除了新建一个 observable 之外，还会做如下两点操作：

- 1.`Proxy`：会把原始对象用 Proxy `代理`，Proxy 会精`确响应原始对象的变化`，比如`增加属性`——给属性绑定 ObserverValue ，`删除属性`——给属性解绑 ObserverValue 等

- 2.`ObservableAdministration`： 对于子代属性，会创建一个 ObservableAdministration，用于管理子代属性的 ObserverValue

- 对于外层 Root ，在 constructor 使用 makeObservable ，mobx 会默认给最外层的 Root 添加 ObservableAdministration

## 2.mobx 常用 api

### 1）makeObservable

- 在新版本 mobx 中，想要让整个模块变成`可响应式`的，那么需要在 constructor 调用 makeObservable

```js
constructor(){ makeObservable(this) }
```

### 2）observable

- 给`属性值加`一个`观察者对象`，使其能`变成可观察`的，当属性值改变的时候，观察者会通知每一个依赖项

```js
@observable name = 'Bob'
```

### 3）action

- 通过 action 包裹的函数，可以用来`修改` mobx 中的`状态`

```js
@action setName(newName){ this.name = newName  }
```

### 4）computed

- 根据现有的状态或其它计算值`衍生出的值`

```js
@observable price = 666  // 可观察属性——价格
@observable count = 1    // 可观察属性——数量
@computed get total() {
    return this.price * this.count
}
```

## 3.mobx-react 常用 api

- mobx-react 中的 api ，用于把 `mobx` 中的`状态`，`提供给组件`，并`把组件`也`变成可观察`的 —— mobx 状态改变，组件触发更新

### 1）Provider

- 用于把 mobx 的各个模块，用 `Context` 上下文形式，`保存`起来，供给组件`使用`

```js
<Provider Root={Root}> {/* ... */} </Provider>
```

### 2）inject

- inject `高阶组件`可以把 Provider 中的 mobx 模块，`混入`到组件的 `props` 中，所以就可以在组件中`消费`状态，或者调用改变状态的方法

```js
@inject('Root')
class Index extends React.Component {}
```

### 3）observer

- `被` observer 高阶组件`包装的组件`，如果组件内部引入了 mobx 可观察属性值，当值改变的时候，会追溯到当前组件，`促使当前组件更新`

```js
@observer
class Index extends React.Component {}
```

## 4.状态共享

### 1）Root 模块

- 用于保存全局的一些数据

```js
import { observable, action, makeObservable } from 'mobx';
class Root {
  constructor() {
    makeObservable(this);
  }
  @observable info = { name: 'xxx', mes: 'xxx' };
  // @observable number = 1
  @action setInfo(info) {
    this.info = info;
  }
}
export default new Root();
```

### 2）根组件注入状态

```js
import Root from './mobx';
export default function Index() {
  return (
    <Provider Root={Root}>
      <Child />
    </Provider>
  );
}
```

### 3）使用状态

```js
const getUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'alien', mes: 'let us learn React!' });
    }, 1000);
  });
};
@inject('Root')
@observer
class Child extends React.Component {
  async componentDidMount() {
    /*  模拟数据交互 */
    const res = await getUserInfo();
    this.props.Root.setInfo(res);
  }
  render() {
    const { info } = this.props.Root;
    return (
      <div className="box">
        <p> 姓名：{info.name} </p>
        <p> 想对大家说：{info.mes} </p>
      </div>
    );
  }
}
```

## 5.组件通信

### 1）注册模块

```js
class Communi {
  constructor() {
    makeObservable(this);
  }
  @observable mesA = '';
  @observable mesB = '';
  @action setMesA(mes) {
    this.mesA = mes;
  }
  @action setMesB(mes) {
    this.mesB = mes;
  }
}
export default new Communi();
```

### 2）A，B 组件实现通信

```js
@inject('Communi')
@observer
class ComponentA extends React.Component {
  /* 组件A */
  state = { CompAsay: '' };
  render() {
    const { CompAsay } = this.state;
    const { mesB } = this.props.Communi;
    return (
      <div className="box">
        <p>我是组件A</p>
        <div> B组件对我说：{mesB} </div>
        我对B组件说：{' '}
        <input
          onChange={(e) => this.setState({ CompAsay: e.target.value })}
          placeholder="CompAsay"
        />
        <button onClick={() => this.props.Communi.setMesA(CompAsay)}>确定</button>
      </div>
    );
  }
}
@inject('Communi')
@observer
class ComponentB extends React.Component {
  /* 组件B */
  state = { compBsay: '' };
  render() {
    const { compBsay } = this.state;
    const { mesA } = this.props.Communi;
    return (
      <div className="box pt50">
        <p>我是组件B</p>
        <div> A组件对我说：{mesA} </div>
        我对A组件说：
        <input
          onChange={(e) => this.setState({ compBsay: e.target.value })}
          placeholder="CompAsay"
        />
        <button onClick={() => this.props.Communi.setMesB(compBsay)}>
          确定
        </button>
      </div>
    );
  }
}
```

## 6.mobx 和 mobx-react 整个流程

- `初始化`：首先就是 mobx 在初始化的时候，是`如何处理` observable 可观察属性的
- `依赖收集`：第二点就是通过 mobx-react 中的 observer ，`如何收集`依赖项，与 observable 建立起关系的
- `派发更新`：最后就是当改变可观察属性的值的时候，`如何更新`对应组件的

## 7.模块初始化

### 1）绑定状态——observable

```js
function createObservable(target, name, descriptor) {
  // 对于如上DEMO1，target——Root类，name——属性名称 authorInfo 或者 name ，descriptor——属性描述，枚举性，可读性等
  if (isStringish(name)) {
    /* 装饰器模式下 */
    target[Symbol('mobx-stored-annotations')][name] = {
      /* 向类的mobx-stored-annotations属性的name属性上，绑定 annotationType_ ， extend_ 等方法。 */
      annotationType_: 'observable', //这个标签证明是 observable，除了observable，还有 action， computed 等。
      options_: null,
      make_, // 这个方法在类组件 makeObservable 会被激活
      extend_, // 这个方法在类组件 makeObservable 会被激活
    };
  }
}
```

- 被 observable 装饰器包装的属性，`本质`上就是`调用 createObservable` 方法
- 通过 createObservable 将类上绑定当前 observable 对应的配置项，给 observable 绑定的属性添加一些`额外的状态`，这些状态将在`类实例化`的时候 `makeObservable` 中被`激活`

### 2）激活状态——makeObservable

- 创建一个管理者 ObservableAdministration ，管理者就是为了管理子代属性的 ObservableValue 。并和模块实例建立起关系
- 然后会遍历观察者状态下的每一个属性，将每个属性通过 `adm.make_`处理

```js
function make_(adm, key, descriptor) {
  /*  当调用 observable 配置项的 make_ ，本质上调用 adm.defineObservableProperty_*/
  return this.extend_(adm, key, descriptor);
}
function extend_(adm, key, descriptor) {
  return adm.defineObservableProperty_(key, descriptor, options);
}
function makeObservable(target) {
  // target 模块实例——this
  const adm = new ObservableObjectAdministration(
    target,
  ); /* 创建一个管理者——这个管理者是最上层的管理者，管理模块下的observable属性 */
  target[Symbol('mobx administration')] =
    adm; /* 将管理者 adm 和 class 实例建立起关联 */
  startBatch();
  try {
    let annotations =
      target[Symbol('mobx-stored-annotations')]; /* 上面第一步说到，获取状态 */
    /* 得到每个状态名称 */
    Reflect.ownKeys(annotations).forEach((key) =>
      adm.make_(key, annotations[key]),
    ); /* 对每个属性调用 */
  } finally {
    endBatch();
  }
}
```

### 3）观察者属性管理者——ObservableAdministration

- 首先会通过 `Object.defineProperty` ，`拦截`对象的`属性`，添加 get，set ，比如组件中引用对象上的属性，调用 get ——本质上调用 `getObservablePropValue_` ，在 observableValues 调用的是 get 方法；当修改对象上的属性，调用 set ——本质上调用 `setObservablePropValue_` ，`setObservablePropValue_` 调用的是 ObservableValues 上的 `setNewValue_` 方法
- 对于每一个属性会增加一个观察者 ObservableValue ，然后把当前 ObservableValue 放入管理者 ObservableAdministration 的 `values_` 属性上

```ts
class ObservableObjectAdministration {
  constructor(target_, values_) {
    this.target_ = target_;
    this.values_ = new Map(); //存放每一个属性的ObserverValue。
  }
  /* 调用 ObserverValue的 get —— 收集依赖  */
  getObservablePropValue_(key) {
    return this.values_.get(key)!.get();
  }
  /* 调用 ObserverValue的 setNewValue_   */
  setObservablePropValue_(key, newValue) {
    const observable = this.values_.get(key);
    observable.setNewValue_(newValue); /* 设置新值 */
  }
  make_(key, annotation) {
    // annotation 为每个observable对应的配置项的内容，{ make_,extends }
    const outcome = annotation.make_(this, key, descriptor, source);
  }
  /* 这个函数很重要，用于劫持对象上的get,set */
  defineObservableProperty_(key, value) {
    try {
      startBatch();
      const descriptor = {
        get() {
          // 当我们引用对象下的属性，实际上触发的是 getObservablePropValue_
          this.getObservablePropValue_(key);
        },
        set(value) {
          // 当我们改变对象下的属性，实际上触发的是 setObservablePropValue_
          this.setObservablePropValue_(key, value);
        },
      };
      Object.defineProperty(this.target_, key, descriptor);
      const observable = new ObservableValue(value); // 创建一个 ObservableValue
      this.values_.set(key, observable); // 设置observable到value中
    } finally {
      endBatch();
    }
  }
}
```

## 8.依赖收集

### 1）观察者——ObservableValue

- 观察者属性管理者最终调用的两个方法—— `get` 和 `setNewValue_ `

```js
class Atom {
  observers_ = new Set(); /* 存放每个组件的 */
  /* value改变，通知更新 */
  reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  }
  /* 收集依赖 */
  reportObserved() {
    return reportObserved(this);
  }
}

class ObservableValue extends Atom {
  get() {
    //adm.getObservablePropValue_ 被调用
    this.reportObserved(); // 调用Atom中 reportObserved
    return this.dehanceValue(this.value_);
  }
  setNewValue_(newValue) {
    // adm.setObservablePropValue_
    const oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged(); // 调用Atom中reportChanged
  }
}
```

### 2）注入模块——Provider

- 创建一个上下文 `context` ，并通过 `context.Provider` 传递上下文

```js
const MobXProviderContext = React.createContext({});
export function Provider(props) {
  /* ... */
  return (
    <MobXProviderContext.Provider value={value}>
      {children}
    </MobXProviderContext.Provider>
  );
}
```

### 3）注入模块——inject

- inject 作用很简单，就是将 mobx 的状态，从 `context` 中`混入 props` 中

```js
function inject(...storeNames) {
  const Injector = React.forwardRef((props, ref) => {
    let newProps = { ...props };
    const context = React.useContext(MobXProviderContext);
    storeNames.forEach(function (storeName) {
      //storeNames - [ 'Root' ]
      if (storeName in newProps) return;
      if (!(storeName in context)) {
        /* 将mobx状态从context中混入到props中。 */
        newProps[storeName] = context[storeName];
      }
    });
    return React.createElement(component, newProps);
  });
  return Injector;
}
```

### 4）可观察组件—— observer

- mobx-react 中 `observer` HOC 的作用——`渲染 render 的劫持`
- 通过`劫持 render 函数执行`，收集里面的依赖。

- 被 observe 的组件，被赋予一项功能，就是可观察的

- 当里面引用了 mobx 中的 ObservableValue ，当 ObservableValue 改变，组件会更新

```js
function observer(componentClass) {
  /* componentClass 是类组件的情况 (函数组件我们暂且忽略) */
  return function makeClassComponentObserver() {
    const target = componentClass.prototype;
    const baseRender = target.render; /* 这个是原来组件的render */
    /* 劫持render函数 */
    target.render = function () {
      return makeComponentReactive.call(this, baseRender);
    };
  };
}

function makeComponentReactive() {
  const baseRender = render.bind(this); // baseRender为真正的render方法
  /* 创建一个反应器，绑定类组件的更新函数 —— forceUpdate  */
  const reaction = new Reaction(`${initialName}.render()`, () => {
    Component.prototype.forceUpdate.call(
      this,
    ); /* forceUpdate 为类组件更新函数 */
  });
  reaction['reactComponent'] = this; /* Reaction 和 组件实例建立起关联 */
  reactiveRender['$mobx'] = reaction;
  this.render = reactiveRender;
  function reactiveRender() {
    /* 改造的响应式render方法 */
    reaction.track(() => {
      // track中进行真正的依赖收集
      try {
        rendering = baseRender(); /* 执行更新函数 */
      } catch {}
    });
    return rendering;
  }
  return reactiveRender.call(this);
}
```

- makeComponentReactive 通过`改造 render 函数`，来实现依赖的收集:

  - 每一个组件会创建一个 `Reaction`，Reaction 的第二个参数内部封装了更新组件的方法。那么如果触发可观察属性的 `set` ，那么最后触发更新的就是这个方法，对于类组件本质上就是的 `forceUpdate` 方法

  - 对 render 函数进行改造，改造成 `reactiveRender` ，在 reactiveRender 中，reaction.`track` 是真正的进行依赖的收集，track 回调函数中，执行真正的 render 方法，得到 element 对象 rendering

### 5）反应器——Reaction

```js
class Reaction {
  constructor(name_, onInvalidate_) {
    this.name_ = name_;
    this.onInvalidate_ =
      onInvalidate_; /* onInvalidate_ 里面有组件的forceUpdate函数，用于更新组件 */
  }
  onBecomeStale_() {
    this.schedule_(); /* 触发调度更新 */
  }
  /* 开启调度更新 */
  schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  }
  /* 更新 */
  runReaction_() {
    startBatch();
    this.isScheduled_ = false;
    const prev = globalState.trackingContext;
    globalState.trackingContext = this;
    this.onInvalidate_(); /* 更新组件  */
    globalState.trackingContext = prev;
    endBatch();
  }
  /* 收集依赖 */
  track(fn) {
    startBatch();
    /* 第一阶段 */
    const prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = this;
    /* 第二阶段 */
    const result = fn.call(context);
    globalState.trackingDerivation = prevTracking;
    /* 第三阶段 */
    bindDependencies(this);
  }
}
```

- 第一阶段： 首先在执行 track 的时候，会把全局变量的 trackingDerivation，指向当前的 trackingDerivation 。这样在收集依赖的过程中，可以直接收集当前的 trackingDerivation ，也就是为什么 ObservableValue 能精确收集每一个 Reaction

- 第二阶段：首先当被 observer 包装的组件，只要执行 render 函数，就会执行 track 方法，fn.call(context)，真正的 r ender 函数会在里面执行

## 9.派发更新

- 第一步： 首先对于观察者属性管理者 ObservableAdministration 会触发 setObservablePropValue\* ，然后找到对应的 ObservableValue 触发 `setNewValue_` 方法。

- 第二步： `setNewValue_` 本质上会触发 Atom 中的 reportChanged ，然后调用 `propagateChanged`

```js
function propagateChanged(observable) {
  observable.observers_.forEach((Reaction) => {
    Reaction.onBecomeStale_();
  });
}
```

- 第三步： Reaction 的 onBecomeStale* 触发，会让 Reaction 的 schedule* 执行
  - `schedule_` 会开启更新调度
  - 更新调度就是 `schedule_` 并不会马上执行组件更新，而是把当前的 Reaction 放入 globalState.pendingReactions（待更新 Reaction 队列）中，然后会执行 `runReactions` 外部方法

```js
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  globalState.isRunningReactions = true;
  const allReactions = globalState.pendingReactions;
  /* 这里的代码是经过修改过后的，源码中要比 */
  allReactions.forEach((Reaction) => {
    /* 执行每一个组件的更新函数 */
    Reaction.runReaction_();
  });
  globalState.pendingReactions = [];
  globalState.isRunningReactions = false;
}
```

- 第四步： 执行每一个 Reaction ，当一个 ObservableValue 的属性值改变，可以收集了多个组件的依赖，所以 mobx 用这个调度机制，先把每一个 Reaction 放入 pendingReactions 中，然后集中处理这些 Reaction ， Reaction 会触发 `runReaction_()` 方法，会触发 `onInvalidate_` ——类组件的 forceupdate 方法完成组件更新

## 10.Mobx 与 Redux 区别

- 1.在 Mobx 在`上手程度`上，要优于 Redux ，比如 Redux 想使用异步，需要配合中间价，流程比较复杂
- 2.`Redux` 对于`数据流向`更规范化，`Mobx` 中数据更加多样化，`允许数据冗余`
- 3.Redux 整体数据流向简单，Mobx 依赖于 `Proxy`， `Object.defineProperty` 等，`劫持`属性 get ，set ，数据变化多样性
- 4.`Redux` 可`拓展性`比较`强`，可以通过`中间件`自定义增强 dispatch
- 5.在 `Redux` 中，基本`有一个 store` ，统一管理 store 下的状态，在 `mobx` 中可以有`多个模块`，可以理解每一个模块都是一个 store ，相互之间是独立的

## 11.Mobx 实战

### 1）安装依赖

```js
yarn add mobx mobx-react mobx-state-tree
```

### 2）封装 store

```ts
// homeStore.ts
import { types } from 'mobx-state-tree';
import { toJS } from 'mobx';

import { webapi } from '@/services/webapi';

const merchantIdItem = types.model('merchantIdItem', {
  isOpen: types.optional(types.boolean, false),
  merchantId: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  todoNum: types.maybeNull(types.string),
});

const HomeStore = types
  .model('HomeStore', {
    merchantList: types.optional(types.array(merchantIdItem), []),
  })
  .views((self: any) => {
    return {
      get dataList() {
        return toJS(self.merchantList);
      },
    };
  })
  .volatile(() => {
    return {
      index: -1,
    };
  })
  .actions((self: any) => {
    return {
      setObject(data: any) {
        Object.keys(data).forEach((key) => {
          self[key] = data[key];
        });
        return self;
      },
      setObjectAsync(data: any) {
        return new Promise((resolve) => {
          Object.keys(data).forEach((key) => {
            self[key] = data[key];
          });
          resolve(true);
        });
      },
      query() {
        self.setObject({ needUpdate: false });
        return webapi({
          preloader: true,
        })
          .then(() => {})
          .catch(() => {});
      },
    };
  });

export default HomeStore;
```

```ts
import { types } from 'mobx-state-tree';
import HomeStore from './homeStore';
import RetrievalStore from './retrievalStore';

const Stores = types
  .model('Stores', {
    home: types.optional(HomeStore, {}),
    retrieval: types.optional(RetrievalStore, {}),
  })
  .views(() => {
    return {};
  });

export default Stores;
```

### 3）注入 store

```js
// App.js
import { Provider } from 'mobx-react';
import Store from '@/store';

const store = Store.create({});

function App() {
  return <Provider store={store}></Provider>;
}
```

### 4）封装获取 store 的方法-自定义 hook

```ts
// useStore.ts
import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';
import type { Instance } from 'mobx-state-tree';
import type Stores from '@/store';

export default function useStore() {
  return React.useContext<Record<'store', Instance<typeof Stores>>>(
    MobXProviderContext,
  );
}
```

### 5）页面使用

```ts
// home.tsx
import { observer } from 'mobx-react';
import useStore from '@/hooks/useStore';

const Home: React.FC = observer(() => {
  const {
    store: { home },
  } = useStore();
});
```

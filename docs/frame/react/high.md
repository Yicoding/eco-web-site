---
toc: menu
---

# react 进阶

## 1.调度和时间分片

- `GUI 渲染线程`和 `JS 引擎线程`是`相互排斥`的，比如开发者用 js 写了一个遍历大量数据的循环，在执行 js 时候，会`阻塞`浏览器的`渲染绘制`，给用户直观的感受就是`卡顿`

### 1）异步调度

- `v15` 版本，React 对于大型的 React 应用，会存在一次更新`递归遍历`大量的虚拟 DOM ，造成`占用` js `线程`，使得浏览器没有时间去做一些动画效果，伴随项目越来越大，项目会越来越卡

- vue 有这 `template` 模版收集依赖的过程，轻松构建`响应式`，使得在一次更新中，vue 能够迅速响应，`找到需要更新的范围`，然后以组件粒度更新组件，渲染视图

- 在 `React` 中，一次更新 React 无法知道此次更新的波及范围，所以 React 选择`从根节点`开始 `diff` ，查找不同，更新这些不同

- 更新过程阻塞了浏览器的绘制，那么把 `React 的更新`，`交给浏览器自己控制`，如果浏览器`有绘制任务那么执行绘制任务`，在`空闲时间执行更新任务`，就能解决卡顿问题

### 2）时间分片

## 2.react fiber

### 1）作用

- 为了使 react 渲染过程中可以被中断，可以将控制权交还给浏览器，可以让位给高优先级的任务，浏览器空闲后再恢复渲染
- 对于计算量比较大的 js 计算或者 dom 计算，就不会显得特别卡顿，而是一帧一帧的有规律的执行任务

### 2）核心思想

- Fiber 也称协程或者纤程
- 它和线程并不一样，协程本身是没有并发或者并行能力的（需要配合线程），它只是一种控制流程的让出机制
- 让出 CPU 的执行权，让 CPU 能在这段时间执行其他的操作。渲染的过程可以被中断，可以将控制权交回浏览器，让位给高优先级的任务，浏览器空闲后再恢复渲染

### 3）具体解析

- React V15 在渲染时，会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们， 一气呵成。这个过程期间， React 会占据浏览器资源，这会导致用户触发的事件得不到响应，并且会导致掉帧，导致用户感觉到卡顿

- 为了给用户制造一种应用很快的“假象”，不能让一个任务长期霸占着资源。可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的“进程”，需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。所以 React 通过 Fiber 架构，让这个执行过程变成可被中断。“适时”地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处:

  - 分批延时对 DOM 进行操作，避免一次性操作大量 DOM 节点，可以得到更好的用户体验

  - 给浏览器一点喘息的机会，它会对代码进行编译优化（JIT）及进行热代码优化，或者对 reflow 进行修正

### 4）generator 有类似的功能，为什么不直接使用？

- 要使用 generator，需要将涉及到的所有代码都包装成 generator \*的形式，非常麻烦，工作量大

- generator 内部是有状态的

### 5）判断当前是否有高优任务

- 当前 js 的环境其实并没有办法判断是否有高优先任务。只能约定一个合理的执行时间，当超过了这个执行时间，如果任务仍然没有执行完成，中断当前任务，将控制权交还给浏览器

- 合理的执行时间：人眼可识别每秒 60 帧，1000ms/60f = 16ms，浏览器提供方法 requestIdleCallback，让浏览器在有空的时候执行回调，可传入一个参数，表示浏览器有多少时间供我们执行任务

### 6）浏览器在一帧内要做的事情

- 处理用户输入事件
- js 的执行
- requestAnimation 调用
- 布局 layout
- 绘制 paint

### 7）有空时间

- 浏览器执行完上述事件后的空余时间，eg：上述执行时间 6ms，剩余 16ms-6ms=10ms 可执行 requestIdleCallback

### 8）浏览器无空闲时间时

- requestIdleCallback 入参有 timeout 参数超时时间，如果超过这个 timeout 后，回调还没执行，那么会在下一帧强制执行
- requestIdleCallback 兼容性差，react 通过 messageChannel 模拟实现了 requestIdleCallback 功能
- timeout 超时后不一定要执行，react 里预定了 5 个优先级：
  - Immediate：最高优先级，这个优先级的任务应该马上执行不能中断
  - userBlocking：这些任务一般是用户交互的结果，需要即时得到反馈
  - Normal：不需要用户立即就感受到的变化，比如网络请求
  - Low：这些任务可以延后，但是最终也需要执行
  - Idle：可以被无限期延后

## 3.高阶组件 HOC

- 1.强化 props ，可以通过 HOC ，向原始组件混入一些状态
- 2.渲染劫持，可以利用 HOC ，动态挂载原始组件，还可以先获取原始组件的渲染树，进行可控性修改
- 3.可以配合 import 等 api ，实现动态加载组件，实现代码分割，加入 loading 效果
- 4.可以通过 ref 来获取原始组件实例，操作实例下的属性和方法
- 5.可以对原始组件做一些事件监听，错误监控等

### 1）定义

- 高阶组件是`参数为组件，返回值为新组件的函数`
- 返回的组件把传进去的组件`进行功能强化`

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- HOC 的产生根本作用就是`解决大量的代码复用，逻辑复用问题`

### 2）使用场景

- 1.拦截问题，本质上是对渲染的控制，对渲染的控制可不仅仅指是否渲染组件，还可以像 dva 中 dynamic 那样`懒加载/动态加载组件`

- 2.让 props 中`混入`一些你需要的东西，例如 `withRoute` ， HOC 把改变路由的 history 对象混入 props 中

- 3.`不`想`改变组件`，只是监控组件的内部状态，对组件做一些`赋能`
  - 比如对组件内的点击事件`做一些监控`(每个页面 onshow 或 onLoad 埋点)
  - 或者加一次`额外的生命周期`(RN 二次封装，优化 RN 自身的问题)
  - react-keepalive-router

### 3）属性代理

- 属性代理，就是用组件包裹一层代理组件，在代理组件上，可以做一些，对源组件的强化操作。属性代理返回的是一个新组件，被包裹的原始组件，将在新的组件里被挂载

```js
function HOC(WrapComponent) {
  return class Advance extends React.Component {
    state = {
      name: 'alien',
    };
    render() {
      return <WrapComponent {...this.props} {...this.state} />;
    }
  };
}
```

- 优点：

  - ① 属性代理可以和业务组件低耦合，零耦合，对于条件渲染和 props 属性增强，只负责控制子组件渲染和传递额外的 props 就可以了，所以无须知道，业务组件做了些什么。所以正向属性代理，更适合做一些开源项目的 HOC ，目前开源的 HOC 基本都是通过这个模式实现的
  - ② 同样适用于类组件和函数组件
  - ③ 可以完全隔离业务组件的渲染，因为属性代理说白了是一个新的组件，相比反向继承，可以完全控制业务组件是否渲染
  - ④ 可以嵌套使用，多个 HOC 是可以嵌套使用的，而且一般不会限制包装 HOC 的先后顺序

- 缺点
  - ① 一般无法直接获取原始组件的状态，如果想要获取，需要 ref 获取组件实例
  - ② 无法直接继承静态属性。如果需要继承需要手动处理，或者引入第三方库
  - ③ 因为本质上是产生了一个新组件，所以需要配合 forwardRef 来转发 ref

### 4）反向继承

- 包装后的组件继承了原始组件本身，所以此时无须再去挂载业务组件

```js
class Index extends React.Component {
  render() {
    return <div> hello,world </div>;
  }
}
function HOC(Component) {
  return class wrapComponent extends Component {
    /* 直接继承需要包装的组件 */
  };
}
export default HOC(Index);
```

- 优点：

  - ① 方便获取组件内部状态，比如 state ，props ，生命周期，绑定的事件函数等
  - ② es6 继承可以良好继承静态属性。所以无须对静态属性和方法进行额外的处理

- 缺点：

  - ① 函数组件无法使用
  - ② 和被包装的组件耦合度高，需要知道被包装的原始组件的内部状态，具体做了些什么
  - ③ 如果多个反向继承 HOC 嵌套在一起，当前状态会覆盖上一个状态。这样带来的隐患是非常大的，比如说有多个 componentDidMount ，当前 componentDidMount 会覆盖上一个 componentDidMount 。这样副作用串联起来，影响很大

### 5）编写高阶组件

**1.强化 props**

- withRouter

```js
function withRouter(Component) {
  const displayName = `withRouter(${Component.displayName || Component.name})`;
  const C = (props) => {
    /*  获取 */
    const { wrappedComponentRef, ...remainingProps } = props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          return (
            <Component
              {...remainingProps} // 组件原始的props
              {...context} // 存在路由对象的上下文，history  location 等
              ref={wrappedComponentRef}
            />
          );
        }}
      </RouterContext.Consumer>
    );
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;
  /* 继承静态属性 */
  return hoistStatics(C, Component);
}
export default withRouter;
```

- 1.分离出 props 中 wrappedComponentRef 和 remainingProps ， remainingProps 是原始组件真正的 props， wrappedComponentRef 用于转发 ref
- 2.用 Context.Consumer 上下文模式获取保存的路由信息。（ React Router 中路由状态是通过 context 上下文保存传递的）
- 3.将路由对象和原始 props 传递给原始组件，所以可以在原始组件中获取 history ，location 等信息

**2.动态加载**

- 路由懒加载

```js
export default function dynamicHoc(loadRouter) {
  return class Content extends React.Component {
    state = { Component: null };
    componentDidMount() {
      if (this.state.Component) return;
      loadRouter()
        .then((module) => module.default) // 动态加载 component 组件
        .then((Component) => this.setState({ Component }));
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : <Loading />;
    }
  };
}

// 使用
const Index = AsyncRouter(() => import('../pages/index'));
```

- Index 组件中，在 componentDidMount 生命周期动态加载上述的路由组件 Component，如果在切换路由或者没有加载完毕时，显示的是 Loading 效果

**3.事件监控**

```js
function ClickHoc(Component) {
  return function Wrap(props) {
    const dom = useRef(null);
    useEffect(() => {
      const handerClick = () => console.log('发生点击事件');
      dom.current.addEventListener('click', handerClick);
      return () => dom.current.removeEventListener('click', handerClick);
    }, []);
    return (
      <div ref={dom}>
        <Component {...props} />
      </div>
    );
  };
}

@ClickHoc
class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <p>hello，world</p>
        <button>组件内部点击</button>
      </div>
    );
  }
}
```

## 4.实战-处理海量数据

### 1）时间分片（ Time slicing ）

- 时间分片主要解决，初次加载，`一次性渲染大量数据`造成的卡顿现象

- 浏览器执 js 速度要比渲染 DOM 速度快的多

- 时间分片，并没有本质减少浏览器的工作量，而是把一次性`任务分割`开来，给用户一种流畅的体验效果

**QA:一次性加载 20000 个元素块，元素块的位置和颜色是随机的**

- 第一步：计算时间片，首先用 eachRenderNum 代表一次渲染多少个，那么除以总数据就能得到渲染多少次
- 第二步：开始渲染数据，通过 index>times 判断渲染完成，如果没有渲染完成，那么通过 `requestIdleCallback` 代替 setTimeout 浏览器空闲执行下一帧渲染
- 第三步：通过 renderList 把已经渲染的 element 缓存起来，渲染控制章节讲过，这种方式可以直接跳过下一次的渲染。实际每一次渲染的数量仅仅为 demo 中设置的 500 个

```js
class Index extends React.Component {
  state = {
    dataList: [], //数据源列表
    renderList: [], //渲染列表
    position: { width: 0, height: 0 }, // 位置信息
    eachRenderNum: 500, // 每次渲染数量
  };
  box = React.createRef();
  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.box.current;
    const originList = new Array(20000).fill(1);
    const times = Math.ceil(
      originList.length / this.state.eachRenderNum,
    ); /* 计算需要渲染此次数*/
    let index = 1;
    this.setState(
      {
        dataList: originList,
        position: { height: offsetHeight, width: offsetWidth },
      },
      () => {
        this.toRenderList(index, times);
      },
    );
  }
  toRenderList = (index, times) => {
    if (index > times) return; /* 如果渲染完成，那么退出 */
    const { renderList } = this.state;
    renderList.push(
      this.renderNewList(index),
    ); /* 通过缓存element把所有渲染完成的list缓存下来，下一次更新，直接跳过渲染 */
    this.setState({
      renderList,
    });
    requestIdleCallback(() => {
      /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
      this.toRenderList(++index, times);
    });
  };
  renderNewList(index) {
    /* 得到最新的渲染列表 */
    const { dataList, position, eachRenderNum } = this.state;
    const list = dataList.slice(
      (index - 1) * eachRenderNum,
      index * eachRenderNum,
    );
    return (
      <React.Fragment key={index}>
        {list.map((item, index) => (
          <Circle key={index} position={position} />
        ))}
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="bigData_index" ref={this.box}>
        {this.state.renderList}
      </div>
    );
  }
}
```

### 2）虚拟列表（ Virtual list ）

- 虚拟列表是一种长列表的`解决方案`

- 虚拟列表，就是在`长列表滚动过程中`，只有`视图区域`显示的是`真实 DOM` ，滚动过程中，不断截取视图的有效区域，让人视觉上感觉列表是在滚动,达到`无限滚动`的效果

- 虚拟列表划分可以分为三个区域：`视图区` + `缓冲区` + `虚拟区`

  - 视图区：视图区就是能够直观看到的列表区，此时的元素都是真实的 DOM 元素
  - 缓冲区：缓冲区是为了防止用户上滑或者下滑过程中，出现白屏等效果。（缓冲区和视图区为渲染真实的 DOM ）
  - 虚拟区：对于用户看不见的区域（除了缓冲区），剩下的区域，不需要渲染真实的 DOM 元素。虚拟列表就是通过这个方式来减少页面上 DOM 元素的数量

- 实现思路
  - 通过 useRef 获取元素，缓存变量
  - useEffect 初始化计算容器的高度。截取初始化列表长度。这里需要 div 占位，撑起滚动条
  - 通过监听滚动容器的 onScroll 事件，根据 scrollTop 来计算渲染区域向上偏移量, 这里需要注意的是，当用户向下滑动的时候，为了渲染区域，能在可视区域内，可视区域要向上滚动；当用户向上滑动的时候，可视区域要向下滚动
  - 通过重新计算 end 和 start 来重新渲染列表

```js
function VirtualList() {
  const [dataList, setDataList] = React.useState([]); /* 保存数据源 */
  const [position, setPosition] = React.useState([
    0, 0,
  ]); /* 截取缓冲区 + 视图区索引 */
  const scroll = React.useRef(null); /* 获取scroll元素 */
  const box = React.useRef(null); /* 获取元素用于容器高度 */
  const context = React.useRef(null); /* 用于移动视图区域，形成滑动效果。 */
  const scrollInfo = React.useRef({
    height: 500 /* 容器高度 */,
    bufferCount: 8 /* 缓冲区个数 */,
    itemHeight: 60 /* 每一个item高度 */,
    renderCount: 0 /* 渲染区个数 */,
  });
  React.useEffect(() => {
    const height = box.current.offsetHeight;
    const { itemHeight, bufferCount } = scrollInfo.current;
    const renderCount = Math.ceil(height / itemHeight) + bufferCount;
    scrollInfo.current = { renderCount, height, bufferCount, itemHeight };
    const dataList = new Array(10000).fill(1).map((item, index) => index + 1);
    setDataList(dataList);
    setPosition([0, renderCount]);
  }, []);
  const handleScroll = () => {
    const { scrollTop } = scroll.current;
    const { itemHeight, renderCount } = scrollInfo.current;
    const currentOffset = scrollTop - (scrollTop % itemHeight);
    const start = Math.floor(scrollTop / itemHeight);
    context.current.style.transform = `translate3d(0, ${currentOffset}px, 0)`; /* 偏移，造成下滑效果 */
    const end = Math.floor(scrollTop / itemHeight + renderCount + 1);
    if (end !== position[1] || start !== position[0]) {
      /* 如果render内容发生改变，那么截取  */
      setPosition([start, end]);
    }
  };
  const { itemHeight, height } = scrollInfo.current;
  const [start, end] = position;
  const renderList = dataList.slice(start, end); /* 渲染区间 */
  console.log('渲染区间', position);
  return (
    <div className="list_box" ref={box}>
      <div
        className="scroll_box"
        style={{ height: height + 'px' }}
        onScroll={handleScroll}
        ref={scroll}
      >
        <div
          className="scroll_hold"
          style={{ height: `${dataList.length * itemHeight}px` }}
        />
        <div className="context" ref={context}>
          {renderList.map((item, index) => (
            <div className="list" key={index}>
              {' '}
              {item + ''} Item{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## 5.异步渲染

- 异步模式：请求数据 -> 渲染组件

- 解决问题：优化性能、延迟加载

### 1）传统模式

- `渲染组件 -> 请求数据 -> 再渲染组件`

### 2）异步模式

- `请求数据-> 渲染组件`

- `Suspense` 是 React 提出的一种`同步的代码来实现异步操作`的方案。Suspense 让组件‘等待’异步操作，`异步请求结束后在进行组件的渲染`，也就是所谓的异步渲染

- `Suspense` 是`组件`，有一个 `fallback` 属性，用来代替当 Suspense 处于 loading 状态下渲染的内容，Suspense 的 children 就是异步组件。多个异步组件可以用 Suspense 嵌套使用

```js
// 子组件
function UserInfo() {
  // 获取用户数据信息，然后再渲染组件。
  const user = getUserInfo();
  return <h1>{user.name}</h1>;
}
// 父组件
export default function Index() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <UserInfo />
    </Suspense>
  );
}
```

- Suspense 包裹异步渲染组件 UserInfo ，当 UserInfo 处于数据加载状态下，展示 Suspense 中 fallback 的内容

- 异步渲染相比传统数据交互相比好处:
  - 不再需要 componentDidMount 或 useEffect 配合做数据交互，也不会因为数据交互后，改变 state 而产生的二次更新作用
  - 代码逻辑更简单，清晰

### 3）Suspense 原理

- Suspense 在执行内部可以通过 try{}catch{} 方式捕获异常
- 这个异常通常是一个 Promise ，可以在这个 Promise 中进行数据请求工作
- Suspense 内部会处理这个 Promise
- Promise 结束后，Suspense 会再一次重新 render 把数据渲染出来，达到异步渲染的效果

![image](images/frame/2.png)

```js
export class Suspense extends React.Component {
  state = { isRender: true };
  componentDidCatch(e) {
    /* 异步请求中，渲染 fallback */
    this.setState({ isRender: false });
    const { p } = e;
    Promise.resolve(p).then(() => {
      /* 数据请求后，渲染真实组件 */
      this.setState({ isRender: true });
    });
  }
  render() {
    const { isRender } = this.state;
    const { children, fallback } = this.props;
    return isRender ? children : fallback;
  }
}
```

### 4）React.lazy 原理

- lazy `内部模拟`一个 `promiseA` 规范场景
- React.lazy 用 Promise 模拟了一个请求数据的过程，但是`请求`的结果不是数据，而是`一个动态的组件`
- `下一次渲染就直接渲染这个组件`，所以是 React.lazy 利用 Suspense 接收 Promise ，执行 Promise ，然后再渲染这个特性做到`动态加载的`

![image](images/frame/3.png)

```js
function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: {
      _status: -1, //初始化状态
      _result: ctor,
    },
    _init: function (payload) {
      if (payload._status === -1) {
        /* 第一次执行会走这里  */
        const ctor = payload._result;
        const thenable = ctor();
        payload._status = Pending;
        payload._result = thenable;
        thenable.then((moduleObject) => {
          const defaultExport = moduleObject.default;
          resolved._status = Resolved; // 1 成功状态
          resolved._result =
            defaultExport; /* defaultExport 为我们动态加载的组件本身  */
        });
      }
      if (payload._status === Resolved) {
        // 成功状态
        return payload._result;
      } else {
        //第一次会抛出Promise异常给Suspense
        throw payload._result;
      }
    },
  };
}
```

- React.lazy 包裹的组件会标记 REACT_LAZY_TYPE 类型的 element，在调和阶段会变成 LazyComponent 类型的 fiber

- React 对 LazyComponent 会有单独的处理逻辑

  - 第一次渲染首先会执行 init 方法，里面会执行 lazy 的第一个函数，得到一个 Promise，绑定 Promise.then 成功回调，回调里得到将要渲染组件 defaultExport ，这里要注意的是，如上面的函数当第二个 if 判断的时候，因为此时状态不是 Resolved ，所以会走 else ，抛出异常 Promise，抛出异常会让当前渲染终止

  - 这个异常 Promise 会被 Suspense 捕获到，Suspense 会处理 Promise ，Promise 执行成功回调得到 defaultExport（将想要渲染组件），然后 Susponse 发起第二次渲染，第二次 init 方法已经是 Resolved 成功状态，那么直接返回 result 也就是真正渲染的组件。这时候就可以正常渲染组件了

## 6.渲染错误边界

### 1）componentDidCatch

- componentDidCatch 可以捕获异常，它接受两个参数：

  - 1.error —— 抛出的错误
  - 2.info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息

- componentDidCatch 中可以再次触发 setState，来降级 UI 渲染，componentDidCatch() 会在 commit 阶段被调用，因此允许执行副作用

  ```js
  class Index extends React.Component {
    state = {
      hasError: false,
    };
    componentDidCatch(...arg) {
      uploadErrorLog(arg); /* 上传错误日志 */
      this.setState({
        /* 降级UI */ hasError: true,
      });
    }
    render() {
      const { hasError } = this.state;
      return (
        <div>
          {hasError ? <div>组件出现错误</div> : <ErrorTest />}
          <div> hello, my name is alien! </div>
          <Test />
        </div>
      );
    }
  }
  ```

- componentDidCatch 作用：

  - 可以调用 setState 促使组件渲染，并做一些错误拦截功能
  - 监控组件，发生错误，上报错误日志

### 2）static getDerivedStateFromError

- 用 getDerivedStateFromError 代替 componentDidCatch 用于处理渲染异常

- getDerivedStateFromError 是静态方法，内部不能调用 setState

- getDerivedStateFromError 返回的值可以合并到 state，作为渲染使用

```js
class Index extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    const { hasError } = this.state;
    return (
      <div>
        {hasError ? <div>组件出现错误</div> : <ErrorTest />}
        <div> hello, my name is alien! </div>
        <Test />
      </div>
    );
  }
}
```

## 7.key 的合理使用

- 合理的使用 key 有助于能精准的找到用于新节点复用的老节点

  - React diffChild 时间复杂度 O(n^3) 优化到 O(n)

- diff children 流程

### 1）第一步：遍历新 children ，复用 oldFiber

```js
function reconcileChildrenArray() {
  /* 第一步  */
  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
    if (oldFiber.index > newIdx) {
      nextOldFiber = oldFiber;
      oldFiber = null;
    } else {
      nextOldFiber = oldFiber.sibling;
    }
    const newFiber = updateSlot(
      returnFiber,
      oldFiber,
      newChildren[newIdx],
      expirationTime,
    );
    if (newFiber === null) {
      break;
    }
    // ..一些其他逻辑
    if (shouldTrackSideEffects) {
      // shouldTrackSideEffects 为更新流程。
      if (oldFiber && newFiber.alternate === null) {
        /* 找到了与新节点对应的fiber，但是不能复用，那么直接删除老节点 */
        deleteChild(returnFiber, oldFiber);
      }
    }
  }
}
```

- 第一步对于 React.createElement 产生新的 child 组成的数组，首先会遍历数组，因为 fiber 对于同一级兄弟节点是用 sibling 指针指向，所以在遍历 children 遍历，sibling 指针同时移动，找到与 child 对应的 oldFiber
- 然后通过调用 updateSlot ，updateSlot 内部会判断当前的 tag 和 key 是否匹配，如果匹配复用老 fiber 形成新的 fiber ，如果不匹配，返回 null ，此时 newFiber 等于 null
- 如果是处于更新流程，找到与新节点对应的老 fiber ，但是不能复用 alternate === null ，那么会删除老 fiber

### 2）第二步：统一删除 oldfiber

```js
if (newIdx === newChildren.length) {
  deleteRemainingChildren(returnFiber, oldFiber);
  return resultingFirstChild;
}
```

- 第二步适用于以下情况，当第一步结束完 newIdx === newChildren.length 此时证明所有 newChild 已经全部被遍历完，那么剩下没有遍历 oldFiber 也就没有用了，那么调用 deleteRemainingChildren 统一删除剩余 oldFiber

### 3）第三步：统一创建 newFiber

```js
if (oldFiber === null) {
  for (; newIdx < newChildren.length; newIdx++) {
    const newFiber = createChild(
      returnFiber,
      newChildren[newIdx],
      expirationTime,
    );
    // ...
  }
}
```

- 第三步适合如下的情况，当经历过第一步，oldFiber 为 null ， 证明 oldFiber 复用完毕，那么如果还有新的 children ，说明都是新的元素，只需要调用 createChild 创建新的 fiber 。

### 4）第四步：针对发生移动和更复杂的情况

```js
const existingChildren = mapRemainingChildren(returnFiber, oldFiber);
for (; newIdx < newChildren.length; newIdx++) {
  const newFiber = updateFromMap(existingChildren, returnFiber);
  /* 从mapRemainingChildren删掉已经复用oldFiber */
}
```

- mapRemainingChildren 返回一个 map ，map 里存放剩余的老的 fiber 和对应的 key (或 index )的映射关系
- 接下来遍历剩下没有处理的 Children ，通过 updateFromMap ，判断 mapRemainingChildren 中有没有可以复用 oldFiber ，如果有，那么复用，如果没有，新创建一个 newFiber
- 复用的 oldFiber 会从 mapRemainingChildren 删掉

### 5）第五步：删除剩余没有复用的 oldFiber

```js
if (shouldTrackSideEffects) {
  /* 移除没有复用到的oldFiber */
  existingChildren.forEach((child) => deleteChild(returnFiber, child));
}
```

- 最后一步，对于没有复用的 oldFiber ，统一删除处理

## 8.Fiber 调度过程

[iber Scheduler (调度器)](https://www.jianshu.com/p/24431173b2e3)

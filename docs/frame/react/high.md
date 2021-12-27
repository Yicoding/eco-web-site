---
toc: menu
---

# react 进阶

## 1.调度和时间分片

- `GUI 渲染线程`和 `JS 引擎线程`是`相互排斥`的，比如开发者用 js 写了一个遍历大量数据的循环，在执行 js 时候，会`阻塞`浏览器的`渲染绘制`，给用户直观的感受就是`卡顿`

### 1）异步调度

- `v15` 版本，React 对于大型的 React 应用，会存在一次更新，`递归遍历`大量的虚拟 DOM ，造成`占用` js `线程`，使得浏览器没有时间去做一些动画效果，伴随项目越来越大，项目会越来越卡

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

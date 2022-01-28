---
toc: menu
---

# React 面试宝典

![image](images/frame/20.png)

## 1.React 是什么

### 1）四字口诀

- 讲概念、说用途、理思路、优缺点

![image](images/frame/21.png)

- 1.讲概念、说用途：

  - React 是一个网页 UI 框架，通过组件化的方式解决视图层开发复用的问题，本质是一个组件化框架

- 2.理思路：

  - 它的核心设计思路有三点，分别是声明式、组件化与 通用性：

    - 声明式的优势在于直观与组合

    - 组件化的优势在于视图的拆分与模块复用，可以更容易做到高内聚低耦合

    - 通用性在于一次学习，随处编写。比如 React Native，React SSR 等， 这里主要靠虚拟 DOM 来保证实现:

      - React 将 DOM 抽象为虚拟 DOM，开发者并不会直接操作 DOM

      - 正因为有这样一层封装，使得 React 不再局限于 Web 开发，而能走向更宽广的平台，出现更繁荣的生态

- 3.优势：这使得 React 的适用范围变得足够广，无论是 Web、Native、VR，甚至 Shell 应用都可以进行开发

- 4.缺点：作为一个视图层的框架，它并没有提供完整的一揽子解决方案：

  - 在开发大型前端应用时，需要向社区寻找并整合解决方案

  - 虽然一定程度上促进了社区的繁荣，但也为开发者在技术选型和学习适用上造成了一定的成本

- 5.承接在优势后，可以再谈一下自己对于 React 优化的看法、对虚拟 DOM 的看法

- 6.向自己主导过的 React 项目上引导，谈一谈 React 相关的工程架构与设计模式

  - webpack、cra、craco

  - readux、mobx

### 2） 命令式和声明式编程的区别：

- 命令式编程：

  ```js
  // HTML
  <div class="block"></div>;

  // JS
  const block = $('.block');
  block.css('color', 'red');
  ```

- 声明式编程：

  ```js
  const Block = (props) => <div style={{ color: 'red' }}></div>;
  ```

  - 不仅结构上更容易阅读，而且更容易与其他组件代码进行组合

## 2.为什么 React 要用 JSX

### 1）三步走技巧

- 一句话解释、核心概念、方案对比
  ![image](images/frame/22.png)

- 1.解释 jsx：

  - JSX 是一个 JavaScript 的语法扩展，结构类似 XML

  - JSX 主要用于声明 React 元素，但 React 中并不强制使用 JSX

  - 即使使用了 JSX，也会在构建过程中，通过 Babel 插件编译为 React.createElement

  - 所以 JSX 更像是 React.createElement 的一种语法糖

- 2.核心概念：

  - React 团队并不想引入 JavaScript 本身以外的开发体系

  - 而是希望通过合理的关注点分离保持组件开发的纯粹性

- 3.方案对比

  - 1.模板：React 团队认为模板不应该是开发过程中的关注点，因为引入了模板语法、模板指令等概念，是一种不佳的实现方案

  - 2.模板字符串：模板字符串编写的结构会造成多次内部嵌套，使整个结构变得复杂，并且优化代码提示也会变得困难重重

  - 3.JXON：因为代码提示困难的原因而被放弃

- 4.end：所以 React 最后选用了 JSX，因为 JSX 与其设计思想贴合，不需要引入过多新的概念，对编辑器的代码提示也极为友好

### 2）进阶：Babel 插件如何实现 JSX 到 JS 的编译

- Babel 读取代码并解析，生成 AST，再将 AST 传入插件层进行转换，在转换时就可以将 JSX 的结构转换为 React.createElement 的函数

```js
module.exports = function (babel) {
  var t = babel.types;

  return {
    name: 'custom-jsx-plugin',

    visitor: {
      JSXElement(path) {
        var openingElement = path.node.openingElement;

        var tagName = openingElement.name.name;

        var args = [];
        args.push(t.stringLiteral(tagName));
        var attribs = t.nullLiteral();
        args.push(attribs);
        var reactIdentifier = t.identifier('React'); // object

        var createElementIdentifier = t.identifier('createElement');

        var callee = t.memberExpression(
          reactIdentifier,
          createElementIdentifier,
        );

        var callExpression = t.callExpression(callee, args);

        callExpression.arguments = callExpression.arguments.concat(
          path.node.children,
        );

        path.replaceWith(callExpression, path.node);
      },
    },
  };
};
```

## 3. 如何避免生命周期中的坑

![image](images/frame/23.png)

### 1）基于周期的梳理，确认生命周期函数的使用方式

![image](images/frame/24.png)

### 2）基于职责的梳理，确认生命周期函数的适用范围

- 什么情况下会触发重新渲染

  - 函数组件：函数组件任何情况下都会重新渲染。它并没有生命周期，但官方提供了一种方式优化手段，那就是 React.memo

    - React.memo 并不是阻断渲染，而是跳过渲染组件的操作并直接复用最近一次渲染的结果，这与 shouldComponentUpdate 是完全不同的

  - React.Component：如果不实现 shouldComponentUpdate 函数，那么有两种情况触发重新渲染

    - 1.当 state 发生变化时。这个很好理解，是常见的情况

    - 2.当父级组件的 Props 传入时。无论 Props 有没有变化，只要传入就会引发重新渲染

  - React.PureComponent：默认实现了 shouldComponentUpdate 函数。所以仅在 props 与 state 进行浅比较后，确认有变更时才会触发重新渲染

- 渲染中发生报错后会怎样？又该如何处理？

  - 错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI

    ```js
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);

        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI

        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器

        logErrorToMyService(error, errorInfo);
      }

      render() {
        if (this.state.hasError) {
          // 你可以自定义降级后的 UI 并渲染

          return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
      }
    }
    ```

### 3）答题

- 避免生命周期中的坑需要做好两件事

- 不在恰当的时候调用了不该调用的代码

- 在需要调用时，不要忘了调用

- 那么主要有这么 7 种情况容易造成生命周期的坑：

  - 1.getDerivedStateFromProps 容易编写反模式代码，使受控组件与非受控组件区分模糊

  - 2.componentWillMount 在 React 中已被标记弃用，不推荐使用，主要原因是新的异步渲染架构会导致它被多次调用。所以网络请求及事件绑定代码应移至 componentDidMount 中

  - 3.componentWillReceiveProps 同样被标记弃用，被 getDerivedStateFromProps 所取代，主要原因是性能问题

  - 4.shouldComponentUpdate 通过返回 true 或者 false 来确定是否需要触发新的渲染。主要用于性能优化

  - 5.componentWillUpdate 同样是由于新的异步渲染机制，而被标记废弃，不推荐使用，原先的逻辑可结合 getSnapshotBeforeUpdate 与 componentDidUpdate 改造使用

  - 6.如果在 componentWillUnmount 函数中忘记解除事件绑定，取消定时器等清理操作，容易引发 bug

  - 7.如果没有添加错误边界处理，当渲染发生异常时，用户将会看到一个无法操作的白屏，所以一定要添加

### 4）进阶：React 的请求应该放在哪里，为什么

- 对于异步请求，应该放在 componentDidMount 中去操作。从时间顺序来看，除了 componentDidMount 还可以有以下选择：

  - constructor：可以放，但从设计上而言不推荐。constructor 主要用于初始化 state 与函数绑定，并不承载业务逻辑。而且随着类属性的流行，constructor 已经很少使用了

  - componentWillMount：已被标记废弃，在新的异步渲染架构下会触发多次渲染，容易引发 Bug，不利于未来 React 升级后的代码维护

- 所以 React 的请求放在 componentDidMount 里是最好的选择

## 4.类组件与函数组件的区别

![image](images/frame/25.png)

- 从组件的使用方式和表达效果来总结相同点

- 从代码实现、独有特性、具体场景等细分领域描述不同点

### 1）类组件和函数组件的审计思想

- 类组件的根基是 OOP（面向对象编程），所以它有继承、有属性、有内部状态的管理

- 函数组件的根基是 FP，也就是函数式编程。它属于“结构化编程”的一种，与数学函数思想类似。也就是假定输入与输出存在某种特定的映射关系，那么输入一定的情况下，输出必然是确定的

  - 相较于类组件，函数组件更纯粹、简单、易测试

### 2）答题

**1.共同点**

- 组件是 React 可复用的最小代码片段，它们会返回要在页面中渲染的 React 元素。也正因为组件是 React 的最小编码单位，所以无论是函数组件还是类组件，在使用方式和最终呈现效果上都是完全一致的

- 从使用者的角度而言，很难从使用体验上区分两者，而且在现代浏览器中，闭包和类的性能只在极端场景下才会有明显的差别

**2.不同点**

- 它们在开发时的心智模型上却存在巨大的差异。类组件是基于面向对象编程的，它主打的是继承、生命周期等核心概念；而函数组件内核是函数式编程，主打的是 immutable、没有副作用、引用透明等特点

- 之前，在使用场景上，如果存在需要使用生命周期的组件，那么主推类组件；设计模式上，如果需要使用继承，那么主推类组件

- 但现在由于 React Hooks 的推出，生命周期概念的淡出，函数组件可以完全取代类组件

- 其次继承并不是组件最佳的设计模式，官方更推崇“组合优于继承”的设计概念，所以类组件在这方面的优势也在淡出

- 性能优化上，类组件主要依靠 shouldComponentUpdate 阻断渲染来提升性能，而函数组件依靠 React.memo 缓存渲染结果来提升性能

- 从上手程度而言，类组件更容易上手，从未来趋势上看，由于 React Hooks 的推出，函数组件成了社区未来主推的方案

类组件在未来时间切片与并发模式中，由于生命周期带来的复杂度，并不易于优化。而函数组件本身轻量简单，且在 Hooks 的基础上提供了比原先更细粒度的逻辑组织与复用，更能适应 React 的未来发展。

## 5.如何设计 React 组件

- 本质：考察是否了解 React 组件的设计模式

![image](images/frame/26.png)

### 1）React 的组件分类

- 把只作展示、独立运行、不额外增加功能的组件，称为哑组件 或无状态组件 或展示组件 或木偶组件

- 把处理业务逻辑与数据状态的组件称为有状态组件 或灵巧组件 或智能组件

### 2）代理组件

- 代理组件常用于封装常用属性，减少重复代码

  ```js
  import { Button as AntdButton } from from 'antd'

  const Button = props => <AntdButton size="small" type="primary" {...props} />;

  export default Button;
  ```

- 基于 antd 再封装一层的优势：切断了外部组件库的强依赖特性

  - 代理组件隔绝了 Antd，仅仅是一个组件 Props API 层的交互。这一层如若未来需要替换，是可以保证兼容、快速替换的，而不需要在原有的代码库中查找修改

  - 如果要修改基础组件的颜色、大小、间距，代理组件也可以相对优雅地解决，使得这些修改都内聚在当前的 Button 组件中，而非散落在其他地方

### 3）样式组件

- 将样式判断逻辑分离到自身上，面向未来改动的时候会更为友好

```js
import classnames from 'classnames';

const StyleButton = ({ className, primary, isHighLighted, ...props }) => (
  <Button
    type="button"
    className={classnames(
      'btn',
      {
        btnPrimary: primary,

        highLight: isHighLighted,
      },
      className,
    )}
    {...props}
  />
);
```

### 4）答题

- React 组件应从设计与工程实践两个方向进行探讨：

  - 从设计上而言，社区主流分类的方案是展示组件与灵巧组件

    - 展示组件内部没有状态管理，仅仅用于最简单的展示表达。展示组件中最基础的一类组件称作代理组件。代理组件常用于封装常用属性、减少重复代码。很经典的场景就是引入 Antd 的 Button 时，再自己封一层。如果未来需要替换掉 Antd 或者需要在所有的 Button 上添加一个属性，都会非常方便。基于代理组件的思想还可以继续分类，分为样式组件与布局组件两种，分别是将样式与布局内聚在自己组件内部

    - 灵巧组件由于面向业务，其功能更为丰富，复杂性更高，复用度低于展示组件。最经典的灵巧组件是容器组件。在开发中，我们经常会将网络请求与事件处理放在容器组件中进行。容器组件也为组合其他组件预留了一个恰当的空间。还有一类灵巧组件是高阶组件。高阶组件被 React 官方称为 React 中复用组件逻辑的高级技术，它常用于抽取公共业务逻辑或者提供某些公用能力。常用的场景包括检查登录态，或者为埋点提供封装，减少样板代码量。高阶组件可以组合完成链式调用，如果基于装饰器使用，就更为方便了。高阶组件中还有一个经典用法就是反向劫持，通过重写渲染函数的方式实现某些功能，比如场景的页面加载圈等。但高阶组件也有两个缺陷，第一个是静态方法不能被外部直接调用，需要通过向上层组件复制的方式调用，社区有提供解决方案，使用 hoist-non-react-statics 可以解决；第二个是 refs 不能透传，使用 React.forwardRef API 可以解决

  - 从工程实践而言，通过文件夹划分的方式切分代码。常用的分割方式是将页面单独建立一个目录，将复用性略高的 components 建立一个目录，在下面分别建立 basic、container 和 hoc 三类。这样可以保证无法复用的业务逻辑代码尽量留在 Page 中，而可以抽象复用的部分放入 components 中。其中 basic 文件夹放展示组件，由于展示组件本身与业务关联性较低，所以可以使用 Storybook 进行组件的开发管理，提升项目的工程化管理能力

## 6.setState 是同步更新还是异步更新

![image](images/frame/27.png)

- setState 并非真异步，只是看上去像异步。在源码中，通过 isBatchingUpdates 来判断
  setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新

- 那么什么情况下 isBatchingUpdates 会为 true 呢？在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略

- 但在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新

- 一般认为，做异步设计是为了性能优化、减少渲染次数，React 团队还补充了两点：

  - 保持内部一致性。如果将 state 改为同步更新，那尽管 state 的更新是同步的，但是 props 不是

  - 启用并发更新，完成异步渲染

## 7.组件跨层级通信

![image](images/frame/28.png)

### 1）父传子

- 通过 Props 传递 state，让展示组件受控

### 2）子传父

- 1.回调函数：向父级组件传递事件

- 2.实例函数：在父组件中通过 React 的 ref API 获取子组件的实例，然后是通过实例调用子组件的实例函数（不推荐，不符合 React 的设计理念）

### 3）多层级间的数据通信

- 使用 React 的 Context API，最常见的用途是做语言包国际化

- 使用全局变量与事件

  - 全局变量：通过在 Windows 上挂载新对象的方式实现，这种方式一般用于临时存储值，这种值用于计算或者上报，缺点是渲染显示时容易引发错误

  - 全局事件就是使用 document 的自定义事件，因为绑定事件的操作一般会放在组件的 componentDidMount 中，所以一般要求两个组件都已经在页面中加载显示，这就导致了一定的时序依赖。如果加载时机存在差异，那么很有可能导致两者都没能对应响应事件

- 使用状态管理框架，比如 Flux、Redux 及 Mobx：

  - 优点：由于引入了状态管理，使得项目的开发模式与代码结构得以约束

  - 缺点：学习成本相对较高

## 8.React 状态管理框架

![image](images/frame/29.png)

### 1）Flux

- 是一种使用单向数据流的形式来组合 React 组件的应用架构

- Flux 包含了 4 个部分，分别是 Dispatcher、 Store、View、Action。Store 存储了视图层所有的数据，当 Store 变化后会引起 View 层的更新。如果在视图层触发一个 Action，就会使当前的页面数据值发生变化。Action 会被 Dispatcher 进行统一的收发处理，传递给 Store 层，Store 层已经注册过相关 Action 的处理逻辑，处理对应的内部状态变化后，触发 View 层更新

- 优点：单向数据流，解决了 MVC 中数据流向不清的问题，使开发者可以快速了解应用行为。从项目结构上简化了视图层设计，明确了分工，数据与业务逻辑也统一存放管理，使在大型架构的项目中更容易管理、维护代码

### 2）Redux

- 本身是一个 JavaScript 状态容器，提供可预测化状态的管理。社区通常认为 Redux 是 Flux 的一个简化设计版本，但它吸收了 Elm 的架构思想，更像一个混合产物。它提供的状态管理，简化了一些高级特性的实现成本，比如撤销、重做、实时编辑、时间旅行、服务端同构等

- 核心设计包含了三大原则：单一数据源、纯函数 Reducer、State 是只读的

- 处理“副作用”：AJAX 请求等异步工作，或不是纯函数产生的第三方的交互都被认为是 “副作用”

  - 1.在 Dispatch 的时候会有一个 middleware 中间件层，拦截分发的 Action 并添加额外的复杂行为，还可以添加副作用。第一类方案的流行框架有 Redux-thunk、Redux-Promise、Redux-Observable、Redux-Saga 等

    ```js
    // Redux-thunk
    function createThunkMiddleware(extraArgument) {
      return ({ dispatch, getState }) =>
        (next) =>
        (Action) => {
          if (typeof Action === 'function') {
            return Action(dispatch, getState, extraArgument);
          }
          return next(Action);
        };
    }

    const thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;

    export default thunk;
    ```

  - 2.允许 Reducer 层中直接处理副作用，采取该方案的有 React Loop，React Loop 在实现中采用了 Elm 中分形的思想，使代码具备更强的组合能力

- 工程化的方案：rematch 或 dva

- 优点：

  - 结果可预测

  - 代码结构严格易维护

  - 模块分离清晰且小函数结构容易编写单元测试

  - Action 触发的方式，可以在调试器中使用时间回溯，定位问题更简单快捷

  - 单一数据源使服务端同构变得更为容易

  - 社区方案多，生态也更为繁荣

### 3）Mobx

- Mobx 通过监听数据的属性变化，可以直接在数据上更改触发 UI 的渲染

- 在使用上更接近 Vue，Mobx 的响应式实现原理与 Vue 相同：

  - 以 Mobx 5 为分界点，5 以前采用 Object.defineProperty 的方案

  - 5 及以后使用 Proxy 的方案

- 优点：样板代码少、简单粗暴、用户学习快、响应式自动更新数据让开发者的心智负担更低

## 9.Virtual DOM 的工作原理

![image](images/frame/30.png)

### 1）讲概念、说用途

- 工作原理是通过 JS 对象模拟 DOM 的节点。在 Facebook 构建 React 初期时，考虑到要提升代码抽象能力、避免人为的 DOM 操作、降低代码整体风险等因素，所以引入了虚拟 DOM

### 2）理思路

- 实现上通常是 Plain Object，以 React 为例，在 render 函数中写的 JSX 会在 Babel 插件的作用下，编译为 React.createElement 执行 JSX 中的属性参数

  - React.createElement 执行后会返回一个 Plain Object，它会描述自己的 tag 类型、props 属性以及 children 情况等。这些 Plain Object 通过树形结构组成一棵虚拟 DOM 树。当状态发生变更时，将变更前后的虚拟 DOM 树进行差异比较，这个过程称为 diff，生成的结果称为 patch。计算之后，会渲染 Patch 完成对真实 DOM 的操作

### 3）优缺点

- 优点：改善大规模 DOM 操作的性能、规避 XSS 风险、能以较低的成本实现跨平台开发

- 缺点：

  - 内存占用较高，因为需要模拟整个网页的真实 DOM

  - 高性能应用场景存在难以优化的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React

## 10.React 的 diff 算法有何不同

![image](images/frame/31.png)

### 1）什么是 diff 算法

- diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁

### 2）React 的 diff 算法

- 触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历，采用了深度优先遍历算法。但传统的遍历方式，效率较低。为了优化效率，使用了分治的方式。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率

- 树比对：由于网页视图中较少有跨层级节点移动，两株虚拟 DOM 树只对同一层次的节点进行比较

- 组件比对：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中

- 元素比对：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 DOM 剪裁操作

### 3）v16 之后

- 自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点

- 整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点

- React 拥有完整的 Diff 算法策略，且拥有随时中断更新的时间切片能力，在大批量节点更新的极端情况下，拥有更友好的交互体验

### 4）如何根据 React diff 算法原理优化代码

- 根据 diff 算法的设计原则，应尽量避免跨层级节点移动

- 通过设置唯一 key 进行优化，尽量减少组件层级深度

  - 因为过深的层级会加深遍历深度，带来性能问题

- 设置 shouldComponentUpdate 或者 React.pureComponet 减少 diff 次数

## 11.React 的渲染流程

![image](images/frame/32.png)

### 1）协调

- Reconciler 模块以 React 16 为分界线分为两个版本：

  - `Stack Reconciler` 是 React 15 及以前版本的渲染方案，其核心是以递归的方式逐级调度栈中子节点到父节点的渲染。

  - `Fiber Reconciler` 是 React 16 及以后版本的渲染方案，它的核心设计是增量渲染（incremental rendering），也就是将渲染工作分割为多个区块，并将其分散到多个帧中去执行。它的设计初衷是提高 React 在动画、画布及手势等场景下的性能表现

    - 在 React Element 的基础上，通过 createFiberFromElement 函数创建 Fiber 对象。Fiber 不仅包含 React Element，还包含了指向父、子、兄弟节点的属性，保证 Fiber 构成的虚拟 DOM 树成为一个双向链表

    - effect 是指在协调过程中必须执行计算的活动

### 2）答题

- React 的渲染过程大致一致，但协调并不相同，以 React 16 为分界线，分为 Stack Reconciler 和 Fiber Reconciler。这里的协调从狭义上来讲，特指 React 的 diff 算法，广义上来讲，有时候也指 React 的 reconciler 模块，它通常包含了 diff 算法和一些公共逻辑

- 回到 Stack Reconciler 中，Stack Reconciler 的核心调度方式是递归。调度的基本处理单位是事务，它的事务基类是 Transaction，这里的事务是 React 团队从后端开发中加入的概念。在 React 16 以前，挂载主要通过 ReactMount 模块完成，更新通过 ReactUpdate 模块完成，模块之间相互分离，落脚执行点也是事务

- 在 React 16 及以后，协调改为了 Fiber Reconciler。它的调度方式主要有两个特点，第一个是协作式多任务模式，在这个模式下，线程会定时放弃自己的运行权利，交还给主线程，通过 requestIdleCallback 实现。第二个特点是策略优先级，调度任务通过标记 tag 的方式分优先级执行，比如动画，或者标记为 high 的任务可以优先执行。Fiber Reconciler 的基本单位是 Fiber，Fiber 基于过去的 React Element 提供了二次封装，提供了指向父、子、兄弟节点的引用，为 diff 工作的双链表实现提供了基础

- 在新的架构下，整个生命周期被划分为 Render 和 Commit 两个阶段。Render 阶段的执行特点是可中断、可停止、无副作用，主要是通过构造 workInProgress 树计算出 diff。以 current 树为基础，将每个 Fiber 作为一个基本单位，自下而上逐个节点检查并构造 workInProgress 树。这个过程不再是递归，而是基于循环来完成

- 在执行上通过 requestIdleCallback 来调度执行每组任务，每组中的每个计算任务被称为 work，每个 work 完成后确认是否有优先级更高的 work 需要插入，如果有就让位，没有就继续。优先级通常是标记为动画或者 high 的会先处理。每完成一组后，将调度权交回主线程，直到下一次 requestIdleCallback 调用，再继续构建 workInProgress 树

- 在 commit 阶段需要处理 effect 列表，这里的 effect 列表包含了根据 diff 更新 DOM 树、回调生命周期、响应 ref 等

- 但一定要注意，这个阶段是同步执行的，不可中断暂停，所以不要在 componentDidMount、componentDidUpdate、componentWiilUnmount 中去执行重度消耗算力的任务

- 如果只是一般的应用场景，比如管理后台、H5 展示页等，两者性能差距并不大，但在动画、画布及手势等场景下，Stack Reconciler 的设计会占用占主线程，造成卡顿，而 fiber reconciler 的设计则能带来高性能的表现

## 12.React 的渲染异常会造成什么后果

### 1）现象

- 开发模式：代码抛出异常后，能够在页面上直接看见

- 打包发布生产后：如果有 JavaScript 的错误出现在 React 内部渲染层，就会导致整个应用的崩溃。从现象上来看，就是整个界面从页面中被移除掉，也就展现出了所谓的白屏

### 2）预防

- 使用 es2020 可选链操作符（this.state?.fruits.map）

### 3）兜底

- 给关键的 UI 组件添加错误边界

```js
// 用这个高阶组件拦截报错信息，展示统一的错误页面，也就是 ErrorDefaultUI
export const errorBoundary = (WrappedComponent) => {
  return class Wrap extends Component {
    state = {
      hasError: false,
    };
    static getDerivedStateFromError(err) {
      return {
        hasError: true,

        err,
      };
    }
    componentDidCatch(err: Error, info: React.ErrorInfo) {
      console.log(err, info);
    }
    render() {
      return this.state.hasError ? (
        <ErrorDefaultUI error={this.state.error} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
```

```js
// 页面使用
@errorBoundary
export default class UserProfile {}
```

### 4）答题

- React 渲染异常的时候，在没有做任何拦截的情况下，会出现整个页面白屏的现象。它的成型原因是在渲染层出现了 JavaScript 的错误，导致整个应用崩溃。这种错误通常是在 render 中没有控制好空安全，使值取到了空值

- 所以在治理上，从预防与兜底两个角度去处理

- 在预防策略上，引入空安全相关的方案，在做技术选型时，我主要考虑了三个方案：第一个是引入外部函数，比如 Facebook 的 idx 或者 Lodash.get；第二个是引入 Babel 插件，使用 ES 2020 的标准——可选链操作符；第三个是 TypeScript，它在 3.7 版本以后可以直接使用可选链操作符。最后我选择了引入 Babel 插件的方案，因为这个方案外部依赖少，侵入性小，而且团队内没有 TS 的项目

- 在兜底策略上，因为考虑到团队内部和我存在一样的问题，就抽取了兜底的公共高阶组件，封装成了 NPM 包供团队内部使用

## 13.如何分析和调优性能瓶颈

![image](images/frame/34.png)

### 1）FCP（First Contentful Paint），

- 首次绘制内容的耗时。首屏统计的方式一直在变，起初是通过记录 window.performance.timing 中的 domComplete 与 domLoading 的时间差来完成，但这并不具备交互意义，现在通常是记录初次加载并绘制内容的时间

  - loading

  - 骨架屏

  - 服务端渲染路线 SSR

### 2）TTI（Time to Interact）

- 是页面可交互的时间。通常通过记录 window.performance.timing 中的 domInteractive 与 fetchStart 的时间差来完成

  - 核心内容在 React 中同步加载

  - 非核心内容采取异步加载的方式延迟加载

  - 内容中的图片采用懒加载的方式避免占用网络资源

### 3）Page Load

- 页面完全加载时间。通常通过记录 window.performance.timing 中的 loadEventStart 与 fetchStart 的时间差来完成

  - 可以通过异步加载的方式完成

  - 异步加载主要由 Webpack 打包 common chunk 与异步组件的方式完成

### 4）FPS

- 前端页面帧率。通常是在主线程打点完成记录。其原理是 requestAnimationFrame 会在页面重绘前被调用，而 FPS 就是计算两次之间的时间差

  - 在 React 中引起卡顿的主要原因有长列表与重渲染

  - 长列表的解决方案很成熟，直接使用 react-virtualized 或者 react-window 就可以

### 5）静态资源及 API 请求成功率

- 对于静态资源而言，能用 CDN 就用 CDN，可以大幅提升静态资源的成功率

- 如果域名解析失败，就可以采取静态资源域名自动切换的方案；还有一个简单的方案是直接寻求 SRE 的协助

- 如果有运营商对内容做了篡改，推荐使用 HTTPS

## 14.如何避免重复渲染

![image](images/frame/35.png)

- 如何避免重复渲染分为三个步骤：选择优化时机、定位重复渲染的问题、引入解决方案

- 优化时机需要根据当前业务标准与页面性能数据分析，来决定是否有必要。如果卡顿的情况在业务要求范围外，那确实没有必要做；如果有需要，那就进入下一步——定位

- 定位问题首先需要复现问题，通常采用还原用户使用环境的方式进行复现，然后使用 Performance 与 React Profiler 工具进行分析，对照卡顿点与组件重复渲染次数及耗时排查性能问题

- 通常的解决方案是加 PureComponent 或者使用 React.memo 等组件缓存 API，减少重新渲染。但错误的使用方式会使其完全无效，比如在 JSX 的属性中使用箭头函数，或者每次都生成新的对象，那基本就破防了

- 针对这样的情况有三个解决方案：

  - 缓存，通常使用 reselect 缓存函数执行结果，来避免产生新的对象

  - 不可变数据，使用数据 ImmutableJS 或者 immerjs 转换数据结构

  - 手动控制，自己实现 shouldComponentUpdate 函数，但这类方案一般不推荐，因为容易带来意想不到的 Bug，可以作为保底手段使用

## 15.如何提升 React 代码可维护性

![image](images/frame/36.png)

## 16.React Hook 的使用限制有哪些

![image](images/frame/37.png)

- React Hooks 的限制主要有两条：

  - 不要在循环、条件或嵌套函数中调用 Hook

  - 在 React 的函数组件中调用 Hook

- 那为什么会有这样的限制呢？就得从 Hooks 的设计说起。Hooks 的设计初衷是为了改进 React 组件的开发模式。在旧有的开发模式下遇到了三个问题：

  - 组件之间难以复用状态逻辑。过去常见的解决方案是高阶组件、render props 及状态管理框架

  - 复杂的组件变得难以理解。生命周期函数与业务逻辑耦合太深，导致关联部分难以拆分

  - 人和机器都很容易混淆类。常见的有 this 的问题，但在 React 团队中还有类难以优化的问题，他们希望在编译优化层面做出一些改进

- 这三个问题在一定程度上阻碍了 React 的后续发展，所以为了解决这三个问题，Hooks 基于函数组件开始设计。然而第三个问题决定了 Hooks 只支持函数组件

- 那为什么不要在循环、条件或嵌套函数中调用 Hook 呢？因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是`链表`

- 这些限制会在编码上造成一定程度的心智负担，新手可能会写错，为了避免这样的情况，可以引入 ESLint 的 Hooks 检查插件进行预防

## 17.useEffect 与 useLayoutEffect 区别

![image](images/frame/38.png)

### 1）相同点

- 它们的共同点很简单，底层的函数签名是完全一致的，都是调用的 mountEffectImpl，在使用上也没什么差异，基本可以直接替换，也都是用于处理副作用

### 2）不同点

- useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景

- 而 useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。也正因为是同步处理，所以需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞

- 大多数场景下可以直接使用 useEffect，但是如果你的代码引起了页面闪烁，也就是引起了组件突然改变位置、颜色及其他效果等的情况下，就推荐使用 useLayoutEffect 来处理

## 18.React-Router

![image](images/frame/39.png)

- React Router 路由的基础实现原理分为两种，如果是切换 Hash 的方式，那么依靠浏览器 Hash 变化即可；如果是切换网址中的 Path，就要用到 HTML5 History API 中的 pushState、replaceState 等。在使用这个方式时，还需要在服务端完成 historyApiFallback 配置

- 在 React Router 内部主要依靠 history 库完成，这是由 React Router 自己封装的库，为了实现跨平台运行的特性，内部提供两套基础 history，一套是直接使用浏览器的 History API，用于支持 react-router-dom；另一套是基于内存实现的版本，这是自己做的一个数组，用于支持 react-router-native

- React Router 的工作方式可以分为设计模式与关键模块两个部分。从设计模式的角度出发，在架构上通过 Monorepo 进行库的管理。Monorepo 具有团队间透明、迭代便利的优点。其次在整体的数据通信上使用了 Context API 完成上下文传递

- 在关键模块上，主要分为三类组件：第一类是 Context 容器，比如 Router 与 MemoryRouter；第二类是消费者组件，用以匹配路由，主要有 Route、Redirect、Switch 等；第三类是与平台关联的功能组件，比如 Link、NavLink、DeepLinking 等

## 19.React 常用工具库

![image](images/frame/40.png)

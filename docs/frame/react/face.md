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

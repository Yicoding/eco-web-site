---
toc: menu
---

# 微前端

- 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略

- 技术栈无关

  - 主框架不限制接入应用的技术栈，微应用具备完全自主权

- 独立开发、独立部署

  - 微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- 增量升级

  - 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- 独立运行时
  - 每个微应用之间状态隔离，运行时状态不共享

## 1.解决的问题

- 微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于前端，即将 Web 应用由单一的单页面应用转变为多个小型前端应用聚合为一的应用。然后各个前端应用还可以独立运行、独立开发、独立部署

  - 使各子模块或者子系统进行隔离，独立部署和独立打包

  - 能够使各个子系统进行数据分享，例如用户信息

  - 能够对 js、css 等进行相互隔离，防止出现污染

## 2.实现方案

### 1）路由转发

- 使用后端进行路由转发，不同的路径指向不同的系统

  - 技术栈就可以进行隔离，独立开发和部署

  - 如果要分享用户信息等，可以通过 cookie 等技术进行分享

  - 每次路由匹配到的话，都会进行刷新，因此也防止了 JS，css 的污染问题

- 缺点：每次跳转都相当于重新刷新了一次页面，不是页面内进行跳转，影响体验

- 优点： 简单，可快速配置

### 2）iframe 嵌套

- 通过创建一个父程序，在父程序中监听路由的变化，卸载或加载相应的子程序 iframe

  - 因每一个 iframe 就相当于一个单独的页面，所以 iframe 具有天然的 JS 和 css 隔离

  - 在信息共享方面，可以使用 postMessage 或者 contentWindow 的方式进行

- 缺点： iframe 样式兼容问题，包括功能性兼容性以及业务性兼容性的问题，另可能会存在一些安全问题：

  - 主应用劫持快捷键操作
  - 事件无法冒泡顶层，不能冒泡至父程序
  - iframe 内元素会被限制在文档树中，视窗宽高限制问题
  - 无法共享基础库进一步减少包体积
  - 事件通信繁琐且限制多

- 优点：实现起来简单，自带沙盒特性

### 3）web components 开发

- 将每个子应用采用 web components 进行开发。纯 web-components 相当于自定义了一个 html 标签，我们就可以在任何的框架中进行使用此标签

- 缺点：需要对之前的子系统都要进行改造，并且通信方面较为复杂

- 优点： 每个子应用拥有独立的 script 和 css，也可单独部署

### 4）组合应用路由分发

**1.简介**

- 每个子应用单独的打包，部署和运行。父应用基座，基于父应用进行路由管理，全部使用前端进行路由管理

  - 例如：有子应用 A 的路由是/testA，子应用 B 的路由是/testB，那么父应用在监听到/testA 的时候，如果此时处于/testB，那么首先会进行一个子应用 B 的卸载，卸载完成之后，在去加载子应用 A

- 优点：纯前端改造，相比于路由式，无刷新，体验感良好

- 缺点：需要解决样式冲突，JS 污染问题，通信技术等

**2.解决方法**

- 目前的微前端采用的技术方案是组合是应用路由开发，他的缺点是需要自行解决 JS 的沙盒环境、css 的样式重叠或冲突问题、通信技术问题

- 1.css 冲突解决：

  - 类似于 vue 的 scoped。在打包的时候，对 css 选择器加上响应的属性，属性的 key 值是一些不重复的 hash 值，然后在选择的时候，使用属性选择器进行选择

  - 可以自定义前缀。在开发子模块之前，需要确定一个全局唯一的 css 前缀，然后在书写的过程中同一添加此前缀，或在根 root 上添加此前缀，使用 less 或 sass 作用域嵌套即可解

- 2.js 沙盒环境：沙盒环境最主要做的就是一个 js 作用域、属性等的隔离

  - 1）diff 方法：当我们的子页面加载到父类的基座中的时候，我们可以生成一个 map 的散列表。在页面渲染之前，我们先把当前的 window 上的变量等都存储在这个 map 中；当页面卸载的时候，我们在遍历这个 map，将其数据在替换回去

    ```js
    class Sandbox {
      constructor() {
        this.cacheMy = {}; // 存放修改的属性，子类属性
        this.cacheBeforeWindow = {}; //存储父类属性
      }
      showPage() {
        this.cacheBeforeWindow = {};
        //父类存起来，for in 遍历原型链上的属性和方法
        for (const item in window) {
          this.cacheBeforeWindow[item] = window[item];
        }
        //子类放上去
        Object.keys(this.cacheMy).forEach((p) => {
          window[p] = this.cacheMy[p];
        });
      }

      hidePage() {
        for (const item in window) {
          if (this.cacheBeforeWindow[item] !== window[item]) {
            this.cacheMy[item] = window[item]; // 记录变更
            window[item] = this.cacheBeforeWindow[item]; // 还原window
          }
        }
      }
    }

    const diffSandbox = new Sandbox();
    // 模拟页面激活
    diffSandbox.showPage(); // 激活沙箱
    window.info = '我是子应用';
    console.log('页面激活，子应用对应的值', window.info);
    // 模拟页面卸载
    diffSandbox.hidePage();
    console.log('页面卸载后，子应用的对应的值', window.info);
    // 模拟页面激活
    diffSandbox.showPage(); // 重新激活
    console.log('页面激活，子应用对应的值', window.info);
    ```

  - 2）使用代理的形式：使用 proxy 监听 get 和 set 方法，针对当前路由进行 window 的属性或方法的存取

    ```js
    const windowMap = new Map();
    const resertWindow = {};

    let routerUrl = ''; //地址栏目
    const handler = {
      get: function (obj, prop) {
        const tempWindow = windowMap.get(routerUrl);
        return tempWindow[prop];
      },
      set: function (obj, prop, value) {
        if (!windowMap.has(routerUrl)) {
          windowMap.set(routerUrl, JSON.parse(JSON.stringify(resertWindow)));
        }
        const tempWindow = windowMap.get(routerUrl);
        tempWindow[prop] = value;
      },
    };

    let proxyWindow = new Proxy(resertWindow, handler);
    // 首先是父类的啊属性.
    proxyWindow.a = '我是父类的a属性的值';

    // 改变路由到子类
    routerUrl = 'routeA';
    proxyWindow.a = '我是routerA的a属性的值';

    // 改变路由到父类
    routerUrl = '';
    console.log(proxyWindow.a); //'我是父类的a属性的值'

    // 改变路由到子类
    routerUrl = 'routeA';
    console.log(proxyWindow.a); //'我是routerA的a属性的值'
    ```

## 3.single-spa

### 1）原理

- Single-spa 是一个子应用生命周期的调度者，为应用定义了 bootstrap、load、mount、unmount 四个生命周期回调

- 浏览器首次打开父类应用时候：

  - 首先调用 registerApplication 注册子 app
  - 访问路径时，父类应用判断当前的路由是属于哪一个子应用的，判断依据是 apps 中的 activeWhen 配置
  - 将当前的子应用划分状态，appToLoad、appToUnmounted、appToMounted
  - 根据子应用的状态，先去执行需要卸载的子应用，卸载完成之后，就会去执行状态为 appToLoad、appToMounted 的子应用，最后执行相应的回调函数（即子应用中注册的那些生命周期）

![image](images/other/2.png)

### 2）和 qiankun 的区别

- 组合式应用路由分发分为两种解决方案，一种是 JS entry，另外一种是 html entry

  - JS Entry 的方式通常是子应用将资源打成一个 entry script，但这个方案的限制也颇多，如要求子应用的所有资源打包到一个 js bundle 里，包括 css、图片等资源。除了打出来的包可能体积庞大之外的问题之外，资源的并行加载等特性也无法利用上
  - HTML Entry 则更加灵活，直接将子应用打出来 HTML 作为入口，主框架可以通过 fetch html 的方式获取子应用的静态资源，同时将 HTML document 作为子节点塞到主框架的容器中。这样不仅可以极大的减少主应用的接入成本，子应用的开发方式及打包方式基本上也不需要调整，而且可以天然的解决子应用之间样式隔离的问题

- qiankun 基于 single-spa，在 single-spa 上做了改造，使得接入更加方便：

  - 相比于 single-spa，qiankun 他解决了 JS 沙盒环境，不需要我们自己去进行处理。在 single-spa 的开发过程中，我们需要自己手动的去写调用子应用 JS 的方法（如上面的 createScript 方法），而 qiankun 不需要，乾坤只需要你传入响应的 apps 的配置即可，会帮助我们去加载
  - qiankun 在 JS Entry 基础上使用 HTML Entry，single-spa 使用 JS Entry

## 4.qiankun

- 在 [single-spa](https://zh-hans.single-spa.js.org/) 基础上添加更多的功能。以下是 [qiankun](https://qiankun.umijs.org/zh) 提供的特性：

  - 实现了子应用的加载，在原有 single-spa 的 JS Entry 基础上再提供了 HTML Entry
  - 样式和 JS 隔离：
    - CSS 样式隔离，主要有 Shadow DOM 和 Scoped CSS 两种方案；实现沙箱
    - JS 隔离，主要对 window 对象、各种 listeners 和方法进行隔离
  - 更多的生命周期：beforeMount, afterMount, beforeUnmount, afterUnmount
  - 子应用预加载：提前下载 HTML、CSS、JS，并有三种策略
  - 全局状态管理：类似 Redux，Event Bus
  - 全局错误处理：主要监听 error 和 unhandledrejection 两个事件

## 5.微前端实现方式对比

### 1）优势

- 技术栈无关
- 主框架不限制介入应用的技术栈，微应用具备完全自主权
- 独立开发、独立部署
- 增量升级
- 微前端是一种非常好的实现渐进式重构的手段和策略
- 微应用仓库独立，前后端可独立开发，主框架自动完成同步更新
- 独立运行
- 每个微应用之间状态隔离，运行时状态不共享

### 2）劣势

- 接入难度较高
- 应用场景移动端少，管理端多

## 6.Iframe

### 1）优势

- 技术成熟
- 支持页面嵌入
- 天然支持运行沙箱隔离，独立运行

### 2）劣势

- 1.url 不同步：

  - 浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用

- 2.UI 不同步，DOM 结构不共享：

  - 想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..

- 3.全局上下文完全隔离，内存变量不共享：

  - iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果

- 4.慢： -每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程

## 7.web component

### 1）优势

- 支持自定义元素
- 支持 shadow dom,并可通过关联进行控制
- 支持模板 template 和插槽 slot,引入自定义组件内容

### 2）劣势

- 接入微前端需要重写当前项目
- 生态系统不完善，技术过新容易出现兼容性问题
- 整体框架设计复杂，组件与组件之间拆分过细时，容易造成通讯和控制繁琐

## 8.自研框架

### 1）优势

- 高度定制化，满足需要做兼容的一切场景
- 独立的通信机制和沙箱运行环境，可解决应用之间相互影响的问题
- 支持不同技术栈子应用，可无缝实现页面无刷新渲染

### 2）劣势

- 技术实现难道较高
- 需要设计一套定制的通信机制
- 首页加载会出现资源过大情况

### 3）实现方式

- 路由分发式
- 主应用控制路由匹配和子应用加载，共享依赖加载
- 子应用做功能，去接入主应用实现主子控制和联动

---
toc: menu
---

# react-router

## 1.单页面应用

- 单页面应用是使用一个 html 前提下，一次性加载 js ， css 等资源，所有页面都在一个容器页面下，页面切换`实质`是`组件的切换`

## 2.history ,React-router , React-router-dom 三者关系

![image](images/frame/4.png)

- `history：` history 是整个 React-router 的核心，里面包括两种路由模式下改变路由的方法，和监听路由变化方法等
- `react-router`：React-router 在 history 核心基础上，增加了 `Router` 、`Switch` 、`Route` 等组件来处理视图渲染
- r`eact-router-dom`： 在 react-router 基础上，增加了一些 UI 层面的拓展比如 `Link` 、`NavLink` 以及两种模式的根部路由 `BrowserRouter` 、`HashRouter`

## 3.两种路由主要方式

- `history` 模式：http://www.xxx.com/home

  ```js
  import { BrowserRouter as Router } from 'react-router-dom';
  function Index() {
    return <Router>{/* ...开启history模式 */}</Router>;
  }
  ```

- `hash` 模式： http://www.xxx.com/#/home

  ```js
  import { HashRouter as Router } from 'react-router-dom';
  function Index() {
    return <Router>{/* ...开启hash模式 */}</Router>;
  }
  ```

## 4.BrowserRouter / HashRouter 原理

- React-Router-dom 根据 history 提供的 createBrowserHistory 或者 createHashHistory `创建`出不同的 `history 对象`

  ```js
  import { createBrowserHistory as createHistory } from 'history';
  class BrowserRouter extends React.Component {
    history = createHistory(this.props);
    render() {
      return <Router history={this.history} children={this.props.children} />;
    }
  }
  ```

- 通过 createBrowserHistory 创建一个 history 对象，并`传递给 Router` 组件

## 5.BrowserHistory 路由原理

### 1）改变路由

- 通过调用 api 实现的路由跳转

- React 中调用 history.push 改变路由，`本质`上是调用 `window`.history.pushState 方法

**1.history.pushState(state, title, path)**

- 1.`state`：一个与指定网址相关的状态对象， popstate 事件触发时，该对象会传入回调函数。如果不需要可填 null
- 2.`title`：新页面的标题，但是所有浏览器目前都忽略这个值，可填 null
- 3.`path`：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个地址

**2.history.replaceState(state, title, path)**

- 这个方法会`修改`当前的 history 对象记录， 但是 history.length 的`长度不会改变`

### 2）监听路由 popstate

```js
window.addEventListener('popstate', function (e) {
  /* 监听改变 */
});
```

- 同一个文档的 history 对象出现变化时，就会触发 popstate 事件
- history.pushState 可以使浏览器地址改变，但是无需刷新页面
- 注意：用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件
- popstate 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮或者调用 history.back()、history.forward()、history.go()方法

### 3）总结

- BrowserHistory 模式下的 history 库就是基于上面改变路由，`监听路由的方法进行封装处理，最后形成 history 对象，并传递给 Router`

## 6.HashHistory 路由原理

- 哈希路由原理和 history 相似

### 1）改变路由 window.location.hash

- 通过 window.location.hash 属性获取和设置 hash 值
- 切换路由，本质上是改变 window.location.hash

### 2）监听路由 onhashchange

```js
window.addEventListener('hashchange', function (e) {
  /* 监听改变 */
});
```

- hash 路由模式下，监听路由变化用的是 `hashchange`

## 7.React-Router 基本构成

### 1）history，location，match

- `history` 对象：history 对象保存改变路由方法 `push` ，`replace`，和监听路由方法 `listen` 等
- `location` 对象：可以理解为当前状态下的路由信息，包括 `pathname` ，`state` 等
- `match` 对象：这个用来证明当前路由的匹配信息的对象。存放当前路由 path 等信息

### 2）路由组件

**①Router**

- Router 是整个应用路由的`传递者`和`派发更新者`

- `BrowserRouter` 或 `HashRouter` 是`不同模式`下向容器 Router 中`注入不同`的 `history 对象`

![image](images/frame/5.png)

```js
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    this.unlisten = props.history.listen((location) => {
      /* 当路由发生变化，派发更新 */
      this.setState({ location });
    });
  }
  /* .... */
  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children || null}
        value={{
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext,
        }}
      />
    );
  }
}
```

- 首先 React-Router 是通过 `context` 上下文方式传递的路由信息。context 改变，会使消费 context 组件更新，当开发者触发路由改变，能够重新渲染匹配组件
- `props.history` 是通过 BrowserRouter 或 HashRouter 创建的 history 对象，并传递过来的，当`路由改变`，会触发 `listen` 方法，传递新生成的 location ，然后通过 setState 来改变 context 中的 value ，所以改变路由，`本质`上是 `location 改变带来的更新作用`

**②Route**

- Route 是整个路由核心部分: `匹配路由`，`路由匹配`，`渲染组件`

- 整个路由状态是用 `context` 传递的，通过 RouterContext.`Consumer` 来获取上一级传递来的路由进行路由匹配

  - 如果`匹配`，`渲染`子代路由
  - 利用 context 逐层传递的特点，将自己的路由信息，向子代路由传递下去,实现了嵌套路由

- 四种 Route 编写格式:

```js
function Index() {
  const mes = { name: 'alien', say: 'let us learn React!' };
  return (
    <div>
      <Switch>
        {/* 1.Route Component形式 */}
        <Route path="/router/component" component={RouteComponent} />

        {/* 2.Render形式 */}
        <Route
          path="/router/render"
          render={(props) => <RouterRender {...props} />}
          {...mes}
        />

        {/* 3.chilren形式 */}
        <Route path="/router/children">
          {' '}
          <RouterChildren {...mes} />
        </Route>

        {/* 4.renderProps形式 */}
        <Route path="/router/renderProps">
          {(props) => <RouterRenderProps {...props} {...mes} />}{' '}
        </Route>
      </Switch>
    </div>
  );
}
```

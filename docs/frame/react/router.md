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
- `react-router-dom`： 在 react-router 基础上，增加了一些 UI 层面的拓展比如 `Link` 、`NavLink` 以及两种模式的根部路由 `BrowserRouter` 、`HashRouter`

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

- `非浏览器模式`：在非浏览器环境，使用抽象路由实现导航的记录功能
  - react-router 的 `memoryHistory`
  - vue-router 的 abstract 封装

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

- 特点

  - url `无#`，美观，服务器可接收到路径和参数变化，`需服务器适配`
  - 基于`浏览器`的 `history` 对象实现，主要为 history.`pushState` 和 history.`replaceState` 来进行路由控制。通过这两个方法，可以实现改变 url 且`不向服务器发送请求`

- 修改

  - 点击后退/前进触发 popstate 事件，监听进行页面更新
  - 调用 history.pushState 或 history.replaceState 触发相应的函数后，在后面手动添加回调更新页面

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

- 特点：
  - url 中带有一个`#`符号，但是#只是浏览器端/客户端的状态，`不会传递给服务端`
  - `hash 值的更改，不会导致页面的刷新`
  - hash 值的更改，会在浏览器的访问`历史中添加一条记录`。所以我们才可以通过浏览器的`返回、前进按钮来控制 hash 的切换`

### 1）改变路由 window.location.hash

- 通过 window.location.hash 属性获取和设置 hash 值: location.hash='#aaa'
- 切换路由，本质上是改变 window.location.hash

### 2）监听路由 onhashchange

```js
window.addEventListener('hashchange', function (e) {
  /* 监听改变 */
});
```

- hash 路由模式下，监听路由变化用的是 `hashchange`

## 7.history、location、match

- `history` 对象：history 对象保存改变路由方法 `push` ，`replace`，和监听路由方法 `listen` 等
- `location` 对象：可以理解为当前状态下的路由信息，包括 `pathname` ，`state` 等
- `match` 对象：这个用来证明当前路由的匹配信息的对象。存放当前路由 path 等信息

## 8.路由组件

### 1）Router

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

### 2）Route

- Route 是整个路由核心部分: `匹配路由`，`路由匹配`，`渲染组件`

- 整个路由状态是用 `context` 传递的，通过 RouterContext.`Consumer` 来获取上一级传递来的路由进行路由匹配

  - 如果`匹配`，`渲染`子代路由
  - 利用 context 逐层传递的特点，将自己的路由信息，向子代路由传递下去,实现了嵌套路由

- `path` 属性：Route 接受 path 属性，用于匹配正确的理由，渲染组件

**四种 Route 编写格式:**

- `Component 形式`：将组件直接传递给 Route 的 component 属性，Route 可以将路由信息隐式注入到页面组件的 props 中，但是无法传递父组件中的信息，比如如上 mes
- `render 形式`：Route 组件的 render 属性，可以接受一个渲染函数，函数参数就是路由信息，可以传递给页面组件，还可以混入父组件信息
- `children 形式`：直接作为 children 属性来渲染子组件，但是这样无法直接向子组件传递路由信息，但是可以混入父组件信息
- `renderProps 形式`：可以将 childen 作为渲染函数执行，可以传递路由信息，也可以传递父组件信息

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

### 3）exact

- `route` 进行`精确匹配`

- `pathname` 必须`和` Route 的 `path 完全匹配`，才能展示该路由信息

  ```js
  <Route path="/router/component" exact component={RouteComponent} />
  ```

  - 表示该路由页面只有 `/router/component` 这个格式`才能渲染`，如果 `/router/component/a` 那么会被判定不匹配，从而导致`渲染失败`

  - 只要当前路由下有`嵌套子路由`，就`不要`加 `exact`

- 优雅写法(配置形式):
  - `react-router-config` 库中提供的 `renderRoutes` ，更优雅的渲染 Route

```js
import { renderRoutes } from 'react-router-config';

const RouteList = [
  {
    name: '首页',
    path: '/router/home',
    exact: true,
    component: Home,
  },
  {
    name: '列表页',
    path: '/router/list',
    render: () => <List />,
  },
  {
    name: '详情页',
    path: '/router/detail',
    component: detail,
  },
];
function Index() {
  return <div>{renderRoutes(RouteList)}</div>;
}
```

### 4）Switch

```js
<div>
  <Route path="/home" component={Home} />
  <Route path="/list" component={List} />
  <Route path="/my" component={My} />
</div>
```

- 如果在页面中这么写，三个路由`都会被挂载`，但是每个页面路由展示与否，是通过 Route 内部 `location` 信息匹配的(性能浪费)

- `Switch` 作用是先通过匹配`选出一个`正确路由 `Route` 进行`渲染`
- `Switch` 作用就是`匹配唯一正确的路由并渲染`

```js
<Switch>
  <Route path="/home" component={Home} />
  <Route path="/list" component={List} />
  <Route path="/my" component={My} />
</Switch>
```

### 5）Redirect

- `重定向`组件，`Redirect` 可以在`路由不匹配情况`下跳转指定某一路由，适合`路由不匹配`或`权限路由`的情况

- `Switch` 包裹的 `Redirect` 要放在`最下面`，`否则`会被 Switch 优先渲染 Redirect ，导致路由页面`无法展示`

- 1.路由不匹配

```js
<Switch>
  <Route path="/router/home" component={Home} />
  <Route path="/router/list" component={List} />
  <Redirect from={'/router/*'} to={'/router/home'} />
</Switch>
```

- 2.权限路由

```js
noPermission ? (
  <Redirect from={'/router/list'} to={'/router/home'} />
) : (
  <Route path="/router/list" component={List} />
);
```

## 9.从路由改变到页面跳转流程图

![image](images/frame/6.png)

## 10.路由状态获取

- 都是从保存的上下文中获取的路由信息，所以要保证想要获取路由信息的页面，都在根部 Router 内部

### 1）路由组件 props

- 可以通过 props 方式向 Children 子组件中传递路由状态信息（ histroy ，loaction ）等

```js
class Home extends React.Component {
  render() {
    return (
      <div>
        <Children {...this.props} />
      </div>
    );
  }
}
```

### 2）withRouter

- 对于距离路由组件比较远的深层次组件，通常可以用 react-router 提供的 `withRouter 高阶组件`方式获取 histroy ，loaction 等信息

```js
import { withRouter } from 'react-router-dom';
@withRouter
class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.history);
  }
  render() {
    return <div>{/* ....*/}</div>;
  }
}
```

### 3）useHistory 和 useLocation

- 对于`函数组件`，可以用 React-router 提供的自定义 `hooks` 中的 `useHistory` 获取 `history` 对象，用 `useLocation` 获取 `location` 对象

```js
import { useHistory, useLocation } from 'react-router-dom';
function Home() {
  const history = useHistory(); /* 获取history信息 */
  const useLocation = useLocation(); /* 获取location信息 */
}
```

## 11.路由带参数跳转

### 1）路由跳转

- 路由跳转有`声明式路由`和`函数式路由`两种

- `声明式路由`：

  - `<NavLink to='/home' />` ，利用 react-router-dom 里面的 `Link` 或者 `NavLink`

- `函数式路由`：

  - `histor.push('/home')`

### 2）参数传递

**1.url 拼接**

- 不推荐

```js
const name = 'Bob';
const mes = 'let us learn React!';
history.push(`/home?name=${name}&mes=${mes}`);
```

**2.state 路由状态**

- `传入`

```js
const name = 'Bob';
const mes = 'let us learn React!';
history.push({
  pathname: '/home',
  state: {
    name,
    mes,
  },
});
```

- `获取`

```js
const { state = {} } = this.prop.location;
const { name, mes } = state;
```

### 3）动态路径参数路由

- 路由中参数可以作为`路径`

```js
<Route path="/post/:id" />
```

- `:id` 就是动态的`路径参数`

- 跳转：

```js
history.push('/post/' + id);
```

## 12.嵌套路由

- 路由组件下面，还存在`子路由`的情况

- 嵌套路由中的子路由一定要跟随父路由

```js
// 父路由
function Index() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/list" component={List} />
    </Switch>
  );
}

// 嵌套的路由
function Home() {
  return (
    <div>
      <Route path="/home/test" component={Test} />
      <Route path="/home/test1" component={Test1} />
    </div>
  );
}
```

## 13.路由拓展

- 可以对路由进行一些功能性的拓展
- 比如可以实现自`定义路由`，或者用 `HOC` 做一些`拦截`、`监听`等操作

```js
// 自定义路由
function CustomRouter(props) {
  const permissionList = useContext(permissionContext); /* 获取权限列表 */
  const haspermission = matchPermission(
    permissionList,
    props.path,
  ); /* 检查是否具有权限 */
  return haspermission ? <Route {...props} /> : <Redirect to="/noPermission" />;
}

// 使用
<CustomRouter path="/list" component={List} />;
```

## 14.react-router-dom 使用

- `Link`：封装的专属 a 标签，用于路由跳转，类似于 router-link
  - `to`：字符串或者位置对象（包含路径名，search，hash 和 state 的组合）
- `Switch`：匹配多个路由选择其一组件，从前往后，匹配成功，将 route 克隆返回
- `Route`：路由组件，类似于 router-view
  - `path`：字符串，描述路由匹配的路径名类型
  - `component`：一个 React 组件。当带有 component  参数的的路由匹配时，路由将返回一个新元素，其类型是一个 React component （使用 React.createElement 创建）
  - `render`：一个返回 React 元素的函数，它将在 path 匹配时被调用。这与 component 类似，应用于内联渲染和更多参数传递
  - `children`：一个返回 React 元素的函数，无论路由的路径是否与当前位置相匹配，都将始终被渲染
  - `exact`属性：指定 path 是否需要绝对匹配才会跳转
- `BrowserRouter`：histroy 路由组件
- `HashRouter`：hash 路由组件
- `withRouter`：高阶函数，使用后可使用注入的 context 对象上的属性

## 15.路由守卫

- react-router-dom 使用 `Prompt` 和 `getUserConfirmation` 函数实现路由守卫

```js
// Home组件
import React from 'react';
import { Prompt } from 'react-router';
export default function Home({ location, history }) {
  const [message, setMessage] = useState('');
  return (
    <>
      <div
        onClick={() =>
          history.push({
            pathname: '/about',
            state: { state: 12 },
          })
        }
      >
        Home
        {/* 确定继续跳转路由，取消不跳转 */}
        <Prompt message={'是否跳转'} when={!!message} />
      </div>
      <span onClick={() => setMessage(Math.random())}>修改了{message}</span>
    </>
  );
}

// App.js组件
// 使用子定义函数处理实现路由守卫，定义后，不会弹alert框
// getUserConfirmation函数使用在history.js中
const getUserConfirmation = (msg, callback) => {
  console.log(msg); // Home中Prompt的message值
  callback(true); // 跳转路由
};
ReactDOM.render(
  <BrowserRouter getUserConfirmation={getUserConfirmation}>
    <App>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
);
```

## 16.v6 版本

- 废弃 `Switch` 组件，由 `Routes` 代替（使用了智能匹配路径算法）
- 废弃 `Redirect` 组件，由 `Navigate` 代替
- 废弃 `useHistory` 方法，由 `useNavigate` 代替
- `Route` 组件移除原有 `component` 及 `render` 属性，统一通过 `element` 属性传递：`<Route element={<Home />}>`
- `Route` 组件支持嵌套写法（v3 版本用法回归）
- `Route` 组件的 `path` 规则变更，`不再支持类正则写法`
- 消除了 `v5` 版本中`带后斜杠`的路径时，Link 组件的跳转模糊的问题
- `Link` 组件支持自动携带当前父路由，以及相对路径写法`../home`
- 新增 `useRoutes` 方法，代替之前的`react-router-config`写法，同样支持嵌套
- 其他一些 API `名称变更`

## 17.使用 react-router-dom v6 版

### 1）

```js
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Root from './pages/root';
import Home from './pages/home';
import Detail from './pages/detail';

const Routers = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </HashRouter>
);

export default Routers;
```

---
toc: menu
---

# 小程序基础

## 1.简介

灰度更新和线上版本回退功能：按客户等维度发布

- 双线程架构：视图线程和逻辑线程，两线程通过 WeixinJSBridge 与 native 通信

- WXS(视图线程，不能调用 js\WXML\WXSS\js(setData),初始化数据使用 setData，后续不于后台交互使用 wxs

- 视图组件和原生组件：原生组件放在视图组件上方

## 2.web-view 组件

- 限定企业账户使用，需设置业务域名，域名下的 h5 页面才可正常使用

- web-view 组件和小程序隔离，只能通过 url 传递参数

- 无法使用原生组件覆盖，使用 js-sdk 在 H5 页面实现功能

### 3.判断是否在小程序环境

- js-sdk

- localStorage 塞入取出变量

- 判断 user-agent

## 4.鉴权方式

- HTTP Basic Authentication

- session-cookie（后端/灰度）

- token(JWT)

- OAuth（一键登录）

wx.login\wx.checkSession\wx.request

## 5.h5 与小程序通信

- h5：postMessage 发送消息

- 小程序：wx.miniProgram.postMessage 获取信息

## 6.三种状态

访客态、游客态、会员态

- 访客态：未授权用户信息，未静默登录

- 游客态：授权用户信息，进行静默登录

- 会员态：授权手机号或使用账号密码登录，使用手机号进行账号关联

## 7.静默登录

### 1）登录流程

- 利用小程序登录机制，实现静默登录，对客户无感

![image](images/frame/18.png)

- 小程序：调用 wx.login() 获取临时登录凭证 code ，并回传到开发者服务器

  - code 有效率期 5min，短时间内多次获取 code 值不变，有缓存

- 小程序：使用 wx.request 调用开发者服务器接口，上送 code 值

- 开发者服务器：调用 auth.code2Session 接口进行登录请求，获取 用户唯一标识 OpenID 、 用户在微信开放平台帐号下的唯一标识 UnionID（若当前小程序已绑定到微信开放平台帐号） 和 会话密钥 session_key

  - 登录凭证校验接口：https://api.weixin.qq.com/sns/jscode2session

  - 上送：code + appid + appSecret

  - 接收：openid + session_key + unionid

  - 会话密钥 session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥，code 登录后会失效

- 开发者服务器：使用 openid + unionid + session_key 建立登录态，使用 token 鉴权或 session 鉴权，返回 token 或者 sessionid

- 小程序：将鉴权信息 token 或 sessionid 存入 storage 中，后续调用接口时携带鉴权信息

- 开发者服务器：根据上送鉴权信息，校验成功后，回传数据

### 2）api 解析

- openid

  - 客户在某一应用下的唯一标识：同一平台，不同应用，编号不同

  - 通过后台调用 auth.code2Session 登录凭证校验接口获取

- unionid

  - 客户在同一个微信开放平台下的唯一标识：同一平台，不同应用，编号相同
  - 当前小程序已绑定到微信开放平台帐号可通过后台调用 auth.code2Session 接口获取
    - 前期通过 getUseInfo 获取，目前可通过 wx.login 获取，接口隔离

- wx.getUserInfo

  - 存量：获取用户信息，获取 unionid

  - 现状：匿名头像昵称、默认性别地区、加密后的身份认证

- wx.getUserProfile

  - 弹出个人信息授权弹框

  - 成功后获取用户信息、调用失败

- wx.login

  - 获取 code

  - 获取 unionid

### 3）超时处理

- 小程序到开发服务器认证超时：校验 sessionkey，重新进行登录或重新发起请求

- 开发者服务器到 wx 服务器认证超时：重新发起请求

- 小程序到开发者服务器登录后交易超时：重新发送请求即可

## 8.用户登录

- 操作具体业务，需要会员及用户体系时，添加用户登录流程，弹出登录弹框，通常使用微信一键登录或账号密码登录两种方式，一般使用手机号进行用户体系关联

  - 微信一键登录：提示用户授权手机号使用，getPhoneNumber

    - 授权使用手机号，则用手机号进行账号关联绑定，进行登录操作

    - 未授权使用手机号，登录失败，跳转至登录弹框

  - 账号密码登录：使用账号和密码认证登录

    - 登录成功后，进行账号关联绑定

    - 登录失败返回登录弹框

## 9.小程序生命周期

### 1）应用周期

- onLaunch 首次打开

- onShow 初始化完成

- onHide 切换

### 2）页面周期

- onLoad 加载页面

- onShow 前后台切换

- onHide 前后台切换

- onReady 页面首次渲染完毕时执行

- onUnLoad 重定向 / 路由切换

- onPullDownRefresh 下拉

- onReachBottom 上拉

- onShareAppMessage 分享

### 3）组件生命周期

```js
Component({
  behaviors: [],
  properties: {},
  data: {},
  lifetimes: {},
  pageLifetimes: {},
  methods: {},
});
```

**1.lifetimes**

- 用于定义组件自身的生命周期函数

| 生命周期 | 描述                                     |
| :------- | ---------------------------------------- |
| created  | 在组件实例刚刚被创建时执行               |
| attached | 在组件实例进入页面节点树时执行           |
| ready    | 在组件在视图层布局完成后执行             |
| moved    | 在组件实例被移动到节点树另一个位置时执行 |
| detached | 在组件实例被从页面节点树移除时执行       |
| error    | 每当组件方法抛出错误时执行               |

**2.pageLifetimes**

- 组件所在页面的生命周期

| 生命周期 | 描述                         |
| :------- | ---------------------------- |
| show     | 组件所在的页面被展示时执行   |
| hide     | 组件所在的页面被隐藏时执行   |
| resize   | 组件所在的页面尺寸变化时执行 |

## 10.注意事项

- 1.在一次渲染周期内，收到多次 setData 的话，只会渲染一次

  - jscore -> native ->web view

- 2.如何优化小程序数据通信，提升页面性能

  - 减少 setData 的调用，合并多个 setData

  - 与界面渲染无关的数据最好不要设置在 data

## 11.小程序优势

- 无需下载安装，直接使用，运行速度快

## 12.小程序页面构成

- index.js(js 交互逻辑)

- index.json(页面配置)

- index.wxml(html)

- index.wxss(样式)

## 13.小程序与 H5 的区别

- 1.运行环境：H5 的宿主环境是浏览器，小程序基于浏览器内核重构的内置解析器，无 dom、bom 对象

- 2.系统权限：小程序能获得更多的系统权限

- 3.渲染机制：小程序逻辑层和渲染层是分开的，而 H5 页面 UI 渲染和 js 执行都是一个线程，会出现阻塞

## 14.小程序运行机制

- 1.热启动：用户已经打开某小程序，然后在一定时间内再次打开该小程序，此时无需重启启动，只需将后台的小程序切换到前台

- 2.冷启动：用户首次打开小程序或被微信主动销毁后再次打开，小程序重新加载启动

- 3.销毁：只有当小程序进入后一定时间，或者系统占用资源过高，才会被真正销毁

## 15.不能打开超过 10 个层级的页面

## 16.小程序传值

- 给 HTML 元素添加 `data-*`属性来传递我们需要的值，然后通过 `e.currentTarget.dataset` 或 `onload的 param` 参数获取。但 `data-` 名称不能有大写字母和不可以存放对象

## 17.小程序的 wxss 和 css 有哪些不一样的地方？

- wxss 的图片引入需使用外链地址

- 没有 Body；样式可直接使用 import 导入

## 18.下拉刷新

- json 中配置 enablePullDownRefresh: true

- Page 中定义 onPullDownRefresh 钩子函数

- 调用 wx.stopPullDownRefresh 停止下拉刷新

## 19.阻止冒泡

- 事件前加 catch

## 20.小程序页面间传递数据的方法

### 1）globalData

- 在 app.js 文件中定义全局变量 globalData， 将需要存储的信息存放在里面

### 2）url 传递

- 使用 wx.navigateTo 与 wx.redirectTo 的时候，可以将部分数据放在 url 里面，并在新页面 onLoad 的时候初始化

### 3）本地缓存

- wx.setStorage

- wx.getStorage

### 4）mobx

- mobx-miniprogram

**1.注册**

```js
// store.js
import { observable, action } from 'mobx-miniprogram';

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,

  // 计算属性
  get sum() {
    return this.numA + this.numB;
  },

  // actions
  update: action(function () {
    const sum = this.sum;
    this.numA = this.numB;
    this.numB = sum;
  }),
});
```

**2.Component 中使用**

```js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings';
import { store } from './store';

Component({
  behaviors: [storeBindingsBehavior],
  data: {
    someData: '...',
  },
  storeBindings: {
    store,
    fields: {
      numA: () => store.numA,
      numB: (store) => store.numB,
      sum: 'sum',
    },
    actions: {
      buttonTap: 'update',
    },
  },
  methods: {
    myMethod() {
      this.data.sum; // 来自于 MobX store 的字段
    },
  },
});
```

**3.Page 中使用**

```js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings';
const { common: store } = require('../../../store/index');

Page({
  data: {
    someData: '...',
  },
  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['update'],
    });
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings();
  },
  myMethod() {
    this.data.sum; // 来自于 MobX store 的字段
  },
});
```

## 21.获取当前页面栈

```js
const pages = getCurrentPages();
```

- 数组中第一个元素为首页

- 最后一个元素为当前页面

## 22.父组件使用子组件方法 selectComponent

- 返回子组件实例对象

```js
const child = this.selectComponent('.my-component');
console.log(child);
```

- 如果是在组件中 this 替换成 wx 调用

## 23.子组件通知父组件 triggerEvent

- 子组件

```js
this.triggerEvent('click', '');
```

- 父组件

```js
<search bind:click="search" />

search(e) {
  const { detail } = e;
}
```

## 24.计算属性

- 引入 miniprogram-computed

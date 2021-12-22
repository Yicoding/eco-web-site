---
toc: menu
---

# 性能优化

![image](images/other/1.png)

**性能瓶颈主要出现在三个场景**

- 1.在开发时每次修改代码打包需要几分钟，太慢（开发构建阶段）

- 2.打开网站，等了几十秒才看到页面，太慢（资源加载和页面渲染阶段）

- 3.页面展现后，页面上动画不流畅。滚动页面或者拖拽元素卡顿感严重，甚至页面会崩溃（操作体验阶段）

## 1.开发构建阶段(Webpack 打包)

- 并发：使用多进程打包
- 缓存：打包时利用缓存
- 打包量要小：缩小文件搜索范围，减小不必要的编译工作

## 2.资源加载阶段

- 核心思路是：传输量要小、距离要近、并行传输、资源复用

### 1）传输量要小

- 构建时 HTML 压缩
- 构建时 CSS 压缩合并
- 构建时 JavaScript 压缩合并
- 构建时图片的压缩
- 使用 SVG sprite 或者字体图标代替图片 ICON
- 服务端开启 Gzip，数据在传输之前再次压缩
- 构建时是使用 TreeShaking，减少不必要的代码引入
- 单页应用路由懒加载，减少首次加载的资源体积
- 组件懒加载，减少首次加载的资源体积
- 图片懒加载，减少首次加载的资源体积

### 2）距离要近

- 静态资源部署到 CDN

### 3）并行传输

- 升级到 HTTP2.0

**QA：HTTP2.0 相比 HTTP1.x 做了哪些升级**

- 多路复用
- 二进制分帧
- 服务端推送
- 数据流优先级
- 头部压缩

### 4）资源复用

- 服务端配置静态资源缓存（常见问题：HTTP 缓存策略？Cache-Control？keep-alive？304？ETag？）

  **QA：HTTP 缓存策略**

  **QA：keep-alive**

  **QA：304**

  **QA：ETag**

- 打包时分包复用

## 3.页面渲染阶段

- CSS 在上、JS 在下

- 加载 CSS 推荐用 link 少用 @import

- 不重要的外置引入的 JS 使用 defer 或者 async 属性异步加载
  - 异步加载 js 文件，并且不会阻塞页面的渲染
  - defer：
    - 不阻止解析 document， 并行下载其他 js
    - 即使下载完 js 文件 仍继续解析 document
    - 按照页面中出现的顺序，在其他同步脚本执行后，DOMContentLoaded 事件前 依次执行 js 文件
  - async：
    - 不阻止解析 document, 并行下载其他 js
    - 当脚本下载完后立即执行（两者执行顺序不确定，执行阶段不确定，可能在 DOMContentLoaded 事件前或者后 ）

## 4.操作体验阶段

### 1）动画流畅

- 尽量使用 transition 和 animation 来实现 CSS 动画，而不是 JS 实现动画（运行在主线程对动画的流畅度有影响）
- 动画尽量多用 transfrom 和 opacity （无需重绘和回流，性能最好）
- translateZ/translate3d `开启硬件加速`
- JS 动画使用 `requestAnimationFrame` 少用 `setInterval`

### 2）滚动/移动/操作流畅

- DOM 增删操作要少(`虚拟长列表`、`DOM Diff`)
- 高频操作使用`防抖`和`节流`

### 3）密集型计算

- 计算密集型操作可以交给 WebWorker 并发处理

## 5.感知性能优化

### 1）loading 加载

### 2）骨架屏

- 骨架屏可以带来更好的用户体验，有很强的加载感

## 6.资源预加载

- 提前加载资源，当用户需要查看时可直接从本地缓存中渲染

- 对当前页面需要的资源，使用 preload 进行预加载，对其它页面需要的资源进行 prefetch 预加载

### 1）preload

- preload 页面加载的过程中，在浏览器开始主体渲染之前加载

```html
<!-- 对sty1e.cs5和 index.js进行pre1oad预加载 -->
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="index.js" as="script" />
```

### 2）prefetch

- prefetch 页面加载完成后，利用空闲时间提前加载

```html
<!--对资源进行 prefetch预加载-->
<link rel="prefetch" href="next.css" />
<link rel="prefetch" href="next.js" />
```

- vue-cli 默认开启 prefetch ，可在 vue.config.js 中全局禁用 prefetch ，再针对指定模块开启

```js
chainWebpack: (config) => {
  config.plugins.delete('prefetch');
};
```

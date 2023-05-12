---
toc: menu
---

# 性能优化

- 加载时优化、运行时优化

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
  - HTML：HtmlWebpackPlugin
- 构建时 CSS 压缩合并
  - CSS ：MiniCssExtractPlugin
- 构建时 JavaScript 压缩合并
  - JavaScript：UglifyPlugin
- 构建时图片的压缩
- 使用 SVG sprite 或者字体图标代替图片 ICON
- 服务端开启 Gzip，数据在传输之前再次压缩
  - 可以通过向 HTTP 请求头中的 Accept-Encoding 头添加 gzip 标识来开启这一功能。当然，服务器也得支持这一功能
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
  - 多个请求可以共用一个 TCP 连接，这称为多路复用
  - 同一个请求和响应用一个流来表示，并有唯一的流 ID 来标识。 多个请求和响应在 TCP 连接中可以乱序发送，到达目的地后再通过流 ID 重新组建
- 二进制分帧
- 服务端推送
- 数据流优先级
  - HTTP2 可以对比较紧急的请求设置一个较高的优先级，服务器在收到这样的请求后，可以优先处理
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
- 高频操作使用`防抖`和`截流`

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

## 7.图片优化

### 1）图片延迟加载

- 在页面中，先不给图片设置路径，只有当图片出现在浏览器的可视区域时，才去加载真正的图片，这就是延迟加载。对于图片很多的网站来说，一次性加载全部图片，会对用户体验造成很大的影响，所以需要使用图片延迟加载。

- 1.首先可以将图片这样设置，在页面不可见时图片不会加载：

```html
<img data-src="https://xxx" />
```

- 2.等页面可见时，使用 JS 加载图片：

```js
const img = document.querySelector('img');
img.src = img.dataset.src;
```

- 3.判断页面可见的方法

```js
function _isShow(el) {
  let coords = el.getBoundingClientRect();
  return (
    (coords.top >= 0 && coords.left >= 0 && coords.top) <=
    (document.documentElement.clientHeight || window.innerHeight) +
      parseInt(offset)
  );
}
```

- 4.完整

```js
(function () {
  //立即执行函数
  let imgList = [],
    delay,
    time = 250,
    offset = 0;
  function _delay() {
    //函数截流
    clearTimeout(delay);
    delay = setTimeout(() => {
      _loadImg();
    }, time);
  }
  function _loadImg() {
    //执行图片加载
    for (let i = 0, len = imgList.length; i < len; i++) {
      if (_isShow(imgList[i])) {
        imgList[i].src = imgList[i].getAttribute('data-src');
        imgList.splice(i, 1);
      }
    }
  }
  function _isShow(el) {
    //判断img是否出现在可视窗口
    let coords = el.getBoundingClientRect();
    return (
      (coords.top >= 0 && coords.left >= 0 && coords.top) <=
      (document.documentElement.clientHeight || window.innerHeight) +
        parseInt(offset)
    );
  }
  function imgLoad(selector) {
    //获取所有需要实现懒加载图片对象引用并设置window监听事件scroll
    _selector = selector || '.imgLazyLoad';
    let nodes = document.querySelectorAll(selector);
    imgList = Array.apply(null, nodes);
    window.addEventListener('scroll', _delay, false);
  }
  imgLoad('.imgLazyLoad');
})();
```

### 2）响应式图片

- 响应式图片的优点是浏览器能够根据屏幕大小自动加载合适的图片

- 1.通过 picture 实现

```html
<picture>
  <source srcset="banner_w1000.jpg" media="(min-width: 801px)" />
  <source srcset="banner_w800.jpg" media="(max-width: 800px)" />
  <img src="banner_w800.jpg" alt="" />
</picture>
```

- 2.通过 @media 实现

```css
@media (min-width: 769px) {
  .bg {
    background-image: url(bg1080.jpg);
  }
}
@media (max-width: 768px) {
  .bg {
    background-image: url(bg768.jpg);
  }
}
```

### 3）调整图片大小

- 一开始，只加载缩略图，当用户悬停在图片上时，才加载大图

- 还有一种办法，即对大图进行延迟加载，在所有元素都加载完成后手动更改大图的 src 进行下载

### 4） 降低图片质量

- 压缩方法有两种，一是通过 webpack 插件 image-webpack-loader，二是通过在线网站进行压缩

```js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000, /* 图片大小小于1000字节限制时会自动转成 base64 码引用*/
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    /*对图片进行压缩*/
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
```

### 5）尽可能利用 CSS3 效果代替图片

### 6）使用 webp 格式的图片

- WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量
- 同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一

## 8.Webpack 性能优化

### 1）提取第三方库

- 使用 webpack4 的 splitChunk 插件 cacheGroups 选项

```js
optimization: {
  runtimeChunk: {
    name: 'manifest' // 将 webpack 的 runtime 代码拆分为一个单独的 chunk。
  },
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: 'chunk-vendors',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'initial'
      },
      common: {
        name: 'chunk-common',
        minChunks: 2,
        priority: -20,
        chunks: 'initial',
        reuseExistingChunk: true
      }
    },
  }
}
```

### 2）减少 Webpack 打包时间

**1.优化 Loader**

- 优化 Loader 的文件搜索范围

```js
module.exports = {
  module: {
    rules: [
      {
        // js 文件才使用 babel
        test: /\.js$/,
        loader: 'babel-loader',
        // 只在 src 文件夹下查找
        include: [resolve('src')],
        // 不会去查找的路径
        exclude: /node_modules/,
      },
    ],
  },
};
```

- 还可以将 Babel 编译过的文件缓存起来，下次只需要编译更改过的代码文件即可，这样可以大幅度加快打包时间

  ```js
  loader: 'babel-loader?cacheDirectory=true';
  ```

**2.HappyPack**

- HappyPack 可以将 Loader 的同步执行转换为并行的，这样就能充分利用系统资源来加快打包效率了

```js
module: {
  loaders: [
    {
      test: /\.js$/,
      include: [resolve('src')],
      exclude: /node_modules/,
      // id 后面的内容对应下面
      loader: 'happypack/loader?id=happybabel'
    }
  ]
},
plugins: [
  new HappyPack({
    id: 'happybabel',
    loaders: ['babel-loader?cacheDirectory'],
    // 开启 4 个线程
    threads: 4
  })
]
```

**3.DllPlugin**

- DllPlugin 可以将特定的类库提前打包然后引入。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案

```js
// 单独配置在一个文件中
// webpack.dll.conf.js
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    // 想统一打包的类库
    vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]-[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]-[hash]',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    }),
  ],
};

// webpack.conf.js
module.exports = {
  // ...省略其他配置
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // manifest 就是之前打包出来的 json 文件
      manifest: require('./dist/vendor-manifest.json'),
    }),
  ],
};
```

**4.代码压缩**

- Webpack3 中，一般使用 UglifyJS 来压缩代码，但是这个是单线程运行的

  - 可以使用 webpack-parallel-uglify-plugin 来并行运行 UglifyJS，从而提高效率

- Webpack4 中，只需要将 mode 设置为 production 就可以默认开启以上功能

  - 通过配置实现比如删除 console.log 这类代码的功能

- 按需加载

### 3）减少 Webpack 打包后的文件体积

**1.按需加载**

- 原理：当使用的时候再去下载对应文件，返回一个 Promise，当 Promise 成功以后去执行回调

**2.Scope Hoisting**

- Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去

- 在 Webpack4 中，启用 optimization.concatenateModules

  ```js
  module.exports = {
    optimization: {
      concatenateModules: true,
    },
  };
  ```

**3.Tree Shaking**

- Tree Shaking 可以实现删除项目中未被引用的代码

## 9.减少重绘重排

- 浏览器渲染过程：
  - 解析 HTML 生成 DOM 树
  - 解析 CSS 生成 CSSOM 规则树
  - 解析 JS，操作 DOM 树和 CSSOM 规则树
  - 将 DOM 树与 CSSOM 规则树合并在一起生成渲染树
  - 遍历渲染树开始布局，计算每个节点的位置大小信息
  - 浏览器将所有图层的数据发送给 GPU，GPU 将图层合成并显示在屏幕上

### 1）重排

- 当改变 DOM 元素位置或大小时，会导致浏览器重新生成渲染树，这个过程叫重排

  - 添加或删除可见的 DOM 元素
  - 元素位置改变
  - 元素尺寸改变
  - 内容改变
  - 浏览器窗口尺寸改变

### 2）重绘

- 当重新生成渲染树后，就要将渲染树每个节点绘制到屏幕，这个过程叫重绘。不是所有的动作都会导致重排，例如改变字体颜色，只会导致重绘。记住，重排会导致重绘，重绘不会导致重排

### 3）如何减少重排重绘？

- 用 JavaScript 修改样式时，最好不要直接写样式，而是替换 class 来改变样式。
- 如果要对 DOM 元素执行一系列操作，可以将 DOM 元素脱离文档流，修改完成后，再将它带回文档。推荐使用隐藏元素（display:none）或文档碎片（DocumentFragement），都能很好的实现这个方案

## 10.使用事件委托

## 11.如何回答如何理解重排和重绘

- `重排和重绘`是浏览器关键渲染路径上的两个节点， 浏览器的关键渲染路径就是 DOM 和 CSSOM 生成渲染树，然后根据渲染树通过一个布局(也叫 layout)步骤来确定页面上所有内容的大小和位置，确定布局后，将像素 绘制 (也叫 Paint)到屏幕上

- 其中`重排`就是当元素的位置发生变动的时候，浏览器重新执行布局这个步骤，来重新确定页面上内容的大小和位置，确定完之后就会进行重新绘制到屏幕上，所以重排一定会导致重绘

- 如果元素位置没有发生变动，仅仅只是样式发生变动，这个时候浏览器重新渲染的时候会跳过布局步骤，直接进入绘制步骤，这就是`重绘`，所以重绘不一定会导致重排

## 12.基于重排重绘的性能优化

- 1.减少 DOM 树渲染时间（譬如降低 HTML 层级、标签尽量语义化等等）
- 2.减少 CSSOM 树渲染时间（降低选择器层级等等）
- 3.减少 HTTP 请求次数及请求大小
- 4.将 css 放在页面开始位置
- 5.将 js 放在页面底部位置，并尽可能用 defer 或者 async 避免阻塞的 js 加载，确保 DOM 树生成完才会去加载 JS
- 6.用 link 替代@import
- 7.如果页面 css 较少，尽量使用内嵌式
- 8.为了减少白屏时间，页面加载时先快速生成一个 DOM 树

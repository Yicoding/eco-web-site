---
toc: menu
---

# webpack 核心

## 1.核心概念

- webpack 把一切静态资源视为模块，又叫静态资源打包器。通过入口文件递归构建依赖图，借助不同的 loader 处理对应的文件源码，最终输出目标环境可执行的代码

- 通常使用其构建项目时，维护的事一份配置文件，如果把这个 webpack 功能视为一个复杂的函数，则配置文件就是函数的参数，通过修改参数可控制输出的结果

- 在开发环境中，为了提升开发效率和体验，我们希望源码的修改能实时且无刷新地反馈在浏览器中，这种技术叫 HRM(Hot Module Replacement)

- 借助于 loader/plugin，可以差异化处理不同的文件类型，如果有个性化需求，还可以实现自定义的 loader/plugin

- 安装使用：webpack、webpack-cli

## 2.总体简介

### 1）常用配置

- context：配置基础目录

- Entry：配置模块的入口

- Output：配置如何输出最终需要的代码

- Module：配置处理模块的规则

- Resolve：配置寻找模块的规则

- Plugins：配置扩展插件

- DevServer：配置 DevServer 开发服务器

- target：配置构建目标

- Optimization：配置优化内容，拆包等

- devtools：配置 sourcemap

- watch 和 watchOptions：配置监听文件

- externals：配置排除依赖，打包排除文件

```js
const path = require('path');

module.exports = {
  // entry 表示 入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
  // 类型可以是 string | object | array
  entry: './app/entry', // 只有1个入口，入口只有1个文件
  entry: ['./app/entry1', './app/entry2'], // 只有1个入口，入口有2个文件
  entry: { // 有2个入口
    a: './app/entry-a',
    b: ['./app/entry-b1', './app/entry-b2']
  },

  // 如何输出结果：在 Webpack 经过一系列处理后，如何输出最终想要的代码。
  output: {
    // 输出文件存放的目录，必须是 string 类型的绝对路径。
    path: path.resolve(__dirname, 'dist'),

    // 输出文件的名称
    filename: 'bundle.js', // 完整的名称
    filename: '[name].js', // 当配置了多个 entry 时，通过名称模版为不同的 entry 生成不同的文件名称
    filename: '[chunkhash].js', // 根据文件内容 hash 值生成文件名称，用于浏览器长时间缓存文件

    // 发布到线上的所有资源的 URL 前缀，string 类型
    publicPath: '/assets/', // 放到指定目录下
    publicPath: '', // 放到根目录下
    publicPath: 'https://cdn.example.com/', // 放到 CDN 上去

    // 导出库的名称，string 类型
    // 不填它时，默认输出格式是匿名的立即执行函数
    library: 'MyLibrary',

    // 导出库的类型，枚举类型，默认是 var
    // 可以是 umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp ，
    libraryTarget: 'umd', //浏览器和node端都可以运行

    // 是否包含有用的文件路径信息到生成的代码里去，boolean 类型
    pathinfo: true,

    // 附加 Chunk 的文件名称
    chunkFilename: '[id].js',
    chunkFilename: '[chunkhash].js',

    // JSONP 异步加载资源时的回调函数名称，需要和服务端搭配使用
    jsonpFunction: 'myWebpackJsonp',

    // 生成的 Source Map 文件名称
    sourceMapFilename: '[file].map',

    // 浏览器开发者工具里显示的源码模块名称
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',

    // 异步加载跨域的资源时使用的方式
    crossOriginLoading: 'use-credentials',
    crossOriginLoading: 'anonymous',
    crossOriginLoading: false,
  },

  // 配置模块相关
  module: {
    rules: [ // 配置 Loader
      {
        test: /\.jsx?$/, // 正则匹配命中要使用 Loader 的文件
        include: [ // 只会命中这里面的文件
          path.resolve(__dirname, 'app')
        ],
        exclude: [ // 忽略这里面的文件
          path.resolve(__dirname, 'app/demo-files')
        ],
        use: [ // 使用那些 Loader，有先后次序，从后往前执行
          'style-loader', // 直接使用 Loader 的名称
          {
            loader: 'css-loader',
            options: { // 给 html-loader 传一些参数
            }
          }
        ]
      },
    ],
    noParse: [ // 不用解析和处理的模块
      /special-library\.js$/  // 用正则匹配
    ],
  },

  // 配置插件
  plugins: [
  ],

  // 配置寻找模块的规则
  resolve: {
    modules: [ // 寻找模块的根目录，array 类型，默认以 node_modules 为根目录
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.js', '.json', '.jsx', '.css'], // 模块的后缀名
    alias: { // 模块别名配置，用于映射模块
       // 把 'module' 映射 'new-module'，同样的 'module/path/file' 也会被映射成 'new-module/path/file'
      'module': 'new-module',
      // 使用结尾符号 $ 后，把 'only-module' 映射成 'new-module'，
      // 但是不像上面的，'module/path/file' 不会被映射成 'new-module/path/file'
      'only-module$': 'new-module',
    },
    alias: [ // alias 还支持使用数组来更详细的配置
      {
        name: 'module', // 老的模块
        alias: 'new-module', // 新的模块
        // 是否是只映射模块，如果是 true 只有 'module' 会被映射，如果是 false 'module/inner/path' 也会被映射
        onlyModule: true,
      }
    ],
    symlinks: true, // 是否跟随文件软链接去搜寻模块的路径
    descriptionFiles: ['package.json'], // 模块的描述文件
    mainFields: ['main'], // 模块的描述文件里的描述入口的文件的字段名称
    enforceExtension: false, // 是否强制导入语句必须要写明文件后缀
  },

  // 输出文件性能检查配置
  performance: {
    hints: 'warning', // 有性能问题时输出警告
    hints: 'error', // 有性能问题时输出错误
    hints: false, // 关闭性能检查
    maxAssetSize: 200000, // 最大文件大小 (单位 bytes)
    maxEntrypointSize: 400000, // 最大入口文件大小 (单位 bytes)
    assetFilter: function(assetFilename) { // 过滤要检查的文件
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: 'source-map', // 配置 source-map 类型，默认值为false

  context: __dirname, // Webpack 使用的根目录，string 类型必须是绝对路径

  // 配置输出代码的运行环境
  target: 'web', // 浏览器，默认
  target: 'webworker', // WebWorker
  target: 'node', // Node.js，使用 `require` 语句加载 Chunk 代码
  target: 'async-node', // Node.js，异步加载 Chunk 代码
  target: 'node-webkit', // nw.js
  target: 'electron-main', // electron, 主线程
  target: 'electron-renderer', // electron, 渲染线程

  externals: { // 使用来自 JavaScript 运行环境提供的全局变量
    jquery: 'jQuery'
  },

  stats: { // 控制台输出日志控制
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },

  // DevServer 相关的配置
  devServer: {
    proxy: { // 代理到后端服务接口
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录
    compress: true, // 是否开启 gzip 压缩
    historyApiFallback: true, // 是否开发 HTML5 History API 网页
    hot: true, // 是否开启模块热替换功能
    // 另一选型only，true时热更新页面失败刷新页面，only热更新失败不刷新页面
    https: false, // 是否开启 HTTPS 模式
    open: false, // 第一次构建完成，是否启动浏览器
    host: 0.0.0.0, // 支持任何地址访问DevServer的Http服务
    allowedHosts: ['baidu.com', 'sub.host.com'], // 允许访问域名列表
  	disableHostCheck: false, // host检查关闭，可直接使用ip访问服务器
    inline: false, // 关闭inline使用iframe方式
  },

  profile: true, // 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳
  cache: false, // 是否启用缓存提升构建速度
  watch: true, // 是否开始
  watchOptions: { // 监听模式选项
    // 不监听的文件或文件夹，支持正则匹配。默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每秒问 1000 次
    poll: 1000
  },
  // 优化配置，拆包处理
  optimization: {
    splitChunks: {
      cacheGroups:{
        vendor:{
          filename: 'vendor.js',
          chunks: 'all', // 包类型，async（异步时拆包），initial
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/   // 正则表达式
        }
      }
    }
  }
}
```

### 2）output 输出

```js
module.exports = {
  output: {
    filename: '[name]_[chunkhash:8].js', // chunk属性：id\name\hash\chunkhash（内容的hash值）
    chunkFilename: '', // chunk文件输出
    path: path.resolve(__dirname, 'dist_[hash]'), // 输出路径
    crossOriginLoading:
      'anonymous（默认，不带cookies）|use-credentials（带cookies）',
    // 配置script标签的crossorigin属性
  },
};
```

### 3）Module 模块

**1.配置 Loader**

- `use`：应用规则

- `test、include、exclude`：条件匹配

**2.noParse**

- 忽略没采用模块化的文件的递归解析和处理，提高构建性能

**3.parser**

- 因为 Webpack 是以模块化的 JavaScript 文件为入口，所以内置了对模块化 JavaScript 的解析功能，支持 AMD、CommonJS、SystemJS、ES6

- parser 属性可以更细粒度的配置哪些模块语法要解析哪些不解析，和 noParse 配置项的区别在于 parser 可以精确到语法层面， 而 noParse 只能控制哪些文件不被解析

### 4）Resolve

**1.alias**

- 别名路径映射

**2.mainFields**

- 默认：mainFields: ['browser', 'main']

- webpack 根据 mainFields 配置遍历，查找优先使用哪个代码

**3.extensions**

- 处理文件的后缀列表，默认['.js', '.json']

**4.modules**

- 配置查询模块的目录，默认只会去 node_modules 目录下查找

## 3.loader

### 1）babel-loader

- `用于将 ES6 转换为 ES5`

- 安装使用 `@babel/core`、`@babel/preset-env`、`babel-loader`

**webpack.config.js**

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.js$/,
      include: [resolve('src'), resolve('test')],
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'], // 对应babel-preset-env
          plugins: [
            ['@babel/plugin-proposal-object-rest-spread'],
            // 装饰器loader，需安装@babel/plugin-proposal-decorators
            ['@babel/plugin-proposal-decorators', { legacy: true }],
          ],
          cacheDirectory: true,
          /* 默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)。*/
        },
      },
    },
  ];
}
```

**package.json**

```js
// package.json文件，babel-core和babel-loader是核心插件，babel-preset-env处理代码的预设
"devDependencies": {
    "babel-core": "^6.26.0",   // 核心包
    "babel-loader": "^7.1.2",   // 基础包
    "babel-preset-env": "^1.6.1",  // 根据配置转换成浏览器支持的 es5
    "babel-plugin-transform-runtime": "^6.23.0",
     //polyfill作用：es6新语法引入，promise、Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol
    "babel-preset-react": "^6.24.1", // react语法的转换
    "babel-plugin-import": "^1.6.3",  // import的转换
    "babel-preset-stage-0": "^6.24.1", // babel-preset-stage-0 打包处于 strawman 阶段的语法）
}
```

- 配置文件 `.babelrc`

  - 增加了`.babelrc` 文件后，`options` 项即`可省略`，在执行 babel-loader 的时候默认会去读.babelrc 中的配置，webpack 和 babel.rc 文件里的配置都会生效，比如 transform-remove-console 插件在任意一处配置，都会生效。在`.babelrc` 配置文件中，主要是`对预设（presets）和插件（plugins）进行配置`

  - 参考[babel 配置文件解析](https://www.cnblogs.com/wb336035888/p/10449985.html)

### 2）thread-loader

- 把这个 loader `放置在其他` loader `之前`，放置在这个 loader `之后的` loader 就会`在`一个`单独的 worker 池`(worker pool)中`运行`

```js
use: [
  {
    loader: 'thread-loader',
    // 有同样配置的 loader 会共享一个 worker 池(worker pool)
    options: {
      // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)
      // 或者，在 require('os').cpus() 是 undefined 时回退至 1
      workers: 2,

      // 一个 worker 进程中并行执行工作的数量
      // 默认为 20
      workerParallelJobs: 50,

      // 额外的 Node.js 参数
      workerNodeArgs: ['--max-old-space-size=1024'],

      // Allow to respawn a dead worker pool
      // respawning slows down the entire compilation
      // and should be set to false for development
      poolRespawn: false,

      // 闲置时定时删除 worker 进程
      // 默认为 500ms
      // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
      poolTimeout: 2000,

      // 池(pool)分配给 worker 的工作数量
      // 默认为 200
      // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
      poolParallelJobs: 50,

      // 池(pool)的名称
      // 可以修改名称来创建其余选项都一样的池(pool)
      name: 'my-pool',
    },
  },
  // your expensive loader (e.g babel-loader)
];
```

### 3）url-loader

- 用于将文件转换为 base64 URI 的 Web 包的加载程序

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'responsive-loader', // Default: 'file-loader'
              quality: 85,
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
};
```

### 4）eslint-loader

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintPath: path.join(__dirname, 'reusable-eslint'),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  // ...
};
```

## 4.Plugins

### 1）CopyWebpackPlugin

- 将单个文件或整个目录复制到生成目录

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin([
      {
        from: 'src/**/*',
        to: 'dest/',
        ignore: ['*.js'],
      },
    ]),
  ],
};
```

### 2）HtmlWebpackPlugin

- 自动引入脚本和样式表，可使用模版选项`配置模版`

- 简化了 `HTML` 文件的创建，以便为你的 webpack 包提供服务

- 这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
  	filename: path.resolve(__dirname, '../dist/index.html'),
    template: 'index.html',
    inject: true, //true || 'head' || 'body' || false
    /* Inject all assets into the given template or templateContent. When passing 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element. Passing true will add it to the head/body depending on the scriptLoading option. Passing false will disable automatic injections. */
    chunksSortMode: 'dependency',
    minify: {
  		collapseWhitespace: true,
  		keepClosingSlash: true,
  		removeComments: true,
  		removeRedundantAttributes: true,
  		removeScriptTypeAttributes: true,
  		removeStyleLinkTypeAttributes: true,
  		useShortDoctype: true
		}
  )]
};
```

### 3）MiniCssExtractPlugin

- 样式抽离

  - 将 CSS `提取`到`单独`的`文件`中

  - 为每个包含 CSS 的 JS 文件`创建`一个 `CSS 文件`

  - 支持 CSS 和 SourceMaps 的 `按需加载`

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            //使用MiniCssExtractPlugin.loader代替style-loader，加载css需使用style-loader
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          ['css-loader'],
        ],
      },
    ],
  },
};
```

## 5.HMR

### 1）使用

- 热更新可使用 webpack-dev-server

```js
// webpack.config.js开启热更新配置
{
  devServer: {
    port: 8000,
    hot: true
  }
}

// App.js配置热更新的回调，有更新回调，类似于ajax，不会刷新页面
if (module.hot) {
  module.hot.accept(App, () => {
    render(<App />, document.querySelector('#app'));
  });
}
// 如果 App 组件是外部文件创建的，通常写作（与import导入的路径一致）
if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, document.querySelector('#app'));
  });
}
```

### 2）热更新原理

![image](images/engineering/6.png)

- `首次启动时`：源代码 => 编译（compiler）=> bundle.js => 浏览器访问端口 => 服务器返回静态资源（js\css\html）=> 浏览器与服务器 dev-server 建立 `socket` 链接，首次收到 hash 值

- `代码更新时`：源代码修改 => 增量编译（compiler）=> HMR（基于新内容生成[hash].update.js(on)）=> 向浏览器推送消息（包括新的 hash）=> 浏览器创建新的 script 标签下载[hash].update.js(on) => 调用页面更新的方法（module.hot.accept)

## 6.异步组件加载

### 1）import

- 1.webpack 将以 `import` 函数为分割点，import('./Async') `返回 promise`，`等待组件加载完成后，展示真正的组件`，Component: () => null 为默认内容

- 2.解析：异步组件从本质上，解决的还是 SPA 用户体验的问题

  - 它为 webpack 提供了`代码分割`的依据，使得使用率高或者加载时间长的组件代码独立出去，同时通过低成本的过渡交互，保证了网站的体验

### 2）require.ensure

```js
require.ensure(
  dependencies: String[], // 依赖项
  callback: function(require), // 加载组件
  errorCallback: function(error), // 加载失败
  chunkName: String // 指定产出块名称
)
// 和导入的区别，导入时打包时会导入包中；使用ensure会使用单独文件，不会打包进包中
require.ensure([], function () {
    const ensure = require('./requireEnsure');
    ensure.default();
}, () => null, 'require-ensure') // 打包可见生成了output/require-ensure.js
```

## 7.面试题

### 1）webpack 中的 module

- module 指模块化规范，webpack 支持 esmodule、commonjs、amd、assests（image，font，video，audio，json）

  - 1.`esm`

    - 关键字 export，允许将 esm 中内容暴露给其他模块，`export { aa }`

    - 关键字 import，导入模块: `import { aa } from './a.js'`

  - 2.`commonjs`

    - `module.exports`，允许将 commonjs 中的内容暴露给其他模块

    - `require`，导入模块

### 2）webpack modules 如何表达自己的各种依赖

- esm： `import` 语句

- commonjs： `require` 引入语句

- AMD： `define require`

- css/sass/less： `@import`

### 3）chunk 和 bundle 的区别

- 1.chunk

  - `chunk` 是 webpack 打包过程中 `modules 的集合`，是打包过程中的概念

  - webpack 的打包是从一个入口模块开始，入口模块引用其他模块，其他模块引用其他模块

  - webpack 通过引用关系逐个打包模块，这些 module 就形成了一个 chunk

  - 如果有多个入口模块，可能会产生多条打包路径，每条路径会形成一个 chunk

- 2.bundle

  - 是我们`最终输出的`一个或者多个打包好的`文件`

- 3.chunk 和 bundle 的`关系`是什么

  - 大多数情况下，一个 chunk 会产生一个 bundle，但是如果加 sourcemap，一个 entry，一个 chunk 对应两个 bundle

  - `chunk` 是`过程中`的代码块，`bundle` 是`打包`结果`输出`的代码块，`chunk 在构建完成就呈现为 bundle`

### 4）chunk 产生判断

```js
// webpack.config.js
/* 1个chunk，2个bundle(sourse-map) entry一个key */
module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js', './src/common.js'],
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
};

/* 2个chunk，4个bundle entry两个key */
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    common: './src/common.js',
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
};

/* split chunk 文件分割 */
/* 5个chunks，5个bundle文件 */
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    other: './src/multiply.js',
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2, // 至少两个chunk使用
          minSize: 0, // 公用最小的值
        },
        vendor: {
          test: /node_module/, // 正则匹配
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
/* 解析：5个chunks产生
1. entry index
2. entry other
3. runtimeChunk: "single", runtime指在浏览器运行时，webpack用来连接模块化的应用程序的所有代码。runtime包含在模块交互时，连接模块的加载和解析逻辑，包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。
引入模块，导入模块的逻辑单独拆分为一个chunk
4. splitChunk commons 公用chunk
5. splitChunk vendor 第三方包打包，匹配路径node_module文件夹下
*/
```

### 5）plugin 和 loader 分别做什么？怎么工作？

**1.Loader**

- 模块转换器，将非 js 模块转换为 webpack 能识别的 js 模块，执行时`从后往前执行`：aloader <- bloader <- cloader，webpack loader 将所有类型的文件，转换为应用程序的依赖图可以直接引用的模块

- 特点：无需导入，针对特定文件进行处理，输入文件内容并输出处理后的内容，交给下一个 loader 处理

- 本质：具有返回值的纯函数

- 编写 loader 方法：单一职责、可链式调用、模块化、无状态、借助工具库(loader-utils、schema-utils 等)、标记依赖项、解决模块依赖关系、公共代码复用、避免绝对路径（使用相当路径）、peer dependencies

```js
// 需求：将该页面使用到的样式表文件后缀区别于其他样式表，例如使用自定义后缀 .mobile，针对【自定义样式表】，先用自定义的loader处理
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.mobile$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: './mobile-css-loader',
            options: {
              width: 750,
            },
          },
        ],
      },
    ],
  },
};

// mobile-css-loader.js
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    width: {
      type: 'number',
    },
  },
};

module.exports = function loader(source) {
  const options = getOptions(this);

  validate(schema, options, {
    name: 'px2vw Loader',
    baseDataPath: 'options',
  });

  const px2vw = (px) => (px / options.width) * 100 + 'vw';
  return source.replace(/(\d+)px/g, (_, px) => px2vw(px));
};
```

**2.Plugin**

- 特点：需要导入并实例化，通过钩子可以涉及整个构建流程，因此贯穿整个构建范围

- 本质：原型上具有 apply 方法的具名构造函数或类，原型上的 apply 方法就是通过 webpack 在不同阶段提供的事件钩子来操作内部实例特定的数据，最后调用 webpack 提供的回调的函数

- 扩展插件，webpack 运行各个阶段，都会广播出对应的事件，插件去监听事件，涉及两个重要概念：

  - Compiler：对象，包含了 webpack 环境的所有配置信息，包括 options、loader、plugins。webpack 启动的时候实例化，它在全局中唯一，可以把它理解为 webpack 的实例。插件在应用时，会收到该对象的引用，可以用它来访问 webpack 的主环境

  - Compliation：包含了当前的模块资源，编译生成的资源等。webpack 在开发模式下运行的时候，每当检测到一个文件变化时，就会创建一次新的 Compliation。comlication 对象提供了很多关键时机的回调，以供插件做自定义处理时选择

- 编写插件的步骤：

  - 确认插件希望执行时间点

  - 确认输出时同步还是异步

  - 用 api 屏凑功能

```js
// compiler.hooks.emit.tapAsync
/*
1. compiler.hooks：一个对象，上面挂载了一堆钩子
2. .emit：代表的是一堆钩子中的某一个，即一个生命周期时间点，output输出之前
3. tapAsycns：输出形式，.tap\.tapAsync\.tapPromise
*/
compiler.hook.emit.tapAsync('myPlugin', (complication) => {});
```

### 6）webpack 打包流程

**1.步骤**

- 1.初始化参数：shell、webpack.config.js

- 2.开始编译：初始化一个 compiler 对象，加载所有配置，开始执行编译

- 3.确定入口：根据 entry 中的配置，找出所有的入口文件

- 4.编译模块：从入口文件开始，调用所有的 loader，再去递归的找依赖

- 5.完成模块的编译：得到每个模块被翻译后的最终内容以及他们之间的依赖关系（依赖图）

- 6.输出资源：根据得到的依赖关系，组装成一个个包含多个 module 的 chunk

- 7.输出完成：根据配置，确定要输出的文件名以及文件路径

**2.流程**

- 打包流程：

  - 根据配置的入口 -> traval()遍历 -> 构件出依赖图（ast、遍历分析、输出依赖图(数组)） -> babel 转译(es5) -> 切片 chunk -> bundle -> 通过插件挂载到 html -> 页面渲染

- 热更新： client（HMR runtime） - websocket - webpack（HMR server）

  - 修改文件 -> 文件系统通知 webpack -> 重新编译文件 -> 通知 HMR server 更新 -> 使用 websocket 通知 HMR runtime 更新 -> HMR runtime 通过 http 请求获取资源 -> 更新替换模块，无法更新，整个页面刷新

### 7）如何优化编译速度

- happy-pack：`预打包`

- vite：使用 es6 模块`直接运行源码`

- HardSourceWebpackPlugin ｜ SpeedMeasurePlugin：`多线程`跑

- `source-map 去除`

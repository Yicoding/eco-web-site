---
toc: menu
---

# webpack 考点

![image](images/engineering/7.png)

## 1.devDependencies 和 dependencies 的区别

- devDependencies 里面的插件只用于开发环境，不用于生产环境

- dependencies 是需要发布到生产环境的

## 2.loader 和 plugin 的区别

- `loader`：`用于转换特定类型的文件`，将 Webpack 不识别的内容转化为可识别的内容

- `plugin`：可以贯穿 Webpack 打包的生命周期，执行不同的任务

## 3.loader 的执行顺序

- 固定从后往前，即按 `css-loader --> style-loader` 的顺序执行

```js
module: {
  rules: [
    {
      test: /\.css$/, // 匹配所有的 css 文件
      use: ['style-loader', 'css-loader'],
    },
  ];
}
```

## 4.css-loader 的作用

- 处理 css，把 CSS 模块加载到 JS 代码中，但 js 并不会使用这个模块，需要借助 style-loader 来使用

## 5.style-loader 的作用

- 将样式加载到页面上

- style-loader 就是将处理好的 css 通过 `style 标签`的形式添加到页面上

- 原理：

```js
const content = `${样式内容}`;
const style = document.createElement('style');
style.innerHTML = content;
document.head.appendChild(style);
```

## 6.webpack5 新增的特性

### 1）webpack5 新增资源模块(`asset module`)

- 允许使用资源文件（字体，图标等）而无需配置额外的 loader

  - 1.asset/resource 将资源分割为单独的文件，并导出 url，类似之前的 file-loader 的功能

  - 2.asset/inline 将资源导出为 dataUrl 的形式，类似之前的 url-loader 的小于 limit 参数时功能

  - 3.asset/source 将资源导出为源码（source code）. 类似的 raw-loader 功能

  - 4.asset 会根据文件大小来选择使用哪种类型，当文件小于 8 KB（默认） 的时候会使用 asset/inline，否则会使用 asset/resource

### 2）webpack5 弃用 happypack

- `happypack` 为开启`多进程打包`的工具，webpack5 改为使用 `thread-loader`

### 3）webpack5 内置 hard-source-webpack-plugin

- 为模块提供了中间缓存，重复构建时间大约可以减少 80%

### 4）webpack5 弃用 dll

- dll 进行模块缓存，webpack5 内置了更好体验的 cache 方法

### 5）内置 terser-webpack-plugin

- terser-webpack-plugin：压缩 js

### 6）新增模块联邦

- Module Federation 是为了解决独立应用之间代码共享问题。可以在项目内动态加载其他项目的代码，同步可以共享依赖

- 通过细化功能模块、组件复用、共享第三方库、runtime dependencies 线上加载 npm 包等，可以更好的服务于多页应用、微前端等开发模式

```js
module.exports = {
  // other webpack configs...
  plugins: [
    new ModuleFederationPlugin({
      // 1. name 当前应用名称，需要全局唯一
      name: 'app_one_remote',
      // 2. remotes 可以将其他项目的 name 映射到当前项目中
      remotes: {
        app_two: 'app_two_remote',
        app_three: 'app_three_remote',
      },
      // 3. exposes 表示导出的模块，只有在此申明的模块才可以作为远程依赖被使用
      exposes: {
        AppContainer: './src/App',
      },
      // 4. shared可以让远程加载的模块对应依赖改为使用本地项目的 React或ReactDOM
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
};
```

- 使用：

  - 比如设置了 remotes: { app_two: "app_two_remote" }，在代码中就可以直接利用以下方式直接从对方应用调用模块

    ```js
    import { Search } from 'app_two/Search';
    ```

  - app_two/Search 来自于 app_two 的配置:

    ```js
    // app_two的webpack 配置
    export default {
      plugins: [
        new ModuleFederationPlugin({
          name: 'app_two',
          library: {
            type: 'var',
            name: 'app_two',
          },
          filename: 'remoteEntry.js',
          exposes: {
            Search: './src/Search',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    };
    ```

### 7）不再为 Node.js 模块自动引用 Polyfills

- v4 以前附带了许多 node.js 核心模块的 polyfill，在构建时给 bundle 附加了庞大的 polyfills，在大部分情况下，polyfills 并不是必须

- 现在 v5 将要停止这一切，在模块的应用中不再自动引入 Polyfills，明显的减小了打包体积

### 8）新增了长期缓存的算法

- 算法策略：对 moduleId 和 chunkId 的生成策略进行了优化

- moduleId 改为根据上下文模块路径计算，chunkId 根据 chunk 内容计算

- 以确定性的方式为模块和分块分配短的（3 或 5 位）数字 ID，这是包大小和长期缓存之间的一种权衡，因此 webpack5 将不需要引入任何的外力，便可实现长期缓存

```js
// webpack.config.js
module.exports = {
  entry: {
    a: './src/a.js',
    b: './src/b.js',
    main: './src/index.js',
  },
  // 长期缓存优化配置
  optimization: {
    chunkIds: 'deterministic',
    moduleIds: 'deterministic',
  },
};
```

### 9）新增持久化缓存

```js
// webpack.config.js
module.exports = {
  cache: {
    // 1. 将缓存类型设置为文件系统
    type: 'filesystem', // 默认是memory
    // 2. 将缓存文件夹命名为 .temp_cache,
    // 默认路径是 node_modules/.cache/webpack
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
};
```

## 7.优化构建速度

### 1）构建费时分析

- 1.安装 speed-measure-webpack-plugin 插件

- 2.再次执行打包：控制台会打印出每个 loader 和 plugin 的耗时

### 2）优化 resolve 配置

**1.alias**

- alias 用于创建 import 或 require 的别名，用来`简化模块引用`

**配置：**

```js
// webpack.config.js
const path = require('path');
// 路径处理方法
function resolve(dir) {
  return path.join(__dirname, dir);
}
const config = {
  resolve: {
    // 配置别名
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
};
```

**使用：**

```js
import '@/app.css';
```

**2.extensions**

- webpack 默认配置为 extensions: ['.js', '.json', '.wasm']

- 作用：尝试按顺序解析这些后缀名

- `好处`：开发时，引入模块时`不需要补充`模块`后缀名`

  ```js
  import file from '../path/to/file';
  ```

- `解析顺序`：webpack 会按照 extensions 配置的数组`从左到右`的顺序去尝试解析模块

- `扩展使用`：用 `...` 扩展运算符代表默认配置，可以`保留默认配置`

- 配置：高频文件后缀名放前面

  ```js
  const config = {
    //...
    resolve: {
      extensions: ['.ts', '...'],
    },
  };
  ```

**3.modules**

- 作用：告诉 webpack 解析模块时应该搜索的目录

- 好处：告诉 webpack 优先 src 目录下查找需要解析的文件，`节省查找时间`

  ```js
  const path = require('path');

  function resolve(dir) {
    return path.join(__dirname, dir);
  }

  const config = {
    resolve: {
      modules: [resolve('src'), 'node_modules'],
    },
  };
  ```

**4.resolveLoader**

- 与 resolve 对象的属性集合相同，但仅用于`解析` webpack 的 `loader` 包

- 如果有自定义的 Loader 需要进行配置

- 例如：在 loader 文件夹下面，放着自己写的 loader

  ```js
  const path = require('path');

  // 路径处理方法
  function resolve(dir) {
    return path.join(__dirname, dir);
  }

  const config = {
    resolveLoader: {
      modules: ['node_modules', resolve('loader')],
    },
  };
  ```

### 3）externals

- 提供了「从输出的 `bundle` 中`排除依赖`」的方法

- 通常在开发 `library` 时用到

- 好处：`剥离`不需要改动的一些`依赖`，`节省`打包`构建`的`时间`

- 例如：从 CDN 引入 jQuery，而不是把它打包

**1.引入链接**

```html
<script src="https://code.jquery.com/jquery-3.1.0.js" />
```

**2.配置 externals**

```js
const config = {
  externals: {
    jquery: 'jQuery',
  },
};
```

**3.使用 jQuery**

```js
import $ from 'jquery';
$('.my-element').animate(/* ... */);
```

### 4）缩小范围

- 配置 loader 时，通过使用 `include` 和 `exclude`，更精确的去指定 loader 的作用目录或者需要排除的目录

  - `include`：符合条件的模块进行解析

  - `exclude`：`排除`符合条件的模块，不解析

  - `exclude 优先级更高`

```js
const path = require('path');

const config = {
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.js$/i,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/, // 不对node_modules目录进行babel转换
        use: ['babel-loader'],
      },
    ],
  },
};
```

### 5）noParse

- `不需要解析`依赖`的`第三方大型类`库`等，可以通过这个字段进行配置，以提高构建速度

- 使用 `noParse` 进行`忽略`的`模块`文件中不会解析 import、require 等语法

```js
const config = {
  module: {
    noParse: /jquery|lodash/,
    rules: [],
  },
};
```

### 6）IgnorePlugin

- 防止在 import 或 require 调用时，生成以下正则表达式匹配的模块：

  - requestRegExp 匹配(test)资源请求路径的正则表达式

  - contextRegExp 匹配(test)资源上下文（目录）的正则表达式

```js
new webpack.IgnorePlugin({ resourceRegExp, contextRegExp });
```

- 例如：将`插件`中的非中文语音`排除`掉，`节省`打包的`体积`

  - 1.安装 moment 插件（时间处理库）

  ```bash
  yarn add moment
  ```

  - 2.配置 IgnorePlugin

    ```js
    // 引入 webpack
    const webpack = require('webpack');

    const config = {
      plugins: [
        // 配置插件
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        }),
      ],
    };
    ```

### 7）多进程配置

> 注意：实际上在`小型项目`中，`开启`多进程打包反而`会增加时间成本`，因为启动进程和进程间通信都会有一定开销

**1.thread-loader**

- 配置在 thread-loader `之后`的 `loader` 都`会在`一个`单独`的 `worker` 池（worker pool）中`运行`

  - 1.安装：

    ```bash
    yarn add -D thread-loader
    ```

  - 2.配置：

    ```js
    const config = {
      module: {
        noParse: /jquery|lodash/,
        rules: [
          {
            test: /\.js$/i,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [
              {
                loader: 'thread-loader', // 开启多进程打包
                options: {
                  worker: 3,
                },
              },
              'babel-loader',
            ],
          },
        ],
      },
    };
    ```

**2.happypack**

- 同样为开启多进程打包的工具，`webpack5 已弃用`

### 8）利用缓存

- 利用缓存可以大幅提升重复构建的速度

**1.babel-loader 开启缓存**

- babel 在转译 js 过程中时间开销比价大，将 babel-loader 的执行结果缓存起来，重新打包的时候，`直接读取缓存`

- 缓存位置： node_modules/.cache/babel-loader

```js
const config = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 启用缓存
            },
          },
        ],
      },
    ],
  },
};
```

**2.cache-loader**

- `缓存`一些`性能开销比较大`的 `loader` 的处理结果

- 缓存位置：node_modules/.cache/cache-loader

- 使用：

  - 1.安装：

    ```bash
    yarn add -D cache-loader
    ```

  - 2.配置 cache-loader

    ```js
    const config = {
      module: {
        rules: [
          {
            test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
            use: [
              // 'style-loader',
              MiniCssExtractPlugin.loader,
              'cache-loader', // 获取前面 loader 转换的结果
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      },
    };
    ```

**3.hard-source-webpack-plugin**

- hard-source-webpack-plugin 为模块`提供了中间缓存`，重复构建时间大约可以减少 80%，但是在 `webpack5` 中已经`内置`了模块缓存，不需要再使用此插件

**4.dll**

- 在 webpack5.x 中已经不建议使用这种方式进行模块缓存，因为其已经内置了更好体验的 cache 方法

**5.cache 持久化缓存**

- 通过配置 cache 缓存生成的 webpack 模块和 chunk，来改善构建速度

  ```js
  const config = {
    cache: {
      type: 'filesystem',
    },
  };
  ```

## 8.优化构建结果

### 1）构建结果分析

- 借助 `webpack-bundle-analyzer` 可以直观的看到打包结果中，文件的体积大小、各模块依赖关系、文件是够重复等问题

- 使用：

  - 1.安装

  ```bash
  yarn add -D webpack-bundle-analyzer
  ```

  - 2.配置

  ```js
  // 引入插件
  const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  const config = {
    plugins: [
      // 配置插件
      new BundleAnalyzerPlugin({
        // analyzerMode: 'disabled',  // 不启动展示打包报告的http服务器
        // generateStatsFile: true, // 是否生成stats.json文件
      }),
    ],
  };
  ```

  - 3.修改启动命令

  ```json
  "scripts": {
    "analyzer": "cross-env NODE_ENV=prod webpack --progress --mode production"
  },
  ```

### 2）压缩 CSS

**1.安装 optimize-css-assets-webpack-plugin**

```bash
yarn add -D optimize-css-assets-webpack-plugin
```

**2.修改配置**

```js
// ...
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  optimization: {
    minimize: true,
    minimizer: [
      // 添加 css 压缩配置
      new OptimizeCssAssetsPlugin({}),
    ],
  },
};
```

### 3）压缩 JS

> 在`生产环境`下打包`默认`会`开启` js 压缩，`但是`当我们`手动配置 optimization` 选项`之后`，`就不再默认对 js 进行压缩`，`需要`我们`手动`去`配置`

- webpack5 内置 terser-webpack-plugin 插件，直接引用就可以

```js
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  optimization: {
    minimize: true, // 开启最小化
    minimizer: [new TerserPlugin({})],
  },
};
```

### 4）清除无用的 CSS

- `prugecss-webpack-plugin` 会单独提取 CSS 并清除用不到的 CSS

- 使用：

  - 1.安装

    ```bash
    yarn add -D prugecss-webpack-plugin
    ```

  - 2.添加配置

    ```js
    const PurgecssWebpackPlugin = require('prugecss-webpack-plugin');
    const glob = require('glob'); // 文件匹配模式

    const config = {
      plugins: [
        new PurgecssWebpackPlugin({
          paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, {
            nodir: true,
          }),
        }),
      ],
    };
    ```

### 5）Tree-shaking

- `Tree-shaking` 作用是`剔除没有使用的代码`，以`降低包的体积`

- webpack5 默认开启

- 可以在 package.json 中 sideEffects 配置有副作用的代码:

  - css 文件

  - 包含全局变量的文件

  - 其他包含所需副作用的文件

### 6）Scope Hoisting

- Scope Hoisting 即`作用域提升`，原理是`将多个模块放在同一个作用域下`，并重命名防止命名冲突，通过这种方式可以`减少函数声明和内存开销`

  - webpack 默认支持，在生产环境下默认开启

  - 只支持 es6 代码

## 9.优化运行时体验

- 运行时优化的核心就是`提升首屏的加载速度`，主要的方式就是：

  - `降低首屏加载文件体积`，首屏不需要的文件进行`预加载`或者`按需加载`

### 1）入口点分割

- 配置多个打包入口，多页打包

### 2）splitChunks 分包配置

- optimization.splitChunks 是基于 SplitChunksPlugin 插件实现的

- 默认情况下，它只会影响到按需加载的 chunks，因为修改 initial chunks 会影响到项目的 HTML 文件中的脚本标签

- webpack 将根据以下条件自动拆分 chunks：

  - 新的 chunk 可以被共享，或者模块来自于 node_modules  文件夹
  - 新的 chunk 体积大于 20kb（在进行 min+gz 之前的体积）
  - 当按需加载 chunks 时，并行请求的最大数量小于或等于 30
  - 当加载初始化页面时，并发请求的最大数量小于或等于 30

**1.默认配置**

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'async', // 有效值为 `all`，`async` 和 `initial`
      minSize: 20000, // 生成 chunk 的最小体积（≈ 20kb)
      minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
      minChunks: 1, // 拆分前必须共享模块的最小 chunks 数。
      maxAsyncRequests: 30, // 最大的按需(异步)加载次数
      maxInitialRequests: 30, // 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件）
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // 配置提取模块的方案
        defaultVendors: {
          test: /[\/]node_modules[\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

**2.优化配置**

```js
const config = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 配置提取模块的方案
        default: false,
        styles: {
          name: 'styles',
          test: /\.(s?css|less|sass)$/,
          chunks: 'all',
          enforce: true,
          priority: 10,
        },
        common: {
          name: 'chunk-common',
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          enforce: true,
          reuseExistingChunk: true,
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          enforce: true,
          reuseExistingChunk: true,
        },
        // ... 根据不同项目再细化拆分内容
      },
    },
  },
};
```

### 3）代码懒加载

- 针对首屏加载不太需要的一些资源，可以通过懒加载的方式去实现

- 在使用时再进行加载，使用异步加载的方式

- 通过 import 实现

```js
img.addEventListener('click', () => {
  // 点击时加载
  import('./desc').then(({ default: element }) => {
    console.log(element);
    document.body.appendChild(element);
  });
});
```

### 4）prefetch 与 preload

- 当需要异步加载的文件比较大时，使用异步加载也会影响体验

- 使用 prefetch 来进行预拉取

**1.prefetch**

- `prefetch` (预获取)：`浏览器空闲的时候进行资源的拉取`

- 设置：`webpackPrefetch: true`

```js
// 按需加载
img.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './desc').then(({ default: element }) => {
    console.log(element);
    document.body.appendChild(element);
  });
});
```

**2.preload**

- `preload` (预加载)：`提前加载后面会用到的关键资源`

- 因为会提前拉取资源，如果不是特殊需要，`谨慎使用`

- 设置：`webpackPreload: true`

```js
import(/* webpackPreload: true */ 'ChartingLibrary');
```

## 10.loader 原理

### 1）loader 本质

- 导出一个函数的 js 模块，函数的处理结果应该是 String 或者 Buffer（被转换为一个 string）

  ```js
  module.exports = function (content, map, meta) {
    return someSyncOperation(content);
  };
  ```

- 如果是单个处理结果，可以在同步模式中直接返回。如果有多个处理结果，则必须调用 `this.callback()`

  ```js
  module.exports = function (content, map, meta) {
    this.callback(null, someSyncOperation(content), map, meta);
    return; // 当调用 callback() 时总是返回 undefined
  };
  ```

- 在异步模式中，必须调用 `this.async()`，来指示 loader runner 等待异步结果，它会返回 this.callback() 回调函数，随后 loader 必须返回 undefined 并且调用该回调函数

  ```js
  module.exports = function (content, map, meta) {
    var callback = this.async();
    someAsyncOperation(content, function (err, result) {
      if (err) return callback(err);
      callback(null, result, map, meta);
    });
  };
  ```

### 2）异步 loader

- 原因：node 是单线程的，同步计算耗时长，所以尽可能设计异步 loader

- 如果计算量很小，设计为同步也是可以的

### 3）开发一个加载 md 文件的 loader

**1.新建 about.md 文件**

```
<!-- ./src/about.md -->
# About

this is a markdown file.
```

**2.使用 about.md 文件**

```js
import about from './about';
console.log('about', about);
```

**3.开发 md-loader 文件**

```js
module.exports = function (content, map, meta) {
  const callback = this.async();

  function transferHtml(source) {
    const result = `module.exports = ${JSON.stringify(source)}`;
    callback(null, result);
  }

  transferHtml(content);
};
```

**4.webpack 配置 loader**

```js
const config = {
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: './md-loader',
      },
    ],
  },
};
```

## 11.Plugin 原理

### 1）Plugin 机制

- 钩子机制

- 必须是一个函数或者是一个包含 apply 方法的对象

- 一般会定义一个类型，在这个类型中定义 apply 方法。然后在使用时，再通过这个类型来创建一个实例对象去使用这个插件

- `emit` 的钩子，这个钩子会在 Webpack 即将向输出目录输出文件时执行

### 2）开发一个去掉 console.log 的插件

**1.开发 remove-plugin 插件**

```js
// remove-plugin.js
class RemovePlugin {
  apply(complier) {
    console.log('RemovePlugin启动');
    complier.hooks.emit.tap('RemovePlugin', (compilation) => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // 对象中的 assets 属性获取即将写入输出目录的资源文件信息
        console.log('name', name);
        // 文件内容需要通过遍历的值对象中的 source 方法获取
        console.log('source', compilation.assets[name].source()); // 输出文件内容
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source();
          const noComments = contents.replace(/console.log\((.*)\)/g, '');
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}

module.exports = RemovePlugin;
```

**2.webpack 配置 plugin**

```js
const RemovePlugin = require('./plugin/remove-plugin');

const config = {
  plugins: [new RemovePlugin()],
};
```

## 12.webpack 的作用

### 1）模块打包

- 以将不同模块的文件`打包整合`在一起，并且保证它们之间的引用正确，执行有序。利用打包我们就可以在开发的时候根据我们自己的业务自由划分文件模块，保证项目结构的清晰和可读性

### 2）编译兼容

- 在前端的“上古时期”，手写一堆浏览器兼容代码一直是令前端工程师头皮发麻的事情，而在今天这个问题被大大的弱化了，通过 webpack 的 `Loader` 机制，不仅仅可以帮助我们对代码做 polyfill，还可以编译转换诸如.less, .vue, .jsx 这类在浏览器无法识别的格式文件，让我们在开发的时候可以使用新特性和新语法做开发，提高开发效率

### 3）能力扩展

- 通过 webpack 的 `Plugin` 机制，我们在实现模块化打包和编译兼容的基础上，可以进一步实现诸如`按需加载`，`代码压缩`等一系列功能，帮助我们进一步提高自动化程度，工程效率以及打包输出的质量

## 13.webpack 的打包流程

- 1、读取 webpack 的配置参数

- 2、Webpack CLI 启动打包流程

  - Webpack CLI 会通过 `yargs` 模块解析 CLI 参数

  - 调用 `bin/utils/convert-argv.js` 模块将得到的命令行参数转换为 Webpack 的配置选项对象

- 3、载入 Webpack 核心模块，创建 Compiler 对象并开始解析项目

  ```js
  const webpack = require('webpack');

  let compiler = webpack(options);
  ```

  - 如果不是监视模式就调用 Compiler 对象的 run 方法，开始构建整个应用

    ```js
    compiler.run();
    ```

    ```js
    // run.js
    run(callback) {
      this.hooks.beforeRun.callAsync(this, () => {
        this.compile()
      })
    }
    ```

- 4、从入口文件（entry）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树

- 5、对不同文件类型的依赖模块文件使用对应的 Loader 进行编译，最终转为 Javascript 文件

- 6、合并 Loader 处理完的结果，将打包结果输出到 dist 目录

- 整个过程中 webpack 会通过发布订阅模式，向外抛出一些 hooks，而 webpack 的插件即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的

### 分析

- 1.文件的解析与构建是一个比较复杂的过程，在 webpack 源码中主要依赖于 `compiler` 和 `compilation` 两个核心对象实现

  - `compiler` 对象是一个`全局单例`，他负责把控整个 webpack 打包的构建流程

  - `compilation` 对象是每一次构建的上下文对象，它包含了当次构建所需要的所有信息，每次热更新和重新构建，compiler 都会重新生成一个新的 compilation 对象，负责此次更新的构建过程

- 2.每个模块间的依赖关系，依赖于 `AST` 语法树。每个模块文件在通过 Loader 解析完成之后，会通过 acorn 库生成模块代码的 AST 语法树，通过语法树就可以分析这个模块是否还有依赖的模块，进而继续循环执行下一个模块的编译解析

- 3.`最终` Webpack 打包出来的 bundle 文件是一个 `IIFE` 的执行函数

```js
// webpack 5 打包的bundle文件内容
(() => { // webpackBootstrap
  var __webpack_modules__ = ({
    'file-A-path': ((modules) => { // ... })
    'index-file-path': ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => { // ... })
  })

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }
  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})
```

- 整个立即执行函数里边只有三个变量和一个函数方法，`__webpack_modules__`存放了编译后的各个文件模块的 JS 内容，`__webpack_module_cache__` 用来做模块缓存，`__webpack_require__`是 Webpack 内部实现的一套依赖引入函数。最后一句则是代码运行的起点，从入口文件开始，启动整个项目

- `__webpack_require__`模块引入函数，我们在模块化开发的时候，通常会使用 ES Module 或者 CommonJS 规范导出/引入依赖模块，webpack 打包编译的时候，会统一替换成自己的`__webpack_require__`来实现模块的引入和导出，从而实现模块缓存机制，以及抹平不同模块规范之间的一些差异性

## 14.sourceMap 是什么

- Webpack 配置里边的 devtool 参数

- sourceMap 是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中 debug 问题会带来非常糟糕的体验，`sourceMap` 可以帮助我们`快速定位到源代码的位置`，提高我们的开发效率

- 是一种源码的映射

## 15.面试题

### 1）Webpack 配置中用过哪些 Loader ？都有什么作用？

### 2）Webpack 配置中用过哪些 Plugin ？都有什么作用？

### 3）Loader 和 Plugin 有什么区别？

### 4）如何编写 Loader ? 介绍一下思路？

### 5）如何编写 Plugin ? 介绍一下思路？

### 6）Webpack optimize 有配置过吗？可以简单说说吗？

- 主要用来做性能优化

  - 1.webpack.optimize.UglifyJsPlugin 压缩输出文件

  - 2.webpack.optimize.CommonsChunkPlugin 提取公共模块

  - 3.webpack.optimize.DedupePlugin 文件去重

  - 4.optimization.SplitChunks：功能与上面的 webpack.optimize.CommonsChunkPlugin 一样，只不过 optimization.SplitChunks 是 webpack4 之后推荐使用的

    - 内置的，不需要安装

  - 总结：
    - 使用 TerserPlugin 压缩 JavaScript
    - 使用 splitChunks 做自动分包
    - OptimizeCssAssetsWebpackPlugin 做 CSS 的压缩

### 7）Webpack 层面如何性能优化？

### 8）Webpack 打包流程是怎样的？

### 9）tree-shaking 实现原理是怎样的？

### 10）Webpack 热更新（HMR）是如何实现？

### 11）Webpack 打包中 Babel 插件是如何工作的？

### 12）Webpack 和 Rollup 有什么相同点与不同点？

### 13）Webpack5 更新了哪些新特性？

## 16.常见问题

### 1）webpack treeShaking 机制的原理

- treeShaking 也叫摇树优化，是一种通过移除多于代码，来优化打包体积的，生产环境默认开启

- 可以在代码不运行的状态下，分析出不需要的代码

- 利用 es6 模块的规范：
  - ES6 Module 引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
  - 静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码

### 2）webpack 的构建流程是什么

- 1.`初始化参数`：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数,形成最后的配置结果

- 2.`开始编译`：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件 监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译

- 3.`确定入口`：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去

- 4.`编译模块`：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理

- 5.`完成模块编译并输出`：递归完成后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk

- 6.`输出完成`：输出所有的 chunk 到文件系统

### 3）webpack 的热更新原理

- webpack 开启了 `express` 应用，添加了对 webpack 编译的监听，添加了和浏览器的 `websocket` 长连接，当文件变化触发 webpack 进行编译并完成后，会通过 `sokcet` 消息`告诉浏览器准备刷新`。而为了减少刷新的代价，就是不用刷新网页，而是刷新某个模块，webpack-dev-server 可以支持热更新，通过生成 文件的 hash 值来比对需要更新的模块，浏览器再进行热替换

- 服务端：

  - 启动 webpack-dev-server 服务器
  - 创建 webpack 实例
  - 创建 server 服务器
  - 添加 webpack 的 done 事件回调
  - 编译完成向客户端发送消息
  - 创建 express 应用 app
  - 设置文件系统为`内存文件系统`
  - 添加 webpack-dev-middleware 中间件
  - 中间件负责返回生成的文件
  - 启动 webpack 编译
  - 创建 http 服务器并启动服务
  - 使用 sockjs 在浏览器端和服务端之间建立一个 websocket 长连接
  - 创建 socket 服务器

- 客户端：

  - webpack-dev-server/client 端会监听到此 hash 消息
  - 客户端收到 ok 消息后会执行 reloadApp 方法进行更新
  - 在 reloadApp 中会进行判断，是否支持热更新，如果支持的话发生 webpackHotUpdate 事件，如果不支持就直接刷新浏览器
  - 在 webpack/hot/dev-server.js 会监听 webpackHotUpdate 事件
  - 在 check 方法里会调用 module.hot.check 方法
  - HotModuleReplacement.runtime 请求 Manifest
  - 通过调用 JsonpMainTemplate.runtime 的 hotDownloadManifest 方法
  - 调用 JsonpMainTemplate.runtime 的 hotDownloadUpdateChunk 方法通过 JSONP 请求获取最新的模块代码
  - 补丁 js 取回来或会调用 JsonpMainTemplate.runtime.js 的 webpackHotUpdate 方法
  - 然后会调用 HotModuleReplacement.runtime.js 的 hotAddUpdateChunk 方法动态更新 模块代码
  - 然后调用 hotApply 方法进行热更

### 4）webpack 打包是 hash 码是如何生成的

- 1.webpack 生态中存在多种计算 hash 的方式

  - hash
  - chunkhash
  - contenthash

- hash 代表每次 webpack 编译中生成的 hash 值，所有使用这种方式的文件 hash 都相同。每次构建都会使 webpack 计算新的 hash。chunkhash 基于入口文件及其关联的 chunk 形成，某个文件的改动只会影响与它有关联的 chunk 的 hash 值，不会影响其他文件 contenthash 根据文件内容创建。当文件内容发生变化时，contenthash 发生变化

- 2.避免相同随机值

  - webpack 在计算 hash 后分割 chunk。产生相同随机值可能是因为这些文件属于同一个 chunk,可以将某个文件提到独立的 chunk（如放入 entry）

### 5）webpack 离线缓存静态资源如何实现

- 在配置 webpack 时，我们可以使用 html-webpack-plugin 来注入到和 html 一段脚本来实现将第三方或者共用资源进行 静态化存储在 html 中注入一段标识，例如 <% HtmlWebpackPlugin.options.loading.html %> ,在 html-webpack-plugin 中即可通过配置 html 属性，将 script 注入进去
- 利用 webpack-manifest-plugin 并通过配置 webpack-manifest-plugin ,生成 manifestjson 文件，用来对比 js 资源的差异，做到是否替换，当然，也要写缓存 script
- 在我们做 Cl 以及 CD 的时候，也可以通过编辑文件流来实现静态化脚本的注入，来降低服务器的压力，提高性能
- 可以通过自定义 plugin 或者 html-webpack-plugin 等周期函数，动态注入前端静态化存储 script

### 6）webpack 常见的 plugin 有哪些

- ProvidePlugin：自动加载模块，代替 require 和 import
- html-webpack-plugin 可以根据模板自动生成 html 代码，并自动引用 css 和 js 文件
- extract-text-webpack-plugin  将 js 文件中引用的样式单独抽离成 css 文件
- DefinePlugin  编译时配置全局变量，这对开发模式和发布模式的构建允许不同的行为非常有用
- HotModuleReplacementPlugin  热更新
- optimize-css-assets-webpack-plugin  不同组件中重复的 css 可以快速去重
- webpack-bundle-analyzer  一个 webpack 的 bundle 文件分析工具，将 bundle 文件以可交互缩放的 treemap 的形式展示。
- compression-webpack-plugin  生产环境可采用 gzip 压缩 JS 和 CSS
- happypack：通过多进程模型，来加速代码构建
- clean-wenpack-plugin  清理每次打包下没有使用的文件
- speed-measure-webpack-plugin:可以看至 U 每个 Loader 和 Plugin 执行耗时（整个扌丁包耗时、每个 Plugin 和 Loader 耗时）
- webpack-bundle-analyzer:可视化 Webpack 输出文件的体积（业务组件、依赖第三方模块

### 7）webpack 插件如何实现

- webpack 本质是一个事件流机制，核心模块：tabable(Sync + Async)Hooks 构造出 === Compiler(编译) + Compiletion(创建 bundles)

- 创建一个插件函数，在其 prototype 上定义 apply 方法，指定一个 webpack 自身的事件钩子
- 函数内部处理 webpack 内部实例的特定数据 -处理完成后，调用 webpack 提供的回调函数

### 8）webpack 有哪些常⻅的 Loader

- file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件
- url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去
- source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试
- image-loader：加载并且压缩图⽚⽂件
- babel-loader：把 ES6 转换成 ES5
- css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性
- style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。
- eslint-loader：通过 ESLint 检查 JavaScript 代码

### 9）webpack 如何实现持久化缓存

- 服务端设置 http 缓存头（cache-control）
- 打包依赖和运行时到不同的 chunk，即作为 splitChunk,因为他们几乎是不变的
- 延迟加载：使用 import()方式，可以动态加载的文件分到独立的 chunk,以得到自己的 chunkhash
- 保持 hash 值的稳定：编译过程和文件内通的更改尽量不影响其他文件 hash 的计算，对于低版本 webpack 生成的增量数字 id 不稳定问题，可用 hashedModuleIdsPlugin 基于文件路径生成解决

### 10）如何⽤ webpack 来优化前端性能？

- ⽤ webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器运⾏快速⾼效

  - `压缩代码`：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤ webpack 的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩 JS ⽂件， 利⽤ cssnano （css-loader?minimize）来压缩 css
  - `利⽤ CDN 加速`: 在构建过程中，将引⽤的静态资源路径修改为 CDN 上对应的路径。可以利⽤ webpack 对于 output 参数和各 loader 的 publicPath 参数来修改资源路径
  - `Tree Shaking`: 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动 webpack 时追加参数 --optimize-minimize 来实现
  - `Code Splitting`: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存
  - `提取公共第三⽅库`: SplitChunksPlugin 插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码

## 17.常用 webpack 插件

### 1）html-webpack-plugin

- 将一个页面模板打包到 dist 目录下，默认都是自动引入 js or css

### 2）clean-webpack-plugin

- 用于每次打包 dist 目录删除

- webpack5 已经内置，在 output 配置中设置 clean: true

### 3）mini-css-extract-plugin

- 将 css 样式从 js 文件中提取出来最终合成一个 css 文件

### 4）optimization.SplitChunks

- 用于将页面里的公共代码提取出来，从而进行优化加载速度

```js
module.exports = {
  mode: 'development',
  entry: {
    main: './main.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

### 5）DefinePlugin

- 用于注入全局变量，一般用在环境变量上

```js
const Webpack = require('webpack');
module.exports = {
  plugins: [
    new Webpack.DefinePlugin({
      STR: JSON.stringify('蛙人'),
      'process.env': JSON.stringify('dev'),
      name: '蛙人',
    }),
  ],
};
```

### 6）ProvidePlugin

```js
const Webpack = require('webpack');
module.exports = {
  plugins: [
    new Webpack.ProvidePlugin({
      Vue: ['vue', 'default'],
    }),
  ],
};
```

### 7）hot-module-replacement-plugin

- 开启热模块更新

```js
const Webpack = require('webpack');
module.exports = {
  plugins: [new Webpack.HotModuleReplacementPlugin()],
};
```

### 8）IgnorePlugin

- 用于过滤打包文件，减少打包体积大小

  ```js
  const Webpack = require('webpack');
  module.exports = {
    plugins: [new Webpack.IgnorePlugin(/.\/lib/, /element-ui/)],
  };
  ```

### 9）terser-webpack-plugin

- 用于压缩 js 文件

  ```js
  const TerserPlugin = require('terser-webpack-plugin');
  module.exports = {
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  };
  ```

### 10）copy-webpack-plugin

- 用于将文件拷贝到某个目录下

  ```js
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  module.exports = {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './main.js',
            to: __dirname + '/dist/js',
            toType: 'dir',
          },
        ],
      }),
    ],
  };
  ```

### 11）optimize-css-assets-webpack-plugin

- 用于压缩 css 样式

  ```js
  const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
  module.exports = {
    plugins: [new OptimizeCssAssetsWebpackPlugin()],
  };
  ```

### 11）imagemin-webpack-plugin

- 用于压缩图片

  ```js
  const ImageminPlugin = require('imagemin-webpack-plugin').default;
  module.exports = {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
      }),
    ],
  };
  ```

### 12）friendly-errors-webpack-plugin

- 美化控制台，良好的提示错误

## 18.什么是浏览器的热更新

### 1）一切依赖手动

- 每次修改过后需要手动打包

### 2）Watch 模式

```json
{
  "scripts": {
    "build:watch": "webpack --config webpack.config.js"
  }
}
```

- 效果：不用每次手动执行打包脚本

- 待解决问题：需要手动点击刷新才能看到变更后的效果

### 3）Live Reload

```json
// webpack.config.reload.js
{
  "devServer": {
    "static": "./dist", // 为./dist目录中的静态页面文件提供本地服务渲染
  }
}

// package.json
{
  "scripts": {
    "dev:reload": "webpack-dev-server --open --config webpack.config.reload.js"
  }
}
```

- 效果：每次改动都会自动编译并刷新浏览器

- 原理：通过 websocket，可以使打开的网页和本地服务间建立持久化的通信，当源代码发生变更时，就可以通过 Socket 通知到网页端，网页端在接到通知后会自动触发页面刷新

- 待解决问题：每次修改都会刷新浏览器，不能保存页面状态

### 4）Hot Module Replacement

**1.修改 webpack.config.js**

```js
const webpack = require('webpack');
const config = {
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
```

**2.页面使用**

- JS 代码中的热替换

```js
import { text } from './text.js';

const div = document.createElement('div');
document.body.appendChild(div);
function render() {
  div.innerHTML = text;
}
render();
if (module.hot) {
  module.hot.accept('./text.js', function () {
    render();
  });
}
```

## 19.Source Map

```js
// ./webpack.config.js
module.exports = {
  devtool: 'source-map',
};
```

### 1）定义

- Source Map（源代码地图）就是解决此类问题最好的办法，从它的名字就能够看出它的作用：映射转换后的代码与源代码之间的关系。一段转换后的代码，通过转换过程中生成的 Source Map 文件就可以逆向解析得到对应的源代码

- 是一个 json 文件

### 2）模式

**1.Eval 模式**

```js
// ./webpack.config.js
module.exports = {
  devtool: 'eval',
};
```

- eval 指的是 JavaScript 中的一个函数，可以用来运行字符串中的 JavaScript 代码

- eval 函数可以通过 sourceURL 指定代码所属文件路径

- 在这种模式下没有 Source Map 文件，所以只能定位是哪个文件出错

**2.eval-source-map**

- 除了定位文件，还可以定位具体的行列信息

- 能够生成 Source Map 文件，可以反推出源代码

**3.eval-cheap-source-map**

- 虽然也生成了 Source Map 文件，但是这种模式下的 Source Map 只能定位到行，而定位不到列

- 构建速度会提升很多

**4.eval-cheap-module-source-map**

- 名字中不带 module 的模式，解析出来的源代码是经过 Loader 加工后的结果

### 3）总结

- 1.eval：定位文件

- 2.source-map：定位行、列

- 3.cheap：阉割版，只能定位到行

- 4.带 module：可以还原原始代码

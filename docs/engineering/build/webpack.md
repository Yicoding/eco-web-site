---
toc: menu
---

# webpack 基础

- webpack 是一个 JS 代码模块化的打包工具

- webpack-cli 是使用 webpack 的命令行工具

- webpack `默认支持`处理 `JS` 与 `JSON` 文件，`其他类型都处理不了`，必须借助 loader

## 1.概念

### 1）入口(entry)

string | object | array

```js
const config = {
  entry: './path/to/my/entry/file.js', // 单个入口
  entry: ['./app/entry1', './app/entry2'],
  entry: {
    // 分离 应用程序(app) 和 第三方库(vendor) 入口
    app: './src/app.js',
    vendors: './src/vendors.js',
  },
  entry: {
    // 多页面应用程序
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js',
  },
};

module.exports = config;
```

### 2）出口(output)

即使可以存在多个入口起点，但只指定一个输出配置。

```js
const path = require('path');

module.exports = {
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
};
```

### 3）模式(mode)

- development | production | none

- 记住，只设置 NODE_ENV，则不会自动设置 mode

```js
module.exports = {
  mode: 'production', // "production" | "development" | "none"
};
```

or

```js
"script": {
  build: "webpack --mode=production"
}
```

### 4）模块(loader)

loader 用于对模块的源代码进行转换：Loader 就是将 Webpack 不认识的内容转化为认识的内容

- test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件

- use 属性，表示进行转换时，应该使用哪个 loader

三种使用方式

- 1.配置[Configuration]

  ```js
  const config = {
    module: {
      rules: [
        // 配置 Loader
        {
          test: /\.jsx?$/, // 正则匹配命中要使用 Loader 的文件
          include: [
            // 只会命中这里面的文件
            path.resolve(__dirname, 'app'),
          ],
          exclude: [
            // 忽略这里面的文件
            path.resolve(__dirname, 'app/demo-files'),
          ],
          use: [
            // 使用那些 Loader，有先后次序，从后往前执行
            'style-loader', // 直接使用 Loader 的名称
            {
              loader: 'css-loader',
              options: {
                // 给 html-loader 传一些参数
              },
            },
          ],
        },
      ],
      noParse: [
        // 不用解析和处理的模块
        /special-library\.js$/, // 用正则匹配
      ],
    },
  };

  module.exports = config;
  ```

- 2.内联

  ```js
  import Styles from 'style-loader!css-loader?modules!./styles.css';
  ```

- 3.CLI

  ```js
  "script": {
    build: "webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'"
  }
  ```

### 5）插件(plugins)

用于执行范围更广的任务，包括从打包优化和压缩，一直到重新定义环境中的变量

- 1.剖析

  - webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问

  ```js
  const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

  class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
      compiler.hooks.run.tap(pluginName, (compilation) => {
        console.log('webpack 构建过程开始！');
      });
    }
  }
  ```

- 2.配置中使用

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
  const webpack = require('webpack'); // 访问内置的插件

  const config = {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
  };

  module.exports = config;
  ```

- 3.Node API

  ```js
  const webpack = require('webpack'); //访问 webpack 运行时(runtime)
  const configuration = require('./webpack.config.js');

  let compiler = webpack(configuration);
  compiler.apply(new webpack.ProgressPlugin());

  compiler.run(function (err, stats) {
    // ...
  });
  ```

## 2.解析规则

### 1）绝对路径

```js
import '/home/me/file';
import 'C:\\Users\\me\\file';
```

### 2）相对路径

```js
import '../src/file1';
import './file2';
```

### 3）模块路径

```js
import 'module';
import 'module/lib/file';
```

## 3.构建目标 targets

```js
module.exports = {
  target: 'web', // <=== 默认是 'web'，可省略
  target: 'node', // node环境
};
```

## 4.HRM

模块热替换(HMR - Hot Module Replacement)功能会在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面，热更新可使用`webpack-dev-server`

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

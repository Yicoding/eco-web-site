---
toc: menu
---

# craco

## 1.背景

- 使用 CRA 脚手架创建的项目，如果想要修改编译配置，通常可能会选择 npm run eject 弹出配置后魔改。但是，eject 是不可逆操作，弹出配置后，`将无法跟随官方的脚步去升级项目的 react-script 版本`
- 如果想要无 eject 重写 CRA 配置，目前成熟的是下面这几种方式

  - 1.通过 CRA 官方支持的 `--scripts-version` 参数，创建项目时使用自己重写过的 react-scripts 包
  - 2.使用 `react-app-rewired + customize-cra` 组合覆盖配置
  - 3.使用 `craco` 覆盖配置

## 2.什么是 CRACO？

- CRACO 是 Create React App Configuration Override 的缩写，顾名思义就是对通过 create-react-app 创建的项目配置实现重写

## 3.CRACO 作用

- 可以通过在应用程序的根目录添加单个配置如 craco.config.js 文件并自定义 eslint、babel、postcss 配置等，不需要使用 eject 即可获得 create-react-app 和自定义配置的好处。（通常可能会选择  npm run eject 弹出配置后魔改。但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的  react-script  版本）

## 4.安装

### 1）安装 craco

```bash
 yarn add  @craco/craco
 # 或者
 npm install  @craco/craco --save
```

### 2）在项目根目录新建 craco.config.js 文件

- 也可以是 .cracorc.js 、.cracorc，cosmiconfig 了解一下

```js
module.exports = {};
```

### 3）修改 package.json 中的启动命令

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

## 5.配置

- CRACO 配置有 craco.config.ts，craco.config.js，.cracorc.ts，.cracorc.js 或.cracorc 文件，或在指定的文件 package.json。该文件分为几个部分，代表构成默认 create react app 的主要部分

- 如果同一目录下有多个配置文件，CRACO 只会使用一个。优先顺序是：

  - package.json
  - craco.config.ts
  - craco.config.js
  - .cracorc.ts
  - .cracorc.js
  - .cracorc

### 1）扩展 babel 配置

```js
/* craco.config.js */

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
          // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
          // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
    ],
    plugins: [
      // 配置 babel-plugin-import
      [
        'import',
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
        'antd',
      ],
      // 配置解析器
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['babel-plugin-styled-components', { displayName: true }],
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
```

### 2）检测模块编译情况

```js
new WebpackBar({ profile: true }),
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    include: /src/,
    failOnError: true,
    allowAsyncCycles: false,
    cwd: process.cwd(),
  });
```

### 3）观察打包进度

```js
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
module export = {
  webpack: {

    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin()
    ]
  }
}

```

### 4）修改打包输出目录

```js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist';
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/',
      };
      return webpackConfig;
    },
  },
};
```

### 5）热更新 Hot-loader 扩展

- 常用的热更新方案 react-hot-loader

- craco 也帮我们提供了两种 craco-plugin-react-hot-reload、craco-fast-refresh

**1.react-hot-loader**

```js
// step1：webpack.config.js中引入别名配置解除相关警告
// yarn add @hot-loader/react-dom
module.exports = {
  // ...
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
step2：注入引用App.js
import { hot } from 'react-hot-loader/root'
function App {
    return (
    <div>ceshi</div>
    )
}
export default hot(App)

```

**2.craco-plugin-react-hot-reload**

```js
/* craco.config.js */
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
};
```

**3.craco-fast-refresh**

- 相对于 react-hot-loader 好用得多，零配置，不需要修改项目代码

```js
// step1：增加插件
/* craco.config.js */
const FastRefreshCracoPlugin = require('craco-fast-refresh');
module.exports = () => {
  return {
    plugins: [
      {
        plugin: FastRefreshCracoPlugin,
      },
    ],
  };
};
// step2： 注入引用App.js
import React from 'react';
import { hot } from 'react-hot-loader';
const App = () => <div>Hello World!</div>;

export default hot(module)(App);
```

## 6.完整配置

```js
/* craco.config.js */
/**
 * TODO: 区分环境 —— NODE_ENV
 * - whenDev ☞ process.env.NODE_ENV === 'development'
 * - whenTest ☞ process.env.NODE_ENV === 'test'
 * - whenProd ☞ process.env.NODE_ENV === 'production'
 */
const {
  when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES
} = require('@craco/craco')
const webpack = require('webpack')
const CracoLessPlugin = require('craco-less')
const CracoAntDesignPlugin = require('craco-antd')
const CracoVtkPlugin = require('craco-vtk')
const WebpackBar = require('webpackbar')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const FastRefreshCracoPlugin = require('craco-fast-refresh')
const TerserPlugin = require('terser-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const path = require('path')

// 判断编译环境是否为生产
const isBuildAnalyzer = process.env.BUILD_ANALYZER === 'true'

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      '@': pathResolve('.'),
      src: pathResolve('src'),
      assets: pathResolve('src/assets'),
      common: pathResolve('src/common'),
      components: pathResolve('src/components'),
      hooks: pathResolve('src/hooks'),
      pages: pathResolve('src/pages'),
      store: pathResolve('src/store'),
      utils: pathResolve('src/utils')
        // 此处是一个示例，实际可根据各自需求配置
    },
    plugins: [
      // webpack构建进度条
      new WebpackBar({
        profile: true
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
      // 时间转换工具采取day替换moment
      new AntdDayjsWebpackPlugin(),
      // // 新增模块循环依赖检测插件
      ...whenDev(
        () => [
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd()
          }),
          // webpack-dev-server 强化插件
          new DashboardPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ], []
      ),
      /**
       * 编译产物分析
       *  - https://www.npmjs.com/package/webpack-bundle-analyzer
       * 新增打包产物分析插件
       */
      ...when(
        isBuildAnalyzer, () => [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static', // html 文件方式输出编译分析
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, `analyzer/index.html`)
          })
        ], []
      ),
      ...whenProd(
        () => [
          // new TerserPlugin({
          //   // sourceMap: true, // Must be set to true if using source-maps in production
          //   terserOptions: {
          //     ecma: undefined,
          //     parse: {},
          //     compress: {
          //       warnings: false,
          //       drop_console: true, // 生产环境下移除控制台所有的内容
          //       drop_debugger: true, // 移除断点
          //       pure_funcs: ['console.log'] // 生产环境下移除console
          //     }
          //   }
          // }),
          // 打压缩包
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')/div>),
            threshold: 1024,
            minRatio: 0.8
          })
        ], []
      )
    ],
    //抽离公用模块
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true
          }
        }
      }
    },
    /**
     * 重写 webpack 任意配置
     *  - configure 能够重写 webpack 相关的所有配置，但是，仍然推荐你优先阅读 craco 提供的快捷配置，把解决不了的配置放到 configure 里解决；
     *  - 这里选择配置为函数，与直接定义 configure 对象方式互斥；
     */
    configure: (webpackConfig, {
      env, paths
    }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist' // 配合输出打包修改文件目录
        // webpackConfig中可以解构出你想要的参数比如mode、devtool、entry等等，更多信息请查看webpackConfig.json文件
        /**
         * 修改 output
         */
      webpackConfig.output = {
          ...webpackConfig.output,
            // ...{
            //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
            //   chunkFilename: 'static/js/[name].js'
            // },
            path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
            publicPath: '/'
        }
        /**
         * webpack split chunks
         */
        // webpackConfig.optimization.splitChunks = {
        //   ...webpackConfig.optimization.splitChunks,
        //   ...{
        //     chunks: 'all',
        //     name: true
        //   }
        // }
        // 返回重写后的新配置
      return webpackConfig
    }
  },
  babel: {
    presets: [],
    plugins: [
      // AntDesign 按需加载
      ['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }, 'antd'],
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }] // 用来支持装饰器
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, {
      env, paths
    }) => {
      return babelLoaderOptions
    }
  },
  /**
   * 新增 craco 提供的 plugin
   */
  plugins: [
    // 热更新
    ...whenDev(
      () => [{
        plugin: FastRefreshCracoPlugin
      }, {
        plugin: CracoVtkPlugin()
      }, {
        plugin: new AntdDayjsWebpackPlugin()
      }], []
    ),
    // 方案1、配置Antd主题less
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         javascriptEnabled: true
    //       }
    //     }
    //   }
    // },
    // 方案2、配置Antd主题
    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     customizeTheme: {
    //       '@primary-color': '#FF061C'
    //     }
    //   }
    // },
    // 方案3、配置Antd主题
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "antd.customize.less"
        ),
      },
    },
  ],
  devServer: {
    port: 9000,
    proxy: {
      '/api': {
        target: 'https://placeholder.com/',
        changeOrigin: true,
        secure: false,
        xfwd: false,
      }
    }
  }
}

```

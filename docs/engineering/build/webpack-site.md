---
toc: menu
---

# webpack 从 0 搭建

## 1.初始化目录

- 生成 package.json 文件

```bash
yarn init
```

## 2.安装 webpack

- 安装到 devDependencies

```bash
yarn add webpack webpack-cli -D
```

## 3.新建文件

### 1）webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### 2）index 入口文件

- src 目录下新建 index.js

```js
// src/index.js
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

document.body.appendChild(component());
```

### 3）创建 html 文件

- dist 目录下新建 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

### 4）修改 package.json 文件

```js
"scripts": {
  "build": "webpack" // 默认读取--config webpack.config.js
}
```

## 4.加载 css

- 作用：

  - 添加后可以这样使用：`import './style.css'`

### 1）安装依赖

```bash
yarn add style-loader css-loader -D
```

### 2）添加 loader

- webpack.config.js 中添加

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
}
```

## 5.加载 image

- 作用：

  - 添加后，可以这样使用：`import MyImage from './my-image.png'`

- `webpack 5` 中，可以使用内置的 `Asset Modules`

- 修改 webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    },
  ],
}
```

## 6.加载 fonts 字体

- 作用：在项目中添加一些字体文件

- 使用 `Asset Modules` 可以接收并加载`任何类型文件`

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
}
```

- 页面中使用

```css
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'), url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

.hello {
  color: red;
  font-family: 'MyFont';
  background: url('./icon.png');
}
```

## 7.导入 CSV、TSV 和 XML

### 1）安装依赖

```bash
yarn add csv-loader xml-loader -D
```

### 2）修改 loader

- webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(csv|tsv)$/i,
      use: ['csv-loader'],
    },
    {
      test: /\.xml$/i,
      use: ['xml-loader'],
    },
  ],
}
```

## 8.HtmlWebpackPlugin

### 1）安装依赖

```bash
yarn add html-webpack-plugin -D
```

### 2）修改 webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

## 9.清理 /dist 文件夹

- 在每次构建前清理 dist 目录

- 用 output.`clean` 实现

```js
// webpack.config.js
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
},
```

## 10.添加 source map

- 作用：追踪 error(错误) 和 warning(警告) 在源代码中的原始位置

```js
// webpack.config.js
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
};
```

### 1）使用表现

| devtool                      | build | rebuild       | 显示代码 | SourceMap 文件 | 描述         |
| ---------------------------- | ----- | ------------- | -------- | -------------- | ------------ |
| (none)                       | 很快  | 很快          | 无       | 无             | 无法定位错误 |
| eval                         | 快    | 很快（cache） | 编译后   | 无             | 定位到文件   |
| source-map                   | 很慢  | 很慢          | 源代码   | 有             | 定位到行列   |
| eval-source-map              | 很慢  | 一般（cache） | 编译后   | 有（dataUrl）  | 定位到行列   |
| eval-cheap-source-map        | 一般  | 快（cache）   | 源代码   | 有             | 定位到行     |
| eval-cheap-module-source-map | 慢    | 快（cache）   | 源代码   | 有             | 定位到行     |
| inline-source-map            | 很慢  | 很慢          | 源代码   | 有（dataUrl）  | 定位到行     |
| hidden-source-map            | 很慢  | 很慢          | 源代码   | 有             | 无法定位错误 |
| nosource-source-map          | 很慢  | 很慢          | 源代码   | 无             | 定位到文件   |

### 2）校验规则

| 关键字    | 描述                                                    |
| --------- | ------------------------------------------------------- |
| inline    | 代码内通过 dataUrl 形式引入 SourceMap                   |
| hidden    | 生成 SourceMap 文件，但不使用                           |
| eval      | eval(...) 形式执行代码，通过 dataUrl 形式引入 SourceMap |
| nosources | 不生成 SourceMap                                        |
| cheap     | 只需要定位到行信息，不需要列信息                        |
| module    | 展示源代码中的错误位置                                  |

### 3）推荐配置

**1.本地开发**

- 推荐：`eval-cheap-module-source-map`

- 理由：

  - 本地开发首次打包慢点没关系，因为 eval 缓存的原因，rebuild 会很快

  - 开发中，我们每行代码不会写的太长，只需要定位到行就行，所以加上 cheap

  - 我们希望能够找到源代码的错误，而不是打包后的，所以需要加上 module

**2.生产环境**

- 推荐：`不使用 source map`

- 理由：打包速度快

## 11.使用 webpack-dev-server

- 提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能

### 1）安装依赖

```bash
yarn add webpack-dev-server -D
```

### 2）修改 webpack.config.js

```js
module.exports = {
  devServer: {
    static: './dist',
  },
};
```

### 3）修改 package.json

```js
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack"
},
```

## 12.SplitChunksPlugin 代码分割

- 修改 webpack.config.js

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

- 利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致:

```js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
```

## 13.提取 runtime 代码

```js
optimization: {
  runtimeChunk: 'single',
},
```

## 14.没有发生改变的文件，打包后，不重新生成

```js
optimization: {
  moduleIds: 'deterministic',
}
```

## 15.webpack-bundle-analyzer

- bundle 分析

### 1）安装依赖

```bash
yarn add -D webpack-bundle-analyzer
```

### 2）修改 webpack.config.js

```js
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
};

if (process.env.ANALYZER) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
```

### 3）修改 package.json

```js
"scripts": {
  "start": "webpack serve --open",
  "analyz": "analyz": "ANALYZER=true npm run build",
  "build": "webpack"
}
```

## 16.环境变量

- 使用 `--env 参数`，可以允许传入任意数量的环境变量

### 1）package.json

```js
"scripts": {
  "mock": "webpack serve --open --env MOCK=true --env MODE=development"
},
```

### 2）webpack.config.js

```js
module.exports = function (env) {
  console.log('MOCK:', env.MOCK); // MOCK: true
  console.log('MODE:', env.MODE); // MODE: development
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
```

## 17.启用 HMR

- 热模块替换 hot: true

- 从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的

```js
// webpack.config.js
devServer: {
  static: './dist',
  hot: true,
  port: 9000, // 端口
  proxy: {
    '^/f': { // 代理所有`api文件`接口中url以/f开头的请求
      target: 'http://localhost:9090', //
      ws: true, // 代理 websockets
      changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
      pathRewrite: {
          '^/f': '', // 把链接中开头的api替换成''
      }
    }
  }
},
```

## 18.Tree Shaking

- package.json 中设置 sideEffects

- 如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false

```js
"sideEffects": false
```

- 有副作用时，可以改为提供一个数组

```js
"sideEffects": ["*.less"]
```

- 如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除

## 19.webpack-merge

- 用于区分开发和生产环境配置

### 1）安装依赖

```bash
yarn add -D webpack-merge
```

### 2）新建文件

- webpack.common.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

- webpack.dev.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
```

- webpack.prod.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
```

### 3）配置 npm scripts

```js
"scripts": {
  "start": "webpack serve --open --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js"
},
```

## 20.压缩 css

### 1）mini-css-extract-plugin

- 作用：分离样式文件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
```

### 2）生产模式压缩 css-minimizer-webpack-plugin

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(), // 将打包后的css代码压缩（去除换行、空格等）
    ],
  },
};
```

## 21.加载 Polyfills

### babel-polyfill

```bash
# 安装依赖
yarn add babel-polyfill
```

```js
// 使用
import 'babel-polyfill';
```

## 22.typescript

### 1）安装依赖

```bahs
yarn add -D typescript ts-loader
```

### 2）添加 tsconfig.json 文件

```bahs
tsc --init
```

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "sourceMap": true, // 开启source map
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

### 3）修改 webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### 4）使用第三方类库

- 例如：lodash

```bash
yarn add -D @types/lodash
```

### 5）导入其他资源

```js
// custom.d.ts
declare module '*.svg' {
  const content: any;
  export default content;
}
```

## 23.publicPath

- 用来指定应用程序中所有资源的基础路径

```js
// webpack.config.js
output: {
  publicPath: 'https://xxx.com/projectname/',
},
```

## 25.postcss-loader

- 自动添加 CSS3 部分属性的浏览器前缀

### 1）安装依赖

```bash
yarn add postcss postcss-loader postcss-preset-env -D
```

### 2）修改 webpack.config.js

```js
const config = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有的 css 文件
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  // ...
};
```

### 3）创建 postcss 配置文件 postcss.config.js

```js
module.exports = {
  plugins: [require('postcss-preset-env')],
};
```

### 4）创建 postcss-preset-env 配置文件 .browserslistrc

```bash
last 2 versions # 回退两个浏览器版本
> 0.5% # 全球超过0.5%人使用的浏览器，可以通过 caniuse.com 查看不同浏览器不同版本占有率
IE 10 # 兼容IE 10
```

## 26.使用 less

### 1）安装依赖

```bash
yarn add -D less less-loader
```

### 2）修改 webpack.config.js

```js
const config = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有的 css 文件
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
};
```

## 27.JS 兼容性(Babel)

### 1）安装依赖

```bash
yarn add babel-loader @babel/core @babel/preset-env -D
```

### 2）修改 webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.js$/i,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
          }
        }
      ]
    },
  ]
},
```

### 3）第二种方式：将 Babel 配置文件提取出来

- 根目录下新增 .babelrc.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // useBuiltIns: false 默认值，无视浏览器兼容配置，引入所有 polyfill
        // useBuiltIns: entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
        // useBuiltIns: usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        useBuiltIns: 'entry',
        corejs: '3.9.1', // 是 core-js 版本号
        targets: {
          chrome: '58',
          ie: '11',
        },
      },
    ],
  ],
};
```

### 4）配置 Babel 插件

- 使用装饰器@

**1.安装依赖**

```bash
yarn add babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D
```

**2..babelrc.js 加上插件的配置**

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.9.1',
        targets: {
          chrome: '58',
          ie: '11',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
```

## 28.配置文件 hash 值

```js
output: {
  filename: '[name].[hash:8].[ext]';
}
```

| 占位符        | 解释                       |
| :------------ | -------------------------- |
| `name`        | 文件名                     |
| `hash`        | 每次构建生成的唯一 hash 值 |
| `chunkhash`   | 根据 chunk 生成 hash 值    |
| `contenthash` | 根据文件内容生成 hash 值   |
| ext           | 文件后缀名                 |
| path          | 文件相对路径               |
| folder        | 文件所在文件夹             |

- hash、chunkhash、contenthash 区别：

  - hash ：任何一个文件改动，整个项目的构建 hash 值都会改变

  - chunkhash：文件的改动只会影响其所在 chunk 的 hash 值

  - contenthash：每个文件都有单独的 hash 值，文件的改动只会影响自身的 hash 值

## 29.用 babel-laoder 打包 jsx

### 1）安装

```bash
yarn add @babel/preset-react -D
```

### 2）修改配置

```js
use: {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react' // 新增
    ]
  }
}
```

## 30.用 babel-loader 打包 tsx

### 1）安装依赖

```bash
yarn add -D @types/react
```

### 2）修改 tsconfig.json

```js
"jsx": "react-jsx"
```

## 31.给 webpack 配置 eslint

```bash
yarn add -D
eslint-config-react-app
@typescript-eslint/eslint-plugin@^4.0.0
@typescript-eslint/parser@^4.0.0
babel-eslint@^10.0.0
eslint@^7.5.0
eslint-plugin-flowtype@^5.2.0
eslint-plugin-import@^2.22.0
eslint-plugin-jsx-a11y@^6.3.1
eslint-plugin-react@^7.20.3
eslint-plugin-react-hooks@^4.0.8
```

```js
// .eslintrc.js
module.exports = {
  //继承 eslint-config-react-app这个里面包含create react app的eslint配置
  extends: 'react-app',
  rules: {
    // jsx使用 react
    'react/jsx-uses-react': [2],
    // 提示要在 JSX 文件里手动引入 React
    'react/react-in-jsx-scope': [2],
    'no-console': [0],
  },
};
```

- 让 webpack 可以感知到 eslint 的配置,从而在编译的过程中提示报错信息

```bash
yarn add eslint-webpack-plugin -D
```

```js
// webpack.config.js
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx'], //不加就不会去检测.jsx文件了
    }),
  ],
};
```

## 32.让 eslint 支持 TypeScript

```bash
yarn add eslint-config-airbnb-typescript @types/react -D
```

```js
// .eslintrc.js
//覆盖之前的配置（检测ts代码）
overrides: [
  {
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: './tsconfig.json',
    },
    extends: ['airbnb-typescript'],
    rules: {
      '@typescript-eslint/object-curly-spacing': [0],
      'import/prefer-default-export': [0],
      'no-console': [0],
      'import/extensions': [0],
    },
  },
];
```

## 33.webpack 优化 单独打包 runtime

```js
optimization: {
  runtimeChunk: 'single',  // 运行时文件单独打包
},
```

### 为什么要单独打包 runtime

- runtime 里面的文件是 webpack 为了运行 main.js 文件所要依赖的文件

- 如果不单独打包，如果我们修改了 webpack 的配置之后 mian.js 里面的内容就会发生变化，用户的缓存就会失效，如果单独打包的话当修改完 webpack 的配置之后只，如果我们没有改变 main.js 里面的内容的话，就不会重新打包 main.js 的内容，这样就可以节省宽带，提高用户访问页面的速度

```js
// webpack.config.js
optimization: {
  moduleIds: 'deterministic',
  runtimeChunk: 'single',  //运行时文件单独打包
  splitChunks: {
    cacheGroups: {
      common: {
        priority: 5,
        minSize: 0,
        minChunks: 2, // 同一个文件至少被多少个入口引用了
        chunks: 'all',
        name: 'common'
      },
      vendor: {
        priority: 10,
        minSize: 0, /* 如果不写 0，由于 React 文件尺寸太小，会直接跳过 */
        test: /[\\/]node_modules[\\/]/, // 为了匹配 /node_modules/ 或 \node_modules\
        name: 'vendors', // 文件名
        chunks: 'all',  // all 表示同步加载和异步加载，async 表示异步加载，initial 表示同步加载
        // 这三行的整体意思就是把两种加载方式的来自 node_modules 目录的文件打包为 vendors.xxx.js
        // 其中 vendors 是第三方的意思
      }
    },
  },
},
```

## 34.webpack 多页面

```js
// webpack.config.js
entry: {
  main: './src/index.js',
  admin: './src/admin.js'
},
plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmlWebpackPlugin({
    filename: 'admin.html',
    chunks: ['admin']
  })
]
```

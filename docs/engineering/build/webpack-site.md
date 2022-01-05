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
    <title>Document</title>
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
  ];
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
  ];
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
  ];
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
      new CssMinimizerPlugin(),
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

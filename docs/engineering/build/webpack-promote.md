---
toc: menu
---

# webpack 性能优化

## 1.Loaders

- 将 loaders 应用于最少数量的必要模块

  - 添加 include

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};
```

## 2.Resolving

- 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数

- 不使用 symlinks 时，设置 `resolve.symlinks: false`

- 如果使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 `resolve.cacheWithContext: false`

## 3.DllPlugin

- 使用 DllPlugin 为更改不频繁的代码生成单独的编译结果

```js
const { DllPlugin } = require('webpack');

plugins: [
  new DllPlugin({
    context: __dirname,
    name: '[name]_[hash]',
    path: path.join(__dirname, 'manifest.json'),
  }),
];
```

## 4.SplitChunksPlugin

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

## 5.thread-loader

- thread-loader 可以将非常消耗资源的 loader 分流给一个 worker pool

## 6.打包时关闭 source map

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

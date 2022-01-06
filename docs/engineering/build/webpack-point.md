---
toc: menu
---

# webpack 考点

![image](images/engineering/7.png)

## 1.devDependencies 和 dependencies 的区别

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

- 处理 css

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

### 1）新增资源模块(`asset module`)

- 允许使用资源文件（字体，图标等）而无需配置额外的 loader

  - 1.asset/resource 将资源分割为单独的文件，并导出 url，类似之前的 file-loader 的功能

  - 2.asset/inline 将资源导出为 dataUrl 的形式，类似之前的 url-loader 的小于 limit 参数时功能

  - 3.asset/source 将资源导出为源码（source code）. 类似的 raw-loader 功能

  - 4.asset 会根据文件大小来选择使用哪种类型，当文件小于 8 KB（默认） 的时候会使用 asset/inline，否则会使用 asset/resource

## 7.如何优化构建速度

### 1）构建费时分析

1.安装 speed-measure-webpack-plugin 插件

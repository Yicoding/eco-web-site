---
toc: menu
---

# 前置知识

## 1.为什么要使用 ts

### 1）js 语言存在的问题

- 1.JS 语言`本身的特性`，决定了该语言`无法适应大型复杂的项目`

  - JavaScript 设计之初只是为了补充 Java 的，在浏览器上做一些小的效果，并不是为了做大型复杂项目而开发的

- 2.`弱类型`：某个变量，可以随时更换类型

- 3.`解释性语言`：错误发生的时间是在运行时

- 因此，前端开发中大部分时间是在排错，而这些不起眼的错误占据了我们大量的时间，并且这些修改字母的时间完全是浪费生命，没有任何的意义，也不能提高自身技术能力

- ts 能解决以上问题，能够提高效率、缩减我们项目周期，少犯一些莫名其妙的错误

### 2）TypeScript 语言特点

- TypeScript 简称 TS，TypeScript 是 JavaScript 的`超集`，是一个`可选`的、`静态`的`类型系统`

- TS 和 JS 之间的关系其实就是 Less/Sass 和 CSS 之间的关系
- TS 也是对 JS 进行扩展
- 编写好的 TS 代码最终也会换成 JS
- TypeScript 可以看作是 JavaScript 子类，继承的基础上去扩展

**1.超集**

- TypeScript 是 JavaScript 的`超集`，也就是说 TypeScript 包含了 JavaScript 的所有功能，在此之上还增加了`类型系统`

**2.类型系统**

- 对代码中所有的标识符（变量、函数、参数、返回值）进行`类型检查`

**3.可选的**

- 类型系统可用`可不用`

**4.静态的**

- 静态就是类型检查发生的时间点是在`编译的时候`，`而非运行时`，因此就解决了 js 是解释性语言的问题，代码运行之前有一个编译的过程， 需要注意的是 js 代码在`运行过程`中 `TS` 是`不参与类型检查`的

## 2.静态类型

- 一门语言在`编译时`报错，那么是`静态语言`
- 如果在`运行时`报错，那么是`动态语言`

- TypeScript 是`静态弱类型语言`，`不是` `强语言`
- TypeScript 几乎不限制 JavaScript 中原有的隐式类型转换，它对类型的隐式转换是有容忍度的

- 可以避免低级错误

- 通过 TypeScript 提供的类型提示功能，可以`节省`大量`沟通成本`、代码阅读成本等等

## 3.严谨不失灵活

- TypeScript 由于兼容 JavaScript 所以其灵活度可以媲美 JavaScript

- 检查严格程度是可以通过 tsconfig.json 来配置的

- TypeScript 并`不是`类型`定义本身`，而`是`类型`定义`的`形状`（Shape）

## 4.TypeScript 缺点

- 配置学习成本高

  - 用 ESLint 做语法检查，其配置方式跟 JavaScript 完全不同，需要额外学习成本

- TypeScript 的类型系统其实比较复杂，又是额外的学习成本

## 5.优势总结

- 规避大量低级错误，避免时间浪费，省时
- 减少多人协作项目的成本，大型项目友好，省力
- 良好代码提示，不用反复文件跳转或者翻文档，省心

## 6.使用 TypeScript

### 1）安装

```shell
npm install -g typescript
```

### 2）创建环境

```bash
tsc --init
```

- 目录下多了一个 tsconfig.json 文件

```json
{
  "compilerOptions": {
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES5'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "moduleResolution": "node", // 选择模块解析策略
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。
    "sourceMap": true, // 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "alwaysStrict": true, // 以严格模式检查模块，并在每个文件里加入 'use strict'
    "declaration": true, // 生成相应的.d.ts文件
    "removeComments": true, // 删除编译后的所有的注释
    "noImplicitReturns": true, // 不是函数的所有返回路径都有返回值时报错
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "lib": ["es6", "dom"], // 指定要包含在编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts"
  ],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

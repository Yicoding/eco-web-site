---
toc: menu
---

# 酷家乐

## 1.一面

### 1）变量提升

- 严格模式下，以下输出的结果

```js
'use strict';
console.log(a); // undefined
var a = 0;
function fn() {
  var b = 1;
}
fn();
console.log(a); // 0
console.log(b); // 报错

// 2.
('use strict');
console.log(v1); // undefined
var v1 = 100;
function foo() {
  console.log(v1); // undefine,由于会存在变量提升，相当于var v1;console.log(v1);v1=200;
  var v1 = 200;
  console.log(v1); // 200
}
foo();
console.log(v1); // 100
```

### 2）变量提升优缺点

- 优点：

  - 1.容错性更好：js 作为一个脚本语言，在代码解析阶段，对 js 进行预编译，就可以发现一些语法上的错误，及时抛出错误，容错性更好
  - 2.声明提升可以提高性能：在解析阶段函数的语法检查与预编译，操作只执行一次，目的为了提升性能

- 缺点：难以理解，相比其他语言来说，不够规范

### 3）ts 和 js 的不同

- js 语言本身的特性，无法适应大型项目，由于 js 是弱语言类型，声明的变量可以随时进行类型替换，同时 js 属于解释性语言，错误发生在执行时，前端大部分时间都在排错，占用了大量时间

- ts 是 js 的超集，能够提供类型检查，能在 js 编译时进行检查报错

- 通过 ts 提供的类型提示功能，减少沟通成本、代码的阅读成本

### 4）ts 在 webpack 打包时的优化

- 使用 thread-loaders 多进程打包：use: ['thread-loader']

### 5）用过哪些 webpack 插件

- CopyWebpackPlugin：将单个文件或目录复制到生成目录

- HtmlWebpackPlugin：自动引入脚本和样式表，可使用模版选项配置模版

- MiniCssExtractPlugin： CSS 提取到单独的文件中

- hot-module-replacement-plugin：热更新

- terser-webpack-plugin：压缩 js

- optimize-css-assets-webpack-plugin：压缩 css

- imagemin-webpack-plugin：压缩图片

### 6）webpack plugin 原理

- compiler 生命周期：

  - entryOption:webpack 开始读取配置文件的 Entries,递归遍历所有的入口文件.
  - run: 程序即将进入构建环节
  - compile: 程序即将创建 compilation 实例对象
  - make:compilation 实例启动对代码的编译和构建
  - emit: 所有打包生成的文件内容已经在内存中按照相应的数据结构处理完毕,下一步会将文件内容输出到文件系统,emit 钩子会在生成文件之前执行(通常想操作打包后的文件可以在 emit 阶段编写 plugin 实现).
  - done: 编译后的文件已经输出到目标目录,整体代码的构建工作结束时触发

- 发布-订阅的事件机制,webpack 内部借助了 Tapable 第三方库实现了事件的绑定和触发

### 7）react diff

- 1.分层对比

  - DOM 节点之间的跨层级操作并不多，同层级操作是主流，react diff 放弃跨层级节点的比较，只针对相同层级的节点作对比

- 类型一致的节点才有继续 diff 的必要

- 3.key 属性设置，可以尽可能重用同一层级内的节点

### 8）react 设置了重复的 key

### 9）react 合成事件和原生事件都注册，哪个有效

- 都有效，原生事件要快于合成事件触发，不要一起设置

### 10）原生事件中阻止冒泡，合成事件将不再触发

```js
class Demo extends React.PureComponent {
  componentDidMount() {
    const $this = ReactDOM.findDOMNode(this);
    $this.addEventListener('click', this.onDOMClick, false);
  }

  onDOMClick = (evt) => {
    console.log('dom event');
  };

  onClick = (evt) => {
    console.log('react event');
  };

  render() {
    return <div onClick={this.onClick}>Demo</div>;
  }
}
```

### 11）算法

- 背包问题：递归加优化

```js
/**
 * @param {number} n
 * @return {number}
 */
// 定义记忆数组 f
const f = [];
const climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  // 若f[n]不存在，则进行计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // 若f[n]已经求解过，直接返回
  return f[n];
};
```

- 使用动态规划解决

```js
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应的结果
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  // 返回目标值
  return f[n];
};
```

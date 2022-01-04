---
toc: menu
---

# 模块化规范

**1.模块化的作用**

- 抽取公共代码、隔离作用域、依赖管理

**2.模块化历史**

- 无模块化(IIFE) -> CommonJS -> AMD -> CMD -> ESModule，特殊 UMD

## 1.IIFE

- 使用自执行函数来编写模块化

- 特点：`在一个单独的函数作用域中执行代码，避免变量冲突`

```js
(function () {
  return {
    data: [],
  };
})(jQuery); //注入对象
```

## 2.commonJS

![image](images/engineering/1.png)

- 1.服务器端 node，浏览器端 webpack|browserfy

- 2.文件即模块，模块加载同步：服务器端模块加载是运行时同步加载，浏览器模块加载是提前编译打包处理

- 3.exports = module.exports 输出（不能给 exports 赋值，导致与 module 引用断开）， require 引入

- 4.缓存：require 值会缓存，通过 require 引用文件时，会将文件执行一遍后，将结果通过浅克隆的方式，写入全局内存，后续 require 该路径，直接从内存获取，无需重新执行文件

- 5.模块输出是值的拷贝，一但输出，模块内部变化后，无法影响之前的引用，而 ESModule 是引用拷贝

- 6.commonJS 运行时加载，ESModule 编译阶段引用

  - CommonJS 在引入时是加载整个模块，生成一个对象，然后再从这个生成的对象上读取方法和属性

  - ESModule 不是对象，而是通过 export 暴露出要输出的代码块，在 import 时使用静态命令的方法引用制定的输出代码块，并在 import 语句处执行这个要输出的代码，而不是直接加载整个模块

## 3.AMD

![image](images/engineering/2.png)

- AMD(Asynchronous module definition)异步的模块定义，浏览器端运行，所有模块默认都是异步加载

- 代表 [requireJS](https://requirejs.org/docs/api.html)

- 使用：定义 define、加载 require、配置 config

```js
// 定义：define(id?, depencies?, factory);
// utils和bar可直接使用
define('foo', ['utils', 'bar'], function (utils, bar) {
  utils.add(1, 2);
  return {
    name: 'foo',
  };
});
// 配置模块：可以直接配置依赖路径
require.config({
  paths: {
    jquery: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js',
  },
});

// 加载模块：提前加载
require(['jquery'], function (jquery) {
  // ....
});

// 提前加载执行顺序
// RequireJS
define('a', function () {
  console.log('a load');
  return {
    run: function () {
      console.log('a run');
    },
  };
});

define('b', function () {
  console.log('b load');
  return {
    run: function () {
      console.log('b run');
    },
  };
});

require(['a', 'b'], function (a, b) {
  console.log('main run'); // 执行
  a.run();
  b.run();
});

// a load
// b load
// main run
// a run
// b run
```

## 4.CMD

![image](images/engineering/3.png)

- 代表 seaJS，特点支持动态引入依赖文件，按需加载

- 整合了 commonJS 和 AMD 的特点，浏览器端运行

- 机制和 AMD 类似，最大的区别就是 CMD 强调延迟加载，对应的依赖等到回调函数里执行具体依赖语句，才会去加载，但是 AMD 在后续版本里也支持了延迟加载的写法

```js
// 引入require
var fs = require('fs'); //同步
require.async('./module3', function (m3) {}); //异步

// sea.js，按需引入
define('a', function (require, exports, module) {
  console.log('a load');
  exports.run = function () {
    console.log('a run');
  };
});

define('b', function (require, exports, module) {
  console.log('b load');
  exports.run = function () {
    console.log('b run');
  };
});

define('main', function (require, exports, module) {
  console.log('main run');
  var a = require('a');
  a.run();
  var b = require('b');
  b.run();
});

seajs.use('main');

// main run
// a load
// a run
// b load
// b run
```

## 5.UMD

- 兼容 commonJS 和 AMD 模块化语法，作为一种 同构(isomorphic) 的模块化解决方案

- 判断这些模块化规范的特征值，判断出当前究竟在哪种模块化规范的环境下，然后把模块内容用检测出的模块化规范的语法导出

```js
(function (self, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // 当前环境是 CommonJS 规范环境
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // 当前环境是 AMD 规范环境
    define(factory);
  } else {
    // 什么环境都不是，直接挂在全局对象上
    self.umdModule = factory();
  }
})(this, function () {
  return function () {
    return Math.random();
  };
});
```

## 6.ESModule 规范

![image](images/engineering/4.png)

- 服务端和浏览器端通用，ESModule 是由 JS 解释器实现，commonjs 和 amd 是在宿主环境中运行时实现

- import 输入、export 输出（export default Module、export default Module）

```js
// export 一个模块只能有一个默认输出
export var firstName = 'scp'
export var lastName = 'scp'
var firstName = 'scp'
var lastName = 'scp'
export {firstName, lastName as b}
export default firstName

// import 无{}为默认, *为模块整体加载
export function crc32(){}
import {crc32} from 'crc32'

export default function crc32(){}
import crc32 from 'crc32'

import * as circle from './circle'
circle.area(4)
circle.circumference(14)
```

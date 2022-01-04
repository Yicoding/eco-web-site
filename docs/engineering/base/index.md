---
toc: menu
---

# 前端工程化

## 1.工程化概要

- 系统级体系建设：编码、测试、构建、发布、运行、维护一整套体系

  - 编码（可学习 umi）

    - 技术选型：React\vue，KOA\Nestjs
    - 开发模式：前后端分离、同构直出
    - 组件库：antd、elementui
    - mock 方案：PWA mock、node server mock、mockjs
    - 全家桶：路由、状态管理、调试工具
    - 脚手架：手写、CRA、vuecli
    - 目录划分、领域模型设计、分支管理方案、微前端

  - 测试：TDD、自动化测试

  - 构建

    - 打包
    - 文件压缩
    - code splitting
    - cache
    - 更新：增量更新、热更新
    - css 预处理或后处理
    - build bundle or chunk

  - 部署

    - 持续集成/持续交付（CI/CD）
    - NGINX
    - Docker、K8S
    - 灰度
    - 监控
    - Jenkins

- 前端工程化主要聚焦构建流程：使用工具处理与业务无关的内容：js 编译、打包、压缩、图片合并优化等各方面的工程性代码

## 2.具体类目

### 1）包管理工具

- package manager：bower(不常用)、npm、yarn

**1.npm**

- 全称 node package manager，安装在 node_modules 目录下，必须拥有 package.json 文件，所有下载的模块，最终都会记录在 package-lock.json 完全锁定版本，下次我们再 npm install 时，就会先下载 package-lock.json 里面的版本：

  - name：包或者模块的名称
  - version：版本，大版本.次要版本.小版本
    - ～：以大版本和次要版本为主，eg：～ 1.3.2，安装 1.3.x 的最新版本
    - ^：以大版本为主，eg：^1.3.2，安装 1.x.x 的最新版本
  - main：默认加载的入口文件
  - dependencies：运行时需要的模块
  - devDependencies：本地开发需要运行的模块
  - optionalDependencies：可选的模块，即使安装失败安装进程也会正常退出
  - peerDependencies：必须依赖的版本模块

**面试题 1**：devDependencies、dependencies、optionalDependencies 和 peerDependencies 区别

解析：

- 1.devDependencies 是指使用本地开发时需要使用的模块，而真正的业务运行时不用的内容

- 2.dependencies 是指业务运行时需要的模块

- 3.optionalDependencies 是可选模块，安不安装均可，即使安装失败，包的安装过程也不会报错

- 4.peerDependencies 必须依赖的版本模块，一般用在大型框架和库的插件上，例如我们写 webpack--xx-plugin 的时候，对于

使用者而言，他一定会先有 webpack 再安装我们的这个模块，这里的 peerDependencies 就是约束了包中 webpack 的版本

**面试题 2**：npm 中 --save-dev 和 --save 之间的区别

- save-dev 和 save 都会把模块安装到 node_modules 目录下
- save-dev 会将依赖名称和版本写到 devDependencies 下，⽽ save 会将依赖名称和版本写到 dependencies 下

**2.yarn**

- 并发和快

  - 全部安装：yarn install
  - 添加：yarn add xx@xx ｜ yarn add xx --dev | yarn golbal add xx
  - 更新：yarn up xx@xx
  - 移除：yarn remove xx
  - 运行： yarn xx

### 2）静态检查和格式化工具

**1.eslint**

- 安装： npm install eslint --save-dev，本地运行依赖

- 配置：.eslintrc(全局配置)、文件配置`/* no-unused-vars：off */`

- 配置脚本

  - `eslint index.js`，可配置在 package.json 脚本中
  - `eslint --fix *.js` （--fix 默认修复）

- 丰富的插件,可参考： [eslint 官网](https://eslint.org/)

**2.prettier**

- 格式化工具，配置文件.prettierrc，参考：[prettier 官网](https://prettier.io/)

### 3）es 的编译

- 将 es 语法编译成支持的版本语法，常见工具为 babel

### 4）打包工具

- 模块化规范：commonjs、amd、cmd、esmodule，打包抹平模块化差异。

**1.browserify**

- 将 commonjs 模块转换为可在浏览器运行的模块

```js
npm install --save-dev browserify //安装
browserify index.js -o output.js  //执行

//index.js
const moduleA = require('./moduleA');
console.log(moduleA);

//moduleA.js
module.exports = "hello world";

//output.js
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const moduleA = require('./moduleA');
console.log(moduleA);
},{"./moduleA":2}],2:[function(require,module,exports){
module.exports = "hello world";
},{}]},{},[1]);
```

**2.rollup**

- tree shaking 概念：对 esmodule 模块进行静态分析和处理，以及删除无用代码

```js
npm install --save-dev rollup   //安装
rollup index.js --file output.js  //输出

//index.js
import { add } from './module';
const result = add(1, 2);
console.log(result);

//module.js
export function add(a, b) {
  return a + b;
}
export function log() {
  return true;
}

//output.js，tree shaking去除了log()函数
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);
```

**3.编译和打包**

- 对于模块化相关的 import 和 export 关键字， babel 最终会将它编译为包含 require 和 exports 的 CommonJS 规范。 这就造成了另一个问题，这样带有模块化关键词的模块，编译之后还是没办法直接运行在浏览器中，因为浏览器端并不能运行 CommonJS 的模块。为了能在 WEB 端直接使用 CommonJS 规范的模块，除了编译之外，我们还需要一个步骤叫做打包(bundle)

- 所以打包工具例如如 webpack / rollup ，编译工具 babel 它们之间的区别和作用就很清楚了:

  - 打包工具主要处理的是 JS 不同版本间模块化的区别

  - 编译工具主要处理的是 JS 版本间语义的问题

### 5）JS 压缩工具

```js
uglifyjs index.js -o output.js
```

- 添加 --source-map 在运行时生成 sitemap 文件，方便我们进行 debug

### 6）流程化工具

**1.grunt**

- 流程式处理工具

  - 安装：npm install --save-dev grunt
  - 安装相关工具及 grunt 插件：npm --save-dev @babel/core @babel/preset-env grunt-babel grunt-contrib-uglify
  - 配置 gruntfile.js 脚本，执行 grunt 进行编译和压缩等流程

- 问题：容易出现配置兼容等问题

**2.gulp**

- 流程式处理工具，安装 gulp，新建 gulpfifile.js 配置，执行 gulp 任务。相比 grunt 来说，配置更加清晰，是一个链式调用的写法

**3.fis3**

- 通用处理工具：fifis 是国内百度公司在早期发布的一款前端通用处理工具，fifis3 是它的第三代，使用 node.js 重写，不再是一个普通工具，而是一个具有插件化的系统，有着丰富和完善的社区环境，属于前端解决方案

**4.webpack**

- 通用处理工具：

  - webpack 实际上和 gulp grunt 这类的任务处理工具有些类似，但是它本身具有打包的功能，同时也支持通过中间件和插件实现其他领域的功能，最终通过一个命令就能处理完成所有操作

  - webpack 通过 webpack.confifig.js 配置，配置 loader 中间件来对不同文件进行操作，同时通过插件化的配置，支持例如压缩等操作

## 3.工程化典范

- node 的 server 的架构工程说明：

  - 持续集成 CI：gitlab、gerrit 做分支管理
  - 开发技术选型：express、koa
  - 开发 dev：中间件 sso 权限管理、安全控制、ORM 数据库映射、CAT 监控（接口等）
  - 部署 deploy：机器申请（dev/prod）、数据库申请（dev/prod）、网关域名 DNS 映射、编译构建打包(compile.sh 编译、run.sh 执行、check.sh 心跳检测、manifest.yml 构建文件(target: os、version、maven，runscript))
  - 部署平台：deploy server/client，配置文件放置，通过点击操作即可实现部署配置

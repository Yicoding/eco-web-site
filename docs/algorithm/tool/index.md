---
toc: menu
---

# npm

## 1.命令

```js
/*1.用户*/
npm login // 登陆npm
npm whoami // 查看当前npm用户
npm adduser // 添加用户

/*2.配置*/
npm -v // 查看 npm 的版本
npm -l // 查看各个命令的简单用法
npm help // 查看 npm 命令列表
npm config list -l // 查看 npm 的配置

/*3.模块*/
npm init // 初始化生成一个新的package.json文件
npm search <搜索词> [-g] // 搜索模块
npm list // 查看模块
npm -g list --depth=1 // 查看全局安装模块
npm install // 按package.json初始化模块
npm install moduleName // 安装模块
npm install -g moduleName // 全局安装模块
npm uninstall moduleName // 卸载模块
npm remove moduleName // 删除模块
npm update express // 更新模块
npm install --save moduleName // 安装模块，并在package文件的dependencies节点写入依赖
npm install --save-dev moduleName // 安装模块，并在package文件的devDependencies节点写入依赖

/*4.发布模块*/
npm init
npm login
npm search moduleName
npm publish
//报错put 400 bad request
//需在package.json中添加publishConfig: {registry: 发布地址}
npm unpublish // 撤销发布

/*5.scope：@somescope/somepackagename*/
npm install -g @vue/cli // scope是一种把相关的模块组织到一起的一种方式，也会在某些地方影响npm对模块的处理

/*6.程序包链接，用于本地npm包测试*/
// 典例：项目project要使用common公用组件包，common公用组件包为本地npm包未发布至npm仓库，可以使用link命令测试。
npm link moduleName // 解析打包测试命令：npm link，程序包链接，用于本地npm包测试
npm unlink

/*7.全局包查看*/
npm root -g // /usr/local/lib/node_modules
npm list -g // 全局安装的包查看

/*8.本地包查看*/
npm root // /Users/jian/workspace/vue-project-ssr/node_modules
npm list // 全局安装的包查看

/*9.清除缓存*/
npm cache clean --force

/*10.镜像*/
npm config set registry  https://registry.npm.taobao.org // 永久使用
npm --registry https://registry.npm.taobao.org install express // 临时使用淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org // 通过cnpm使用
```

## 2.package.json 解析

### 1）name 和 version

- 包名称、包的版本号，也是发布到 NPM 平台上的唯一标识

### 2）description

- 包的描述信息，将会在`npm search`的返回结果中显示，以帮助用户选择合适的包

### 3）keywords

- 包的关键词信息，是一个字符串数组，同上也将显示在`npm search`的结果中

### 4）homepage

- 包的主页地址

### 5）bugs

- 包的 bug 跟踪主页地址

### 6）license

- 包的开源协议名称，许可证，默认是 ISC、有的默认是 MIT

### 7）author

- 包的作者

### 8）contributors, maintainers

- 包的贡献者，是一个数组

### 9）files

- 包所包含的所有文件，可以取值为文件夹。通常我们还是用.npmignore 来去除不想包含到包里的文件

### 10）main

- 包的入口文件

### 11）bin

- 如果你的包里包含可执行文件，通过设置这个字段可以将它们包含到系统的 PATH 中，这样直接就可以运行，很方便

### 12）man

- 为系统的 man 命令提供帮助文档。帮助文件的文件名必须以数字结尾，如果是压缩的，需要以.gz 结尾

```json
"man": ["./man/foo.1", "./man/bar.1", "./man/foo.2" ]
```

### 13）directories

- commonJS 包所要求的目录结构信息，展示项目的目录结构信息。字段可以是：lib, bin, man, doc, example。值都是字符串

### 14）browserslist

- 浏览器限制(https://caniuse.com/)

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

### 15）repository

- 包的`仓库地址`

```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/youname/xxx.git"
}
```

### 16）scripts

- 通过设置这个可以使 `NPM` 调用一些命令脚本，封装一些功能

```json
"scripts": {
  "start": "babel-node src/pages/index.js",
  "build": "webpack --config config/webpack.config.js",
  "watch": "webpack-dev-server --config config/webpack.config.js --hot --inline --progress"
}
```

### 17）config

- 添加一些设置，可以供 scripts 读取用，同时这里的值也会被添加到系统的环境变量中

```json
"config": {
  "port": "8080"
}
```

### 18）dependencies

- 指定依赖的其它包，这些依赖是指包发布后正常执行时所需要的，也就是线上需要的包。使用下面的命令来安装:

```bash
npm install packageName --save

or

yarn add packageName
```

### 19）devDependencies

- 这些依赖只有在开发时候才需要。使用下面的命令来安装:

```bash
npm install packageName --save-dev

or

yarn add packageName --dev
```

### 20）peerDependencies

- 相关的依赖，如果你的包是插件，而用户在使用你的包时候，通常也会需要这些依赖（插件），那么可以将依赖列到这里

```json
"peerDependencies": {
  "react": ">= 16.8.0"
}
```

### 21）engines

- 指定包运行的环境:

```json
"engines": {
  "node": ">=0.10.3 < 0.12",
  "npm": "~1.0.20"
}
```

### 22）private

- 设为`true`这个包将不会发布到 NPM 平台下

### 23）sideEffects

- 让 `webpack` 去除 `tree shaking` 带来副作用的代码[详解](https://zhuanlan.zhihu.com/p/41795312)

- sideEffects 支持两种写法，一种是 `false`，一种是`数组`

  - false 为了告诉 webpack 我这个 npm 包里的`所有文件代码都是没有副作用的`

  - 数组则表示告诉 webpack 我这个 npm 包里`指定文件代码是没有副作用的`

### 24）包版本规范

- `指定版本`: "moduleName": "1.2.2"，遵循“大版本.次版本.小版本”的格式，`只安装指定版本`

- `~ 指定版本`: "moduleName": "～ 1.2.2"，表示`安装1.2.x版本`，不改变大版本和次版本

- `^ 指定版本`: "moduleName": "^1.2.2"，表示`安装1.x.x版本`，不改变大版本。如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容
- `latest`: `安装最新版本`

![image](images/git/15.png)

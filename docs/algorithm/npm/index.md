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

/*10.添加镜像*/
npm  config  set  registry  https://registry.npm.taobao.org
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

- 包的开源协议名称

### 7）author

- 包的主页地址

### 8）homepage

- 包的主页地址

![image](images/git/15.png)

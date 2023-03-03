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

/*11更新node*/
sudo npm cache clean -f // 清除node的cache（清除node的缓存，这个看情况而定，不是必须的）
sudo npm install -g n // 安装"n"版本管理工具，管理node（没有错，就是n）
sudo npm install npm@latest -g // 更新node版本
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

## 3.npm version 查看 npm 包版本

```bash
# 查看某个 package 的最新版本
npm view package version

# 查看某个 package 在npm服务器上所有发布过的版本
npm view conard versions

# 可查看当前仓库依赖树上所有包的版本信息
npm ls
```

## 4.SemVer 规范

- npm 包 中的模块版本都需要遵循 SemVer 规范——由 Github 起草的一个具有指导意义的，统一的版本号表示规则。实际上就是 Semantic Version(语义化版本)的缩写

### 1）标准版本

- SemVer 规范的标准版本号采用 X.Y.Z 的格式，其中 X、Y 和 Z 为非负的整数，且禁止在数字前方补零。X 是主版本号、Y 是次版本号、而 Z 为修订号。每个元素必须以数值来递增

  - 主版本号(major)：当你做了不兼容的 API 修改

  - 次版本号(minor)：当你做了向下兼容的功能性新增

  - 修订号(patch)：当你做了向下兼容的问题修正

- 例如：1.9.1 -> 1.10.0 -> 1.11.0

### 2）先行版本

- 当某个版本改动比较大、并非稳定而且可能无法满足预期的兼容性需求时，你可能要先发布一个先行版本

- 先行版本号可以加到“主版本号.次版本号.修订号”的后面，先加上一个连接号再加上一连串以句点分隔的标识符和版本编译信息

  - 内部版本(alpha)

  - 公测版本(beta)

  - 正式版本的候选版本 rc: 即 Release candiate

### 3）发布版本

- 在修改 npm 包某些功能后通常需要发布一个新的版本，我们通常的做法是直接去修改 package.json 到指定版本。如果操作失误，很容易造成版本号混乱，我们可以借助符合 Semver 规范的命令来完成这一操作：

  - npm version patch : 升级修订版本号

  - npm version minor : 升级次版本号

  - npm version major : 升级主版本号

## 5.npm 发布规范

### 1）发布正式版本

```bash
npm publish
# or
npm publish --tag next
```

### 2）发布 beta 版本

```bash
npm publish --tag beta
```

### 3）发布 alpha 版本

```bash
npm publish --tag alpha
```

## 6.CI/CD 中需要登录 npm 账号

### 1）node 执行 shell

```js
const shell = requier('shelljs');

function npmlogin() {
  return new Promise((resolve) => {
    var username = 'my_username';
    var password = 'my_password';
    var email = 'my_email';
    var inputArray = [userName + '\n', password + '\n', email + '\n'];

    var child = shell.exec('npm login', { async: true });

    child.stdout.on('data', (chunk) => {
      try {
        // shell.echo(byteToString(chunk));
        var cmd = inputArray.shift();
        if (cmd) {
          shell.echo('input ' + cmd);
          child.stdin.write(cmd);
        } else {
          child.stdin.end();
          resolve();
        }
      } catch (err) {
        console.log('err', err);
        process.exit(1);
      }
    });
  });
}
await npmlogin();
```

### 2）.npmrc 文件（推荐）

- 本地执行 `npm login` 后，会生成 `~/.npmrc` 文件

- npm publish 目录下添加 `.npmrc` 文件

```
@xmly:registry=http://xxx.com
@xmc:registry=http://xxx.com
registry=http://xxx.com/
email=public-u@xxx.com
//registry.npmjs.org/:_authToken=xxxxxxxx
//localhost:4873/:_authToken="xxxxxxxx"
//xxx.com/:username=public-u
//xxx.com/:_password=xxxxx
```

## 7.npm 账号管理工具 npmsu

- [文档](https://www.npmjs.com/package/npmsu)

## 8.解决 npm 版本依赖

- `npm/yarn` 中使用 `resolutions` 字段解决

```json
"resolutions": {
  "axios": "1.0.2"
}
```

- `pnpm` 中使用 `overrides` 字段解决

```json
"pnpm": {
  "overrides": {
    "foo": "^1.0.0",
    "quux": "npm:@myorg/quux@^1.0.0",
    "bar@^2.1.0": "3.0.0",
    "qar@1>zoo": "2"
  }
}
```

## 9.npm 脚本通配符

- 由于 npm 脚本就是 shell 脚本，因此可以使用 shell 通配符

```bash
"lint": "jshint *.js"
"lint": "jshint **/*.js"
```

- 上面代码中，`*` 表示任意文件名，`**` 表示任意一层子目录。如果要将通配符传入原始命令，防止被 shell 转义，要将 `*` 号转义

## 10.传参

- 向 npm 脚本传入参数，要使用 `--` 标明

## 11.执行顺序

- 如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。如果是并行执行（即同时的平行执行），可以使用 & 符号。

```bash
npm run script1.js & npm run script2.js
```

- 如果是继发执行（即只有前一个任务成功，才能执行下一个任务），可以使用 && 符号。

```bash
npm run script1.js && npm run script2.js
```

## 12.变量

- npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量

- 首先，通过 `npm_package_` 前缀，npm 脚本可以拿到 package.json 里面的字段。比如，下面是一个 package.json

```json
{
  "name": "foo",
  "version": "1.2.5",
  "scripts": {
    "view": "node view.js"
  }
}
```

那么，变量 `npm_package_name` 返回 foo, 变量 `npm_package_version` 返回 1.2.5

```js
// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
```

- 上面代码中，我们通过环境变量 process.env 对象，拿到 package.json 的字段值。如果是 bash 脚本，可以用 `$npm_package_name` 和 `$npm_package_version` 取到这两个值

- npm*package* 前缀也支持嵌套的 package.json 字段

```json
"repository": {
  "type": "git",
  "url": "xxx"
 },
 "scripts": {
  "view": "echo $npm_package_repository_type"
 }
```

- 上面代码中，repository 字段的 type 属性，可以通过 `npm_package_repository_type` 取到

- npm 脚本还可以通过 npm*config* 前缀，拿到 npm 的配置变量，即 npm config get xxx 命令返回的值。比如，当前模块的发行标签，可以通过 npm_config_tag 取到。（注意，package.json 里面的 config 对象，可以被环境变量覆盖）

```json
"view": "echo $npm_config_tag",
```

## 13.常用脚本示例

```bash
// 删除目录
"clean": "rimraf dist/*",

// 本地搭建一个 HTTP 服务
"serve": "http-server -p 9090 dist/",

// 打开浏览器
"open:dev": "opener http://localhost:9090",

// 实时刷新
 "livereload": "live-reload --port 9091 dist/",

// 构建 HTML 文件
"build:html": "jade index.jade > dist/index.html",

// 只要 CSS 文件有变动，就重新执行构建
"watch:css": "watch "npm run build:css" assets/styles/",

// 只要 HTML 文件有变动，就重新执行构建
"watch:html": "watch "npm run build:html" assets/html",

// 部署到 Amazon S3
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",

// 构建 favicon
"build:favicon": "node scripts/favicon.js",
```

## 14.npm 包名规范

- 不能以 `数字-` 开头

- 可以使用 `validate-npm-package-name` 验证

```js
var validate = require('validate-npm-package-name');

validate('some-package');
validate('example.com');
validate('under_score');
validate('123numeric');
validate('@npm/thingy');
validate('@jane/foo.js');
```

## 15.给 node_modules 中的某个 npm 包单独打补丁

> 问题描述：
>
> > 当你依赖的某个 npm 包有问题，但是包作者来不及或无法进行修复时，可以自行修改 node_modules 中的代码，并打上补丁，将补丁跟随代码一起上传即可快速解决。后续等待包作者修复问题后，可再升级对应的版本。这个是一种临时性、快速的解决方案

### 解决方案

[patch-package](https://github.com/ds300/patch-package)

1.先修改 node_module 中的代码

2.开始打补丁

```bash
npx patch-package some-package
```

3.添加 scripts

```json
"scripts": {
+  "postinstall": "patch-package"
}
```

4.安装依赖

- npm

```bash
npm i patch-package
```

- yarn v1

```bash
yarn add patch-package postinstall-postinstall
```

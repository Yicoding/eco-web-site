---
toc: menu
---

# yarn

## 常用命令

```js
yarn help // 显示命令列表

yarn init // 初始化一个新项目

// 安装所有依赖项
yarn
yarn install

// 添加依赖项 // 默认添加到dependencies中
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
yarn add [package]@^ // 列出所有版本，并手动选择一个版本

// 将依赖项添加到不同的依赖类别中
yarn add [package] --dev  // 默认添加到devDependencies中
yarn add [package] --peer // 默认添加到peerDependencies中

// 更新依赖项
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]

// 删除依赖项
yarn remove [package]

// 运行script命令
yarn start
yarn dev
yarn build

yarn cache clean // 删除共享缓存文件

yarn list // 显示包版本信息
yarn list [package] // 显示某个包版本信息

yarn link // 将本地项目连接到另一个项目

yarn init // 创建一个新包

yarn config set registry https://registry.npm.taobao.org -g // 使用淘宝镜像
yarn add react --registry https://registry.npm.taobao.org // 临时使用淘宝镜像安装
...
```

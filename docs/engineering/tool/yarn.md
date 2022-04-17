---
toc: menu
---

# yarn

## 1.常用命令

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

// 全局安装
yarn global add [package]

// 将依赖项添加到不同的依赖类别中
yarn add [package] --dev  // 默认添加到 devDependencies中
yarn add [package] --D  // 默认添加到 devDependencies中
yarn add [package] --peer // 默认添加到 peerDependencies中

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

## 2.`.yarnrc`文件

- Yarnrc 文件（之所以这样命名是因为必须调用它们.yarnrc.yml），是可以配置 Yarn 内部设置的地方。虽然 Yarn 会在父目录中自动找到它们，但通常应将它们保存在项目的根目录（通常是您的存储库）中。从 v2 开始，它们必须使用有效的 Yaml 编写并且具有正确的扩展名（简单地调用您的文件.yarnrc 不会这样做）

- 这些设置也可以通过环境变量定义（至少对于较简单的设置；尚不支持数组和对象）。为此，只需在名称前面加上蛇形名称即可：YARN_CACHE_FOLDER 将设置缓存文件夹（此类值将覆盖 RC 文件中可能已定义的任何内容-谨慎使用）

- 该设置定义了 bstate 文件的存储位置。bstate 文件包含在您的依赖项中具有构建要求的每个软件包的当前构建状态。删除 bstate 文件很安全，但是会导致所有软件包都被重建

- 可以设置淘宝镜像

```
yarn config set registry https://registry.npm.taobao.org // 设置淘宝镜像
```

- 项目根(src 同级)目录添加.yarnrc 文件

> 为项目设置镜像源及包的路径

```
registry "http://registry.npm.taobao.com/"
"@abs:registry" "http://registry.abs.com/"
```

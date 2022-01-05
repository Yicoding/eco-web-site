---
toc: menu
---

# pnpm

- 由 npm/yarn 衍生而来，但却解决了 npm/yarn 内部潜在的 bug，并且极大了地优化了性能，扩展了使用场景

![image](images/engineering/5.png)

## 1.定义

- pnpm 本质上就是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:

  - 包安装速度极快

  - 磁盘空间利用非常高效

## 2.安装

```bash
npm i -g pnpm
```

## 3.特性

### 1）速度快

- pnpm 在绝多大数场景下，包安装的速度都是明显优于 npm/yarn，速度会比 npm/yarn 快 2-3 倍

- pnpm 的包安装速度也明显优于 yarn PnP

### 2）高效利用磁盘空间

- pnpm 内部使用基于内容寻址的文件系统来存储磁盘上所有的文件，这个文件系统出色的地方在于：

  - `不会重复安装同一个包`。用 npm/yarn 的时候，如果 100 个项目都依赖 lodash，那么 lodash 很可能就被安装了 100 次，磁盘中就有 100 个地方写入了这部分代码。但在使用 `pnpm 只会安装一次`，磁盘中只有一个地方写入，后面再次使用都会直接使用 `hardlink`

  - `即使一个包的不同版本，pnpm 也会极大程度地复用之前版本的代码`。比如 lodash 有 100 个文件，更新版本之后多了一个文件，那么磁盘当中并不会重新写入 101 个文件，而是保留原来的 100 个文件的 hardlink，仅`仅写入`那一个`新增的文件`

### 3）支持 monorepo

- 随着前端工程的日益复杂，越来越多的项目开始使用 `monorepo`。之前对于多个项目的管理，一般都是使用多个 git 仓库，但 `monorepo` 的宗旨就是`用一个 git 仓库来管理多个子项目`，所有的子项目都存放在根目录的 `packages` 目录下，一个子项目就代表一个 `package`(monorepo 管理工具 [lerna](https://github.com/lerna/lerna#readme))

- pnpm 与 npm/yarn 另外一个很大的不同就是`支持了 monorepo`，体现在各个子命令的功能上，比如在根目录下 pnpm add A -r, 那么所有的 package 中都会被添加 A 这个依赖，当然也支持 --filter 字段来对 package 进行过滤

### 4）安全性高

- 使用 npm/yarn 的时候，由于 node_module 的扁平结构，如果 A 依赖 B， B 依赖 C，那么 A 当中是可以直接使用 C 的，但问题是 A 当中并没有声明 C 这个依赖。因此会出现这种非法访问的情况

- pnpm 解决了这个问题

## 4.依赖管理

### 1）npm/yarn install 原理

- 1.主要分为两个部分：

  - 执行 npm/yarn install 之后，包如何到达项目 node_modules 当中

  - node_modules 内部如何管理依赖

- 执行命令后，首先会构建依赖树，然后针对每个节点下的包，会经历下面四个步骤:

  - 将依赖包的版本区间解析为某个具体的版本号
  - 下载对应版本依赖的 tar 包到本地离线镜像
  - 将依赖从离线镜像解压到本地缓存
  - 将依赖从缓存拷贝到当前目录的 node_modules 目录

### 2）设计存在的问题：结构嵌套

- `依赖层级太深`，会导致文件路径过长的问题，尤其在 window 系统下

- `大量重复的包被安装，文件体积超级大`。比如跟 foo 同级目录下有一个 baz，两者都依赖于同一个版本的 lodash，那么 lodash 会分别在两者的 node_modules 中被安装，也就是重复安装

- `模块实例不能共享`。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug

```js
node_modules
└─ foo
  ├─ index.js
  ├─ package.json
  └─ node_modules
      └─ bar
        ├─ index.js
        └─ package.json
```

### 3）解决：扁平化依赖管理

```js
node_modules
├─ foo
|  ├─ index.js
|  └─ package.json
└─ bar
  ├─ index.js
  └─ package.json
```

- 存在的问题：

  - 1.依赖结构的`不确定性`

  - 2.扁平化算法本身的`复杂性`很高，耗时较长

  - 3.项目中仍然可以`非法访问`没有声明过依赖的包

## 5.pnpm 依赖管理

- 生成`软链接`

## 6.安全

- 只要一个包未在 package.json 中声明依赖，那么在项目中是无法访问的，规避了`非法访问`依赖的问题

## 7.使用

### 1）pnpm install

```bash
# 安装 axios
pnpm install axios
# 安装 axios 并将 axios 添加至 devDependencies
pnpm install axios -D
# 安装 axios 并将 axios 添加至 dependencies
pnpm install axios -S
```

### 2）pnpm update

- 根据指定的范围将包更新到最新版本，monorepo 项目中可以通过 --filter 来指定 package

### 3）pnpm uninstall

- 在 node_modules 和 package.json 中移除指定的依赖

```bash
# 移除 axios
pnpm uninstall axios --filter package-a
```

### 4）pnpm link

- 将本地项目连接到另一个项目

- 使用的是`硬链接`，而不是软链接

```bash
pnpm link ../../axios
```

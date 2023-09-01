---
toc: menu
---

# npx

- `npx` 是一个工具，`npm v5.2.0` 引入的一条命令（npx），一个 npm 包执行器，指在提高从 npm 注册表使用软件包时的体验 ，npm 使得它非常容易地安装和管理托管在注册表上的依赖项，npx 使得使用 CLI 工具和其他托管在注册表

- 当执行`NPX xxx`时候，先看`xxx`在`$PATH`里有没有，没有则查找当前目录`node_modules`里是否存在，若没有则安装并执行

## 1.主要特点

- 1、临时安装可执行依赖包，不用全局安装，不用担心长期的污染

- 2、可以执行依赖包中的命令，安装完成自动运行

- 3、自动加载 node_modules 中依赖包，不用指定$PATH

- 4、可以指定 node 版本、命令的版本，解决了不同项目使用不同版本的命令的问题

## 2.安装

```bash
npm install -g npx
```

## 3.使用

- 一般来说，在命令行中调用 `dumi build`，只能调用 `yarn docs` 命令。如果想在命令行下调用，必须像下面这样

```bash
node-modules/.bin/dumi build
```

- `npx` 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。

```bash
npx dumi build
```

## 4.使用不同版本的 node

```bash
$ npx node@0.12.8 -v
v0.12.8
```

- 上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉

## 清除本地 npx 缓存

- 需要在电脑根目录下执行（权限）

```bash
npx clear-npx-cache
```

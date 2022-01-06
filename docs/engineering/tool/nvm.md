---
toc: menu
---

# nvm

- `nvm`（node.js version management）是一个`nodejs的版本管理工具`。nvm 和 n 都是 node.js 版本管理工具，为了解决 node.js 各种版本存在不兼容现象可以通过它可以安装和切换不同版本的 node.js

## 1.安装 nvm

```bahs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

## 2.查看本地安装的所有 node 版本

```bash
# 列出所有安装的版本
nvm list

# 列出所有远程服务器的版本（官方 node version list）
nvm ls-remote

# 显示当前的版本
nvm current
```

## 3.安装不同版本的 node

```bash
nvm install stable ## 安装最新稳定版 node
nvm install <version> ## 安装指定版本
```

## 4.使用 node 特定版本

```bash
# 临时版本 - 只在当前窗口生效指定版本
nvm use <version>

# 永久版本 - 所有窗口生效指定版本
nvm alias default <version>
```

## 5.卸载 node

```bash
nvm uninstall <version>
```

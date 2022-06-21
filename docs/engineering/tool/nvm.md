---
toc: menu
---

# nvm

- `nvm`（node.js version management）是一个`nodejs的版本管理工具`。nvm 和 n 都是 node.js 版本管理工具，为了解决 node.js 各种版本存在不兼容现象可以通过它可以安装和切换不同版本的 node.js

## 1.安装 nvm

### 1）首先打开终端，进入当前用户的 home 目录中

```bash
cd ~/
```

### 2）然后使用 ls -a 显示这个目录下的所有文件（夹）（包含隐藏文件及文件夹），查看有没有 .bash_profile 这个文件

```bash
ls -a
```

如果没有，则新建一个

```bash
touch ~/.bash_profile
```

### 3）终端中执行以下命令安装 nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### 4）然后等待，安装完成之后，如果出现下面红框内容，表示缺少环境配置

![image](images/engineering/8.png)

### 5）在 .bash_profile 同一目录下创建一个 .zshrc 文件

```bash
touch .zshrc
```

### 6）打开文件添加下面两句话，重启终端即可

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
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

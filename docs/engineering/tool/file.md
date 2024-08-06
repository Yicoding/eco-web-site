---
toc: menu
---

# 常用配置文件

## 1.`.npmrc` 或 `.yarnrc`

.npmrc 文件是用于配置 npm（Node Package Manager）的配置文件。它可以包含多种配置选项来控制 npm 的行为，包括代理设置、仓库地址、认证信息、缓存位置等。你可以在多个层级上设置 .npmrc 文件，包括全局、用户级别和项目级别。

比如：registry: 定义要使用的 npm 仓库地址。

```bash
registry=https://registry.npmjs.org/
```

## 2.`.nvmrc`

.nvmrc 文件是用于定义和管理 Node.js 版本的文件，其中保存了项目所需的 Node.js 版本的信息。这个文件与 nvm（Node Version Manager）工具配合使用，用于在不同的项目之间轻松切换 Node.js 版本，确保项目在开发和部署期间使用的是正确的 Node.js 版本。

### .nvmrc 文件的内容

.nvmrc 文件通常只包含一个字符串，即希望使用的 Node.js 版本号。例如：

```bash
14.17.0
```

### 全局脚本配置

在 ~/.zshrc 中添加该脚本：

```bash
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

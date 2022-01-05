---
toc: menu
---

# eslint 和 prettier

## 1.ESLint

- `ESLint` 解决的是`代码质量`问题：未使用变量、三等号、全局变量声明等问题

  - 比如末尾是否空行

  - 箭头函数是否需要括号

  - 定义变量是否定义未使用

  - 变量是否使用在定义之前等

## 2.Prettier

- `Prettier` 解决是`代码美观`问题：单行代码长度、tab 长度、空格、逗号表达式等问题

  - 比如末尾是否空行

  - 箭头函数是否需要括号

  - 但是他没有变量是否定义未使用，变量是否使用在定义之前等检查代码质量的功能

  - 它仅有的是代码格式化的美观功能

- 可以选择不要 prettier，但是 eslint 是必须的，因为代码质量远比代码美观来的重要的多

## 3.冲突

- 在 VSCode 中配置了保存自动格式化后，eslint 中将代码进行格式化后，会重新被 prettier 再次格式化

- 冲突的本质在于 `eslint` 既负责了代码质量检测，又负责了一部分的格式美化工作,格式化部分的部分规则和 prettier 不兼容

## 4.解决冲突

- 让 eslint 只负责代码质量检测

- 让 prettier 负责美化

- 使用 prettier 来替代 eslint 的格式化功能

## 5.方案

- 通过社区插件解决：eslint-config-prettier + eslint-plugin-prettier

  - `eslint-config-prettier` 的作用是`关闭 eslint 中与 prettier 相互冲突的规则`

  - `eslint-plugin-prettier` 的作用是`赋予 eslint 用 prettier 格式化代码的能力`

```js
// 安装依赖
yarn add eslint-config-prettier eslint-plugin-prettier -D

// .eslintrc
{
   // 其余的配置
 - "extends": ["eslint:recommended", "standard"]
 + "extends": ["eslint:recommended", "standard",  "plugin:prettier/recommended"]
  // 其余的配置
}

```

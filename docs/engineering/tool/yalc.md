---
toc: menu
---

# 调试 npm 包

## 1.通过相对或绝对路径引用

- 需要频繁改业务代码，这既麻烦又危险

## 2.发布到 npm 源后再调试

- 污染了 npm 版本线，且需要频繁 npm install，效率也不高

## 3.npm link 或 yarn link

- 原理：link 的本质就是软链接，这样可以让我们快速使用本地正在开发的其它包

  - 在全局包路径（Global Path）下创建一个软连接(Symlinked)指向 good-ui 的 dist 包;

  - 在 admin-management 里通过软连接，将全局的软链接指向其 node_modules/good-ui

- 缺点：

  - 1.影响 node_modules 中原本的 good-ui 包
  - 2.软链接和文件系统引发的其他各种奇怪的问题
  - 3.全局中 good-ui 版本

### 1）需要进行调试的包

```bash
# good-ui
npm link
```

### 2）项目中使用

```bash
npm link good-ui
```

### 3）页面使用

```js
import { Button } from 'good-ui';
```

### 4）解除连接

```bash
npm unlink good-ui
```

## 4.yalc

- 对包开发者而言，一种比 yarn/npm link 更好的开发流程

- 主要解决了一些 yarn/npm link 本身存在的缺陷，满足了包开发者的实际需求

### 1）安装

```bash
npm i yalc -g
# or
yarn global add yalc
```

### 2）需要进行调试的包

```bash
yalc publish
```

### 3）项目中使用

```bash
yalc add good-ui
```

### 4）页面使用

```js
import { Button } from 'good-ui';
```

### 5）移除依赖

```bash
yalc remove good-ui
```

### 6）更新和推送

```bash
yalc publish --push
# 简化为：
yalc push
```

### 7）其他

```bash
yalc update good-ui # 更新依赖
yalc remove --all # 移除当前包里的全部yalc依赖
```

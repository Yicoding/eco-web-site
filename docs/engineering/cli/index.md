---
toc: menu
---

# 基础

## 常用的模块

## fs 模块

- node 原生 fs 模块以及扩展模块 fs-extra

```js
const fs = require('fs-extra');

// 判断文件是否存在
const gitignoreExists = fs.existsSync(path.join(rootProject, 'gitignore'));

// 将A文件改成B文件
fs.moveSync(
  path.join(rootProject, 'gitignore'),
  path.join(rootProject, '.gitignore'),
  [],
);

// 将A文件内容添加到B文件中，并删除A文件
const data = fs.readFileSync(path.join(rootProject, 'gitignore'));
fs.appendFileSync(path.join(rootProject, '.gitignore'), data);
fs.unlinkSync(path.join(rootProject, 'gitignore'));
```

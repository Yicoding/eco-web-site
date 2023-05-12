---
toc: menu
---

# 文件获取

## CommonJs 写法

```js
const path = require('path');
const fs = require('fs');

// 递归获取目录下所有文件路径
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const files = getFiles(path.join(__dirname, 'webapi'));

const webapi = [];

for (const file of files) {
  try {
    // 获取文件内容
    const api = require(file);
    // mock文件可以返回的可以是数组，也可以是对象
    if (Object.prototype.toString.call(api) === '[object Array]') {
      webapi.push(...api);
    } else {
      webapi.push(api);
    }
  } catch (error) {
    console.log('require file error', error);
  }
}

module.exports = webapi;
```

## ESModule 写法

```js
const modules = import.meta.globEager('./**/*.js');

const mockModules = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export default mockModules;
```

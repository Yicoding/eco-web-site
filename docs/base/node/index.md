---
toc: menu
---

# node 基础

## 1.示例

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // 将statusCode 属性设置为 200，以指示成功响应
  res.setHeader('Content-Type', 'text/plain'); // 设置 Content-Type 标头
  res.end('Hello World\n'); // 关闭响应，将内容作为参数添加到 end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## 2.简史

- 2009
  - Node.js 诞生
  - 第一版的 npm 被创建
- 2010
  - Express 诞生
  - Socket.io 诞生
- 2011
  - npm 发布 1.0 版本
  - 较大的公司（LinkedIn、Uber 等）开始采用 Node.js
- hapi 诞生
- 2012
  - 普及速度非常快
- 2013
  - 第一个使用 Node.js 的大型博客平台：Ghost
  - Koa 诞生
- 2014
  - 大分支：io.js 是 Node.js 的一个主要分支，目的是引入 ES6 支持并加快推进速度
- 2015
  - Node.js 基金会 诞生
  - IO.js 被合并回 Node.js
  - npm 引入私有模块
  - Node.js 4（以前从未发布过 1、2 和 3 版本）
- 2016
  - leftpad 事件
  - Yarn 诞生
  - Node.js 6
- 2017
  - npm 更加注重安全性
  - Node.js 8
  - HTTP/2
  - V8 在其测试套件中引入了 Node.js，除了 Chrome 之外，Node.js 正式成为 JS 引擎的标杆
  - 每周 30 亿次 npm 下载
- 2018
  - Node.js 10
  - ES 模块 .mjs 实验支持
  - Node.js 11
- 2019
  - Node.js 12
  - Node.js 13
- 2020
  - Node.js 14
  - Node.js 15
- 2021
  - Node.js 16

## 3.安装

- 官网下载官方软件包

- 使用 nvm 安装
  - 可以轻松地切换 Node.js 版本

## 4.使用

- Node.js 使用 CommonJS 模块系统

  - 在 Node.js 中使用 require()

- 浏览器还正在实现 ES 模块标准
  - 在浏览器中则使用 import

## 5.运行 node 脚本

```bash
node app.js
```

## 6.程序退出

- 传入一个整数，向操作系统发送退出码
- 默认情况下，退出码为 0，表示成功

  ```js
  process.exit(1);
  ```

- 也可以设置 process.exitCode

  ```js
  process.exitCode = 1;
  ```

## 7.读取环境变量

- process 核心模块提供了 `env` 属性，该属性承载了在启动进程时设置的所有环境变量

```js
process.env.NODE_ENV; // "development"
```

## 8.从命令行接收参数

```js
node app.js --name=joe
```

- 获取参数值的方法是使用 Node.js 中内置的 process 对象

```js
const args = require('minimist')(process.argv.slice(2));
args['name']; //joe
```

## 9.console 模块

### 1）打印

```js
console.log();
```

### 2）清空控制台

```js
console.clear();
```

### 3）元素计数

```js
const oranges = ['橙子', '橙子'];
oranges.forEach((fruit) => {
  console.count(fruit);
});
```

### 4）打印堆栈踪迹

```js
const function2 = () => console.trace();
const function1 = () => function2();
function1();
```

### 5）计算耗时

- 可以使用 `time()` 和 `timeEnd()` 轻松地计算函数运行所需的时间：

```js
const doSomething = () => console.log('测试');
const measureDoingSomething = () => {
  console.time('doSomething()');
  //做点事，并测量所需的时间。
  doSomething();
  console.timeEnd('doSomething()');
};
measureDoingSomething();
```

## 10.创建进度条

- `Progress` 可在控制台中创建进度条

- 创建一个 10 步的进度条，每 100 毫秒完成一步。 当进度条结束时，则清除定时器:

```js
const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
```

## 11.exports 导出

### 1）将对象赋值给 module.exports

- 公开了它指向的对象

```js
// 1
const car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = car;

// 2
const car = require('./car');
```

### 2）要导出的对象添加为 exports 的属性

- 公开了它指向的对象的属性

```js
// 1.
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};

// 2.
const items = require('./items');
items.car;

// or
const car = require('./items').car;
```

## 12.package-lock.json

- 旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制（即使软件包的维护者更新了软件包）

- 解决了 package.json 版本问题

## 13.查看 npm 包安装的版本

```bash
npm list
npm list packageName
```

## 14.npm 包版本控制

- `^`: 只会执行不更改最左边非零数字的更新。 如果写入的是 ^0.13.0，则当运行 npm update 时，可以更新到 0.13.1、0.13.2 等，但不能更新到 0.14.0 或更高版本。 如果写入的是 ^1.13.0，则当运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。
- `~`: 如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
- `>`: 接受高于指定版本的任何版本。
- `>=`: 接受等于或高于指定版本的任何版本。
- `<=`: 接受等于或低于指定版本的任何版本。
- `<`: 接受低于指定版本的任何版本。
- `=`: 接受确切的版本。
- `-`: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
- `||`: 组合集合。例如 < 2.1 || > 2.6。

## 15.Node.js 事件循环

- 它阐明了 Node.js 如何做到异步且具有非阻塞的 I/O

- 代码运行在单个线程上

  - 每次只处理一件事
  - 不必担心并发问题

- 编写代码时需避免任何可能阻塞线程的事情
  - 例如同步的网络调用或无限的循环

### 1）阻塞事件循环

- 任何花费太长时间才能将控制权返回给事件循环的 JavaScript 代码，都会阻塞页面中任何 JavaScript 代码的执行，甚至阻塞 UI 线程，并且用户无法单击浏览、滚动页面等

- JavaScript 中几乎所有的 `I/O` 基元都是非阻塞的: 网络请求、文件系统操作等

### 2）调用堆栈

- 调用堆栈是一个 LIFO 队列（后进先出）

- 当执行时，它会将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数

- 每次迭代中的事件循环都会查看调用堆栈中是否有东西并执行它直到调用堆栈为空

### 3）入队函数执行

- 当调用 setTimeout() 时，浏览器或 Node.js 会启动定时器。 当定时器到期时，则回调函数会被放入“消息队列”中

## 16.process.nextTick()

- 每当事件循环进行一次完整的行程时，我们都将其称为一个滴答

- 当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：

  ```js
  process.nextTick(() => {
    //做些事情
  });
  ```

- 尽快执行而不是将其排入队列

- 当要确保在下一个事件循环迭代中代码已被执行，则使用 nextTick()

## 17.setImmediate

- 当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 setImmediate() 函数

```js
setImmediate(() => {
  //运行一些东西
});
```

- 作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调

- setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同:

  - 传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行

  - 延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行

## 18.文件路径

```js
const path = require('path');
```

### 1）获取路径

- dirname: 获取文件的父文件夹
- basename: 获取文件名部分
- extname: 获取文件的扩展名

### 2）使用路径

- 1.可以使用 `path.join()` 连接路径的两个或多个片段：

  ```js
  const name = 'joe';
  path.join('/', 'users', name, 'notes.txt'); // /users/joe/notes.txt
  ```

- 2.可以使用 `path.resolve()` 获得相对路径的绝对路径计算：

  ```js
  path.resolve('tmp', 'joe.txt'); // /Users/joe/tmp/joe.txt 如果从主文件夹运行
  ```

- 3.path.normalize()，当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径：

  ```js
  path.normalize('/users/joe/..//test.txt'); // /users/test.txt
  ```

## 19.读取文件

- fs.readFile():

  ```js
  const fs = require('fs');

  fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  ```

- 2.同步的版本 fs.readFileSync()：

  ```js
  const fs = require('fs');

  try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  ```

## 20.写入文件

- 1.fs.writeFile()

  ```js
  const fs = require('fs');

  const content = '一些内容';

  fs.writeFile('/Users/joe/test.txt', content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //文件写入成功。
  });
  ```

- 2.同步的版本 fs.writeFileSync()

  ```js
  const fs = require('fs');

  const content = '一些内容';

  try {
    const data = fs.writeFileSync('/Users/joe/test.txt', content);
    //文件写入成功。
  } catch (err) {
    console.error(err);
  }
  ```

- 3.追加到文件

  ```js
  const content = '一些内容';

  fs.appendFile('file.log', content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //完成！
  });
  ```

## 21.文件夹

### 1）检查文件夹是否存在

- 使用 `fs.access()` 检查文件夹是否存在以及 Node.js 是否具有访问权限

### 2）创建新的文件夹

- 使用 `fs.mkdir()` 或 `fs.mkdirSync()` 可以创建新的文件夹。

### 3）读取目录的内容

- 使用 `fs.readdir()` 或 `fs.readdirSync()` 可以读取目录的内容

### 4）重命名文件夹

- 使用 `fs.rename()` 或 `fs.renameSync()` 可以重命名文件夹。 第一个参数是当前的路径，第二个参数是新的路径：

```js
const fs = require('fs');

fs.rename('/Users/joe', '/Users/roger', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //完成
});
```

### 5）删除文件夹

- 使用 `fs.rmdir()` 或 `fs.rmdirSync()` 可以删除文件夹

## 22.文件系统模块 fs

```js
const fs = require('fs');
```

- fs.access(): 检查文件是否存在，以及 Node.js 是否有权限访问。
- fs.appendFile(): 追加数据到文件。如果文件不存在，则创建文件。
- fs.chmod(): 更改文件（通过传入的文件名指定）的权限。相关方法：fs.lchmod()、fs.fchmod()。
- fs.chown(): 更改文件（通过传入的文件名指定）的所有者和群组。相关方法：fs.fchown()、fs.lchown()。
- fs.close(): 关闭文件描述符。
- fs.copyFile(): 拷贝文件。
- fs.createReadStream(): 创建可读的文件流。
- fs.createWriteStream(): 创建可写的文件流。
- fs.link(): 新建指向文件的硬链接。
- fs.mkdir(): 新建文件夹。
- fs.mkdtemp(): 创建临时目录。
- fs.open(): 设置文件模式。
- fs.readdir(): 读取目录的内容。
- fs.readFile(): 读取文件的内容。相关方法：fs.read()。
- fs.readlink(): 读取符号链接的值。
- fs.realpath(): 将相对的文件路径指针（.、..）解析为完整的路径。
- fs.rename(): 重命名文件或文件夹。
- fs.rmdir(): 删除文件夹。
- fs.stat(): 返回文件（通过传入的文件名指定）的状态。相关方法：fs.fstat()、fs.lstat()。
- fs.symlink(): 新建文件的符号链接。
- fs.truncate(): 将传递的文件名标识的文件截断为指定的长度。相关方法：fs.ftruncate()。
- fs.unlink(): 删除文件或符号链接。
- fs.unwatchFile(): 停止监视文件上的更改。
- fs.utimes(): 更改文件（通过传入的文件名指定）的时间戳。相关方法：fs.futimes()。
- fs.watchFile(): 开始监视文件上的更改。相关方法：fs.watch()。
- fs.writeFile(): 将数据写入文件。相关方法：fs.write()。

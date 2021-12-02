---
toc: menu
---

# 零散知识点

## 1.i++ 和 ++i

### 1）区别

- i++: 先赋值，再自增

  ```js
  var a = 1;
  var b = a++;
  console.log(`a: ${a}, b: ${b}`); // 2, 1
  ```

- ++i: 先自增，再赋值

  ```js
  var a = 1;
  var b = ++a;
  console.log(`a: ${a}, b: ${b}`); // 2, 2
  ```

### 2）在循环体中没有区别

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

```js
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

### 3）执行效率

- i++

  ```js
  j = i;
  i += 1;
  return j;
  ```

- ++i

  ```js
  i += 1;
  return i;
  ```

## 2.循环执行效率

- `for 和 do while 循环效率最高`

- `for ~= do while > forEach ~= map ~= every > $.each > $(e).each > for in`

## 3.+new Date()

会转数字，等同于 new Date().getTime()

```js
console.log(new Date()); // Tue Nov 30 2021 23:11:55 GMT+0800 (中国标准时间)
console.log(+new Date()); // 1638285115767
```

## 4.解决 for 循环 setTimeout

- 原因：setTimeout 异步任务之宏任务，会进入任务队列，最后执行 console 时，i 的值已经都是最后一个了

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
console.log(i);
// 输出结果：5 -> 5,5,5,5,5 （箭头表示 1s，逗号表示几乎同时输出）
```

- 解决
  - 输出结果：5 -> 0,1,2,3,4

### 1）借助 let 的暂时性死区

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 2）借助 setTimeout 的第三个参数

```js
for (var i = 0; i < 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    10,
    i,
  );
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 3）借助立即执行函数

在这里创建了一个闭包，每次循环都会把 i 的最新值传进去，然后被闭包保存起来

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 10);
  })(i);
}
console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 4）借助形参的特性

```js
var sleepConsole = (i) => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
};

for (var i = 0; i < 5; i++) {
  sleepConsole(i); // i会被复制后传递
}

console.log(i);
// 输出结果：5 -> 0,1,2,3,4
```

### 5）借助 Promise

```js
// 1.建立数组存储 Promise
const task = [];

// 2.抽取方法生成异步操作
const output = (i) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000 * i);
  });

// 3.循环执行异步操作
for (var i = 0; i < 5; i++) {
  task.push(output(i));
}

// 4.异步操作执行完成后输出最后的i
Promise.all(task).then(() => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
});
// 输出结果：0 -> 1 -> 2 -> 3 -> 4 -> 5
```

### 6）借助 async/await

```js
// 生成休眠函数
// 生成休眠函数
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000);
    }
    console.log(i);
  }
  await sleep(1000);
  console.log(i);
})();
// 输出结果：0 -> 1 -> 2 -> 3 -> 4 -> 5
```

## 5.0.1 + 0.2 != 0.3

### 1）原因

因为 JS 采用 IEEE 754 双精度版本（64 位），并且只要采用 IEEE 754 的语言都有该问题。

```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
```

```js
0.100000000000000002 === 0.1; // true
0.200000000000000002 === 0.2; // true\

console.log(0.100000000000000002); // 0.1
```

所以

```js
0.1 + 0.2 === 0.30000000000000004; // true
```

### 2）解决

```js
parseFloat((0.1 + 0.2).toFixed(10)); // 0.3
```

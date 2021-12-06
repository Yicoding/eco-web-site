---
toc: menu
---

# ES8(ES2017)

![image](images/es/4.png)

## 1.声明

### 共享内存和原子操作

- 由全局对象 `SharedArrayBuffer` 和 `Atomics` 实现，将数据存储在一块共享内存空间中，这些数据可在 `JS主线程` 和 `web-worker` 线程之间共享

## 2.字符串扩展

### 1）padStart

- 把指定字符串填充到字符串`头部`(左侧)，返回新字符串

```js
const str1 = '5';
console.log(str1.padStart(2, '0')); // 05
console.log(str1.padStart(5, '0')); // 00005

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber); // ************5581
```

### 2）padEnd

- 把指定字符串填充到字符串`尾部`(右侧)，返回新字符串

```js
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.')); // Breaded Mushrooms........
const str2 = '200';
console.log(str2.padEnd(5)); // 200
```

## 3.对象扩展

### 1）Object.getOwnPropertyDescriptors

- 返回对象所有自身属性(非继承属性)的描述对象

```js
const object1 = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable); // true

console.log(descriptors1.property1.value); // 42

// 浅拷贝一个对象
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);

// 创建子类
function superclass() {}
superclass.prototype = {
  // 在这里定义方法和属性
};
function subclass() {}
subclass.prototype = Object.create(
  superclass.prototype,
  Object.getOwnPropertyDescriptors({
    // 在这里定义方法和属性
  }),
);
```

### 2）Object.values

- 返回一个`给定对象自身的所有可枚举属性值的数组`，值的顺序与使用 for...in 循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};
console.log(Object.values(object1)); // ["somestring", 42, false]
```

### 3）Object.entries

- 方法返回一个`给定对象自身可枚举属性的键值对数组`，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）

```js
const obj = {
  name: 'Bob',
  age: 22,
  gender: '男',
};

const entries = Object.entries(obj);
console.log(entries);
// [ [ 'name', 'Bob' ], [ 'age', 22 ], [ 'gender', '男' ] ]
```

- 其他使用方法

```js
const object1 = {
  a: 'somestring',
  b: 42,
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// "a: somestring"
// "b: 42"
```

## 4.函数扩展-函数参数尾逗号

- 允许函数最后一个参数有尾逗号

```git
function clownsEverywhere(param1, param2,) {}
clownsEverywhere('foo', 'bar',);
```

## 5.async/await

### 1）定义

- 使异步函数以同步函数的形式书写(Generator 函数语法糖)

### 2）原理

- 将`Generator函数`和自动执行器 `spawn` 包装在一个函数里

### 3）形式

- 将 `Generator` 函数的 `*` 替换成 `async`，将 `yield` 替换成 `await`

### 4）声明

- 具名函数：`async function Func() {}`
- 函数表达式：`const func = async function() {}`
- 箭头函数：`const func = async() => {}`
- 对象方法：`const obj = { async func() {} }`
- 类方法：`class Cla { async Func() {} }`

### 5）async 对 Generator 改进

- 内置执行器
- 更好的语义
- 更广的适用性
- 返回值是 Promise 对象

### 6）注意事项

- `async函数` 返回 `Promise对象`，可使用 `then()` 添加回调函数
- 内部 `return返回值` 会成为后续 then()的`出参`
- 内部抛出错误会导致返回的 Promise 对象变为 `rejected` 状态，被 `catch()`接收到
- 返回的 Promise 对象必须等到内部所有 `await 命令 Promise 对象`执行完才会发生状态改变，除非遇到 `return 语句`或`抛出错误`
- 任何一个 `await 命令 Promise 对象`变为 `rejected 状态`，整个 async 函数都会中断执行
- 希望即使前一个异步操作失败也不要中断后面的异步操作

  - `将 await 命令 Promise 对象放到 try-catch 中`
  - `await 命令 Promise 对象跟一个 catch()`

- `await 命令 Promise `对象可能变为 `rejected` 状态，最好把其放到 try-catch 中
- 多个 await 命令 Promise 对象若不存在继发关系，最好让它们同时触发
- await 命令`只能`用在 async 函数之中，否则会报错
- `数组使用 forEach()执行 async/await 会失效`，可使用 for-of 和 Promise.all()代替
- 可保留运行堆栈，函数上下文随着 async 函数的执行而存在，执行完成就消失

### 7）Promise 写法

```js
fetch('coffee.jpg')
  .then((response) => response.blob())
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      'There has been a problem with your fetch operation: ' + e.message,
    );
  });
```

### 8）async/await 写法

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch();
```

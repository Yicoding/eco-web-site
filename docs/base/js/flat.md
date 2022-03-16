---
toc: menu
---

# 数组扁平化 flat

## 1.什么是数组扁平化

将一个复杂的嵌套多层的数组，一层一层的转化为`层级较少`或者`只有一层的数组`

```js
var arr = [1, [2, [3, 4]]];
// =>
// [1, 2, 3, 4]
```

## 2.简单实现

### 1）普通递归

```js
const flatten = (arr) => {
  if (!arr.length) return;
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 2）split 和 toString 共同处理

- 如果数组的项全为数字，可以使用 join()，toString()

- 该方法是利用 toString 把数组变成以逗号分隔的字符串，然后遍历数组把每一项再变回原来的类型

```js
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.toString().split(',');
}
console.log(flatten(arr)); // [1, 2, 3, 4]
```

具体实现

```js
const flatten = (arr) =>
  arr
    .toString()
    .split(',')
    .map((item) => +item);

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 3）[].concat.apply + some + 扩展运算符实现

利用 arr.some 判断当数组中还有数组的话，循环调用 flatten 扁平函数(利用 ... 扁平), 用 concat 连接，最终返回 arr

```js
/* ES6 */
const flatten = (arr) => {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 4）reduce

reduce 本身就是一个迭代循环器，通常用于累加，所以根据这一特点有以下

```js
function flatten(arr, n = 1) {
  if (n < 1) {
    return arr;
  }
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur, n - 1) : cur);
  }, []);
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr, Infinity));
```

### 5）es6 提供的新方法 flat(depth)

- flat(depth) 方法中的参数 depth，代表展开嵌套数组的深度，默认是 1

- depth 的值设置为 Infinity, 无需知道数组的维度

```js
let a = [1, [2, 3, [4, [5]]]];
a.flat(Infinity); // [1,2,3,4,5]  a是4维数组
```

### 6）正则和 JSON 方法共同处理

```js
let arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\[|\])/g, '');
  str = '[' + str + ']';
  return JSON.parse(str);
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
```

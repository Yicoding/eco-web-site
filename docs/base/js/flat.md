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

- ES6

```js
/* ES6 */
const flatten = (arr) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(arr[i]);
    }
  });
  return result;
};

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

- ES5

```js
/* ES5 */
function flatten(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 2）toString()

- 如果数组的项全为数字，可以使用 join()，toString()

- 该方法是利用 toString 把数组变成以逗号分隔的字符串，然后遍历数组把每一项再变回原来的类型

```js
[1, [2, 3, [4]]].toString();
// "1,2,3,4"
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

### 3）[].concat.apply + some

利用 arr.some 判断当数组中还有数组的话，循环调用 flatten 扁平函数(利用 [].concat.apply 扁平), 用 concat 连接，最终返回 arr

- ES6

```js
/* ES6 */
const flatten = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat.apply([], arr);
  }
  return arr;
};

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

- ES5

```js
/* ES5 */
/**
 * 封装Array.some
 * @param {function} callback    - 回调函数
 * @param {any}      currentThis - 回调函数中this指向
 */
Array.prototype.some = function (callback, currentThis) {
  let context = this;
  let flag = false;
  currentThis = currentThis || this;
  for (var i = 0, len = context.length; i < len; i++) {
    const res = callback.call(currentThis, context[i], i, context);
    if (res) {
      flag = true;
    } else if (!flag) {
      flag = false;
    }
  }
  return flag;
};

function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat.apply([], arr);
  }
  return arr;
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 4）reduce

reduce 本身就是一个迭代循环器，通常用于累加，所以根据这一特点有以下

```js
function flatten(arr) {
  return arr.reduce(function (prev, cur) {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 5）ES6 中的 解构运算符 ...

... 每次只能展开最外层的数组，被 [].concat 后，arr 就扁平化一次

```js
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
```

### 6）es6 提供的新方法 flat(depth)

- flat(depth) 方法中的参数 depth，代表展开嵌套数组的深度，默认是 1

- depth 的值设置为 Infinity, 无需知道数组的维度

```js
let a = [1, [2, 3, [4, [5]]]];
a.flat(Infinity); // [1,2,3,4,5]  a是4维数组
```

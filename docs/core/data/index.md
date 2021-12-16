---
toc: menu
---

# 数组

## 1.数组的创建

```js
const arr = [1, 2, 3, 4]; // [1, 2, 3, 4]

const arr = new Array(); // []

const arr = []; // []

const arr = new Array(7); // [empty × 7]

const arr = new Array(7).fill(1); // [1, 1, 1, 1, 1, 1, 1]
```

## 2.数组的访问

- 索引访问

```js
const arr = [1, 2, 3, 4]; // [1, 2, 3, 4]

arr[2]; // 2
```

## 3.数组的遍历

- 通过循环数组的下标，来依次访问每个值

### 1）for 循环

```js
// 获取数组的长度
const len = arr.length;
for (let i = 0; i < len; i++) {
  // 输出数组的元素值，输出当前索引
  console.log(arr[i], i);
}
```

### 2）forEach 方法

- 通过取 forEach 方法中传入函数的第一个入参和第二个入参，也可以取到数组每个元素的值及其对应索引

```js
const arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
  console.log(item, index);
});
```

### 3）map 方法

- map 方法会根据你传入的函数逻辑对数组中每个元素进行处理、进而`返回`一个全`新`的`数组`，在遍历的基础上“再加工”

```js
const arr = [1, 2, 3, 4];
const newArray = arr.map((item, index) => {
  console.log(item, index);
  return item++;
});
console.log(arr); // [1, 2, 3, 4];
console.log(newArray); // [2, 3, 4, 5]
```

## 4.二维数组

- 二维数组其实就是数组套数组，也就是每个元素都是数组的数组

- 从形状上看，相对于一维数组一条“线”一般的布局，二维数组更像是一个“面”

- 在数学中，形如这样长方阵列排列的复数或实数集合，被称为“矩阵”。因此二维数组的别名就叫“矩阵”

```js
const arr = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
```

![image](images/core/3.png)

## 5.二维数组的初始化

### 1）fill 的局限性

- 给 fill 传递一个入参时，如果这个入参的类型是`引用类型`，那么 fill 在填充坑位时填充的其实就是`入参的引用`

```js
const arr = new Array(7).fill([]); // [Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0)]

// 一整列的元素都被设为了 1
arr[0][0] = 1;

console.log(arr); // [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]
```

- 7 个数组`对应了同一个引用`、指向的是同一块内存空间，它们本质上是同一个数组。因此当你修改第 0 行第 0 个元素的值时，第 1-6 行的第 0 个元素的值也都会跟着发生改变

### 2）初始化一个二维数组

- for 循环中，每一次迭代都通过“[]”来创建一个新的数组，这样便不会有引用指向问题

```js
const arr = [];
const len = 5;
for (let i = 0; i < len; i++) {
  arr[i] = [];
}
```

### 3）二维数组的访问

- 需要两层循环

```js
const arr = [[1, 2], [1, 2, 3, 4], [1, 2, 3], [1, 2, 3, 4, 5], [1]];
const outLen = arr.length;
for (let i = 0; i < outLen; i++) {
  const innerLen = arr[i].length;
  for (let j = 0; j < innerLen; j++) {
    // 输出数组的值，输出数组的索引
    console.log(arr[i][j], i, j);
  }
}
```

- 一维数组用 for 循环遍历只需一层循环，二维数组是两层，三维数组就是三层。依次类推，N 维数组需要 N 层循环来完成遍历

## 6.其他数组方法

> concat、some、slice、join、sort、pop、push

## 7.灵活增删的数组

- 数组的增删操作可以说是没有任何限制的，允许我们在任何位置执行想要的操作

### 1）数组中增加元素的三种方法

- unshift 方法-`添加`元素`到`数组的`头部`
  - 返回值为`数组的长度`

```js
const arr = [1, 2];
const result = arr.unshift(0);
console.log(arr); // [0, 1, 2]
console.log(result); // 3
```

- push 方法-`添加`元素`到`数组的`尾部`
  - 返回值为`数组的长度`

```js
const arr = [1, 2];
const result = arr.push(0);
console.log(arr); // [1, 2, 0]
console.log(result); // 3
```

- splice 方法-`添加`元素`到`数组的`任何位置`
  - 返回`由被删除的 item组成的数组`

```js
const arr = [1, 2];
const result = arr.splice(1, 0, 3);
console.log(arr); // [1, 3, 2]
console.log(result); // []
```

### 2）数组中删除元素的三种方法

- shift 方法-删除数组头部的元素
  - 返回`被删除的 item`

```js
const arr = [1, 2, 3];
const result = arr.shift();
console.log(arr); // [2, 3]
console.log(result); // 1
```

- pop 方法-删除数组尾部的元素
  - 返回`被删除的 item`

```js
const arr = [1, 2, 3];
const result = arr.pop();
console.log(arr); // [1, 2]
console.log(result); // 3
```

- splice 方法-删除数组任意位置的元素
  - 返回`由被删除的 item组成的数组`

```js
const arr = [1, 2, 3];
const result = arr.splice(1, 1);
console.log(arr); // [1, 2]
console.log(result); // 3
```

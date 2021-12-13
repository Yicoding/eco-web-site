---
toc: menu
---

# 栈

- 栈和队列的实现一般都要依赖于数组，栈和队列看作是“特别的数组”

## 1.灵活增删的数组

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

## 2.栈（Stack）——只用 pop 和 push 完成增删的“数组”

- 栈是一种`后进先出`(LIFO，Last In First Out)的数据结构

  - `后来居上`

  - 只允许从尾部添加元素 - push

  - 只允许从尾部取出元素 - pop

```js
// 初始状态，栈空
const stack = [];
// 入栈过程
stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('冰工厂');
stack.push('光明奶砖');

// 出栈过程，栈不为空时才执行
while (stack.length) {
  // 单纯访问栈顶元素（不出栈）
  const top = stack[stack.length - 1];
  console.log('现在取出的冰淇淋是', top);
  // 将栈顶元素出栈
  stack.pop();
}

// 栈空
stack; // []
```

---
toc: menu
---

# 队列（Queue）——只用 push 和 shift 完成增删的“数组”

- 队列是一种`先进先出`（FIFO，First In First Out）的数据结构
  - `排队点餐`，先点餐的人先出餐，后点餐的人后出餐
  - 只允许从尾部添加元素 - push
  - 只允许从头部移除元素 - shift

```js
const queue = [];
queue.push('first');
queue.push('second');
queue.push('third');

while (queue.length) {
  // 单纯访问队头元素（不出队）
  const top = queue[0];
  console.log(top, '取餐');
  // 将队头元素出队
  queue.shift();
}

// 队空
queue; // []
```

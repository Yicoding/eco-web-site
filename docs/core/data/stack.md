---
toc: menu
---

# 栈（Stack）——只用 pop 和 push 完成增删的“数组”

- 栈和队列的实现一般都要依赖于数组，栈和队列看作是“特别的数组”

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

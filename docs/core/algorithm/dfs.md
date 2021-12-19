---
toc: menu
---

# 遍历: DFS 与 BFS

## 1.DFS（深度优先搜索）

- 将“深度”作为前进的第一要素的搜索方法，就是“深度优先搜索”
- 深度优先搜索的核心思想，是试图穷举所有的完整路径

### 1）深度优先搜索的本质——栈结构

- 深度优先搜索的过程可以转化为一系列的入栈、出栈操作

### 2）DFS 与二叉树的遍历

```js
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}
```

- 二叉树的先序遍历正是深度优先搜索思想的递归实现。可以说深度优先搜索过程就类似于树的先序遍历、是树的先序遍历的推广

- 首先，函数调用的底层，仍然是由栈来实现的。JS 会维护一个叫“函数调用栈”的东西，preorder 每调用一次自己，相关调用的上下文就会被 push 进函数调用栈中；待函数执行完毕后，对应的上下文又会从调用栈中被 pop 出来。因此，即便二叉树的递归调用过程中，并没有出现栈这种数据结构，也依然改变不了递归的本质是栈的事实

- 其次，DFS 作为一种思想，它和树的递归遍历一脉相承、却并不能完全地画上等号——DFS 的解题场景其实有很多，其中有一类会要求我们记录每一层递归式里路径的状态，此时就会强依赖栈结构

## 2.BFS（广度优先搜索）

- 与深度优先搜索不同的是，广度优先搜索（BFS）并不执着于“一往无前”这件事情。它关心的是眼下自己能够直接到达的所有坐标，其动作有点类似于“扫描”

```js
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};
function BFS(root) {
  const queue = []; // 初始化队列queue
  // 根结点首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    const top = queue[0]; // 取出队头元素
    // 访问 top
    console.log(top.val);
    // 如果左子树存在，左子树入队
    if (top.left) {
      queue.push(top.left);
    }
    // 如果右子树存在，右子树入队
    if (top.right) {
      queue.push(top.right);
    }
    queue.shift(); // 访问完毕，队头元素出队
  }
}
BFS(root);
```

---
toc: menu
---

# 树（二叉树）

## 1.树结构

- 把树根抽象为“根结点”，树枝抽象为“边”，树枝的两个端点抽象为“结点”，树叶抽象为“叶子结点”
  - 树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层，以此类推
  - 结点和树的“高度”计算规则：叶子结点高度记为 1，每向上一层高度就加 1，逐层向上累加至目标结点时，所得到的的值就是目标结点的高度。树中结点的最大高度，称为“树的高度”
  - “度”的概念：一个结点开叉出去多少个子树，被记为结点的“度”。比如我们上图中，根结点的“度”就是 3
  - “叶子结点”：叶子结点就是度为 0 的结点。在上图中，最后一层的结点的度全部为 0，所以这一层的结点都是叶子结点

## 2.二叉树结构

- 它可以没有根结点，作为一棵空树存在

- 如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

![iamge](images/core/8.png)

- 二叉树中，左右子树的位置是严格约定、不能交换的

- B 和 C、D 和 E、F 和 G 是不能互换的

## 3.二叉树的编码实现

### 1）结构分为三块

- 数据域
- 左侧子结点（左子树根结点）的引用
- 右侧子结点（右子树根结点）的引用

### 2）定义二叉树构造函数

- 需要把左侧子结点和右侧子结点都预置为空

```js
// 二叉树结点的构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```

### 3）新建一个二叉树结点

```js
const node = new TreeNode('A');

node.left = new TreeNode('B');
node.right = new TreeNode('C');

node.left.left = new TreeNode('D');
node.left.right = new TreeNode('E');
node.right.left = new TreeNode('F');
node.right.right = new TreeNode('G');
```

![iamge](images/core/9.png)

## 4.二叉树的遍历的定义

- 以一定的顺序规则，逐个访问二叉树的所有结点，这个过程就是二叉树的遍历

- 按照顺序规则的不同，遍历方式有以下四种：

  - 先序遍历
  - 中序遍历
  - 后序遍历
  - 层次遍历

- 按照实现方式的不同，遍历方式又可以分为以下两种

  - 递归遍历（先、中、后序遍历）
  - 迭代遍历（层次遍历）

## 5.二叉树的递归遍历

> 编程语言中，函数 Func(Type a,……)直接或间接调用函数本身，则该函数称为递归函数

- “递归”就意味着“反复”

- 递归函数的编写要点：

  - 递归式：指的是每一次重复的内容是什么
  - 递归边界：指的是什么时候停下来，用 return 返回

- 二叉树递归式的定义：

  - 它可以没有根结点，作为一棵空树存在
  - 如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

    ![image](images/core/10.png)

  - 指根结点的遍历时机区分“先”、“中”、“后”，根结点的遍历分别被安排在了首要位置、中间位置和最后位置
    - 先序遍历：根结点 -> 左子树 -> 右子树
    - 中序遍历：左子树 -> 根结点 -> 右子树
    - 后序遍历：左子树 -> 右子树 -> 根结点

**二叉树的数据**

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
```

### 1）先序遍历实现

```js
function preorder(root) {
  if (!root) {
    return;
  }
  console.log('当前遍历的节点是：', root.val);
  preorder(root.left);
  preorder(root.right);
}
preorder(root); // A -> B -> D -> E -> C -> F
```

### 2）中序遍历实现

```js
function midorder(root) {
  if (!root) {
    return;
  }
  midorder(root.left);
  console.log('当前遍历的节点是：', root.val);
  midorder(root.right);
}
midorder(root); // D -> B -> E -> A -> C -> F
```

### 3）后序遍历实现

```js
function afterorder(root) {
  if (!root) {
    return;
  }
  afterorder(root.left);
  afterorder(root.right);
  console.log('当前遍历的节点是：', root.val);
}
afterorder(root); // D -> E -> B -> F -> C -> A
```

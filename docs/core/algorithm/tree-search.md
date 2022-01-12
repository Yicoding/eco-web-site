---
toc: menu
---

# 二叉搜索树

- 二叉搜索树（Binary Search Tree）简称 `BST`，是二叉树的一种特殊形式

- 它有很多别名，比如排序二叉树、二叉查找树等等

## 1.定义

- 树的定义总是以递归的形式出现，二叉搜索树也不例外，它的递归定义如下：

  - 1.是一棵空树

  - 2.是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域

  - 3.满足以上两个条件之一的二叉树，就是二叉搜索树

- 二叉搜索树强调的是数据域的有序性：

  - 二叉搜索树上的每一棵子树，都应该满足 `左孩子 <= 根结点 <= 右孩子` 这样的大小关系

![image](images/core/43.png)

- 根结点的数据域为 6，它的左子树的所有结点都小于等于 6、右子树的所有结点都大于等于 6

- 同时在任意子树的内部，也满足这个条件——比如左子树中，根结点值为 3，根结点对应左子树的所有结点都小于等于 3、右子树的所有结点都大于等于 3

## 2.查找数据域为某一特定值的结点

- 假设这个目标结点的数据域值为 n，我们借助二叉搜索树数据域的有序性，可以有以下查找思路：

  - 1.递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回
  - 2.若当前遍历到的结点对应的数据域值刚好等于 n，则查找成功，返回
  - 3.若当前遍历到的结点对应的数据域值大于目标值 n，则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归
  - 4.若当前遍历到的结点对应的数据域值小于目标值 n，则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归

```js
function search(root, n) {
  // 若 root 为空，查找失败，直接返回
  if (!root) {
    return;
  }
  // 找到目标结点，输出结点对象
  if (root.val === n) {
    console.log('目标结点是：', root);
    return root;
  }
  if (root.val > n) {
    // 当前结点数据域大于n，向左查找
    search(root.left, n);
  } else {
    // 当前结点数据域小于n，向右查找
    search(root.right, n);
  }
}
```

## 3.插入新结点

- 二叉搜索树插入结点的过程，和搜索某个结点的过程几乎是一样的：

  - 从根结点开始，把我们希望插入的数据值和每一个结点作比较。若大于当前结点，则向右子树探索；若小于当前结点，则向左子树探索。最后找到的那个空位，就是它合理的栖身之所

```js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function insertIntoBST(root, n) {
  // 若 root 为空，说明当前是一个可以插入的空位
  if (!root) {
    // 用一个值为n的结点占据这个空位
    root = new TreeNode(n);
    return root;
  }

  if (root.val > n) {
    // 当前结点数据域大于n，向左查找
    root.left = insertIntoBST(root.left, n);
  } else {
    // 当前结点数据域小于n，向右查找
    root.right = insertIntoBST(root.right, n);
  }

  // 返回插入后二叉搜索树的根结点
  return root;
}
```

## 4.删除指定结点

- 想要删除某个结点，首先要找到这个结点。在定位结点后，需要考虑以下情况：

  - 结点不存在，定位到了空结点。直接返回即可
  - 需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可
  - 需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖掉目标结点
  - 需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点，用这个结点覆盖掉目标结点
  - 需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：要么取左子树中值最大的结点，要么取右子树中取值最小的结点。两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性

```js
function deleteNode(root, n) {
  // 如果没找到目标结点，则直接返回
  if (!root) {
    return root;
  }
  // 定位到目标结点，开始分情况处理删除动作
  if (root.val === n) {
    // 若是叶子结点，则不需要想太多，直接删除
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      // 寻找左子树里值最大的结点
      const maxLeft = findMax(root.left);
      // 用这个 maxLeft 覆盖掉需要删除的当前结点
      root.val = maxLeft.val;
      // 覆盖动作会消耗掉原有的 maxLeft 结点
      root.left = deleteNode(root.left, maxLeft.val);
    } else {
      // 寻找右子树里值最小的结点
      const minRight = findMin(root.right);
      // 用这个 minRight 覆盖掉需要删除的当前结点
      root.val = minRight.val;
      // 覆盖动作会消耗掉原有的 minRight 结点
      root.right = deleteNode(root.right, minRight.val);
    }
  } else if (root.val > n) {
    // 若当前结点的值比 n 大，则在左子树中继续寻找目标结点
    root.left = deleteNode(root.left, n);
  } else {
    // 若当前结点的值比 n 小，则在右子树中继续寻找目标结点
    root.right = deleteNode(root.right, n);
  }
  return root;
}

// 寻找左子树最大值
function findMax(root) {
  while (root.right) {
    root = root.right;
  }
  return root;
}

// 寻找右子树的最小值
function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}
```

## 5.二叉搜索树的特性

- `二叉搜索树的中序遍历序列是有序的！`

## 6.对定义的考察：二叉搜索树的验证

### 1）题目描述

> 给定一个二叉树，判断其是否是一个有效的二叉搜索树

- 假设一个二叉搜索树具有如下特征：

  - 节点的左子树只包含小于当前节点的数
  - 节点的右子树只包含大于当前节点的数
  - 所有左子树和右子树自身必须也是二叉搜索树

- 示例：

  - 1.输入:

    ```
      2
      / \
    1   3
    ```

  - 输出: true

  - 2.输入:

    ```
    5
    / \
    1   4
      / \
      3   6
    ```

  - 输出: false

- 解释: 输入为: [5,1,4,null,null,3,6]
- 根节点的值为 5 ，但是其右子节点值为 4

### 2）思路分析

- 空树的判定比较简单，关键在于非空树的判定

- 需要递归地对非空树中的左右子树进行遍历，检验每棵子树中是否都满足 `左 < 根 < 右` 这样的关系

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  // 定义递归函数
  function dfs(root, minValue, maxValue) {
    // 若是空树，则合法
    if (!root) {
      return true;
    }
    // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
    if (root.val <= minValue || root.val >= maxValue) return false;
    // 左右子树必须都符合二叉搜索树的数据域大小关系
    return (
      dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    );
  }
  // 初始化最小值和最大值为极小或极大
  return dfs(root, -Infinity, Infinity);
};
```

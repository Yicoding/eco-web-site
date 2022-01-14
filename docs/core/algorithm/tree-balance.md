---
toc: menu
---

# 平衡二叉树

- 二叉搜索树是二叉树的特例，平衡二叉树则是二叉搜索树的特例

## 1.定义

- 平衡二叉树（又称 AVL Tree）指的是任意结点的左右子树高度差绝对值都不大于 1 的二叉搜索树

## 2.出现原因

- 平衡二叉树的出现，是为了`降低`二叉搜索树的查找`时间复杂度`

- 平衡二叉树 与 二叉搜索树比较：

  - 平衡二叉树
    ![image](images/core/45.png)
  - 二叉搜索树
    ![image](images/core/44.png)

## 3.平衡二叉树的判定

### 1）题目描述

> 给定一个二叉树，判断它是否是高度平衡的二叉树

- 本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1

- 示例 1:

  - 给定二叉树 [3,9,20,null,null,15,7]

    ```
       3
      / \
    9   20
       /  \
      15   7
    ```

  - 返回 true

- 示例 2:

  - 给定二叉树 [1,2,2,3,3,null,null,4,4]

    ```
          1
          / \
        2   2
        / \
      3   3
      / \
    4   4
    ```

  - 返回 false

### 2）思路分析

- 1.任意结点

  - 每一个结点都需要符合某个条件，也就是说每一个结点在被遍历到的时候都需要重复某个校验流程：暗示使用递归

- 2.左右子树高度差绝对值都不大于 1

  - 这个校验规则，就是递归式

### 3）编码实现

```js
const isBalanced = function (root) {
  // 立一个flag，只要有一个高度差绝对值大于1，这个flag就会被置为false
  let flag = true;
  // 定义递归逻辑
  function dfs(root) {
    // 如果是空树，高度记为0；如果flag已经false了，那么就没必要往下走了，直接return
    if (!root || !flag) {
      return 0;
    }
    // 计算左子树的高度
    const left = dfs(root.left);
    // 计算右子树的高度
    const right = dfs(root.right);
    // 如果左右子树的高度差绝对值大于1，flag就破功了
    if (Math.abs(left - right) > 1) {
      flag = false;
      // 后面再发生什么已经不重要了，返回一个不影响回溯计算的值
      return 0;
    }
    // 返回当前子树的高度
    return Math.max(left, right) + 1;
  }

  // 递归入口
  dfs(root);
  // 返回flag的值
  return flag;
};
```

## 4.平衡二叉树的构造

### 1）题目描述

> 给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值

- 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的

- 如果有多种构造方法，请你返回任意一种

- 示例：

![image](images/core/46.png)

![image](images/core/47.png)

- 输入：root = [1,null,2,null,3,null,4,null,null]

- 输出：[2,1,3,null,null,null,4]

- 解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案

- 提示：

  - 树节点的数目在 1 到 10^4 之间。 树节点的值互不相同，且在 1 到 10^5 之间

### 2）思路分析

- 二叉搜索树的中序遍历序列是有序的

- 中序遍历求出有序数组

- 逐个将二分出来的数组子序列“提”起来变成二叉搜索树

```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  // 初始化中序遍历序列数组
  const nums = [];
  // 定义中序遍历二叉树，得到有序数组
  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  }

  // 这坨代码的逻辑和上一节最后一题的代码一模一样
  function buildAVL(low, high) {
    // 若 low > high，则越界，说明当前索引范围对应的子树已经构建完毕
    if (low > high) {
      return null;
    }
    // 取数组的中间值作为根结点值
    const mid = Math.floor(low + (high - low) / 2);
    // 创造当前树的根结点
    const cur = new TreeNode(nums[mid]);
    // 构建左子树
    cur.left = buildAVL(low, mid - 1);
    // 构建右子树
    cur.right = buildAVL(mid + 1, high);
    // 返回当前树的根结点
    return cur;
  }
  // 调用中序遍历方法，求出 nums
  inorder(root);
  // 基于 nums，构造平衡二叉树
  return buildAVL(0, nums.length - 1);
};
```

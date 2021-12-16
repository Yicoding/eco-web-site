---
toc: menu
---

# 队列（Queue）

- 栈向队列的转化
- 双端队列
- 优先队列

## 1.如何用栈实现一个队列？

> 题目描述：使用栈实现队列的下列操作：

- push(x) -- 将一个元素放入队列的尾部
- pop() -- 从队列首部移除元素
- peek() -- 返回队列首部的元素
- empty() -- 返回队列是否为空

- 示例:

  ```js
  MyQueue queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  queue.peek(); // 返回 1
  queue.pop(); // 返回 1
  queue.empty(); // 返回 false
  ```

- 说明:
  - 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
  - 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
  - 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）

### 1）思路分析

> 前提：栈，后进先出；队列，先进先出

> 目标实现：用栈实现先进先出的效果

- 首先，准备两个栈

  ![image](images/core/35.png)

- 把这三个元素按顺序从 stack1 中出栈、然后入栈到 stack 2 里去

  ![image](images/core/36.png)

- stack1 里入栈新元素，当 4 需要被出栈时，stack2 一定已经空掉了。当 stack2 为空、而 stack1 不为空时，我们需要继续把 stack1 中的元素转移到 stack2 中去，然后再从 stack2 里取元素

  ![image](images/core/37.png)

- `所有的出队操作都只能依赖 stack2 来完成`

### 2）编码实现

```js
/**
 * 初始化构造函数
 */
const MyQueue = function () {
  // 初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 直接调度数组的 push 方法
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length !== 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 为了达到逆序的目的，我们只从 stack2 里出栈元素
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length != 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 缓存 stack2 的长度
  const stack2Len = this.stack2.length;
  return stack2Len && this.stack2[stack2Len - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length;
};
```

## 2.双端队列

- 双端队列就是允许在队列的两端进行插入和删除的队列

- 体现在编码上，最常见的载体是既允许使用 pop、push 同时又允许使用 shift、unshift 的数组：

  ```js
  const queue = [1, 2, 3, 4]; // 定义一个双端队列
  queue.push(1); // 双端队列尾部入队
  queue.pop(); // 双端队列尾部出队
  queue.shift(); // 双端队列头部出队
  queue.unshift(1); // 双端队列头部入队
  ```

## 3.滑动窗口问题

> 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值

- 示例:

  - 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
  - 输出: [3,3,5,5,6,7]

- 解释: 滑动窗口的位置

  ```js
  [1 3 -1] -3 5 3 6 7
  1 [3 -1 -3] 5 3 6 7
  1 3 [-1 -3 5] 3 6 7
  1 3 -1 [-3 5 3] 6 7
  1 3 -1 -3 [5 3 6] 7
  1 3 -1 -3 5 [3 6 7]
  ```

- 最大值分别对应：3 3 5 5 6 7

- 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小

### 1）双指针+遍历法

- 时间复杂度简化后用大 O 表示法可以记为 O(kn)

**1.思路分析**

- 约束范围，可以用双指针。因此我这里定义一个 left 左指针、定义一个 right 右指针，分别指向窗口的两端即可

  ![image](images/core/38.png)

- 左右指针每次一起往前走一步

**2.编码实现**

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 定义结果数组
  const res = [];
  // 初始化左指针
  let left = 0;
  // 初始化右指针
  let right = k - 1;
  // 当数组没有被遍历完时，执行循环体内的逻辑
  while (right < len) {
    // 计算当前窗口内的最大值
    const max = calMax(nums, left, right);
    // 将最大值推入结果数组
    res.push(max);
    // 左指针前进一步
    left++;
    // 右指针前进一步
    right++;
  }
  // 返回结果数组
  return res;
};

// 这个函数用来计算最大值
function calMax(arr, left, right) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // 初始化 maxNum 的值为窗口内第一个元素
  let maxNum = arr[left];
  // 遍历窗口内所有元素，更新 maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  // 返回最大值
  return maxNum;
}
```

### 2）双端队列法(优化后的写法)

- 时间复杂度简化后用大 O 表示法可以记为 O(n)

**1.思路分析**

- 使用双端队列法，核心的思路是维护一个`有效的递减队列`

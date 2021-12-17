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

  - 维持递减队列的目的，就在于确保队头元素始终是当前窗口的最大值

  ![image](images/core/39.png)

- 在遍历数组的前期，我们尝试将遍历到的每一个元素都推入队列内部

- 每尝试推入一个元素前，都把这个元素与队列尾部的元素作对比。根据对比结果的不同，采取不同的措施:

  - 如果试图推入的元素（当前元素）大于队尾元素，则意味着队列的递减趋势被打破了。此时我们需要将队列尾部的元素依次出队（注意由于是双端队列，所以队尾出队是没有问题的）、直到队尾元素大于等于当前元素为止，此时再将当前元素入队
  - 如果试图推入的元素小于队列尾部的元素，那么就不需要额外的操作，直接把当前元素入队即可

- 当遍历到的元素个数达到了 k 个时，意味着滑动窗口的第一个最大值已经产生了，我们把它 push 进结果数组里

- 然后继续前进，我们发现数组索引 0 处的元素（1）已经被踢出滑动窗口了

- 接下来，每往前遍历一个元素，都需要重复以上的几个步骤

- 步骤：
  - 检查队尾元素，看是不是都满足大于等于当前元素的条件。如果是的话，直接将当前元素入队。否则，将队尾元素逐个出队、直到队尾元素大于等于当前元素为止
  - 将当前元素入队
  - 检查队头元素，看队头元素是否已经被排除在滑动窗口的范围之外了。如果是，则将队头元素出队
  - 判断滑动窗口的状态：看当前遍历过的元素个数是否小于 k。如果元素个数小于 k，这意味着第一个滑动窗口内的元素都还没遍历完、第一个最大值还没出现，此时我们还不能动结果数组，只能继续更新队列；如果元素个数大于等于 k，这意味着滑动窗口的最大值已经出现了，此时每遍历到一个新元素（也就是滑动窗口每往前走一步）都要及时地往结果数组里添加当前滑动窗口对应的最大值（最大值就是此时此刻双端队列的队头元素）

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
  // 初始化结果数组
  const res = [];
  // 初始化双端队列
  const deque = [];
  // 开始遍历数组
  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素时
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque.length && deque[0] <= i - k) {
      // 将队头元素索引出队
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  // 返回结果数组
  return res;
};
```

---
toc: menu
---

# 栈

## 1.“有效括号”问题

> 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效

- 有效字符串需满足：

  - 左括号必须用相同类型的右括号闭合
  - 左括号必须以正确的顺序闭合
  - 注意空字符串可被认为是有效字符串

  ```js
  '()'; // true
  '()[]{}'; // true
  '(]'; // false
  '([)]'; // false
  '{[]}'; // false
  ```

### 1）括号问题为什么可以用栈做

- 括号成立意味着`对称性`

- 据栈的后进先出原则，一组数据的入栈和出栈顺序刚好是对称的

- 题目中若涉及括号问题，则很有可能和栈相关

### 2）思路分析

- 在遍历字符串的过程中，往栈里 push 括号对应的配对字符。比如如果遍历到了 (，就往栈里 push )

- 假如字符串中所有的括号都成立，那么前期我们 push 进去的一定全都是左括号、后期 push 进去的一定全都是右括号。而且左括号的入栈顺序，和其对应的右括号的入栈顺序应该是相反的

  ```js
  '({[]})'; // true
  ```

- 最后一个入栈的左方括号`[`，与之匹配的右方括号`]`正是接下来第一个入栈的右括号

- 因此，我们可以果断地认为在左括号全部入栈结束时，栈顶的那个左括号，就是第一个需要被配对的左括号。此时我们需要判断的是接下来入栈的第一个右括号是否和此时栈顶的左括号配对。如果配对成功，那么这一对括号就是有效的，否则直接 `return false`

- 当判断出一对有效的括号之后，我们需要及时地丢掉它，去判断其它括号是否有效。这里这个“丢掉”的动作，就对应着两个括号一起出栈的过程

- 每配对成功一对括号，我们都将这对括号出栈。这样一来，我们就可以确保栈顶的括号总是下一个需要被匹配的左括号

- 如果说我们出栈到最后，栈不为空，那么意味着一部分没有被匹配上的括号被剩下来了，说明字符串中并非所有的括号都有效，判断 `false`；反之，则说明所有的括号都配对成功了，判断为 `true`

### 3）编码实现

```js
// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 结合题意，空字符串无条件判断为 true
  if (!s) {
    return true;
  }
  // 初始化 stack 数组
  const stack = [];
  // 缓存字符串长度
  const len = s.length;
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i];
    // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
    if (ch === '(' || ch === '{' || ch === '[') stack.push(leftToRight[ch]);
    // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
    else {
      // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
};
```

## 2.每日温度问题

> 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替
>
> > 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]
>
> > 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数

### 1）思路分析

- 栈结构可以帮我们避免重复操作

  - 避免重复操作的秘诀就是及时地将不必要的数据出栈，避免它对我们后续的遍历产生干扰

- 思路：

  - 尝试去维持一个递减栈

  - 当遍历过的温度，维持的是一个单调递减的态势时，我们就对这些温度的索引下标执行入栈操作；
  - 只要出现了一个数字，它打破了这种单调递减的趋势，也就是说它比前一个温度值高，这时我们就对前后两个温度的索引下标求差，得出前一个温度距离第一次升温的目标差值

- 在这个过程中，我们仅对每一个温度执行最多一次入栈操作、一次出栈操作，整个数组只会被遍历一次，因此时间复杂度就是 O(n)

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 入参是温度数组
const dailyTemperatures = function (T) {
  const len = T.length; // 缓存数组的长度
  const stack = []; // 初始化一个栈
  const res = new Array(len).fill(0); //  初始化结果数组，注意数组定长，占位为0
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop();
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top;
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i);
  }
  // 返回结果数组
  return res;
};
```

## 3.“最小栈”问题

> 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈

- push(x) —— 将元素 x 推入栈中
- pop() —— 删除栈顶的元素
- top() —— 获取栈顶元素
- getMin() —— 检索栈中的最小元素

```js
const MinStack = function () {
  this.stack = [];
  // 定义辅助栈
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 若入栈的值小于当前最小值，则推入辅助栈栈顶
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1];
};
```

---
toc: menu
---

# 快慢指针与多指针——链表的复杂操作

- `题目特征`

  - 涉及到反复的遍历

  - 涉及相对复杂的链表操作，比如反转、指定位置的删除等

- `定义`
  - 快慢指针指的是两个一前一后的指针，两个指针往同一个方向走，只是一个快一个慢。快慢指针严格来说只能有`俩`
  - 出现一前、一中、一后的三个指针，这种`超过两个指针`的解题方法也叫`“多指针法”`
  - 快慢指针+多指针，双管齐下，可以帮助我们解决链表中的大部分复杂操作问题

## 1.快慢指针-删除链表的倒数第 N 个结点

> 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点

- 示例：
  - 给定一个链表: 1->2->3->4->5, 和 n = 2
  - 当删除了倒数第二个结点后，链表变为 1->2->3->5
  - 给定的 n 保证是有效的

### 1）思路分析-使用快慢指针前

- `倒数变正数`

  - `倒数第 N 个`转换为`正数第 len - n + 1`个

- 直接遍历两趟：

  - 第一次，设置一个变量 count = 0，每遍历到一个不为空的结点，count 就加 1，一直遍历到链表结束为止，得出链表的总长度 len
  - 根据这个总长度，算出倒数第 n 个到底是正数第几个了（M = len - n + 1）
  - 第二次，遍历到第 M - 1（也就是 len - n） 个结点的时候就可以停下来，执行删除操作

- 1.求长度
- 2.做减法，找定位。
  <!-- ```js
  function deleteChain(head, n) {
    function ListNode(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
    const dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    let len = 0;
    while (head && head.next) {
      len++;
    }
    let no = len - n + 1;
    let i = 0;
    while (i < no) {
      if (i === no - 1) {
        cur.next = cur.next.next;
        break
      }
      i++
      cur = cur.next;
    }
    return dummy.next;
  }
  ``` -->

### 2）使用快慢指针解决

- `超过一次的遍历`，思考是否可以使用`双指针`解决
- 通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“n”上（用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆），这样当快指针走到链表末尾（第 len 个）时，慢指针刚好就在 len - n 这个地方稳稳落地

- 1.首先两个指针 slow 和 fast，全部指向链表的起始位——dummy 结点
  ![image](images/core/23.png)

- 2.快指针先出发！闷头走上 n 步，在第 n 个结点处打住，这里 n=2
  ![image](images/core/24.png)

- 3.然后，快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来
  ![image](images/core/25.png)

- 4.此时，慢指针所指的位置，就是倒数第 n 个结点的前一个结点，然后基于这个结点来做删除
  ![image](images/core/26.png)

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  // 初始化 dummy 结点
  const dummy = new ListNode();
  // dummy指向头结点
  dummy.next = head;
  // 初始化快慢指针，均指向dummy
  let fast = dummy;
  let slow = dummy;

  // 快指针闷头走 n 步
  while (n !== 0) {
    fast = fast.next;
    n--;
  }

  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 慢指针删除自己的后继结点
  slow.next = slow.next.next;
  // 返回头结点
  return dummy.next;
};
```

## 2.多指针法——链表的反转

### 1）完全反转一个链表

- 处理链表的本质，是处理链表结点之间的指针关系

> 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点

- 示例:
  - 输入: 1->2->3->4->5->NULL
  - 输出: 5->4->3->2->1->NULL

**1.思路分析**

- 这里我们需要用到三个指针，它们分别指向目标结点（cur）、目标结点的前驱结点（pre）、目标结点的后继结点（next）

- 这里只需要一个简单的 `cur.next = pre`，就做到了 next 指针的反转

  ![iamge](images/core/27.png)

- 从第一个结点开始，每个结点都给它进行一次 next 指针的反转。到最后一个结点时，整个链表就已经被彻底反转掉了

**2.编码实现**

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  // 初始化前驱结点为 null
  let pre = null;
  // 初始化目标结点为头结点
  let cur = head;
  // 只要目标结点不为 null，遍历就得继续
  while (cur !== null) {
    // 记录一下 next 结点
    let next = cur.next;
    // 反转指针
    cur.next = pre;
    // pre 往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre;
};
```

### 2）局部反转一个链表

> 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转

- 说明:
  - 1 ≤ m ≤ n ≤ 链表长度
- 示例:
  - 输入: 1->2->3->4->5->NULL, m = 2, n = 4
  - 输出: 1->4->3->2->5->NULL

**1.思路分析**

- 1.仍然是从指针反转来入手：
  ![iamge](images/core/28.png)

- 2.除了在单纯的重复“逆序”这个动作之外，还需要对被逆序的区间前后的两个结点做额外的处理
  ![iamge](images/core/29.png)

- 3.由于遍历链表的顺序是从前往后遍历，为了避免结点 1 和结点 2 随着遍历向后推进被遗失，需要提前把 1 结点缓存下来

- 4.随着遍历的进行，当完成了结点 4 的指针反转后，此时 cur 指针就恰好指在结点 5 上
  ![iamge](images/core/30.png)

- 5.此时直接将结点 2 的 next 指针指向 cur、将结点 1 的 next 指针指向 pre 即可

**2.编码实现**

```js
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function (head, m, n) {
  // 定义pre、cur，用leftHead来承接整个区间的前驱结点
  let pre, cur, leftHead;
  // 别忘了用 dummy 嗷
  const dummy = new ListNode();
  // dummy后继结点是头结点
  dummy.next = head;
  // p是一个游标，用于遍历，最初指向 dummy
  let p = dummy;
  // p往前走 m-1 步，走到整个区间的前驱结点处
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  // 缓存这个前驱结点到 leftHead 里
  leftHead = p;
  // start 是反转区间的第一个结点
  let start = leftHead.next;
  // pre 指向start
  pre = start;
  // cur 指向 start 的下一个结点
  cur = pre.next;
  // 开始重复反转动作
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  //  leftHead 的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre;
  // 将区间内反转后的最后一个结点 next 指向 cur
  start.next = cur;
  // dummy.next 永远指向链表头结点
  return dummy.next;
};
```

**3.思考：递归实现**

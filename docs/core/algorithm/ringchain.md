---
toc: menu
---

# 环形链表

- 环形链表是链表中的一类特殊问题，它和链表反转一样，有着相对恒定的解题思路和适当的变体

## 1.如何判断链表是否成环

> 真题描述：给定一个链表，判断链表中是否有环

- 示例：

  - 输入：[3,2,0,-4]（链表结构如下图） 输出：true
  - 解释：链表中存在一个环

  ![iamge](images/core/31.png)

**1.思路分析**

- 一个环形链表的基本特点，是能够让遍历它的游标回到原点：

  ![iamge](images/core/32.png)

- 从 flag 出发，只要能够再回到 flag 处，那么就意味着，正在遍历一个环形链表

**2.编码实现**

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点
const hasCycle = function (head) {
  // 只要结点存在，那么就继续遍历
  while (head) {
    // 如果 flag 已经立过了，那么说明环存在
    if (head.flag) {
      return true;
    } else {
      // 如果 flag 没立过，就立一个 flag 再往下走
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};
```

## 2.定位环的起点

> 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null

- 示例 1：

  - 输入：head = [3,2,0,-4]（如下图）

    ![iamge](images/core/31.png)

  - 输出：tail connects to node index 1
  - 解释：链表中有一个环，其尾部连接到第二个结点

- 示例 2：

  - 输入：head = [1,2]（如下图）

    ![iamge](images/core/33.png)

  - 输出：tail connects to node index 0
  - 解释：链表中有一个环，其尾部连接到第一个结点

- 示例 3：

  - 输入：head = [1]（如下图）

    ![iamge](images/core/34.png)

  - 输出：no cycle
  - 解释：链表中没有环

**1.思路分析**

- 如果一个结点是环形链表成环的起点，那么它一定是第一个被发现 flag 标志已存在的结点

- 因此，只需要在第一次发现 flag 已存在时，将对应的结点返回即可

**2.编码实现**

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  while (head) {
    if (head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
};
```

**3.快慢指针的思路**

- 定义慢指针 slow，快指针 fast。两者齐头并进， slow 一次走一步、fast 一次 走两步。这样如果它们是在一个有环的链表里移动，一定有相遇的时刻

- 满足时，slow 和 fast 就一定会相遇。反之，如果两者没有相遇，同时 fast 遍历到了链表的末尾，发现 next 指针指向 null，则链表中不存在环

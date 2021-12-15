---
toc: menu
---

# 链表的应用

- 链表的处理：合并、`删除`等（删除操作画个记号，重点中的重点！）
- 链表的反转及其衍生题目
- 链表成环问题及其衍生题目

## 1.链表的合并

> 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的

- 示例：
  - 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

### 1）思路分析-中心思想

- 处理链表的本质，是处理链表结点之间的指针关系

![image](images/core/17.png)

- 两个链表如果想要合并为一个链表，我们恰当地补齐双方之间结点 next 指针的指向关系，就能达到目的

- 这根针`cur`每次钻进扣子眼儿之前，要先比较一下它眼前的两个扣子，选择其中值较小的那个，优先把它串进去。一次串一个，直到所有的扣子都被串进一条线为止（下图中红色箭头表明穿针的过程与方向）

![image](images/core/18.png)

- 同时我们还要考虑 `l1` 和 `l2` 两个链表长度不等的情况：若其中一个链表已经完全被串进新链表里了，而另一个链表还有剩余结点，考虑到该链表本身就是有序的，我们可以直接把它整个拼到目标链表的尾部

### 2）编码实现

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  // 定义头结点，确保链表可以被访问到
  let dummy = new ListNode();
  // cur 这里就是咱们那根“针”
  let cur = dummy;
  // “针”开始在 l1 和 l2 间穿梭了
  while (l1 && l2) {
    // 如果 l1 的结点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1 的结点
      cur.next = l1;
      // l1 指针向前一步
      l1 = l1.next;
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2;
      // l2 向前一步
      l2 = l2.next;
    }

    // “针”在串起一个结点后，也会往前一步
    cur = cur.next;
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2;
  // 返回起始结点
  return head.next;
}
```

## 2.链表结点的删除

> 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次

- 示例 1:
  - 输入: 1->1->2
  - 输出: 1->2
- 示例 2:
  - 输入: 1->1->2->3->3
  - 输出: 1->2->3

### 1）思路分析

- `去重`

- 将需要删除的目标结点的前驱结点 next 指针往后指一格：

- 判断两个元素是否重复，由于此处是`已排序`的链表，`直接判断前后两个元素值是否相等即可`

### 2）编码实现

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while (cur && cur.next) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next;
    } else {
      // 若不重复，继续遍历
      cur = cur.next;
    }
  }
  return head;
};
```

## 3.删除问题的延伸——dummy 结点

> 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字

- 示例 1:
  - 输入: 1->2->3->3->4->4->5
  - 输出: 1->2->5
- 示例 2:
  - 输入: 1->1->1->2->3
  - 输出: 2->3

### 1）思路分析

- `出现的重复项都删除`

- `之前`，删除某一个目标结点时，只需要将前驱结点的 next 指针往后挪一位就行了。
  ![image](images/core/19.png)

- `现在`，把前驱和后继一起删掉，前面两个值相同的结点要一起删掉才行，起始结点直接变成了第三个
  ![image](images/core/20.png)

  - 如果继续沿用刚才的思路，我们会发现完全走不通。因为我们的 cur 指针就是从图中第一个结点出发开始遍历的，无法定位到第一个结点的前驱结点，删除便无法完成。
  - 这时就可以用一个 `dummy` 结点来`解决这个问题`

- `dummy` 结点，就是人为制造出来的第一个结点的前驱结点，这样链表中所有的结点都能确保有一个前驱结点，也就都能够用同样的逻辑来处理了
  ![image](images/core/21.png)

- 如果想要删除两个连续重复的值为 1 的结点，我们只需要把 dummy 结点的 next 指针直接指向 2
  ![image](images/core/22.png)

- 由于重复的结点可能不止一个两个，这里需要用一个 while 循环来反复地进行重复结点的判断和删除操作

### 2）编码实现

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) {
    return head;
  }
  function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  // dummy 登场
  let dummy = new ListNode();
  // dummy 永远指向头结点
  dummy.next = head;
  // cur 从 dummy 开始遍历
  let cur = dummy;
  // 当 cur 的后面有至少两个结点时
  while (cur.next && cur.next.next) {
    // 对 cur 后面的两个结点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val;
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next;
      }
    } else {
      // 若不重复，则正常遍历
      cur = cur.next;
    }
  }
  // 返回链表的起始结点
  return dummy.next;
};
```

---
toc: menu
---

# 数组的应用

## 1.Map - 两数求和问题

> 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标

- 给定 nums = [11, 2, 15, 7], target = 9
- 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [1, 3]

### 1）“淳朴”解法

```js
function searchIndexs(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
const nums = [11, 2, 15, 7];
const target = 9;
const targetIndexs = searchIndexs(nums, target);
console.log(targetIndexs); // [1, 3]
```

### 2）淳朴”解法的反思

- 当发现代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环
- 因为两层循环很多情况下都意味着 O(n^2) 的复杂度，这个复杂度非常容易导致你的算法超时

### 3）\*空间换时间，Map 来帮忙

- `几乎所有的求和问题，都可以转化为求差问题`

- 通过把求和问题转化为求差问题，事情会变得更加简单

  - 在遍历数组的过程中，增加一个 Map 来记录已经遍历过的数字及其对应的索引值
  - 然后每遍历到一个新数字的时候，都回到 Map 里去查询 `targetNum 与该数的差值`是否已经在前面的数字中出现过了
  - 若出现过，那么答案已然显现

**1.利用对象**

```js
// 利用对象
function searchIndexs(nums, target) {
  const diffs = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      const targetIndexs = [diffs[target - nums[i]], i];
      console.log(targetIndexs, diffs);
      // { 11: 0, 2: 1, 15: 2, 7: 3 }
      return targetIndexs;
    }
    diffs[nums[i]] = i;
  }
}
const nums = [11, 2, 15, 7];
const target = 9;
const targetIndexs = searchIndexs(nums, target);
console.log(targetIndexs); // [1, 3]
```

**1.es6 Map**

```js
// es6 Map
function searchIndexs(nums, target) {
  const diffs = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (diffs.has(target - nums[i])) {
      const targetIndexs = [diffs.get(target - nums[i]), i];
      console.log(targetIndexs, diffs);
      // Map(3) {11 => 0, 2 => 1, 15 => 2}
      return targetIndexs;
    }
    diffs.set(nums[i], i);
  }
}
const nums = [11, 2, 15, 7];
const target = 9;
const targetIndexs = searchIndexs(nums, target);
console.log(targetIndexs); // [1, 3]
```

## 2.双指针法

- 双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义

### 1）合并两个有序数组

> 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组

- 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素

- 输入:
  - nums1 = [1,2,3,0,0,0], m = 3
  - nums2 = [2,5,6], n = 3
- 输出: [1,2,2,3,5,6]

**1.js 写法**

```js
// 未get到双指针用意写法
const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];

function orderArray(nums1, nums2) {
  return [...nums1, ...nums2].sort((a, b) => a - b);
}

orderArray(nums1, nums2);
```

**2.算法：双指针写法**

- 1.定义两个指针，各指向两个数组生效部分的尾部
  ![image](images/core/11.png)

- 2.每次只对指针所指的元素进行比较。取其中较大的元素，把它从 nums1 的末尾往前面填补
  ![image](images/core/12.png)

  - 为什么是从后往前填补：
    - 因为是要把所有的值合并到 nums1 里，所以说我们这里可以把 nums1 看做是一个“容器”
    - 但是这个容器，它不是空的，而是前面几个坑有内容的
    - 如果我们从前往后填补，就没法直接往对应的坑位赋值了（会产生值覆盖）
    - 从后往前填补，我们填的都是没有内容的坑，这样会省掉很多麻烦
  - 由于 nums1 的有效部分和 nums2 并不一定是一样长的。我们还需要考虑其中一个提前到头的这种情况
    - 如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。
    - 如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, nums2) {
  // 初始化两个指针的指向，初始化 nums1 尾部索引k
  const m = nums1.length,
    n = nums2.length;
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  // 当两个数组都没遍历完时，指针同步移动
  while (i >= 0 && j >= 0) {
    // 取较大的值，从末尾往前填补
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // nums2 留下的情况，特殊处理一下
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
  return nums1;
};
merge([1, 2, 3], [2, 5, 6]); // [1, 2, 2, 3, 5, 6]
```

### 2）三数求和问题

> 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组
>
> > 答案中不可以包含重复的三元组

- 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

**1.思路**

- 第一步是将数组排序

  ```js
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // [-4, -1, -1, 0, 1, 2]
  ```

- 然后，对数组进行遍历，每次遍历到哪个数字，就固定哪个数字
- 然后把左指针指向该数字后面一个坑里的数字，把右指针指向数组末尾，让左右指针从起点开始，向中间前进
  ![image](images/core/13.png)

- 每次指针移动一次位置，就计算一下两个指针指向数字之和加上固定的那个数之后，是否等于 0。如果是，那么我们就得到了一个目标组合；否则，分两种情况来看

  - 相加之和大于 0，说明右侧的数偏大了，右指针左移
  - 相加之和小于 0，说明左侧的数偏小了，左指针右移

- 这个数组在题目中要求了“不重复的三元组”，因此我们还需要做一个重复元素的跳过处理

**2.编码**

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  // 用于存放结果数组
  let res = [];
  // 给 nums 排序
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // 缓存数组长度
  const len = nums.length;
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1;
    // 右指针k
    let k = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      // 三数之和小于0，左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 处理左指针元素重复的情况
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 三数之和大于0，右指针后退
        k--;
        // 处理右指针元素重复的情况
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // 得到目标数字组合，推入结果数组
        res.push([nums[i], nums[j], nums[k]]);
        // 左右指针一起前进
        j++;
        k--;
        // 若左指针元素重复，跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        // 若右指针元素重复，跳过
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  // 返回结果数组
  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, -1, 2], [-1, 0, 1]]
```

**3.双指针法中的“对撞指针”法**

- 左右指针一起从两边往中间位置相互迫近，这样的特殊双指针形态，被称为“对撞指针”

- `当遇见“有序”和“数组”时，需要联想到对撞指针`

- 对撞指针可以帮助我们缩小问题的范围
  - 因为数组有序，所以我们可以用两个指针“画地为牢”圈出一个范围，这个范围以外的值不是太大就是太小、直接被排除在我们的判断逻辑之外，这样我们就可以把时间花在真正有意义的计算和对比上
  - 如此一来，不仅节省了计算的时间，更降低了问题本身的复杂度，我们做题的速度也会大大加快

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

```js
function searchIndexs(arr, total) {
  const diffs = {};
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (diffs[arr[i]])
  }
}
```

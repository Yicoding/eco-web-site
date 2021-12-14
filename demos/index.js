const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];

function orderArray(nums1, nums2) {
  return [...nums1, ...nums2].sort((a, b) => a - b);
}

orderArray(nums1, nums2);

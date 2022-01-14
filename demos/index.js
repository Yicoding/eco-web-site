const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];

function orderArray(nums1, nums2) {
  return [...nums1, ...nums2].sort((a, b) => a - b);
}

orderArray(nums1, nums2);

function order(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - 1 - i; j++) {
      console.log('执行');
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) return arr;
  }

  return arr;
}

function miniIndex(arr) {
  const len = arr.length;
  let miniIndex;
  for (let i = 0; i < len - 1; i++) {
    miniIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j;
      }
    }
    if (miniIndex !== i) {
      [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]];
    }
  }
  return arr;
}

function insertOrder(arr) {
  const len = arr.length;
  let temp;
  for (let i = 0; i < len; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

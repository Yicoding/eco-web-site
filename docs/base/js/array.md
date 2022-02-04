---
toc: menu
---

# 数组

## 1.Array.of

- 用于将参数依次转化为数组中的一项，然后返回这个新数组

```js
Array.of(8.0); // [8]
Array(8.0); // [empty × 8]

Array.of(8.0, 5); // [8, 5]
Array(8.0, 5); // [8, 5]

Array.of('8'); // ["8"]
Array('8'); // ["8"]
```

## 2.Array.from

- 只要一个对象有迭代器，Array.from 就能把它变成一个数组

- 返回新的数组，不改变原对象

```js
Array.from([1, 2, 3], function (val, index) {
  console.log(val, index);
});
// 1 0
// 2 1
// 3 2

var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
var arr = Array.from(
  obj,
  function (value, index) {
    console.log(value, index, this, arguments.length);
    return value.repeat(3); //必须指定返回值，否则返回 undefined
  },
  obj,
);
// a 0 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
// b 1 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
// c 2 {0: 'a', 1: 'b', 2: 'c', length: 3} 2
arr; // ['aaa', 'bbb', 'ccc']
```

## 3.Array 的判断

```js
var a = [];

// 1.基于instanceof
a instanceof Array;

// 2.基于constructor
a.constructor === Array;

// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);

// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype;

// 5.基于Object.prototype.toString
Object.prototype.toString.apply(a) === '[object Array]';

// 6.ES6
Array.isArray(a);

// 如果 isArray 不存在，那么 Array.isArray 的 polyfill 通常可以这样写：
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 4.改变自身的方法

- 基于 ES6，会改变自身值的方法一共有 9 个，分别为 pop、push、reverse、shift、sort、splice、unshift，以及两个 ES6 新增的方法 copyWithin 和 fill

- 题目：

  - 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组

  - 输入:

  - nums1 = [1,2,3,0,0,0]； m = 3

  - nums2 = [2,5,6]； n = 3

  - 输出: [1,2,2,3,5,6]

```js
function merge(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
}
```

## 5.不改变自身的方法

- 基于 ES7，不会改变自身的方法也有 9 个，分别为 concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、未形成标准的 toSource，以及 ES7 新增的方法 includes

- slice 不改变自身，而 splice 会改变自身：

  - slice 的语法是：arr.slice([start[, end]])

    - splice 第二个参数是删除的个数

  - splice 的语法是：arr.splice(start,deleteCount[, item1[, item2[, …]]])

    - slice 的第二个参数是 end 的坐标（可选）

## 6.数组遍历的方法

- 基于 ES6，不会改变自身的遍历方法一共有 12 个，分别为 forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values

## 7.类数组对象

### 1）arguments

- 它的对象只定义在函数体中，包括了函数的参数和其他属性

```js
function foo(name, age, sex) {
  console.log(arguments); // Arguments(3) ['jack', '18', 'male', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(typeof arguments); // object
  console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
}
foo('jack', '18', 'male');
```

### 2）HTMLCollection

- HTMLCollection 简单来说是 HTML DOM 对象的一个接口，这个接口包含了获取到的 DOM 元素集合，返回的类型是类数组对象

- 当文档中的 DOM 变化时，它也会随之变化

```js
var elem1, elem2;

// document.forms 是一个 HTMLCollection
elem1 = document.forms[0];
elem2 = document.forms.item(0);

console.log(elem1); // <form></form>
console.log(elem2); // <form></form>
console.log(typeof elem1); // object
console.log(Object.prototype.toString.call(elem1)); // [object HTMLCollection]
```

### 3）NodeList

- NodeList 对象是节点的集合，通常是由 querySlector 返回的

- 如果文档中的节点树发生变化，NodeList 也会随之变化

```js
var list = document.querySelectorAll('input[type=checkbox]');
for (var checkbox of list) {
  checkbox.checked = true;
}
console.log(list); // NodeList[input#check1]
console.log(typeof list); // object
console.log(Object.prototype.toString.call(list)); // [object NodeList]
```

## 8.如何将类数组转换成数组

### 1）类数组借用数组方法转数组

```js
var arrayLike = {
  0: 'java',
  1: 'script',
  length: 2,
};
Array.prototype.push.call(arrayLike, 'jack', 'lily');
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}

function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  // let args = [].slice.call(arguments); // 这样写也是一样效果
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
```

### 2）ES6 的方法转数组

```js
function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
function sum(...args) {
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
```

## 9.数组排序

![image](images/js/3.png)

### 1）冒泡排序

- 冒泡排序是一次比较两个元素，如果顺序是错误的就把它们交换过来。走访数列的工作会重复地进行，直到不需要再交换，也就是说该数列已经排序完成

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function bubbleSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
bubbleSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

### 2）快速排序

- 快速排序的基本思想是通过一趟排序，将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可以分别对这两部分记录继续进行排序，以达到整个序列有序

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function quickSort(array) {
  var quick = function (arr) {
    if (arr.length <= 1) return arr;
    const index = Math.floor(len >> 1);
    const pivot = arr.splice(index, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else if (arr[i] <= pivot) {
        left.push(arr[i]);
      }
    }
    return quick(left).concat([pivot], quick(right));
  };
  const result = quick(array);
  return result;
}
quickSort(a); //  [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

- 最主要的思路是从数列中挑出一个元素，称为 “基准”（pivot）；然后重新排序数列，所有元素比基准值小的摆放在基准前面、比基准值大的摆在基准的后面；在这个区分搞定之后，该基准就处于数列的中间位置；然后把小于基准值元素的子数列（left）和大于基准值元素的子数列（right）递归地调用 quick 方法排序完成，这就是快排的思路

### 3）插入排序

- 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入，从而达到排序的效果

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function insertSort(array) {
  const len = array.length;
  let current;
  let prev;
  for (let i = 1; i < len; i++) {
    current = array[i];
    prev = i - 1;
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      prev--;
    }
    array[prev + 1] = current;
  }
  return array;
}
insertSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

- 插入排序的思路是基于数组本身进行调整的，首先循环遍历从 i 等于 1 开始，拿到当前的 current 的值，去和前面的值比较，如果前面的大于当前的值，就把前面的值和当前的那个值进行交换，通过这样不断循环达到了排序的目的

### 4）选择排序

- 它的工作原理是，首先将最小的元素存放在序列的起始位置，再从剩余未排序元素中继续寻找最小元素，然后放到已排序的序列后面……以此类推，直到所有元素均排序完毕

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function selectSort(array) {
  const len = array.length;
  let temp;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
selectSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

- 该排序是表现最稳定的排序算法之一，因为无论什么数据进去都是 O(n 平方) 的时间复杂度

### 5）堆排序

- 堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质，即子结点的键值或索引总是小于（或者大于）它的父节点。堆的底层实际上就是一棵完全二叉树，可以用数组实现

- 根节点最大的堆叫作大根堆，根节点最小的堆叫作小根堆，可以根据从大到小排序或者从小到大来排序，分别建立对应的堆就可以

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function heap_sort(arr) {
  var len = arr.length;
  var k = 0;
  function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  function max_heapify(start, end) {
    var dad = start;
    var son = dad * 2 + 1;
    if (son >= end) return;
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++;
    }
    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  }
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len);
  }

  for (var j = len - 1; j > k; j--) {
    swap(0, j);
    max_heapify(0, j);
  }

  return arr;
}
heap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

- 堆排序最核心的点就在于排序前先建堆

- 由于堆其实就是完全二叉树，如果父节点的序号为 n，那么叶子节点的序号就分别是 2n 和 2n+1

- 堆排序最后有两个循环：

  - 第一个是处理父节点的顺序

  - 第二个循环则是根据父节点和叶子节点的大小对比，进行堆的调整

  - 通过这两轮循环的调整，最后堆排序完成

### 6）归并排序

- 归并排序是建立在归并操作上的一种有效的排序算法，该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并

```js
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function mergeSort(array) {
  const merge = (right, left) => {
    const result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };
  const mergeSort = (array) => {
    if (array.length === 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    return merge(mergeSort(left), mergeSort(right));
  };
  return mergeSort(array);
}
mergeSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
```

- 通过 mid 可以把该数组分成左右两个数组，分别对这两个进行递归调用排序方法，最后将两个数组按照顺序归并起来

- 归并排序是一种稳定的排序方法，和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好得多，因为始终都是 O(nlogn) 的时间复杂度。而代价是需要额外的内存空间

### 7）总结

![image](images/js/4.png)

## 10.sort 排序方法的实现原理

### 1）基本使用

- sort 方法是对数组元素进行排序，默认排序顺序是先将元素转换为字符串，然后再进行排序

```js
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [1, 100000, 21, 30, 4]
```

### 2）添加参数

```js
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => b - a);
console.log(array1); // [100000, 30, 21, 4, 1]
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1); // [1, 4, 21, 30, 100000]
```

### 3）sort 方法的底层实现

- 1.当 n<=10 时，采用插入排序；

  - 插入排序在最好的情况下时间复杂度是 O(n)

  - 插入排序经过优化以后，对于小数据集的排序会有非常优越的性能，很多时候甚至会超过快排

- 2.当 n>10 时，采用三路快速排序；

- 3.10<n <=1000，采用中位数作为哨兵元素；

- 4.n>1000，每隔 200~215 个元素挑出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数

```js
function ArraySort(comparefn) {
  CHECK_OBJECT_COERCIBLE(this, "Array.prototype.sort");
  var array = TO_OBJECT(this);
  var length = TO_LENGTH(array.length);
  return InnerArraySort(array, length, comparefn);
}
function InnerArraySort(array, length, comparefn) {
  // 比较函数未传入
  if (!IS_CALLABLE(comparefn)) {
    comparefn = function (x, y) {
      if (x === y) return 0;
      if (% _IsSmi(x) && % _IsSmi(y)) {
        return % SmiLexicographicCompare(x, y);
      }
      x = TO_STRING(x);
      y = TO_STRING(y);
      if (x == y) return 0;
      else return x < y ? -1 : 1;
    };
  }
  function InsertionSort(a, from, to) {
    // 插入排序
    for (var i = from + 1; i < to; i++) {
      var element = a[i];
      for (var j = i - 1; j >= from; j--) {
        var tmp = a[j];
        var order = comparefn(tmp, element);
        if (order > 0) {
          a[j + 1] = tmp;
        } else {
          break;
        }
      }
      a[j + 1] = element;
    }
  }
  function GetThirdIndex(a, from, to) {   // 元素个数大于1000时寻找哨兵元素
    var t_array = new InternalArray();
    var increment = 200 + ((to - from) & 15);
    var j = 0;
    from += 1;
    to -= 1;
    for (var i = from; i < to; i += increment) {
      t_array[j] = [i, a[i]];
      j++;
    }
    t_array.sort(function (a, b) {
      return comparefn(a[1], b[1]);
    });
    var third_index = t_array[t_array.length >> 1][0];
    return third_index;
  }
  function QuickSort(a, from, to) {  // 快速排序实现
    //哨兵位置
    var third_index = 0;
    while (true) {
      if (to - from <= 10) {
        InsertionSort(a, from, to); // 数据量小，使用插入排序，速度较快
        return;
      }
      if (to - from > 1000) {
        third_index = GetThirdIndex(a, from, to);
      } else {
        // 小于1000 直接取中点
        third_index = from + ((to - from) >> 1);
      }
      // 下面开始快排
      var v0 = a[from];
      var v1 = a[to - 1];
      var v2 = a[third_index];
      var c01 = comparefn(v0, v1);
      if (c01 > 0) {
        var tmp = v0;
        v0 = v1;
        v1 = tmp;
      }
      var c02 = comparefn(v0, v2);
      if (c02 >= 0) {
        var tmp = v0;
        v0 = v2;
        v2 = v1;
        v1 = tmp;
      } else {
        var c12 = comparefn(v1, v2);
        if (c12 > 0) {
          var tmp = v1;
          v1 = v2;
          v2 = tmp;
        }
      }
      a[from] = v0;
      a[to - 1] = v2;
      var pivot = v1;
      var low_end = from + 1;
      var high_start = to - 1;
      a[third_index] = a[low_end];
      a[low_end] = pivot;
      partition: for (var i = low_end + 1; i < high_start; i++) {
        var element = a[i];
        var order = comparefn(element, pivot);
        if (order < 0) {
          a[i] = a[low_end];
          a[low_end] = element;
          low_end++;
        } else if (order > 0) {
          do {
            high_start--;
            if (high_start == i) break partition;
            var top_elem = a[high_start];
            order = comparefn(top_elem, pivot);
          } while (order > 0);
          a[i] = a[high_start];
          a[high_start] = element;
          if (order < 0) {
            element = a[i];
            a[i] = a[low_end];
            a[low_end] = element;
            low_end++;
          }
        }
      }
      // 快排的核心思路，递归调用快速排序方法
      if (to - high_start < low_end - from) {
        QuickSort(a, high_start, to);
        to = low_end;
      } else {
        QuickSort(a, from, low_end);
        from = high_start;
      }
    }
  }
}
```

![image](images/js/5.png)

## 11.数组方法底层实现

### 1）push

- 关键点就在于给数组本身循环添加新的元素 item，然后调整数组的长度 length 为最新的长度，即可完成 push 的底层实现

- 其中关于长度的部分需要做无符号位移

```js
Array.prototype.push = function (...items) {
  let O = Object(this); // ecma 中提到的先转换为对象
  let len = this.length >>> 0;
  let argCount = items.length >>> 0;
  // 2 ^ 53 - 1 为JS能表示的最大正整数
  if (len + argCount > 2 ** 53 - 1) {
    throw new TypeError('The number of array is over the max value');
  }
  for (let i = 0; i < argCount; i++) {
    O[len + i] = items[i];
  }
  let newLength = len + argCount;
  O.length = newLength;
  return newLength;
};
```

### 2）pop

- 核心思路是在于删掉数组自身的最后一个元素，index 就是数组的 len 长度，然后更新最新的长度，最后返回的元素的值，即可达到想要的效果。另外就是在当长度为 0 的时候，如果执行 pop 操作，返回的是 undefined，需要做一下特殊处理

```js
Array.prototype.pop = function () {
  let O = Object(this);
  let len = this.length >>> 0;
  if (len === 0) {
    O.length = 0;
    return undefined;
  }
  len--;
  let value = O[len];
  delete O[len];
  O.length = len;
  return value;
};
```

### 3）map

- 循环遍历实现 map 的思路，将处理过后的 mappedValue 赋给一个新定义的数组 A，最后返回这个新数组 A，并不改变原数组的值

```js
Array.prototype.map = function (callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'map' of null");
  }
  if (Object.prototype.toString.call(callbackfn) != '[object Function]') {
    throw new TypeError(callbackfn + ' is not a function');
  }
  let O = Object(this);
  let T = thisArg;

  let len = O.length >>> 0;
  let A = new Array(len);
  for (let k = 0; k < len; k++) {
    if (k in O) {
      let kValue = O[k];
      // 依次传入this, 当前项，当前索引，整个数组
      let mappedValue = callbackfn.call(T, KValue, k, O);
      A[k] = mappedValue;
    }
  }
  return A;
};
```

### 4）reduce

- 初始值默认值不传的特殊处理

- 累加器以及 callbackfn 的处理逻辑

```js
Array.prototype.reduce = function (callbackfn, initialValue) {
  // 异常处理，和 map 类似
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'reduce' of null");
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callbackfn) != '[object Function]') {
    throw new TypeError(callbackfn + ' is not a function');
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let k = 0;
  let accumulator = initialValue; // reduce方法第二个参数作为累加器的初始值
  if (accumulator === undefined) {
    throw new Error('Each element of the array is empty');
    // 初始值不传的处理
    for (; k < len; k++) {
      if (k in O) {
        accumulator = O[k];
        k++;
        break;
      }
    }
  }
  for (; k < len; k++) {
    if (k in O) {
      // 注意 reduce 的核心累加器
      accumulator = callbackfn.call(undefined, accumulator, O[k], O);
    }
  }
  return accumulator;
};
```

---
toc: menu
---

# 字符串的应用

## 1.基本算法技能

### 1）反转字符串

```js
const str = 'hello world';

const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); // dlrow olleh
```

### 2）判断一个字符串是否是回文字符串

- 回文字符串，就是正着读和倒着读都一模一样的字符串，比如这样的：

  ```js
  const str = 'yessey';
  ```

**1.全等判断**

- 判断反转前后是否相等

```js
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split('').reverse().join('');
  // 判断反转前后是否相等
  return reversedStr === str;
}
const str = 'yessey';
isPalindrome(str); // true
```

**2.对称判断**

- 同时，回文字符串还有另一个特性：如果从中间位置“劈开”，那么两边的两个子串在内容上是完全对称的。因此也可以结合对称性来做判断

```js
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
    return true;
  }
}
const str = 'yessey';
isPalindrome(str); // true
```

## 2.真题

### 1）回文字符串的衍生问题

> 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串

- 示例

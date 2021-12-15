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

- 对回文字符串的`对称特性`利用得是否彻底，是判断解决回文类问题的解法是否“高效”的依据

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

- 示例:
  - 输入: "aba"
  - 输出: True
  - 示例 2:
  - 输入: "abca"
  - 输出: True
  - 解释: 你可以删除 c 字符。
  - 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是 50000。

**1.思路分析**

- 首先是初始化两个指针，一个指向字符串头部，另一个指向尾部

  ![image](images/core/14.png)

- 如果两个指针所指的字符恰好相等，那么这两个字符就符合了回文字符串对对称性的要求，跳过它们往下走即可
  ![image](images/core/15.png)
- 如果两个指针所指的字符串不等，那么就意味着不对称发生了，意味着这是一个可以“删掉试试看”的操作点
  ![image](images/core/16.png)
- 可以分别对左指针字符和右指针字符尝试进行“跳过”，看看区间在 [left+1, right] 或 [left, right-1] 的字符串是否回文。如果是的话，那么就意味着如果删掉被“跳过”那个字符，整个字符串都将回文

**2.编码实现**

```js
const validPalindrome = function (s) {
  // 缓存字符串的长度
  const len = s.length;

  // i、j分别为左右指针
  let i = 0,
    j = len - 1;

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 默认返回 false
  return false;
};
```

### 2）字符串匹配问题——正则表达式

> 真题描述： 设计一个支持以下两种操作的数据结构:

- void addWord(word)
- bool search(word)
- search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z
- . 可以表示任何一个字母。

- 示例:
  ```js
  addWord("bad")
  addWord("dad")
  addWord("mad")
  search("pad") -> false
  search("bad") -> true
  search(".ad") -> true
  search("b..") -> true
  ```
- 说明:
  - 你可以假设所有单词都是由小写字母 a-z 组成的。

**2.编码实现**

```js
// 1.自己的做法
function WordMap() {
  this.words = [];
}
WordMap.prototype.addWord = function (str) {
  this.words.push(str);
};
WordMap.prototype.search = function (str) {
  if (!str.includes('.')) {
    return this.words.includes(str);
  }
  const regStr = str.replace(/\./g, '(.)');
  const reg = new RegExp(regStr);
  return reg.test(str);
};
```

```js
/**
 * 构造函数
 */
const WordDictionary = function () {
  // 初始化一个对象字面量，承担 Map 的角色
  this.words = {};
};

/**
  添加字符串的方法
 */
WordDictionary.prototype.addWord = function (word) {
  // 若该字符串对应长度的数组已经存在，则只做添加
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    // 若该字符串对应长度的数组还不存在，则先创建
    this.words[word.length] = [word];
  }
};

/**
  搜索方法
 */
WordDictionary.prototype.search = function (word) {
  // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
  if (!this.words[word.length]) {
    return false;
  }
  // 缓存目标字符串的长度
  const len = word.length;
  // 如果字符串中不包含‘.’，那么一定是普通字符串
  if (!word.includes('.')) {
    // 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
    return this.words[len].includes(word);
  }

  // 否则是正则表达式，要先创建正则表达式对象
  const reg = new RegExp(word);

  // 只要数组中有一个匹配正则表达式的字符串，就返回true
  return this.words[len].some((item) => {
    return reg.test(item);
  });
};
```

### 3）字符串与数字之间的转换问题

> 真题描述：请你来实现一个 atoi 函数，使其能将字符串转换成整数

- 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
  当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数
- 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响
- 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换
- 在任何情况下，若函数不能进行有效的转换时，请返回 0
- 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31, 2^31 − 1]。如果数值超过这个范围，请返回 INT_MAX (2^31 − 1) 或 INT_MIN (−2^31)

> `/\s*([-\+]?[0-9]*).*/`

- 正则解释
  - 首先，`\s` 这个符号，意味着空字符，它可以用来匹配回车、空格、换行等空白区域，这里，它用来被匹配空格。`*`这个符号，跟在其它符号后面，意味着“前面这个符号可以出现 0 次或多次。`\s*`，这里的意思就是空格出现 0 次或多次，都可被匹配到
  - `()` 圈住的内容，就是我们要捕获起来额外存储的东西
  - `[]`中的匹配符之间是“或”的关系，也就是说只要能匹配上其中一个就行了。这里`[]`中包括了-和`\+`，`-`不必说匹配的是对应字符，这个`\+`之所以加了一个斜杠符，是因为`+`本身是一个有特殊作用的正则匹配符，这里我们要让它回归+字符的本义，所以要用一个`\`来完成转义
  - `[0-9]*`结合咱们前面铺陈的知识，这个就不难理解了，它的意思是 0-9 之间的整数，能匹配到 0 个或多个就算匹配成功
  - 最后的 `.`这个是任意字符的意思，`.*`用于字符串尾部匹配非数字的任意字符。我们看到`.*`是被排除捕获组之外的，所以说这个东西其实也不会被额外存储，它被“摘除”了

```js
// 入参是一个字符串
const myAtoi = function (str) {
  // 编写正则表达式
  const reg = /\s*([-\+]?[0-9]*).*/;
  // 得到捕获组
  const groups = str.match(reg);
  // 计算最大值
  const max = Math.pow(2, 31) - 1;
  // 计算最小值
  const min = -max - 1;
  // targetNum 用于存储转化出来的数字
  let targetNum = 0;
  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1];
    // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
    if (isNaN(targetNum)) {
      // 不能进行有效的转换时，请返回 0
      targetNum = 0;
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max;
  } else if (targetNum < min) {
    return min;
  }
  // 返回转换结果
  return targetNum;
};
```

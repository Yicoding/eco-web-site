---
toc: menu
---

# ES7(ES2016)

![image](images/es/3.png)

## 1.数值扩展-指数运算符(\*\*)

### 1）ES6 之前

```js
const num = Math.pow(3, 2); // 9
```

### 2）ES6 之后

```js
const num = 3 ** 2; // 9
```

## 2.数组扩展-includes

- 传入元素，如果数组中能找到此元素，则返回 true，否则返回 false

```js
const includeArr = [1, 2, 3, 'Bob', 'Lucy'];

const isLucy = includeArr.includes('Lucy');
console.log(isLucy); // true
```

- 跟 indexOf 很像，但还是有区别的

```js
const arr = [1, 2, NaN];

console.log(arr.indexOf(NaN)); // -1  indexOf找不到NaN
console.log(arr.includes(NaN)); // true includes能找到NaN
```

## 3.模板字符串

自 ES7 起，带标签的模版字面量遵守以下转义序列的规则:

- Unicode 字符以"\u"开头，例如\u00A9
- Unicode 码位用"\u{}"表示，例如\u{2F804}
- 十六进制以"\x"开头，例如\xA9
- 八进制以""和数字开头，例如\251

这表示类似下面这种带标签的模版是有问题的，因为对于每一个 ECMAScript 语法，解析器都会去查找有效的转义序列，但是只能得到这是一个形式错误的语法

```js
latex`\unicode`;
// 在较老的ECMAScript版本中报错（ES2016及更早）
// SyntaxError: malformed Unicode character escape sequence
```

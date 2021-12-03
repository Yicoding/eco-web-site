---
toc: menu
---

# 零散知识点

## 1.i++ 和 ++i

### 1）区别

- i++: 先赋值，再自增

  ```js
  var a = 1;
  var b = a++;
  console.log(`a: ${a}, b: ${b}`); // 2, 1
  ```

- ++i: 先自增，再赋值

  ```js
  var a = 1;
  var b = ++a;
  console.log(`a: ${a}, b: ${b}`); // 2, 2
  ```

### 2）在循环体中没有区别

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

```js
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

### 3）执行效率

- i++

  ```js
  j = i;
  i += 1;
  return j;
  ```

- ++i

  ```js
  i += 1;
  return i;
  ```

## 2.循环执行效率

- `for 和 do while 循环效率最高`

- `for ~= do while > forEach ~= map ~= every > $.each > $(e).each > for in`

## 3. +new Date()

会转数字，等同于 new Date().getTime()

```js
console.log(new Date()); // Tue Nov 30 2021 23:11:55 GMT+0800 (中国标准时间)
console.log(+new Date()); // 1638285115767
```

## 4. 0.1 + 0.2 != 0.3

### 1）原因

因为 JS 采用 IEEE 754 双精度版本（64 位），并且只要采用 IEEE 754 的语言都有该问题。

```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
```

```js
0.100000000000000002 === 0.1; // true
0.200000000000000002 === 0.2; // true\

console.log(0.100000000000000002); // 0.1
```

所以

```js
0.1 + 0.2 === 0.30000000000000004; // true
```

### 2）解决

```js
parseFloat((0.1 + 0.2).toFixed(10)); // 0.3
```

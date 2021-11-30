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

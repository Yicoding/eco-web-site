---
toc: menu
---

# 递归

## 1.定义

程序调用自身的编程技巧称为递归(recursion)

- 递归是个压栈出栈的过程

  - JS 引擎解析出全局上下文和可执行代码
  - 然后把全局上下文压入栈，执行可执行代码遇到函数调用
  - 把函数解析成同样两部分，把函数上下文压入栈
  - 执行完之后弹栈更新全局上下文
  - 递归就是`不停地压栈`，压到顶之后开始弹并且更新上一级上下文。
  - 注意只压上下文

## 2.特点

- 子问题须与原始问题为同样的事，且更为简单

- 不能无限制地调用本身，须有个出口，化简为非递归状况处理

## 3.\*斐波那契数列

[详情](/base/js/fibo)

```js
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 1 1 2 3 5
```

## 4.阶乘

```js
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
factorial(5); // 5 * 4 * 3 * 2 * 1 = 120
```

## 5.尾调用

[详情](/base/js/tail)

```js
// 尾调用
function f(x) {
  return g(x);
}

// 非尾调用，因为 g(x) 的返回值还需要跟 1 进行计算后，f(x)才会返回值
function f(x) {
  return g(x) + 1;
}
```

**区别：执行上下文栈的变化不一样**

- 尾调用函数执行时，虽然也调用了一个函数，但是因为原来的的函数执行完毕，执行上下文会被弹出，执行上下文栈中相当于只多压入了一个执行上下文

- 然而非尾调用函数，就会创建多个执行上下文压入执行上下文栈

**阶乘改为尾调用：阶乘函数优化**

```js
function factorial(n, res) {
  if (n == 1) return res;
  return factorial(n - 1, n * res);
}

console.log(factorial(5, 1)); // 120
```

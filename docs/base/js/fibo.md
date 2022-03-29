---
toc: menu
---

# 斐波那契数列

## 1.定义

- 斐波那契数列（Fibonacci sequence） 又称黄金分割数列

- 斐波那契：由 0 和 1 开始，之后的斐波那契数列每一项都等于前两项之和

- 斐波那契数列示例：1、1、2、3、5、8、13、21、34

- 方法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N\*）

## 2.逻辑步骤

- 1、求第 n 项的斐波那契数，就是就 n 项的前两项相加，前一项是 n-1,前两项就是 n-2。
- 2、第 n 项斐波那契数就是(n-1) + (n-2)，这样我们就可以使用递归。
- 3、递归是什么？递归就是函数自己调用自己。
- 4、自己调用自己，那我们就可以用 arguments.callee。（PS：arguments 是一个类数组对象，它包含着传入函数的所有参数。arguments 有一个属性 callee，该属性是一个指针，指向拥有这个 arguments 对象的函数）

## 3.实现

### 1）递归

- JS 引擎解析出全局上下文和可执行代码
- 然后把全局上下文压入栈，执行可执行代码遇到函数调用
- 把函数解析成同样两部分，把函数上下文压入栈
- 执行完之后弹栈更新全局上下文
- 递归就是`不停地压栈`，压到顶之后开始弹并且更新上一级上下文。
- 注意只压上下文

- 缺点：重复调用

```js
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 1 1 2 3 5
```

### 2）尾调用优化

- 尾调用是指一个函数里的最后一个动作是一个函数调用的情形：即这个调用的返回值直接被当前函数返回的情形

```js
function fib(n, current = 0, next = 1) {
  if (n === 1) return next;
  if (n === 0) return 0;
  return fib(n - 1, next, current + next);
}
console.log(fib(5)); // 1 1 2 3 5
```

### 3）递推法

```js
function fib(n) {
  let current = 0;
  let next = 1;
  for (let i = 0; i < n; i++) {
    [current, next] = [next, current + next];
  }
  return current;
}
console.log(fib(5)); // 1 1 2 3 5
```

### 4）记忆化

```js
function memozi(fn) {
  const cache = {};
  return function (n) {
    if (cache[n] == null) {
      cache[n] = fn(n);
      return cache[n];
    } else {
      return cache[n];
    }
  };
}

const fib = memozi(function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
});

console.log(fib(5)); // 1 1 2 3 5
```

### 5）动态规划的思路

```js
function fibonacci(n) {
  const aFi = [];
  aFi[0] = 0;
  aFi[1] = 1;
  for (let i = 2; i <= n; i++) {
    aFi[i] = aFi[i - 1] + aFi[i - 2];
  }

  return aFi[n];
}
console.log(fibonacci(5)); // 1 1 2 3 5
```

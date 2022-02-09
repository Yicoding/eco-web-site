---
toc: menu
---

# 函数组合 compose

## 1.定义

- compose 函数可以将需要嵌套执行的函数平铺，嵌套执行就是一个函数的返回值将作为另一个函数的参数

- 把多层函数嵌套调用扁平化

## 2.实现

- compose 函数常基于 `reduce` `柯理化函数`思想解决 `函数调用扁平化`的问题

## 3.问题

- **层级嵌套较深**

```js
const fn1 = (x) => x + 10;
const fn2 = (x) => x - 10;
const fn3 = (x) => x * 10;
const fn4 = (x) => x / 10;

console.log(fn3(fn1(fn2(fn1(4)))));
```

## 4.解决

- **函数调用扁平化：** 如果是多层级嵌套调用的函数，把一个函数调用完，当作另一个函数的实参传递到下一个函数中

```js
/**
 * @param  fn 存储按照顺序执行的函数(数组) => [fn1, fn3, fn2, fn4]
 * @param   存储第一个函数执行需要传递的实参信息(数组) => [5]
 */
function compose(...fn) {
  if (fn.length === 0) return (num) => num;
  if (fn.length === 1) return fn[0];
  // 第一次执行：
  // n：第一个函数执行的实参 func：第一个函数
  // 第二次执行：
  // n的值：上一次func执行后的返回值，作为实参传递给下一个函数执行 func：第二个函数
  return fn.reduce((pre, next) => {
    return (num) => {
      return next(pre(num));
    };
  });
}

const fn1 = (x) => x + 10;
const fn2 = (x) => x - 10;
const fn3 = (x) => x * 10;
const fn4 = (x) => x / 10;

// let res = compose(fn1, fn3, fn2, fn4)(5);

// 执行过程：
console.log(compose()(5)); // [5]
console.log(compose(fn1)(5)); // 5+10 = 15
console.log(compose(fn1, fn3)(5)); // fn1(5)=15 fn3(15)=150
console.log(compose(fn1, fn3, fn2)(5)); // fn1(5)=15 fn3(15)=150 fn2(150)=140
console.log(compose(fn1, fn3, fn2, fn4)(5)); // fn1(5)=15 fn3(15)=150 fn2(150)=140 fn4(140)=14
```

**每一次函数调用的参数都是前一个函数返回的结果，使用 reduce**

## 5.redux 中 compose 的实现

```js
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }
  debugger;
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
  );
}
```

- 实现原理: 俄罗斯套娃

```js
function aa() {
  console.log(11);
}

function bb() {
  console.log(22);
}
function cc() {
  console.log(33);
}
aa(bb(cc()));
// 33
// 22
// 11
```

## 6.pipe 函数

- pipe 函数跟 compose 函数的作用是一样的，也是将参数平铺，只不过他的顺序是从左往右。我们来实现下，只需要将 reduceRight 改成 reduce 就行了

```js
const pipe = function () {
  const args = [].slice.apply(arguments);
  return function (x) {
    return args.reduce((res, cb) => cb(res), x);
  };
};

// 参数顺序改为从左往右
let calculate = pipe(add, multiply);
let res = calculate(10);
console.log(res); // 结果还是200
```

**ES6 写法**

```js
const pipe =
  (...args) =>
  (x) =>
    args.reduce((res, cb) => cb(res), x);
```

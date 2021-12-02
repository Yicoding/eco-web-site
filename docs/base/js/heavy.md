---
toc: menu
---

# 函数重载

JavaScript 中没有真正意义上的函数重载

- TypeScript 中有重载？

在 JavaScript 中，同一个作用域，出现两个名字一样的函数，后面的会覆盖前面的，所以 JavaScript 没有真正意义的重载

```js
function overload(a) {
  console.log('一个参数');
}

function overload(a, b) {
  console.log('两个参数');

function overload(a, b, c) {
  console.log('三个参数');
}

overload(1); // 三个参数
overload(1, 2); // 三个参数
overload(1, 2, 3); // 三个参数
```

## 1.定义

函数名相同，函数的参数列表不同(包括参数个数和参数类型)，根据参数的不同去执行不同的操作

在 JavaScript 中，可以通过一个函数模拟实现重载的效果

## 2.实现

### 1）简单做法

通过 arguments 对象来实现

```js
function overload() {
  if (arguments.length === 1) {
    return console.log('一个参数');
  }
  if (arguments.length === 2) {
    return console.log('两个参数');
  }
  if (arguments.length === 3) {
    return console.log('三个参数');
  }
  return '其他情况';
}
overload(1); // 一个参数
overload(1, 2); // 两个参数
overload(1, 2, 3); // 三个参数
```

或

```js
function overload() {
  switch (arguments.length) {
    case 1:
      console.log('一个参数');
      break;
    case 2:
      console.log('两个参数');
      break;
    case 3:
      console.log('两个参数');
      break;
    default:
      console.log('其他情况');
  }
}
overload(1); // 一个参数
overload(1, 2); // 两个参数
overload(1, 2, 3); // 三个参数
```

### 2）\*高端做法

利用闭包

```js
function addMethod(object, name, fn) {
  const old = object[name]; // 把前一次添加的方法存在一个临时变量old里面
  object[name] = function () {
    // 重写object[name]方法
    // 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    }
    // 否则，判断old是否是函数，如果是，就调用old
    return old.apply(this, arguments);
  };
}

addMethod(window, 'fn', (a) => console.log('一个参数'));
addMethod(window, 'fn', (a, b) => console.log('两个参数'));
addMethod(window, 'fn', (a, b, c) => console.log('三个参数'));

fn(1); // 一个参数
fn(1, 2); // 两个参数
fn(1, 2, 3); // 三个参数
```

## 3.题目

```js
const users = {
  values: ['Dean Edwards', 'Alex Russell', 'Dean Tom'],
};
```

在 users 对象 中添加一个 find 方法:

- 当不传任何参数时， 返回整个 users .values；

- 当传一个参数时，就把 first-name 跟这个参数匹配的元素返回；

- 当传两个参数时，则把 first-name 和 last-name 都匹配的返回。

```js
function addMethod(object, name, fn) {
  const old = object[name]; // 把前一次添加的方法存在一个临时变量old里面
  object[name] = function () {
    // 重写object[name]方法
    // 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    }
    // 否则，判断old是否是函数，如果是，就调用old
    return old.apply(this, arguments);
  };
}

addMethod(users, 'find', function () {
  return this.values;
});
addMethod(users, 'find', function (firstName) {
  return this.values.filter((item) => item.indexOf(firstName) > -1);
});
addMethod(users, 'find', function (firstName, lastName) {
  return this.values.filter(
    (item) => item.indexOf(firstName) > -1 && item.indexOf(lastName) > -1,
  );
});
console.log(users.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
console.log(users.find('Dean')); //["Dean Edwards", "Dean Tom"]
console.log(users.find('Dean', 'Edwards')); //["Dean Edwards"]
```

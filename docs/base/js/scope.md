---
toc: menu
---

# 作用域和执行上下文

## 1.作用域(scope)

### 1）定义

- 作用域为`可访问变量，对象，函数的集合`

- 作用域就是一个独立的地盘，让变量不会外泄、暴露出去

- 作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突

- ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域

```js
// 变量提升

// 1.
if (true) {
  // 'if' 条件语句块不会创建一个新的作用域
  var name = 'Hammad'; // name 依然在全局作用域中
}
console.log(name); // logs 'Hammad'

// 2.
function add() {
  age = 20;
}
add();
console.log(age); // 20
```

### 2）全局作用域和函数作用域

- 1.最外层函数 和在最外层函数外面定义的变量拥有全局作用域

  ```js
  var outVariable = '我是最外层变量'; // 最外层变量
  function outFun() {
    // 最外层函数
    var inVariable = '内层变量';
    function innerFun() {
      // 内层函数
      console.log(inVariable);
    }
    innerFun();
  }
  console.log(outVariable); // 我是最外层变量
  outFun(); // 内层变量
  console.log(inVariable); // 报错：inVariable is not defined
  innerFun(); // 报错：innerFun is not defined
  ```

- 2.所有末定义直接赋值的变量自动声明为拥有全局作用域

  ```js
  function outFun2() {
    variable = '未定义直接赋值的变量';
    var inVariable2 = '内层变量2';
  }
  outFun2(); // 要先执行这个函数，否则根本不知道里面是啥
  console.log(variable); // 未定义直接赋值的变量
  console.log(inVariable2); // 报错：inVariable2 is not defined
  ```

- 3.所有 window 对象的属性拥有全局作用域

  - 弊端：污染全局命名空间, 容易引起命名冲突

  - 解决：代码放在(function(){....})()中

- 4.作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行

### 3）块级作用域

- 1.块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问

  - 在一个函数内部

  - 在一个代码块（由一对花括号包裹）内部

- 2.特点

  - 声明变量`不会提升到代码块顶部`

  - `禁止重复声明`

  - 会形成一个`暂时性死区`

- 3.循环中绑定块作用域

  ```js
  // 1.var
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    });
  }
  // 3
  // 3
  // 3

  // 2.let
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    });
  }
  // 0
  // 1
  // 2
  ```

- 4.设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域

  ```js
  for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
  }
  // abc
  // abc
  // abc
  ```

## 2.作用域链

### 1）什么是自由变量

当前作用域没有定义的变量，就是 自由变量

```js
var a = 100;
function fn() {
  var b = 200;
  console.log(a); // 这里的a在这里就是一个自由变量
  console.log(b);
}
fn();
// 100
// 200
```

### 2）自由变量的取值

- 1.向父级作用域寻找(这种说法不严谨)

- 2.要到`创建`这个函数的作用域中取值(静态作用域，指的是创建，不是调用)

  ```js
  var x = 10;
  function fn() {
    console.log(x);
  }
  function show(f) {
    var x = 20;
    // 在fn函数中，取自由变量x的值时，要到哪个作用域中取？——要到创建fn函数的那个作用域中取，无论fn函数将在哪里调用
    f(); // 10，而不是20，console.log(x) => console.log(this.x) => console.log(window.x)
  }
  show(fn);
  ```

### 3）什么是作用域链

- 当可执行代码内部访问变量时，会先查找本地作用域，如果找到目标变量即返回，否则会去父级作用域继续查找

- 一直找到全局作用域。`这种一层一层的关系，就是 作用域链`

## 3.执行上下文

`代码的执行环境`

JavaScript 属于解释型语言，JavaScript 的执行分为`解释`和`执行`两个阶段

### 1）解释阶段

- 词法分析

- 语法分析

- 作用域规则确定

### 2）执行阶段

- 创建执行上下文

- 执行函数代码

- 垃圾回收

## 4.作用域和执行上下文区别

### 1）作用域

作用域在`定义时`就确定，并且`不会改变`

### 2）执行上下文

执行上下文在`运行时`确定，随时`可能改变`

## 5.关系

- 1.一个作用域下可能包含若干个上下文环境

- 2.有可能从来没有过上下文环境（函数从来就没有被调用过）

- 3.有可能有过，现在函数被调用完毕后，上下文环境被销毁了

- 4.有可能同时存在一个或多个（闭包）

- 5.同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值

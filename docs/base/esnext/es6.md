---
toc: menu
---

# ES6(ES2015)

![image](images/es/2.png)

## 1.声明 let 和 const

### 1）区别

- var: `有`变量提升，`有`初始化提升，值`可变`
- let: `有`变量提升，`没有`初始化提升，值`可变`，声明`变量`
- const: `有`变量提升，`没有`初始化提升，值`不可变`，但如果是定义对象，则属性可变，声明`常量`

|                | var | let | const |
| :------------- | :-- | :-- | :---- |
| 变量提升       | √   | ×   | ×     |
| 全局变量       | √   | ×   | ×     |
| 重复声明       | √   | ×   | ×     |
| 重新赋值       | √   | √   | ×     |
| 暂时性死区     | ×   | √   | √     |
| 块级作用域     | ×   | √   | √     |
| 只声明不初始化 | √   | √   | ×     |

### 2）暂时性死区

- 说明：let 和 const 是有变量提升的，但是没有初始化提升

```js
var name = 'Bob';

function fn() {
  console.log(name);
  let name = 'Lucy';
}
fn(); // Cannot access 'name' before initialization
```

### 3）块级作用域解决问题

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // 5 5 5 5 5

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
} // 0 1 2 3 4
```

### 4）作用

- 作用域

  - 全局作用域
  - 函数作用域：`function() {}`
  - 块级作用域：`{}`

- 作用范围

  - var 命令在全局代码中执行
  - const 命令和 let 命令只能在代码块中执行

- 赋值使用

  - const 命令声明常量后必须立马赋值
  - let 命令声明变量后可立马赋值或使用时赋值

- 声明方法
  - var、const、let、function、class、import

### 5）重点难点

- 不允许重复声明
- 未定义就使用会报错：const 命令和 let 命令不存在变量提升
- 暂时性死区：在代码块内使用 const 命令和 let 命令声明变量之前，该变量都不可用

## 2.解构赋值

### 1）定义

- `字符串解构`：const [a, b, c, d, e] = "hello"
- `数值解构`：const { toString: s } = 123
- `布尔解构`：const { toString: b } = true

- `对象解构`

  - 形式：const { x, y } = { x: 1, y: 2 }
  - 默认：const { x, y = 2 } = { x: 1 }
  - 改名：const { x, y: z } = { x: 1, y: 2 }

- `数组解构`

  - 规则：数据结构具有 Iterator 接口可采用数组形式的解构赋值
  - 形式：const [x, y] = [1, 2]
  - 默认：const [x, y = 2] = [1]

- `函数参数解构`
  - 数组解构：function Func([x = 0, y = 1]) {}
  - 对象解构：function Func({ x = 0, y = 1 } = {}) {}

### 2）应用场景

- 交换变量值：[x, y] = [y, x]
- 返回函数多个值：const [x, y, z] = Func()
- 定义函数参数：Func([1, 2])
- 提取 JSON 数据：const { name, version } = packageJson
- 定义函数参数默认值：function Func({ x = 1, y = 2 } = {}) {}
- 遍历 Map 结构：for (let [k, v] of Map) {}
- 输入模块指定属性和方法：const { readFile, writeFile } = require("fs")

### 3）重点难点

- 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
- 解构默认值生效条件：属性值严格等于 `undefined`
- 解构遵循匹配模式
- 解构不成功时变量的值等于 `undefined`
  `undefined` 和 `null` 无法转为对象，因此无法进行解构

## 3.字符串扩展 String

- Unicode 表示法：`大括号包含`表示 Unicode 字符(\u{0xXX}或\u{0XXX})
- 字符串遍历：可通过`for-of`遍历字符串
- `字符串模板`：可单行可多行可插入变量的增强版字符串 ``

  ```js
  const name = 'Bob';
  const age = '22';
  console.log(`${name}今年${age}岁啦`); // Bob今年22岁啦
  ```

- 标签模板：函数参数的特殊调用
- String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
- String.fromCodePoint()：返回码点对应字符
- codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
- normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode 正规化)
- `repeat()`：把字符串重复 n 次，返回新字符串
  ```js
  var a = 'a';
  console.log(a.repeat(5)); // aaaaa
  ```
- matchAll()：返回正则表达式在字符串的所有匹配
- `includes()`：是否存在指定字符串

  ```js
  var a = 'hello world';
  console.log(a.includes(e)); // true
  ```

- startsWith()：是否存在字符串头部指定字符串
- endsWith()：是否存在字符串尾部指定字符串

## 4.数值扩展 Number

- 二进制表示法：0b 或 0B 开头表示二进制(0bXX 或 0BXX)
- 八进制表示法：0o 或 0O 开头表示二进制(0oXX 或 0OXX)
- Number.EPSILON：数值最小精度
- Number.MIN_SAFE_INTEGER：最小安全数值(-2^53)
- Number.MAX_SAFE_INTEGER：最大安全数值(2^53)
- Number.parseInt()：返回转换值的整数部分
- Number.parseFloat()：返回转换值的浮点数部分
- Number.`isFinite`()：是否为有限数值
- Number.`isNaN`()：是否为 NaN
- Number.isInteger()：是否为整数
- Number.isSafeInteger()：是否在数值安全范围内
- Math.trunc()：返回数值整数部分
- Math.sign()：返回数值类型(正数 1、负数-1、零 0)
- Math.cbrt()：返回数值立方根
- Math.clz32()：返回数值的 32 位无符号整数形式
- Math.imul()：返回两个数值相乘
- Math.fround()：返回数值的 32 位单精度浮点数形式
- Math.hypot()：返回所有数值平方和的平方根
- Math.expm1()：返回 e^n - 1
- Math.log1p()：返回 1 + n 的自然对数(Math.log(1 + n))
- Math.log10()：返回以 10 为底的 n 的对数
- Math.log2()：返回以 2 为底的 n 的对数
- Math.sinh()：返回 n 的双曲正弦
- Math.cosh()：返回 n 的双曲余弦
- Math.tanh()：返回 n 的双曲正切
- Math.asinh()：返回 n 的反双曲正弦
- Math.acosh()：返回 n 的反双曲余弦
- Math.atanh()：返回 n 的反双曲正切

## 5.对象扩展 Object

- 简洁表示法：直接写入变量和函数作为对象的属性和方法(`{ prop, method() {} }`)
- 属性名表达式：字面量定义对象时使用`[]`定义键(`[prop]`，不能与上同时使用)
- 方法的 name 属性：返回方法函数名

  - 取值函数(getter)和存值函数(setter)：`get/set` 函数名(属性的描述对象在 get 和 set 上)
  - bind 返回的函数：`bound 函数名`
  - Function 构造函数返回的函数实例：`anonymous`

- 属性的可枚举性和遍历：描述对象的 enumerable
- super 关键字：指向当前对象的原型对象(只能用在对象的简写方法中 method() {})
- Object.`is`()：对比两值是否相等

  ```js
  Object.is('foo', 'foo'); // true
  Object.is({}, {}); // false
  Object.is(+0, -0); // false
  Object.is(NaN, NaN); // true
  ```

- Object.`assign`()：合并对象(浅拷贝)，返回原对象

  - 第一个参数是目标对象，后面的参数都是源对象

    ```js
    var obj = { a: 1 };

    var p1 = Object.assign(obj);
    console.log(obj); // {a: 1}
    console.log(p1); // {a: 1}

    var p2 = Object.assign({}, obj, { b: 2 });
    console.log(obj); // {a: 1}
    console.log(p2); // {a: 1, b: 2}

    var p3 = Object.assign(obj, { b: 2 });
    console.log(obj); // {a: 1, b: 2}
    console.log(p3); // {a: 1, b: 2}
    ```

- Object.getPrototypeOf()：返回对象的原型对象

  ```js
  function Person(name) {
    this.name = name;
  }
  var a = new Person('Bob');

  Object.getPrototypeOf(a) === a.__proto__; // true
  ```

- Object.setPrototypeOf()：设置对象的原型对象

  > Object.setPrototypeOf(A.prototype,B.prototype)

  ```js
  //构造函数
  function Person(name) {
    this.name = name;
  }

  var p = new Object();
  // 等同于将构造函数的原型对象赋给实例对象p的属性__proto__
  p.__proto__ = Object.setPrototypeOf({}, Person.prototype);
  Person.call(p, 'Bob');

  p.__proto__; // Person {}
  ```

- \_\_proto\_\_：返回或设置对象的原型对象

- for-in：遍历对象自身可继承可枚举属性

- Object.keys(): 返回一个给定对象的自身可枚举属性组成的数值

  ```js
  const obj = {
    name: 'Bob',
    age: 22,
    gender: '男',
  };

  const keys = Object.keys(obj);
  console.log(keys); // [ 'name', 'age', 'gender' ]
  ```

- Object.getOwnPropertyNames(): 返回对象自身`非Symbol`属性键组成的数组

  ```js
  const desc = Symbol('desc');
  const obj = {
    name: 'Bob',
    age: 22,
    gender: '男',
    [desc]: 'hello',
  };
  Object.defineProperty(obj, 'address', {
    //定义不可枚举
    enumerable: false,
    value: '这是个秘密',
  });

  const keys = Object.getOwnPropertyNames(obj);
  console.log(keys); // ['name', 'age', 'gender', 'address']
  ```

- Object.getOwnPropertySymbols(): 返回对象自身`Symbol`属性键组成的数组

  ```js
  const desc = Symbol('desc');
  const obj = {
    name: 'Bob',
    age: 22,
    gender: '男',
    [desc]: 'hello',
  };
  Object.defineProperty(obj, 'address', {
    //定义不可枚举
    enumerable: false,
    value: '这是个秘密',
  });

  const keys = Object.getOwnPropertySymbols(obj);
  console.log(keys); // [Symbol(desc)]
  ```

- `Reflect.ownKeys`()：返回对象自身全部属性键组成的数组

  ```js
  const desc = Symbol('desc');
  const obj = {
    name: 'Bob',
    age: 22,
    gender: '男',
    [desc]: 'hello',
  };
  Object.defineProperty(obj, 'address', {
    //定义不可枚举
    enumerable: false,
    value: '这是个秘密',
  });

  const keys = Reflect.ownKeys(obj);
  console.log(keys); // ['name', 'age', 'gender', 'address', Symbol(desc)]
  ```

## 6.数组扩展

- `扩展运算符(...)`：转换数组为用逗号分隔的参数序列([...arr]，相当于 rest/spread 参数的逆运算)
- Array.from()：转换具有 Iterator 接口的数据结构为真正数组，返回新数组

  - 类数组对象：包含 length 的对象、Arguments 对象、NodeList 对象
  - 可遍历对象：String、Set 结构、Map 结构、Generator 函数

  ```js
  console.log(Array.from('foo')); // ["f", "o", "o"]
  console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]
  ```

- Array.of()：转换一组值为真正数组，返回新数组

  ```js
  Array.of(7); // [7]
  Array.of(1, 2, 3); // [1, 2, 3]

  Array(7); // [empty, empty, empty, empty, empty, empty]
  Array(1, 2, 3); // [1, 2, 3]
  ```

- copyWithin()：把指定位置的成员复制到其他位置，返回原数组

  ```js
  const array1 = ['a', 'b', 'c', 'd', 'e'];

  console.log(array1.copyWithin(0, 3, 4)); // ["d", "b", "c", "d", "e"]

  console.log(array1.copyWithin(1, 3)); // ["d", "d", "e", "d", "e"]
  ```

- `find()`：返回第一个符合条件的成员

  ```js
  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find((element) => element > 10);

  console.log(found); // 12
  ```

- `findIndex()`：返回第一个符合条件的成员索引值

  ```js
  const array1 = [5, 12, 8, 130, 44];

  const isLargeNumber = (element) => element > 13;

  console.log(array1.findIndex(isLargeNumber)); // 3
  ```

- `fill()`：根据指定值填充整个数组，返回原数组

  > Array.fill(value, start, end)

  - start: 下标

  - end: 第几位

  ```js
  const array1 = [1, 2, 3, 4];

  console.log(array1.fill(0, 2, 4)); // [1, 2, 0, 0]

  console.log(array1.fill(5, 1)); // [1, 5, 5, 5]

  console.log(array1.fill(6)); // [6, 6, 6, 6]
  ```

- `keys()`：返回以索引值为遍历器的对象

  ```js
  const array1 = ['a', 'b', 'c'];
  const iterator = array1.keys();

  for (const key of iterator) {
    console.log(key);
  }

  // 0
  // 1
  // 2
  ```

- `values()`：返回以属性值为遍历器的对象

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const key of iterator) {
  console.log(key);
}

// a
// b
// c
```

- `entries()`：返回以索引值和属性值为遍历器的对象

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.entries();

console.log(iterator.next().value); // [0, "a"]
console.log(iterator.next().value); // [1, "b"]
```

- 数组空位：ES6 明确将数组空位转为 `undefined` 或者 `empty`

```js
Array.from(['a',,'b']) // [ "a", undefined, "b" ]
[...['a',,'b']] // [ "a", undefined, "b" ]
Array(3) //  [empty × 3]
[,'a'] // [empty, "a"]

```

**应用**

- 克隆数组：const arr = [...arr1]
- 合并数组：const arr = [...arr1, ...arr2]
- 拼接数组：arr.push(...arr1)
- 代替 apply：Math.max.apply(null, [x, y]) => Math.max(...[x, y])
- 转换字符串为数组：[..."hello"]
- 转换类数组对象为数组：[...Arguments, ...NodeList]
- 转换可遍历对象为数组：[...String, ...Set, ...Map, ...Generator]
- 与数组解构赋值结合：const [x, ...rest/spread] = [1, 2, 3]
- 计算 Unicode 字符长度：Array.from("hello").length => [..."hello"].length

## 7.函数扩展

### 1）参数默认值

- `为函数参数指定默认值`

  - 形式：`function Func(x = 1, y = 2) {}`
  - 参数赋值：惰性求值(函数调用后才求值)
  - 参数位置：尾参数
  - 参数作用域：函数作用域
  - 声明方式：默认声明，不能用 const 或 let 再次声明
  - length：返回没有指定默认值的参数个数
  - 与解构赋值默认值结合：function Func({ x = 1, y = 2 } = {}) {}
  - 应用
    - 指定某个参数不得省略，省略即抛出错误：function Func(x = throwMissing()) {}
    - 将参数默认值设为 undefined，表明此参数可省略：Func(undefined, 1)

  ```js
  function Func(x = 1, y = 2) {}
  ```

### 2）rest/spread 参数(...)

- `返回函数多余参数`

  - 形式：以数组的形式存在，之后不能再有其他参数
  - 作用：代替 Arguments 对象
  - length：返回没有指定默认值的参数个数但不包括 rest/spread 参数

  ```js
  function _new(Con, ...args) {}
  ```

### 3）严格模式

- 在严格条件下运行 JS
  - 应用：只要函数参数使用默认值、解构赋值、扩展运算符，那么函数内部就不能显式设定为严格模式

### 4）name 属性

- 返回函数的函数名

  - 将匿名函数赋值给变量：空字符串(ES5)、变量名(ES6)
  - 将具名函数赋值给变量：函数名(ES5 和 ES6)
  - bind 返回的函数：bound 函数名(ES5 和 ES6)
  - Function 构造函数返回的函数实例：anonymous(ES5 和 ES6

### 5）箭头函数(=>)

- `函数简写`

  - 无参数：() => {}
  - 单个参数：x => {}
  - 多个参数：(x, y) => {}
  - 解构参数：({x, y}) => {}
  - 嵌套使用：部署管道机制
  - `this指向固定化`
    - 并非因为内部有绑定 this 的机制，而是根本没有自己的 this，导致内部的 this 就是外层代码块的 this
    - 因为没有 this，因此不能用作构造函数

### 6）尾调用优化

- `尾调用`

  - 定义：某个函数的最后一步是调用另一个函数
  - 形式：function f(x) { return g(x); }

- `尾递归`
  - 定义：函数尾调用自身
  - 作用：只要使用尾递归就不会发生栈溢出，相对节省内存
  - 实现：把所有用到的内部变量改写成函数的参数并使用参数默认值

## 8.正则扩展

- 变更 RegExp 构造函数入参：允许首参数为正则对象，尾参数为正则修饰符(返回的正则表达式会忽略原正则表达式的修饰符)
- 正则方法调用变更：字符串对象的 match()、replace()、search()、split()内部调用转为调用 RegExp 实例对应的 RegExp.prototype[Symbol.方法]
- u 修饰符：Unicode 模式修饰符，正确处理大于\uFFFF 的 Unicode 字符

  - 点字符(.)
  - Unicode 表示法
  - 量词
  - 预定义模式
  - i 修饰符
  - 转义

- y 修饰符：粘连修饰符，确保匹配必须从剩余的第一个位置开始全局匹配(与 g 修饰符作用类似)
- unicode：是否设置 u 修饰符
- sticky：是否设置 y 修饰符
- flags：返回正则表达式的修饰符

**注意**

- `y修饰符`隐含头部匹配标志`^`
- 单单一个 y 修饰符对 `match()`只能返回第一个匹配，必须与 `g 修饰符`联用才能返回所有匹配

## 9.Symbol

主要目的是解决全局变量冲突的问题

- 1.Symbol 数据类型的主要作用就是为对象添加独一无二的属性名
- 2.改变语言程序内部的逻辑

- 定义：独一无二的值
- 声明：const set = Symbol(str)
- 入参：字符串(可选)
- 方法

  - Symbol()：创建以参数作为描述的 Symbol 值(不登记在全局环境)
  - Symbol.for()：创建以参数作为描述的 Symbol 值，如存在此参数则返回原有的 Symbol 值(先搜索后创建，登记在全局环境)
  - Symbol.keyFor()：返回已登记的 Symbol 值的描述(只能返回 Symbol.for()的 key)
  - Object.getOwnPropertySymbols()：返回对象中所有用作属性名的 Symbol 值的数组

- 内置

  - Symbol.hasInstance：指向一个内部方法，当其他对象使用 instanceof 运算符判断是否为此对象的实例时会调用此方法
  - Symbol.isConcatSpreadable：指向一个布尔，定义对象用于 Array.prototype.concat()时是否可展开
  - Symbol.species：指向一个构造函数，当实例对象使用自身构造函数时会调用指定的构造函数
  - Symbol.match：指向一个函数，当实例对象被 String.prototype.match()调用时会重新定义 match()的行为
  - Symbol.replace：指向一个函数，当实例对象被 String.prototype.replace()调用时会重新定义 replace()的行为
  - Symbol.search：指向一个函数，当实例对象被 String.prototype.search()调用时会重新定义 search()的行为
  - Symbol.split：指向一个函数，当实例对象被 String.prototype.split()调用时会重新定义 split()的行为
  - Symbol.iterator：指向一个默认遍历器方法，当实例对象执行 for-of 时会调用指定的默认遍历器
  - Symbol.toPrimitive：指向一个函数，当实例对象被转为原始类型的值时会返回此对象对应的原始类型值
  - Symbol.toStringTag：指向一个函数，当实例对象被 Object.prototype.toString()调用时其返回值会出现在 toString()返回的字符串之中表示对象的类型
  - Symbol.unscopables：指向一个对象，指定使用 with 时哪些属性会被 with 环境排除

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); // "symbol"
console.log(symbol3.toString()); // "Symbol(foo)"
console.log(Symbol('foo') === Symbol('foo')); // false
```

## 10.Set

### 1）Set

- 定义：类似于数组的数据结构，成员值都是唯一且没有重复的值
- 声明：`const set = new Set(arr)`
- 入参：具有 Iterator 接口的数据结构
- 属性

  - constructor：构造函数，返回 Set
  - size：返回实例成员总数

- 方法

  - add()：添加值，返回实例
  - delete()：删除值，返回布尔
  - has()：检查值，返回布尔
  - clear()：清除所有成员
  - keys()：返回以属性值为遍历器的对象
  - values()：返回以属性值为遍历器的对象
  - entries()：返回以属性值和属性值为遍历器的对象
  - forEach()：使用回调函数遍历每个成员

  ```js
  // 可不传数组
  const set1 = new Set();
  set1.add(1);
  set1.add(2);
  console.log(set1); // Set(2) { 1, 2 }

  // 也可传数组
  const set2 = new Set([1, 2, 3]);
  // 增加元素 使用 add
  set2.add(4);
  set2.add('林三心');
  console.log(set2); // Set(5) { 1, 2, 3, 4, '林三心' }
  // 是否含有某个元素 使用 has
  console.log(set2.has(2)); // true
  // 查看长度 使用 size
  console.log(set2.size); // 5
  // 删除元素 使用 delete
  set2.delete(2);
  console.log(set2); // Set(4) { 1, 3, 4, '林三心' }
  ```

**1.应用场景**

- 去重字符串：`[...new Set(str)].join("")`
- 去重数组：`[...new Set(arr)]`或`Array.from(new Set(arr))`
- 集合数组

  - 声明：`const a = new Set(arr1)`、`const b = new Set(arr2)`
  - 并集：`new Set([...a, ...b])`
  - 交集：`new Set([...a].filter(v => b.has(v)))`
  - 差集：`new Set([...a].filter(v => !b.has(v)))`

- 映射集合

  - 声明：`let set = new Set(arr)`
  - 映射：`set = new Set([...set].map(v => v _ 2))`或 `set = new Set(Array.from(set, v => v _ 2))`

**2.数组去重**

```js
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]);
// [2, 3, 4, 5, 6, 7, 32]

// 两个对象都是不用的指针，所以没法去重
const set1 = new Set([1, { name: '林三心' }, 2, { name: '林三心' }]);
console.log(set1); // Set(4) { 1, { name: '林三心' }, 2, { name: '林三心' } }

// 如果是两个对象是同一指针，则能去重
const obj = { name: '林三心' };
const set2 = new Set([1, obj, 2, obj]);
console.log(set2); // Set(3) { 1, { name: '林三心' }, 2 }

// NaN !== NaN，NaN是自身不等于自身的，但是在Set中他还是会被去重
const set = new Set([1, NaN, 1, NaN]);
console.log(set); // Set(2) { 1, NaN }
```

### 2）WeakSet

- 定义：和 Set 结构类似，成员值只能是对象
- 声明：`const set = new WeakSet(arr)`
- 入参：具有 Iterator 接口的数据结构
- 属性

  - constructor：构造函数，返回 WeakSet

- 方法

  - add()：添加值，返回实例
  - delete()：删除值，返回布尔
  - has()：检查值，返回布尔

**1.应用场景**

- 储存 DOM 节点：DOM 节点被移除时自动释放此成员，不用担心这些节点从文档移除时会引发内存泄漏
- 临时存放一组对象或存放跟对象绑定的信息：只要这些对象在外部消失，它在 `WeakSet 结构中`的引用就会自动消失

**2.注意点**

- 成员都是`弱引用`，垃圾回收机制不考虑 WeakSet 结构对此成员的引用
- 成员不适合引用，它会随时消失，因此 ES6 规定` WeakSet 结构不可遍历`
- 其他对象不再引用成员时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于 `WeakSet 结构中`

## 11.Map

### 1）Map

- 定义：类似于对象的数据结构，成员键是任何类型的值
- 声明：`const set = new Map(arr)`
- 入参：具有 Iterator 接口且每个成员都是一个双元素数组的数据结构
- 属性

  - constructor：构造函数，返回 Map
  - size：返回实例成员总数

- 方法

  - get()：返回键值对
  - set()：添加键值对，返回实例
  - delete()：删除键值对，返回布尔
  - has()：检查键值对，返回布尔
  - clear()：清除所有成员
  - keys()：返回以键为遍历器的对象
  - values()：返回以值为遍历器的对象
  - entries()：返回以键和值为遍历器的对象
  - forEach()：使用回调函数遍历每个成员

**注意点**

- 遍历顺序：插入顺序
- 对同一个键多次赋值，后面的值将覆盖前面的值
- 对同一个对象的引用，被视为一个键
- 对同样值的两个实例，被视为两个键
- 键跟内存地址绑定，只要内存地址不一样就视为两个键
- 添加多个以 NaN 作为键时，只会存在一个以 NaN 作为键的值
- Object 结构提供字符串—值的对应，Map 结构提供值—值的对应

```js
// 定义map
const map1 = new Map();
// 新增键值对 使用 set(key, value)
map1.set(true, 1);
map1.set(1, 2);
map1.set('Bob', 'Join');
console.log(map1); // Map(3) { true => 1, 1 => 2, 'Bob' => 'Join' }
// 判断map是否含有某个key 使用 has(key)
console.log(map1.has('Bob')); // true
// 获取map中某个key对应的value 使用 get(key)
console.log(map1.get(true)); // 2
// 删除map中某个键值对 使用 delete(key)
map1.delete('Bob');
console.log(map1); // Map(2) { true => 1, 1 => 2 }

// 定义map，也可传入键值对数组集合
const map2 = new Map([
  [true, 1],
  [1, 2],
  ['Bob', 'Join'],
]);
console.log(map2); // Map(3) { true => 1, 1 => 2, 'Bob' => 'Join' }
```

### 2）WeakMap

- 定义：和 Map 结构类似，成员键只能是对象
- 声明：const set = new WeakMap(arr)
- 入参：具有 Iterator 接口且每个成员都是一个双元素数组的数据结构
- 属性

  - constructor：构造函数，返回 WeakMap

- 方法

  - get()：返回键值对
  - set()：添加键值对，返回实例
  - delete()：删除键值对，返回布尔
  - has()：检查键值对，返回布尔

**1.应用场景**

- 储存 DOM 节点：DOM 节点被移除时自动释放此成员键，不用担心这些节点从文档移除时会引发内存泄漏
- 部署私有属性：内部属性是实例的弱引用，删除实例时它们也随之消失，不会造成内存泄漏

**2.注意点**

- 成员键都是弱引用，垃圾回收机制不考虑 WeakMap 结构对此成员键的引用
- 成员键不适合引用，它会随时消失，因此 ES6 规定 WeakMap 结构不可遍历
- 其他对象不再引用成员键时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于 WeakMap 结构中
- 一旦不再需要，成员会自动消失，不用手动删除引用
- 弱引用的只是键而不是值，值依然是正常引用
- 即使在外部消除了成员键的引用，内部的成员值依然存在

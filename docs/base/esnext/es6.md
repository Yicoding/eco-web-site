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

- 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数

- `函数简写`

  - 无参数：() => {}
  - 单个参数：x => {}
  - 多个参数：(x, y) => {}
  - 解构参数：({x, y}) => {}
  - 嵌套使用：部署管道机制
  - `this指向固定化`
    - 并非因为内部有绑定 this 的机制，而是根本没有自己的 this，导致内部的 this 就是外层代码块的 this
    - 因为没有 this，因此不能用作构造函数

**普通函数和箭头函数的区别**

- 1、箭头函数不可作为构造函数，不能使用 new
- 2、箭头函数没有自己的 this
- 3、箭头函数没有 arguments 对象
- 4、箭头函数没有原型对象

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
  set2.add('Bob');
  console.log(set2); // Set(5) { 1, 2, 3, 4, 'Bob' }
  // 是否含有某个元素 使用 has
  console.log(set2.has(2)); // true
  // 查看长度 使用 size
  console.log(set2.size); // 5
  // 删除元素 使用 delete
  set2.delete(2);
  console.log(set2); // Set(4) { 1, 3, 4, 'Bob' }
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
const set1 = new Set([1, { name: 'Bob' }, 2, { name: 'Bob' }]);
console.log(set1); // Set(4) { 1, { name: 'Bob' }, 2, { name: 'Bob' } }

// 如果是两个对象是同一指针，则能去重
const obj = { name: 'Bob' };
const set2 = new Set([1, obj, 2, obj]);
console.log(set2); // Set(3) { 1, { name: 'Bob' }, 2 }

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

**2.注意事项**

- 成员都是`弱引用`，垃圾回收机制不考虑 WeakSet 结构对此成员的引用
- 成员不适合引用，它会随时消失，因此 ES6 规定` WeakSet 结构不可遍历`
- 其他对象不再引用成员时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于 `WeakSet 结构中`

## 11.Map

### 1）Map

- 定义：类似于对象的数据结构，成员键是任何类型的值
- 本质：是一种键值对的组合
- 新增 Map 的`意义`：与对象字面量不同的是，对象字面量的键只能是字符串，对于非字符串类型的值会采用强制类型转换成字符串，而 Map 的键却可以`由各种类型的值组成`

  ```js
  let xx = { name: 'xx' };
  let map = new Map();
  map.set(xx, 123); // Map(1) {{…} => 123}
  console.log(map.get(xx)); // 123
  ```

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

**注意事项**

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

**2.注意事项**

- 成员键都是弱引用，垃圾回收机制不考虑 WeakMap 结构对此成员键的引用
- 成员键不适合引用，它会随时消失，因此 ES6 规定 WeakMap 结构不可遍历
- 其他对象不再引用成员键时，垃圾回收机制会自动回收此成员所占用的内存，不考虑此成员是否还存在于 WeakMap 结构中
- 一旦不再需要，成员会自动消失，不用手动删除引用
- 弱引用的只是键而不是值，值依然是正常引用
- 即使在外部消除了成员键的引用，内部的成员值依然存在

## 12.Proxy

- 定义：修改某些操作的默认行为
- 声明：`const proxy = new Proxy(target, handler)`
- 入参

  - target：拦截的目标对象
  - handler：定制拦截行为

- 方法

  - Proxy.revocable()：返回可取消的 Proxy 实例(返回`{ proxy, revoke }`，通过 revoke()取消代理)

- 拦截方式

  - `get()`：拦截对象属性读取

  ```js
  let handler = {
    //定义了get方法的拦截器
    get: function (target, key) {
      //target:要拦截的对象
      //key: 修改的属性
      if (target.hasOwnProperty(key)) {
        if (key == 'name') {
          return '法外狂徒-张三';
        }
      }
      return '18';
    },
  };
  let obj = {
    name: '张三',
  };
  let user = new Proxy(obj, handler);

  // 注意，这里的user不是上个示例的user对象了,而是Proxy的实例
  console.log(user.name); // 法外狂徒-张三

  console.log(user.age); //18
  ```

  - `set()`：拦截对象属性设置，返回布尔

  ```js
  let user = new Proxy(
    {
      age: 18,
    },
    {
      set: function (target, key, value) {
        if (value > 140) {
          throw '你要成仙了!';
        }
        target[key] = value;
      },
    },
  );
  user.age = 20;
  console.log(user.age); //20
  user.age = 200;
  // Uncaught 你要成仙了!
  ```

  - has()：拦截对象属性检查 `k in obj`，返回布尔
  - deleteProperty()：拦截对象属性删除 `delete obj[k]`，返回布尔
  - defineProperty()：拦截对象属性定义 `Object.defineProperty()`、`Object.defineProperties()`，返回布尔
  - ownKeys()：拦截对象属性遍历 `for-in`、`Object.keys()`、`Object.getOwnPropertyNames()`、`Object.getOwnPropertySymbols()`，返回数组
  - getOwnPropertyDescriptor()：拦截对象属性描述读取 `Object.getOwnPropertyDescriptor()`，返回对象
  - getPrototypeOf()：拦截对象原型读取 `instanceof`、`Object.getPrototypeOf()`、`Object.prototype.__proto__`、`Object.prototype.isPrototypeOf()`、`Reflect.getPrototypeOf()`，返回对象
  - setPrototypeOf()：拦截对象原型设置 `Object.setPrototypeOf()`，返回布尔
  - isExtensible()：拦截对象是否可扩展读取 `Object.isExtensible()`，返回布尔
  - preventExtensions()：拦截对象不可扩展设置 `Object.preventExtensions()`，返回布尔
  - apply()：拦截 Proxy 实例作为函数调用 `proxy()`、`proxy.apply()`、`proxy.call()`
  - `construct()`：拦截 Proxy 实例作为构造函数调用 `new proxy()`

    - construct 方法用于拦截 new 操作符,为了使 new 操作符在生成的 Proxy 对象上生效,用于初始化代理的目标对象自身必须具有 Construct 内部方法

    ```js
    var p = new Proxy(function () {}, {
      construct: function (target, argumentsList, newTarget) {
        console.log('called: ' + argumentsList.join(', '));
        return { value: argumentsList[0] * 10 };
      },
    });
    console.log(new p(1).value); // called: 1
    // 10
    ```

**1.应用场景**

- Proxy.revocable()：不允许直接访问对象，必须通过代理访问，一旦访问结束就收回代理权不允许再次访问
- get()：读取未知属性报错、读取数组负数索引的值、封装链式操作、生成 DOM 嵌套节点
- set()：数据绑定(Vue 数据绑定实现原理)、确保属性值设置符合要求、防止内部属性被外部读写
- has()：隐藏内部属性不被发现、排除不符合属性条件的对象
- deleteProperty()：保护内部属性不被删除
- defineProperty()：阻止属性被外部定义
- ownKeys()：保护内部属性不被遍历

**2.注意事项**

- 要使 `Proxy` 起作用，必须针对`实例`进行操作，而`不是`针对`目标对象`进行操作
- 没有设置任何拦截时，等同于`直接通向原对象`
- 属性被定义为`不可读写/扩展/配置/枚举`时，使用拦截方法会报错
- 代理下的目标对象，内部 `this` 指向 `Proxy` 代理

## 13.Reflect

- 定义：保持 Object 方法的默认行为
- 方法

  - get()：返回对象属性
  - set()：设置对象属性，返回布尔
  - has()：检查对象属性，返回布尔
  - deleteProperty()：删除对象属性，返回布尔
  - defineProperty()：定义对象属性，返回布尔
  - `ownKeys()`：遍历对象属性，返回数组(`Object.getOwnPropertyNames()`+`Object.getOwnPropertySymbols()`)
  - getOwnPropertyDescriptor()：返回对象属性描述，返回对象
  - getPrototypeOf()：返回对象原型，返回对象
  - setPrototypeOf()：设置对象原型，返回布尔
  - isExtensible()：返回对象是否可扩展，返回布尔
  - preventExtensions()：设置对象不可扩展，返回布尔
  - apply()：绑定 this 后执行指定函数
  - construct()：调用构造函数创建实例

**1.设计目的**

- 将 `Object` 属于语言内部的方法放到 `Reflect` 上
- 将某些 `Object` 方法报错情况改成返回 `false`
- 让 `Object` 操作变成`函数行为`
- `Proxy` 与 `Reflect` 相辅相成

**2.注意事项**

- Proxy 方法和 Reflect 方法一一对应
- Proxy 和 Reflect `联合使用`，前者负责`拦截赋值操作`，后者负责`完成赋值操作`

**3.数据绑定：观察者模式**

```js
const observerQueue = new Set();
const observe = (fn) => observerQueue.add(fn);
const observable = (obj) =>
  new Proxy(obj, {
    set(tgt, key, val, receiver) {
      const result = Reflect.set(tgt, key, val, receiver);
      observerQueue.forEach((v) => v());
      return result;
    },
  });

const person = observable({ age: 25, name: 'Yajun' });
const print = () => console.log(`${person.name} is ${person.age} years old`);
observe(print);
person.name = 'Joway';
```

## 14.Class

- 定义：对一类具有共同特征的事物的抽象(构造函数语法糖)
- 原理：类本身指向构造函数，所有方法定义在 prototype 上，可看作构造函数的另一种写法(Class === Class.prototype.constructor)
- 方法和关键字

  - `constructor()`：构造函数，new 命令生成实例时自动调用

  ```js
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ')';
  };
  ```

  等同于

  ```js
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
  }
  ```

  - `extends`：继承父类
  - `super`：新建父类的 this

    - 1. 当做函数使用

    ```js
    class A {}
    class B extends A {
      constructor() {
        super(); // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
      }
    }
    ```

    - 2.当做对象使用

    ```js
    class A {
      c() {
        return 2;
      }
    }

    class B extends A {
      constructor() {
        super();
        console.log(super.c()); // 2
      }
    }

    let b = new B(); // 2
    ```

  - `static`：定义静态属性方法
    - 静态属性：定义类完成后赋值属性，该属性`不会被实例继承`，只能通过类来调用
    - 静态方法：使用 `static 定义方法`，该方法`不会被实例继承`，只能通过类来调用(方法中的 `this` 指向类，而不是实例)
  - `get`：取值函数，拦截属性的取值行为
  - `set`：存值函数，拦截属性的存值行为

- 属性

  - `__proto__`：构造函数的继承(总是指向父类)
  - `__proto__`.`__proto__`：子类的原型的原型，即父类的原型(总是指向父类的`__proto__`)
  - prototype.`__proto_`\_：属性方法的继承(总是指向父类的 prototype)

- 继承

  - 实质

    - ES5 实质：先创造子类实例的 this，再将父类的属性方法添加到 this 上(`Parent.apply(this)`)
    - ES6 实质：先将父类实例的属性方法`加到 this 上`(调用 `super()`)，再用`子类构造函数修改 this`

  - super

    - 作为函数调用：只能在构造函数中调用 super()，内部 `this` 指向`继承的当前子类(super()调用后才可在构造函数中使用 this`)
    - 作为对象调用：在普通方法中指向父类的原型对象，在静态方法中指向父类

  - 显示定义：使用 constructor() { super(); }定义继承父类，没有书写则显示定义
  - 子类继承父类：子类使用父类的属性方法时，必须在构造函数中调用 super()，否则得不到父类的 this

    - 父类静态属性方法可被子类继承
    - 子类继承父类后，可从 super 上调用父类静态属性方法

- 实例：类相当于实例的原型，所有在类中定义的属性方法都会被实例继承

  - 显式指定属性方法：使用 this 指定到自身上(使用 Class.hasOwnProperty()可检测到)
  - 隐式指定属性方法：直接声明定义在对象原型上(使用 Class.`__proto__`.hasOwnProperty()可检测到)

- 表达式

  - 类表达式：`const Class = class {}`
  - name 属性：返回紧跟 class 后的类名
  - 属性表达式：[prop]
  - Generator 方法：\* mothod() {}
  - Async 方法：async mothod() {}

- this 指向：解构实例属性或方法时会报错

  - 绑定 this：`this.mothod = this.mothod.bind(this)`
  - 箭头函数：`this.mothod = () => this.mothod()`

- 属性定义位置

  - 定义在构造函数中并使用 this 指向
  - 定义在类最顶层

- new.target：确定构造函数是如何调用

**1.注意事项**

- 在实例上调用方法，实质是调用原型上的方法
- Object.assign()可方便地一次向类添加多个方法(Object.assign(Class.prototype, { ... }))
- 类内部所有定义的方法是不可枚举的(non-enumerable)
- 构造函数默认返回实例对象(this)，可指定返回另一个对象
- 取值函数和存值函数设置在属性的 Descriptor 对象上
- 类不存在变量提升
- 利用 new.target === Class 写出不能独立使用必须继承后才能使用的类
- 子类继承父类后，this 指向子类实例，通过 super 对某个属性赋值，赋值的属性会变成子类实例的属性
- 使用 super 时，必须显式指定是作为函数还是作为对象使用
- extends 不仅可继承类还可继承原生的构造函数

**2.私有属性方法**

```js
const name = Symbol('name');
const print = Symbol('print');
class Person {
  constructor(age) {
    this[name] = 'Bruce';
    this.age = age;
  }
  [print]() {
    console.log(`${this[name]} is ${this.age} years old`);
  }
}
```

**3.继承混合类**

```js
function CopyProperties(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      const desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
function MixClass(...mixins) {
  class Mix {
    constructor() {
      for (const mixin of mixins) {
        CopyProperties(this, new mixin());
      }
    }
  }
  for (const mixin of mixins) {
    CopyProperties(Mix, mixin);
    CopyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}
class Student extends MixClass(Person, Kid) {}
```

## 15.Module

- 命令

  - `export：规定模块对外接口`

    - 默认导出：export default Person(导入时可指定模块任意名称，无需知晓内部真实名称)
    - 单独导出：export const name = "Bruce"
    - 按需导出：export { age, name, sex }(推荐)
    - 改名导出：export { name as newName }

  - `import：导入模块内部功能`

    - 默认导入：import Person from "person"
    - 整体导入：import \* as Person from "person"
    - 按需导入：import { age, name, sex } from "person"
    - 改名导入：import { name as newName } from "person"
    - 自执导入：import "person"
    - 复合导入：import Person, { name } from "person"

  - 复合模式：export 命令和 import 命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量

    - 默认导入导出：export { default } from "person"
    - 整体导入导出：export \* from "person"
    - 按需导入导出：export { age, name, sex } from "person"
    - 改名导入导出：export { name as newName } from "person"
    - 具名改默认导入导出：export { name as default } from "person"
    - 默认改具名导入导出：export { default as name } from "person"

- 继承：`默认导出`和`改名导出`结合使用可使模块具备继承性
- 设计思想：尽量地静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
- 严格模式：ES6 模块自动采用严格模式(不管模块头部是否添加 use strict)

**1.模块方案**

- `CommonJS`：用于服务器(动态化依赖)
- `AMD`：用于浏览器(动态化依赖)
- `CMD`：用于浏览器(动态化依赖)
- `UMD`：用于浏览器和服务器(动态化依赖)
- `ESM`：用于浏览器和服务器(静态化依赖)

**2.加载方式**

- 运行时加载

  - 定义：整体加载模块生成一个对象，再从对象上获取需要的属性和方法进行加载(全部加载)
  - 影响：只有运行时才能得到这个对象，导致无法在编译时做静态优化

- 编译时加载

  - 定义：直接从模块中获取需要的属性和方法进行加载(按需加载)
  - 影响：在编译时就完成模块加载，效率比其他方案高，但无法引用模块本身(本身不是对象)，可拓展 JS 高级语法(宏和类型校验)

**3.加载实现**

- 传统加载：通过<script>进行同步或异步加载脚本

  - 同步加载：<script src=""></script>
  - Defer 异步加载：<script src="" defer></script>(顺序加载，渲染完再执行)
  - Async 异步加载：<script src="" async></script>(乱序加载，下载完就执行)

- 模块加载：<script type="module" src=""></script>(默认是 Defer 异步加载)

**4.CommonJS 和 ESM 的区别**

- CommonJS 输出值的拷贝，ESM 输出值的引用

  - CommonJS 一旦输出一个值，模块内部的变化就影响不到这个值
  - ESM 是动态引用且不会缓存值，模块里的变量绑定其所在的模块，等到脚本真正执行时，再根据这个只读引用到被加载的那个模块里去取值

- CommonJS 是运行时加载，ESM 是编译时加载

  - CommonJS 加载模块是对象(即 module.exports)，该对象只有在脚本运行完才会生成
  - ESM 加载模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

**4.Node 加载**

- 背景：CommonJS 和 ESM 互不兼容，目前解决方案是将两者分开，采用各自的加载方案
- 区分：要求 ESM 采用.mjs 后缀文件名

  - require()不能加载.mjs 文件，只有 import 命令才可加载.mjs 文件
  - .mjs 文件里不能使用 require()，必须使用 import 命令加载文件

- 驱动：node --experimental-modules file.mjs
- 限制：Node 的 import 命令目前只支持加载本地模块(file:协议)，不支持加载远程模块
- 加载优先级

  - 脚本文件省略后缀名：依次尝试加载四个后缀名文件(.mjs、.js、.json、node)
  - 以上不存在：尝试加载 package.json 的 main 字段指定的脚本
  - 以上不存在：依次尝试加载名称为 index 四个后缀名文件(.mjs、.js、.json、node)
  - 以上不存在：报错

- 不存在的内部变量：arguments、exports、module、require、this、**dirname、**filename
- CommonJS 加载 ESM

  - 不能使用 require()，只能使用 import()

- ESM 加载 CommonJS

  - 自动将 module.exports 转化成 export default
  - CommonJS 输出缓存机制在 ESM 加载方式下依然有效
  - 采用 import 命令加载 CommonJS 模块时，不允许采用按需导入，应使用默认导入或整体导入

**5.循环加载**

- 定义：脚本 A 的执行依赖脚本 B，而脚本 A 的执行又依赖脚本 B
- 加载原理

  - CommonJS：require()首次加载脚本就会执行整个脚本，在内存里生成一个对象缓存下来，二次加载脚本时直接从缓存中获取
  - ESM：import 命令加载变量不会被缓存，而是成为一个指向被加载模块的引用

- 循环加载

  - CommonJS：只输出已经执行的部分，还未执行的部分不会输出
  - ESM：需开发者自己保证真正取值时能够取到值(可把变量写成函数形式，函数具有提升作用)

**6.注意事项**

- ES6 模块中，顶层 this 指向 undefined，不应该在顶层代码使用 this
- 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取
- export 命令输出的接口与其对应的值是动态绑定关系，即通过该接口可获取模块内部实时的值
- import 命令大括号里的变量名必须与被导入模块对外接口的名称相同
- import 命令输入的变量只读(本质是输入接口)，不允许在加载模块的脚本里改写接口
- import 命令命令具有提升效果，会提升到整个模块的头部，首先执行
- 重复执行同一句 import 语句，只会执行一次
- export default 命令只能使用一次
- export default 命令导出的整体模块，在执行 import 命令时其后不能跟大括号
- export default 命令本质是输出一个名为 default 的变量，后面不能跟变量声明语句
- export default 命令本质是将后面的值赋给名为 default 的变量，可直接将值写在其后
- export default 命令和 export {}命令可同时存在，对应复合导入
- export 命令和 import 命令可出现在模块任何位置，只要处于模块顶层即可，不能处于块级作用域
- import()加载模块成功后，此模块会作为一个对象，当作 then()的参数，可使用对象解构赋值来获取输出接口
- 同时动态加载多个模块时，可使用 Promise.all()和 import()相结合来实现
- import()和结合 async/await 来书写同步操作的代码

```js
// 导出
const NAME = 'Bruce';
const AGE = 25;
const SEX = 'male';
export { AGE, NAME, SEX };

// 导入
// file1.js
import { AGE } from 'person';
import Person from 'person';
import * as Person from 'person';
```

## 16.Iterator 迭代器

- 定义：为各种不同的数据结构提供统一的访问机制
- 原理：创建一个指针指向首个成员，按照次序使用 `next()`指向下一个成员，直接到结束位置(数据结构只要部署 `Iterator` 接口就可完成遍历操作)
- 作用

  - 为各种数据结构提供一个统一的简便的访问接口
  - 使得数据结构成员能够按某种次序排列
  - ES6 创造了新的遍历命令 ` for-of``，Iterator ` 接口主要供 `for-of` 消费

- 形式：`for-of`(自动去寻找 Iterator 接口)
- 数据结构

  - 集合：`Array、Object、Set、Map`
  - 原生具备接口的数据结构：`String、Array、Set、Map、TypedArray、Arguments、NodeList`

- 部署：默认部署在 Symbol.iterator(具备此属性被认为可遍历的 iterable)
- 遍历器对象

  - `next()`：下一步操作，返回{ done, value }(必须部署)
  - `return()`：for-of 提前退出调用，返回{ done: true }
  - `throw()`：不使用，配合 Generator 函数使用

```js
const items = ['zero', 'one', 'two'];
const it = items[Symbol.iterator]();
it.next();
// {value: "zero", done: false}
it.next();
// {value: "one", done: false}
it.next();
// {value: "two", done: false}
it.next();
// {value: undefined, done: true}
```

**1.for...of 循环**

**只有实现了 Iterator 接口的对象才能够使用 for of 来进行遍历取值**

- 定义：调用 Iterator 接口产生遍历器对象(for-of 内部调用数据结构的 Symbol.iterator())
- 遍历字符串：for-in 获取索引，for-of 获取值(可识别 32 位 UTF-16 字符)
- 遍历数组：for-in 获取索引，for-of 获取值
- 遍历对象：for-in 获取键，for-of 需自行部署
- 遍历 Set：for-of 获取值 => for (const v of set)
- 遍历 Map：for-of 获取键值对 => for (const [k, v] of map)
- 遍历类数组：包含 length 的对象、Arguments 对象、NodeList 对象(无 Iterator 接口的类数组可用 Array.from()转换)
- 计算生成数据结构：Array、Set、Map

  - keys()：返回遍历器对象，遍历所有的键
  - values()：返回遍历器对象，遍历所有的值
  - entries()：返回遍历器对象，遍历所有的键值对

- 与 for-in 区别

  - 有着同 for-in 一样的简洁语法，但没有 for-in 那些缺点、
  - 不同于 forEach()，它可与 break、continue 和 return 配合使用
  - 提供遍历所有数据结构的统一操作接口

**2.应用场景**

- 改写具有 Iterator 接口的数据结构的 Symbol.iterator
- 解构赋值：对 Set 进行结构
- 扩展运算符：将部署 Iterator 接口的数据结构转为数组
- yield*：yield*后跟一个可遍历的数据结构，会调用其遍历器接口
- 接受数组作为参数的函数：for-of、Array.from()、new Set()、new WeakSet()、new Map()、new WeakMap()、Promise.all()、Promise.race()

## 17.Promise

- 定义：包含异步操作结果的对象

  - 是`异步编程的一种解决方案`，比传统的解决方案——回调函数和事件——更合理和更强大

- 状态

  - 进行中：`pending`
  - 已成功：`fulfilled`
  - 已失败：`rejected`

- 特点

  - `对象的状态不受外界影响`
  - `一旦状态改变就不会再变，任何时候都可得到这个结果`
  - Promise 本身是同步的

  ```js
  new Promise((resolve) => {
    // 此处为同步执行
    console.log('promise-inner');
  });
  console.log('promise-out');

  // 输出
  // promise-inner
  // promise-out
  ```

- 声明：`new Promise((resolve, reject) => {})`
- 出参

  - resolve：将状态从未完成变为`成功`，在异步操作成功时调用，并将异步操作的结果作为参数传递出去
  - reject：将状态从未完成变为`失败`，在异步操作失败时调用，并将异步操作的错误作为参数传递出去

- 方法

  - `then()`：分别指定 resolved 状态和 rejected 状态的回调函数

    - `第一参数`：状态变为 resolved 时调用
    - `第二参数`：状态变为 rejected 时调用(可选)

  - `catch()`：指定发生错误时的回调函数
  - `Promise.all()`：将多个实例包装成一个新实例，返回全部实例状态变更后的结果数组(齐变更再返回)`全部返回`

    - 入参：具有 `Iterator 接口`的数据结构
    - 成功：只有`全部实例状态变成 fulfilled`，`最终状态`才会变成 `fulfilled`
    - 失败：其中`一个实例状态变成 rejected`，`最终状态`就会变成 `rejected`

  - `Promise.race()`：将多个实例包装成一个新实例，返回全部实例状态优先变更后的结果(先变更先返回)`只返回一个结果`

    - 入参：具有 `Iterator 接口`的数据结构
    - 成功失败：哪个实例率先改变状态就返回哪个实例的状态

  - `Promise.resolve()`：将对象转为 Promise 对象(等价于 new Promise(resolve => resolve()))

    -` Promise 实例：原封不动地返回入参`

    - Thenable 对象：将此对象转为 Promise 对象并返回(Thenable 为包含 then()的对象，执行 then()相当于执行此对象的 then())
    - `不具有 then()的对象：将此对象转为 Promise 对象并返回，状态为 resolved`
    - 不带参数：返回 Promise 对象，状态为 resolved

  - `Promise.reject()`：将对象转为状态为 rejected 的 Promise 对象(等价于 new Promise((resolve, reject) => reject()))

```js
Promise.resolve('ok')
  .then((res) => {
    console.log('res1', res); // res1 ok
    return 'res1 end';
  })
  .then((res) => {
    console.log('res2', res); // res2 res1 end
    return Promise.resolve('res2 end');
  })
  .then((res) => {
    console.log('res3', res); // res3 res2 end
    return new Promise((resolve) => resolve('res3 end'));
  })
  .then((res) => {
    console.log('res4', res); // res4 res3 end
  });
```

**1.应用场景**

- 解决地狱回调
- 异步加载图片

  ```js
  function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
      const image = new Image();

      image.onload = function () {
        resolve(image);
      };

      image.onerror = function () {
        reject(new Error('Could not load image at ' + url));
      };

      image.src = url;
    });
  }
  ```

- 封装 ajax

  ```js
  onst getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();

    });

    return promise;
  };

  getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });
  ```

**2.注意事项**

- 只有异步操作的结果可决定当前状态是哪一种，其他操作都无法改变这个状态
- 状态改变只有两种可能：从 pending 变为 resolved、从 pending 变为 rejected
- 一旦`新建 Promise 对象就会立即执行`，无法中途取消
- 不设置回调函数，内部抛错不会反应到外部
- 当处于 pending 时，无法得知目前进展到哪一个阶段
- 实例状态变为 resolved 或 rejected 时，会触发 then()绑定的回调函数
- resolve()和 reject()的执行总是晚于本轮循环的同步任务
- then()返回新实例，其后可再调用另一个 then()
- then()运行中抛出错误会被 catch()捕获
- reject()的作用等同于抛出错误
- 实例状态已变成 resolved 时，再抛出错误是无效的，不会被捕获，等于没有抛出
- 实例状态的错误具有冒泡性质，会一直向后传递直到被捕获为止，错误总是会被下一个 catch()捕获
- 不要在 then()里定义 rejected 状态的回调函数(不使用其第二参数)
- 建议使用 catch()捕获错误，不要使用 then()第二个参数捕获
- 没有使用 catch()捕获错误，实例抛错不会传递到外层代码，即不会有任何反应
- 作为参数的实例定义了 catch()，一旦被 rejected 并不会触发 Promise.all()的 catch()
- Promise.reject()的参数会原封不动地作为 rejected 的理由，变成后续方法的参数

**3.\*\*区别 all、race、allSettled、any**

```js
const a = Promise.resolve('a');
const b = Promise.resolve('b');
const c = Promise.resolve('c');
const d = Promise.reject('d');
const e = Promise.reject('e');

// all
// 实例全都变成fulfilled，状态才会变成fulfilled，返回由返回值组成一个数组
Promise.all([a, b, c])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // res ['a', 'b', 'c']

// 有一个实例变成rejected，返回第一个被reject的实例的返回值
Promise.all([a, b, c, d, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // err d

// race
// 有一个实例率先改变状态，不管是fulfilled还是rejected，返回第一个状态改变的实例的返回值
Promise.race([a, b, c, d, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // res a

Promise.race([d, a, b, c, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // err d

// allSettled
// 返回所有实例的返回值，不管是fulfilled还是rejected
Promise.allSettled([a, b, c, d, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // res [{"status":"fulfilled","value":"a"},{"status":"fulfilled","value":"b"},{"status":"fulfilled","value":"c"},{"status":"rejected","reason":"d"}, {"status":"rejected","reason":"e"}]

// any
// 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态
Promise.any([d, a, b, c, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // res a

// 如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态
Promise.any([d, d, d, d, e])
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err)); // err AggregateError: All promises were rejected
```

**4.race 控制请求并发数**

```js
const request = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, 1000);
  });
};
const asyncPool = async (tasks, max) => {
  const pool = [];
  for (let i = 0; i < tasks.length; i++) {
    const task = request(i);
    pool.push(task);
    task.then((res) => {
      console.log(res, `当前并发数为${pool.length}`);
      pool.splice(pool.indexOf(task), 1);
    });
    if (pool.length === max) {
      await Promise.race(pool);
    }
  }
};
const tasks = new Array(10).fill(0).map((v, i) => i);
asyncPool(tasks, 3);
```

- 实际案例

```js
const request = require('request');
const data = require('./public/data'); // 源数据

/**
 * 获取图片大小
 */
function getImageSize(url) {
  return new Promise((resolve, reject) => {
    request(
      {
        url,
        encoding: 'binary',
        timeout,
      },
      function (err, res) {
        if (err) {
          // 请求失败的图片
          console.log('err', err);
          return reject({ url, code: -1 });
        }
        const size = res.headers['content-length'];
        resolve({ url, size, code: 0 });
      },
    );
  });
}
/**
 * 并发控制请求
 */
const asyncPool = (max) => {
  const sizeList = []; // 图片列表，包含图片大小
  const failRequestList = []; // 请求失败的图片列表
  console.log('开始获取图片大小...');
  const startTime = +new Date();
  return new Promise(async (resolve) => {
    const pool = [];
    for (let i = 0; i < data.length; i++) {
      const task = getImageSize(data[i]);
      pool.push(task);
      task
        .then((res) => {
          console.log('task success', res, `当前并发数为${pool.length}`);
          sizeList.push(res);
        })
        .catch((err) => {
          console.log('task err', err, `当前并发数为${pool.length}`);
          if (err?.url) {
            failRequestList.push(err.url);
          }
        })
        .finally(() => {
          if (pool.length === 1) {
            const endTime = +new Date();
            console.log(
              `获取图片大小结束，共用时：${calcUseTime(startTime, endTime)} s`,
            );
            resolve({ sizeList, failRequestList });
          }
          pool.splice(pool.indexOf(task), 1);
        });
      // 到达最大请求数，等待队列执行
      if (pool.length === max) {
        await Promise.race(pool);
      }
    }
  });
};
```

## 18.Generator 生成器

- 定义：`封装多个内部状态的异步编程解决方案`
- 形式：调用 Generator 函数(该函数不执行)返回指向内部状态的`指针对象`(不是运行结果)
- 声明：`function* Func() {}`
- 方法

  - next()：使指针移向下一个状态，返回{ done, value }(入参会被当作上一个 yield 命令表达式的返回值)
  - return()：返回指定值且终结遍历 Generator 函数，返回{ done: true, value: 入参 }
  - throw()：在 Generator 函数体外抛出错误，在 Generator 函数体内捕获错误，返回自定义的 new Errow()

- yield 命令：声明内部状态的值(return 声明结束返回的值)

  - 遇到 yield 命令就暂停执行后面的操作，并将其后表达式的值作为返回对象的 value
  - 下次调用 next()时，再继续往下执行直到遇到下一个 yield 命令
  - 没有再遇到 yield 命令就一直运行到 Generator 函数结束，直到遇到 return 语句为止并将其后表达式的值作为返回对象的 value
  - Generator 函数没有 return 语句则返回对象的 value 为 undefined

- yield\*命令：在一个 Generator 函数里执行另一个 Generator 函数(后随具有 Iterator 接口的数据结构)
- 遍历：通过 for-of 自动调用 next()
- 作为对象属性

  - 全写：`const obj = { method: function*() {} }`
  - 简写：`const obj = { * method() {} }`

- 上下文：执行产生的上下文环境一旦遇到 yield 命令就会暂时退出堆栈(但并不消失)，所有变量和对象会冻结在当前状态，等到对它执行 next()时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行

**1.方法异同**

- 相同点：next()、throw()、return()本质上是同一件事，作用都是让函数恢复执行且使用不同的语句替换 yield 命令
- 不同点

  - next()：将 yield 命令替换成一个值
  - return()：将 yield 命令替换成一个 return 语句
  - throw()：将 yield 命令替换成一个 throw 语句

**2.应用场景**

- 异步操作同步化表达
- 控制流管理
- 为对象部署 Iterator 接口：把 Generator 函数赋值给对象的 Symbol.iterator，从而使该对象具有 Iterator 接口
- 作为具有 Iterator 接口的数据结构

**3.注意事项**

- 每次调用 next()，指针就从函数头部或上次停下的位置开始执行，直到遇到下一个 yield 命令或 return 语句为止
- 函数内部可不用 yield 命令，但会变成单纯的暂缓执行函数(还是需要 next()触发)
- yield 命令是暂停执行的标记，next()是恢复执行的操作
- yield 命令用在另一个表达式中必须放在圆括号里
- yield 命令用作函数参数或放在赋值表达式的右边，可不加圆括号
- yield 命令本身没有返回值，可认为是返回 undefined
- yield 命令表达式为惰性求值，等 next()执行到此才求值
- 函数调用后生成遍历器对象，此对象的 Symbol.iterator 是此对象本身
- 在函数运行的不同阶段，通过 next()从外部向内部注入不同的值，从而调整函数行为
- 首个 next()用来启动遍历器对象，后续才可传递参数
- 想首次调用 next()时就能输入值，可在函数外面再包一层
- 一旦 next()返回对象的 done 为 true，for-of 遍历会中止且不包含该返回对象
- 函数内部部署 try-finally 且正在执行 try，那么 return()会导致立刻进入 finally，执行完 finally 以后整个函数才会结束
- 函数内部没有部署 try-catch，throw()抛错将被外部 try-catch 捕获
- throw()抛错要被内部捕获，前提是必须至少执行过一次 next()
- throw()被捕获以后，会附带执行下一条 yield 命令
- 函数还未开始执行，这时 throw()抛错只可能抛出在函数外部

**4.首次 next()可传值**

```js
function Wrapper(func) {
  return function (...args) {
    const generator = func(...args);
    generator.next();
    return generator;
  };
}
const print = Wrapper(function* () {
  console.log(`First Input: ${yield}`);
  return 'done';
});
print().next('hello');
```

```js
function* myGenerator() {
  yield '1';
  yield '2';
  return '3';
}

const gen = myGenerator(); // 获取迭代器
gen.next(); // {value: "1", done: false}
gen.next(); // {value: "2", done: false}
gen.next(); // {value: "3", done: true}
```

```js
function* myGenerator() {
  console.log(yield '1'); // test1
  console.log(yield '2'); // test2
  console.log(yield '3'); // test3
}

// 获取迭代器
const gen = myGenerator();

gen.next();
gen.next('test1');
gen.next('test2');
gen.next('test3');
```

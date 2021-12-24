---
toc: menu
---

# ts 中的类型

## 1.原始类型

TypeScript 的原始类型包括: boolean、number、string、void、undefined、null、symbol、bigint

- `布尔`类型：`boolean`
- `数字`类型：`number`
- `字符串`类型：`string`
- `空值`：`void`
- Null 和 Undefined：`null` 和 `undefined`
- Symbol 类型：`symbol`
- BigInt `大数整数`类型：`bigint`

### 1）布尔类型

- `boolean` 表示 `ts` 中的布尔`类型`
- `Boolean` 表示 `js` 中的布尔`对象`，是 js 的构造函数

```ts
const isLoading: boolean = false;
```

### 2）数字

- 用 `number` 类型表示

```ts
const decLiteral: number = 6; // 十进制
const hexLiteral: number = 0xf00d; // 十六进制
const octalLiteral: number = 0o744; // 八进制
const binaryLiteral: number = 0b1010; // 二进制
```

- 数值的进制

  - 十进制：没有前导 0 的数值
  - 十六进制：有前缀 0x 或 0X 的数值
  - 八进制：有前缀 0o 或 0O 的数值，或者有前导 0、且只用到 0-7 的八个阿拉伯数字的数值
  - 二进制：有前缀 0b 或 0B 的数值

- 默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制

  ```js
  0xff; // 255
  0o377; // 255
  0b11; // 3
  ```

### 3）字符串

```ts
const userName: string = 'Bob';
```

### 4）空值 `void`

- 表示没有任何类型，当一个函数没有返回值时，其返回值类型是 `void`

```ts
function warnUser(): void {
  console.log('This is my warning message');
}
```

- 只有 `null` 和 `undefined` 可以赋给 `void`

- 不能将类型 `null` 分配给类型 `void`(开启 `--strictNullChecks` 检测)

```ts
const a: void = undefined;
```

### 5）Null 和 Undefined

```ts
let a: undefined = undefined;
let b: null = null;
```

- 默认情况下 null 和 undefined 是所有类型的子类型

- 在正式项目中一般都是开启 `--strictNullChecks` 检测的，即 null 和 undefined 只能赋值给 any 和它们各自(一个例外是 `undefined 是也可以分配给 void`)，可以规避非常多的问题

### 6）Symbol

- 1.使用 Symbol 的时候，必须添加 es6 的编译辅助库

  ```json
  // tsconfig.json
  {
    "lib": ["es6"]
  }
  ```

- 2.Symbol 是在 ES2015 之后成为新的原始类型，它通过 Symbol 构造函数创建

```ts
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');
```

- 3.Symbol 的值是`唯一不变的`

```ts
Symbol('key1') === Symbol('key1'); // false
```

### 7）BigInt

- `BigInt` 可以安全地存储和操作`大整数`，即使这个数已经超出了 JavaScript 构造函数 Number 能够表示的安全整数范围

- 使用 BigInt 的时候，必须添加 `ESNext` 的编译辅助库

  ```json
  // tsconfig.json
  {
    "lib": ["ESNext"]
  }
  ```

- JavaScript 中采用双精度浮点数，导致精度有限

  - `Number.MAX_SAFE_INTEGER` 最大为 `2**53-1`

  ```js
  const max = Number.MAX_SAFE_INTEGER;

  const max1 = max + 1;
  const max2 = max + 2;

  max1 === max2; //true
  ```

- BigInt 正是解决这类问题而生的(`开启 BigInt`)

  ```ts
  // 这里是 JavaScript 代码，并不是 typescript
  // const max = BigInt(Number.MAX_SAFE_INTEGER);

  const max = Number.MAX_SAFE_INTEGER;
  const max1 = max + 1n;
  const max2 = max + 2n;

  max1 === max2; // false
  ```

## 2.其他类型

- 1.计算机类型系统理论中的顶级类型：

  - any
  - unknown

- 2.类型系统中的底部类型：

  - never

- 3.非原始类型(non-primitive type)：

  - object

- 4.比较常见的数组、元组

### 1）any

- 为那些在编程阶段还`不清楚`类型的变量指定一个类型
  - 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库
- 可以使用 any 类型来标记这些变量
- 通常在不得已的情况下使用，不应该首先考虑使用此类型

```ts
let notSure: any = 4;
notSure = 'maybe a string instead';
```

### 2）unknown

- 1.`unknown` 是 TypeScript 3.0 引入了新类型，是 `any` 类型对应的`安全类型`

- 2.`unknown` 和 `any` 的`主要区别`：

  - `unknown` 类型会`更加严格`
    - 在对 unknown 类型的值执行大多数操作之前,我们必须`进行`某种形式的`检查`
    - 当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等
  - `any` 类型的值执行操作之前,我们`不`必进行任何`检查`

- 3.`unknown` 作用

  - 可以`缩小类型范围`（类型保护）

  ```ts
  function getValue(value: unknown): string {
    if (value instanceof Date) {
      // 这里由于把value的类型缩小为Date实例的范围内,所以`value.toISOString()`
      return value.toISOString();
    }

    return String(value);
  }
  ```

### 3）never

- `never` 类型表示的是那些`永不存在的值`的`类型`

- `never` 类型是任何类型的`子类型`，也可以`赋值给任何类型`

- 除了 never 本身，没有其他类型是 never 的子类型或可以赋值给 never 类型
  - any 也不可以赋值给 never

```ts
// 抛出异常的函数永远不会有返回值
function error(message: string): never {
  throw new Error(message);
}

// 空数组，而且永远是空的
const empty: never[] = [];
```

### 4）数组

- 数组有两种类型定义方式

- 1.使用`泛型`:

```ts
const list: Array<number> = [1, 2, 3];
```

- 2.在元素类型后面接上 `[]`

```ts
const list: number[] = [1, 2, 3];
```

### 5）元组（Tuple）

- 1.表示一个`已知`元素`数量`和`类型`的数组，`各元素`的` 类型``不必相同 `

```ts
let x: [string, number];
x = ['hello', 10, false]; // Error
x = ['hello']; // Error
```

- 2.元组的类型如果多出或者少于规定的类型是会报错的，必须`严格`跟事先`声明`的类型`一致`才不会报错

  - 类型的顺序不一样也会报错

- 3.元组继承于数组，但是比数组拥有更严格的类型检查

- 4.`元组越界问题`:
  - Typescript `允许`向元组中使用数组的 `push` 方法插入新元素，但是当我们`访问新加入的元素`时，会`报错`

```ts
const tuple: [string, number] = ['a', 1];
tuple.push(2); // ok
console.log(tuple); // ["a", 1, 2] -> 正常打印出来

console.log(tuple[2]); // Tuple type '[string, number]' of length '2' has no element at index '2'
```

### 6）Object

- object 表示`非原始类型`，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型

- 普通对象、枚举、数组、元组通通都是 object 类型

```ts
enum Direction {
  Center = 1,
}

let value: object;

value = Direction;
value = [1];
value = [1, 'hello'];
value = {};
```

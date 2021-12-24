---
toc: menu
---

# 类型兼容性

- 当一个类型 Y 可以赋值给另一个类型 X 时， 我们就可以说类型 X 兼容类型

- X 兼容 Y：X(目标类型)= Y(源类型)

- 简单一句话概括兼容性： 重新赋值不报错（类型自动转化）

## 1.结构类型

- TypeScript 里的类型兼容性是基于「结构类型」的
- 其基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性

```ts
class Person {
  constructor(
    public weight: number,
    public name: string,
    public born: string,
  ) {}
}

interface Dog {
  name: string;
  weight: number;
}

let x: Dog;
// Dog 兼容了 Person
// Dog 的属性 Person 都拥有
x = new Person(120, 'Bob', '1996-12-12'); // OK
```

- Dog 兼容了 Person,Dog 的属性 Person 都拥有
- Person 并没有兼容 Dog，因为 Dog 的属性比 Person 要少了一个

## 2.接口的兼容性

- 如果传入的变量和声明的类型不匹配， TS 就会进行兼容性检查
- 原理是 Duck-Check， 就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的

- `多了可以，少了不行`

```ts
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}
let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

x = y; // YES
y = x; // ERROR 类型 "X" 中缺少属性 "c"，但类型 "Y" 中需要该属性
```

## 3.函数参数兼容性

### 1）比较参数

- `函数`类型的兼容性判断，要查看 x 是否能赋值给 y，首先看它们的`参数列表`

- x 的每个参数必须能在 y 里找到`对应类型`的参数,注意的是参数的名字相同与否无所谓，`只看`它们的`类型`

- `参数可以少但是不能多`

**1.固定参数**

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

// x 的每个参数在 y 中都能找到对应的参数
y = x; // OK
x = y; // Error 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。
```

**2.可选参数和剩余参数**

- 当函数的参数中出现了可选参数时: "strictNullChecks": false 情况下不抛错 反之 抛出异常

```ts
let a = (x: number, y: number) => {};
let b = (x?: number, y?: number) => {};
let c = (...args: number[]) => {};
// strictNullChecks": true 时
a = b; // 固定参数可以兼容可选参数
a = c; // 固定参数可以兼容剩余参数
b = c; // 可选参数不兼容剩余参数
b = a; // 可选参数不兼容固定参数
c = a; // 剩余参数可以兼容固定参数
c = b; // 剩余参数可以兼容可选参数
```

- 原因就是可选类型的参数可能为 undefined，在 strictNullChecks": true 情况下不能与 number 兼容

### 2）比较返回值

- `少了不行，多了可以`

```ts
let x = () => ({ name: 'Alice' });
let y = () => ({ name: 'Alice', location: 'Seattle' });

x = y; // YES
y = x; // Error, 不能将类型“() => { name: string; }”分配给类型“() => { name: string; location: string; }”。
// 类型 "{ name: string; }" 中缺少属性 "location"，但类型 "{ name: string; location: string; }" 中需要该属性。
```

- y 的返回中 必须有 location 属性 是字符串类型，但是 x 的返回值没有，所以 把 x 赋值给 y 的时候会抛出异常

## 4.类的兼容性

- 比较两个类类型的对象时，只有`实例的成员`会被`比较`。 静态成员和构造函数不在比较的范围内

```ts
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let a: Animal;
let s: Size;

a = s; // YES
s = a; // YES
```

- 类的私有成员和受保护成员会影响兼容性
  - 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 同样地，这条规则也适用于包含受保护成员实例的类型检查
  - 允许子类赋值给父类，但是不能赋值给其它有同样类型的类

## 5.泛型的兼容性

- 1.泛型在判断兼容性的时候会先判断具体的类型，然后再进行兼容性判断

  - 接口内容为空没有用到泛型的时候是可以的

  ```ts
  interface Empty<T> {}
  let x!: Empty<string>;
  let y!: Empty<number>;
  x = y; // YES
  ```

- 2.对于没指定泛型类型的泛型参数时，会把所有泛型参数当成 any 比较。然后用结果类型进行比较

  - 接口内容不为空的时候不可以

  ```ts
  interface noEmpty<T> {
    data: T;
  }
  let x!: noEmpty<string>;
  let y!: noEmpty<number>;
  x = y; // ERROR 不能将类型“noEmpty<number>”分配给类型“noEmpty<string>”。
  ```

  - 实现原理如下，先判断具体的类型在判断兼容性

  ```ts
  interface noEmptyString {
    data: string;
  }
  interface noEmptyNumber {
    data: number;
  }
  // 前一个 data 是 字符串类型，后一个是 数字类型，所以 不能兼容
  ```

## 6.枚举的兼容性

- 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
- 不同枚举类型之间是不兼容的

```ts
// 数字可以赋给枚举
enum Colors {
  Red,
  Yellow,
}
let c: Colors;
c = Colors.Red; // 0
c = 1; // YES
c = '1'; // ERROR

// 枚举值可以赋给数字
let n: number;
n = 1;
n = Colors.Red; // YES
```

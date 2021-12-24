---
toc: menu
---

# 高级类型

## 1.交叉类型 &

> 通过 `&` 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

- 1.交叉类型是将多个类型合并为一个类型。交叉类型其实就是两个接口类型的属性的并集

```ts
type PersonName = { name: string };
type Person = PersonName & { age: number };

let person: Person = {
  name: 'Bob',
  age: 18,
};
```

- 2.在合并多个类型的过程中，刚好出现某些类型存在相同的成员，但对应的类型又不一致时
  - c 的类型为 string & number，即成员 c 的类型既是 string 类型又是 number 类型，这种类型不存在，所以混入后成员 c 的类型为 never

```ts
interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string;
}

type XY = X & Y;
type YX = Y & X;

let p: XY = { c: 6, d: 'd', e: 'e' }; // ERROR 不能将类型“number”分配给类型“never”。
let q: YX = { c: 'c', d: 'd', e: 'e' }; // ERROR 不能将类型“string”分配给类型“never”。
```

## 2.联合类型 |

> 联合类型使用 `|` 分隔每个类型

- 联合类型（Union Types）表示取值可以为多种类型中的一种
- 未赋值时联合类型上只能访问两种类型共有的属性和方法

```ts
let name: string | number;
name = 3;
name = 'Bob';
```

**访问联合类型的属性或方法**

- 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let name: string | number;
name = 3;
console.log(name.length); // ERROR 类型“number”上不存在属性“length”
name = 'Bob';
console.log(name.length); // 5
```

## 3.类型别名 type

- 类型别名会给一个类型起个新名字,类型别名有时和接口很像,但是可以作用于原始值、联合类型、元组以及其它任何你需要手写的类型

- 类型别名与字符串字面量类型都是使用 `type` 进行定义

```ts
type some = boolean | string;
type ZType = 1 | 'one' | true;

// 可以是泛型
type Container<T> = { value: T };

// 也可以使用类型别名来在属性里引用自己：
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};
```

## 4.type 和 interface 区别

- `interface` 只能用于定义对象类型

  - interface 方式可以实现接口的 extends 和 implements
  - interface 可以实现接口合并声明
  - `interface` 创建了一个新的名字,可以在其它任何地方使用,`type` 并不创建新名字,比如,错误信息就不会使用别名

- `type` 的声明方式除了对象之外还可以定义交叉、联合、原始类型等
  - 类型声明的方式适用范围更加`广泛`

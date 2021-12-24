---
toc: menu
---

# 赋值断言、is 关键字、可调用类型注解和类型推导

## 1.明确赋值断言

- 允许在实例属性和变量声明后面放置一个 `!`，告诉 TypeScript 该属性会被明确地赋值

**1.变量 x 在赋值前被使用了，报错**

```ts
let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}
```

**2.通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值**

```ts
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
```

## 2.is 关键字

```ts
function isString(test: any): test is string {
  return typeof test === 'string';
}

function example(foo: number | string) {
  if (isString(foo)) {
    console.log('it is a string' + foo);
    console.log(foo.length); // string function
  }
}
example('hello world');
```

- `is` 作用就是`判断` test `是不是` `string` 类型，并根据结果`返回` `boolean 相关类型`

- 如果把 test is string 换成 boolean，报错：
  - 因为 is 为关键字的「类型谓语」把`参数的类型范围缩小`了,当使用了 test is string 之后,我们通过 isString(foo) === true 明确知道其中的参数是 string,而 boolean 并没有这个能力,这就是 is 关键字存在的意义.

## 3.可调用类型注解

- 有一个接口，我们如何操作才能让它被注解为可执行的:

**1.表达式是不可调用的**

```ts
interface ToString {}

declare const sometingToString: ToString;

sometingToString(); // This expression is not callable. Type 'ToString' has no call signatures.ts(2349)
// 表达式是不可调用的
```

**2.改进**

```ts
interface ToString {
  (): string;
}

declare const sometingToString: ToString;

sometingToString(); // ok
```

**3.需要实例化时写法**

```ts
interface ToString {
  new (): string;
}

declare const sometingToString: ToString;

new sometingToString(); // ok
```

## 4.类型推导

### 1）函数返回类型推导

- TypeScript 自带的类型推导

```ts
function greeter(person: string) {
  return 'Hello, ' + person;
}
// function greeter(person: string): string
```

### 2）多类型联合推导

- 编译器把它推导成了一个联合类型：string | number | bigint

```ts
let arr1 = [1, 'one', 1n];
// let arr1: (string | number | bigint)[]
```

### 3）解构推导

```ts
const bar = [1, 2];
let [a, b] = bar;

a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```

### 4）类型推导的不足

```ts
const action = {
  type: 'update',
  payload: {
    id: 10,
  },
};

// const action: {
//   type: string;
//   payload: {
//     id: number;
//   };
// };
```

- 如果需要的 type 属性的类型是「字符串字面量」类型，而不是 string，这就是类型推导的无法做到的了

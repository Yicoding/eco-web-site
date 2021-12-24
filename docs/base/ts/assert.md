---
toc: menu
---

# 类型断言与类型守卫

## 1.类型断言

- 使用 `as` 进行断言

```ts
interface Person {
  name: string;
  age: number;
}

const person = {} as Person;

person.name = 'xiaomuzhu';
person.age = 20;
```

- 类型断言不能滥用,在万不得已的情况下使用要谨慎
- 强制把某类型断言会造成 TypeScript 丧失代码提示的能力

## 2.双重断言

- 先把类型断言为 any 再接着断言为你想断言的类型就能实现双重断言

```ts
interface Person {
  name: string;
  age: number;
}

const person = 'xiaomuzhu' as any as Person; // ok
```

## 3.类型守卫

- 类型守卫就是缩小类型的范围

### 1）instanceof

- `instanceof` 类型保护是通过`构造函数`来细化类型的一种方式

- 用来做判断使用

```ts
class Person {
  name = 'xiaomuzhu';
  age = 20;
}

class Animal {
  name = 'petty';
  color = 'pink';
}

function getSometing(arg: Person | Animal) {
  // 类型细化为 Person
  if (arg instanceof Person) {
    console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
    console.log(arg.age); // ok
  }
  // 类型细化为 Person
  if (arg instanceof Animal) {
    console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
    console.log(arg.color); // ok
  }
}
```

### 2）in

- `x in y` 表示 x 属性在 y 中存在

```ts
class Person {
  name = 'xiaomuzhu';
  age = 20;
}

class Animal {
  name = 'petty';
  color = 'pink';
}

function getSometing(arg: Person | Animal) {
  if ('age' in arg) {
    console.log(arg.color); // Error
    console.log(arg.age); // ok
  }
  if ('color' in arg) {
    console.log(arg.age); // Error
    console.log(arg.color); // ok
  }
}
```

### 3）字面量类型守卫

- 在联合类型里使用字面量类型时，它可以帮助检查它们是否有区别:

```ts
type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
```

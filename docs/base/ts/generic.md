---
toc: menu
---

# 泛型(generic)

- 泛型给予开发者创造灵活、可重用代码的能力

- 避免编写重复代码

## 1.单个类型

- 在函数名称后面声明泛型变量 `<T>`，它用于捕获开发者传入的参数类型（比如说 string），然后我们就可以使用 T(也就是 string)做参数类型和返回值类型了

```ts
function returnItem<T>(para: T): T {
  return para;
}
```

## 2.多个类型参数

- 可以同时定义泛型 T 和 泛型 U

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```

## 3.泛型变量

- 泛型变量 T 可以当做类型的一部分使用，而不是整个类型，增加了灵活性

```ts
function getArrayLength<T>(arg: Array<T>) {
  console.log((arg as Array<any>).length); // ok
  return arg;
}
```

## 4.泛型接口

- 泛型也可用于接口声明

```ts
interface ReturnItemFn<T> {
  (para: T): T;
}

const returnItem: ReturnItemFn<number> = (para) => para;
```

## 5.泛型类

- 泛型也可以在类中使用，它既可以作用于`类本身`，也可以作用与类的`成员函数`

- 可以传入不同的类型

```ts
class Stack<T> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}
```

## 6.泛型约束

- 可以用 `<T extends xx>` 的方式约束泛型

```ts
//  约束范型为 number 或者 string 其中之一
type Params = number | string;

class Stack<T extends Params> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}

const stack1 = new Stack<number>();
const stack2 = new Stack<boolean>(); // ts报错，不能传入boolean
```

## 7.泛型约束与索引类型

```ts
function getValue<T extends object>(obj: T, key: string) {
  return obj[key]; // error
}
```

- 报错原因：第二个参数 key 是不是存在于 obj 上是`无法确定的`

- 使用 `keyof` 需要对这个 `key` 也进行约束

```ts
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]; // ok
}
```

## 8.多重类型进行泛型约束

- 可以利用交叉类型来进行多类型约束 `&`

```ts
interface FirstInterface {
  doSomething(): number;
}

interface SecondInterface {
  doSomethingElse(): string;
}

class Demo<T extends FirstInterface & SecondInterface> {
  private genericProperty: T;

  useT() {
    this.genericProperty.doSomething(); // ok
    this.genericProperty.doSomethingElse(); // ok
  }
}
```

## 9.泛型与 new

- 声明一个泛型拥有构造函数时，需要借助 new 的帮助

```ts
function factory<T>(type: { new (): T }): T {
  return new type(); // ok
}
```

- 参数 `type` 的类型 `{new(): T}` 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T

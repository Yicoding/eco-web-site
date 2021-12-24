---
toc: menu
---

# 函数(Function)

- 实现抽象层、模拟类、信息隐藏和模块

- 函数仍然是主要的定义行为的地方

- TypeScript 为 JavaScript 函数添加了额外的功能

## 1.定义函数类型

### 1）类型推断

- TypeScript 已经推断出了整个函数的类型，虽然我们并没有显式定义出来，这就是所谓的`『类型推断』`

  ```ts
  const add = (a: number, b: number) => a + b;
  // TypeScript推断出 const add: (a: number, b: number) => number
  ```

### 2）显式定义函数的类型

```ts
const add: (a: number, b: number) => number = (a: number, b: number) => a + b;
```

- (a: number, b: number) 为参数类型
- 通过 => 来连接参数与返回值
- 最后则是返回值的类型

## 2.函数的参数

### 1）可选参数

- 在参数后面加上 `?` 即代表参数`可能不存在`

```ts
const add = (a: number, b?: number) => a + (b ? b : 0);
```

- 参数 `b` 有 `number` 与 `undefined` 两种可能

### 2）默认参数

- 在参数后赋值即可

```ts
const add = (a: number, b = 10) => a + b;
```

### 3）剩余参数

- 需要用 `...` 来表示`剩余参数`

```ts
const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => a + b, a);
```

## 3.重载（Overload）

- 传入参数的个数不同，执行不同的操作

- 函数重载在多人协作项目或者开源库中使用非常频繁，因为一个函数可能会被大量的开发者调用，如果不使用函数重载，那么会造成额外的麻烦

  - 全局状态管理库 Redux 的 `compose` 就是运用大量函数重载的典型案例

- ts 中的函数重载主要解决类型安全，只能传入定义过的个数

```ts
// 重载
interface Direction {
  top: number;
  bottom?: number;
  left?: number;
  right?: number;
}
function assigned(all: number): Direction; // 接收1个参数
function assigned(topAndBottom: number, leftAndRight: number): Direction; // 接收2个参数
function assigned(
  top: number,
  right: number,
  bottom: number,
  left: number,
): Direction; // 接收4个参数

function assigned(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}

assigned(1);
assigned(1, 2);
assigned(1, 2, 3); // 3个参数时，ts报错，只能接受1、2、4个参数
assigned(1, 2, 3, 4);
```

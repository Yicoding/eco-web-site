---
toc: menu
---

# 枚举类型(enum)

- 用于声明一组命名的常数

- 当一个变量`有几种可能的取值时`,可以将它定义为枚举类型

- `enum`进行声明

## 1.数字枚举

- 1.声明一个枚举类型时，`值`默认是`数字类型`，默认从 `0 开始`依次累加:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

- 2.把第一个值赋值后，后面也会根据第一个值进行`累加`

```ts
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13
```

## 2.字符串枚举

- 值也可以是字符串类型：

```ts
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction['Right'], Direction.Up); // Right Up
```

## 3.异构枚举

- 字符串枚举和数字枚举`混合使用`

- 通常情况下`很少`会`这样使用`枚举

## 4.反向映射

- 枚举具有`正反向同时映射`的特性

- 1.正向映射

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

- 2.反向映射(js 中不允许)

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction[0]); // Up
```

## 5.枚举的本质

- 枚举类型被编译为 JavaScript

```ts
var Direction;
(function (Direction) {
  Direction[(Direction['Up'] = 10)] = 'Up';
  Direction[(Direction['Down'] = 11)] = 'Down';
  Direction[(Direction['Left'] = 12)] = 'Left';
  Direction[(Direction['Right'] = 13)] = 'Right';
})(Direction || (Direction = {}));
```

- 编译后，Direction[Direction["Up"] = 10] = "Up" 也就是 Direction[10] = "Up"

- 可以把枚举类型看成一个 JavaScript 对象

## 6.常量枚举

- 1.`枚举`可以被 `const` 声明为`常量`：

```ts
const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

const a = Direction.Up;
```

- 2.被编译为 JavaScript 后：

```ts
var a = 'Up';
```

- 3.声明常量枚举后，Direction 之后就没有用了，TypeScript 在这一步就把 Direction 去掉了

  - 性能提升的一个方案，编译后，代码量变少

- 4.保留对象 Direction ，可以添加编译选项 --preserveConstEnums

## 7.枚举合并

- 分开声明枚举，它们会自动合并

```ts
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

enum Direction {
  Center = 1,
}

// 相当于
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
  Center = 1,
}
```

## 8.枚举添加静态方法

- 借助 `namespace` 命名空间，可以给枚举添加静态方法

- 编写一个静态方法，这个方法可以帮助我们把夏天的月份找出来：

```ts
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

namespace Month {
  export function isSummer(month: Month) {
    switch (month) {
      case Month.June:
      case Month.July:
      case Month.August:
        return true;
      default:
        return false;
    }
  }
}

console.log(Month.isSummer(Month.January)); // false
```

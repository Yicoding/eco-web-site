---
toc: menu
---

# 接口(interface)

- TypeScript 的`核心原则`之一是对值所具有的结构进行`类型检查`

- 接口的作用就是为这些类型命名和为你的代码或第三方代码`定义契约`

## 1.使用

- interface 用来描述类型

```ts
interface User {
  name: string;
  age: number;
  isMale: boolean;
}

const getUserName = (user: User) => user.name;
```

- 接口 `User` 描述了参数 `user` 的结构
  - 接口`不`会去`检查`属性的`顺序`，只要相应的`属性存在`并且` 类型兼容``即可 `

## 2.可选属性

- 定义的属性`可有可无`时

```ts
interface User {
  name: string;
  age?: number; // 可有可无，age 属性既可能是number类型也可能是 undefined
  isMale: boolean;
}
```

## 3.只读属性

- 利用 `readonly` 我们可以把一个属性变成`只读` 性质，此后就无法对他进行修改

```ts
interface User {
  name: string;
  age?: number;
  readonly isMale: boolean; // 只读
}
```

## 4.函数类型

- 1.直接在 interface 内部描述函数

  ```ts
  interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: (words: string) => string;
  }
  ```

- 2.可以先用接口直接描述函数类型

```ts
interface Say {
  (words: string): string;
}

interface User {
  name: string;
  age?: number;
  readonly isMale: boolean;
  say: Say;
}
```

## 5.属性检查

### 1）额外属性检查产生报错

```ts
interface Config {
  width?: number;
}

function CalculateAreas(config: Config): { area: number } {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }
  return { area: square };
}

let mySquare = CalculateAreas({ widdth: 5 }); // 报错，传入的属性没有定义
```

### 2）解决

**1.使用类型断言**

```ts
let mySquare = CalculateAreas({ widdth: 5 } as Config);
```

**2.添加字符串索引签名**

- Config 可以有任意数量的属性

```ts
interface Config {
  width?: number;
  [propName: string]: any;
}
```

**3.将字面量赋值给另外一个变量**

```ts
let options: any = { widdth: 5 };
let mySquare = CalculateAreas(options);
```

- 本质上是转化为 any 类型，除非有万不得已的情况，不建议采用上述方法

## 6.继承接口

- 使用 `extends` 继承

```ts
// 1.继承 User 的接口
interface User {
  name: string;
  age?: number;
  readonly isMale: boolean;
  say: () => string;
}

interface VIPUser extends User {
  broadcast: () => void;
}

// 2.继承多个接口
interface VIPUser extends User, SupperUser {
  broadcast: () => void;
}
```

## 7.interface 和 type 区别

### 1）相同点

- 都可以描述一个对象或者函数

- 都允许继承（extends），也可以相互继承

  - interface 通过 extends 继承，type 通过&连接符继承

### 2）不同点

- type 可以声明基本类型别名，联合类型，元组等类型

- type 可以通过 typeof 操作符来定义

- interface 能够声明合并

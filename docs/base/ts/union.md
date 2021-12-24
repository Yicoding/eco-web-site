---
toc: menu
---

# 可辨识联合类型

## 1.字面量类型

- 字面量（Literal Type）主要分为

  - 真值字面量类型（boolean literal types）
  - 数字字面量类型（numeric literal types）
  - 枚举字面量类型（enum literal types）
  - 大整数字面量类型（bigInt literal types）
  - 字符串字面量类型（string literal types）

- 字面量类型与联合类型结合，可以模拟一个类似于枚举的效果

```ts
type Direction = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: Direction) {
  // ...
}

move(1, 'North'); // ts进行提示
```

## 2.类型字面量

- 在一定程度上类型字面量可以代替接口

```ts
type Foo = {
  baz: [number, 'xiaomuzhu'];
  toString(): string;
  readonly [Symbol.iterator]: 'github';
  0x1: 'foo';
  bar: 12n;
};
```

## 3.可辨识联合类型

### 1）interface 产生问题

- action 为 create 时，不需要 id

- action 为 delete 时，需要 id

- 使用 interface 不能满足

  ```ts
  interface Info {
    username: string;
  }

  interface UserAction {
    id?: number;
    action: 'create' | 'delete';
    info: Info;
  }
  ```

### 2）使用 type

```ts
type UserAction =
  | {
      id: number;
      action: 'delete';
      info: Info;
    }
  | {
      action: 'create';
      info: Info;
    };

const UserReducer = (userAction: UserAction) => {
  console.log(userAction.id); // ts 提示报错
  // ...
};
```

- 类型别名 UserAction 是有两个类型字面量联合而成的,我们不知道其中传入的是有没有 id 字段的那个类型字面量,因此我们需要找到方法区分出到底是哪个类型字面量

### 3）使用字面量类型

```ts
const UserReducer = (userAction: UserAction) => {
  switch (userAction.action) {
    case 'delete':
      console.log(userAction.id);
      break;
    default:
      break;
  }
};
```

- `userAction.action` 就是辨识的关键,被称为可辨识的标签

- 实现：
  - 具有普通的单例类型属性—可辨识的特征,上文中就是 delete 与 create 两个有唯一性的字符串字面量
  - 一个类型别名`包含联合类型`
  - 类型守卫的特性,比如我们必须用 `if` `switch` 来`判断` userAction.action 是属于哪个类型作用域即 delete 与 create

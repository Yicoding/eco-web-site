---
toc: menu
---

# 类(class)

- 在 ES6 之后，JavaScript 拥有了 `class` 关键字

- 本质依然是`构造函数`

## 1.抽象类

- `抽象类`做为其它派生类的`基类`使用,它们一般` 不会``直接 `被`实例化`,不同于接口,抽象类可以包含成员的实现细节

- 1.`abstract` 关键字是用于`定义`抽象类和在抽象类内部定义抽象方法

  ```ts
  abstract class Animal {
    abstract makeSound(): void;
    move(): void {
      console.log('roaming the earch...');
    }
  }
  ```

- 2.`实例化`此抽象类会`报错`

  - `不能直接实例化抽象类`，通常需要我们`创建子类`继承基类,然后可以`实例化子类`

  ```ts
  class Cat extends Animal {
    makeSound() {
      console.log('miao miao');
    }
  }

  const cat = new Cat();

  cat.makeSound(); // miao miao
  cat.move(); // roaming the earch...
  ```

## 2.访问限定符

- 三类访问限定符，分别是: public、private、protected

### 1）public

- 在 TypeScript 的类中，成员都`默认`为 `public`, 被此限定符修饰的成员是`可以被`外部`访问`（默认是可以被外部访问的）

```ts
class Car {
  public run() {
    console.log('启动...');
  }
}

const car = new Car();

car.run(); // 启动...
```

### 2）private

- 当成员被设置为 `private` 之后, 被此限定符修饰的成员是`只可以`被`类的内部访问`

```ts
class Car {
  private run() {
    console.log('启动...');
  }
}

const car = new Car();

car.run(); // [ts] 属性“run”受保护，只能在类“Car”中访问
```

### 3）protected

- 当成员被设置为 `protected` 之后, 被此限定符修饰的成员是只可以被`类的内部`以及`类的子类访问`

```ts
class Car {
  protected run() {
    console.log('启动...');
  }
}

class GTR extends Car {
  init() {
    this.run();
  }
}

const car = new Car();
const gtr = new GTR();

car.run(); // [ts] 属性“run”受保护，只能在类“Car”及其子类中访问
gtr.init(); // 启动...
gtr.run(); // [ts] 属性“run”受保护，只能在类“Car”及其子类中访问
```

## 3.class 可以作为接口

- 把 class 作为 interface 使用，在 React 工程中是很常用的

- 使用场景：组件需要传入 `props` 的类型 `Props` ，同时有需要设置默认 `props` 即 `defaultProps`

- 用一个 class 起到了接口和设置初始值两个作用，方便统一管理，减少了代码量。
  - 可以`同时设置类型和默认值`

```ts
// props的类型
export default class Props {
  public speed: number = 500;
  public height: number = 160;
}

function Home(props: Props) {}

Home.defaultProps = new Props();
```

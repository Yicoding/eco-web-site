---
toc: menu
---

# 装饰器

- 装饰器(decorator)的主要作用是给一个已有的方法或类`扩展`一些新的行为，而`不`是去直接`修改`它`本身`

- 在 ES2015 进入 Class 之后,当我们需要在多个不同的类之间共享或者扩展一些方法或行为的时候，代码会变得错综复杂，极其不优雅，这也就是装饰器被提出的一个很重要的原因

- 装饰器本质上是一个函数,@expression 的形式其实是一个语法糖, expression 求值后必须也是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入
- JavaScript 中的 Class 其实也是一个语法糖

## 1.类装饰器

```ts
function addAge(constructor: Function) {
  constructor.prototype.age = 18;
}

@addAge
class Person {
  name: string;
  age!: number;
  constructor() {
    this.name = 'xiaomuzhu';
  }
}

let person = new Person();

console.log(person.age); // 18
```

**等同于**

```ts
Person = addAge(function Person() {
  //  ...
});
```

- 当装饰器作为修饰类的时候，会把`构造器`传递进去。 constructor.prototype.age 就是在每一个实例化对象上面添加一个 age 值

## 2.属性/方法装饰器

- Class 的属性/方法也可以被装饰

```ts
// 声明装饰器修饰方法/属性
function method(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log(target);
  console.log('prop ' + propertyKey);
  console.log('desc ' + JSON.stringify(descriptor) + '\n\n');
  descriptor.writable = false;
}

class Person {
  name: string;
  constructor() {
    this.name = 'xiaomuzhu';
  }

  @method
  say() {
    return 'instance method';
  }
  // Person { say: [Function] }
  // prop say
  // desc {"writable":true,"enumerable":true,"configurable":true}

  @method
  static run() {
    return 'static method';
  }
  // [Function: Person] { run: [Function] }
  // prop run
  // desc {"writable":true,"enumerable":true,"configurable":true}
}

const xmz = new Person();

// 修改实例方法say
xmz.say = function () {
  // TypeError: Cannot assign to read only property 'say' of object '#<Person>'
  return 'edit';
};

// 打印结果,检查是否成功修改实例方法
console.log(xmz.say());
```

## 3.高级装饰器

### 1）参数装饰器

- 用于修饰参数的装饰器

```ts
function logParameter(target: Object, propertyKey: string, index: number) {
  console.log(target, propertyKey, index);
}

class Person {
  greet(@logParameter message: string, @logParameter name: string): string {
    return `${message} ${name}`;
  }
}
const p = new Person();
p.greet('hello', 'xiaomuzhu');

// Person { greet: [Function] } greet 1
// Person { greet: [Function] } greet 0
```

- 需要三个参数 target、propertyKey、index:

  - `target` —— 当前对象的原型，也就是说，假设 Person 是当前对象，那么当前对象 target 的原型就是 Person.prototype
  - `propertyKey` —— 参数的名称，上例中指的就是 greet
  - `index` —— 参数数组中的位置，比如上例中参数 name 的位置是 1, message 的位置为 0

- 装饰器是可以`修改被修饰者的行为的`

- 参数装饰器可以提供信息，给比如给类原型添加了一个新的属性，属性中包含一系列信息，这些信息就被成为「元数据」，然后我们就可以使用另外一个装饰器来读取「元数据」

### 2）装饰器工厂

- 装饰器工厂就是一个简单的函数，它返回一种类型的装饰器

- 装饰器通常是用于抽象和重用

- 分别把一个类中的部分属性、类本身、方法、参数的名称打印出来

```ts
function log(...args: any[]) {
  switch (args.length) {
    case 1:
      return logClass.apply(this, args);
    case 2:
      return logProperty.apply(this, args);
    case 3:
      if (typeof args[2] === 'number') {
        return logParameter.apply(this, args);
      }
      return logMethod.apply(this, args);
    default:
      throw new Error('Decorators are not valid here!');
  }
}

@log
class Person {
  @log
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @log
  public greet(@log message: string): string {
    return `${this.name} say: ${message}`;
  }
}
```

### 3）装饰器顺序

- 多个装饰器可以同时应用到一个声明上

**1.书写在同一行上**

```ts
@f @g x
```

**2.书写在多行上**

```ts
@f
@g
x
```

- 在 TypeScript 里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
  - 由上至下依次对装饰器表达式求值
  - 求值的结果会被当作函数，由下至上依次调用

```ts
function f() {
  console.log('f(): evaluated');
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('f(): called');
  };
}

function g() {
  console.log('g(): evaluated');
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('g(): called');
  };
}

class C {
  @f()
  @g()
  method() {}
}

// 依次输出
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
```

- 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员
- 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员
- 参数装饰器应用到构造函数
- 类装饰器应用到类

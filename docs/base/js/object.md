---
toc: menu
---

# 面向对象编程

## 1.面向对象编程

### 1）特点

- 1.封装：让使用对象的人不考虑内部实现，只考虑功能使用把内部的代码保护起来，只留出一些 api 接口供用户使用

- 2.`继承`：就是为了代码的复用，从父类上继承出一些方法和属性，子类也有自己的一些属性

- 3.多态：就是通过对传递的参数判断来执行逻辑，即可实现一种多态处理机制

### 2）作用

在比较复杂的问题面前，或者参与方较多的时候，面向对象的编程思想可以很好的简化问题，并且能够更好的扩展和维护

## 2.JS 的面向对象

### 1）内置对象

- 对象包括：方法和属性

- 内置对象：Object、Array、Date、Function、RegExp

### 2）创建对象

**1.普通方式和工厂模式**

```js
// 普通方式
const person = new Object();
person.name = 'person';
person.getName = function () {
  return this.name;
};

// 工厂模式
function createObject() {
  const obj = new Object();
  obj.name = 'person';
  obj.getName = function () {
    return this.name;
  };
  return obj;
}

var person = createObject();
```

**2.构造函数**

自定义构造函数，使用构造函数添加对象属性和方法，通过 new 创建对象

- 优点：即使改变了某一个对象的属性或方法，不会影响其他的对象（因为每一个对象都是复制的一份）

```js
function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const person1 = new Person('person1');
const person2 = new Person('person2');
person1.getName === person2.getName; // false
```

- 缺点：通过 this 添加的属性和方法总是指向当前对象的，所以在实例化的时候，通过 this 添加的属性和方法都会在内存中复制一份，这样就会造成内存的浪费

- 静态属性：绑定在构造函数上的属性方法，需要通过构造函数访问

```js
function Person(name) {
  this.name = name;
  if (!Person.num) {
    Person.num = 0;
  }
  Person.num++;
}

const person1 = new Person('person1');
console.log(Person.num); // 1
const person2 = new Person('person2');
console.log(Person.num); // 2
```

**3.原型继承**

- 通过原型对象添加属性和方法：原型继承的方法并不是自身的，我们要在原型链上一层一层的查找

- 优点：只在内存中创建一次，实例化的对象都会指向这个 prototype 对象

```js
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.setName = function (name) {
  this.name = name;
};

// 添加多个原型链方法可以简化写法，重写整个原型对象（注意对象覆盖问题）
Person.prototype = {
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
};

const person1 = new Person('person1');
const person2 = new Person('person2');
```

## 3.原型和原型链

### 1）关系图

![image](images/js/2.png)

原型的 constructor 属性指向构造函数，构造函数又通过 prototype 属性指回原型

```js
function Player(color) {
  this.color = color;
}

Player.prototype.sayColor = function () {
  console.log(this.color);
};

var whitePlayer = new Player('white');
var blackPlayer = new Player('black');

whitePlayer.__proto__ === Player.prototype; // true
(Player.prototype.constructor === whitePlayer.__proto__.constructor) === Player; // true

whitePlayer.__proto__.__proto__ === Object.prototype; // true

(whitePlayer.__proto__.__proto__.constructor ===
  Object.prototype.constructor) ===
  Object; // true

whitePlayer.__proto__.__proto__.__proto__ === null; // true
```

- 1.Object 是所有对象的爸爸，所有对象都可以通过 `__proto__` 找到它

- 2.Function 是所有函数的爸爸，所有函数都可以通过 `__proto__` 找到它

- 3.函数的 prototype 是一个对象

- 4.对象的 `__proto__` 属性指向原型， `__proto__` 将对象和原型连接起来组成了原型链

### 2）原型 prototype

**1.定义**

- Player.`prototype` 就是原型，它`是`一个`对象`，我们也称它为`原型对象`

**2.作用**

- 原型的作用，就是`共享方法`。

- 我们通过 Player.prototype.method 可以共享方法，不会反应开辟空间存储方法。

**3.原型中 this 的指向**

- 原型中 this 的指向是实例

**4.获取对象的原型**

- 可以通过非标准属性 \_\_proto\_\_ 来访问一个对象的原型

- \_\_proto\_\_ 是非标准属性，如果要访问一个对象的原型，建议使用 ES6 新增的 Reflect.getPrototypeOf 或者 Object.`getPrototypeOf`() 方法

**5.修改对象的原型**

- 可以通过对 \_\_proto\_\_ 属性直接赋值的方式修改对象的原型

- 更推荐的做法是使用使用 ES6 的 Reflect.setPrototypeOf 或 Object.`setPrototypeOf`

**6.判断对象的原型**

- Object.prototype.`isPrototypeOf` 用于判断一个对象是否存在于另一个对象的原型链上

### 3）原型链 \_\_proto\_\_

**1.定义**

- 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。这样一条通过[[prototype]]和 prototype 去连接的对象的链条，就是原型链

**2.作用**

- 对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有\_\_proto\_\_原型的存在

- 每个对象都有\_\_proto\_\_原型的存在

**3.原型查找方式**

```js
function Star(name) {
  this.name = name;

  // (1)首先看obj对象身上是否有dance方法，如果有，则执行对象身上的方法
  this.dance = function () {
    console.log(this.name + '1');
  };
}

// (2)如果没有dance方法，就去构造函数原型对象prototype身上去查找dance这个方法。
Star.prototype.dance = function () {
  console.log(this.name + '2');
};

// (3)如果再没有dance方法，就去Object原型对象prototype身上去查找dance这个方法。
Object.prototype.dance = function () {
  console.log(this.name + '3');
};
// (4)如果再没有，则会报错。
let obj = new Star('小红');
obj.dance(); // 小红1
```

### 4）构造函数(构造器)constructor

**1.定义**

- 原型的构造器指向构造函数

- 函数本身就是构造函数

**2.构造函数分为 实例成员 和 静态成员**

- **实例成员**： 实例成员就是在构造函数内部，通过 this 添加的成员。实例成员只能通过实例化的对象来访问

- **静态成员**： 在构造函数本身上添加的成员，只能通过构造函数来访问

```js
function Person(name) {
  // 实例成员
  this.name = name;
}
// 静态成员
Person.age = 20;

const person = new Person('person');
console.log(person.name); // person
console.log(person.age); // undefined   实例无法访问sex属性

console.log(Person.name); // Person     通过构造函数无法直接访问实例成员
console.log(Person.age); // 20          通过构造函数可直接访问静态成员
```

**3.通过构造函数创建对象**

该过程也称作实例化

### 5）原型污染

- 原型污染是指：攻击者通过某种手段修改 JavaScript 对象的原型

**解决方案**

代码很简单，只要是碰到有 constructor 或者 **proto** 这样的敏感词汇，就直接退出执行了

- 1.使用 Object.create(null)， 方法创建一个原型为 null 的新对象，这样无论对 原型做怎样的扩展都不会生效

- 2.使用 Object.freeze(obj) 冻结指定对象，使之不能被修改属性，成为不可扩展对象

- 3.建立 JSON schema ，在解析用户输入内容时，通过 JSON schema 过滤敏感键名

- 4.规避不安全的递归性合并。这一点类似 lodash 修复手段，完善了合并操作的安全性，对敏感键名跳过处理

## 4.继承

![image](images/base/4.png)

### 1）原型链继承

**1.原理**

- 将父类的实例作为子类的原型

- 构造函数、原型和实例之间的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个原型对象的指针

```js
// 父对象构造函数
function Parent(name) {
  this.name = 'Parent';
}
// 父对象原型对象
Parent.prototype.sayName = function () {
  console.log(this.name);
};

// 子对象构造函数
function Child() {}
// 子对象原型对象指向父对象实例，完成继承
Child.prototype = new Parent();
// 子对象构造函数更新为自身
Child.prototype.constructor = Child;

var child = new Child();
child.sayName(); // Parent
```

**2.优点**

- 父类方法可以复用

- 在原型链上添加对象和方法，创建的对象，原型链上继承的方法和属性不是自身的，通过原型链查找都会指向原型对象，节省内存

**3.缺点**

- 如果有属性是引用类型的，一旦某个实例修改了这个属性，所有实例都会受到影响

- 子类实例不能向父类传参

### 2）构造函数继承

**1.原理**

- 在子类构造函数中调用父类构造函数，可以在子类构造函数中使用 call()和 apply()方法

- 盗用构造函数技巧：在子类构造函数中调用父类构造函数，使用 apply 和 call 方法以新创建的对象为上下文执行构造函数

```js
function Parent() {
  this.actions = ['eat', 'run'];
  this.name = 'parentName';
}

function Child() {
  Parent.call(this); // 子类构造函数调用父类构造函数
}

const child1 = new Child();
const child2 = new Child();

child1.actions.pop();

console.log(child1.actions); // ['eat']
console.log(child2.actions); // ['eat', 'run']
```

**2.可以传递参数**

相比于原型链继承，盗用构造函数的一个优点在于可以在子类构造函数中像父类构造函数传递参数

```js
function Parent() {
  this.actions = ['eat', 'run'];
  this.name = 'parentName';
}

function Child(id, name, actions) {
  Parent.call(this, name); // 如果想直接传多个参数, 可以Parent.apply(this, Array.from(arguments).slice(1));
  this.id = id;
}

const child1 = new Child(1, 'c1', ['eat']);
const child2 = new Child(2, 'c2', ['sing', 'jump', 'rap']);

console.log(child1.name); // { actions: [ 'eat' ], name: 'c1', id: 1 }
console.log(child2.name); // { actions: [ 'sing', 'jump', 'rap' ], name: 'c2', id: 2 }
```

**3.缺点**

- 属性或者方法想被继承的话，只能在构造函数中定义

- 方法在构造函数内定义了，那么每次创建实例都会创建一遍方法，多占一块内存

```js
function Parent(name, actions) {
  this.actions = actions;
  this.name = name;
  this.eat = function () {
    console.log(`${name} - eat`);
  };
}

function Child(id) {
  Parent.apply(this, Array.prototype.slice.call(arguments, 1));
  this.id = id;
}

const child1 = new Child(1, 'c1', ['eat']);
const child2 = new Child(2, 'c2', ['sing', 'jump', 'rap']);

console.log(child1.eat === child2.eat); // false
```

### 3）组合继承（前两种组合）

**1.原理**

- 组合继承综合了原型链继承和盗用构造函数继承(构造函数继承)，将两者的优点结合了起来

- 基本的思路就是使用原型链继承原型上的属性和方法，而通过构造函数继承实例属性，这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性

```js
function Parent(name, actions) {
  this.name = name;
  this.actions = actions;
}

Parent.prototype.eat = function () {
  console.log(`${this.name} - eat`);
};

//使用构造函数继承实例属性
function Child(id) {
  Parent.apply(this, Array.from(arguments).slice(1));
  this.id = id;
}
//使用原型链继承继承原型上的属性和方法
Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child1 = new Child(1, 'c1', ['hahahahahhah']);
const child2 = new Child(2, 'c2', ['xixixixixixx']);

child1.eat(); // c1 - eat
child2.eat(); // c2 - eat
console.log(child1.name === child2.name); // false
console.log(child1.eat === child2.eat); // true
```

**2.优点**

- 父类的方法可以复用

- 可以在 Child 构造函数中向 Parent 构造函数中传参

- 父类构造函数中的引用属性不会被共享

**3.缺点**

调用了两次构造函数，做了重复的操作，一次是在创建子类原型时调用，另一次是在子类构造函数中调用

- Parent.apply(this, Array.from(arguments).slice(1))

- Child.prototype = new Parent()

### 4）原型式继承

**1.原理**

- 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型

```js
function objectCopy(obj) {
  function Fun() {}
  Fun.prototype = obj;
  return new Fun();
}

let person = {
  name: 'yhd',
  age: 18,
  friends: ['jack', 'tom', 'rose'],
  sayName: function () {
    console.log(this.name);
  },
};

let person1 = objectCopy(person);
person1.name = 'wxb';
person1.friends.push('lily');
person1.sayName(); // wxb

let person2 = objectCopy(person);
person2.name = 'gsr';
person2.friends.push('kobe');
person2.sayName(); // "gsr"

console.log(person.friends); // ["jack", "tom", "rose", "lily", "kobe"]
```

```js
// 使用Object.create
let parent4 = {
  name: 'parent4',
  friends: ['p1', 'p2', 'p3'],
  getName: function () {
    return this.name;
  },
};

let person4 = Object.create(parent4);
person4.name = 'tom';
person4.friends.push('jerry');

let person5 = Object.create(parent4);
person5.friends.push('lucy');

console.log(person4.name);
console.log(person4.name === person4.getName());
console.log(person5.name);
console.log(person4.friends);
console.log(person5.friends);
```

**2.优点**

- 父类方法可复用

**3.缺点**

- 父类的引用会被所有子类所共享

- 子类实例不能向父类传参

### 5）寄生式继承

**1.原理**

- 在原型式继承的基础上，增强对象，返回构造函数

```js
function objectCopy(obj) {
  function Fun() {}
  Fun.prototype = obj;
  return new Fun();
}

function createAnother(original) {
  let clone = objectCopy(original);
  // 使用Object.create
  // let clone = Object.create(original);
  clone.getName = function () {
    console.log(this.name);
  };
  return clone;
}

let person = {
  name: 'yhd',
  friends: ['rose', 'tom', 'jack'],
};

let person1 = createAnother(person);
person1.friends.push('lily');
console.log(person1.friends);
person1.getName(); // yhd

let person2 = createAnother(person);
console.log(person2.friends); // ["rose", "tom", "jack", "lily"]
```

**2.优点**

- 父类方法可复用

**3.缺点（同原型式继承）**

- 父类的引用会被所有子类所共享

- 子类实例不能向父类传参

### 6）寄生组合式继承(最佳)

**1.原理**

- 结合借用构造函数传递参数和寄生模式实现继承

- 组合继承的优化，通过 Child.prototype 间接访问到 Parent.prototype，减少一次构造函数执行

```js
function clone(parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent6() {
  this.name = 'parent6';
  this.play = [1, 2, 3];
}

Parent6.prototype.getName = function () {
  return this.name;
};

function Child6() {
  Parent6.call(this);
  this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
  return this.friends;
};

let person6 = new Child6();
console.log(person6);
console.log(person6.getName());
console.log(person6.getFriends());
```

**2.优点**

- 1.只调用一次父类构造函数

- 2.Child 可以向 Parent 传参

- 3.父类方法可以复用

- 4.父类的引用属性不会被共享

**寄生式组合继承可以算是引用类型继承的最佳模式**

### 7）class 类继承

**1.两种定义方式**

- 类申明：class Person {}

- 类表达式：const Person = class {}

**2.构成**

- 构造函数方法：类构造函数与普通构造函数的主要区别是，调用类的构造函数必须使用 new 操作符，而普通函数如果不使用 new 调用，那么就会以全局 this（通常是 window）作为内部对象

- 实例方法

- 获取函数、设置函数

- 静态类方法

```js
class Parent {
  name_ = null;
  constructor() {
    this.name = 'aaa';
  }
  getName() {
    return this.name;
  }
  static get() {
    return 'good';
  }
  // 支持获取和设置访问器
  // 使用get和set关键字对某个属性设置存值函数和取值函数，拦截该函数的存取行为
  set name(value) {
    this.name_ = value;
  }
  get name() {
    return this.name_;
  }
}
Parent.get(); //good
// 通过类继承
class Child extends Parent {
  constructor() {
    super();
  }
}
const p1 = new Child();
p1.getName();
```

**3.extends 继承，其实现和寄生组合式继承方式一样**

```js
function _inherits(subType, superType) {
  // 创建对象，创建父类原型的一个副本
  // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  // 指定对象，将新创建的对象赋值给子类的原型
  subType.prototype = Object.create(superType && superType.prototype, {
    constructor: {
      value: subType,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });

  if (superType) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subType, superType)
      : (subType.__proto__ = superType);
  }
}
```

## 5.ES5 继承和 ES6 继承的区别

- ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到 this 上（Parent.call(this)）

- ES6 的继承有所不同，实质上是先创建父类的实例对象 this，然后再用子类的构造函数修改 this。因为子类没有自己的 this 对象，所以必须先调用父类的 super()方法，否则新建实例报错

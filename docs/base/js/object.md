---
toc: menu
---

# 面向对象编程

## 1.面向对象编程

### 1）特点

- 封装：让使用对象的人不考虑内部实现，只考虑功能使用把内部的代码保护起来，只留出一些 api 接口供用户使用

- 继承：就是为了代码的复用，从父类上继承出一些方法和属性，子类也有自己的一些属性

- 多态：就是通过对传递的参数判断来执行逻辑，即可实现一种多态处理机制

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

## 4.继承

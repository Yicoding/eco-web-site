**1.构造器**

- 当新建对象的内存被分配后，用来初始化该对象的特殊函数，就叫做构造器

```js
function User(name, age, career, word) {
  this.name = name; // 姓名
  this.age = age; // 年龄
  this.career = career; // 工种
  this.word = word; // 工作内容
}
```

- User，就是一个构造器

  - 这里使用了 ES5 `构造函数`的写法

  - ES6 中的 class 其实本质上还是函数，`class 语法只是语法糖`，`本质`是`构造函数`

- `不变`的是 name、age、career 的属性

- `变`的是 name、age、career 的值

**2.简单工厂模式**

```js
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug'];
      break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更'];
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户'];
      break;
    case 'xxx':
    // 其它工种的职责分配
    // ...
  }
  return new User(name, age, career, work);
}

// 调用
Factory('Bob', 20, 'boss'); // {name: 'Bob', age: 20, career: 'boss', work: ['喝茶', '看报', '见客户']}
```

- 工厂模式其实就是将`创建对象的过程`单独`封装`

---
toc: menu
---

# 深浅拷贝

## 1.为什么要区分深浅拷贝

浅复制只复制一层对象的属性，而深复制则递归复制了所有层级

## 2.浅拷贝

### 1）数组

只能拷贝一层数组，不能拷贝数组嵌套对象或数组的情况

- 1.slice

  ```js
  const arr = [1, 2, 3];
  const newArr = arr.slice();
  ```

- 2.concat

  ```js
  const arr = [1, 2, 3];
  const newArr = arr.concat();
  ```

- 3.ES6 扩展运算符...

  ```js
  const arr = [1, 2, 3];
  const newArr = [...a];
  ```

### 2）对象

只能拷贝一层对象，不能拷贝深层对象

- 1.for in

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = {};
  for (var k in obj) {
    newObj[k] = obj[k];
  }
  ```

- 2.Object.assign

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = Object.assign({}, obj);
  ```

- 3.ES6 扩展运算符...

  ```js
  const obj = { name: 'one', age: 20 };
  const newObj = { ...obj };
  ```

## 3.深拷贝

### 1）JSON.stringify 暴力实现

```js
const arr = [1, { name: 'name' }, [2, 3]];
const newArr = JSON.parse(JSON.stringify(arr));
newArr[0] = 'first';
newArr[1].name = 'Lucy';
newArr[2][1] = 'last';

console.log(arr); // [1, { name: 'name' }, [2, 3]];
console.log(newArr); // ['first', { name: 'Lucy' }, [2, 'last']];
```

存在的问题：

- 1、会忽略 undefined

- 2、会忽略 symbol

- 3、不能序列化函数

- 4、不能解决循环引用的对象

- 5、不能正确处理 new Date()

- 6、不能处理正则

- 7、不能处理 new Error()

```js
// 克隆不了
const obj = {
  name: 'obj',
  b: Symbol('b'),
  c: undefined,
  d: function () {},
};
const newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj); // {name: 'obj'}
```

### 2）\*递归浅拷贝

- 一般是工具库中的深拷贝函数实现方式，比如 loadash 中的 cloneDeep

- 缺点：对于庞大的数据来说性能并不好，因为需要把整个对象都遍历一遍

**1.简易基础版**

```js
// 简易基础版
const deepClone = (obj) => {
  // 判断是对象和函数
  const isObject = (o) => {
    return typeof o === 'object' && o !== null;
  };
  // 原始类型直接返回
  if (!isObject(obj)) {
    return obj;
  }
  // 判断是否为数组
  const isArray = Array.isArray(obj);
  const newObj = isArray ? [...obj] : { ...obj }; // 浅拷贝第一层
  Reflect.ownKeys(newObj).forEach((key) => {
    // 遍历第一层
    // 判断第一层是否为对象，不为对象直接返回，是对象递归调用
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });
  return newObj;
};
const obj = {
  name: 'obj',
  b: Symbol('b'),
  c: undefined,
  d: function () {},
};
const newObj = deepClone(obj);
console.log(newObj); // {name: 'obj', b: Symbol('b'), c: undefined, d: function () {}}
```

**2.考虑到复制 Symbol**

```js
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}

var obj1 = {
  a: 1,
  b: { a: 2 },
};
var obj2 = deepClone(obj1);
console.log(obj1); // {a: 1, b: {a: 2}}}
```

---
toc: menu
---

# ES9(ES2018)

![image](images/es/5.png)

## 1.字符串扩展

### 放松对标签模板里字符串转义的限制

- 遇到不合法的字符串转义返回 undefined，并且从 raw 上可获取原字符串

```js
function latex(str) {
  return { cooked: str[0], raw: str.raw[0] };
}

latex`\unicode`; // { cooked: undefined, raw: "\\unicode" }
```

## 2.对象扩展-对象扩展操作符

- 转换对象为用逗号分隔的参数序列({ ...obj }，相当于 rest/spread 参数的逆运算)

### 使用场景

- 克隆对象：`const obj = { __proto__: Object.getPrototypeOf(obj1), ...obj1 }`
- 合并对象：`const obj = { ...obj1, ...obj2 }`
- 转换字符串为对象：`{ ..."hello" }`
- 转换数组为对象：`{ ...[1, 2] }`
- 与对象解构赋值结合：`const { x, ...rest/spread } = { x: 1, y: 2, z: 3 }`(不能复制继承自原型对象的属性)
- 修改现有对象部分属性：`const obj = { x: 1, ...{ x: 2 } }`

## 3.正则扩展

### 1）s 修饰符

- dotAll 模式修饰符，使`.`匹配任意单个字符(`dotAll模式`)

### 2）dotAll

- 是否设置 s 修饰符

### 3）后行断言

- `x` 只有在 `y` 后才匹配

### 4）后行否定断言

- `x` 只有不在 `y` 后才匹配

### 5）Unicode 属性转义

- 匹配符合 `Unicode 某种属性`的所有字符

  - 正向匹配：`\p{PropRule}`
  - 反向匹配：`\P{PropRule}`
  - 限制：`\p{...}`和`\P{...}`只对 `Unicode` 字符有效，使用时需加上 `u 修饰符`

### 6）具名组匹配

- 为每组匹配指定名字(`?<GroupName>`)

  - 形式：`str.exec().groups.GroupName`

  - 解构赋值替换
    - 声明：`const time = "2017-09-11"`、`const regexp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u`
    - 匹配：`time.replace(regexp, "$<day>/$<month>/$<year>")`

## 4.Promise-finally

- finally()方法会返回一个 Promise，当 promise 的状态变更，不管是变成 rejected 或者 fulfilled，最终都会执行 finally()的回调。

```js
new Promise((resolve, reject) => {
  resolve('success');
})
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
  )
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('结束');
  });
```

## 5.Async- 异步迭代器(for-await-of)

- 循环等待每个 Promise 对象变为 resolved 状态才进入下一步

### 1）现实场景

```js
function fn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`);
    }, time);
  });
}

fn(3000).then((res) => console.log(res));
fn(1000).then((res) => console.log(res));
fn(2000).then((res) => console.log(res));

// 结果是

// 1000毫秒后我成功啦！！！
// 2000毫秒后我成功啦！！！
// 3000毫秒后我成功啦！！！
```

### 2）目标场景

```js
function fn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`);
    }, time);
  });
}

async function asyncFn() {
  const arr = [fn(3000), fn(1000), fn(1000), fn(2000), fn(500)];
  for await (let x of arr) {
    console.log(x);
  }
}

asyncFn();

// 3000毫秒后我成功啦！！！
// 1000毫秒后我成功啦！！！
// 1000毫秒后我成功啦！！！
// 2000毫秒后我成功啦！！！
// 500毫秒后我成功啦！！！
```

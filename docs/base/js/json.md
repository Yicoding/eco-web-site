---
toc: menu
---

# JSON.stringify 实现

- JSON 对象包含两个方法：

  - 一是用于解析成 JSON 对象的 parse()

  - 二是用于将对象转换为 JSON 字符串方法的 stringify()

## 1.JSON.parse

> JSON.parse(text[, reviver]);

- JSON.parse 方法用来解析 JSON 字符串

- 该方法有两个参数：第一个参数是需要解析处理的 JSON 字符串，第二个参数是可选参数提供可选的  reviver  函数，用在返回之前对所得到的对象执行变换操作

```js
const json = '{"result":true, "count":2}';
const obj = JSON.parse(json);
console.log(obj.count); // 2
console.log(obj.result); // true

/* 带第二个参数的情况 */
JSON.parse('{"p": 5}', function (k, v) {
  if (k === '') return v; // 如果k不是空，
  return v * 2; // 就将属性值变为原来的2倍返回
}); // { p: 10 }
```

## 2.JSON.stringify

> JSON.stringify(value[, replacer [, space]])

### 1）使用

- JSON.stringify 方法是将一个 JavaScript 对象或值转换为 JSON 字符串

- 有三个参数：

  - 第一个参数传入的是要转换的对象

  - 第二个是一个 replacer 函数，比如指定的 replacer 是数组，则可选择性地仅处理包含数组指定的属性

  - 第三个参数用来控制结果字符串里面的间距

```js
JSON.stringify({ x: 1, y: 2 });
// "{"x":1,"y":2}"
JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] });
// "{"x":[10,null,null,null]}"
/* 第二个参数的例子 */
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}
var foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 4,
  transport: 'car',
  month: 7,
};
var jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);
// "{"week":4,"month":7}"
/* 第三个参数的例子 */
JSON.stringify({ a: 2 }, null, ' ');
/* "{
 "a": 2
}"*/
JSON.stringify({ a: 2 }, null, '');
// "{"a":2}"
```

### 2）实现

```js
function jsonStringify(data) {
  const type = typeof data;

  if (type !== 'object') {
    let result = data;
    if (Number.isNaN(data) || data === Infinity || data === -Infinity) {
      result = 'null';
    } else if (['function', 'undefined', 'symbol'].includes(type)) {
      return undefined;
    } else if (type === 'string') {
      result = `"${data}"`;
    }
    return String(result);
  } else if (type === 'object') {
    if (data === null) {
      return 'null';
    } else if (data.toJSON && typeof data.toJSON === 'function') {
      return jsonStringify(data.toJSON());
    } else if (data instanceof Array) {
      let result = [];
      data.forEach((item, index) => {
        if (['function', 'undefined', 'symbol'].includes(typeof item)) {
          result[index] = 'null';
        } else {
          result[index] = jsonStringify(item);
        }
      });
      result = `[${result}]`;
      return result.replace(/'/g, '"');
    } else {
      let result = [];
      Object.keys(data).forEach((item, index) => {
        const typeItem = typeof item;
        if (typeItem !== 'symbol') {
          if (!['function', 'undefined', 'symbol'].includes(data[item])) {
            result.push(`"${item}":${jsonStringify(data[item])}`);
          }
        }
      });
      return `{${result}}`.replace(/'/g, '"');
    }
  }
}
```

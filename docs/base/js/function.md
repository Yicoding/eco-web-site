---
toc: menu
---

# 函数

## Number()

> 转换成数值

```js
Number(true); // 1
Number(false); // 0
Number(10); // 10
Number(null); // 0
Number(undefined); // NaN
Number(); // 0
Number(''); // 0
Number('00012'); // 12
Number('hello'); // NaN
```

## parseInt()

> 取整

```
parseInt 第二个参数: 转换时使用的基数(即多少进制)
  重点: parseInt(string,radix)
  radix：解析字符串的基数，基数规则如下
    1）区间范围介于 2~36 之间
    2）当参数为 0，parseInt() 会根据十进制来解析
```

```js
parseInt(); // NaN
parseInt(''); // NaN
parseInt(null); // NaN
parseInt(undefined); // NaN
parseInt(true); // NaN
parseInt(false); // NaN
parseInt('123blue'); // 123
parseInt('a123blue'); // NaN
parseInt(22.5); // 22

[1, 2, 3].map(parseInt); // [1, NaN, NaN]
// ===>
[1, 2, 3].map((item, index) => {
  return parseInt(item, index);
});
// ===>
parseInt(1, 0); // 1
parseInt(2, 1); // NaN(1不在parseInt第二个参数解析区间内)
parseInt(3, 2); // Nan(用2进制来解析，应以 0 和 1 开头，所以结果为 NaN)

// parseFloat
[1, 2, 3].map(parseFloat); // [1,2,3]
```

## parseFloat()

> 取浮点数

```js
parseFloat(); // NaN
parseFloat(''); // NaN
parseFloat(null); // NaN
parseFloat(undefined); // NaN
parseFloat(true); // NaN
parseFloat(false); // NaN
parseFloat('123blue'); // 123
parseFloat('22.5'); // 22.5
parseFloat('22.5.2'); // 22.5
parseFloat('0901.5'); // 901.5
```

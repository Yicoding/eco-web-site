---
toc: menu
---

# 类型转换

## 1.强制类型转换

- 强制类型转换方式包括 Number()、parseInt()、parseFloat()、toString()、String()、Boolean()

### 1）Number() 方法的强制转换规则

- 如果是布尔值，true 和 false 分别被转换为 1 和 0；

- 如果是数字，返回自身；

- 如果是 null，返回 0；

- 如果是 undefined，返回 NaN；

- 如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为 0；如果不是以上格式的字符串，均返回 NaN；

- 如果是 Symbol，抛出错误；

- 如果是对象，并且部署了 [Symbol.toPrimitive] ，那么调用此方法，否则调用对象的 valueOf() 方法，然后依据前面的规则转换返回的值；如果转换的结果是 NaN ，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值

```js
Number(true); // 1

Number(false); // 0

Number('0111'); // 111

Number(null); // 0

Number(''); // 0

Number('1a'); // NaN

Number(-0x11); // -17

Number('0X11'); // 17
```

### 2）Boolean() 方法的强制转换规则

- 规则是：除了 undefined、 null、 false、 ''、 0（包括 +0，-0）、 NaN 转换出来是 false，其他都是 true

```js
Boolean(0); // false

Boolean(null); // false

Boolean(undefined); // false

Boolean(NaN); // false

Boolean(1); // true

Boolean(13); // true

Boolean('12'); // true
```

## 2.隐式类型转换

- 凡是通过逻辑运算符 (&&、 ||、 !)、运算符 (+、-、\*、/)、关系操作符 (>、 <、 <= 、>=)、相等运算符 (==) 或者 if/while 条件的操作，如果遇到两个数据类型不一样的情况，都会出现隐式类型转换

### 1）'==' 的隐式类型转换规则

- 如果类型相同，无须进行类型转换

- 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false

- 如果其中一个是 Symbol 类型，那么返回 false

- 两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number

- 如果一个操作值是 boolean，那么转换成 number

- 如果一个操作值为 object 且另一方为 string、number 或者 symbol，就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）

```js
null == undefined; // true  规则2

null == 0; // false 规则2

'' == null; // false 规则2

'' == 0; // true  规则4 字符串转隐式转换成Number之后再对比

'123' == 123; // true  规则4 字符串转隐式转换成Number之后再对比

0 == false; // true  e规则 布尔型隐式转换成Number之后再对比

1 == true; // true  e规则 布尔型隐式转换成Number之后再对比

var a = {
  value: 0,

  valueOf: function () {
    this.value++;

    return this.value;
  },
};

// 注意这里a又可以等于1、2、3

console.log(a == 1 && a == 2 && a == 3); //true f规则 Object隐式转换

// 注：但是执行过3遍之后，再重新执行a==3或之前的数字就是false，因为value已经加上去了，这里需要注意一下
```

### 2）'+' 的隐式类型转换规则

- 1.仅当 '+' 号两边都是数字时，进行的是加法运算

- 2.如果两边都是字符串，则直接拼接，无须进行隐式类型转换

- 3.如果其中有一个是字符串，另外一个是 undefined、null 或布尔型，则调用 toString() 方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级，然后再进行拼接

- 4.如果其中有一个是数字，另外一个是 undefined、null、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则

- 5.如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接

```js
1 + 2; // 3  常规情况

'1' + '2'; // '12' 常规情况

// 下面看一下特殊情况

'1' + undefined; // "1undefined" 规则3，undefined转换字符串

'1' + null; // "1null" 规则3，null转换字符串

'1' + true; // "1true" 规则3，true转换字符串

'1' + 1n; // '11' 比较特殊字符串和BigInt相加，BigInt转换为字符串

1 + undefined; // NaN  规则4，undefined转换数字相加NaN

1 + null; // 1    规则4，null转换为0

1 + true; // 2    规则4，true转换为1，二者相加为2

1 + 1n; // 错误  不能把BigInt和Number类型直接混合相加

'1' + 3; // '13' 规则5，字符串拼接
```

### 3）Object 的转换规则

- 对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

  - 1.如果部署了 Symbol.toPrimitive 方法，优先调用再返回

  - 2.调用 valueOf()，如果转换为基础类型，则返回

  - 3.调用 toString()，如果转换为基础类型，则返回

  - 4.如果都没有返回基础类型，会报错

  ```js
  var obj = {
    value: 1,

    valueOf() {
      return 2;
    },

    toString() {
      return '3';
    },

    [Symbol.toPrimitive]() {
      return 4;
    },
  };

  console.log(obj + 1); // 输出5

  // 因为有Symbol.toPrimitive，就优先执行这个；如果Symbol.toPrimitive这段代码删掉，则执行valueOf打印结果为3；如果valueOf也去掉，则调用toString返回'31'(字符串拼接)

  // 再看两个特殊的case：

  10 + {}; // "10[object Object]"，注意：{}会默认调用valueOf是{}，不是基础类型继续转换，调用toString，返回结果"[object Object]"，于是和10进行'+'运算，按照字符串拼接规则来，参考'+'的规则

  [1, 2, undefined, 4, 5] + 10; // "1,2,,4,510"，注意[1,2,undefined,4,5]会默认先调用valueOf结果还是这个数组，不是基础数据类型继续转换，也还是调用toString，返回"1,2,,4,5"，然后再和10进行运算，还是按照字符串拼接规则，参考'+'的第5条规则
  ```

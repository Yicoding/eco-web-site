---
toc: menu
---

# 正则 RegExp

用来描述规则的表达式

## 1.创建

```js
const regA = new RegExp('d', gim);
const regB = /\d/gim;
```

## 2.字符

### 1）单个字符

| 正则   | 特殊字符             | 记忆方式                                  |
| :----- | :------------------- | :---------------------------------------- |
| `\n`   | 换行符（\u000A）     | new line                                  |
| `\s`   | 任何 Unicode 空白符  | space                                     |
| `\f`   | 换页符（\u000C）     | form feed                                 |
| `\r`   | 回车符（\u000D）     | return                                    |
| `\t`   | 制表符（\u0009）     | tab                                       |
| `\v`   | 垂直制表符（\u000B） | vertical tab                              |
| `\o`   | NUL 字符（\u0000）   | -                                         |
| `[\b]` | 回退符               | backspace,之所以使用[]符号是避免和\b 重复 |

### 2）多个字符

| 正则 | 含义                                          | 记忆方式            |
| :--- | :-------------------------------------------- | :------------------ |
| `.`  | 除了换行符之外的任何字符                      | 句号,除了句子结束符 |
| `\d` | 单个数字, [0-9]                               | digit               |
| `\D` | 除了[0-9]                                     | not digit           |
| `\w` | 包括下划线在内的单个字符，[A-Za-z0-9_]        | word                |
| `\W` | 非单字字符                                    | not word            |
| `\s` | 匹配空白字符,包括空格、制表符、换页符和换行符 | space               |
| `\S` | 匹配非空白字符                                | not space           |

## 3.量词

| 正则     | 含义                             | 记忆方式 |
| :------- | :------------------------------- | :------- |
| `?`      | 出现零次或一次（最多出现一次）   | `0 或 1` |
| `*`      | 出现零次或者多次（任意次）       | `0+`     |
| `+`      | 出现一次或者多次（至少出现一次） | `1+`     |
| `{n}`    | 出现 n 次                        | `n`      |
| `{n, m}` | 出现 n 到 m 次                   | `n~m`    |
| `{n,}`   | 至少出现 n 次                    | `n+`     |

## 4.边界

| 正则  | 含义                          |
| :---- | :---------------------------- |
| `^`   | 匹配字符串的开头，以 xxx 开始 |
| `$`   | 匹配字符串的末尾，以 xxx 结束 |
| `[]`  | 范围类，例如[a-zA-Z0-9]       |
| `[^]` | 匹配字符范围以外的容          |
| `｜`  | 或                            |
| `\b`  | 单词边界                      |
| `\B`  | 非单词边界                    |
| `(.)` | 任意字符                      |

## 5.对象属性

| 正则 | 含义                                    |
| :--- | :-------------------------------------- |
| `g`  | golbal: 是否全文搜索，默认 false        |
| `i`  | ignore case: 是否大小写敏感，默认 false |
| `m`  | multiline: 多行搜索，默认 false         |
| `s`  | 与 m 相反，单行匹配                     |

```js
const reg = /\d/gim;
```

## 6.分组捕获 `()`

- 表达式在匹配时，表达式引擎会将小括号 "( )" 包含的表达式所匹配到的字符串记录（分组捕获）下来

- 在获取匹配结果的时候，小括号包含的表达式所匹配到的字符串`可以单独获取`

- 在 js 中正则匹配成功的字符串可以用`$1` 表示第一次匹配成功，`$3` 表示第三次匹配成功的字符，以此类推至`$99`）

```js
const reg = /(\d{4})-(\d{2})-(\d{2})/g;
const text = '2015-12-25';
const result = text.replace(reg, '$2/$3/$1');
console.log(result); // 12/25/2015
```

## 7.自身方法

| 方法      | 含义                                             |
| :-------- | :----------------------------------------------- |
| `test`    | 检索字符串中指定的值。返回 true 或 false         |
| `exec`    | 检索字符串中指定的值。返回找到的值，并确定其位置 |
| `compile` | 编译正则表达式（不常用）                         |

```js
const reg = /\d/gim;
const str = 'I am 20 years old';

console.log(reg.test(str)); // true
console.log(reg.exec(str)); // ['0', index: 6, input: 'I am 20 years old', groups: undefined]
```

exec

- 1.index: 声明匹配文本的第一个字符的位置
- 2.input: 存放被检索的字符串 String

## 8.支持正则表达式的 String 对象的方法

| 方法      | 含义                           |
| :-------- | :----------------------------- |
| `search`  | 检索与正则表达式相匹配的值     |
| `match`   | 找到一个或多个正则表达式的匹配 |
| `split`   | 把字符串分割为字符串数组       |
| `replace` | 替换与正则表达式匹配的子串     |

### 1）search

```js
const str = 'a1b2c3d4';
console.log(str.search('1')); // 1
console.log(str.search('10')); // -1
console.log(str.search(/b2/)); // 2
console.log(str.search(/\w\d/g)); // 0
console.log(str.search(/\w\d/g)); // 0 忽略'g',执行多次未返回不同结果
```

### 2）match

```js
const reg3 = /\d(\w)\d/;
const str = '1a2b3c4d5e';
const arr = str.match(reg3);
console.log(arr); // ['1a2', 'a', index: 0, input: '1a2b3c4d5e', groups: undefined]
```

### 3）split

```js
const str = 'a1b2c3d';
const arr = str.split(/\d/);
console.log(arr); //['a','b','c','d']
```

### 4）replace

`stringObject.replace(regexp/substr,replacement)`

- 1.String.prototype.replace(str,replaceStr)

- 2.String.prototype.replace(reg,replaceStr)

- 3.String.prototype.replace(reg,function);

```js
const str = 'a1b2c3d4e5';
const reg = /\d/g;
const arr = str.replace(reg, function (match, index, origin) {
  console.log(index); // 1 3 5 7 9
  return parseInt(match) + 1;
});
console.log(arr); // a2b3c4d5e6 把每次匹配到的结果+1替换
```

```js
const str = 'a1b2c3d4e5';
const reg = /(\d)(\w)(\d)/g;
const arr = str.replace(
  reg,
  function (match, group1, group2, group3, index, origin) {
    console.log(match); // 1b2   3d4
    return group1 + group3;
  },
);
console.log(arr); // a12c34e5  去除了每次匹配到的group2
```

## 9.常用

### 1）手机号

- 移动号段：134 135 136 137 138 139 147 148 150 151 152 157 158 159 172 178 182 183 184 187 188 198

- 联通号段：130 131 132 145 146 155 156 166 171 175 176 185 186

- 电信号段：133 149 153 173 174 177 180 181 189 199

- 虚拟运营商:170

```js
// 匹配所有手机号
/^((1)3(\d){9}$)|(^(1)4[5-9](\d){8}$)|(^(1)5[^4]{9}$)|(^(1)66(\d){8}$)|(^(1)7[0-8](\d){8}$)|(^(1)8(\d){9}$)|(^(1)9[8-9](\d){8}$)/.test(
  16961121989,
);
```

### 2）邮箱

- 126 规则：6~18 个字符，可使用字母、数字、下划线，需以字母开头

  ```js
  /((^([a-zA-Z]))(\w){5,17})@126.com$/.test('AA3333333333333333@126.com');
  ```

- 163 规则：6~18 个字符，可使用字母、数字、下划线，需以字母开头 允许手机号

  ```js
  /((^([a-zA-Z]))(\w){5,17}$)|(^(1)(3(\d){9}$)|(4[5-9](\d){8}$)|(5[^4]{9})|(66(\d){8})|(7[0-8](\d){8})|(8(\d){9}$)|(9[8-9](\d){8}$))@163.com$/.test(
    '15132221989@163.com',
  );
  ```

- qq 邮箱：数字 5-10 个数字

  ```js
  /(^[1-9]){5,10}@qq.com$/.test('115511@qq.com');
  ```

- 新浪邮箱规则：4-16 个字符，可使用英文小写，数字，下划线，下划线不可在首位

  ```js
  /^[a-z0-9]([a-z0-9_]{3,15})@sina.(com)|(cn)$/.test(
    '223dddddddaddw22@sina.com',
  );
  ```

- 搜狐邮箱规则：4-16 位，英文、数字、下划线，小写字母开头

  ```js
  /(^[a-z])(\w){3,15}@sohu.com$/.test('dddddddfw@sohu.com');
  ```

### 3）中文

```js
/^[\u4e00-\u9fa5]$/g.test('我');
```

### 4）国内邮政编码

```js
/^[0-9]{6}$/.test(100000);
```

### 5）用户名： `中文、A-Z a-z 0-9 _`

```js
/^[\w\u4e00-\u9fa5]{6,32}$/.test('晴天de_Wo');
```

### 6）密码： `A-Z a-z 0-9 _`

```js
/^\w{6,32}$/.test('2223336');
```

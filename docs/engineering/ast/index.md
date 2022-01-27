---
toc: menu
---

# AST

## 1.简介

- 抽象语法树（Abstract Syntax Tree，AST），是源代码语法结构的一种抽象表示，它以树状的形式表示编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。AST 运用广泛，比如：

  - 高级语言的编译、机器码的生成

  - 一些高级编辑器的错误提示、代码高亮、代码自动补全

  - 前端工具，例如 eslint、pretiier，对代码错误或风格的检查，babel、typescript 对代码的编译处理等

## 2.AST 转换流程

### 1）ast 生成流程

- 词法分析：也叫扫描（scanner），将整个代码字符串转换为令牌（tokens）流，令牌（tokens）看作是一个扁平的语法片段数组

- 语法分析：把一个令牌流转换为 AST，使用令牌中的信息把它们转换成一个 AST 的表述结构，这样更易于后续的操作

```js
//代码：const ast = "this is tree";
//tokens：扁平化数组
[
    {
        "type": "Keyword",
        "value": "const"
    },
    {
        "type": "Identifier",
        "value": "ast"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "String",
        "value": "\"this is tree\""
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]

//ast：acorn解析器
//type为节点类型，每一种类型的节点定义了一些附加属性来进一步描述该节点类型，eg：start、end
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "ast"
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 26,
            "value": "this is tree",
            "raw": "\"this is tree\""
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

### 2）ast 的主要 type 类型

- Ast 常用的类型如下：

  - Program：程序主体，整段代码的主体
  - VariableDeclaration：变量声明，例如 var、let、const
  - FunctionDeclaration：函数声明，例如 function
  - Identifier：标识符，例如申明变量时 var i = 5 中的 i
  - Literal：字面量，通常指字符串型的字面量
  - BinaryExpression：二进制表达式，例如 1+1
  - BlockStatement：块语句，包裹在{}块内的代码
  - ReturnStatement：返回语句，通常指 return
  - CallExpression：调用表达式，通常指调用一个函数
  - MemberExpression：成员表达式，通常指调用对象的成员，例如 console 对象到的 log 成员

### 3）ast 使用流程

- 代码转换的三个步骤：parse、traverse、generator，ast 的生成、遍历和代码转换

  - 使用 scanner 解析器对源代码进行解析，生成令牌流 tokens
  - 使用 parser 将 tokens 生成 ast 树
  - traverse 对 ast 树进行深度优先遍历，进行增删改查，生成新的 ast 树
  - 使用 generator 对新的 ast 树转换为代码

## 3.解析器

- 解析器将 js 转换为 ast，目前的 js 解析器都遵循 ESTree 规范，常见的 js 解析器：

  - esprima：解析器始祖，第一个用 JavaScript 编写的符合 EsTree 规范的 JavaScript 的解析器
  - acorn：webpack 解析器
  - espree：eslint 解析器
  - babel-parser：babel 解析器，基于 babylon 实现
  - uglify-js：单独的解析器

```js
const acorn = require('acorn'); //js解析器
const estraverse = require('estraverse'); //ast遍历器
const escodegen = require('escodegen'); //代码生成器generator

const str = "const ast = 'this is tree';";
const tokens = [...acorn.tokenizer(str)];
const ast = acorn.parse(str);

console.log(JSON.stringify(tokens));
console.log(JSON.stringify(ast));

estraverse.traverse(ast, {
  enter(node) {
    console.log('悄悄的我来了' + node.type);
    if (node.type === 'Literal') node.value = 'this is newTree';
  },
  leave(node) {
    console.log('悄悄的我又走了' + node.type);
  },
});

const result = escodegen.generate(ast);
console.log(result); //const ast = 'this is newTree';
```

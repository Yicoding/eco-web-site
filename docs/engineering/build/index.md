---
toc: menu
---

# babel

## 1.定义

babel 是一个 `js 编译器`，是一个工具链，用于将 es2015+版本的代码转换为向后兼容的 js 语法

## 2.用途

### 1）转译

转译 `esnext、typescript、flow` 等到目标环境支持的 js

- 并且还可以把目标环境不支持的 api 进行 `polyfill`

- `babel7` 支持了 `preset-env`，可以指定 `targets` 来进行按需转换，转换更加的精准，产物更小

### 2）一些特定用途的代码转换

- 完成代码到 AST 的 parse，AST 的转换，以及目标代码的生成

- 函数插桩（函数中自动插入一些代码，例如埋点代码）、自动国际化、default import 转 named import 等

### 3）代码的静态分析

- 代码规范进行检查

- api 文档自动生成

- 对 AST 进行类型是否一致的检查

- 压缩混淆工具，进行删除死代码、变量名混淆、常量折叠等各种编译优化

- js 解释器，直接解释执行 AST

## 3.编译器和转译器

### 1）编译

从一种编程语言转成另一种编程语言。主要指的是高级语言到低级语言。

### 2）转译器

对于高级语言到高级语言的转换工具，被叫做转换编译器，简称转译器

## 4.babel 的编译流程

babel 是 source to source 的转换，整体编译流程分为三步：

### 1）parse

> 通过 parser 把源码转成抽象语法树（AST）Abstract Syntax Tree

- 解析：接收代码并输出 AST（抽象语法树

  - 词法分析：把字符串形式的代码转换为令牌（tokens）流，令牌看作是一个扁平的语法片段数组

  - 语法分析：把一个令牌流转换为 AST，使用令牌中的信息把它们转换成一个 AST 的表述结构，这样更易于后续的操作

### 2）transform

> 遍历 AST，调用各种 transform 插件对 AST 进行增删改

- 转换：接收 AST 并对其遍历，在此过程中对节点进行添加、更新和移除等操作。这是 Babel 或是其他编译器中最复杂的过程，同时也是插件将要介入工作的部分

### 3）generate

> 把转换后的 AST 打印成目标代码，并生成 sourcemap

- 生成：把最终的 AST 转换成字符串形式的代码，同时创建源码映射（source maps）。代码生成过程：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串

## 5.babel 的 AST

### 1）AST 节点

- 标识符 Identifer

- 各种字面量 xxLiteral

- 各种语句 xxStatement

- 各种声明语句 xxDeclaration

- 各种表达式 xxExpression

- Class、Modules、File、Program、Directive、Comment

### 2）公共属性

- type： AST 节点的类型

- start、end、loc：`start` 和 `end` 代表该节点对应的源码字符串的开始和结束下标，不区分行列。而 `loc` 属性是一个对象，有 `line` 和 `column` 属性分别记录开始和结束行列号

- leadingComments、innerComments、trailingComments： 表示开始的注释、中间的注释、结尾的注释，因为每个 AST 节点中都可能存在注释，而且可能在开始、中间、结束这三种位置，通过这三个属性来记录和 Comment 的关联

- extra：`记录一些额外的信息，用于处理一些特殊情况`。比如 StringLiteral 修改 value 只是值的修改，而修改 extra.raw 则可以连同单双引号一起修改

## 6.babel 的 api

- @babel/parser : 转化为 AST 抽象语法树

- @babel/traverse 对 AST 节点进行递归遍历

- @babel/generator : AST 抽象语法树生成为新的代码

- `@babel/core`：内部核心的编译和生成代码的方法，`上面三个集合，一般使用这个包`

- @babel/types：判断 ast 节点类型以及创建新节点的工具类

- @babel/template：批量创建 ast 节点类型

- @babel/code-frame：打印错误位置的代码

- `@babel/cli`：babel 命令行工具，执行 babel 编译

- `@babel/preset-env`：官方用于转换 ECMAScript 2015+语法的插件集合，可根据配置来按需加载插件 （向下支持维度）

- `@babel/polyfill`：官方用来创建一个当前和旧版本浏览器能支持 ECMAScript 2015+语法的环境，比如让 IE8 支持 Promise。（向上支持维度）

- `@babel/runtime 和 @babel/plugin-transform-runtime`：有时候语法的转换相对复杂，可能会需要额外的辅助函数，比如转换 ECMA 2015 的 class

- @babel/preset-env 中`useBuiltIns` 说明:

  - false：此时不对 polyfill 做操作。如果引入 @babel/polyfill，则无视配置的浏览器兼容，引入所有的 polyfill，默认选项

  - entry：根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。需要在入口文件手动添加 import '@babel/polyfill'，会自动根据 browserslist 替换成浏览器不兼容的所有 polyfill，这里需要指定 core-js 的版本

  - 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加

概念

- preset：预设，是一组用于支持特定语言功能的插件，主要用于对语法进行转换

- polyfill：给方法打补丁，保证运行正常，适用于方法层面

- transform-runtime：将 api 进行私有化，防止引入外部库冲突，eg：\_promise

## 7.polyfill

### 1）core-js 标准库

这是所有 Babel polyfill 方案都需要依赖的开源库 zloirock/core-js，它提供了 ES5、ES6 的 polyfills，包括 promises 、symbols、collections、iterators、typed arrays、ECMAScript 7+ proposals、setImmediate 等等。

### 2）regenerator 运行时库

这是 Facebook 提供的 facebook/regenerator 库，用来实现 ES6/ES7 中 generators、yield、async 及 await 等相关的 polyfills。在下面即将提到的 babel-runtime 中被引用。有些初学者遇到的“regeneratorRuntime is not defined”就是因为只在 preset 中配置了 stage-0 却忘记加上 babel-polyfill。

### 3）babel-runtime 库

babel-runtime 是由 Babel 提供的 polyfill 库，它本身就是由 core-js 与 regenerator-runtime 库组成，除了做简单的合并与映射外，并没有做任何额外的加工

```js
const Promise = require('babel-runtime/core-js/promise');
```

由于这种方式十分繁琐，事实上严谨的使用还要配合 interopRequireDefault() 方法使用，所以 Babel 提供了一个插件，即 babel-plugin-transform-runtime。

### 4）babel-plugin-transform-runtime 插件

需要你在 .babelrc 或 Babel 编译选项中将该插件添加到 plugins 中，插件只会 polyfill 你用到的类或方法，由于采用了沙盒（Sandbox）机制，它不会污染全局变量，同时也不会去修改内建类的原型，带来的坏处是它不会 polyfill 原型上的扩展（例如 Array.prototype.includes() 不会被 polyfill，Array.from() 则会被 polyfill）。插件的方式适合于开发第三方类库，不适合开发需要大量使用 Array 等原型链扩展方法的应用

### 5）babel-polyfill

需要在你自己的代码中手工引入（最好放在 vendor 里），它会以全局变量污染的方式 polyfill 内建类（如 Map、Set、Promise 等），同时也会通过修改 Array、String、Object 等原型的方式添加实例方法（如 Array.prototype.includes()、String.prototype.padStart() 等），内建类的静态方法（如 Array.from() 等）也会被 polyfill。babel-polyfill 适合于开发独立的业务应用，及时全局污染、prototype 被修改也不会受到太大的影响，babel-polyfill 不适合开发第三方类库。

## 8.类型

babel 插件分为语法插件和转换插件：

- 语法插件：syntax plugin，在@bable/parser 中加载，在 parser 过程中执行的插件，例如：@babel/plugin-syntax-jsx

- 转换插件：transform plugin，在@babel/transform 中加载，在 transform 过程中执行的插件

## 9.使用

- 安装@babel/core 和@babel/cli 即可使用命令行解析工具

- 输出编译代码 compile: babel index.js -o output.js

- 使用 preset 预设，配置.babelrc 中 presets 属性，适用于语法层面范畴

- 使用 polyfill，需要在代码中引入 polyfill 模块，给所有方法打补丁，保证运行正常，适用于方法层面，polyfill 通常需要--save，其他使用--save-dev 即可

- babel 执行顺序：plugins 先执行、再执行预设 presets

## 10.开发 babel 插件

- 做什么插件：自己做什么事情以及受益

- 分析 ast：比对原始数据与最终转换为的数据两个 ast 的不同，来找到所需操作的 transform 方法

- 考手册进行开发：babel 官网插件开发手册、@babel/types 手册、estree 规范手册

## 11.visitor 模式(访问者模式)

当被操作的对象结构比较稳定，而操作对象的逻辑经常变化的时候，通过分离逻辑和对象结构，使得他们能独立扩展

## 12.path 的属性

- `path.node` 当前 AST 节点
- `path.parent` 父 AST 节点
- `path.parentPath` 父 AST 节点的 path
- `path.scope` 作用域，javascript 中能生成作用域的就是模块、函数、块等，而且作用域之间会形成嵌套关系，也就是作用域链
- `path.hub` 可以通过 path.hub.file 拿到最外层 File 对象， path.hub.getScope 拿到最外层作用域，path.hub.getCode 拿到源码字符串
- path.container 当前 AST 节点所在的父节点属性的属性值
- path.key 当前 AST 节点所在父节点属性的属性名或所在数组的下标
- path.listkey 当前 AST 节点所在父节点属性的属性值为数组时 listkey 为该属性名，否则为 undefined

## 13.path 的方法

- inList() 判断节点是否在数组中，如果 container 为数组，也就是有 listkey 的时候，返回 true
- get(key) 获取某个属性的 path
- set(key, node) 设置某个属性的值
- getSibling(key) 获取某个下标的兄弟节点
- getNextSibling() 获取下一个兄弟节点
- getPrevSibling() 获取上一个兄弟节点
- getAllPrevSiblings() 获取之前的所有兄弟节点
- getAllNextSiblings() 获取之后的所有兄弟节点
- find(callback) 从当前节点到根节点来查找节点（包括当前节点），调用 callback（传入 path）来决定是否终止查找
- findParent(callback) 从当前节点到根节点来查找节点（不包括当前节点），调用 callback（传入 path）来决定是否终止查找
- isXxx(opts) 判断当前节点是否是某个类型，可以传入属性和属性值进一步判断，比如 path.isIdentifier({name: 'a'})
- assertXxx(opts) 同 isXxx，但是不返回布尔值，而是抛出异常
- insertBefore(nodes) 在之前插入节点，可以是单个节点或者节点数组
- insertAfter(nodes) 在之后插入节点，可以是单个节点或者节点数组
- replaceWith(replacement) 用某个节点替换当前节点
- replaceWithMultiple(nodes) 用多个节点替换当前节点
- replaceWithSourceString(replacement) 解析源码成 AST，然后替换当前节点
- remove() 删除当前节点
- traverse(visitor, state) 遍历当前节点的子节点，传入 visitor 和 state（state 是不同节点间传递数据的方式）
- skip() 跳过当前节点的子节点的遍历
- stop() 结束所有遍历

## 14.state

visitor 对象中每次访问节点方法时传入的第二个参数，包含当前 plugin 的信息、scope 作用域信息、plugin 传入的配置参数信息，当前节点的 path 信息。可以把 babel 插件处理过程中的自定义状态存储到 state 对象中

## 15.Scopes

与 js 中作用域类似，如函数内外的同名变量需要区分开来

## 16.Bindings

所有引用属于特定的作用域，引用和作用域的这种关系称作为绑定。

## 17.babel 内核原理

- parser 就是源码到 ast，babel parser 是 fork 自 acorn，我们也用一样的方式做了下 acorn 的扩展，写了两个 acorn 插件，支持 plugins 的选项来指定语法插件，可以做各种语法的 parse。

- traverse 是遍历 AST，是一个深度优先遍历的过程，要知道不同节点怎么做遍历，可以记录在一个 map 中，遍历到什么节点就去 map 里面查应该遍历什么属性的子节点。

- path 是遍历过程中的路径，关联着父和子两个节点，而 path 和 path 之间也有关联，通过这种方式把遍历路径记录了下来，因为拿到了父子 path，那么还可以提供一些 api 来操作节点，比如 replaceWith、remove 等等。

- scope 也是遍历过程中的信息，是 path 的一部分，只有处理到能够生成作用域的 block 节点（比如函数节点）时才会创建 scope。scope 里有一个 bindings 数组，记录着所有声明的变量，在创建的时候扫描所有子节点（排除子节点中函数节点的扫描）中的 block 节点，然后记录到 bindings 中，并且维护 references 数组，也就是每个 binding 被什么地方引用了。scope 和 scope 之间也有关联，串联起来叫做静态作用域链，这个是 js 里面常见的概念。

- types 包就是创建每种类型的节点，这个就是根据不同的结构，传入不同的参数就行了，没啥难度，只是节点比较多，会麻烦一些。

- template 包是传入模版的字符串，然后做 parse，基于 parser 包很容易实现

- generator 是打印 AST 成目标代码并生成 sourcemap，打印 AST 也就是递归遍历然后拼接字符串。sourcemap 则是使用 source-map 这个 Mozilla 官方的包来创建，记录下每个节点的源码位置和打印生成的位置就可以了，所有的 mapping 组成了 sourcemap。

- core 包里面串联了整个编译流程，包括 parse、traverse、generate，然后实现了插件机制，其实也就是把所有插件的 visitor 合并，然后统一遍历。preset 是插件的集合，调用之后返回插件，然后再调用具体插件即可。

- cli 包则是命令行的入口，最终也是基于 core 包，但是要实现命令行参数的解析（commander）、多文件模糊匹配（glob）、配置文件查找（cosmiconfig）、监听文件变动重新编译（chokidar）等功能

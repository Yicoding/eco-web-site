---
toc: menu
---

# DOM

## 1.定义

- DOM, (Document Object Model, `文档对象模型`)是文档内容（HTML 或 XML）在编程语言上的抽象模型，它建模了文档的内容和结构，并提供给编程语言一套完整的操纵文档的 API

- W3C 文档对象模型是中立于平台和语言之间的接口，它允许程序和脚本动态的访问和更新文档的内容、结构、样式。总之 HTML 是关于如何获取、修改、添加和删除 HTML 元素的标准

## 2.为什么需要 DOM

- DOM 将 web 页面和脚本或程序语言连接起来，可以使用脚本或者程序语言通过 DOM 来改变或者控制 web 页面

## 3.如何访问 DOM

- 可以通过 `JavaScript` 来调用 `document` 和 `window` 元素的 API 来操作文档或者获取文档的信息

## 4.创建节点

- 它们创建的节点只是一个孤立的节点，要通过 appendChild 添加到文档中

- cloneNode 要注意如果被复制的节点是否包含子节点以及事件绑定等问题

- 使用 createDocumentFragment 来解决添加大量节点时的性能问题

### 1）createElement

- 通过传入指定的一个标签名来`创建`一个`元素`

- 调用 `appendChild` 或 `insertBefore` 等方法将其添加到 HTML 文档树中

```js
const element = document.createElement(tagName);

elem.id = 'test';
elem.style = 'color: red';
elem.innerHTML = '我是新创建的节点';
document.body.appendChild(elem);
```

### 2）createTextNode

- 用来`创建`一个`文本`节点

```js
const node = document.createTextNode('我是文本节点');
document.body.appendChild(node);
```

### 3）cloneNode

- `返回`调用该方法的`节点`的一个`副本`

```js
const dupNode = node.cloneNode(deep);
```

- `node`： 将要被克隆的节点

- `dupNode`： 克隆生成的副本节点

- `deep`（可选）：`是否`采用`深度克隆`

  - 如果为 `true`,则该节点的所有后代节点也都会被克隆

  - 如果为 `false`,则只克隆该节点本身

**注意事项**

- 1.如果复制的元素有 `id`，则其副本同样会包含该 id，由于 id 具有唯一性，所以在复制节点后必须要`修改`其 `id`

- 2.`addEventListener` 或者比如 onclick 进行绑定事件，则副本节点`不会绑定`该事件

- 3.如果是`内联方式`绑定比如：`<div onclick="showParent()"></div>`，这样的话，副本节点同样`会触发`事件

### 4）createDocumentFragment

- `创建文档片段`，将元素附加到文档片段，然后将文档片段附加到 DOM 树

- 在 DOM 树中，文档片段`被`其所有的`子元素所代替`

- 因为文档片段`存在于内存`中，并不在 DOM 树中，所以将子元素插入到文档片段时`不会引起`页面`回流`(reflow)

- 使用文档片段 document fragments 通常会起到`优化性能`的作用

```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  li = document.createElement('li');
  li.textContent = `第 ${i + 1} 个子节点`;
  fragment.appendChild(li);
}
document.body.appendChild(fragment);
```

## 5.修改节点

- 同一个节点不能存在于页面的多个位置

- 节点本身绑定的事件会不会消失，会一直保留着

### 1）appendChild

- 将指定的节点`添加到`调用该方法的节点的`子元素`的`末尾`

```js
parent.appendChild(child);
```

**注意事项**

- 如果被添加的节点是一个页面中存在的节点，则执行后这个节点将会添加到指定位置，其原本所在的位置将移除该节点，也就是说不会同时存在两个该节点在页面上，相当于把这个节点移动到另一个地方

### 2）insertBefore

- 用来`添加`一个节点`到`一个`参照节点之前`

```js
parentNode.insertBefore(newNode, refNode);
```

- `parentNode`：表示新节点被添加后的父节点

- `newNode`：表示要添加的节点

- `refNode`：表示参照节点，新节点会添加到这个节点之前

**注意事项**

- 如果 refNode 是 undefined 或 null，则 insertBefore 会将节点添加到子元素的`末尾`

### 3）removeChild

- 删除指定的子节点并返回

```js
var deletedChild = parent.removeChild(node);
```

- `deletedChild` 指向被删除节点的引用，它等于 node

- 被删除的节点`仍然存在于内存中`，可以对其进行下一步操作

**注意事项**

- 如果被删除的节点不是其子节点，则程序将会报错

  - 可以通过下面的方式来确保可以删除：

  ```js
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  ```

- 可以通过节点自己获取节点的父节点，然后将自身删除

### 4）replaceChild

- 用于使用一个节点替换另一个节点

```js
parent.replaceChild(newChild, oldChild);
```

- `newChild` 是替换的节点，可以是新的节点，也可以是页面上的节点

- 如果是页面上的节点，则其将被转移到新的位置 `oldChild` 是被替换的节点

## 6.查询节点

```js
var element = document.getElementById(id); // 根据元素id返回元素

var elements = document.getElementsByTagName(name); // 根据标签名称返回元素数组

var elements = document.getElementsByName(name); // 通过指定的name属性来获取元素，它返回一个即时的NodeList对象

var elements = document.getElementsByClassName(names); // 根据元素的class返回一个即时的HTMLCollection
// or:
var elements = rootElement.getElementsByClassName(names); // 可以在任何元素上调用，不仅仅是document。调用这个方法的元素将作为本次查找的根元素

var element = document.querySelector(selectors); // 返回第一个匹配的元素

var elementList = document.querySelectorAll(selectors); // 返回的是所有匹配的元素 var matches = document.querySelectorAll("div#a, div#b")
```

## 7.节点关系

### 1）parentNode

- 元素的`父节点`

- 父节点可能是 `Element`，`Document` 或 `DocumentFragment`

### 2）parentElement

- 返回元素的父元素节点

- 其`父节点必须是`一个 `Element`，如果不是，则返回 null

### 3）childNodes

- 返回一个即时的 NodeList，表示元素的子节点列表，子节点可能会包含文本节点，注释节点等

### 4）children

- 返回一个即时的 HTMLCollection，`子节点`都是 `Element`

### 5）firstChild

- 只读属性返回树中节点的`第一个子节点`，如果节点是无子节点，则返回 null

### 6）lastChild

- 返回当前节点的`最后一个子节点`

### 7）hasChildNodes

- 返回一个布尔值,表明当前节点`是否包含有子节点`

### 8）previousSibling

- 返回当前节点的前一个`兄弟节点`,没有则返回 null

### 9）previousElementSibling

- 返回当前元素在其父元素的子元素节点中的`前一个元素节点`

### 10）nextSibling

- 返回其父节点的 childNodes 列表中`紧跟在其后面的节点`

### 11）nextElementSibling

- 返回当前元素在其父元素的子元素节点中的`后一个元素节点`

## 8.节点属性

```js
element.setAttribute(name, value); // 设置 / 更新 属性

let attribute = element.getAttribute(attributeName); // 获取属性

element.removeAttribute(attrName); // 删除属性
```

## 9.节点样式

### 1）window.getComputedStyle

- 给出应用活动样式表后的元素的所有 CSS 属性的值，并解析这些值可能包含的任何基本计算

```js
var style = window.getComputedStyle(element[, pseudoElt]);
```

- `element` 是要获取的元素，`pseudoElt` 指定一个伪元素进行匹配

- 返回的 style 是一个 CSSStyleDeclaration 对象

- 通过 style 可以访问到元素计算后的样式

### 2）getBoundingClientRect

- 返回元素的大小以及相对于浏览器可视窗口的位置

```js
var clientRect = element.getBoundingClientRect();
```

- clientRect 是一个 DOMRect 对象，包含 `left，top，right，bottom`，它是`相对于可视窗口的距离`，滚动位置发生改变时，它们的值是会发生变化的。除了 IE9 以下浏览器，还包含元素的 `height` 和 `width` 等数据

### 3）直接修改元素的样式

```js
elem.style.color = 'red';
elem.style.setProperty('font-size', '16px');
elem.style.removeProperty('color');
```

### 4）动态添加样式规则

```js
var style = document.createElement('style');
style.innerHTML =
  'body{color:red} #top:hover{background-color: red;color: white;}';
document.head.appendChild(style);
```

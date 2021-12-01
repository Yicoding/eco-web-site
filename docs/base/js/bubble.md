---
toc: menu
---

# 事件冒泡和捕获

## 1.基本概念

- 捕获：自顶向下

  - 在 p 元素上发生 click 事件的顺序应该是 document -> html -> body -> div -> p

- 冒泡：自底向上

  - 在 p 元素上发生 click 事件的顺序应该是 p -> div -> body -> html -> document

- 先捕获再冒泡

## 2.addEventListener

addEventListener 的第三个参数就是为冒泡和捕获准备的

```js
element.addEventListener(event, function, useCapture);
```

- event: 需要绑定的事件

- function: 触发事件后要执行的函数

- useCapture: 采用冒泡还是捕获，`默认值是false`

  - false: 表示在`事件冒泡`阶段调用事件处理函数

  - true: 表示在`事件捕获`阶段调用处理函数

```js
//冒泡，默认
window.addEventListener('click', function () {});
//捕获
window.addEventListener('click', function () {}, true);
```

## 3.应用场景

事件代理（事件委托）

```html
<html>
  <head>
    事件委托
  </head>
  <body>
    <ul id="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <script type="text/javascript">
      // 非事件委托
      const liList = document.getElementsByTagName('li');
      for (let i = 0; i < liList.length; i++) {
        console.log('liList[i]', liList[i]);
        liList[i].addEventListener('click', function (e) {
          console.log(`内容为${e.target.innerHTML}，索引为${i}`);
        });
      }

      // 事件委托
      const ul = document.querySelector('ul');
      ul.addEventListener('click', function (e) {
        const target = e.target;
        if (target.tagName.toLowerCase() === 'li') {
          const liList = this.querySelectorAll('li');
          const index = Array.prototype.indexOf.call(liList, target);
          console.log(`内容为${target.innerHTML}，索引为${index}`);
        }
      });
    </script>
  </body>
</html>
```

## 4.事件流

事件流是网页元素接收事件的顺序，DOM2 级事件规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。首先发生的事件捕获，为截获事件提供机会。然后是实际的目标接收事件。最后一个阶段是事件冒泡阶段，可以在这个阶段对事件做出响应。虽然捕获阶段在规范中规定不允许响应事件，但是实际上还是会执行，多有两次机会获取到目标对象

## 5.阻止事件冒泡

### 1）给子级加 event.stopPropagation()

```js
window.addEventListener('click', function (e) {
  e.stopPropagation();
});
```

### 2）在事件处理函数中返回 false

```js
window.addEventListener('click', function (e) {
  return false;
});
```

## 6.阻止事件捕获

```js
window.addEventListener(
  'click',
  function () {
    event.stopImmediatePropagation();
  },
  true,
);
```

## 7.阻止默认事件

```js
// 谷歌及IE8以上
e.preventDefault();
// IE8及以下
window.event.returnValue = false;
// 无兼容问题（但不能用于节点直接onclick绑定函数）
return false;
```

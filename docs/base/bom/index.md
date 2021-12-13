---
toc: menu
---

# 浏览器对象

- `BOM`( Browser Object Model )即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 `window`

- **DOM 文档对象模型**:

  - DOM 就是把「文档」当做一个「对象」来看待
  - DOM 的顶级对象是 document
  - DOM 主要学习的是操作页面元素
  - DOM 是 W3C 标准规范

- **BOM 浏览器对象模型**:
  - 把「浏览器」当做一个「对象」来看待
  - BOM 的顶级对象是 window
  - BOM 学习的是浏览器窗口交互的一些对象
  - BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差中
  - BOM 包含 DOM

## 1.window 对象

- windows 对象是整个浏览器对象模型的核心，其扮演着既是接口又是全局对象的角色
  - 全局变量就是 window 对象的属性，全局函数就是 window 对象的方法

### 1）系统对话框

- `alert()`：系统警告对话框
  - 接收字符串参数并显示
- `confirm()`：系统确认对话框
  - 可提供确认或取消两种事件
- `prompt()`：提示对话框
  - 可对用户展示确认、取消事件外，还可提供文本域
- `onerror()`：事件处理程序
  - 当未捕获的异常传播到调用栈上时就会调用它，并把错误消息输出到浏览器的 JavaScript 控制上

### 2）窗口事件

- `window.onload`：窗口(页面）加载事件

  - 当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等),就调用的处理函数
  - window.onload 传统注册事件方式只能写一次，如果有多个，会以最后一个 window.onload 为准。如果使用 addEventListener 则没有限制

  ```js
  window.onload = function () {
    //在里面写js代码
  };
  //或者
  window.addEventListener('load', function () {
    //在里面写js代码
  });
  ```

- `DOMContentLoaded`：窗口加载事件

  - 仅当 DOM 加载完成，不包括样式表，图片，flash 等等
  - 执行加载速度比 load 更快
  - ie9 以上才支持

  ```js
  document.addEventListener('DOMContentLoaded', function () {});
  ```

- `window.resize`：调整窗口大小加载事件，当触发时就调用的处理函数
  - 只要窗口大小发生像素变化，就会触发这个事件
  - 经常利用这个事件完成响应式布局。使用 window.innerWidth 获取当前屏幕的宽度
  ```js
  window.onresize = function () {};
  window.addEventListener('resize', function () {});
  ```

### 3）窗口方法

- window.`open()` - 打开新窗口
- window.`close()` - 关闭当前窗口
- window.`moveTo()` -移动当前窗口
- window.`resizeTo()` -重新调整当前窗口

### 4）窗口位置及大小

- 1.获取窗口`位置`

  | 属性          | 说明                                   | 兼容性                    |
  | :------------ | :------------------------------------- | :------------------------ |
  | `screenLeft`  | 窗口相对于屏幕`左边`的位置             | 适用于 IE、Safari、Chrome |
  | `screenTop`   | 窗口相对于屏幕`上边`的位置             | 适用于 IE、Safari、Chrome |
  | `screenX`     | 窗口相对于屏幕`左边`的位置             | 适用于 Firefox            |
  | `screenY`     | 窗口相对于屏幕`上边`的位置             | 适用于 Firefox            |
  | `moveBy(x,y)` | 接收的是在水平和垂直方向上移动的像素数 | 全兼容                    |
  | `moveTo(x,y)` | 接收的是新位置的 x 和 y 坐标值         | 全兼容                    |

```js
// 兼容写法
var leftPos =
  typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX;

var topPos =
  typeof window.screenTop == 'number' ? window.screenTop : window.screenY;
```

- 2.获取窗口`大小`

  | 属性                          | 说明                                                                                                                                                                                                                                                                       |
  | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `screenLeft`<br>`innerHeight` | IE9+、Safari、Firefox、Opera: 该容器中页面视图区的大小<br>Chrome: 返回视口大小<br>移动设备： 返回可见视口（即屏幕上可见页面区域的大小）<br>移动 IE 浏览器： 不支持该属性,当移动 IE 浏览器将布局视口的信息保存至 document.body.clientWidth 与 document.body.clientHeight 中 |
  | `outerWidth`<br>`outerHeight` | IE9+、Safari、Firefox: 返回浏览器窗口本身的尺寸<br>Opera: 返回页面视图容器的大小<br>Chrome: 返回视口大小                                                                                                                                                                   |
  | `resizeTo(width, height)`     | 接收浏览器窗口的新宽度与新高度                                                                                                                                                                                                                                             |
  | `resizeBy(width, height)`     | 接收新窗口与原窗口的宽度与高度之差                                                                                                                                                                                                                                         |

### 5）定时器

- `setTimeout()`：超时调用
  - 在指定的时间过后执行代码
  - 受 JavaScript 任务队列的影响，只有前面`没有任务时`，`才会按时延迟执行动作`
  - 用 `clearTimeout` 清除
  ```js
  const ms = 1000;
  var timee = window.setTimeout(function () {
    // ...
  }, ms);
  clearTimeout(timee);
  ```
- `setInterval()`：间歇调用
  - 每隔指定的时间就执行一次代码
  - 不受任务队列的限制，它只是简单的每隔一定的时间就重复执行一次动作，如果前面任务还没有执行完毕，setInterval() 可能会插队按时执行动作
  - 用 `clearInterval` 清除
  ```js
  const ms = 1000;
  var timee = window.setInterval(function () {
    // ...
  }, ms);
  clearInterval(timee);
  ```

## 2.location 对象

- 提供当前窗口中的加载的文档有关的信息和一些导航功能。既是 window 对象属性，也是 document 的对象属性

```js
window.location === document.location; //true
```

### 1）URL

- 统一资源定位器(Uniform Resource Locator,URL)是互联网上标准资源的地址（俗称网址）。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它

| 属性       | 说明                               | 示例                                     |
| :--------- | :--------------------------------- | :--------------------------------------- |
| `hash`     | 返回 url 中的 hash（#后字符>=0）   | #/home                                   |
| `host`     | 服务器名称+端口（如果有）          | example.com:80                           |
| `hostname` | 只含服务器名称                     | example.com                              |
| `href`     | 当前加载页面的完整的 url           | https://example.com/web/index.html#/home |
| `pathname` | 返回 url 的的目录和（或）文件名    | /web/index.html                          |
| `port`     | url 的端口号，如果不存在则返回空   | 8080                                     |
| `protocol` | 页面使用的协议                     | https:                                   |
| `search`   | 返回 url 的查询字符串， 以问号开头 | ?name=aha&age=20                         |

### 2）解析 url 查询字符串参数

```ts
function getHashValue(key: string) {
  const hash = window.location.hash.split('?')[1];
  if (!hash) return;
  const value = new URLSearchParams(hash);
  return value.get(key);
}
```

### 3）刷新页面

- `assign()`： location.assign("http://www.xxx.com")
  - 跳转后，history 记录只剩两条，一条是通过 assign 跳转的页面，另一条则是上一个页面（使用 assign()跳转方法的页面），其余的所有页面都被清除掉了
- `replace()`：location.replace("http://www.xxx.com")
  - 替代掉当前的页面
- `reload()`：重新加载当前显示的页面
  - location.reload() : 重新加载（有可能会从缓存中加载）
  - location.reload(true)： 重新加载（从服务器重新加载）

## 3.navigator 对象

- navigation 接口表示用户代理的状态和标识，允许脚本查询它和注册自己进行一些活动

### navigation 应用场景

> navigator 对象存储了与浏览器相关的基本信息，如名称、版本和系统等

- navigator.`appName`：浏览器名称；注意："Netscape" 是 IE11、Chrome、Firefox 以及 Safari 的应用程序名称的统称。
- navigator.`appVersion`：浏览器版本；
- navigator.`appCodeName`：返回浏览器的应用程序代码名称
- navigator.`language`：浏览器设置的语言；
- navigator.`platform`：操作系统类型；
- navigator.`userAgent`：浏览器设定的 User-Agent 字符串。
- navigator.`cookieEnabled`： 返回 true，如果 cookie 已启用，否则返回 false。
- navigator.`product`：返回浏览器引擎的产品名称
- navigator.`platform`：返回浏览器平台（操作系统）
- navigator.`onLine`： 属性返回 true，假如浏览器在线
- navigator.`javaEnabled()`：方法返回 true，如果 Java 已启用

```js
// 判断用户那个终端打开页面，实现跳转
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  )
) {
  window.location.href = ''; // 移动端
} else {
  window.location.href = ''; // PC端
}
```

## 4.history 对象

- history 对象保存着用户上网的历史记录，从窗口被打开的那一刻算起，history 对象是用窗口的浏览历史用文档和文档状态列表的形式表示。history 对象的 length 属性表示浏览历史列表中的元素数量，但出于安全考虑，脚本不能访问已保存的 url

### 1）history.go()

- 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转

```js
history.go('next.com'); //向前或者向后寻找指定字符串页面，没有找到则无响应
history.go(3); //向前跳转三个记录
history.go(-1); //向后跳转一个记录
```

### 2）history.forward()

- 向前跳转一个页面

### 3）history.back()

- 向后跳转一个页面

### 4）history.length

- 获取历史记录数，如果是打开的第一个页面，则 history.length == 0，可以用该属性来判断当前打开的网页是不是该窗口打开的首个网页

## 5.screen 对象

- 提供有关窗口显示的大小和可用的颜色输入信息

```js
screen.availHeight; // 屏幕的像素高度减去系统部件的高度

screen.availWidth; // 屏幕的像素宽度减去系统部件的宽度

screen.availLeft; // 未被系统部件占用的最左侧像素值

screen.availTop; // 未被系统部件占用的最上侧像素值

screen.height; // 屏幕像素高度

screen.width; // 屏幕像素宽度
```

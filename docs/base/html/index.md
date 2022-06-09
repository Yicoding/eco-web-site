---
toc: menu
---

# html 基础

## 1.字体标签

### 1）b 和 strong

- 加粗

- strong 侧重于标签语义化，强调

### 2）i 和 em

- 倾斜
- em 侧重于标签语义化，强调

## 2.img 标签

### 1）属性

- `alt`(alt text)：图像不显示时，alt 属性用来指定替换文字
- `title`(tool tip)：鼠标悬停时会出现，该属性为设置该属性的元素提供建议性的信息
- `height`：可以指定图片显示时的高度，单位是像素或百分比。
- `width`：可以指定图片显示时的宽度，单位是像素或百分比。
- `src`：用来指定图片路径

### 2）事件

- `onload`：图片加载成功调用 onload
- `onerror`：图片加载失败调用 onerror

### 3）响应式图像

```css
img {
  max-width: 100%;
}
```

### 4）图片格式

- `png` 是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用
- `jpg` 是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在 www 上，被用来储存和传输照片的格式
- `gif` 是一种位图文件格式，以 8 位色重现真色彩的图像。可以实现动画效果
- `webp` 格式是谷歌在 2010 年推出的图片格式，压缩率只有 jpg 的 2/3，大小比 png 小了 45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和 opera 支持

## 3.a 标签

### 1） href 属性

- 给出链接指定的网址

  - `URL`
  - `id` href=#xxx
  - `路径`：
    - /a/b/c & a/b/c
    - index.html & ./index.html
  - `伪协议`：

    - mailto:邮箱
    - tel:`手机号码`

### 2）target 属性

- 指定如何展示打开的链接
  - `_blank` 表示在新窗口中打开
  - `_top` 表示在顶层窗口打开
  - `_self` 表示在当前窗口打开，默认值
  - `_parent` 表示从上层窗口打开，通常用于从父窗口打开子窗口，或者`<iframe>`里面的链接

### 3）download 属性

- 表明当前链接用于`下载`，而不是跳转到另一个 URL

## 4.table 标签

- table 标签是一个块级容器标签，所有表格内容都要放在这个标签里面

### 1）一级子元素标签

- `thead`：表头
- `tbody`：表身
- `tfoot`：表尾

### 2）其他标签

- `<tr>`标签表示表格里的一行（table row），如果表格有`<thead>、<tbody>、<tfoot>`，那么`<tr>`就放在这些容器元素之中，否则直接放在`<table>`的下一级
- `<th>`标签是标题单元格，加粗显示
- `<td>`标签表是数据单元格

### 3）相关样式

- `table-layout`
- `border-collaps` 样式控制表格是否合并
- `border-spacing` 表示表格之间的距离

## 5.form 表单标签

- 只有当 button type="submit" 时，表单才能提交

- form 标签和 a 标签的最大区别就是 form 标签是 POST 提交

### 1）作用

- form 标签是用户输入信息与网页互动的一种形式，发送 GET 或 POST 请求，然后刷新页面

### 2）属性

- `action` 是服务器接收数据的 URL，用来控制使用哪个页面。
- `method` 是提交数据的 HTTP 方法，取值为 GET 或 POST。
- `target` 表示在哪个窗口展示服务器返回的数据。
- `autocomplete` 表示如果用户没有填写某个控件，浏览器是否可以自动填写该值，会自动给出建议，取值为 off 或 on

## 6.input 标签

### 1）作用

- 让用户输入内容

### 2）属性

- 类型 `type`：checkBox、radio、name、number、password、file、submit 等
- 其他：name、checked、value 等

### 3）事件

- `onchange` 用户改变的内容
- `onfocus` 用户聚焦内容
- `onblur` 用户失去聚焦的内容

## 7.音频/视频

### 1）单类型

```html
<audio src="./media/luffy.mp3" controls="controls">本网页不支持媒体标签</audio>
```

### 2）多类型音视频，兼容性良好

```html
<audio controls="controls">
    <source src="./media/luffy.ogg"></source>
    <source src="./media/luffy.mp3"></source>
    本网页不支持媒体标签
</audio>

```

## 8.canvas

### 1）定义

- canvas 是 HTML5 新定义的标签，通过使用脚本（通常是 JavaScript）绘制图形

- `<canvas>` 标签只是图形容器，相当于一个画布，canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成，相当于使用画笔在画布上画画

- 默认情况下，`<canvas>` 没有边框和内容。默认是一个 300\*150 的画布，所以创建了 `<canvas>` 之后要对其设置宽高

### 2）getContext()

- 使用 getContext() 获取 canvas 的上下文环境

- getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法

- 目前不支持 3d

### 3）绘制路径

- beginPath 方法表示开始绘制路径
- moveTo(x, y)方法设置线段的起点
- lineTo(x, y)方法设置线段的终点
- stroke 方法用来给透明的线段着色

```js
ctx.beginPath(); // 开始路径绘制
ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
ctx.lineWidth = 1.0; // 设置线宽
ctx.strokeStyle = '#CC0000'; // 设置线的颜色
ctx.stroke(); // 进行线的着色，这时整条线才变得可见
```

### 4）绘制矩形

- fillRect(x, y, width, height)方法用来绘制矩形
- 它的四个参数分别为矩形左上角顶点的 x 坐标、y 坐标，以及矩形的宽和高
- fillStyle 属性用来设置矩形的填充色

```js
ctx.fillStyle = 'yellow';
ctx.fillRect(50, 50, 200, 100);
```

- `strokeRect` 绘制空心矩形

```js
ctx.strokeRect(10, 10, 200, 100);
```

- `clearRect` 方法用来清除某个矩形区域的内容

```js
ctx.clearRect(100, 50, 50, 50);
```

### 5）绘制文本

- `fillText`(string, x, y) 用来绘制文本，它的三个参数分别为文本内容、起点的 x 坐标、y 坐标。使用之前，需用 font 设置字体、大小、样式（写法类似与 CSS 的 font 属性）
- `strokeText` 方法，用来添加空心字

### 6）绘制圆形和扇形

- arc 方法用来绘制扇形

```js
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```

- x 和 y 参数是圆心坐标，radius 是半径，startAngle 和 endAngle 则是扇形的起始角度和终止角度（以弧度表示），anticlockwise 表示做图时应该逆时针画（true）还是顺时针画（false）

```js
// 实心的圆形
ctx.beginPath();
ctx.arc(60, 60, 50, 0, Math.PI * 2, true);
ctx.fillStyle = '#000000';
ctx.fill();

// 空心圆形
ctx.beginPath();
ctx.arc(60, 60, 50, 0, Math.PI * 2, true);
ctx.lineWidth = 1.0;
ctx.strokeStyle = '#000';
ctx.stroke();
```

### 7）设置渐变色

- createLinearGradient 方法用来设置渐变色

```js
var myGradient = ctx.createLinearGradient(0, 0, 0, 160);

myGradient.addColorStop(0, '#BABABA');

myGradient.addColorStop(1, '#636363');
```

- createLinearGradient 方法的参数是(x1, y1, x2, y2)，其中 x1 和 y1 是起点坐标，x2 和 y2 是终点坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等

```js
ctx.fillStyle = myGradient;
ctx.fillRect(10, 10, 200, 100);
```

### 8）设置阴影

```js
ctx.shadowOffsetX = 10; // 设置水平位移
ctx.shadowOffsetY = 10; // 设置垂直位移
ctx.shadowBlur = 5; // 设置模糊度
ctx.shadowColor = 'rgba(0,0,0,0.5)'; // 设置阴影颜色

ctx.fillStyle = '#CC0000';
ctx.fillRect(10, 10, 200, 100);
```

### 9）drawImage 方法

- Canvas API 允许将图像文件插入画布，做法是读取图片后，使用 drawImage 方法在画布内进行重绘

```js
var image = new Image();

image.onload = function () {
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext('2d').drawImage(image, 0, 0);
  // 插入页面底部
  document.body.appendChild(image);
  return canvas;
};

image.src = 'image.png';
```

### 10.getImageData 方法，putImageData 方法

- getImageData 方法可以用来读取 Canvas 的内容，返回一个对象，包含了每个像素的信息

```js
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
```

### 11.toDataURL 方法

- 对图像数据做出修改以后，可以使用 toDataURL 方法，将 Canvas 数据重新转化成一般的图像文件形式

### 12.save 方法，restore 方法

- save 方法用于保存上下文环境，restore 方法用于恢复到上一次保存的上下文环境

```js
ctx.save();

ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = 'rgba(0,0,0,0.5)';

ctx.fillStyle = '#CC0000';
ctx.fillRect(10, 10, 150, 100);

ctx.restore();

ctx.fillStyle = '#000000';
ctx.fillRect(180, 10, 150, 100);
```

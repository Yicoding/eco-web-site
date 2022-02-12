---
toc: menu
---

# css 基础

## 1.css 的盒子模型

- 可以通过 `box-sizing` 设置

### 1）标准盒子模型（content-box）

- 宽度 = 内容的宽度（content）+ border + padding + margin

### 2）低版本 IE 盒子模型：怪异模式（border-box）

- 宽度 = 内容宽度（content+border+padding）+ margin

## 2.css 选择器

### 1）css 选择符

- id 选择器(#myid)
- 类选择器(.myclassname)
- 标签选择器(div, h1, p)：权重 1
- 相邻选择器(h1 + p)
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（\*）
- 属性选择器（a[rel="external"]）
- 伪类选择器（a:hover, li:nth-child）

### 2）可继承的属性

- font-size
- font-family
- color

### 3）不可继承的样式

- border
- padding
- margin
- width
- height

### 4）优先级算法

> !important > 行内样式 > ID 选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器

- !important
- 行内样式
- ID 选择器, 权重:100
- class、属性选择器和伪类选择器，权重:10

  ```css
  属性选择器指的是:根据元素的属性及属性值来选择元素，比如button的type属性等。
  伪类选择器: :active :focus等选项.
  ```

- 标签选择器和伪元素选择器，权重:1

  ```css
  伪元素选择器： :before :after
  ```

**规则**

- !important 声明的样式优先级最高，如果冲突再进行计算
- 如果优先级相同，则选择最后出现的样式
- 继承得到的样式的优先级最低

### 5）CSS3 新增伪类

- p:first-of-type 选择属于其父元素的首个元素
- p:last-of-type 选择属于其父元素的最后元素
- p:only-of-type 选择属于其父元素唯一的元素
- p:only-child 选择属于其父元素的唯一子元素
- p:nth-child(2) 选择属于其父元素的第二个子元素
- :enabled :disabled 表单控件的禁用状态
- :checked 单选框或复选框被选中

## 3.居中

### 1）水平居中

**1.行内元素**

```css
.parent {
  text-align: center;
}
```

**2.块级元素**

```css
.child {
  display: block;
  width: 80%;
  margin: 0 auto;
}
```

**3.Flex 弹性盒子**

- flex 2012 版

```css
.parent {
  display: flex;
  justify-content: center;
}
```

**4.绝对定位**

```css
/*1.*/
.child {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
/*2.*/
.child {
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -100px;
}
/*3.*/
.child {
  position: absolute;
  width: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
```

### 2）垂直居中

**1.行内元素**

```css
.parent {
  height: 200px;
}

.child {
  line-height: 200px;
}
```

**2.块级元素**

```css
/*1.行内块级元素 适应 IE7*/
.parent {
  background: red;
  height: 500px;
}
.child {
  width: 200px;
  height: 200px;
  display: inline-block;
  vertical-align: middle;
  background: green;
}
.parent::after {
  display: inline-block;
  vertical-align: middle;
  content: '';
  height: 100%;
}

/*2.table IE6~7, 甚至IE8 beta中无效*/
/*元素高度可以动态改变, 不需再CSS中定义, 如果父元素没有足够空间时, 该元素内容也不会被截断*/
.parent {
  display: table;
}
.son {
  display: table-cell;
  vertical-align: middle;
}
```

**3.Flex 弹性盒子**

- flex 2012 版

```css
.parent {
  display: flex;
  align-items: center;
}
```

**4.绝对定位**

```css
/**1.**/
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

/**2.**/
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 200px;
  margin-top: -100px;
}

/**3.**/
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
```

### 3）水平垂直居中子元素

- 1.定位+transform

  ```css
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  ```

- 2.flex 布局

  ```css
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

- 3.定位+auto

  ```css
  .parent {
    position: relative;
    height: 500px;
    background: red;
  }
  .child {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: green;
  }
  ```

## 4.浮动

### 1）定义

- 浮动元素会脱离文档流并向左/向右浮动，直到碰到父元素或者另一个浮动元素

### 2）特征

- 1.浮动会脱离文档
  - 脱离文档，也就是说浮动不会影响普通元素的布局
- 2.浮动可以内联排列
  - 浮动会向左/向右浮动，直到碰到另一个浮动元素为止
- 3.浮动会导致父元素高度坍塌

### 3）clear 清除浮动

- 原理：clear 是 CSS 中的定位属性，规定元素的哪一侧`不允许其他浮动元素`
  - clear:both 就是规定在左右两侧均不允许浮动元素

```html
<style>
  .parent {
    background: red;
  }
  .child {
    width: 200px;
    height: 200px;
    background: green;
    float: left;
  }
  /*前提保证.both不能是浮动元素*/
  .both {
    clear: both;
  }
</style>
<body>
  <div class="parent">
    <div class="child" />
    <div class="both" />
  </div>
</body>
```

### 4）清除浮动的几种方式，各自的优缺点

- 父级 div 定义 height
- 结尾处加空 div 标签 clear:both
- 父级 div 定义伪类:after 和 zoom
- 父级 div 定义 overflow:hidden
- 父级 div 也浮动，需要定义宽度
- 结尾处加 br 标签 clear:both
- 比较好的是第 3 种方式

## 5.BFC

### 1）定义

- BFC 全称：`Block Formatting Context`， 名为 `"块级格式化上下文"`。

- BFC 是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局

- 它会创建一个特殊的区域，在这个区域中，只有 block box 参与布局

  - block box 是指 display 属性为 block、list-item、table 的元素
  - inline box 是指 display 属性为 inline、inline-block、inline-table 的元素，css3 中的 run in box

- 而 BFC 的一套特点和规则就规定了在这个特殊的区域中如何进行布局，如何进行定位，区域内元素的相互关系和相互作用

### 2）如何形成 BFC

- 根元素，即 html
- float 为 left | right
- overflow 为 hidden | auto | scroll
- display 为 table-cell | table-caption | inline-block | flex | inline-flex
- position 的值为 absolute 或 fixed

- 给父元素设置 overflow: hidden 来简单的实现 BFC 清除浮动

### 3）BFC 的规则

- 内部的 Box 会在垂直方向上一个接一个放置
- Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- 每个元素的 margin box 的左边，与包含块 border box 的左边相接触
- BFC 的区域不会与 float box 重叠
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
- 计算 BFC 的高度时，浮动元素也会参与计算

### 4）特点

- 边距折叠
- 清除浮动
- 自适应多栏布局

### 5）BFC 应用

- 可以包含浮动元素
- 不被浮动元素覆盖
- 阻止父子元素的 margin 折叠

**1.清除浮动**

- overflow: hidden;

**2.解决上下 margin 边距问题**

```html
<style>
  p {
    color: blue;
    background: red;
    width: 400px;
    line-height: 100px;
    text-align: center;
    margin: 40px;
  }
  .wrapper {
    /*添加后，上下间距变成80*/
    overflow: hidden;
  }
</style>
<body>
  <p>paragraph 1</p>
  <div class="wrapper">
    <p>paragraph 2</p>
  </div>
</body>
```

**3.实现自适应两栏布局**

```html
<style>
  body {
    width: 600px;
    position: relative;
  }

  .left {
    width: 80px;
    height: 150px;
    float: left;
    background: blue;
  }

  .right {
    height: 200px;
    background: red;
    /*实现点*/
    overflow: hidden;
  }
</style>

<body>
  <div class="left"></div>
  <div class="right"></div>
</body>
```

## 6.IFC

### 1）定义

- IFC 的全称是 `Inline Formatting Contexts`，也就是`"内联格式化上下文"`

### 2）形成条件

- 块级元素中仅包含内联级别元素

### 3）应用

- 水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中
- 垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中

## 7.FFC

### 1）定义

- FFC 的全称是 Flex formatting contexts，弹性盒模型

- 目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间

### 2）形成条件

- 父级元素设置 `display: flex` 或者 `display: inline-flex`

- 生成 FFC 后，其子元素的 float、clear 和 vertical-align 属性将失效

### 3）容器的属性

**1.flex-direction 属性决定主轴的方向（即项目的排列方向）**

> flex-direction: row | row-reverse | column | column-reverse;

- `row`（默认值）：主轴为水平方向，起点在左端
- `row-reverse`：主轴为水平方向，起点在右端
- `column`：主轴为垂直方向，起点在上沿
- `column-reverse`：主轴为垂直方向，起点在下沿

**2.flex-wrap 属性定义，如果一条轴线排不下，如何换行**

> flex-wrap: nowrap | wrap | wrap-reverse;

- `nowrap`（默认）：不换行
- `wrap`：换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

**3.flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式**

> flex-flow: flex-direction flex-wrap;

**4.justify-content 属性定义了项目在主轴上的对齐方式**

> justify-content: flex-start | flex-end | center | space-between | space-around;

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

**5.align-items 属性定义项目在交叉轴上如何对齐**

> align-items: flex-start | flex-end | center | baseline | stretch;

- `stretch`（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度
- `flex-start`：交叉轴的起点对齐
- `flex-end`：交叉轴的终点对齐
- `center`：交叉轴的中点对齐
- `baseline`: 项目的第一行文字的基线对齐

### 4）项目的属性

**1.order 属性定义项目的排列顺序**

- 数值越小，排列越靠前，默认为 `0`

> order: number;

**2.flex-grow 属性定义项目的放大比例**

- 默认为 `0`，即如果存在剩余空间，也不放大

> flex-grow: number;

- 如果所有项目的 `flex-grow 属性都为 1`，则它们将`等分`剩余空间（如果有的话）
- 如果一个项目的 flex-grow 属性为 `2`，其他项目都为 `1`，则前者占据的剩余空间将比其他项`多一倍`

**3.flex-shrink 属性定义了项目的缩小比例**

- 默认为 `1`，即如果空间不足，该项目将缩小

- 负值对该属性无效

> flex-shrink: number;

**4.flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）**

- 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小

> flex-basis: length | auto;

- 可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间

**5.flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写**

- 默认值为 `0 1 auto`。后两个属性可选

- 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)

> flex: none | flex-grow flex-shrink flex-basis

- 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

**6.align-self 属性允许单个项目有与其他项目不一样的对齐方式**

- 可覆盖 align-items 属性
- 默认值为`auto`，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch

> align-self: auto | flex-start | flex-end | center | baseline | stretch;

### 5）应用

**1.网格布局**

- 1.最简单的网格布局，就是平均分布。在容器里面平均分配空间，需要设置项目的自动缩放

```html
<style>
  .parent {
    display: flex;
  }
  .child {
    flex: 1;
  }
</style>
<div class="parent">
  <div class="child" />
  <div class="child" />
  <div class="child" />
</div>
```

- 2.百分比布局：某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间

```html
<style>
  .parent {
    display: flex;
  }
  .child {
    flex: 1;
  }
  .child-u {
    flex: 0 0 50%;
  }
</style>
<div class="parent">
  <div class="child child-u" />
  <div class="child" />
  <div class="child" />
</div>
```

**2.圣杯布局**

- 页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）
- 其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏

```html
<style>
  .root {
    display: flex;
    flex-direction: column;
    height: 600px;
  }
  header,
  footer {
    width: 100%;
    height: 50px;
    background: red;
  }
  .main {
    flex: 1;
    width: 100%;
    display: flex;
  }
  .left,
  .right {
    flex: 1;
    background: green;
  }
  .center {
    flex: 2;
    background: gray;
  }
</style>
<div class="root">
  <header></header>
  <div class="main">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
  <footer></footer>
</div>
```

**3.自动撑开页面高度，底栏总是出现在页面的底部**

```html
<style>
  .root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main {
    flex: 1;
  }
</style>
<div class="root">
  <div class="main" />
  <div class="footer" />
</div>
```

## 8.display 属性值

- `inline`（默认）--内联
- `none`--隐藏
- `block`--块显示
- `table`--表格显示
- `list-item`--项目列表
- `inline-block`

## 9.position 属性值

- `static`(默认)：按照正常文档流进行排列
- `relative`(相对定位)：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位
- `absolute`(绝对定位)：参考距其最近一个不为 static 的父级元素通过 top, bottom, left, right 定位
- `fixed`(固定定位)：所固定的参照对像是可视窗口
- `sticky`(粘性定位元素)：
  - 当粘性约束矩形在可视范围内为 relative，反之，则为 fixed
  - 使用条件：
    - 1.父元素不能 overflow:hidden 或者 overflow:auto 属性。
    - 2.必须指定 top、bottom、left、right4 个值之一，否则只会处于相对定位
    - 3.父元素的高度不能低于 sticky 元素的高度
    - 4.sticky 元素仅在其父元素内生效
  - 注意事项：
    - 1.sticky 不会触发 BFC
    - 2.z-index 无效
    - 3.当父元素的 height：100%时，页面滑动到一定高度之后 sticky 属性会失效
    - 4.IE 低版本不支持 sticky 的使用

## 10.元素设置百分比

### 1）宽度百分比

- 相对于父容器的`宽度`计算的

### 2）高度百分比

- 设置 padding-top , padding-bottom , margin-top , margin-bottom 时，依据的也是父容器的`宽度`，而不是高度

### 3）区分规则

- 对于设置绝对定位 position `absolute` 的元素，% 是相对于`参照物`的，left 相对于参照物的 width，top 相对于这个参照物的 height

- 对于设置相对定位 position `relative` 的元素，% 的数值是相对与`自身`的，left 相对于自己的 width，top 相对于自己的 height

- 对于设置固定定位 position `fixed` 的元素，% 的数值是相对于`视口`的，left 相对于视口的 width，top 相对于视口的 height

### 4）margin 和 padding 的 %

- 它是相对于`父元素的宽度`

### 5）border-radius 的 %

- % 是相对于`自身`宽高的

### 6）background-size 的 %

- % 是相对于`自身`宽高的

### 7）transform： translate

- % 是相对于`自身`宽高的

### 8）text-indent 的 %

- % 相对于`父元素的 width`

### 9）font-size 的 %

- % 相对于`父元素`的`字体`大小

### 10）line-height 的 %

- % 相对于`该元素`的 `font-size` 数值

## 11.::before 和 :after 中双冒号和单冒号区别

- 单冒号(:)用于`CSS3伪类`，双冒号(::)用于` CSS3伪元素`
- ::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中
- 在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

## 12.vw、rem、em、px

### 1）vw、vh

- 视口：浏览器可区域=window.innerWidth/window.innerHeight
- vw、vh、vmax、vmin 统称为视口单位
  - 1. vw：1vw 等于视口宽度的 1%
  - 2. vh：1vh 等于视口高度的 1%
  - 3. vmin：选取 vw 和 vh 中最小的那个
  - 4. vmax：选取 vw 和 vh 中最大的那个

### 2）rem

- `相对`的是 HTML 根元素
- rem 是 css3 新增的相对单位（root em，根 em）
- 如果 html 元素文字大小为 14px，那么 1rem = 14px
- 如果 html 元素文字大小为 16px，那么 1rem = 16px

### 3）em

- 相对父元素
- em 是`相对`长度单位。相对于当前节点内文本的字体大小
- 如果当期 DOM 节点没有设置字体大小，那么就是它父级的字体大小
- 如果父级也没有设置字体大小，就找祖父及，依次往上找，直到根节点
- 根节点有默认的字体大小

### 4）px

- px 像素（Pixel）；是`固定`单位；
- px 是就是一张图片中最小的点，一张位图就是由这些点构成的

## 13.CSS Sprites

- 雪碧图

- 将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background- repeat，background-position 的组合进行背景定位

- 利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大的提高页面的性能
- CSS Sprites 能减少图片的字节

## 14.css 的引入方式

### 1）行内样式

```html
<div style="width:100px"></div>
```

### 2）嵌入样式

```html
<style>
  div {
    width: 100px;
  }
</style>
```

### 3）外链样式

```html
<link rel="stylesheet" href="index.css" />
```

### 4）@import 导入样式

```css
@import url(index.css);
```

### 5）样式优先级

行内样式>嵌入样式>外链样式

### 6）link 和 import 的区别

- link 是 html 引入的样式；import 是 css 引入的
- 浏览器会先加载页面时同步加载 link 引入的 css 文件;页面加载完成后，再加载 import 引入的 css
- 浏览器对 link 的兼容性更高
- 优先级：link>import

## 常见的问题

### 1）不同浏览器的标签默认的 margin 和 padding 不一样

```css
* {
  margin: 0;
  padding: 0;
}
```

### 2）字体小于 12px

- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

### 3）超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了

- 解决方法是改变 CSS 属性的排列顺序

```css
a:link {
}
a:visited {
}
a:hover {
}
a:active {
}
```

### 4）display:inline-block 有间隙

- 有空格时候会有间隙 解决：移除空格
- margin 正值的时候 解决：margin 使用负值
- 使用 font-size 时候 解决：font-size:0、letter-spacing、word-spacing

---
toc: menu
---

# CSS 基础

## 1.CSS 的盒子模型

- 可以通过 `box-sizing` 设置

### 1）标准盒子模型（content-box）

- 宽度 = 内容的宽度（content）+ border + padding + margin

### 2）低版本 IE 盒子模型（border-box）

- 宽度 = 内容宽度（content+border+padding）+ margin

## 2.CSS 选择器

### 1）CSS 选择符

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
- overflow 为 hidden | auto | scorll
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

### 2）形成条件

- 父级元素设置 `display: flex` 或者 `display: inline-flex`

- 生成 FFC 后，其子元素的 float、clear 和 vertical-align 属性将失效

### 3）应用

**1.自动撑开页面高度，底栏总是出现在页面的底部**

**2.圣杯布局**

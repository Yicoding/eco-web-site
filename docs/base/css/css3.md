---
toc: menu
---

# css3

- css3 新特性
  - 新增各种 css 属性选择器
  - 圆角 border-radius
  - 颜色
  - 多列布局
  - 阴影和反射
  - 文字特效 text-shadow
  - 线性渐变
  - 多背景图片
  - 3D-transform

## 1.transition: 过渡动画

- transition-property: 属性
- transition-duration: 间隔
- transition-timing-function: 曲线
- transition-delay: 延迟
- 常用钩子: transitionend

## 2.animation / keyframes

- animation-name: 动画名称，对应@keyframes
- animation-duration: 间隔
- animation-timing-function: 曲线
- animation-delay: 延迟
- animation-iteration-count: 次数
  - infinite: 循环动画
- animation-direction: 方向
  - alternate: 反向播放
- animation-fill-mode: 静止模式
  - forwards: 停止时，保留最后一帧
  - backwards: 停止时，回到第一帧
  - both: 同时运用 forwards / backwards
- 常用钩子: animationend

## 3.transform

- translate
- scale
- rotate

## 4.颜色

### 1）rgba()

- alpha
- 增加透明度

### 2）hsla()

- hsl() 函数是用色调（hue）、饱和度（saturation）和亮度（liteness）来表示颜色
- alpha 参数代表颜色的透明度

```css
hsl(100, 100%, 50%) /* #5f0 */
hsla(235, 100%, 50%, .5) /* #0015ff with 50% opacity */
```

## 5.盒阴影 box-shadow

> box-shadow: h-shadow y-shadow blur spread color inset

- h-shadow、y-shadow 允许是负值

| 值       | 说明                                            |
| :------- | :---------------------------------------------- |
| h-shadow | `必需的`。水平阴影的位置。允许负值              |
| y-shadow | `必需的`。垂直阴影的位置。允许负值              |
| blur     | 可选。模糊距离                                  |
| spread   | 可选。扩展阴影半径，可负值 负值则整个阴影会缩小 |
| color    | 可选。阴影的颜色                                |
| inset    | 可选。从外层的阴影（开始时）改变阴影内侧阴影    |

## 6.边框

### 1）border-width

- 边框的宽度

> `border-top-width`、`border-right-width`、`border-bottom-width`、`border-left-width`

- 一个值 四个方向的边框方向同时设置为当前值
- 两个值 前一个值表示上下边框宽度，后两个值表示左右边框宽度
- 三个值 第一个值表示 上边框宽度；第二个值表示 左右边框宽度；第三个值 表示下边框宽度
- 四个值 第一个值表示 上边框宽度；第二个值表示 右边框宽度； 第三个值表示下边框宽度；第四个值表示左边框宽度

### 2）border-color

- 边框颜色

> `border-top-color`、`border-right-color`、`border-bottom-color`、`border-left-color`

### 3）border-style

- 边框的样式

> `border-top-style`、`border-right-style`、`border-bottom-style`、`border-left-style`

### 4）border-image

- 边框上绘制图像

> border-image: border-image-source border-image-slice border-image-width border-image-outset border-image-repeat

**1.border-image-source**

- 引入图片

> background-image-source: url(imageurl)

**2.border-image-slice**

- 裁剪特性

```css
border-image-slice: 27;
/* 表示上下左右各自在27px位置处进行切割 */
```

**3.border-image-repeat**

- 定义图片如何填充边框

| 属性名  | 定义                                                         |
| :------ | :----------------------------------------------------------- |
| stretch | 拉伸图片以填充边框                                           |
| repeat  | 平铺图片以填充边框                                           |
| round   | 平铺图像，当不能整数次平铺时，将根据情况放大或缩小图像       |
| space   | 平铺图像，当不能整数次平铺时，将根据情况放大或缩小图像       |
| round   | 平铺图像。如果无法完整平铺所有图像，扩展空间会分布在图像周围 |

## 7.背景

| 属性              | 说明                   |
| :---------------- | :--------------------- |
| background-repeat | 是否重复               |
| background-size   | 规定背景图片的尺寸     |
| background-origin | 规定背景图片的定位区域 |
| background-clip   | 规定背景的绘制区域     |

- 多背景

```css
body {
  background-image: url(img_flwr.gif), url(img_tree.gif);
}
```

## 8.媒体查询

### 1）基本

```css
@media all and (min-width: 800px) {
  /* ...; */
}
```

### 2）and 条件

```css
@media (min-width: 800px) and (max-width: 1200px) and (orientation: portrait) {
  /* ...; */
}
```

### 3）or 关键词

```css
@media (min-width: 800px) or (orientation: portrait) {
  /* ...; */
}
```

### 4）使用 not

```css
@media (not min-width: 800px) {
  /* ...; */
}
```

## 9.linear-gradient 渐变

```css
/* 1.水平渐变 颜色 */
background: linear-gradient(#228dfd, #f45749);

/* 2.水平渐变 stop */
background: linear-gradient(#228dfd 70%, #f45749);

/* 3.多种颜色渐变 */
background: linear-gradient(#228dfd 20%, #00cf00 40%, #f45749 80%);

/* 水平渐变的旋转 */
background: linear-gradient(45deg, #228dfd 20%, #00cf00 40%, #f45749 80%);
```

### 1）线性渐变

- 向下/向上/向左/向右/对角方向

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

### 2）径向渐变

-由它们的中心定义

```css
background: radial-gradient(center, shape size, start-color, ..., last-color);
```

## 10.Filter（滤镜）

### 1）blur(px)

- 高斯模糊

### 2）brightness(%)

- 调整图像的亮度

### 3）contrast(%)

- 调整图像的对比度

## 11.@font-face

```css
@font-face {
  font-family: 'Regular';
  src: url('../font/Regular.otf');
}
.classA {
  font-family: 'Regular';
}
```

- 自定义的字体

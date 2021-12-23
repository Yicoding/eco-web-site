---
toc: menu
---

# 实用技巧

## 1.`1像素边框`

### 1）四周边框

```css
.box {
  width: 80px;
  height: 80px;
  position: relative;
}
.box:after {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #ea5504;
  transform: scale(0.5, 0.5);
  transform-origin: top left;
}
```

### 2）单边边框

**1.height 实现**

```css
.box {
  width: 80px;
  height: 80px;
  position: relative;
}
.box:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #ea5504;
  transform: scaleY(0.5);
}
```

**2.border 实现**

```css
.box {
  width: 80px;
  height: 80px;
  position: relative;
}
.box:after {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ea5504;
  transform: scale(0.5, 0.5);
  transform-origin: top left;
}
```

## 2.控制文本省换行略号

### 1）单行

```css
.no-warp {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

### 2）多行

```css
.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  overflow: hidden;
}
```

## 3.绘制三角形

### 1）上三角

```css
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```

### 2）下三角

```css
#triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
}
```

### 3）左三角

```css
#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
}
```

### 4）右三角

```css
#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
}
```

### 5）左上角

```css
#triangle-topleft {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
}
```

### 6）右上角

```css
#triangle-topright {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
}
```

### 7）左下角

```css
#triangle-bottomleft {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
}
```

### 8）右下角

```css
#triangle-bottomright {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
}
```

## 4.绘制箭头

### 1）上箭头

```css
.arrow-up {
  display: inline-block;
  width: 7px;
  height: 7px;
  border: solid #999;
  border-width: 1px 1px 0 0;
  transform: rotate(-45deg);
}
```

### 2）下箭头

```css
.arrow-down {
  display: inline-block;
  width: 7px;
  height: 7px;
  border: solid #999;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg) translateY(-50%);
}
```

## 5.凹凸形状

```html
<style>
  .ao,
  .tu {
    display: inline-block;
    width: 0;
    margin-right: 50px;
  }
  .ao:before {
    content: 'love 你 love';
    outline: 2px solid #66c;
  }
  .tu:before {
    content: '你 love 你';
    outline: 2px solid #66c;
  }
</style>
<body>
  <div class="ao"></div>
  <div class="tu"></div>
</body>
```

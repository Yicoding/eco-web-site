---
toc: menu
---

# CSS 变量和 CSS Modules

## 1.CSS 变量

- 声明：--变量名
- 读取：var(--变量名, 默认值)
- 类型
  - 普通：只能用作属性值不能用作属性名
  - 字符：与字符串拼接 "Hello, "var(--name)
  - 数值：使用 calc()与数值单位连用 var(--width) \* 10px
- 作用域
  - 范围：在当前元素块作用域及其子元素块作用域下有效
  - 优先级别：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

### 1.定义

- CSS 变量又叫 CSS 自定义属性

### 2.使用

```css
/* 1.全局 */
:root {
  --primary-color: #000;
}
/* CSS文件的其他部分 */
#div {
  background-color: var(--primary-color);
}

/* 2.局部 */
#div {
  --primary-color: red;
  background-color: var(--primary-color);
}
```

### 3.切换主题

```html
<style>
  :root {
    --bg: white;
    --text-color: #555;
    --link-color: #639a67;
    --link-hover: #205d67;
  }
  .pink-theme {
    --bg: hotpink;
    --text-color: white;
    --link-color: #b793e6;
    --link-hover: #3532a7;
  }
</style>
<script>
  const toggleBtn = document.querySelector('.toggle-theme');

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.body.classList.contains('pink-theme')) {
      // 当前主题为粉色主题，需要移除 pink-theme class
      document.body.classList.remove('pink-theme');

      toggle.innerText = '切换正常主题色';
    } else {
      document.body.classList.add('pink-theme');
      toggle.innerText = '切换为粉色少女主题';
    }
  });
</script>
```

## 2.CSS Modules

- 所有的类名和动画名称默认都有各自的`作用域`的 CSS 文件

- 为了解决 css 命名冲突

- 借助 Webpack 或者其他构建工具的帮助，可以将 class 的名字唯一化，从而实现局部作用

### 1）全局作用域

```css
:global {
  .app {
    color: #61dafb;
  }
}

/* or */
:global(.app) {
  color: #61dafb;
}
```

### 2）Class 的组合

- 一个选择器可以继承另一个选择器的规则，这称为 `"组合"`（"composition"）

```css
.font-red {
  color: red;
}

.App-header {
  composes: font-red;
  /* ... */
}
```

### 3）使用变量

- 定义一个 colors.module.css

```css
@value blue: #0c77f8;
```

- 在 App.module.css 中

```css
@value colors: "./colors.module.css";
@value blue from colors;

.App-header {
  /* ... */
  color: blue;
}
```

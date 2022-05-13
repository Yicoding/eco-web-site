---
toc: menu
---

# 开发遇见的问题

## 1.transform: translateZ(1px)

- 导致在 `ios` 下层级最大，其他 z-index 不管设置多少，在 `ios` 中都盖不住

## 2.input 输入框 type="number"，maxLength 失效

### 1）原因

- type 并不能作为验证依据
- type 字段只是为输入提供选择格式,
- 更多情况下应该说新增的 type 是为了适配移动端 web app 的存在

### 2）解决

```html
<input
  type="number"
  name="phone"
  id="phone"
  value="phone"
  oninput="if(value.length>11) value=value.slice(0,11)"
/>
```

## 3.App 中 h5 页面突然无法发送接口请求了

在排除了 h5 自身和后端的原因，应该考虑下网关的问题

- 集成环境下：集成 wifi 的 host 配置映射问题

  - DNS 解析的问题

- 生产环境下：公网域名解析的问题

DNS 更新后，需重启客户端机器

## 4.比较 App 两个版本大小

```js
// 比较两个版本大小，返回v1是否大于v2
function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);
  // 调整两个版本号位数相同
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  // 循环判断每位数的大小
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return true;
    } else if (num1 < num2) {
      return false;
    }
  }
  return 0;
}
```

## 5.如果在一个项目中要使用同一个组件的两个版本

### 1）安装 npm 包

```bash
npm install --save antd-mobile-v5@npm:antd-mobile@next
# or
yarn add antd-mobile-v5@npm:antd-mobile@next
```

### 2）结果

- `package.json`变成

```json
{
  "antd-mobile": "^2.3.2",
  "antd-mobile-v5": "npm:antd-mobile@next"
}
```

## 6.商品开发

## 7.图片上传服务端保存问题

## 8.使用 CI/CD 构建好处

- 不在本地打包，统一在服务器上打包，每次安装新的 npm 包，防止项目在本地打包成功，其他人打包失败的情况，可以检查 package.json 中是否漏掉相关依赖

## 9.本地 npm 包安装冲突

### 1）删掉.lock 文件

### 2）package.json 添加 resolutions

```json
{
  "resolutions": {
    "react": "16.8.0"
  }
}
```

### 3）重新 yarn 或 npm i

## 10.CSS 中 calc(100%-100px)为什么不加空格会不生效？

### 1）不生效写法

```css
.foo {
  width: calc(100%-100px);
}
```

### 2）生效写法

```css
.foo {
  width: calc(100% - 100px);
}
```

### 3）calc 是什么？

- css3 的 计算属性，用于动态计算长度值。calc 语法：

```js
calc(expression); //expression是数学表达式
```

### 4）用法&定义

- 运算符前后都需要保留一个空格，例如：width: calc(100% - 100px)
- 任何长度值都可以使用 calc()函数进行计算
- calc()函数支持 `"+", "-", "*", "/"` 运算
- calc()函数使用标准的数学运算优先级规则

### 5）原因

- 编译 calc(100%-100px)时会产生歧义，在解析器看来应该是：100 和 %-100px，会将%-100px 认为是单位，但是无该单位的定义，所以这段就无法解析。所以使用空格隔开

## 11.当后端一次性丢给你 10 万条数据，要怎么处理

### 1）初级方案

- 采用懒加载+分页(前端维护懒加载的数据分发和分页)

- 懒加载和分页方式一般用于做长列表优化, 类似于表格的分页功能, 具体思路就是用户每次只加载能看见的数据, 当滚动到底部时再去加载下一页的数据

### 2）高级方案

- 使用虚拟滚动技术(目前 react 的 antd4.0 已支持虚拟滚动的 select 长列表)

- 虚拟滚动技术也可以用来优化长列表, 其核心思路就是每次只渲染可视区域的列表数,当滚动后动态的追加元素并通过顶部 padding 来撑起整个滚动内容

- 1.下拉到底，继续加载数据并拼接

- 2.数据太多，做虚拟列表展示：

  - 首屏加载的时候，只加载可视区域内需要的列表项
  - 滚动时，动态计算，获得可视区域内的列表项，并且将非可视区域内存在的列表项删除。
    虚拟列表

- 3.计算当前可视区域开始数据索引 startIndex

  - 计算当前可视觉区域结束索引 endIndex

  - 计算当前可视区域的数据，并渲染在页面上

  - 计算开始 startIndex 在总体列表中的位置偏移位置 startOffset，并且设置到列表上

- 4.滚动

  - 由于只是对可视区域内的列表进行渲染，为了保证列表容器的高度并可正常的触发滚动

  - 容器：infinite- list-container，相对定位

  - 需要一个元素来撑开高度保证滚动：infinite-list-phantom，绝对定位，z-index=0

  - 需要一个元素展示真正渲染的数据：infinite-list，绝对定位，z-index=-1

  - 监听滚动：监听 infinite-list-container 的滚动事件，获取 scrollTop

    - 可视区域的高度：screenHeight
    - 列表项的高度：itemSize
    - 列表数据：listData
    - 当前滚动位置：scrollTop

  - 最终想要的数据

        - 列表总高度：listHeigh = listData.length * itemSize
        - 可显示的列表项：visibleCount = Math.ceil(screenHeight / itemSize)
        - 数据的起始索引：startIndex = Math.floor(scrollTop / itemSize)
        - 数据的结束索引：endIndex = startIndex + visibleCount
        - 列表真正显示数据：visibleData = listData.slice(startIndex, endIndex)
        - 偏移量：startOffset = scrollTop -（scrollTop%itemSize），当滚动后，由于渲染区域相对于可视区域已经发生了偏移，此时需要获取一个偏移量startOffset，通过样式控制将渲染区域偏移至可视区域中。

  - 无限滚动：当滚动触底, 就加载新一批数据, 拼接到原来的数据上

## 12.ios 缓存清不掉的问题

- 之前是 UIWebview

- 现在苹果强制用 wkwebview

- 清理缓存要单独处理下

## 13.如何处理 JSON.parse 解析报错

- 使用 try catch 捕获错误

  ```js
  var item = "{'name': 1}";
  try {
    item = JSON.parse(item);
  } catch {
    item = {};
  }
  ```

## 14.图片的高度是根据屏幕宽度\*百分比算的，图片之间有缝隙

- 示例：

```js
375*21.5%=80.625px
```

## 15.package 管理规范

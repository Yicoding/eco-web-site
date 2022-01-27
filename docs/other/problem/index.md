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

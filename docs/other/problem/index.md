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

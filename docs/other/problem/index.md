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

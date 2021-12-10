---
toc: menu
---

# 数据劫持和代理

## 1.defineproperty

- 利用 Object.defineProperty 劫持对象的访问器,在属性值发生变化时我们可以获取变化,从而进行进一步操作

### 1）语法

- `Object.defineProperty(obj, prop, descriptor)`

```js
const obj = {
  name: 'obj',
};
let _val = undefined;
Object.defineProperty(obj, 'name', {
  value: undefined,
  configurable: true,
  enumerable: true,
  writable: true,
  get() {
    return _val;
  },
  set(newVal) {
    if (newVal !== val) {
      _val = newVal;
    }
  },
});
```

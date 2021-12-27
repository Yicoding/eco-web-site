---
toc: menu
---

# react 进阶

## 1.context 原理

### 1）context 对象

```js
export function createContext(defaultValue, calculateChangedBits) {
  /* context 对象本质  */
  const context = {
    $$typeof: REACT_CONTEXT_TYPE /* 本质上就是 Consumer element 类型 */,
    _calculateChangedBits: calculateChangedBits,
    _currentValue: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
  };
  /* 本质上就是 Provider element 类型。  */
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context,
  };
  context.Consumer = context;
}
```

- `Provider` 本质上是一个 element 对象 $$typeof -> REACT_PROVIDER_TYPE
- `Consumer` 本质上也是一个 element 对象 $$typeof -> REACT_CONTEXT_TYPE
- `_currentValue` 这个用来`保存传递`给 Provider 的 `value`

### 2）Provider 提供者

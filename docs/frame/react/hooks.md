---
toc: menu
---

# hooks

## 1.useMemo()

### 1）useMemo 用法

```js
const cacheSomething = useMemo(create, deps);
```

- `create`：第一个参数为一个函数，函数的返回值作为缓存值，如上 demo 中把 Children 对应的 element 对象，缓存起来
- `deps`： 第二个参数为一个数组，存放当前 useMemo 的依赖项，在函数组件下一次执行的时候，会对比 deps 依赖项里面的状态，是否有改变，如果有改变重新执行 create ，得到新的缓存值
- `cacheSomething`：返回值，执行 create 的返回值。如果 deps 中有依赖项改变，返回的重新执行 create 产生的值，否则取上一次缓存值

### 2）useMemo 原理

- useMemo 会`记录上一次`执行 create 的`返回值`，并把它`绑定`在函数组件对应的 `fiber` 对象上，只要组件不销毁，缓存值就一直存在，但是 deps 中如果有一项改变，就会重新执行 create ，返回值作为新的值记录到 fiber 对象上

### 3）useMemo 应用场景

- 可以`缓存` element `对象`，从而达到按条件渲染组件，`优化性能`的作用
- 如果组件中不期望每次 render 都重新`计算`一些`值`,可以利用 useMemo 把它`缓存`起来
- 可以把`函数和属性缓存`起来，作为 PureComponent 的绑定方法，或者配合其他 Hooks 一起使用

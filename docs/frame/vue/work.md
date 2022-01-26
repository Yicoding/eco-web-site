---
toc: menu
---

# vue 运行机制

## 1.运行机制全局概览

- 内部流程图

![image](images/frame/10.png)

### 1）初始化及挂载

![image](images/frame/11.png)

- 在 `new Vue()` 之后，Vue 会调用 `_init` 函数进行初始化

- 会初始化`生命周期`、`事件`、 `props`、 `methods`、 `data`、 `computed` 与 `watch` 等

- 通过 `Object.defineProperty` 设置 `setter` 与 `getter` 函数，实现「响应式」以及「依赖收集」

- 初始化之后调用 `$mount` 会挂载组件
  - 如果是`运行时编译`，即不存在 render function 但是存在 `template` 的情况，需要进行「编译」步骤

### 2）编译

- `compile` 编译可以分成 `parse`、`optimize` 与 `generate` 三个阶段，最终需要得到 render function

![image](images/frame/12.png)

**1.parse**

- `parse` 会用`正则等方式`解析 `template` 模板中的`指令、class、style` 等数据，形成 `AST`

**2.optimize**

- `optimize` 的主要作用是`标记 static 静态节点`
- 这是 Vue 在编译过程中的一处优化
- 后面当 `update` 更新界面时，会有一个 `patch` 的过程， `diff` 算法会直接`跳过静态节点`，从而`减少了比较的过程`，优化了 patch 的性能

**3.generate**

- `generate` 是将 `AST` `转化`成 render function `字符串的过程`，得到结果是 `render 的字符串`以及 `staticRenderFns 字符串`

- 在`经过` parse、optimize 与 generate 这`三个阶段`以`后`，组件中就会`存在`渲染 VNode `所需的 render function 了`

### 3）响应式

![image](images/frame/13.png)

- 1.`getter` 跟 `setter`，在 `init` 的时候通过 `Object.defineProperty` 进行了`绑定`

- 2.当被设置的对象`被读取`的时候会`执行 getter` 函数，而在当`被赋值`的时候会`执行 setter` 函数

- 3.当 `render function 被渲染`的时候，因为会读取所需对象的值，所以会`触发 getter` 函数进行`「依赖收集」`，「依赖收集」的`目的`是将`观察者 Watcher` 对象`存放`到当前`闭包`中的订阅者 `Dep` 的 `subs` 中

![image](images/frame/14.png)

- 4.在`修改`对象的值的时候，会`触发`对应的 `setter`， setter `通知`之前「依赖收集」得到的 `Dep` 中的每一个 `Watcher`，告诉它们自己的值改变了，需要重新渲染视图。这时候这些 `Watcher` 就会开始`调用 update` 来更新视图

### 4）Virtual DOM

- render function 会被转化成 `VNode 节点`

- `Virtual DOM` 其实就是一棵以 `JavaScript 对象`（ VNode 节点）`作为基础的树`，`用对象属性`来`描述节点`，实际上只是一层`对真实 DOM 的抽象`，最终可以通过一系列操作使这棵树映射到真实环境上

- 由于 Virtual DOM 是`以 JavaScript 对象为基础`而`不依赖真实平台环境`，所以使它`具有了跨平台`的能力，比如说浏览器平台、Weex、Node 等

### 5）更新视图

![image](images/frame/15.png)

- 当`数据变化后`，执行 `render function` 就可以`得到`一个`新的 VNode 节点`

- 我们如果想要得到新的视图，最简单粗暴的方法就是直接解析这个新的 VNode 节点，然后用 innerHTML 直接全部渲染到真实 DOM 中。但是其实我们只对其中的一小块内容进行了修改，这样做似乎有些「浪费」

- 将`新的` VNode 与`旧的` VNode 一起`传入 patch` 进行`比较`，经过 `diff` 算法得出它们的`「差异」`
  - 最后只需要将这些`「差异」`的对应 `DOM` 进行`修改`即可

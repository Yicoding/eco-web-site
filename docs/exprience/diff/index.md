---
toc: menu
---

# Virtual DOM 和 DOM-diff

## 1.什么是 Virtual DOM

- Virtual DOM 是对 DOM 的抽象,本质上是 JavaScript 对象

- Virtual dom, 即虚拟 DOM 节点。通过 JS 的 Object 对象模拟 DOM 中的节点，然后再通过特定的 render 方法将其渲染成真实的 DOM 节点

- ⽤ JavaScript 对象表示 DOM 信息和结构，更新后使之与真实 dom 保持同步，同步过程就是协调，核心是 diff 算法

## 2.为什么操作 dom 性能开销大

- 频繁操作 DOM 会让浏览器产生回流和重绘，性能会非常低

## 3.为什么要使用 Virtual DOM

### 1）减少 DOM 操作

- DOM 操作很慢，轻微的操作都可能导致⻚面回流和重绘，⾮常耗性能

- 相对于 DOM 对象，js 对象处理起来更快，而且更简单

- 通过 diff 算法对比新旧 vdom 之间的差异，可以 批量的、最⼩化的执行 dom 操作，从而提高性能

- 在 patch 过程中尽可能地一次性将差异更新到 DOM 中,这样保证了 DOM 不会出现性能很差的情况

### 2）跨平台渲染

- 虚拟 DOM 可以实现跨平台渲染，服务器渲染 、小程序、原生应用都使用了虚拟 DOM，因为虚拟 DOM 本质上只是一个 JS 对象

## 4.Virtual DOM 有什么缺点

- 并不是所有情况使用虚拟 DOM 都提高性能，是针对在复杂的的项目使用

- 如果简单的操作，使用虚拟 DOM,要创建虚拟 DOM 对象等等一系列操作，还不如普通的 DOM 操作

- 需要额外的创建函数，如 createElement 或 h，但可以通过 JSX 来简化成 XML 写法

## 5.Virtual DOM 的结构

- 虚拟 DOM 就是一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性

## 6.如何创建 Virtual DOM

### 1）React.createElement

```js
React.createElement('div', { className: 'red', onClick: () => {} }, [
  React.createElement('span', {}, 'span1'),
  React.createElement('span', {}, 'span2'),
]);
```

### 2）Vue（只能在 render 函数里得到 h）

```js
h(
  'div',
  {
    class: 'red',
    on: {
      click: () => {},
    },
  },
  [h('span', {}, 'span1'), h('span', {}, 'span2')],
);
```

## 7.diff 算法

### 1）目的

- diff 的目的就是比较新旧 Virtual DOM Tree 找出差异并更新

### 2）树 diff 的时间复杂度 O(n3)

- 要比较 Virtual DOM Tree 的差异,理论上的时间复杂度高达 O(n^3)：

  - 首先，遍历 tree1

  - 其次，遍历 tree2

  - 最后，对树进行排序

  - 这样 n*n*n ，就达到了 O(n3)

### 3）优化时间复杂度到 O(n)

- 通过 diff 算法，可以将时间复杂度从 O(n3)优化到 O(n)：

  - 只比较同一层级，不跨级比较

  - tag 不相同，则直接删掉重建，不再深度比较

  - tag 和 key ，两者都相同，则认为是相同节点，不再深度比较

## 8.React diff 算法策略

- 针对树结构(tree diff)：对 UI 层的 DOM 节点跨层级的操作进行忽略（数量少）

- 针对组件结构(component diff)：拥有相同类的两个组件生成相似的树形结构，拥有不同类的两个组件会生成不同的属性结构

- 针对元素结构(element-diff): 对于同一层级的一组节点，使用具有唯一性的 id 区分 (key 属性)

### 1）tree diff 的特点

- React 通过使用 updateDepth 对 虚拟 DOM 树进行层次遍历

- 两棵树只对同一层级节点进行比较，只要该节点不存在了，那么该节点与其所有子节点会被完全删除,不在进行进一步比较

- 只需要遍历一次，便完成对整个 DOM 树的比较

### 2）component diff 的特点

- 同一类型的组件，按照原策略(tree diff)比较 virtual DOM tree

- 同类型组件，组件 A 转化为了组件 B，如果 virtual DOM 无变化，可以通过 shouldComponentUpdate()方法来判断是否

- 不同类型的组件，那么 diff 算法会把要改变的组件判断为 dirty component,从而替换整个组件的所有节点

### 3）element diff 特点

对于处于同一层级的节点，React diff 提供了三种节点操作: 插入，移动，删除

- 插入： 新的组件不在原来的集合中，而是全新的节点，则对集合进行插入操作。
- 删除：组件已经在集合中，但集合已经更新，此时节点就需要删除。
- 移动：组件已经存在于集合中，并且集合更新时，组件并没有发生更新，只是位置发生改变，例如：(A,B,C,D) → (A,D,B,C), 如果为传统 diff 则会在检测到旧集合中第二位为 B，新集合第二位为 D 时删除 B，插入 D，并且后面的所有节点都要重新加载，而 React diff 则是通过向同一层的节点添加 唯一 key 进行区分，并且移动

## 9.key 值的重要性

- react key 是为了提升 diff 过程以及最终操作 dom 的性能

  - react 的 diff 子元素列表的时候，会根据当前 key 值，去新旧树中寻找到对应的子元素来进行比较

- key 值必须是稳定的（不能使用 Math.random 去创建 key）, 可预测并且是唯一的：

  - 保持 DOM 结构的稳定性

  - 加唯一 key 值

- React 会根据 key 来决定是销毁重新创建组件还是更新组件，原则是：

  - key 相同，组件有所变化，React 会只更新组件对应变化的属性

  - key 不同，组件会销毁之前的组件，将整个组件重新渲染

## 10.diff 简易实现

### 1）将 vdom 转化为真实 dom

```js
const createElement = (vnode) => {
  let tag = vnode.tag;
  let attrs = vnode.attrs || {};
  let children = vnode.children || [];
  if (!tag) {
    return null;
  }
  //创建元素
  let elem = document.createElement(tag);
  //属性
  let attrName;
  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName]);
    }
  }
  //子元素
  children.forEach((childVnode) => {
    //给elem添加子元素
    elem.appendChild(createElement(childVnode));
  });

  //返回真实的dom元素
  return elem;
};
```

### 2）用简易 diff 算法做更新操作

```js
function updateChildren(vnode, newVnode) {
  let children = vnode.children || [];
  let newChildren = newVnode.children || [];

  children.forEach((childVnode, index) => {
    let newChildVNode = newChildren[index];
    if (childVnode.tag === newChildVNode.tag) {
      //深层次对比, 递归过程
      updateChildren(childVnode, newChildVNode);
    } else {
      //替换
      replaceNode(childVnode, newChildVNode);
    }
  });
}
```

## react 的 diff 和 vue 的 diff 有什么不同

- react 是两个链表进行比较

  - React 的思路是递增法。通过对比新的列表中的节点，在原本的列表中的位置是否是递增，来判断当前节点是否需要移动

- vue 中是两个数组进行比较

  - vue2.x 双端比较：新列表和旧列表两个列表的头与尾互相对比，，在对比的过程中指针会逐渐向内靠拢，直到某一个列表的节点全部遍历过，对比停止

  - vue3.x 最长递增子序列：

    - 相同的前置与后置元素的预处理

    - 最长递增子序列

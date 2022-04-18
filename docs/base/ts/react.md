---
toc: menu
---

# react 中的 ts

## 1.枚举

- 可维护性
- 可读性

```ts
enum TestEnum {
  /**
   * 这是一个测试枚举
   */ TEST,
}
```

## 2.箭头函数的泛型

```ts
const fn = <T extends object>(p: T): T => {
  return p;
};
```

## 3.React.FC、React.VFC

- React.FC 显式地定义了返回类型，其他方式是隐式推导的
- React.FC 对静态属性：`displayName`、`propTypes`、`defaultProps` 提供了类型检查和自动补全
- React.FC 为 children 提供了隐式的类型

```js
const MyC: React.FC<MyCProps> = (props) => {
  const { children, ...mycProps } = props;
}; // 与 FC 少定义了 children
const MyC: React.VFC<MyCProps> = (props) => {
  const { ...mycProps } = props;
};
```

## 4.React.ReactNode、React.ReactElement

- React.ReactNode: 用来定义组件 `children`

  ```js
  type ReactNode =
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
  ```

- React.ReactElement 虚拟 DOM，用来定义一个组件 `return` 类型

  ```ts
  interface ReactElement<P, T> {
    type: T;
    props: P;
    key: Key | null;
  }
  ```

## 5.React.CSSProperties 定义 style 对象

## 6.useRef 泛型

```js
const ref = useRef<HTMLSpanElement>(null) // React.RefObject 传递给内置的 ref 属性，绑定 DOM 元素
const ref = useRef(null) // React.MutableRefObject
const ref = useRef<HTMLSpanElement>() // React.MutableRefObject
```

## 7.Event 类型

- `React.MouseEvent<HTMLSpanElement>`
- `React.ChangeEvent<HTMLInputElement>`

## 8.Handle 类型

- `React.MouseEventHandler<HTMLSpanElement>`
- `React.ChangeEventHandler<HTMLInputElement>`

## 9.获取组件的 Props

- `React.ComponentProps<typeof AddAppModel>`

## 10.工具类型

- Partial: 将类型 T 中的属性全部变成可选属性

- Required:将类型 T 中的属性全部变成必填属性

- Pick<T, K>：从类型 T 中，选出 key 为 K 的属性

- Omit<T, K>: 从类型 T 中，过滤 key 为 K 的属性

- Record<K, T>: 返回一个对象类型，以 K 为 key，以 T 为 value

- Readonly：将类型 T 中的属性全部变成只读

- Parameters: 输入函数类型，输出函数的参数的类型

- ReturnType: 输入函数类型，输出函数的返回值的类型

- Promise: T 泛型变量用于确定 then 方法时接收的第一个回调函数的参数类型

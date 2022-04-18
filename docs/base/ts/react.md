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

---

## 11.react 中的 ts 类型定义

### 1）React.ReactText

- string
- number

### 2）React.ReactChild

- ReactText
- React 组件

### 3）React.ReactNode

- ReactChild
- ReactFragment
- ReactPortal
- boolean
- null
- undefined

```js
const elementOrPrimitive: React.ReactNode = 'string' || 0 || false || null || undefined || <div /> || <MyComponent />;
const Component = ({ children: React.ReactNode }) => ...
```

### 4）React.CSSProperties

- React CSS 属性,代表着 Style Object 在 JSX 文件中（通常用于 css-in-js）

```js
const styles: React.CSSProperties = { flexDirection: 'row', ...
const element = <div style={styles} ...
```

### 5）React.FunctionComponent<P={}>

- 简写 FC<P={}>，无状态组件(SFC)，函数组件的类型定义，一个泛型接口，可以接受一个参数，可以不传，用来定义 props 的类型

```js
interface EditorsProps {
  detail: string;
}
// const Editors:React.FunctionComponent<EditorsProps> = (props) => {
const Editors: React.FC<EditorsProps> = (props) => {
  const { detail } = props;
  return <>{detail}</>;
};
```

### 6）Component<P,S={}>/PureComponent<P,S={}>

- 泛型类，接收两个参数，第一个是 props 的类型定义，第二个是 state 的类型定义(可以省略，但当有父组件传递属性方法或者定义 state 的时候还是需要,当没有的情况下省去,和不用 TypeScript 使用一样)，示例代码：

```js
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface CountProps extends RouteComponentProps {
  //可以继承其它的接口类型
  count: number;
  asyncAddCount: (count: number) => void;
  asyncReduceCount: (count: number) => void;
}
interface CountStateType {
  //当需要的时候才定义
}
class Counter extends Component<CountProps, CountStateType> {
  render(): JSX.Element {
    const { count, asyncAddCount, asyncReduceCount } = this.props;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={asyncAddCount.bind(null, 10)}>Counter++</button>
        <button onClick={asyncReduceCount.bind(null, 10)}>Counter--</button>
      </div>
    );
  }
}
```

### 7）JSX.Element 或 React.ReactElement<P>

- return 返回的 jsx 语法类型，例如上述的 render 中 return 的就是这个类型

```js
const elementOnly: React.ReactElement = <div /> || <MyComponent />;
```

### 8）ComponentClass<P,S={}>

- 类的类型，泛型接口，可以在高阶组件中使用,当接收一个类或者函数的时候

```js
import React, { Context, FC, ComponentClass, createContext, useReducer } from 'react';

const ProviderContext: Context<any> = createContext('provider');

export default const RootProvider = (reducer: Function, initialState: any) => (Com: FC<any> | ComponentClass<any,any>) => {
  return () => {
    const [state, dispatch] = useReducer<any>(reducer, initialState);
    return (
      <ProviderContext.Provider value={{ state, dispatch }}>
        <Com />
      </ProviderContext.Provider >
    );
  }
}
```

### 9）Context

- context 的类型就是他的本身，一个泛型接口

```js
//源码的类型定义如下:可以发现我们需要传递一个类型，从而使得里面的参数类型也是一致
interface Context<T> {
  Provider: Provider<T>;
  Consumer: Consumer<T>;
  displayName?: string;
}
```

### 10）Dispatch<any>

- 泛型接口，用于定义 dispatch 的类型，常常用于 useReducer 生成的 dispatch 中

```js
// 创建一个异步action的函数，返回一个包含异步action对象
const asyncAction = (dispatch: Dispatch<any>) => {
  return {
    asyncAddaction() {
      console.log('执行addActions之前: ' + Date.now());
      setTimeout(() => {
        console.log('执行addActions : ' + Date.now());
        dispatch(addActions());
      }, 1000);
    },
  };
};
```

### 11）LazyExoticComponent

- lazy 懒加载的类型，泛型接口，可以接受各种类型的参数，视情况而定，例如：

```js
export interface RouteType {
  pathname: string;
  component: LazyExoticComponent<any>;
  exact: boolean;
  title?: string;
  icon?: string;
  children?: RouteType[];
}
export const AppRoutes: RouteType[] = [
  {
    pathname: '/login',
    component: lazy(() => import('../views/Login/Login')),
    exact: true,
  },
  {
    pathname: '/404',
    component: lazy(() => import('../views/404/404')),
    exact: true,
  },
  {
    pathname: '/',
    exact: false,
    component: lazy(() => import('../views/Admin/Admin')),
  },
];
```

### 12）RefForwardingComponent<T, P = {}>

- forwardRef，ref 转发的类型定义，泛型接口,接收两个参数

```js
forwardRef(Editors) as RefForwardingComponent<any, any>;
//分别是ref的类型和props的类型,为了简单可以都定义为any
//源码类型定义如下
 interface RefForwardingComponent<T, P = {}> {
	(props: PropsWithChildren<P>, ref: Ref<T>): ReactElement | null;
	propTypes?: WeakValidationMap<P>;/
	contextTypes?: ValidationMap<any>;
	defaultProps?: Partial<P>;
	displayName?: string;
 }
```

### 13）MutableRefObject<any>

- 泛型接口，接收一个参数，作为 useRef 的类型定义，参数可以为任意类型

```js
const prctureRef: React.MutableRefObject<any> = useRef();
```

### 14）useState<any>

- hooks 的 useState 是一个泛型函数，可以传递一个类型来定义这个 hooks

```ts
const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
```

### 15）其他

```js
interface IProps {
  name: React.ReactText;

  children?: React.ReactChild;

  header?: React.ReactNode;
}
```

## 12.react-router 常用类型

### 1）RouteComponentProps

- 最常见的路由 api 的类型定义,里面包含了 history,location,match,staticContext 这四个路由 api 的类型定义

```js
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export default function Admin({
  history,
  location,
  match,
}: RouteComponentProps) {
  return <>这是主页</>;
}
```

## 13.react 内部事件定义

### 1）FormEvent

- 一个 react 的 form 表单 event 的类型

```js
<form
  onSubmit={(e: FormEvent) => {
    e.preventDefault();
  }}
></form>
```

### 2）ChangeEvent

- react 的 onChange 事件触发的 event 类型，这是一个泛型接口，使用如下：

```js
<input
  type="text"
  value={count}
  onChange={(e: ChangeEvent<HTMLInputElement>) => {
    setCount(e.currentTarget.value); //HTMLInputElement表示这个一个html的input节点
  }}
/>
```

- 可选泛型类型:`HTMLSelectElement`、`HTMLInputElement`、`HTMLDivElement`、`HTMLTextAreaElement` 等 html 标签的所有类型节点。 还有其他各种事件处理类型，可以在@types/react 中查看

### 3）SyntheticEvent<T = Element, E = Event>

- 泛型接口，事件包装器，即原生事件的集合，就是原生事件的组合体

> 您的事件处理程序将传递 SyntheticEvent 的实例，这是一个跨浏览器原生事件包装器。(官方介绍)

```js
<button onClick={(e:SyntheticEvent<Element, Event>)=>{}}></button>
<input onChange={(e:SyntheticEvent<Element, Event>)=>{}}/>
<form
	onSubmit={(e: SyntheticEvent<Element, Event>) => {}}
	onBlur={(e: SyntheticEvent<Element, Event>) => {}}
	onKeyUp={(e: SyntheticEvent<Element, Event>) => {}}
>
</form>
```

### 4）`React.ReactEventHandler<HTMLElement>`

- 通用的 React Event Handler

```js
const handleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => { ... }

<input onChange={handleChange} ... />
```

## 14.Antd 的类型定义

### 1）FormComponentProps

- 用于 Form 组件的使用

```js
import React from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
interface AddFormProps extends FormComponentProps {}
function AddForm({ form }: AddFormProps) {
  return <Form></Form>;
}
export default Form.create()(AddForm) as any;
```

- 里面的 form 的类型是 WrappedFormUtils 泛型接口,正常在对 form 赋值的时候的定义

### 2）ColumnProps<any>

- 表格定义的 columns 属性的每一项的类型，参数 any 表示表格数据的类型，示例如下:

```js
interface ProductType {
  key: string;
  name: string;
  desc: string;
}
const columns: ColumnProps<ProductType>[] = [
  {
    title: '商品名称',
    dataIndex: 'name',
  },
  {
    title: '商品详情',
    dataIndex: 'desc',
  },
];
```

## 15.Promise<any>

```js
interface IResponse<T> {
  message: string;
  result: T;
  success: boolean;
}
async function getResponse(): Promise<IResponse<number[]>> {
  return {
    message: '获取成功',
    result: [1, 2, 3],
    success: true,
  };
}
getResponse().then((response) => {
  console.log(response.result);
});
```

## 16.axios

```js
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
const server: AxiosInstance = axios.create();
server.interceptors.request.use((config: AxiosRequestConfig) => {
  //请求拦截
  return config;
});
server.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      res = res.data;
    }
    return res;
  },
  (err: AxiosError) => {},
);
```

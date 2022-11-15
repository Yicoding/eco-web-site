(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},tiwz:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),r=t("H1Ra");t("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u4e2d\u7684-ts"},l.a.createElement(c["AnchorLink"],{to:"#react-\u4e2d\u7684-ts","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"react \u4e2d\u7684 ts"),l.a.createElement("h2",{id:"1\u679a\u4e3e"},l.a.createElement(c["AnchorLink"],{to:"#1\u679a\u4e3e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u679a\u4e3e"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u7ef4\u62a4\u6027"),l.a.createElement("li",null,"\u53ef\u8bfb\u6027")),l.a.createElement(r["a"],{code:"enum TestEnum {\n  /**\n   * \u8fd9\u662f\u4e00\u4e2a\u6d4b\u8bd5\u679a\u4e3e\n   */ TEST,\n}",lang:"ts"}),l.a.createElement("h2",{id:"2\u7bad\u5934\u51fd\u6570\u7684\u6cdb\u578b"},l.a.createElement(c["AnchorLink"],{to:"#2\u7bad\u5934\u51fd\u6570\u7684\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u7bad\u5934\u51fd\u6570\u7684\u6cdb\u578b"),l.a.createElement(r["a"],{code:"const fn = <T extends object>(p: T): T => {\n  return p;\n};",lang:"ts"}),l.a.createElement("h2",{id:"3reactfcreactvfc"},l.a.createElement(c["AnchorLink"],{to:"#3reactfcreactvfc","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.React.FC\u3001React.VFC"),l.a.createElement("ul",null,l.a.createElement("li",null,"React.FC \u663e\u5f0f\u5730\u5b9a\u4e49\u4e86\u8fd4\u56de\u7c7b\u578b\uff0c\u5176\u4ed6\u65b9\u5f0f\u662f\u9690\u5f0f\u63a8\u5bfc\u7684"),l.a.createElement("li",null,"React.FC \u5bf9\u9759\u6001\u5c5e\u6027\uff1a",l.a.createElement("code",null,"displayName"),"\u3001",l.a.createElement("code",null,"propTypes"),"\u3001",l.a.createElement("code",null,"defaultProps")," \u63d0\u4f9b\u4e86\u7c7b\u578b\u68c0\u67e5\u548c\u81ea\u52a8\u8865\u5168"),l.a.createElement("li",null,"React.FC \u4e3a children \u63d0\u4f9b\u4e86\u9690\u5f0f\u7684\u7c7b\u578b")),l.a.createElement(r["a"],{code:"const MyC: React.FC<MyCProps> = (props) => {\n  const { children, ...mycProps } = props;\n}; // \u4e0e FC \u5c11\u5b9a\u4e49\u4e86 children\nconst MyC: React.VFC<MyCProps> = (props) => {\n  const { ...mycProps } = props;\n};",lang:"js"}),l.a.createElement("h2",{id:"4reactreactnodereactreactelement"},l.a.createElement(c["AnchorLink"],{to:"#4reactreactnodereactreactelement","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.React.ReactNode\u3001React.ReactElement"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"React.ReactNode: \u7528\u6765\u5b9a\u4e49\u7ec4\u4ef6 ",l.a.createElement("code",null,"children")),l.a.createElement(r["a"],{code:"type ReactNode =\n  | ReactChild\n  | ReactFragment\n  | ReactPortal\n  | boolean\n  | null\n  | undefined;",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"React.ReactElement \u865a\u62df DOM\uff0c\u7528\u6765\u5b9a\u4e49\u4e00\u4e2a\u7ec4\u4ef6 ",l.a.createElement("code",null,"return")," \u7c7b\u578b"),l.a.createElement(r["a"],{code:"interface ReactElement<P, T> {\n  type: T;\n  props: P;\n  key: Key | null;\n}",lang:"ts"}))),l.a.createElement("h2",{id:"5reactcssproperties-\u5b9a\u4e49-style-\u5bf9\u8c61"},l.a.createElement(c["AnchorLink"],{to:"#5reactcssproperties-\u5b9a\u4e49-style-\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.React.CSSProperties \u5b9a\u4e49 style \u5bf9\u8c61"),l.a.createElement("h2",{id:"6useref-\u6cdb\u578b"},l.a.createElement(c["AnchorLink"],{to:"#6useref-\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.useRef \u6cdb\u578b"),l.a.createElement(r["a"],{code:"const ref = useRef<HTMLSpanElement>(null) // React.RefObject \u4f20\u9012\u7ed9\u5185\u7f6e\u7684 ref \u5c5e\u6027\uff0c\u7ed1\u5b9a DOM \u5143\u7d20\nconst ref = useRef(null) // React.MutableRefObject\nconst ref = useRef<HTMLSpanElement>() // React.MutableRefObject",lang:"js"}),l.a.createElement("h2",{id:"7event-\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#7event-\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.Event \u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"React.MouseEvent<HTMLSpanElement>")),l.a.createElement("li",null,l.a.createElement("code",null,"React.ChangeEvent<HTMLInputElement>"))),l.a.createElement("h2",{id:"8handle-\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#8handle-\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"8.Handle \u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"React.MouseEventHandler<HTMLSpanElement>")),l.a.createElement("li",null,l.a.createElement("code",null,"React.ChangeEventHandler<HTMLInputElement>"))),l.a.createElement("h2",{id:"9\u83b7\u53d6\u7ec4\u4ef6\u7684-props"},l.a.createElement(c["AnchorLink"],{to:"#9\u83b7\u53d6\u7ec4\u4ef6\u7684-props","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"9.\u83b7\u53d6\u7ec4\u4ef6\u7684 Props"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"React.ComponentProps<typeof AddAppModel>"))),l.a.createElement("h2",{id:"10\u5de5\u5177\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#10\u5de5\u5177\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"10.\u5de5\u5177\u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Partial: \u5c06\u7c7b\u578b T \u4e2d\u7684\u5c5e\u6027\u5168\u90e8\u53d8\u6210\u53ef\u9009\u5c5e\u6027")),l.a.createElement("li",null,l.a.createElement("p",null,"Required:\u5c06\u7c7b\u578b T \u4e2d\u7684\u5c5e\u6027\u5168\u90e8\u53d8\u6210\u5fc5\u586b\u5c5e\u6027")),l.a.createElement("li",null,l.a.createElement("p",null,"Pick<T, K>\uff1a\u4ece\u7c7b\u578b T \u4e2d\uff0c\u9009\u51fa key \u4e3a K \u7684\u5c5e\u6027")),l.a.createElement("li",null,l.a.createElement("p",null,"Omit<T, K>: \u4ece\u7c7b\u578b T \u4e2d\uff0c\u8fc7\u6ee4 key \u4e3a K \u7684\u5c5e\u6027")),l.a.createElement("li",null,l.a.createElement("p",null,"Record<K, T>: \u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff0c\u4ee5 K \u4e3a key\uff0c\u4ee5 T \u4e3a value")),l.a.createElement("li",null,l.a.createElement("p",null,"Readonly\uff1a\u5c06\u7c7b\u578b T \u4e2d\u7684\u5c5e\u6027\u5168\u90e8\u53d8\u6210\u53ea\u8bfb")),l.a.createElement("li",null,l.a.createElement("p",null,"Parameters: \u8f93\u5165\u51fd\u6570\u7c7b\u578b\uff0c\u8f93\u51fa\u51fd\u6570\u7684\u53c2\u6570\u7684\u7c7b\u578b")),l.a.createElement("li",null,l.a.createElement("p",null,"ReturnType: \u8f93\u5165\u51fd\u6570\u7c7b\u578b\uff0c\u8f93\u51fa\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b")),l.a.createElement("li",null,l.a.createElement("p",null,"Promise: T \u6cdb\u578b\u53d8\u91cf\u7528\u4e8e\u786e\u5b9a then \u65b9\u6cd5\u65f6\u63a5\u6536\u7684\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b"))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"11react-\u4e2d\u7684-ts-\u7c7b\u578b\u5b9a\u4e49"},l.a.createElement(c["AnchorLink"],{to:"#11react-\u4e2d\u7684-ts-\u7c7b\u578b\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"11.react \u4e2d\u7684 ts \u7c7b\u578b\u5b9a\u4e49"),l.a.createElement("h3",{id:"1reactreacttext"},l.a.createElement(c["AnchorLink"],{to:"#1reactreacttext","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09React.ReactText"),l.a.createElement("ul",null,l.a.createElement("li",null,"string"),l.a.createElement("li",null,"number")),l.a.createElement("h3",{id:"2reactreactchild"},l.a.createElement(c["AnchorLink"],{to:"#2reactreactchild","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09React.ReactChild"),l.a.createElement("ul",null,l.a.createElement("li",null,"ReactText"),l.a.createElement("li",null,"React \u7ec4\u4ef6")),l.a.createElement("h3",{id:"3reactreactnode"},l.a.createElement(c["AnchorLink"],{to:"#3reactreactnode","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09React.ReactNode"),l.a.createElement("ul",null,l.a.createElement("li",null,"ReactChild"),l.a.createElement("li",null,"ReactFragment"),l.a.createElement("li",null,"ReactPortal"),l.a.createElement("li",null,"boolean"),l.a.createElement("li",null,"null"),l.a.createElement("li",null,"undefined")),l.a.createElement(r["a"],{code:"const elementOrPrimitive: React.ReactNode = 'string' || 0 || false || null || undefined || <div /> || <MyComponent />;\nconst Component = ({ children: React.ReactNode }) => ...",lang:"js"}),l.a.createElement("h3",{id:"4reactcssproperties"},l.a.createElement(c["AnchorLink"],{to:"#4reactcssproperties","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09React.CSSProperties"),l.a.createElement("ul",null,l.a.createElement("li",null,"React CSS \u5c5e\u6027,\u4ee3\u8868\u7740 Style Object \u5728 JSX \u6587\u4ef6\u4e2d\uff08\u901a\u5e38\u7528\u4e8e css-in-js\uff09")),l.a.createElement(r["a"],{code:"const styles: React.CSSProperties = { flexDirection: 'row', ...\nconst element = <div style={styles} ...",lang:"js"}),l.a.createElement("h3",{id:"5reactfunctioncomponentp"},l.a.createElement(c["AnchorLink"],{to:"#5reactfunctioncomponentp","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5\uff09React.FunctionComponent<P=","{","}",">"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7b80\u5199 FC<P=","{","}",">\uff0c\u65e0\u72b6\u6001\u7ec4\u4ef6(SFC)\uff0c\u51fd\u6570\u7ec4\u4ef6\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3\uff0c\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u4e0d\u4f20\uff0c\u7528\u6765\u5b9a\u4e49 props \u7684\u7c7b\u578b")),l.a.createElement(r["a"],{code:"interface EditorsProps {\n  detail: string;\n}\n// const Editors:React.FunctionComponent<EditorsProps> = (props) => {\nconst Editors: React.FC<EditorsProps> = (props) => {\n  const { detail } = props;\n  return <>{detail}</>;\n};",lang:"js"}),l.a.createElement("h3",{id:"6componentpspurecomponentps"},l.a.createElement(c["AnchorLink"],{to:"#6componentpspurecomponentps","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6\uff09Component<P,S=","{","}",">/PureComponent<P,S=","{","}",">"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6cdb\u578b\u7c7b\uff0c\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f props \u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u7b2c\u4e8c\u4e2a\u662f state \u7684\u7c7b\u578b\u5b9a\u4e49(\u53ef\u4ee5\u7701\u7565\uff0c\u4f46\u5f53\u6709\u7236\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u65b9\u6cd5\u6216\u8005\u5b9a\u4e49 state \u7684\u65f6\u5019\u8fd8\u662f\u9700\u8981,\u5f53\u6ca1\u6709\u7684\u60c5\u51b5\u4e0b\u7701\u53bb,\u548c\u4e0d\u7528 TypeScript \u4f7f\u7528\u4e00\u6837)\uff0c\u793a\u4f8b\u4ee3\u7801\uff1a")),l.a.createElement(r["a"],{code:"import React, { Component } from 'react';\nimport { RouteComponentProps } from 'react-router-dom';\ninterface CountProps extends RouteComponentProps {\n  //\u53ef\u4ee5\u7ee7\u627f\u5176\u5b83\u7684\u63a5\u53e3\u7c7b\u578b\n  count: number;\n  asyncAddCount: (count: number) => void;\n  asyncReduceCount: (count: number) => void;\n}\ninterface CountStateType {\n  //\u5f53\u9700\u8981\u7684\u65f6\u5019\u624d\u5b9a\u4e49\n}\nclass Counter extends Component<CountProps, CountStateType> {\n  render(): JSX.Element {\n    const { count, asyncAddCount, asyncReduceCount } = this.props;\n    return (\n      <div>\n        <h2>{count}</h2>\n        <button onClick={asyncAddCount.bind(null, 10)}>Counter++</button>\n        <button onClick={asyncReduceCount.bind(null, 10)}>Counter--</button>\n      </div>\n    );\n  }\n}",lang:"js"}),l.a.createElement("h3",{id:"7jsxelement-\u6216-reactreactelement"},l.a.createElement(c["AnchorLink"],{to:"#7jsxelement-\u6216-reactreactelement","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7\uff09JSX.Element \u6216 React.ReactElement",l.a.createElement("p",null)),l.a.createElement("ul",null,l.a.createElement("li",null,"return \u8fd4\u56de\u7684 jsx \u8bed\u6cd5\u7c7b\u578b\uff0c\u4f8b\u5982\u4e0a\u8ff0\u7684 render \u4e2d return \u7684\u5c31\u662f\u8fd9\u4e2a\u7c7b\u578b")),l.a.createElement(r["a"],{code:"const elementOnly: React.ReactElement = <div /> || <MyComponent />;",lang:"js"}),l.a.createElement("h3",{id:"8componentclassps"},l.a.createElement(c["AnchorLink"],{to:"#8componentclassps","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"8\uff09ComponentClass<P,S=","{","}",">"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7c7b\u7684\u7c7b\u578b\uff0c\u6cdb\u578b\u63a5\u53e3\uff0c\u53ef\u4ee5\u5728\u9ad8\u9636\u7ec4\u4ef6\u4e2d\u4f7f\u7528,\u5f53\u63a5\u6536\u4e00\u4e2a\u7c7b\u6216\u8005\u51fd\u6570\u7684\u65f6\u5019")),l.a.createElement(r["a"],{code:"import React, { Context, FC, ComponentClass, createContext, useReducer } from 'react';\n\nconst ProviderContext: Context<any> = createContext('provider');\n\nexport default const RootProvider = (reducer: Function, initialState: any) => (Com: FC<any> | ComponentClass<any,any>) => {\n  return () => {\n    const [state, dispatch] = useReducer<any>(reducer, initialState);\n    return (\n      <ProviderContext.Provider value={{ state, dispatch }}>\n        <Com />\n      </ProviderContext.Provider >\n    );\n  }\n}",lang:"js"}),l.a.createElement("h3",{id:"9context"},l.a.createElement(c["AnchorLink"],{to:"#9context","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"9\uff09Context"),l.a.createElement("ul",null,l.a.createElement("li",null,"context \u7684\u7c7b\u578b\u5c31\u662f\u4ed6\u7684\u672c\u8eab\uff0c\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3")),l.a.createElement(r["a"],{code:"//\u6e90\u7801\u7684\u7c7b\u578b\u5b9a\u4e49\u5982\u4e0b:\u53ef\u4ee5\u53d1\u73b0\u6211\u4eec\u9700\u8981\u4f20\u9012\u4e00\u4e2a\u7c7b\u578b\uff0c\u4ece\u800c\u4f7f\u5f97\u91cc\u9762\u7684\u53c2\u6570\u7c7b\u578b\u4e5f\u662f\u4e00\u81f4\ninterface Context<T> {\n  Provider: Provider<T>;\n  Consumer: Consumer<T>;\n  displayName?: string;\n}",lang:"js"}),l.a.createElement("h3",{id:"10dispatch"},l.a.createElement(c["AnchorLink"],{to:"#10dispatch","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"10\uff09Dispatch",l.a.createElement("any",null)),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6cdb\u578b\u63a5\u53e3\uff0c\u7528\u4e8e\u5b9a\u4e49 dispatch \u7684\u7c7b\u578b\uff0c\u5e38\u5e38\u7528\u4e8e useReducer \u751f\u6210\u7684 dispatch \u4e2d")),l.a.createElement(r["a"],{code:"// \u521b\u5efa\u4e00\u4e2a\u5f02\u6b65action\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5f02\u6b65action\u5bf9\u8c61\nconst asyncAction = (dispatch: Dispatch<any>) => {\n  return {\n    asyncAddaction() {\n      console.log('\u6267\u884caddActions\u4e4b\u524d: ' + Date.now());\n      setTimeout(() => {\n        console.log('\u6267\u884caddActions : ' + Date.now());\n        dispatch(addActions());\n      }, 1000);\n    },\n  };\n};",lang:"js"}),l.a.createElement("h3",{id:"11lazyexoticcomponent"},l.a.createElement(c["AnchorLink"],{to:"#11lazyexoticcomponent","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"11\uff09LazyExoticComponent"),l.a.createElement("ul",null,l.a.createElement("li",null,"lazy \u61d2\u52a0\u8f7d\u7684\u7c7b\u578b\uff0c\u6cdb\u578b\u63a5\u53e3\uff0c\u53ef\u4ee5\u63a5\u53d7\u5404\u79cd\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u89c6\u60c5\u51b5\u800c\u5b9a\uff0c\u4f8b\u5982\uff1a")),l.a.createElement(r["a"],{code:"export interface RouteType {\n  pathname: string;\n  component: LazyExoticComponent<any>;\n  exact: boolean;\n  title?: string;\n  icon?: string;\n  children?: RouteType[];\n}\nexport const AppRoutes: RouteType[] = [\n  {\n    pathname: '/login',\n    component: lazy(() => import('../views/Login/Login')),\n    exact: true,\n  },\n  {\n    pathname: '/404',\n    component: lazy(() => import('../views/404/404')),\n    exact: true,\n  },\n  {\n    pathname: '/',\n    exact: false,\n    component: lazy(() => import('../views/Admin/Admin')),\n  },\n];",lang:"js"}),l.a.createElement("h3",{id:"12refforwardingcomponentt-p--"},l.a.createElement(c["AnchorLink"],{to:"#12refforwardingcomponentt-p--","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"12\uff09RefForwardingComponent<T, P = ","{","}",">"),l.a.createElement("ul",null,l.a.createElement("li",null,"forwardRef\uff0cref \u8f6c\u53d1\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u6cdb\u578b\u63a5\u53e3,\u63a5\u6536\u4e24\u4e2a\u53c2\u6570")),l.a.createElement(r["a"],{code:"forwardRef(Editors) as RefForwardingComponent<any, any>;\n//\u5206\u522b\u662fref\u7684\u7c7b\u578b\u548cprops\u7684\u7c7b\u578b,\u4e3a\u4e86\u7b80\u5355\u53ef\u4ee5\u90fd\u5b9a\u4e49\u4e3aany\n//\u6e90\u7801\u7c7b\u578b\u5b9a\u4e49\u5982\u4e0b\n interface RefForwardingComponent<T, P = {}> {\n\t(props: PropsWithChildren<P>, ref: Ref<T>): ReactElement | null;\n\tpropTypes?: WeakValidationMap<P>;/\n\tcontextTypes?: ValidationMap<any>;\n\tdefaultProps?: Partial<P>;\n\tdisplayName?: string;\n }",lang:"js"}),l.a.createElement("h3",{id:"13mutablerefobject"},l.a.createElement(c["AnchorLink"],{to:"#13mutablerefobject","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"13\uff09MutableRefObject",l.a.createElement("any",null)),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6cdb\u578b\u63a5\u53e3\uff0c\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u4f5c\u4e3a useRef \u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u53c2\u6570\u53ef\u4ee5\u4e3a\u4efb\u610f\u7c7b\u578b")),l.a.createElement(r["a"],{code:"const prctureRef: React.MutableRefObject<any> = useRef();",lang:"js"}),l.a.createElement("h3",{id:"14usestate"},l.a.createElement(c["AnchorLink"],{to:"#14usestate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"14\uff09useState",l.a.createElement("any",null)),l.a.createElement("ul",null,l.a.createElement("li",null,"hooks \u7684 useState \u662f\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u7c7b\u578b\u6765\u5b9a\u4e49\u8fd9\u4e2a hooks")),l.a.createElement(r["a"],{code:"const [isShowAdd, setIsShowAdd] = useState<boolean>(false);",lang:"ts"}),l.a.createElement("h3",{id:"15\u5176\u4ed6"},l.a.createElement(c["AnchorLink"],{to:"#15\u5176\u4ed6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"15\uff09\u5176\u4ed6"),l.a.createElement(r["a"],{code:"interface IProps {\n  name: React.ReactText;\n\n  children?: React.ReactChild;\n\n  header?: React.ReactNode;\n}",lang:"js"}),l.a.createElement("h2",{id:"12react-router-\u5e38\u7528\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#12react-router-\u5e38\u7528\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"12.react-router \u5e38\u7528\u7c7b\u578b"),l.a.createElement("h3",{id:"1routecomponentprops"},l.a.createElement(c["AnchorLink"],{to:"#1routecomponentprops","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09RouteComponentProps"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6700\u5e38\u89c1\u7684\u8def\u7531 api \u7684\u7c7b\u578b\u5b9a\u4e49,\u91cc\u9762\u5305\u542b\u4e86 history,location,match,staticContext \u8fd9\u56db\u4e2a\u8def\u7531 api \u7684\u7c7b\u578b\u5b9a\u4e49")),l.a.createElement(r["a"],{code:"import React from 'react';\nimport { RouteComponentProps } from 'react-router-dom';\nexport default function Admin({\n  history,\n  location,\n  match,\n}: RouteComponentProps) {\n  return <>\u8fd9\u662f\u4e3b\u9875</>;\n}",lang:"js"}),l.a.createElement("h2",{id:"13react-\u5185\u90e8\u4e8b\u4ef6\u5b9a\u4e49"},l.a.createElement(c["AnchorLink"],{to:"#13react-\u5185\u90e8\u4e8b\u4ef6\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"13.react \u5185\u90e8\u4e8b\u4ef6\u5b9a\u4e49"),l.a.createElement("h3",{id:"1formevent"},l.a.createElement(c["AnchorLink"],{to:"#1formevent","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09FormEvent"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u4e2a react \u7684 form \u8868\u5355 event \u7684\u7c7b\u578b")),l.a.createElement(r["a"],{code:"<form\n  onSubmit={(e: FormEvent) => {\n    e.preventDefault();\n  }}\n></form>",lang:"js"}),l.a.createElement("h3",{id:"2changeevent"},l.a.createElement(c["AnchorLink"],{to:"#2changeevent","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09ChangeEvent"),l.a.createElement("ul",null,l.a.createElement("li",null,"react \u7684 onChange \u4e8b\u4ef6\u89e6\u53d1\u7684 event \u7c7b\u578b\uff0c\u8fd9\u662f\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3\uff0c\u4f7f\u7528\u5982\u4e0b\uff1a")),l.a.createElement(r["a"],{code:'<input\n  type="text"\n  value={count}\n  onChange={(e: ChangeEvent<HTMLInputElement>) => {\n    setCount(e.currentTarget.value); //HTMLInputElement\u8868\u793a\u8fd9\u4e2a\u4e00\u4e2ahtml\u7684input\u8282\u70b9\n  }}\n/>',lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u9009\u6cdb\u578b\u7c7b\u578b:",l.a.createElement("code",null,"HTMLSelectElement"),"\u3001",l.a.createElement("code",null,"HTMLInputElement"),"\u3001",l.a.createElement("code",null,"HTMLDivElement"),"\u3001",l.a.createElement("code",null,"HTMLTextAreaElement")," \u7b49 html \u6807\u7b7e\u7684\u6240\u6709\u7c7b\u578b\u8282\u70b9\u3002 \u8fd8\u6709\u5176\u4ed6\u5404\u79cd\u4e8b\u4ef6\u5904\u7406\u7c7b\u578b\uff0c\u53ef\u4ee5\u5728@types/react \u4e2d\u67e5\u770b")),l.a.createElement("h3",{id:"3syntheticeventt--element-e--event"},l.a.createElement(c["AnchorLink"],{to:"#3syntheticeventt--element-e--event","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09SyntheticEvent<T = Element, E = Event>"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6cdb\u578b\u63a5\u53e3\uff0c\u4e8b\u4ef6\u5305\u88c5\u5668\uff0c\u5373\u539f\u751f\u4e8b\u4ef6\u7684\u96c6\u5408\uff0c\u5c31\u662f\u539f\u751f\u4e8b\u4ef6\u7684\u7ec4\u5408\u4f53")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u60a8\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5c06\u4f20\u9012 SyntheticEvent \u7684\u5b9e\u4f8b\uff0c\u8fd9\u662f\u4e00\u4e2a\u8de8\u6d4f\u89c8\u5668\u539f\u751f\u4e8b\u4ef6\u5305\u88c5\u5668\u3002(\u5b98\u65b9\u4ecb\u7ecd)")),l.a.createElement(r["a"],{code:"<button onClick={(e:SyntheticEvent<Element, Event>)=>{}}></button>\n<input onChange={(e:SyntheticEvent<Element, Event>)=>{}}/>\n<form\n\tonSubmit={(e: SyntheticEvent<Element, Event>) => {}}\n\tonBlur={(e: SyntheticEvent<Element, Event>) => {}}\n\tonKeyUp={(e: SyntheticEvent<Element, Event>) => {}}\n>\n</form>",lang:"js"}),l.a.createElement("h3",{id:"4reactreacteventhandlerhtmlelement"},l.a.createElement(c["AnchorLink"],{to:"#4reactreacteventhandlerhtmlelement","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09",l.a.createElement("code",null,"React.ReactEventHandler<HTMLElement>")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u901a\u7528\u7684 React Event Handler")),l.a.createElement(r["a"],{code:"const handleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => { ... }\n\n<input onChange={handleChange} ... />",lang:"js"}),l.a.createElement("h2",{id:"14antd-\u7684\u7c7b\u578b\u5b9a\u4e49"},l.a.createElement(c["AnchorLink"],{to:"#14antd-\u7684\u7c7b\u578b\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"14.Antd \u7684\u7c7b\u578b\u5b9a\u4e49"),l.a.createElement("h3",{id:"1formcomponentprops"},l.a.createElement(c["AnchorLink"],{to:"#1formcomponentprops","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09FormComponentProps"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u4e8e Form \u7ec4\u4ef6\u7684\u4f7f\u7528")),l.a.createElement(r["a"],{code:"import React from 'react';\nimport { Form } from 'antd';\nimport { FormComponentProps } from 'antd/lib/form';\ninterface AddFormProps extends FormComponentProps {}\nfunction AddForm({ form }: AddFormProps) {\n  return <Form></Form>;\n}\nexport default Form.create()(AddForm) as any;",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u91cc\u9762\u7684 form \u7684\u7c7b\u578b\u662f WrappedFormUtils \u6cdb\u578b\u63a5\u53e3,\u6b63\u5e38\u5728\u5bf9 form \u8d4b\u503c\u7684\u65f6\u5019\u7684\u5b9a\u4e49")),l.a.createElement("h3",{id:"2columnprops"},l.a.createElement(c["AnchorLink"],{to:"#2columnprops","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09ColumnProps",l.a.createElement("any",null)),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8868\u683c\u5b9a\u4e49\u7684 columns \u5c5e\u6027\u7684\u6bcf\u4e00\u9879\u7684\u7c7b\u578b\uff0c\u53c2\u6570 any \u8868\u793a\u8868\u683c\u6570\u636e\u7684\u7c7b\u578b\uff0c\u793a\u4f8b\u5982\u4e0b:")),l.a.createElement(r["a"],{code:"interface ProductType {\n  key: string;\n  name: string;\n  desc: string;\n}\nconst columns: ColumnProps<ProductType>[] = [\n  {\n    title: '\u5546\u54c1\u540d\u79f0',\n    dataIndex: 'name',\n  },\n  {\n    title: '\u5546\u54c1\u8be6\u60c5',\n    dataIndex: 'desc',\n  },\n];",lang:"js"}),l.a.createElement("h2",{id:"15promise"},l.a.createElement(c["AnchorLink"],{to:"#15promise","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"15.Promise",l.a.createElement("any",null)),l.a.createElement(r["a"],{code:"interface IResponse<T> {\n  message: string;\n  result: T;\n  success: boolean;\n}\nasync function getResponse(): Promise<IResponse<number[]>> {\n  return {\n    message: '\u83b7\u53d6\u6210\u529f',\n    result: [1, 2, 3],\n    success: true,\n  };\n}\ngetResponse().then((response) => {\n  console.log(response.result);\n});",lang:"js"}),l.a.createElement("h2",{id:"16axios"},l.a.createElement(c["AnchorLink"],{to:"#16axios","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"16.axios"),l.a.createElement(r["a"],{code:"import axios, {\n  AxiosInstance,\n  AxiosRequestConfig,\n  AxiosResponse,\n  AxiosError,\n} from 'axios';\nconst server: AxiosInstance = axios.create();\nserver.interceptors.request.use((config: AxiosRequestConfig) => {\n  //\u8bf7\u6c42\u62e6\u622a\n  return config;\n});\nserver.interceptors.response.use(\n  (res: AxiosResponse) => {\n    if (res.status === 200) {\n      res = res.data;\n    }\n    return res;\n  },\n  (err: AxiosError) => {},\n);",lang:"js"}))))}}]);
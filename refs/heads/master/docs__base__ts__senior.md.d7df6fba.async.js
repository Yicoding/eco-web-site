(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[88],{JjdP:function(e,n,l){"use strict";l.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},w2Jg:function(e,n,l){"use strict";l.r(n);var t=l("q1tI"),a=l.n(t),c=l("dEAq"),r=l("H1Ra");l("JjdP");n["default"]=e=>(a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u9ad8\u7ea7\u7c7b\u578b"},a.a.createElement(c["AnchorLink"],{to:"#\u9ad8\u7ea7\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9ad8\u7ea7\u7c7b\u578b"),a.a.createElement("h2",{id:"1\u4ea4\u53c9\u7c7b\u578b-"},a.a.createElement(c["AnchorLink"],{to:"#1\u4ea4\u53c9\u7c7b\u578b-","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1.\u4ea4\u53c9\u7c7b\u578b &"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u901a\u8fc7 ",a.a.createElement("code",null,"&")," \u8fd0\u7b97\u7b26\u53ef\u4ee5\u5c06\u73b0\u6709\u7684\u591a\u79cd\u7c7b\u578b\u53e0\u52a0\u5230\u4e00\u8d77\u6210\u4e3a\u4e00\u79cd\u7c7b\u578b\uff0c\u5b83\u5305\u542b\u4e86\u6240\u9700\u7684\u6240\u6709\u7c7b\u578b\u7684\u7279\u6027")),a.a.createElement("ul",null,a.a.createElement("li",null,"1.\u4ea4\u53c9\u7c7b\u578b\u662f\u5c06\u591a\u4e2a\u7c7b\u578b\u5408\u5e76\u4e3a\u4e00\u4e2a\u7c7b\u578b\u3002\u4ea4\u53c9\u7c7b\u578b\u5176\u5b9e\u5c31\u662f\u4e24\u4e2a\u63a5\u53e3\u7c7b\u578b\u7684\u5c5e\u6027\u7684\u5e76\u96c6")),a.a.createElement(r["a"],{code:"type PersonName = { name: string };\ntype Person = PersonName & { age: number };\n\nlet person: Person = {\n  name: 'Bob',\n  age: 18,\n};",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"2.\u5728\u5408\u5e76\u591a\u4e2a\u7c7b\u578b\u7684\u8fc7\u7a0b\u4e2d\uff0c\u521a\u597d\u51fa\u73b0\u67d0\u4e9b\u7c7b\u578b\u5b58\u5728\u76f8\u540c\u7684\u6210\u5458\uff0c\u4f46\u5bf9\u5e94\u7684\u7c7b\u578b\u53c8\u4e0d\u4e00\u81f4\u65f6",a.a.createElement("ul",null,a.a.createElement("li",null,"c \u7684\u7c7b\u578b\u4e3a string & number\uff0c\u5373\u6210\u5458 c \u7684\u7c7b\u578b\u65e2\u662f string \u7c7b\u578b\u53c8\u662f number \u7c7b\u578b\uff0c\u8fd9\u79cd\u7c7b\u578b\u4e0d\u5b58\u5728\uff0c\u6240\u4ee5\u6df7\u5165\u540e\u6210\u5458 c \u7684\u7c7b\u578b\u4e3a never")))),a.a.createElement(r["a"],{code:"interface X {\n  c: string;\n  d: string;\n}\n\ninterface Y {\n  c: number;\n  e: string;\n}\n\ntype XY = X & Y;\ntype YX = Y & X;\n\nlet p: XY = { c: 6, d: 'd', e: 'e' }; // ERROR \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cnever\u201d\u3002\nlet q: YX = { c: 'c', d: 'd', e: 'e' }; // ERROR \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cstring\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cnever\u201d\u3002",lang:"ts"}),a.a.createElement("h2",{id:"2\u8054\u5408\u7c7b\u578b-"},a.a.createElement(c["AnchorLink"],{to:"#2\u8054\u5408\u7c7b\u578b-","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2.\u8054\u5408\u7c7b\u578b |"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\u4f7f\u7528 ",a.a.createElement("code",null,"|")," \u5206\u9694\u6bcf\u4e2a\u7c7b\u578b")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\uff08Union Types\uff09\u8868\u793a\u53d6\u503c\u53ef\u4ee5\u4e3a\u591a\u79cd\u7c7b\u578b\u4e2d\u7684\u4e00\u79cd"),a.a.createElement("li",null,"\u672a\u8d4b\u503c\u65f6\u8054\u5408\u7c7b\u578b\u4e0a\u53ea\u80fd\u8bbf\u95ee\u4e24\u79cd\u7c7b\u578b\u5171\u6709\u7684\u5c5e\u6027\u548c\u65b9\u6cd5")),a.a.createElement(r["a"],{code:"let name: string | number;\nname = 3;\nname = 'Bob';",lang:"ts"}),a.a.createElement("p",null,a.a.createElement("strong",null,"\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"\u5f53 TypeScript \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5230\u5e95\u662f\u54ea\u4e2a\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff1a")),a.a.createElement("li",null,a.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5728\u88ab\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u7c7b\u578b\u63a8\u8bba\u7684\u89c4\u5219\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b\uff1a"))),a.a.createElement(r["a"],{code:"let name: string | number;\nname = 3;\nconsole.log(name.length); // ERROR \u7c7b\u578b\u201cnumber\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201clength\u201d\nname = 'Bob';\nconsole.log(name.length); // 5",lang:"ts"}),a.a.createElement("h2",{id:"3\u7c7b\u578b\u522b\u540d-type"},a.a.createElement(c["AnchorLink"],{to:"#3\u7c7b\u578b\u522b\u540d-type","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3.\u7c7b\u578b\u522b\u540d type"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"\u7c7b\u578b\u522b\u540d\u4f1a\u7ed9\u4e00\u4e2a\u7c7b\u578b\u8d77\u4e2a\u65b0\u540d\u5b57,\u7c7b\u578b\u522b\u540d\u6709\u65f6\u548c\u63a5\u53e3\u5f88\u50cf,\u4f46\u662f\u53ef\u4ee5\u4f5c\u7528\u4e8e\u539f\u59cb\u503c\u3001\u8054\u5408\u7c7b\u578b\u3001\u5143\u7ec4\u4ee5\u53ca\u5176\u5b83\u4efb\u4f55\u4f60\u9700\u8981\u624b\u5199\u7684\u7c7b\u578b")),a.a.createElement("li",null,a.a.createElement("p",null,"\u7c7b\u578b\u522b\u540d\u4e0e\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u90fd\u662f\u4f7f\u7528 ",a.a.createElement("code",null,"type")," \u8fdb\u884c\u5b9a\u4e49"))),a.a.createElement(r["a"],{code:"type some = boolean | string;\ntype ZType = 1 | 'one' | true;\n\n// \u53ef\u4ee5\u662f\u6cdb\u578b\ntype Container<T> = { value: T };\n\n// \u4e5f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u522b\u540d\u6765\u5728\u5c5e\u6027\u91cc\u5f15\u7528\u81ea\u5df1\uff1a\ntype Tree<T> = {\n  value: T;\n  left: Tree<T>;\n  right: Tree<T>;\n};",lang:"ts"}),a.a.createElement("h2",{id:"4type-\u548c-interface-\u533a\u522b"},a.a.createElement(c["AnchorLink"],{to:"#4type-\u548c-interface-\u533a\u522b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"4.type \u548c interface \u533a\u522b"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"interface")," \u53ea\u80fd\u7528\u4e8e\u5b9a\u4e49\u5bf9\u8c61\u7c7b\u578b"),a.a.createElement("ul",null,a.a.createElement("li",null,"interface \u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u63a5\u53e3\u7684 extends \u548c implements"),a.a.createElement("li",null,"interface \u53ef\u4ee5\u5b9e\u73b0\u63a5\u53e3\u5408\u5e76\u58f0\u660e"),a.a.createElement("li",null,a.a.createElement("code",null,"interface")," \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u540d\u5b57,\u53ef\u4ee5\u5728\u5176\u5b83\u4efb\u4f55\u5730\u65b9\u4f7f\u7528,",a.a.createElement("code",null,"type")," \u5e76\u4e0d\u521b\u5efa\u65b0\u540d\u5b57,\u6bd4\u5982,\u9519\u8bef\u4fe1\u606f\u5c31\u4e0d\u4f1a\u4f7f\u7528\u522b\u540d"))),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"type")," \u7684\u58f0\u660e\u65b9\u5f0f\u9664\u4e86\u5bf9\u8c61\u4e4b\u5916\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u4ea4\u53c9\u3001\u8054\u5408\u3001\u539f\u59cb\u7c7b\u578b\u7b49"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7c7b\u578b\u58f0\u660e\u7684\u65b9\u5f0f\u9002\u7528\u8303\u56f4\u66f4\u52a0",a.a.createElement("code",null,"\u5e7f\u6cdb"))))))))}}]);
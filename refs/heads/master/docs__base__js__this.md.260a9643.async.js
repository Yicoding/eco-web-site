(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},uZQP:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),s=t("H1Ra");t("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"this-\u6307\u5411"},l.a.createElement(c["AnchorLink"],{to:"#this-\u6307\u5411","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"this \u6307\u5411"),l.a.createElement("p",null,"\u53c2\u8003\u8d44\u6599\uff1a",l.a.createElement(c["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this"},"MDN \u4e2d this \u89e3\u6790")),l.a.createElement("p",null,"this \u7684\u6307\u5411\uff0c\u662f\u5728\u8c03\u7528\u51fd\u6570\u65f6\u6839\u636e\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u52a8\u6001\u786e\u5b9a\u7684"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"this \u5c31\u662f\u51fd\u6570\u8fd0\u884c\u65f6\u6240\u5728\u7684\u73af\u5883\u5bf9\u8c61\uff0c\u5373\u4e0a\u4e0b\u6587\u5bf9\u8c61")),l.a.createElement("li",null,l.a.createElement("p",null,"\u539f\u56e0\uff1ajs \u662f\u89e3\u91ca\u578b\u8bed\u8a00\uff0c\u4e0d\u662f\u4e00\u6b21\u8bfb\u53d6\u7a0b\u5e8f\uff0c\u800c\u662f\u9010\u884c\u89e3\u91ca\uff0c\u6240\u4ee5 this \u7684\u6307\u5411\u8981\u5728\u6267\u884c\u65f6\u624d\u80fd\u6839\u636e\u4e0a\u4e0b\u6587\u6240\u52a8\u6001\u786e\u5b9a"))),l.a.createElement("h2",{id:"1\u89c4\u5f8b"},l.a.createElement(c["AnchorLink"],{to:"#1\u89c4\u5f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.*\u89c4\u5f8b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u5bf9\u4e8e\u76f4\u63a5\u8c03\u7528\u7684\u51fd\u6570\u6765\u8bf4\uff0c\u4e0d\u7ba1\u51fd\u6570\u88ab\u653e\u5728\u4e86\u4ec0\u4e48\u5730\u65b9\uff0cthis \u90fd\u662f ",l.a.createElement("code",null,"window"),"\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b this \u7ed1\u5b9a\u5230 ",l.a.createElement("code",null,"undefined")),l.a.createElement(s["a"],{code:"function test() {\n  console.log(this);\n}\ntest(); // window",lang:"js"}),l.a.createElement(s["a"],{code:"function test() {\n  'use strict';\n  console.log(this);\n}\ntest(); // undefined",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u5bf9\u4e8e\u88ab\u522b\u4eba\u8c03\u7528\u7684\u51fd\u6570\u6765\u8bf4\uff0c",l.a.createElement("code",null,"\u8c01\u8c03\u7528\u5b83\uff0cthis \u5c31\u6307\u5411\u8c01"))),l.a.createElement("li",null,l.a.createElement("p",null,"3.\u4e00\u822c\u7531 call/apply/bind \u65b9\u6cd5\u663e\u5f0f\u8c03\u7528\uff0c\u7ed1\u5b9a\u5230\u6307\u5b9a",l.a.createElement("code",null,"\u53c2\u6570\u7684\u5bf9\u8c61\u4e0a")),l.a.createElement(s["a"],{code:"// \u5bf9\u8c61\u53ef\u4ee5\u4f5c\u4e3a bind \u6216 apply \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\uff0c\u5e76\u4e14\u8be5\u53c2\u6570\u5c06\u7ed1\u5b9a\u5230\u8be5\u5bf9\u8c61\u3002\nvar obj = { a: 'Custom' };\n\n// \u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u5c06\u8be5\u53d8\u91cf\u4f5c\u4e3a\u5168\u5c40\u5bf9\u8c61 window \u7684\u5c5e\u6027\u3002\nvar a = 'Global';\n\nfunction whatsThis() {\n  return this.a; // this \u7684\u503c\u53d6\u51b3\u4e8e\u51fd\u6570\u88ab\u8c03\u7528\u7684\u65b9\u5f0f\n}\n\nwhatsThis(); // 'Global' \u56e0\u4e3a\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d this \u6ca1\u6709\u88ab\u8bbe\u5b9a\uff0c\u6240\u4ee5\u5b83\u9ed8\u8ba4\u4e3a \u5168\u5c40/ window \u5bf9\u8c61\nwhatsThis.call(obj); // 'Custom' \u56e0\u4e3a\u51fd\u6570\u4e2d\u7684 this \u88ab\u8bbe\u7f6e\u4e3aobj\nwhatsThis.apply(obj); // 'Custom' \u56e0\u4e3a\u51fd\u6570\u4e2d\u7684 this \u88ab\u8bbe\u7f6e\u4e3aobj",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"new \u7684\u4f18\u5148\u7ea7\u8981\u5927\u4e8e bind\uff0cbind \u7684\u4f18\u5148\u7ea7\u5927\u4e8e call \u548c apply \uff08new > bind > call/apply\uff09")),l.a.createElement("li",null,l.a.createElement("p",null,"bind \u65b9\u6cd5\u6539\u53d8 this \u6307\u5411\u540e\uff0c",l.a.createElement("code",null,"\u53ea\u751f\u6548\u4e00\u6b21"),"\uff0c\u540e\u9762\u518d\u7528 bind \u4e0d\u80fd\u518d\u6b21\u6539\u53d8 this \u6307\u5411\u4e86"))),l.a.createElement(s["a"],{code:"function f() {\n  return this.a;\n}\n\nvar g = f.bind({ a: 'azerty' });\nconsole.log(g()); // azerty\n\nvar h = g.bind({ a: 'yoo' }); // bind\u53ea\u751f\u6548\u4e00\u6b21\uff01\nconsole.log(h()); // azerty\n\nvar o = { a: 37, f: f, g: g, h: h };\nconsole.log(o.a, o.f(), o.g(), o.h()); // 37, 37(this\u6307\u5411o), azerty, azerty(bind\u53ea\u751f\u6548\u4e00\u6b21)",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"4.\u4e00\u822c\u6784\u9020\u51fd\u6570\u3001class\uff08\u7c7b\uff09\u7528 new \u8c03\u7528\uff0c\u7ed1\u5b9a\u5230",l.a.createElement("code",null,"\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4e0a"))),l.a.createElement("li",null,l.a.createElement("p",null,"5.\u7bad\u5934\u51fd\u6570\u4e2d\uff0c\u6839\u636e\u5916\u5c42\u4e0a\u4e0b\u6587\u7ed1\u5b9a\u7684 this \u51b3\u5b9a this \u6307\u5411"),l.a.createElement(s["a"],{code:"var test = {\n  name: 'test',\n  add: function () {\n    console.log(this.name);\n  },\n};\ntest.add(); // test",lang:"js"}),l.a.createElement(s["a"],{code:"var test = {\n  name: 'test',\n  add: () => {\n    console.log(this.name);\n  },\n};\ntest.add(); // undefined",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7bad\u5934\u51fd\u6570\u4f1a",l.a.createElement("code",null,"\u5ffd\u7565")," call\u3001apply\u3001bind \u4f20\u9012\u7684 this"))),l.a.createElement("li",null,l.a.createElement("p",null,"6.getter \u6216 setter \u7684\u51fd\u6570\u90fd\u4f1a\u628a this \u7ed1\u5b9a\u5230\u8bbe\u7f6e\u6216\u83b7\u53d6\u5c5e\u6027\u7684\u5bf9\u8c61"),l.a.createElement(s["a"],{code:"function sum() {\n  return this.a + this.b + this.c;\n}\n\nvar o = {\n  a: 1,\n  b: 2,\n  c: 3,\n  get average() {\n    return (this.a + this.b + this.c) / 3;\n  },\n};\n\nObject.defineProperty(o, 'sum', {\n  get: sum,\n  enumerable: true, // \u8868\u793a\u53ef\u679a\u4e3e\u7684\uff0c\u9ed8\u8ba4\u4e3afalse\uff1b\u5f53\u8bbe\u7f6e\u4e3atrue\u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u4f1a\u5728\u5bf9\u8c61\u679a\u4e3e\u65f6\u679a\u4e3e\u5230\n  configurable: true, // \u8868\u793a\u53ef\u914d\u7f6e\u7684\uff0c\u9ed8\u8ba4\u503c\u4e3afalse\uff1b\u5f53\u503c\u4e3atrue\u65f6\uff0c\u8be5\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u624d\u80fd\u591f\u88ab\u6539\u53d8\uff0c\u540c\u65f6\u8be5\u5c5e\u6027\u4e5f\u80fd\u4ece\u5bf9\u5e94\u7684\u5bf9\u8c61\u4e2d\u5220\u9664\n});\n\nconsole.log(o.average, o.sum); // logs 2, 6",lang:"js"}))))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{JjdP:function(e,t,n){"use strict";n.r(t),t["default"]={}},TNZ9:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("dEAq"),c=n("H1Ra");n("JjdP");t["default"]=e=>(a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b"},a.a.createElement(r["AnchorLink"],{to:"#\u6570\u636e\u7c7b\u578b\u68c0\u6d4b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b"),a.a.createElement("h2",{id:"1typeof"},a.a.createElement(r["AnchorLink"],{to:"#1typeof","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1.typeof"),a.a.createElement(c["a"],{code:"1.typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b:\n\n  \u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09\n\n  \u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09\n\n2.\u6ce8\u610f: typeof null === 'object'",lang:"unknown"}),a.a.createElement(c["a"],{code:"typeof ''; // 'string'\ntypeof 1; // 'number'\ntypeof true; // 'boolean'\ntypeof null; // 'object'\ntypeof undefined; // 'undefined'\ntypeof []; // 'object'\ntypeof function () {}; // 'function'\ntypeof {}; // 'object'",lang:"js"}),a.a.createElement("h2",{id:"2instanceof"},a.a.createElement(r["AnchorLink"],{to:"#2instanceof","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2.instanceof"),a.a.createElement("h3",{id:"1\u8bf4\u660e"},a.a.createElement(r["AnchorLink"],{to:"#1\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u8bf4\u660e"),a.a.createElement(c["a"],{code:"1.instanceof \u64cd\u4f5c\u7b26\u7528\u6765\u5224\u65ad \u5f15\u7528\u7c7b\u578b\n\n  \u8bed\u6cd5\uff1aA instanceof B\n\n2.\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684_proto_\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true\n\n  instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784\n\n3.\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 `prototype` \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684`\u539f\u578b\u94fe`\u4e0a\n\n  \u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: `typeof ''` \u5f97\u5230\u7684\u7c7b\u540d\u662f`string`)\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: `a instanceof String`)",lang:"unknown"}),a.a.createElement(c["a"],{code:"var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",lang:"js"}),a.a.createElement("h3",{id:"2\u624b\u52a8\u5b9e\u73b0-instanceof"},a.a.createElement(r["AnchorLink"],{to:"#2\u624b\u52a8\u5b9e\u73b0-instanceof","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u624b\u52a8\u5b9e\u73b0 instanceof"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e")),a.a.createElement(c["a"],{code:"function myInstanceof(left, right) {\n  // \u8fd9\u91cc\u5148\u7528typeof\u6765\u5224\u65ad\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff0c\u5982\u679c\u662f\uff0c\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684API\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    //\u5faa\u73af\u5f80\u4e0b\u5bfb\u627e\uff0c\u76f4\u5230\u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto === null) return false;\n    if (proto === right.prototype) return true; //\u627e\u5230\u76f8\u540c\u539f\u578b\u5bf9\u8c61\uff0c\u8fd4\u56detrue\n    proto = Object.getPrototypeof(proto);\n  }\n}\n// \u9a8c\u8bc1\u4e00\u4e0b\u81ea\u5df1\u5b9e\u73b0\u7684myInstanceof\u662f\u5426OK\nconsole.log(myInstanceof(new Number(123), Number)); // true\nconsole.log(myInstanceof(123, Number));",lang:"js"}),a.a.createElement("h2",{id:"3constructor"},a.a.createElement(r["AnchorLink"],{to:"#3constructor","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3.constructor"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"JS \u89c4\u5b9a\uff0c\u6bcf\u4e2a\u6784\u9020\u51fd\u6570\u90fd\u4f1a\u6709\u4e00\u4e2a prototype \u5c5e\u6027\uff0c\u5373\u4e3a\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\uff0c\u800c\u539f\u578b\u5bf9\u8c61\u4e2d\u4f1a\u6709\u4e00\u4e2a constructor \u5c5e\u6027\u6307\u56de\u5230\u6784\u9020\u51fd\u6570\u3002\u5f53\u5229\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u65b0\u5bf9\u8c61\u65f6\uff0c\u539f\u578b\u4e0a\u7684 constructor \u5c5e\u6027\u4e5f\u4f1a\u88ab\u9057\u4f20\u5230\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4e0a\uff0c\u4ece\u539f\u578b\u94fe\u7684\u89d2\u5ea6\u8bb2\uff0c\u6784\u9020\u51fd\u6570\u4e5f\u4ee3\u8868\u4e86\u5bf9\u8c61\u7684\u7c7b\u578b")),a.a.createElement(c["a"],{code:"new Number(1).constructor == Number; //true\nnew String(1).constructor == String; //true\ntrue.constructor == Boolean; //true\nnew Object().constructor == Object; //true\nnew Error().constructor == Error; //true",lang:"js"}),a.a.createElement("h2",{id:"4objectprototypetostringcall"},a.a.createElement(r["AnchorLink"],{to:"#4objectprototypetostringcall","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"4.Object.prototype.toString.call()"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"toString()\u65b9\u6cd5\u662f Object \u539f\u578b\u4e0a\u7684\u65b9\u6cd5\uff0c\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u8fd4\u56de\u683c\u5f0f\u4e3a[object,xxx]\uff0cxxx \u5373\u4e3a\u5224\u65ad\u7684\u7ed3\u679c\u3002\u5bf9\u4e8e Object \u5bf9\u8c61\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Object.prototype.toString()\uff0c\u5bf9\u4e8e\u5176\u4ed6\u6570\u636e\u7c7b\u578b\uff0c\u9700\u8981\u901a\u8fc7.call()\u6765\u8c03\u7528")),a.a.createElement(c["a"],{code:"Object.prototype.toString({}); // '[object Object]'\nObject.prototype.toString.call(''); // '[object String]'\nObject.prototype.toString.call(1); // '[object Number]'\nObject.prototype.toString.call(true); // '[object Boolean]'\nObject.prototype.toString.call(undefined); // '[object Undefined]'\nObject.prototype.toString.call(null); // '[object Null]'\nObject.prototype.toString.call(Symbol()); // '[object Symbol]'\nObject.prototype.toString.call(new Error()); // '[object Error]'",lang:"js"}))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
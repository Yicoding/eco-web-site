(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},nVze:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),r=t("H1Ra");t("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"newcallapplybind"},l.a.createElement(c["AnchorLink"],{to:"#newcallapplybind","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"new/call/apply/bind"),l.a.createElement("h2",{id:"1new"},l.a.createElement(c["AnchorLink"],{to:"#1new","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.new"),l.a.createElement("h3",{id:"1\u5b9a\u4e49"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b9a\u4e49"),l.a.createElement("p",null,"new \u8fd0\u7b97\u7b26\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u7684\u5bf9\u8c61\u7c7b\u578b\u7684\u5b9e\u4f8b\u6216\u5177\u6709\u6784\u9020\u51fd\u6570\u7684\u5185\u7f6e\u5bf9\u8c61\u7684\u5b9e\u4f8b\u3002"),l.a.createElement("h3",{id:"2\u505a\u4e86\u54ea\u4e9b\u4e8b"},l.a.createElement(c["AnchorLink"],{to:"#2\u505a\u4e86\u54ea\u4e9b\u4e8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u505a\u4e86\u54ea\u4e9b\u4e8b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61")),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u5c06\u8fd9\u4e2a\u7a7a\u5bf9\u8c61\u7684",l.a.createElement("strong",null,"proto"),"\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b")),l.a.createElement("li",null,l.a.createElement("p",null,"3.\u5c06 this \u6307\u5411\u8fd9\u4e2a\u7a7a\u5bf9\u8c61")),l.a.createElement("li",null,l.a.createElement("p",null,"4.\u5bf9\u6784\u9020\u51fd\u6570\u8fd4\u56de\u503c\u505a\u5224\u65ad\uff0c\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u503c"))),l.a.createElement("h3",{id:"3\u6a21\u62df\u5b9e\u73b0"},l.a.createElement(c["AnchorLink"],{to:"#3\u6a21\u62df\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u6a21\u62df\u5b9e\u73b0"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u65b9\u6cd5 1.")),l.a.createElement(r["a"],{code:"function myNew() {\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\n  const obj = {};\n  const Con = [].shift.call(arguments);\n  // \u5c06\u8fd9\u4e2a\u7a7a\u5bf9\u8c61\u7684__proto__\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\n  // obj.__proto__ = Con.prototype;\n  Object.setPrototypeOf(obj, Con.prototype);\n  // \u5c06this\u6307\u5411\u7a7a\u5bf9\u8c61\n  const result = Con.apply(obj, arguments);\n  // \u5bf9\u6784\u9020\u51fd\u6570\u8fd4\u56de\u503c\u505a\u5224\u65ad\uff0c\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u503c\n  return result instanceof Object ? result : obj;\n}\nfunction Foo(name) {\n  this.name = name;\n}\n\nFoo.prototype.getName = function () {\n  console.log(this.name);\n};\n\nvar a = _new(Foo, 'tom');\na.getName(); // tom",lang:"js"}),l.a.createElement("p",null,"\u65b9\u6cd5 2."),l.a.createElement(r["a"],{code:"function _new() {\n  // arguments\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u9700\u8981\u8f6c\u6210\u6570\u7ec4\n  var args = [].slice.call(arguments);\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6784\u9020\u51fd\u6570\uff0c\u628a\u5b83\u62ff\u51fa\u6765\n  var constructor = args.shift();\n  // Object.create()\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u6307\u5411Foo\n  var context = Object.create(constructor.prototype);\n  // \u5c06this\u6307\u5411context\n  var result = constructor.apply(context, args);\n  // \u5982\u679cFoo\u663e\u793a\u7684\u8fd4\u56de\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u5e94\u8be5\u76f4\u63a5\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\n  return typeof result === 'object' && result != null ? result : context;\n}\nfunction Foo(name) {\n  this.name = name;\n}\n\nFoo.prototype.getName = function () {\n  console.log(this.name);\n};\n\nvar a = _new(Foo, 'tom');\na.getName(); // tom",lang:"js"}),l.a.createElement("h2",{id:"2callapplybind-\u7684\u57fa\u672c\u4ecb\u7ecd"},l.a.createElement(c["AnchorLink"],{to:"#2callapplybind-\u7684\u57fa\u672c\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.call,apply,bind \u7684\u57fa\u672c\u4ecb\u7ecd"),l.a.createElement("p",null,"\u6539\u53d8\u51fd\u6570\u6267\u884c\u65f6\u7684 this \u6307\u5411"),l.a.createElement("h3",{id:"1\u8bed\u6cd5"},l.a.createElement(c["AnchorLink"],{to:"#1\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u8bed\u6cd5"),l.a.createElement(r["a"],{code:"fun.call(thisArg, param1, param2, ...); // \u5f62\u53c2\nfun.apply(thisArg, [param1,param2,...]); // \u6570\u7ec4\u5f62\u5f0f\nfun.bind(thisArg, param1, param2, ...); // \u5f62\u53c2",lang:"js"}),l.a.createElement("p",null,"\u8bb0\u5fc6\uff1a",l.a.createElement("code",null,"apply")," \u662f\u4ee5 ",l.a.createElement("code",null,"a \u5f00\u5934"),"\uff0c\u5b83\u4f20\u7ed9 fun \u7684\u53c2\u6570\u662f ",l.a.createElement("code",null,"Array"),"\uff0c\u4e5f\u662f\u4ee5 a \u5f00\u5934\u7684"),l.a.createElement("h3",{id:"2\u8fd4\u56de\u503c"},l.a.createElement(c["AnchorLink"],{to:"#2\u8fd4\u56de\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u8fd4\u56de\u503c"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"call/apply\uff1afun \u6267\u884c\u7684\u7ed3\u679c"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6539\u53d8\u4e86\u51fd\u6570\u7684 this \u4e0a\u4e0b\u6587\u540e\u9a6c\u4e0a\u6267\u884c\u8be5\u51fd\u6570"))),l.a.createElement("li",null,l.a.createElement("p",null,"bind\uff1a\u8fd4\u56de fun \u7684\u62f7\u8d1d\uff0c\u5e76\u62e5\u6709\u6307\u5b9a\u7684 this \u503c\u548c\u521d\u59cb\u53c2\u6570"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8fd4\u56de\u6539\u53d8\u4e86\u4e0a\u4e0b\u6587\u540e\u7684\u51fd\u6570,\u4e0d\u6267\u884c\u8be5\u51fd\u6570")))),l.a.createElement("h3",{id:"3\u53c2\u6570"},l.a.createElement(c["AnchorLink"],{to:"#3\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u53c2\u6570"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"thisArg"),"(\u53ef\u9009):")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.fun \u7684 this \u6307\u5411 thisArg \u5bf9\u8c61")),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff1athisArg \u6307\u5b9a\u4e3a ",l.a.createElement("code",null,"null\uff0cundefined"),"\uff0cfun \u4e2d\u7684 this \u6307\u5411 ",l.a.createElement("code",null,"window")," \u5bf9\u8c61")),l.a.createElement("li",null,l.a.createElement("p",null,"3.\u4e25\u683c\u6a21\u5f0f\u4e0b\uff1afun \u7684 this \u4e3a ",l.a.createElement("code",null,"undefined"))),l.a.createElement("li",null,l.a.createElement("p",null,"4.\u503c\u4e3a\u539f\u59cb\u503c(\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0c\u5e03\u5c14\u503c)\u7684 this \u4f1a\u6307\u5411\u8be5\u539f\u59cb\u503c\u7684\u81ea\u52a8\u5305\u88c5\u5bf9\u8c61\uff0c\u5982 String\u3001Number\u3001Boolean"))),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"param1,param2"),"(\u53ef\u9009): \u4f20\u7ed9 fun \u7684\u53c2\u6570")),l.a.createElement("h2",{id:"3\u8c03\u7528-callapplybind-\u7684\u5fc5\u987b\u662f\u4e2a\u51fd\u6570"},l.a.createElement(c["AnchorLink"],{to:"#3\u8c03\u7528-callapplybind-\u7684\u5fc5\u987b\u662f\u4e2a\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u8c03\u7528 call/apply/bind \u7684\u5fc5\u987b\u662f\u4e2a\u51fd\u6570"),l.a.createElement("p",null,"call\u3001apply \u548c bind \u662f\u6302\u5728 Function \u5bf9\u8c61\u4e0a\u7684\u4e09\u4e2a\u65b9\u6cd5,\u53ea\u6709",l.a.createElement("code",null,"\u51fd\u6570"),"\u624d\u6709\u8fd9\u4e9b\u65b9\u6cd5"),l.a.createElement("h2",{id:"4call-\u548c-apply-\u7684\u5e94\u7528\u573a\u666f"},l.a.createElement(c["AnchorLink"],{to:"#4call-\u548c-apply-\u7684\u5e94\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.call \u548c apply \u7684\u5e94\u7528\u573a\u666f"),l.a.createElement("h3",{id:"1\u5224\u65ad\u6570\u636e\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#1\u5224\u65ad\u6570\u636e\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5224\u65ad\u6570\u636e\u7c7b\u578b"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.prototype.toString")),l.a.createElement(r["a"],{code:"function isType(data, type) {\n  const typeObj = {\n    '[object String]': 'string',\n    '[object Number]': 'number',\n    '[object Boolean]': 'boolean',\n    '[object Null]': 'null',\n    '[object Undefined]': 'undefined',\n    '[object Object]': 'object',\n    '[object Array]': 'array',\n    '[object Function]': 'function',\n    '[object Date]': 'date', // Object.prototype.toString.call(new Date())\n    '[object RegExp]': 'regExp',\n    '[object Map]': 'map',\n    '[object Set]': 'set',\n    '[object HTMLDivElement]': 'dom', // document.querySelector('#app')\n    '[object WeakMap]': 'weakMap',\n    '[object Window]': 'window', // Object.prototype.toString.call(window)\n    '[object Error]': 'error', // new Error('1')\n    '[object Arguments]': 'arguments',\n  };\n  let name = Object.prototype.toString.call(data); // \u501f\u7528Object.prototype.toString()\u83b7\u53d6\u6570\u636e\u7c7b\u578b\n  let typeName = typeObj[name] || '\u672a\u77e5\u7c7b\u578b'; // \u5339\u914d\u6570\u636e\u7c7b\u578b\n  return typeName === type; // \u5224\u65ad\u8be5\u6570\u636e\u7c7b\u578b\u662f\u5426\u4e3a\u4f20\u5165\u7684\u7c7b\u578b\n}",lang:"js"}),l.a.createElement("h3",{id:"2\u7c7b\u6570\u7ec4\u501f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5"},l.a.createElement(c["AnchorLink"],{to:"#2\u7c7b\u6570\u7ec4\u501f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u7c7b\u6570\u7ec4\u501f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5"),l.a.createElement(r["a"],{code:'var arrayLike = {\n  0: \'OB\',\n  1: \'Koro1\',\n  length: 2,\n};\nArray.prototype.push.call(arrayLike, \'\u6dfb\u52a0\u5143\u7d201\', \'\u6dfb\u52a0\u5143\u7d202\');\nconsole.log(arrayLike); // {"0":"OB","1":"Koro1","2":"\u6dfb\u52a0\u5143\u7d201","3":"\u6dfb\u52a0\u5143\u7d202","length":4}',lang:"js"}),l.a.createElement("h3",{id:"3apply-\u83b7\u53d6\u6570\u7ec4\u6700\u5927\u503c\u6700\u5c0f\u503c"},l.a.createElement(c["AnchorLink"],{to:"#3apply-\u83b7\u53d6\u6570\u7ec4\u6700\u5927\u503c\u6700\u5c0f\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09apply \u83b7\u53d6\u6570\u7ec4\u6700\u5927\u503c\u6700\u5c0f\u503c"),l.a.createElement(r["a"],{code:"const arr = [15, 6, 12, 13, 16];\nconst max = Math.max.apply(Math, arr); // 16\nconst min = Math.min.apply(Math, arr); // 6",lang:"js"}),l.a.createElement("h3",{id:"4\u7ee7\u627f"},l.a.createElement(c["AnchorLink"],{to:"#4\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09*\u7ee7\u627f"),l.a.createElement("p",null,"ES5 \u7684\u7ee7\u627f\u4e5f\u90fd\u662f\u901a\u8fc7\u501f\u7528\u7236\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u6765\u5b9e\u73b0\u7236\u7c7b\u65b9\u6cd5/\u5c5e\u6027\u7684\u7ee7\u627f\uff1a"),l.a.createElement(r["a"],{code:"// \u7236\u7c7b\nfunction Parent(name) {\n  this.name = name;\n  this.colors = ['red', 'blue', 'green'];\n}\nParent.prototype.sayName = function () {\n  console.log(this.name);\n};\n// \u5b50\u7c7b\nfunction Child(name, age) {\n  Parent.call(this, name);\n  this.age = age;\n}\n// \u91cd\u5199\u5b50\u7c7b\u7684prototype\uff0c\u4fee\u6b63constructor\u6307\u5411\nChild.prototype = Object.create(Parent.prototype);\nChild.prototype.constructor = Child;\nChild.prototype.sayAge = function () {\n  console.log(this.age);\n};\n// \u5b9e\u4f8b\u5316\u5b50\u7c7b\uff0c\u53ef\u4ee5\u5728\u5b9e\u4f8b\u4e0a\u627e\u5230\u5c5e\u6027\u3001\u65b9\u6cd5\nconst a = new Child('lucy', 20);\na.colors.push('balck');\nconst b = new Child('Bob', 18);\nconsole.log(a);\nconsole.log(b);",lang:"js"}),l.a.createElement("h2",{id:"5bind-\u5e94\u7528\u573a\u666f"},l.a.createElement(c["AnchorLink"],{to:"#5bind-\u5e94\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.bind \u5e94\u7528\u573a\u666f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"bind \u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u6211\u4eec\u5fc5\u987b\u8981\u624b\u52a8\u53bb\u8c03\u7528\uff1a")),l.a.createElement("li",null,l.a.createElement("p",null,"bind \u65b9\u6cd5\u6539\u53d8 this \u6307\u5411\u540e\uff0c\u53ea\u751f\u6548\u4e00\u6b21\uff0c\u540e\u9762\u518d\u7528 bind \u4e0d\u80fd\u518d\u6b21\u6539\u53d8 this \u6307\u5411\u4e86"))),l.a.createElement(r["a"],{code:"for (var i = 1; i < 5; i++) {\n  // \u7f13\u5b58\u53c2\u6570\n  setTimeout(\n    function (i) {\n      console.log('bind', i); // \u4f9d\u6b21\u8f93\u51fa\uff1a1 2 3 4 5\n    }.bind(null, i),\n    i * 10,\n  );\n}\nconsole.log(i);\n// \u8f93\u51fa\u7ed3\u679c\uff1a5 -> 0,1,2,3,4",lang:"js"}),l.a.createElement("h2",{id:"6\u624b\u5199-callapply-\u53ca-bind"},l.a.createElement(c["AnchorLink"],{to:"#6\u624b\u5199-callapply-\u53ca-bind","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.\u624b\u5199 call\u3001apply \u53ca bind"),l.a.createElement("p",null,"\u601d\u8def\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u4e0d\u4f20\u5165\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u4e0a\u4e0b\u6587\u9ed8\u8ba4\u4e3a window")),l.a.createElement("li",null,l.a.createElement("p",null,"\u6539\u53d8\u4e86 this \u6307\u5411\uff0c\u8ba9\u65b0\u7684\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u8be5\u51fd\u6570\uff0c\u5e76\u80fd\u63a5\u53d7\u53c2\u6570"))),l.a.createElement("h3",{id:"1call"},l.a.createElement(c["AnchorLink"],{to:"#1call","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09call"),l.a.createElement(r["a"],{code:"Function.prototype.call =\n  Function.prototype.call ||\n  function (context) {\n    if (typeof this !== 'function') {\n      throw new Error('\u8bf7\u4f7f\u7528\u51fd\u6570\u8fdb\u884c\u8c03\u7528');\n    }\n    // context \u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u5982\u679c\u4e0d\u4f20\u7684\u8bdd\u9ed8\u8ba4\u4e0a\u4e0b\u6587\u4e3a window\n    context = context || window;\n    // context \u521b\u5efa\u4e00\u4e2a fn \u5c5e\u6027\uff0c\u5e76\u5c06\u503c\u8bbe\u7f6e\u4e3a\u9700\u8981\u8c03\u7528\u7684\u51fd\u6570\n    context.fn = this; // ***\u628athis\u6307\u5411\u5916\u90e8\u8c03\u7528call\u7684\u5bf9\u8c61\uff0cthis\u7684\u6307\u5411\u5176\u4e2d\u4e00\u6761\u662f\uff1a\u8c01\u8c03\u7528this\uff0cthis\u6307\u5411\u8c01\n    // \u56e0\u4e3a call \u53ef\u4ee5\u4f20\u5165\u591a\u4e2a\u53c2\u6570\u4f5c\u4e3a\u8c03\u7528\u51fd\u6570\u7684\u53c2\u6570\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u53c2\u6570\u5265\u79bb\u51fa\u6765\n    const args = [...arguments].slice(1);\n    // \u7136\u540e\u8c03\u7528\u51fd\u6570\u5e76\u5c06\u5bf9\u8c61\u4e0a\u7684\u51fd\u6570\u5220\u9664\n    const result = context.fn(...args); // \u5916\u90e8\u5bf9\u8c61\u8c03\u7528\u5f53\u524d\u51fd\u6570\n    delete context.fn;\n    return result;\n  };",lang:"js"}),l.a.createElement("h3",{id:"2apply"},l.a.createElement(c["AnchorLink"],{to:"#2apply","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09apply"),l.a.createElement("p",null,"apply \u7684\u5b9e\u73b0\u4e5f\u7c7b\u4f3c\uff0c\u533a\u522b\u5728\u4e8e\u5bf9\u53c2\u6570\u7684\u5904\u7406\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u6570\u7ec4"),l.a.createElement(r["a"],{code:"Function.prototype.apply =\n  Function.prototype.apply ||\n  function (context) {\n    if (typeof this !== 'function') {\n      return throw new Error('\u8bf7\u4f7f\u7528\u51fd\u6570\u8fdb\u884c\u8c03\u7528');\n    }\n    context = context || window;\n    context.fn = this; // ***\u628athis\u6307\u5411\u5916\u90e8\u8c03\u7528call\u7684\u51fd\u6570\n    let result;\n    if (arguments[1]) {\n      // \u53c2\u6570\u5b58\u5728\n      result = context.fn(...arguments[1]);\n    } else {\n      // \u53c2\u6570\u4e0d\u5b58\u5728\n      result = context.fn();\n    }\n    delete context.fn;\n    return result;\n  };",lang:"js"}),l.a.createElement("h3",{id:"3bind"},l.a.createElement(c["AnchorLink"],{to:"#3bind","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09bind"),l.a.createElement("p",null,"bind \u9700\u8981",l.a.createElement("code",null,"\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570"),"\uff0c\u9700\u8981",l.a.createElement("code",null,"\u5224\u65ad\u4e00\u4e9b\u8fb9\u754c\u95ee\u9898")),l.a.createElement(r["a"],{code:"Function.prototype.bind =\n  Function.prototype.bind ||\n  function (context) {\n    if (typeof this !== 'function') {\n      return throw new Error('\u8bf7\u4f7f\u7528\u51fd\u6570\u8fdb\u884c\u8c03\u7528');\n    }\n    const _this = this;\n    const args = [...arguments].slice(1);\n    // \u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\n    return function F() {\n      // \u56e0\u4e3a\u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5 new F()\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\n      if (this instanceof F) {\n        return new _this(...args, ...arguments);\n      }\n      return _this.apply(context, args.concat(...arguments));\n    };\n  };",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.",l.a.createElement("code",null,"bind")," \u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u5bf9\u4e8e\u51fd\u6570\u6765\u8bf4\u6709\u4e24\u79cd\u65b9\u5f0f\u8c03\u7528\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u8c03\u7528\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 ",l.a.createElement("code",null,"new")," \u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u5148\u6765\u8bf4\u76f4\u63a5\u8c03\u7528\u7684\u65b9\u5f0f")),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u5bf9\u4e8e\u76f4\u63a5\u8c03\u7528\uff0c\u4f7f\u7528 apply \u7684\u65b9\u5f0f\u5b9e\u73b0"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u56e0\u4e3a bind \u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u8fd9\u6837\u7684\u4ee3\u7801 ",l.a.createElement("code",null,"f.bind(obj, 1)(2)"),"\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06\u4e24\u8fb9\u7684\u53c2\u6570\u62fc\u63a5\u8d77\u6765\uff0c\u4e8e\u662f\u5c31\u6709\u4e86\u8fd9\u6837\u7684\u5b9e\u73b0 ",l.a.createElement("code",null,"args.concat(...arguments)")))),l.a.createElement("li",null,l.a.createElement("p",null,"3.\u5bf9\u4e8e ",l.a.createElement("code",null,"new")," \u7684\u60c5\u51b5\u6765\u8bf4\uff0c",l.a.createElement("code",null,"\u4e0d\u4f1a\u88ab\u4efb\u4f55\u65b9\u5f0f\u6539\u53d8 this"),"\uff0c\u6240\u4ee5\u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u9700\u8981\u5ffd\u7565\u4f20\u5165\u7684 this"))))))}}]);
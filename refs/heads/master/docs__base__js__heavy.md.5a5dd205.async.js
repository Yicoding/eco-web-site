(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},stKR:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),o=a("dEAq"),r=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u51fd\u6570\u91cd\u8f7d"},l.a.createElement(o["AnchorLink"],{to:"#\u51fd\u6570\u91cd\u8f7d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u91cd\u8f7d"),l.a.createElement("p",null,"JavaScript \u4e2d\u6ca1\u6709\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u51fd\u6570\u91cd\u8f7d"),l.a.createElement("ul",null,l.a.createElement("li",null,"TypeScript \u4e2d\u6709\u91cd\u8f7d\uff1f")),l.a.createElement("p",null,"\u5728 JavaScript \u4e2d\uff0c\u540c\u4e00\u4e2a\u4f5c\u7528\u57df\uff0c\u51fa\u73b0\u4e24\u4e2a\u540d\u5b57\u4e00\u6837\u7684\u51fd\u6570\uff0c\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684\uff0c\u6240\u4ee5 JavaScript \u6ca1\u6709\u771f\u6b63\u610f\u4e49\u7684\u91cd\u8f7d"),l.a.createElement(r["a"],{code:"function overload(a) {\n  console.log('\u4e00\u4e2a\u53c2\u6570');\n}\n\nfunction overload(a, b) {\n  console.log('\u4e24\u4e2a\u53c2\u6570');\n\nfunction overload(a, b, c) {\n  console.log('\u4e09\u4e2a\u53c2\u6570');\n}\n\noverload(1); // \u4e09\u4e2a\u53c2\u6570\noverload(1, 2); // \u4e09\u4e2a\u53c2\u6570\noverload(1, 2, 3); // \u4e09\u4e2a\u53c2\u6570",lang:"js"}),l.a.createElement("h2",{id:"1\u5b9a\u4e49"},l.a.createElement(o["AnchorLink"],{to:"#1\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u5b9a\u4e49"),l.a.createElement("p",null,"\u51fd\u6570\u540d\u76f8\u540c\uff0c\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u4e0d\u540c(\u5305\u62ec\u53c2\u6570\u4e2a\u6570\u548c\u53c2\u6570\u7c7b\u578b)\uff0c\u6839\u636e\u53c2\u6570\u7684\u4e0d\u540c\u53bb\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c"),l.a.createElement("p",null,"\u5728 JavaScript \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u6a21\u62df\u5b9e\u73b0\u91cd\u8f7d\u7684\u6548\u679c"),l.a.createElement("h2",{id:"2\u5b9e\u73b0"},l.a.createElement(o["AnchorLink"],{to:"#2\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u5b9e\u73b0"),l.a.createElement("h3",{id:"1\u7b80\u5355\u505a\u6cd5"},l.a.createElement(o["AnchorLink"],{to:"#1\u7b80\u5355\u505a\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u7b80\u5355\u505a\u6cd5"),l.a.createElement("p",null,"\u901a\u8fc7 arguments \u5bf9\u8c61\u6765\u5b9e\u73b0"),l.a.createElement(r["a"],{code:"function overload() {\n  if (arguments.length === 1) {\n    return console.log('\u4e00\u4e2a\u53c2\u6570');\n  }\n  if (arguments.length === 2) {\n    return console.log('\u4e24\u4e2a\u53c2\u6570');\n  }\n  if (arguments.length === 3) {\n    return console.log('\u4e09\u4e2a\u53c2\u6570');\n  }\n  return '\u5176\u4ed6\u60c5\u51b5';\n}\noverload(1); // \u4e00\u4e2a\u53c2\u6570\noverload(1, 2); // \u4e24\u4e2a\u53c2\u6570\noverload(1, 2, 3); // \u4e09\u4e2a\u53c2\u6570",lang:"js"}),l.a.createElement("p",null,"\u6216"),l.a.createElement(r["a"],{code:"function overload() {\n  switch (arguments.length) {\n    case 1:\n      console.log('\u4e00\u4e2a\u53c2\u6570');\n      break;\n    case 2:\n      console.log('\u4e24\u4e2a\u53c2\u6570');\n      break;\n    case 3:\n      console.log('\u4e24\u4e2a\u53c2\u6570');\n      break;\n    default:\n      console.log('\u5176\u4ed6\u60c5\u51b5');\n  }\n}\noverload(1); // \u4e00\u4e2a\u53c2\u6570\noverload(1, 2); // \u4e24\u4e2a\u53c2\u6570\noverload(1, 2, 3); // \u4e09\u4e2a\u53c2\u6570",lang:"js"}),l.a.createElement("h3",{id:"2\u9ad8\u7aef\u505a\u6cd5"},l.a.createElement(o["AnchorLink"],{to:"#2\u9ad8\u7aef\u505a\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09*\u9ad8\u7aef\u505a\u6cd5"),l.a.createElement("p",null,"\u5229\u7528\u95ed\u5305"),l.a.createElement(r["a"],{code:"function addMethod(object, name, fn) {\n  const old = object[name]; // \u628a\u524d\u4e00\u6b21\u6dfb\u52a0\u7684\u65b9\u6cd5\u5b58\u5728\u4e00\u4e2a\u4e34\u65f6\u53d8\u91cfold\u91cc\u9762\n  object[name] = function () {\n    // \u91cd\u5199object[name]\u65b9\u6cd5\n    // \u5982\u679c\u8c03\u7528object[name]\u65b9\u6cd5\u65f6\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e2a\u6570\u8ddf\u9884\u671f\u7684\u4e00\u81f4\uff0c\u5219\u76f4\u63a5\u8c03\u7528\n    if (fn.length === arguments.length) {\n      return fn.apply(this, arguments);\n    }\n    // \u5426\u5219\uff0c\u5224\u65adold\u662f\u5426\u662f\u51fd\u6570\uff0c\u5982\u679c\u662f\uff0c\u5c31\u8c03\u7528old\n    return old.apply(this, arguments);\n  };\n}\n\naddMethod(window, 'fn', (a) => console.log('\u4e00\u4e2a\u53c2\u6570'));\naddMethod(window, 'fn', (a, b) => console.log('\u4e24\u4e2a\u53c2\u6570'));\naddMethod(window, 'fn', (a, b, c) => console.log('\u4e09\u4e2a\u53c2\u6570'));\n\nfn(1); // \u4e00\u4e2a\u53c2\u6570\nfn(1, 2); // \u4e24\u4e2a\u53c2\u6570\nfn(1, 2, 3); // \u4e09\u4e2a\u53c2\u6570",lang:"js"}),l.a.createElement("h2",{id:"3\u9898\u76ee"},l.a.createElement(o["AnchorLink"],{to:"#3\u9898\u76ee","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u9898\u76ee"),l.a.createElement(r["a"],{code:"const users = {\n  values: ['Dean Edwards', 'Alex Russell', 'Dean Tom'],\n};",lang:"js"}),l.a.createElement("p",null,"\u5728 users \u5bf9\u8c61 \u4e2d\u6dfb\u52a0\u4e00\u4e2a find \u65b9\u6cd5:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5f53\u4e0d\u4f20\u4efb\u4f55\u53c2\u6570\u65f6\uff0c \u8fd4\u56de\u6574\u4e2a users .values\uff1b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5f53\u4f20\u4e00\u4e2a\u53c2\u6570\u65f6\uff0c\u5c31\u628a first-name \u8ddf\u8fd9\u4e2a\u53c2\u6570\u5339\u914d\u7684\u5143\u7d20\u8fd4\u56de\uff1b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5f53\u4f20\u4e24\u4e2a\u53c2\u6570\u65f6\uff0c\u5219\u628a first-name \u548c last-name \u90fd\u5339\u914d\u7684\u8fd4\u56de\u3002"))),l.a.createElement(r["a"],{code:"function addMethod(object, name, fn) {\n  const old = object[name]; // \u628a\u524d\u4e00\u6b21\u6dfb\u52a0\u7684\u65b9\u6cd5\u5b58\u5728\u4e00\u4e2a\u4e34\u65f6\u53d8\u91cfold\u91cc\u9762\n  object[name] = function () {\n    // \u91cd\u5199object[name]\u65b9\u6cd5\n    // \u5982\u679c\u8c03\u7528object[name]\u65b9\u6cd5\u65f6\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e2a\u6570\u8ddf\u9884\u671f\u7684\u4e00\u81f4\uff0c\u5219\u76f4\u63a5\u8c03\u7528\n    if (fn.length === arguments.length) {\n      return fn.apply(this, arguments);\n    }\n    // \u5426\u5219\uff0c\u5224\u65adold\u662f\u5426\u662f\u51fd\u6570\uff0c\u5982\u679c\u662f\uff0c\u5c31\u8c03\u7528old\n    return old.apply(this, arguments);\n  };\n}\n\naddMethod(users, 'find', function () {\n  return this.values;\n});\naddMethod(users, 'find', function (firstName) {\n  return this.values.filter((item) => item.indexOf(firstName) > -1);\n});\naddMethod(users, 'find', function (firstName, lastName) {\n  return this.values.filter(\n    (item) => item.indexOf(firstName) > -1 && item.indexOf(lastName) > -1,\n  );\n});\nconsole.log(users.find()); //[\"Dean Edwards\", \"Alex Russell\", \"Dean Tom\"]\nconsole.log(users.find('Dean')); //[\"Dean Edwards\", \"Dean Tom\"]\nconsole.log(users.find('Dean', 'Edwards')); //[\"Dean Edwards\"]",lang:"js"}))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},bXs7:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),o=a.n(l),t=a("dEAq"),r=a("H1Ra");a("JjdP");n["default"]=e=>(o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&t["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u7c7b\u578b\u65ad\u8a00\u4e0e\u7c7b\u578b\u5b88\u536b"},o.a.createElement(t["AnchorLink"],{to:"#\u7c7b\u578b\u65ad\u8a00\u4e0e\u7c7b\u578b\u5b88\u536b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u578b\u65ad\u8a00\u4e0e\u7c7b\u578b\u5b88\u536b"),o.a.createElement("h2",{id:"1\u7c7b\u578b\u65ad\u8a00"},o.a.createElement(t["AnchorLink"],{to:"#1\u7c7b\u578b\u65ad\u8a00","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"1.\u7c7b\u578b\u65ad\u8a00"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u4f7f\u7528 ",o.a.createElement("code",null,"as")," \u8fdb\u884c\u65ad\u8a00")),o.a.createElement(r["a"],{code:"interface Person {\n  name: string;\n  age: number;\n}\n\nconst person = {} as Person;\n\nperson.name = 'xiaomuzhu';\nperson.age = 20;",lang:"ts"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u7c7b\u578b\u65ad\u8a00\u4e0d\u80fd\u6ee5\u7528,\u5728\u4e07\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8981\u8c28\u614e"),o.a.createElement("li",null,"\u5f3a\u5236\u628a\u67d0\u7c7b\u578b\u65ad\u8a00\u4f1a\u9020\u6210 TypeScript \u4e27\u5931\u4ee3\u7801\u63d0\u793a\u7684\u80fd\u529b")),o.a.createElement("h2",{id:"2\u53cc\u91cd\u65ad\u8a00"},o.a.createElement(t["AnchorLink"],{to:"#2\u53cc\u91cd\u65ad\u8a00","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"2.\u53cc\u91cd\u65ad\u8a00"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5148\u628a\u7c7b\u578b\u65ad\u8a00\u4e3a any \u518d\u63a5\u7740\u65ad\u8a00\u4e3a\u4f60\u60f3\u65ad\u8a00\u7684\u7c7b\u578b\u5c31\u80fd\u5b9e\u73b0\u53cc\u91cd\u65ad\u8a00")),o.a.createElement(r["a"],{code:"interface Person {\n  name: string;\n  age: number;\n}\n\nconst person = 'xiaomuzhu' as any as Person; // ok",lang:"ts"}),o.a.createElement("h2",{id:"3\u7c7b\u578b\u5b88\u536b"},o.a.createElement(t["AnchorLink"],{to:"#3\u7c7b\u578b\u5b88\u536b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"3.\u7c7b\u578b\u5b88\u536b"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u7c7b\u578b\u5b88\u536b\u5c31\u662f\u7f29\u5c0f\u7c7b\u578b\u7684\u8303\u56f4")),o.a.createElement("h3",{id:"1instanceof"},o.a.createElement(t["AnchorLink"],{to:"#1instanceof","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"1\uff09instanceof"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("code",null,"instanceof")," \u7c7b\u578b\u4fdd\u62a4\u662f\u901a\u8fc7",o.a.createElement("code",null,"\u6784\u9020\u51fd\u6570"),"\u6765\u7ec6\u5316\u7c7b\u578b\u7684\u4e00\u79cd\u65b9\u5f0f")),o.a.createElement("li",null,o.a.createElement("p",null,"\u7528\u6765\u505a\u5224\u65ad\u4f7f\u7528"))),o.a.createElement(r["a"],{code:"class Person {\n  name = 'xiaomuzhu';\n  age = 20;\n}\n\nclass Animal {\n  name = 'petty';\n  color = 'pink';\n}\n\nfunction getSometing(arg: Person | Animal) {\n  // \u7c7b\u578b\u7ec6\u5316\u4e3a Person\n  if (arg instanceof Person) {\n    console.log(arg.color); // Error\uff0c\u56e0\u4e3aarg\u88ab\u7ec6\u5316\u4e3aPerson\uff0c\u800cPerson\u4e0a\u4e0d\u5b58\u5728 color\u5c5e\u6027\n    console.log(arg.age); // ok\n  }\n  // \u7c7b\u578b\u7ec6\u5316\u4e3a Person\n  if (arg instanceof Animal) {\n    console.log(arg.age); // Error\uff0c\u56e0\u4e3aarg\u88ab\u7ec6\u5316\u4e3aAnimal\uff0c\u800cAnimal\u4e0a\u4e0d\u5b58\u5728 age \u5c5e\u6027\n    console.log(arg.color); // ok\n  }\n}",lang:"ts"}),o.a.createElement("h3",{id:"2in"},o.a.createElement(t["AnchorLink"],{to:"#2in","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"2\uff09in"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,"x in y")," \u8868\u793a x \u5c5e\u6027\u5728 y \u4e2d\u5b58\u5728")),o.a.createElement(r["a"],{code:"class Person {\n  name = 'xiaomuzhu';\n  age = 20;\n}\n\nclass Animal {\n  name = 'petty';\n  color = 'pink';\n}\n\nfunction getSometing(arg: Person | Animal) {\n  if ('age' in arg) {\n    console.log(arg.color); // Error\n    console.log(arg.age); // ok\n  }\n  if ('color' in arg) {\n    console.log(arg.age); // Error\n    console.log(arg.color); // ok\n  }\n}",lang:"ts"}),o.a.createElement("h3",{id:"3\u5b57\u9762\u91cf\u7c7b\u578b\u5b88\u536b"},o.a.createElement(t["AnchorLink"],{to:"#3\u5b57\u9762\u91cf\u7c7b\u578b\u5b88\u536b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u5b57\u9762\u91cf\u7c7b\u578b\u5b88\u536b"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5728\u8054\u5408\u7c7b\u578b\u91cc\u4f7f\u7528\u5b57\u9762\u91cf\u7c7b\u578b\u65f6\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u68c0\u67e5\u5b83\u4eec\u662f\u5426\u6709\u533a\u522b:")),o.a.createElement(r["a"],{code:"type Foo = {\n  kind: 'foo'; // \u5b57\u9762\u91cf\u7c7b\u578b\n  foo: number;\n};\n\ntype Bar = {\n  kind: 'bar'; // \u5b57\u9762\u91cf\u7c7b\u578b\n  bar: number;\n};\n\nfunction doStuff(arg: Foo | Bar) {\n  if (arg.kind === 'foo') {\n    console.log(arg.foo); // ok\n    console.log(arg.bar); // Error\n  } else {\n    console.log(arg.foo); // Error\n    console.log(arg.bar); // ok\n  }\n}",lang:"ts"}))))}}]);
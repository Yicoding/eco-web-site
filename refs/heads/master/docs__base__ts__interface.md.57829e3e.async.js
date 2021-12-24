(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},UjWg:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u63a5\u53e3interface"},l.a.createElement(r["AnchorLink"],{to:"#\u63a5\u53e3interface","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u63a5\u53e3(interface)"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"TypeScript \u7684",l.a.createElement("code",null,"\u6838\u5fc3\u539f\u5219"),"\u4e4b\u4e00\u662f\u5bf9\u503c\u6240\u5177\u6709\u7684\u7ed3\u6784\u8fdb\u884c",l.a.createElement("code",null,"\u7c7b\u578b\u68c0\u67e5"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u63a5\u53e3\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u547d\u540d\u548c\u4e3a\u4f60\u7684\u4ee3\u7801\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801",l.a.createElement("code",null,"\u5b9a\u4e49\u5951\u7ea6")))),l.a.createElement("h2",{id:"1\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#1\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u4f7f\u7528"),l.a.createElement("ul",null,l.a.createElement("li",null,"interface \u7528\u6765\u63cf\u8ff0\u7c7b\u578b")),l.a.createElement(c["a"],{code:"interface User {\n  name: string;\n  age: number;\n  isMale: boolean;\n}\n\nconst getUserName = (user: User) => user.name;",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u63a5\u53e3 ",l.a.createElement("code",null,"User")," \u63cf\u8ff0\u4e86\u53c2\u6570 ",l.a.createElement("code",null,"user")," \u7684\u7ed3\u6784",l.a.createElement("ul",null,l.a.createElement("li",null,"\u63a5\u53e3",l.a.createElement("code",null,"\u4e0d"),"\u4f1a\u53bb",l.a.createElement("code",null,"\u68c0\u67e5"),"\u5c5e\u6027\u7684",l.a.createElement("code",null,"\u987a\u5e8f"),"\uff0c\u53ea\u8981\u76f8\u5e94\u7684",l.a.createElement("code",null,"\u5c5e\u6027\u5b58\u5728"),"\u5e76\u4e14",l.a.createElement("code",null,"\u7c7b\u578b\u517c\u5bb9``\u5373\u53ef"))))),l.a.createElement("h2",{id:"2\u53ef\u9009\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#2\u53ef\u9009\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u53ef\u9009\u5c5e\u6027"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b9a\u4e49\u7684\u5c5e\u6027",l.a.createElement("code",null,"\u53ef\u6709\u53ef\u65e0"),"\u65f6")),l.a.createElement(c["a"],{code:"interface User {\n  name: string;\n  age?: number; // \u53ef\u6709\u53ef\u65e0\uff0cage \u5c5e\u6027\u65e2\u53ef\u80fd\u662fnumber\u7c7b\u578b\u4e5f\u53ef\u80fd\u662f undefined\n  isMale: boolean;\n}",lang:"ts"}),l.a.createElement("h2",{id:"3\u53ea\u8bfb\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#3\u53ea\u8bfb\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u53ea\u8bfb\u5c5e\u6027"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5229\u7528 ",l.a.createElement("code",null,"readonly")," \u6211\u4eec\u53ef\u4ee5\u628a\u4e00\u4e2a\u5c5e\u6027",l.a.createElement("code",null,"\u53d8\u6210``\u53ea\u8bfb"),"\u6027\u8d28\uff0c\u6b64\u540e\u5c31\u65e0\u6cd5\u5bf9\u4ed6\u8fdb\u884c\u4fee\u6539")),l.a.createElement(c["a"],{code:"interface User {\n  name: string;\n  age?: number;\n  readonly isMale: boolean; // \u53ea\u8bfb\n}",lang:"ts"}),l.a.createElement("h2",{id:"4\u51fd\u6570\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#4\u51fd\u6570\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.\u51fd\u6570\u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u76f4\u63a5\u5728 interface \u5185\u90e8\u63cf\u8ff0\u51fd\u6570"),l.a.createElement(c["a"],{code:"interface User {\n  name: string;\n  age?: number;\n  readonly isMale: boolean;\n  say: (words: string) => string;\n}",lang:"ts"})),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u53ef\u4ee5\u5148\u7528\u63a5\u53e3\u76f4\u63a5\u63cf\u8ff0\u51fd\u6570\u7c7b\u578b"))),l.a.createElement(c["a"],{code:"interface Say {\n  (words: string): string;\n}\n\ninterface User {\n  name: string;\n  age?: number;\n  readonly isMale: boolean;\n  say: Say;\n}",lang:"ts"}),l.a.createElement("h2",{id:"5\u5c5e\u6027\u68c0\u67e5"},l.a.createElement(r["AnchorLink"],{to:"#5\u5c5e\u6027\u68c0\u67e5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.\u5c5e\u6027\u68c0\u67e5"),l.a.createElement("h3",{id:"1\u989d\u5916\u5c5e\u6027\u68c0\u67e5\u4ea7\u751f\u62a5\u9519"},l.a.createElement(r["AnchorLink"],{to:"#1\u989d\u5916\u5c5e\u6027\u68c0\u67e5\u4ea7\u751f\u62a5\u9519","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u989d\u5916\u5c5e\u6027\u68c0\u67e5\u4ea7\u751f\u62a5\u9519"),l.a.createElement(c["a"],{code:"interface Config {\n  width?: number;\n}\n\nfunction CalculateAreas(config: Config): { area: number } {\n  let square = 100;\n  if (config.width) {\n    square = config.width * config.width;\n  }\n  return { area: square };\n}\n\nlet mySquare = CalculateAreas({ widdth: 5 }); // \u62a5\u9519\uff0c\u4f20\u5165\u7684\u5c5e\u6027\u6ca1\u6709\u5b9a\u4e49",lang:"ts"}),l.a.createElement("h3",{id:"2\u89e3\u51b3"},l.a.createElement(r["AnchorLink"],{to:"#2\u89e3\u51b3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u89e3\u51b3"),l.a.createElement("p",null,l.a.createElement("strong",null,"1.\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00")),l.a.createElement(c["a"],{code:"let mySquare = CalculateAreas({ widdth: 5 } as Config);",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("strong",null,"2.\u6dfb\u52a0\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d")),l.a.createElement("ul",null,l.a.createElement("li",null,"Config \u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684\u5c5e\u6027")),l.a.createElement(c["a"],{code:"interface Config {\n  width?: number;\n  [propName: string]: any;\n}",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("strong",null,"3.\u5c06\u5b57\u9762\u91cf\u8d4b\u503c\u7ed9\u53e6\u5916\u4e00\u4e2a\u53d8\u91cf")),l.a.createElement(c["a"],{code:"let options: any = { widdth: 5 };\nlet mySquare = CalculateAreas(options);",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u672c\u8d28\u4e0a\u662f\u8f6c\u5316\u4e3a any \u7c7b\u578b\uff0c\u9664\u975e\u6709\u4e07\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\uff0c\u4e0d\u5efa\u8bae\u91c7\u7528\u4e0a\u8ff0\u65b9\u6cd5")),l.a.createElement("h2",{id:"6\u7ee7\u627f\u63a5\u53e3"},l.a.createElement(r["AnchorLink"],{to:"#6\u7ee7\u627f\u63a5\u53e3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.\u7ee7\u627f\u63a5\u53e3"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"extends")," \u7ee7\u627f")),l.a.createElement(c["a"],{code:"// 1.\u7ee7\u627f User \u7684\u63a5\u53e3\ninterface User {\n  name: string;\n  age?: number;\n  readonly isMale: boolean;\n  say: () => string;\n}\n\ninterface VIPUser extends User {\n  broadcast: () => void;\n}\n\n// 2.\u7ee7\u627f\u591a\u4e2a\u63a5\u53e3\ninterface VIPUser extends User, SupperUser {\n  broadcast: () => void;\n}",lang:"ts"}))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
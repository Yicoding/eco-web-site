(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{JjdP:function(e,l,n){"use strict";n.r(l),l["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},fFco:function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),c=n("dEAq"),r=n("H1Ra");n("JjdP");l["default"]=e=>(t.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"ts-\u4e2d\u7684\u7c7b\u578b"},t.a.createElement(c["AnchorLink"],{to:"#ts-\u4e2d\u7684\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"ts \u4e2d\u7684\u7c7b\u578b"),t.a.createElement("h2",{id:"1\u539f\u59cb\u7c7b\u578b"},t.a.createElement(c["AnchorLink"],{to:"#1\u539f\u59cb\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"1.\u539f\u59cb\u7c7b\u578b"),t.a.createElement("p",null,"TypeScript \u7684\u539f\u59cb\u7c7b\u578b\u5305\u62ec: boolean\u3001number\u3001string\u3001void\u3001undefined\u3001null\u3001symbol\u3001bigint"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"\u5e03\u5c14"),"\u7c7b\u578b\uff1a",t.a.createElement("code",null,"boolean")),t.a.createElement("li",null,t.a.createElement("code",null,"\u6570\u5b57"),"\u7c7b\u578b\uff1a",t.a.createElement("code",null,"number")),t.a.createElement("li",null,t.a.createElement("code",null,"\u5b57\u7b26\u4e32"),"\u7c7b\u578b\uff1a",t.a.createElement("code",null,"string")),t.a.createElement("li",null,t.a.createElement("code",null,"\u7a7a\u503c"),"\uff1a",t.a.createElement("code",null,"void")),t.a.createElement("li",null,"Null \u548c Undefined\uff1a",t.a.createElement("code",null,"null")," \u548c ",t.a.createElement("code",null,"undefined")),t.a.createElement("li",null,"Symbol \u7c7b\u578b\uff1a",t.a.createElement("code",null,"symbol")),t.a.createElement("li",null,"BigInt ",t.a.createElement("code",null,"\u5927\u6570\u6574\u6570"),"\u7c7b\u578b\uff1a",t.a.createElement("code",null,"bigint"))),t.a.createElement("h3",{id:"1\u5e03\u5c14\u7c7b\u578b"},t.a.createElement(c["AnchorLink"],{to:"#1\u5e03\u5c14\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5e03\u5c14\u7c7b\u578b"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"boolean")," \u8868\u793a ",t.a.createElement("code",null,"ts")," \u4e2d\u7684\u5e03\u5c14",t.a.createElement("code",null,"\u7c7b\u578b")),t.a.createElement("li",null,t.a.createElement("code",null,"Boolean")," \u8868\u793a ",t.a.createElement("code",null,"js")," \u4e2d\u7684\u5e03\u5c14",t.a.createElement("code",null,"\u5bf9\u8c61"),"\uff0c\u662f js \u7684\u6784\u9020\u51fd\u6570")),t.a.createElement(r["a"],{code:"const isLoading: boolean = false;",lang:"ts"}),t.a.createElement("h3",{id:"2\u6570\u5b57"},t.a.createElement(c["AnchorLink"],{to:"#2\u6570\u5b57","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u6570\u5b57"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7528 ",t.a.createElement("code",null,"number")," \u7c7b\u578b\u8868\u793a")),t.a.createElement(r["a"],{code:"const decLiteral: number = 6; // \u5341\u8fdb\u5236\nconst hexLiteral: number = 0xf00d; // \u5341\u516d\u8fdb\u5236\nconst octalLiteral: number = 0o744; // \u516b\u8fdb\u5236\nconst binaryLiteral: number = 0b1010; // \u4e8c\u8fdb\u5236",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u6570\u503c\u7684\u8fdb\u5236"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5341\u8fdb\u5236\uff1a\u6ca1\u6709\u524d\u5bfc 0 \u7684\u6570\u503c"),t.a.createElement("li",null,"\u5341\u516d\u8fdb\u5236\uff1a\u6709\u524d\u7f00 0x \u6216 0X \u7684\u6570\u503c"),t.a.createElement("li",null,"\u516b\u8fdb\u5236\uff1a\u6709\u524d\u7f00 0o \u6216 0O \u7684\u6570\u503c\uff0c\u6216\u8005\u6709\u524d\u5bfc 0\u3001\u4e14\u53ea\u7528\u5230 0-7 \u7684\u516b\u4e2a\u963f\u62c9\u4f2f\u6570\u5b57\u7684\u6570\u503c"),t.a.createElement("li",null,"\u4e8c\u8fdb\u5236\uff1a\u6709\u524d\u7f00 0b \u6216 0B \u7684\u6570\u503c"))),t.a.createElement("li",null,t.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJavaScript \u5185\u90e8\u4f1a\u81ea\u52a8\u5c06\u516b\u8fdb\u5236\u3001\u5341\u516d\u8fdb\u5236\u3001\u4e8c\u8fdb\u5236\u8f6c\u4e3a\u5341\u8fdb\u5236"),t.a.createElement(r["a"],{code:"0xff; // 255\n0o377; // 255\n0b11; // 3",lang:"js"}))),t.a.createElement("h3",{id:"3\u5b57\u7b26\u4e32"},t.a.createElement(c["AnchorLink"],{to:"#3\u5b57\u7b26\u4e32","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u5b57\u7b26\u4e32"),t.a.createElement(r["a"],{code:"const userName: string = 'Bob';",lang:"ts"}),t.a.createElement("h3",{id:"4\u7a7a\u503c-void"},t.a.createElement(c["AnchorLink"],{to:"#4\u7a7a\u503c-void","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u7a7a\u503c ",t.a.createElement("code",null,"void")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u7c7b\u578b\uff0c\u5f53\u4e00\u4e2a\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u5176\u8fd4\u56de\u503c\u7c7b\u578b\u662f ",t.a.createElement("code",null,"void"))),t.a.createElement(r["a"],{code:"function warnUser(): void {\n  console.log('This is my warning message');\n}",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u53ea\u6709 ",t.a.createElement("code",null,"null")," \u548c ",t.a.createElement("code",null,"undefined")," \u53ef\u4ee5\u8d4b\u7ed9 ",t.a.createElement("code",null,"void"))),t.a.createElement("li",null,t.a.createElement("p",null,"\u4e0d\u80fd\u5c06\u7c7b\u578b ",t.a.createElement("code",null,"null")," \u5206\u914d\u7ed9\u7c7b\u578b ",t.a.createElement("code",null,"void"),"(\u5f00\u542f ",t.a.createElement("code",null,"--strictNullChecks")," \u68c0\u6d4b)"))),t.a.createElement(r["a"],{code:"const a: void = undefined;",lang:"ts"}),t.a.createElement("h3",{id:"5null-\u548c-undefined"},t.a.createElement(c["AnchorLink"],{to:"#5null-\u548c-undefined","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"5\uff09Null \u548c Undefined"),t.a.createElement(r["a"],{code:"let a: undefined = undefined;\nlet b: null = null;",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b null \u548c undefined \u662f\u6240\u6709\u7c7b\u578b\u7684\u5b50\u7c7b\u578b")),t.a.createElement("li",null,t.a.createElement("p",null,"\u5728\u6b63\u5f0f\u9879\u76ee\u4e2d\u4e00\u822c\u90fd\u662f\u5f00\u542f ",t.a.createElement("code",null,"--strictNullChecks")," \u68c0\u6d4b\u7684\uff0c\u5373 null \u548c undefined \u53ea\u80fd\u8d4b\u503c\u7ed9 any \u548c\u5b83\u4eec\u5404\u81ea(\u4e00\u4e2a\u4f8b\u5916\u662f ",t.a.createElement("code",null,"undefined \u662f\u4e5f\u53ef\u4ee5\u5206\u914d\u7ed9 void"),")\uff0c\u53ef\u4ee5\u89c4\u907f\u975e\u5e38\u591a\u7684\u95ee\u9898"))),t.a.createElement("h3",{id:"6symbol"},t.a.createElement(c["AnchorLink"],{to:"#6symbol","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6\uff09Symbol"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"1.\u4f7f\u7528 Symbol \u7684\u65f6\u5019\uff0c\u5fc5\u987b\u6dfb\u52a0 es6 \u7684\u7f16\u8bd1\u8f85\u52a9\u5e93"),t.a.createElement(r["a"],{code:'// tsconfig.json\n{\n  "lib": ["es6"]\n}',lang:"json"})),t.a.createElement("li",null,t.a.createElement("p",null,"2.Symbol \u662f\u5728 ES2015 \u4e4b\u540e\u6210\u4e3a\u65b0\u7684\u539f\u59cb\u7c7b\u578b\uff0c\u5b83\u901a\u8fc7 Symbol \u6784\u9020\u51fd\u6570\u521b\u5efa"))),t.a.createElement(r["a"],{code:"const sym1 = Symbol('key1');\nconst sym2 = Symbol('key2');",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,"3.Symbol \u7684\u503c\u662f",t.a.createElement("code",null,"\u552f\u4e00\u4e0d\u53d8\u7684"))),t.a.createElement(r["a"],{code:"Symbol('key1') === Symbol('key1'); // false",lang:"ts"}),t.a.createElement("h3",{id:"7bigint"},t.a.createElement(c["AnchorLink"],{to:"#7bigint","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7\uff09BigInt"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,t.a.createElement("code",null,"BigInt")," \u53ef\u4ee5\u5b89\u5168\u5730\u5b58\u50a8\u548c\u64cd\u4f5c",t.a.createElement("code",null,"\u5927\u6574\u6570"),"\uff0c\u5373\u4f7f\u8fd9\u4e2a\u6570\u5df2\u7ecf\u8d85\u51fa\u4e86 JavaScript \u6784\u9020\u51fd\u6570 Number \u80fd\u591f\u8868\u793a\u7684\u5b89\u5168\u6574\u6570\u8303\u56f4")),t.a.createElement("li",null,t.a.createElement("p",null,"\u4f7f\u7528 BigInt \u7684\u65f6\u5019\uff0c\u5fc5\u987b\u6dfb\u52a0 ",t.a.createElement("code",null,"ESNext")," \u7684\u7f16\u8bd1\u8f85\u52a9\u5e93"),t.a.createElement(r["a"],{code:'// tsconfig.json\n{\n  "lib": ["ESNext"]\n}',lang:"json"})),t.a.createElement("li",null,t.a.createElement("p",null,"JavaScript \u4e2d\u91c7\u7528\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff0c\u5bfc\u81f4\u7cbe\u5ea6\u6709\u9650"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"Number.MAX_SAFE_INTEGER")," \u6700\u5927\u4e3a ",t.a.createElement("code",null,"2**53-1"))),t.a.createElement(r["a"],{code:"const max = Number.MAX_SAFE_INTEGER;\n\nconst max1 = max + 1;\nconst max2 = max + 2;\n\nmax1 === max2; //true",lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"BigInt \u6b63\u662f\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u800c\u751f\u7684(",t.a.createElement("code",null,"\u5f00\u542f BigInt"),")"),t.a.createElement(r["a"],{code:"// \u8fd9\u91cc\u662f JavaScript \u4ee3\u7801\uff0c\u5e76\u4e0d\u662f typescript\n// const max = BigInt(Number.MAX_SAFE_INTEGER);\n\nconst max = Number.MAX_SAFE_INTEGER;\nconst max1 = max + 1n;\nconst max2 = max + 2n;\n\nmax1 === max2; // false",lang:"ts"}))),t.a.createElement("h2",{id:"2\u5176\u4ed6\u7c7b\u578b"},t.a.createElement(c["AnchorLink"],{to:"#2\u5176\u4ed6\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.\u5176\u4ed6\u7c7b\u578b"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"1.\u8ba1\u7b97\u673a\u7c7b\u578b\u7cfb\u7edf\u7406\u8bba\u4e2d\u7684\u9876\u7ea7\u7c7b\u578b\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"any"),t.a.createElement("li",null,"unknown"))),t.a.createElement("li",null,t.a.createElement("p",null,"2.\u7c7b\u578b\u7cfb\u7edf\u4e2d\u7684\u5e95\u90e8\u7c7b\u578b\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"never"))),t.a.createElement("li",null,t.a.createElement("p",null,"3.\u975e\u539f\u59cb\u7c7b\u578b(non-primitive type)\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"object"))),t.a.createElement("li",null,t.a.createElement("p",null,"4.\u6bd4\u8f83\u5e38\u89c1\u7684\u6570\u7ec4\u3001\u5143\u7ec4"))),t.a.createElement("h3",{id:"1any"},t.a.createElement(c["AnchorLink"],{to:"#1any","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"1\uff09any"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4e3a\u90a3\u4e9b\u5728\u7f16\u7a0b\u9636\u6bb5\u8fd8",t.a.createElement("code",null,"\u4e0d\u6e05\u695a"),"\u7c7b\u578b\u7684\u53d8\u91cf\u6307\u5b9a\u4e00\u4e2a\u7c7b\u578b",t.a.createElement("ul",null,t.a.createElement("li",null,"\u8fd9\u4e9b\u503c\u53ef\u80fd\u6765\u81ea\u4e8e\u52a8\u6001\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u6765\u81ea\u7528\u6237\u8f93\u5165\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e93"))),t.a.createElement("li",null,"\u53ef\u4ee5\u4f7f\u7528 any \u7c7b\u578b\u6765\u6807\u8bb0\u8fd9\u4e9b\u53d8\u91cf"),t.a.createElement("li",null,"\u901a\u5e38\u5728\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u4e0d\u5e94\u8be5\u9996\u5148\u8003\u8651\u4f7f\u7528\u6b64\u7c7b\u578b")),t.a.createElement(r["a"],{code:"let notSure: any = 4;\nnotSure = 'maybe a string instead';",lang:"ts"}),t.a.createElement("h3",{id:"2unknown"},t.a.createElement(c["AnchorLink"],{to:"#2unknown","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2\uff09unknown"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"1.",t.a.createElement("code",null,"unknown")," \u662f TypeScript 3.0 \u5f15\u5165\u4e86\u65b0\u7c7b\u578b\uff0c\u662f ",t.a.createElement("code",null,"any")," \u7c7b\u578b\u5bf9\u5e94\u7684",t.a.createElement("code",null,"\u5b89\u5168\u7c7b\u578b"))),t.a.createElement("li",null,t.a.createElement("p",null,"2.",t.a.createElement("code",null,"unknown")," \u548c ",t.a.createElement("code",null,"any")," \u7684",t.a.createElement("code",null,"\u4e3b\u8981\u533a\u522b"),"\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"unknown")," \u7c7b\u578b\u4f1a",t.a.createElement("code",null,"\u66f4\u52a0\u4e25\u683c"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5728\u5bf9 unknown \u7c7b\u578b\u7684\u503c\u6267\u884c\u5927\u591a\u6570\u64cd\u4f5c\u4e4b\u524d,\u6211\u4eec\u5fc5\u987b",t.a.createElement("code",null,"\u8fdb\u884c"),"\u67d0\u79cd\u5f62\u5f0f\u7684",t.a.createElement("code",null,"\u68c0\u67e5")),t.a.createElement("li",null,"\u5f53 unknown \u7c7b\u578b\u88ab\u786e\u5b9a\u662f\u67d0\u4e2a\u7c7b\u578b\u4e4b\u524d,\u5b83\u4e0d\u80fd\u88ab\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u6bd4\u5982\u5b9e\u4f8b\u5316\u3001getter\u3001\u51fd\u6570\u6267\u884c\u7b49\u7b49"))),t.a.createElement("li",null,t.a.createElement("code",null,"any")," \u7c7b\u578b\u7684\u503c\u6267\u884c\u64cd\u4f5c\u4e4b\u524d,\u6211\u4eec",t.a.createElement("code",null,"\u4e0d"),"\u5fc5\u8fdb\u884c\u4efb\u4f55",t.a.createElement("code",null,"\u68c0\u67e5")))),t.a.createElement("li",null,t.a.createElement("p",null,"3.",t.a.createElement("code",null,"unknown")," \u4f5c\u7528"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u53ef\u4ee5",t.a.createElement("code",null,"\u7f29\u5c0f\u7c7b\u578b\u8303\u56f4"),"\uff08\u7c7b\u578b\u4fdd\u62a4\uff09")),t.a.createElement(r["a"],{code:"function getValue(value: unknown): string {\n  if (value instanceof Date) {\n    // \u8fd9\u91cc\u7531\u4e8e\u628avalue\u7684\u7c7b\u578b\u7f29\u5c0f\u4e3aDate\u5b9e\u4f8b\u7684\u8303\u56f4\u5185,\u6240\u4ee5`value.toISOString()`\n    return value.toISOString();\n  }\n\n  return String(value);\n}",lang:"ts"}))),t.a.createElement("h3",{id:"3never"},t.a.createElement(c["AnchorLink"],{to:"#3never","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"3\uff09never"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,t.a.createElement("code",null,"never")," \u7c7b\u578b\u8868\u793a\u7684\u662f\u90a3\u4e9b",t.a.createElement("code",null,"\u6c38\u4e0d\u5b58\u5728\u7684\u503c"),"\u7684",t.a.createElement("code",null,"\u7c7b\u578b"))),t.a.createElement("li",null,t.a.createElement("p",null,t.a.createElement("code",null,"never")," \u7c7b\u578b\u662f\u4efb\u4f55\u7c7b\u578b\u7684",t.a.createElement("code",null,"\u5b50\u7c7b\u578b"),"\uff0c\u4e5f\u53ef\u4ee5",t.a.createElement("code",null,"\u8d4b\u503c\u7ed9\u4efb\u4f55\u7c7b\u578b"))),t.a.createElement("li",null,t.a.createElement("p",null,"\u9664\u4e86 never \u672c\u8eab\uff0c\u6ca1\u6709\u5176\u4ed6\u7c7b\u578b\u662f never \u7684\u5b50\u7c7b\u578b\u6216\u53ef\u4ee5\u8d4b\u503c\u7ed9 never \u7c7b\u578b"),t.a.createElement("ul",null,t.a.createElement("li",null,"any \u4e5f\u4e0d\u53ef\u4ee5\u8d4b\u503c\u7ed9 never")))),t.a.createElement(r["a"],{code:"// \u629b\u51fa\u5f02\u5e38\u7684\u51fd\u6570\u6c38\u8fdc\u4e0d\u4f1a\u6709\u8fd4\u56de\u503c\nfunction error(message: string): never {\n  throw new Error(message);\n}\n\n// \u7a7a\u6570\u7ec4\uff0c\u800c\u4e14\u6c38\u8fdc\u662f\u7a7a\u7684\nconst empty: never[] = [];",lang:"ts"}),t.a.createElement("h3",{id:"4\u6570\u7ec4"},t.a.createElement(c["AnchorLink"],{to:"#4\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u6570\u7ec4"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u6570\u7ec4\u6709\u4e24\u79cd\u7c7b\u578b\u5b9a\u4e49\u65b9\u5f0f")),t.a.createElement("li",null,t.a.createElement("p",null,"1.\u4f7f\u7528",t.a.createElement("code",null,"\u6cdb\u578b"),":"))),t.a.createElement(r["a"],{code:"const list: Array<number> = [1, 2, 3];",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,"2.\u5728\u5143\u7d20\u7c7b\u578b\u540e\u9762\u63a5\u4e0a ",t.a.createElement("code",null,"[]"))),t.a.createElement(r["a"],{code:"const list: number[] = [1, 2, 3];",lang:"ts"}),t.a.createElement("h3",{id:"5\u5143\u7ec4tuple"},t.a.createElement(c["AnchorLink"],{to:"#5\u5143\u7ec4tuple","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"5\uff09\u5143\u7ec4\uff08Tuple\uff09"),t.a.createElement("ul",null,t.a.createElement("li",null,"1.\u8868\u793a\u4e00\u4e2a",t.a.createElement("code",null,"\u5df2\u77e5"),"\u5143\u7d20",t.a.createElement("code",null,"\u6570\u91cf"),"\u548c",t.a.createElement("code",null,"\u7c7b\u578b"),"\u7684\u6570\u7ec4\uff0c",t.a.createElement("code",null,"\u5404\u5143\u7d20"),"\u7684",t.a.createElement("code",null,"\u7c7b\u578b``\u4e0d\u5fc5\u76f8\u540c"))),t.a.createElement(r["a"],{code:"let x: [string, number];\nx = ['hello', 10, false]; // Error\nx = ['hello']; // Error",lang:"ts"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"2.\u5143\u7ec4\u7684\u7c7b\u578b\u5982\u679c\u591a\u51fa\u6216\u8005\u5c11\u4e8e\u89c4\u5b9a\u7684\u7c7b\u578b\u662f\u4f1a\u62a5\u9519\u7684\uff0c\u5fc5\u987b",t.a.createElement("code",null,"\u4e25\u683c"),"\u8ddf\u4e8b\u5148",t.a.createElement("code",null,"\u58f0\u660e"),"\u7684\u7c7b\u578b",t.a.createElement("code",null,"\u4e00\u81f4"),"\u624d\u4e0d\u4f1a\u62a5\u9519"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7c7b\u578b\u7684\u987a\u5e8f\u4e0d\u4e00\u6837\u4e5f\u4f1a\u62a5\u9519"))),t.a.createElement("li",null,t.a.createElement("p",null,"3.\u5143\u7ec4\u7ee7\u627f\u4e8e\u6570\u7ec4\uff0c\u4f46\u662f\u6bd4\u6570\u7ec4\u62e5\u6709\u66f4\u4e25\u683c\u7684\u7c7b\u578b\u68c0\u67e5")),t.a.createElement("li",null,t.a.createElement("p",null,"4.",t.a.createElement("code",null,"\u5143\u7ec4\u8d8a\u754c\u95ee\u9898"),":"),t.a.createElement("ul",null,t.a.createElement("li",null,"Typescript ",t.a.createElement("code",null,"\u5141\u8bb8"),"\u5411\u5143\u7ec4\u4e2d\u4f7f\u7528\u6570\u7ec4\u7684 ",t.a.createElement("code",null,"push")," \u65b9\u6cd5\u63d2\u5165\u65b0\u5143\u7d20\uff0c\u4f46\u662f\u5f53\u6211\u4eec",t.a.createElement("code",null,"\u8bbf\u95ee\u65b0\u52a0\u5165\u7684\u5143\u7d20"),"\u65f6\uff0c\u4f1a",t.a.createElement("code",null,"\u62a5\u9519"))))),t.a.createElement(r["a"],{code:"const tuple: [string, number] = ['a', 1];\ntuple.push(2); // ok\nconsole.log(tuple); // [\"a\", 1, 2] -> \u6b63\u5e38\u6253\u5370\u51fa\u6765\n\nconsole.log(tuple[2]); // Tuple type '[string, number]' of length '2' has no element at index '2'",lang:"ts"}),t.a.createElement("h3",{id:"6object"},t.a.createElement(c["AnchorLink"],{to:"#6object","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6\uff09Object"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"object \u8868\u793a",t.a.createElement("code",null,"\u975e\u539f\u59cb\u7c7b\u578b"),"\uff0c\u4e5f\u5c31\u662f\u9664 number\uff0cstring\uff0cboolean\uff0csymbol\uff0cnull \u6216 undefined \u4e4b\u5916\u7684\u7c7b\u578b")),t.a.createElement("li",null,t.a.createElement("p",null,"\u666e\u901a\u5bf9\u8c61\u3001\u679a\u4e3e\u3001\u6570\u7ec4\u3001\u5143\u7ec4\u901a\u901a\u90fd\u662f object \u7c7b\u578b"))),t.a.createElement(r["a"],{code:"enum Direction {\n  Center = 1,\n}\n\nlet value: object;\n\nvalue = Direction;\nvalue = [1];\nvalue = [1, 'hello'];\nvalue = {};",lang:"ts"}))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{HzKk:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6570\u7ec4\u7684\u5e94\u7528"},l.a.createElement(c["AnchorLink"],{to:"#\u6570\u7ec4\u7684\u5e94\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u7684\u5e94\u7528"),l.a.createElement("h2",{id:"1map---\u4e24\u6570\u6c42\u548c\u95ee\u9898"},l.a.createElement(c["AnchorLink"],{to:"#1map---\u4e24\u6570\u6c42\u548c\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.Map - \u4e24\u6570\u6c42\u548c\u95ee\u9898"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u771f\u9898\u63cf\u8ff0\uff1a \u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u76ee\u6807\u503c target\uff0c\u8bf7\u4f60\u5728\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa\u548c\u4e3a\u76ee\u6807\u503c\u7684\u90a3 \u4e24\u4e2a \u6574\u6570\uff0c\u5e76\u8fd4\u56de\u4ed6\u4eec\u7684\u6570\u7ec4\u4e0b\u6807")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ed9\u5b9a nums = [11, 2, 15, 7], target = 9"),l.a.createElement("li",null,"\u56e0\u4e3a nums[0] + nums[1] = 2 + 7 = 9 \u6240\u4ee5\u8fd4\u56de [1, 3]")),l.a.createElement("h3",{id:"1\u6df3\u6734\u89e3\u6cd5"},l.a.createElement(c["AnchorLink"],{to:"#1\u6df3\u6734\u89e3\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u201c\u6df3\u6734\u201d\u89e3\u6cd5"),l.a.createElement(r["a"],{code:"function searchIndexs(nums, target) {\n  const len = nums.length;\n  for (let i = 0; i < len; i++) {\n    for (let j = 0; j < len; j++) {\n      if (nums[i] + nums[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n}\nconst nums = [11, 2, 15, 7];\nconst target = 9;\nconst targetIndexs = searchIndexs(nums, target);\nconsole.log(targetIndexs); // [1, 3]",lang:"js"}),l.a.createElement("h3",{id:"2\u6df3\u6734\u89e3\u6cd5\u7684\u53cd\u601d"},l.a.createElement(c["AnchorLink"],{to:"#2\u6df3\u6734\u89e3\u6cd5\u7684\u53cd\u601d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u6df3\u6734\u201d\u89e3\u6cd5\u7684\u53cd\u601d"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u53d1\u73b0\u4ee3\u7801\u91cc\u6709\u4e24\u5c42\u5faa\u73af\u65f6\uff0c\u5148\u53cd\u601d\u4e00\u4e0b\uff0c\u80fd\u4e0d\u80fd\u7528\u7a7a\u95f4\u6362\u65f6\u95f4\uff0c\u628a\u5b83\u4f18\u5316\u6210\u4e00\u5c42\u5faa\u73af"),l.a.createElement("li",null,"\u56e0\u4e3a\u4e24\u5c42\u5faa\u73af\u5f88\u591a\u60c5\u51b5\u4e0b\u90fd\u610f\u5473\u7740 O(n^2) \u7684\u590d\u6742\u5ea6\uff0c\u8fd9\u4e2a\u590d\u6742\u5ea6\u975e\u5e38\u5bb9\u6613\u5bfc\u81f4\u4f60\u7684\u7b97\u6cd5\u8d85\u65f6")),l.a.createElement("h3",{id:"3\u7a7a\u95f4\u6362\u65f6\u95f4map-\u6765\u5e2e\u5fd9"},l.a.createElement(c["AnchorLink"],{to:"#3\u7a7a\u95f4\u6362\u65f6\u95f4map-\u6765\u5e2e\u5fd9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09*\u7a7a\u95f4\u6362\u65f6\u95f4\uff0cMap \u6765\u5e2e\u5fd9"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"\u51e0\u4e4e\u6240\u6709\u7684\u6c42\u548c\u95ee\u9898\uff0c\u90fd\u53ef\u4ee5\u8f6c\u5316\u4e3a\u6c42\u5dee\u95ee\u9898"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u901a\u8fc7\u628a\u6c42\u548c\u95ee\u9898\u8f6c\u5316\u4e3a\u6c42\u5dee\u95ee\u9898\uff0c\u4e8b\u60c5\u4f1a\u53d8\u5f97\u66f4\u52a0\u7b80\u5355"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u904d\u5386\u6570\u7ec4\u7684\u8fc7\u7a0b\u4e2d\uff0c\u589e\u52a0\u4e00\u4e2a Map \u6765\u8bb0\u5f55\u5df2\u7ecf\u904d\u5386\u8fc7\u7684\u6570\u5b57\u53ca\u5176\u5bf9\u5e94\u7684\u7d22\u5f15\u503c"),l.a.createElement("li",null,"\u7136\u540e\u6bcf\u904d\u5386\u5230\u4e00\u4e2a\u65b0\u6570\u5b57\u7684\u65f6\u5019\uff0c\u90fd\u56de\u5230 Map \u91cc\u53bb\u67e5\u8be2 ",l.a.createElement("code",null,"targetNum \u4e0e\u8be5\u6570\u7684\u5dee\u503c"),"\u662f\u5426\u5df2\u7ecf\u5728\u524d\u9762\u7684\u6570\u5b57\u4e2d\u51fa\u73b0\u8fc7\u4e86"),l.a.createElement("li",null,"\u82e5\u51fa\u73b0\u8fc7\uff0c\u90a3\u4e48\u7b54\u6848\u5df2\u7136\u663e\u73b0")))),l.a.createElement(r["a"],{code:"function searchIndexs(arr, total) {\n  const diffs = {};\n  const len = arr.length;\n  for (let i = 0; i < len; i++) {\n    if (diffs[arr[i]])\n  }\n}",lang:"js"}))))},JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
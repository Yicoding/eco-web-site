(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{DAMK:function(e,n,a){e.exports=a.p+"static/15.7f63dd4a.png"},JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Kz5yp:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),m=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"npm"},l.a.createElement(c["AnchorLink"],{to:"#npm","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"npm"),l.a.createElement("h2",{id:"1\u547d\u4ee4"},l.a.createElement(c["AnchorLink"],{to:"#1\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u547d\u4ee4"),l.a.createElement(m["a"],{code:"/*1.\u7528\u6237*/\nnpm login // \u767b\u9646npm\nnpm whoami // \u67e5\u770b\u5f53\u524dnpm\u7528\u6237\nnpm adduser // \u6dfb\u52a0\u7528\u6237\n\n/*2.\u914d\u7f6e*/\nnpm -v // \u67e5\u770b npm \u7684\u7248\u672c\nnpm -l // \u67e5\u770b\u5404\u4e2a\u547d\u4ee4\u7684\u7b80\u5355\u7528\u6cd5\nnpm help // \u67e5\u770b npm \u547d\u4ee4\u5217\u8868\nnpm config list -l // \u67e5\u770b npm \u7684\u914d\u7f6e\n\n/*3.\u6a21\u5757*/\nnpm init // \u521d\u59cb\u5316\u751f\u6210\u4e00\u4e2a\u65b0\u7684package.json\u6587\u4ef6\nnpm search <\u641c\u7d22\u8bcd> [-g] // \u641c\u7d22\u6a21\u5757\nnpm list // \u67e5\u770b\u6a21\u5757\nnpm -g list --depth=1 // \u67e5\u770b\u5168\u5c40\u5b89\u88c5\u6a21\u5757\nnpm install // \u6309package.json\u521d\u59cb\u5316\u6a21\u5757\nnpm install moduleName // \u5b89\u88c5\u6a21\u5757\nnpm install -g moduleName // \u5168\u5c40\u5b89\u88c5\u6a21\u5757\nnpm uninstall moduleName // \u5378\u8f7d\u6a21\u5757\nnpm remove moduleName // \u5220\u9664\u6a21\u5757\nnpm update express // \u66f4\u65b0\u6a21\u5757\nnpm install --save moduleName // \u5b89\u88c5\u6a21\u5757\uff0c\u5e76\u5728package\u6587\u4ef6\u7684dependencies\u8282\u70b9\u5199\u5165\u4f9d\u8d56\nnpm install --save-dev moduleName // \u5b89\u88c5\u6a21\u5757\uff0c\u5e76\u5728package\u6587\u4ef6\u7684devDependencies\u8282\u70b9\u5199\u5165\u4f9d\u8d56\n\n/*4.\u53d1\u5e03\u6a21\u5757*/\nnpm init\nnpm login\nnpm search moduleName\nnpm publish\n//\u62a5\u9519put 400 bad request\n//\u9700\u5728package.json\u4e2d\u6dfb\u52a0publishConfig: {registry: \u53d1\u5e03\u5730\u5740}\nnpm unpublish // \u64a4\u9500\u53d1\u5e03\n\n/*5.scope\uff1a@somescope/somepackagename*/\nnpm install -g @vue/cli // scope\u662f\u4e00\u79cd\u628a\u76f8\u5173\u7684\u6a21\u5757\u7ec4\u7ec7\u5230\u4e00\u8d77\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4e5f\u4f1a\u5728\u67d0\u4e9b\u5730\u65b9\u5f71\u54cdnpm\u5bf9\u6a21\u5757\u7684\u5904\u7406\n\n/*6.\u7a0b\u5e8f\u5305\u94fe\u63a5\uff0c\u7528\u4e8e\u672c\u5730npm\u5305\u6d4b\u8bd5*/\n// \u5178\u4f8b\uff1a\u9879\u76eeproject\u8981\u4f7f\u7528common\u516c\u7528\u7ec4\u4ef6\u5305\uff0ccommon\u516c\u7528\u7ec4\u4ef6\u5305\u4e3a\u672c\u5730npm\u5305\u672a\u53d1\u5e03\u81f3npm\u4ed3\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528link\u547d\u4ee4\u6d4b\u8bd5\u3002\nnpm link moduleName // \u89e3\u6790\u6253\u5305\u6d4b\u8bd5\u547d\u4ee4\uff1anpm link\uff0c\u7a0b\u5e8f\u5305\u94fe\u63a5\uff0c\u7528\u4e8e\u672c\u5730npm\u5305\u6d4b\u8bd5\nnpm unlink\n\n/*7.\u5168\u5c40\u5305\u67e5\u770b*/\nnpm root -g // /usr/local/lib/node_modules\nnpm list -g // \u5168\u5c40\u5b89\u88c5\u7684\u5305\u67e5\u770b\n\n/*8.\u672c\u5730\u5305\u67e5\u770b*/\nnpm root // /Users/jian/workspace/vue-project-ssr/node_modules\nnpm list // \u5168\u5c40\u5b89\u88c5\u7684\u5305\u67e5\u770b\n\n/*9.\u6e05\u9664\u7f13\u5b58*/\nnpm cache clean --force\n\n/*10.\u6dfb\u52a0\u955c\u50cf*/\nnpm  config  set  registry  https://registry.npm.taobao.org",lang:"js"}),l.a.createElement("h2",{id:"2packagejson-\u89e3\u6790"},l.a.createElement(c["AnchorLink"],{to:"#2packagejson-\u89e3\u6790","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.package.json \u89e3\u6790"),l.a.createElement("h3",{id:"1name-\u548c-version"},l.a.createElement(c["AnchorLink"],{to:"#1name-\u548c-version","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09name \u548c version"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u540d\u79f0\u3001\u5305\u7684\u7248\u672c\u53f7\uff0c\u4e5f\u662f\u53d1\u5e03\u5230 NPM \u5e73\u53f0\u4e0a\u7684\u552f\u4e00\u6807\u8bc6")),l.a.createElement("h3",{id:"2description"},l.a.createElement(c["AnchorLink"],{to:"#2description","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09description"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c06\u4f1a\u5728",l.a.createElement("code",null,"npm search"),"\u7684\u8fd4\u56de\u7ed3\u679c\u4e2d\u663e\u793a\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u9009\u62e9\u5408\u9002\u7684\u5305")),l.a.createElement("h3",{id:"3keywords"},l.a.createElement(c["AnchorLink"],{to:"#3keywords","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09keywords"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u5173\u952e\u8bcd\u4fe1\u606f\uff0c\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u540c\u4e0a\u4e5f\u5c06\u663e\u793a\u5728",l.a.createElement("code",null,"npm search"),"\u7684\u7ed3\u679c\u4e2d")),l.a.createElement("h3",{id:"4homepage"},l.a.createElement(c["AnchorLink"],{to:"#4homepage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09homepage"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u4e3b\u9875\u5730\u5740")),l.a.createElement("h3",{id:"5bugs"},l.a.createElement(c["AnchorLink"],{to:"#5bugs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5\uff09bugs"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684 bug \u8ddf\u8e2a\u4e3b\u9875\u5730\u5740")),l.a.createElement("h3",{id:"6license"},l.a.createElement(c["AnchorLink"],{to:"#6license","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6\uff09license"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u5f00\u6e90\u534f\u8bae\u540d\u79f0")),l.a.createElement("h3",{id:"7author"},l.a.createElement(c["AnchorLink"],{to:"#7author","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7\uff09author"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u4e3b\u9875\u5730\u5740")),l.a.createElement("h3",{id:"8homepage"},l.a.createElement(c["AnchorLink"],{to:"#8homepage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"8\uff09homepage"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5305\u7684\u4e3b\u9875\u5730\u5740")),l.a.createElement("p",null,l.a.createElement("img",{src:a("DAMK"),alt:"image"})))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
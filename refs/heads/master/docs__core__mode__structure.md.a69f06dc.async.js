(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},rOoa:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("H1Ra");t("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u7ed3\u6784\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u7ed3\u6784\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ed3\u6784\u578b"),l.a.createElement("h2",{id:"1\u88c5\u9970\u5668\u6a21\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#1\u88c5\u9970\u5668\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u88c5\u9970\u5668\u6a21\u5f0f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u4e0d\u6539\u53d8\u539f\u5bf9\u8c61\u7684\u57fa\u7840\u4e0a\uff0c\u901a\u8fc7\u5bf9\u5176\u8fdb\u884c\u5305\u88c5\u62d3\u5c55\uff0c\u4f7f\u539f\u6709\u5bf9\u8c61\u53ef\u4ee5\u6ee1\u8db3\u7528\u6237\u7684\u66f4\u590d\u6742\u9700\u6c42")),l.a.createElement("li",null,l.a.createElement("p",null,"\u589e\u5f3a\u5df2\u6709\u6a21\u5757\uff0c\u52a8\u6001\u5c06\u8d23\u4efb\u9644\u52a0\u5230\u5bf9\u8c61\u4e0a"))),l.a.createElement("h3",{id:"1\u57fa\u672c\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#1\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u57fa\u672c\u7528\u6cd5"),l.a.createElement(c["a"],{code:"// \u8bbe\u5907\u5347\u7ea7\nclass Device {\n  create() {\n    console.log('PlayStation4');\n  }\n}\nclass Phone {\n  create() {\n    console.log('iphone18');\n  }\n}\n\n// \u88c5\u9970\u5668\u7c7b\uff1a\u589e\u52a0update\u529f\u80fd\nclass Decorator {\n  constructor(device) {\n    this.device = device;\n  }\n  create() {\n    this.device.create();\n    this.update(device);\n  }\n  update(device) {\n    console.log(device + 'pro');\n  }\n}\n\nconst device = new Device();\ndevice.create();\nconst newDevice = new Decorator(device);\nnewDevice.create();",lang:"js"}),l.a.createElement("h3",{id:"2es7-\u4e2d\u7684\u88c5\u9970\u5668-\u8bed\u6cd5\u7cd6"},l.a.createElement(r["AnchorLink"],{to:"#2es7-\u4e2d\u7684\u88c5\u9970\u5668-\u8bed\u6cd5\u7cd6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09ES7 \u4e2d\u7684\u88c5\u9970\u5668 @\u8bed\u6cd5\u7cd6"),l.a.createElement("p",null,l.a.createElement("strong",null,"1.\u5e2e\u52a9\u51fd\u6570\u4f20\u53c2&\u8c03\u7528")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u88c5\u9970\u5668\u8bed\u6cd5\u7cd6\u9996\u5148\u5e2e\u6211\u4eec",l.a.createElement("code",null,"\u505a\u6389\u7684\u5de5\u4f5c")," \u2014\u2014 ",l.a.createElement("code",null,"\u51fd\u6570\u4f20\u53c2&\u8c03\u7528"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u5728",l.a.createElement("code",null,"\u4f7f\u7528"),"\u7684\u65f6\u5019\u53ef\u4ee5",l.a.createElement("code",null,"\u7701\u7565"),"\u4f20\u53c2&\u8c03\u7528")),l.a.createElement("li",null,l.a.createElement("p",null,"1.\u653e\u5728\u88c5\u9970\u7c7b\u5916\u9762"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6b64\u5904\u7684 target \u5c31\u662f\u88ab\u88c5\u9970\u7684",l.a.createElement("code",null,"\u7c7b\u672c\u8eab")),l.a.createElement(c["a"],{code:"// \u653e\u5728\u88c5\u9970\u7c7b\u5916\u9762\nfunction classDecorator(target) {\n  target.hasDecorator = true;\n  return target;\n}\n\n// \u5c06\u88c5\u9970\u5668\u201c\u5b89\u88c5\u201d\u5230Button\u7c7b\u4e0a\n@classDecorator\nclass Button {\n  // Button\u7c7b\u7684\u76f8\u5173\u903b\u8f91\n}",lang:"js"})))),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u653e\u5728\u88c5\u9970\u7c7b\u91cc\u9762"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6b64\u5904\u7684 target \u53d8\u6210\u4e86 Button.prototype\uff0c\u5373",l.a.createElement("code",null,"\u7c7b\u7684\u539f\u578b\u5bf9\u8c61"),"\u3002\u8fd9\u662f\u56e0\u4e3a onClick \u65b9\u6cd5\u603b\u662f\u8981\u4f9d\u9644\u5176\u5b9e\u4f8b\u5b58\u5728\u7684\uff0c\u4fee\u9970 onClik \u5176\u5b9e\u662f\u4fee\u9970\u5b83\u7684\u5b9e\u4f8b\u3002\u4f46\u88c5\u9970\u5668\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019\uff0cButton \u5b9e\u4f8b\u8fd8\u5e76\u4e0d\u5b58\u5728\u3002\u4e3a\u4e86\u786e\u4fdd\u5b9e\u4f8b\u751f\u6210\u540e\u53ef\u4ee5\u987a\u5229\u8c03\u7528\u88ab\u88c5\u9970\u597d\u7684\u65b9\u6cd5\uff0c\u88c5\u9970\u5668\u53ea\u80fd\u53bb\u4fee\u9970 Button \u7c7b\u7684\u539f\u578b\u5bf9\u8c61"),l.a.createElement(c["a"],{code:"// \u653e\u5728\u88c5\u9970\u7c7b\u91cc\u9762\nfunction funcDecorator(target, name, descriptor) {\n  let originalMethod = descriptor.value;\n  descriptor.value = function () {\n    console.log('\u6211\u662fFunc\u7684\u88c5\u9970\u5668\u903b\u8f91');\n    return originalMethod.apply(this, arguments);\n  };\n  return descriptor;\n}\n\nclass Button {\n  @funcDecorator\n  onClick() {\n    console.log('\u6211\u662fFunc\u7684\u539f\u6709\u903b\u8f91');\n  }\n}",lang:"js"}))))),l.a.createElement("p",null,l.a.createElement("strong",null,"2.\u5c06\u201c\u5c5e\u6027\u63cf\u8ff0\u5bf9\u8c61\u201d\u4ea4\u5230\u4f60\u624b\u91cc")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7f16\u5199\u65b9\u6cd5\u88c5\u9970\u5668\u65f6\uff0c\u9700\u8981\u81f3\u5c11\u4e09\u4e2a\u53c2\u6570")),l.a.createElement(c["a"],{code:"function funcDecorator(target, name, descriptor) {\n  let originalMethod = descriptor.value;\n  descriptor.value = function () {\n    console.log('\u6211\u662fFunc\u7684\u88c5\u9970\u5668\u903b\u8f91');\n    return originalMethod.apply(this, arguments);\n  };\n  return descriptor;\n}",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u53c2\u6570"),l.a.createElement("th",{align:"left"},"\u542b\u4e49"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"target"),l.a.createElement("td",{align:"left"},"\u653e\u5728\u88c5\u9970\u7c7b\u5916\u9762\uff1a",l.a.createElement("code",null,"\u7c7b\u672c\u8eab"),"\uff1b \u653e\u5728\u88c5\u9970\u7c7b\u91cc\u9762\uff1a",l.a.createElement("code",null,"\u7c7b\u7684\u539f\u578b\u5bf9\u8c61"))),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"name"),l.a.createElement("td",{align:"left"},"\u4fee\u9970\u7684\u76ee\u6807\u5c5e\u6027\u5c5e\u6027\u540d")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"descriptor"),l.a.createElement("td",{align:"left"},"\u5c5e\u6027\u63cf\u8ff0\u5bf9\u8c61")))),l.a.createElement("ul",null,l.a.createElement("li",null,"\u63cf\u8ff0\u7b26\u5206\u4e3a\u6570\u636e\u63cf\u8ff0\u7b26\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"\u6570\u636e\u63cf\u8ff0\u7b26"),"\uff1a\u5305\u62ec ",l.a.createElement("code",null,"value"),"\uff08\u5b58\u653e\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u4e3a\u9ed8\u8ba4\u4e3a undefined\uff09\u3001",l.a.createElement("code",null,"writable"),"\uff08\u8868\u793a\u5c5e\u6027\u503c\u662f\u5426\u53ef\u6539\u53d8\uff0c\u9ed8\u8ba4\u4e3a true\uff09\u3001",l.a.createElement("code",null,"enumerable"),"\uff08\u8868\u793a\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\uff0c\u9ed8\u8ba4\u4e3a true\uff09\u3001",l.a.createElement("code",null,"configurable"),"\uff08\u5c5e\u6027\u662f\u5426\u53ef\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a true\uff09\u3002"),l.a.createElement("li",null,l.a.createElement("code",null,"\u5b58\u53d6\u63cf\u8ff0\u7b26"),"\uff1a\u5305\u62ec ",l.a.createElement("code",null,"get")," \u65b9\u6cd5\uff08\u8bbf\u95ee\u5c5e\u6027\u65f6\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u4e3a undefined\uff09\uff0c",l.a.createElement("code",null,"set"),"\uff08\u8bbe\u7f6e\u5c5e\u6027\u65f6\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u4e3a undefined \uff09")))),l.a.createElement("h3",{id:"3react-\u4e2d\u7684\u88c5\u9970\u5668hoc"},l.a.createElement(r["AnchorLink"],{to:"#3react-\u4e2d\u7684\u88c5\u9970\u5668hoc","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09React \u4e2d\u7684\u88c5\u9970\u5668\uff1aHOC"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9ad8\u9636\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e14\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6",l.a.createElement("ul",null,l.a.createElement("li",null,"\u901a\u8fc7\u7f16\u5199\u9ad8\u9636\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5145\u5206\u590d\u7528\u73b0\u6709\u903b\u8f91\uff0c\u63d0\u9ad8\u7f16\u7801\u6548\u7387\u548c\u4ee3\u7801\u7684\u5065\u58ee\u6027")))),l.a.createElement("p",null,l.a.createElement("strong",null,"1.\u7f16\u5199")),l.a.createElement(c["a"],{code:"import React, { Component } from 'react';\n\nconst BorderHoc = (WrappedComponent) =>\n  class extends Component {\n    render() {\n      return (\n        <div style={{ border: 'solid 1px red' }}>\n          <WrappedComponent />\n        </div>\n      );\n    }\n  };\nexport default borderHoc;",lang:"js"}),l.a.createElement("p",null,l.a.createElement("strong",null,"2.\u4f7f\u7528")),l.a.createElement(c["a"],{code:"import React, { Component } from 'react';\nimport BorderHoc from './BorderHoc';\n\n// \u7528BorderHoc\u88c5\u9970\u76ee\u6807\u7ec4\u4ef6\n@BorderHoc\nclass TargetComponent extends React.Component {\n  render() {\n    // \u76ee\u6807\u7ec4\u4ef6\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\n  }\n}\n\n// export\u51fa\u53bb\u7684\u5176\u5b9e\u662f\u4e00\u4e2a\u88ab\u5305\u88f9\u540e\u7684\u7ec4\u4ef6\nexport default TargetComponent;",lang:"js"}),l.a.createElement("h3",{id:"4redux-connect"},l.a.createElement(r["AnchorLink"],{to:"#4redux-connect","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09Redux connect"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"connect \u7684\u4e24\u4e2a\u5165\u53c2\uff1amapStateToProps \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u5efa\u7acb\u7ec4\u4ef6\u548c\u72b6\u6001\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\uff1bmapDispatchToProps \u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u7528\u4e8e\u5efa\u7acb\u7ec4\u4ef6\u548c store.dispatch \u7684\u5173\u7cfb\uff0c\u4f7f\u7ec4\u4ef6\u5177\u5907\u901a\u8fc7 dispatch \u6765\u6d3e\u53d1\u72b6\u6001\u7684\u80fd\u529b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u8c03\u7528 connect \u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u88c5\u9970\u4f5c\u7528\u7684\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u63a5\u6536\u4e00 \u4e2a React \u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f7f\u8fd9\u4e2a\u76ee\u6807\u7ec4\u4ef6\u548c Redux \u7ed3\u5408\u3001\u5177\u5907 Redux \u63d0\u4f9b\u7684\u6570\u636e\u548c\u80fd\u529b")),l.a.createElement("li",null,l.a.createElement("p",null,"connect \u662f\u4e00\u4e2a\u8fd4\u56de\u9ad8\u9636\u7ec4\u4ef6\u7684\u9ad8\u9636\u51fd\u6570"))),l.a.createElement("p",null,l.a.createElement("strong",null,"1.\u7f16\u5199")),l.a.createElement(c["a"],{code:"import { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\nimport action from './action.js';\n\nfunction mapStateToProps(state) {\n  return state.app;\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return bindActionCreators(action, dispatch);\n}\n\n// \u5c06connect\u8c03\u7528\u540e\u7684\u7ed3\u679c\u4f5c\u4e3a\u4e00\u4e2a\u88c5\u9970\u5668\u5bfc\u51fa\nexport default connect(mapStateToProps, mapDispatchToProps);",lang:"js"}),l.a.createElement("p",null,l.a.createElement("strong",null,"2.\u4f7f\u7528")),l.a.createElement(c["a"],{code:"import React, { Component } from 'react';\nimport connect from './connect.js';\n\n@connect\nexport default class App extends Component {\n  render() {\n    // App\u7684\u4e1a\u52a1\u903b\u8f91\n  }\n}",lang:"js"}),l.a.createElement("h2",{id:"2\u9002\u914d\u5668\u6a21\u5f0f-\u517c\u5bb9\u4ee3\u7801"},l.a.createElement(r["AnchorLink"],{to:"#2\u9002\u914d\u5668\u6a21\u5f0f-\u517c\u5bb9\u4ee3\u7801","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u9002\u914d\u5668\u6a21\u5f0f-\u517c\u5bb9\u4ee3\u7801"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u901a\u8fc7\u628a\u4e00\u4e2a\u7c7b\u7684\u63a5\u53e3\u53d8\u6362\u6210\u5ba2\u6237\u7aef\u6240\u671f\u5f85\u7684\u53e6\u4e00\u79cd\u63a5\u53e3\uff0c\u53ef\u4ee5\u5e2e\u6211\u4eec\u89e3\u51b3\u4e0d\u517c\u5bb9\u7684\u95ee\u9898")),l.a.createElement("li",null,l.a.createElement("p",null,"\u9002\u914d\u5df2\u6709\u6a21\u5757\uff0c\u4fdd\u8bc1\u6a21\u5757\u95f4\u7684\u72ec\u7acb\u89e3\u8026\u4e14\u8fde\u63a5\u517c\u5bb9")),l.a.createElement("li",null,l.a.createElement("p",null,"\u76f8\u5f53\u4e8e\u8033\u673a\u63a5\u53e3\u8f6c\u6362\u5668\uff08\u4e4b\u524d\u7684\u5706\u5b54\u8033\u673a\u8981\u8fde\u63a5\u65b0\u624b\u673a\u7684\u65b9\u5f62\u63a5\u53e3\uff09")),l.a.createElement("li",null,l.a.createElement("p",null,"\u4e4b\u524d\u66b4\u9732\u51fa\u7684\u63a5\u53e3\u4e0d\u53d8\uff0c\u5185\u90e8\u505a\u517c\u5bb9\u5904\u7406"))),l.a.createElement("h3",{id:"axios-\u4e2d\u7684\u9002\u914d\u5668"},l.a.createElement(r["AnchorLink"],{to:"#axios-\u4e2d\u7684\u9002\u914d\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"axios \u4e2d\u7684\u9002\u914d\u5668"),l.a.createElement("ul",null,l.a.createElement("li",null,"axios \u5b8c\u7f8e\u5730\u62b9\u5e73\u4e86\u6d4f\u89c8\u5668\u548c Node \u73af\u5883\u4e0b api \u7684\u8c03\u7528\u5dee\u5f02\uff0c\u9760\u7684\u6b63\u662f\u5bf9\u9002\u914d\u5668\u6a21\u5f0f\u7684\u7075\u6d3b\u8fd0\u7528")),l.a.createElement("p",null,l.a.createElement("strong",null,"1.\u4f7f\u7528")),l.a.createElement(c["a"],{code:"function getDefaultAdapter() {\n  var adapter;\n  // \u5224\u65ad\u5f53\u524d\u662f\u5426\u662fnode\u73af\u5883\n  if (\n    typeof process !== 'undefined' &&\n    Object.prototype.toString.call(process) === '[object process]'\n  ) {\n    // \u5982\u679c\u662fnode\u73af\u5883\uff0c\u8c03\u7528node\u4e13\u5c5e\u7684http\u9002\u914d\u5668\n    adapter = require('./adapters/http');\n  } else if (typeof XMLHttpRequest !== 'undefined') {\n    // \u5982\u679c\u662f\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u8c03\u7528\u57fa\u4e8exhr\u7684\u9002\u914d\u5668\n    adapter = require('./adapters/xhr');\n  }\n  return adapter;\n}",lang:"js"}),l.a.createElement("p",null,l.a.createElement("strong",null,"2.http \u9002\u914d\u5668")),l.a.createElement(c["a"],{code:"module.exports = function httpAdapter(config) {\n  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {\n    // \u5177\u4f53\u903b\u8f91\n  }\n}",lang:"js"}),l.a.createElement("p",null,l.a.createElement("strong",null,"2.xhr \u9002\u914d\u5668")),l.a.createElement(c["a"],{code:"module.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    // \u5177\u4f53\u903b\u8f91\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u4e24\u4e2a\u9002\u914d\u5668\u7684\u5165\u53c2\u90fd\u662f config\uff1b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u4e24\u4e2a\u9002\u914d\u5668\u7684\u51fa\u53c2\u90fd\u662f\u4e00\u4e2a Promise")),l.a.createElement("li",null,l.a.createElement("p",null,"\u628a\u53d8\u5316\u7559\u7ed9\u81ea\u5df1\uff0c\u628a\u7edf\u4e00\u7559\u7ed9\u7528\u6237"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u7edf\u4e00\u7684\u5165\u53c2\uff0c\u7edf\u4e00\u7684\u51fa\u53c2\uff0c\u7edf\u4e00\u7684\u89c4\u5219")))),l.a.createElement("h2",{id:"3\u4ee3\u7406\u6a21\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#3\u4ee3\u7406\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u4ee3\u7406\u6a21\u5f0f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u51fa\u4e8e\u79cd\u79cd\u8003\u8651/\u9650\u5236\uff0c\u4e00\u4e2a\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u53e6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u9700\u8981\u4e00\u4e2a\u7b2c\u4e09\u8005\uff08\u4ee3\u7406\uff09\u7275\u7ebf\u642d\u6865\u4ece\u800c\u95f4\u63a5\u8fbe\u5230\u8bbf\u95ee\u76ee\u7684\uff0c\u8fd9\u6837\u7684\u6a21\u5f0f\u5c31\u662f\u4ee3\u7406\u6a21\u5f0f\uff08\u4f8b\u5982\uff1aVPN\uff09")),l.a.createElement("li",null,l.a.createElement("p",null,"\u4f7f\u7528\u4ee3\u7406\u4eba\u6765\u66ff\u4ee3\u539f\u59cb\u5bf9\u8c61\uff0c\u96c6\u7ea6\u6d41\u7a0b")),l.a.createElement("li",null,l.a.createElement("p",null,"A \u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee B\uff0cA \u9700\u8981\u501f\u52a9\u4e00\u4e2a\u5e2e\u624b\u6765\u8bbf\u95ee B\uff0c\u8fd9\u4e2a\u5e2e\u624b\u5c31\u662f\u4ee3\u7406\u5668"),l.a.createElement("p",null,l.a.createElement("strong",null,"ES6 \u4e2d\u7684 Proxy")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"const proxy = new Proxy(obj, handler)")),l.a.createElement("ul",null,l.a.createElement("li",null,"obj\uff1a\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("li",null,"\u5f53\u6211\u4eec\u901a\u8fc7 proxy \u53bb\u8bbf\u95ee\u76ee\u6807\u5bf9\u8c61\u7684\u65f6\u5019\uff0chandler \u4f1a\u5bf9\u6211\u4eec\u7684\u884c\u4e3a\u4f5c\u4e00\u5c42\u62e6\u622a\uff0c\u6211\u4eec\u7684\u6bcf\u6b21\u8bbf\u95ee\u90fd\u9700\u8981\u7ecf\u8fc7 handler \u8fd9\u4e2a\u7b2c\u4e09\u65b9")))),l.a.createElement("h3",{id:"1\u4e8b\u4ef6\u4ee3\u7406"},l.a.createElement(r["AnchorLink"],{to:"#1\u4e8b\u4ef6\u4ee3\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u4e8b\u4ef6\u4ee3\u7406"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5229\u7528\u6d4f\u89c8\u5668",l.a.createElement("code",null,"\u4e8b\u4ef6\u5192\u6ce1\u673a\u5236"))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u70b9\u51fb\u6bcf\u4e2a a \u6807\u7b7e\uff0c\u90fd\u53ef\u4ee5\u5f39\u51fa\u201c\u6211\u662f xxx\u201d\u8fd9\u6837\u7684\u63d0\u793a")),l.a.createElement("ul",null,l.a.createElement("li",null,"html \u90e8\u5206")),l.a.createElement(c["a"],{code:'<div id="father">\n  <a href="#">\u94fe\u63a51\u53f7</a>\n  <a href="#">\u94fe\u63a52\u53f7</a>\n  <a href="#">\u94fe\u63a53\u53f7</a>\n  <a href="#">\u94fe\u63a54\u53f7</a>\n  <a href="#">\u94fe\u63a55\u53f7</a>\n  <a href="#">\u94fe\u63a56\u53f7</a>\n</div>',lang:"html"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"js \u90e8\u5206"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e0d\u4f7f\u7528\u4e8b\u4ef6\u4ee3\u7406")),l.a.createElement(c["a"],{code:"const aNodes = document.getElementById('father').getElementByTageName('a');\nfor (let i = 0; i < aNodes.length; i++) {\n  aNodes[i].addEventListener('click', function (e) {\n    e.preventDefault();\n    console.log(`\u6211\u662f${aNodes[i].innerText}`);\n  });\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528\u4e8b\u4ef6\u4ee3\u7406")),l.a.createElement(c["a"],{code:"const father = document.getElementById('father');\nfather.addEventListener('click', function (e) {\n  if (e.target.tagName === 'a') {\n    e.preventDefault();\n    console.log(`\u6211\u662f${e.target.innerText}`);\n  }\n});",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"\u70b9\u51fb\u64cd\u4f5c\u5e76\u4e0d\u4f1a\u76f4\u63a5\u89e6\u53ca\u76ee\u6807\u5b50\u5143\u7d20\uff0c\u800c\u662f\u7531\u7236\u5143\u7d20\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u5904\u7406\u548c\u5206\u53d1\u3001\u95f4\u63a5\u5730\u5c06\u5176\u4f5c\u7528\u4e8e\u5b50\u5143\u7d20\uff0c\u56e0\u6b64\u8fd9\u79cd\u64cd\u4f5c\u4ece\u6a21\u5f0f\u4e0a\u5212\u5206\u5c5e\u4e8e\u4ee3\u7406\u6a21\u5f0f"))),l.a.createElement("h3",{id:"2\u865a\u62df\u4ee3\u7406"},l.a.createElement(r["AnchorLink"],{to:"#2\u865a\u62df\u4ee3\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u865a\u62df\u4ee3\u7406"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u56fe\u7247\u9884\u52a0\u8f7d\u573a\u666f")),l.a.createElement(c["a"],{code:"class PreLoadImage {\n  constructor(imgNode) {\n    // \u83b7\u53d6\u771f\u5b9e\u7684DOM\u8282\u70b9\n    this.imgNode = imgNode;\n  }\n  // \u64cd\u4f5cimg\u8282\u70b9\u7684src\u5c5e\u6027\n  setSrc(imgUrl) {\n    this.imgNode.src = imgUrl;\n  }\n}\n\nclass ProxyImage {\n  // \u5360\u4f4d\u56fe\u7684url\u5730\u5740\n  static LOADING_URL = 'xxxxxx';\n  constructor(targetImage) {\n    // \u76ee\u6807Image\uff0c\u5373PreLoadImage\u5b9e\u4f8b\n    this.targetImage = targetImage;\n  }\n  // \u8be5\u65b9\u6cd5\u4e3b\u8981\u64cd\u4f5c\u865a\u62dfImage\uff0c\u5b8c\u6210\u52a0\u8f7d\n  setSrc(targetUrl) {\n    // \u771f\u5b9eimg\u8282\u70b9\u521d\u59cb\u5316\u65f6\u5c55\u793a\u7684\u662f\u4e00\u4e2a\u5360\u4f4d\u56fe\n    this.targetImage.setSrc(ProxyImage.LOADING_URL);\n    // \u521b\u5efa\u4e00\u4e2a\u5e2e\u6211\u4eec\u52a0\u8f7d\u56fe\u7247\u7684\u865a\u62dfImage\u5b9e\u4f8b\n    const virtualImage = new Image();\n    // \u76d1\u542c\u76ee\u6807\u56fe\u7247\u52a0\u8f7d\u7684\u60c5\u51b5\uff0c\u5b8c\u6210\u65f6\u518d\u5c06DOM\u4e0a\u7684\u771f\u5b9eimg\u8282\u70b9\u7684src\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u76ee\u6807\u56fe\u7247\u7684url\n    virtualImage.onload = () => {\n      this.targetImage.setSrc(targetUrl);\n    };\n    // \u8bbe\u7f6esrc\u5c5e\u6027\uff0c\u865a\u62dfImage\u5b9e\u4f8b\u5f00\u59cb\u52a0\u8f7d\u56fe\u7247\n    virtualImage.src = targetUrl;\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"ProxyImage \u8c03\u5ea6\u4e86\u9884\u52a0\u8f7d\u76f8\u5173\u7684\u5de5\u4f5c\uff0c\u53ef\u4ee5\u901a\u8fc7 ProxyImage \u8fd9\u4e2a\u4ee3\u7406\uff0c\u5b9e\u73b0\u5bf9\u771f\u5b9e img \u8282\u70b9\u7684\u95f4\u63a5\u8bbf\u95ee\uff0c\u5e76\u5f97\u5230\u60f3\u8981\u7684\u6548\u679c\u3002")),l.a.createElement("p",null,"\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e2d\uff0cvirtualImage \u8fd9\u4e2a\u5bf9\u8c61\u662f\u4e00\u4e2a\u201c\u5e55\u540e\u82f1\u96c4\u201d\uff0c\u5b83\u59cb\u7ec8\u5b58\u5728\u4e8e JavaScript \u4e16\u754c\u4e2d\u3001\u4ee3\u66ff\u771f\u5b9e DOM \u53d1\u8d77\u4e86\u56fe\u7247\u52a0\u8f7d\u8bf7\u6c42\u3001\u5b8c\u6210\u4e86\u56fe\u7247\u52a0\u8f7d\u5de5\u4f5c\uff0c\u5374\u4ece\u672a\u5728\u6e32\u67d3\u5c42\u9762\u629b\u5934\u9732\u9762\u3002\u56e0\u6b64\u8fd9\u79cd\u6a21\u5f0f\u88ab\u79f0\u4e3a\u201c\u865a\u62df\u4ee3\u7406\u201d\u6a21\u5f0f"),l.a.createElement("h3",{id:"3\u7f13\u5b58\u4ee3\u7406"},l.a.createElement(r["AnchorLink"],{to:"#3\u7f13\u5b58\u4ee3\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u7f13\u5b58\u4ee3\u7406"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u7528\u7a7a\u95f4\u6362\u65f6\u95f4"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u7528\u5230\u67d0\u4e2a\u5df2\u7ecf\u8ba1\u7b97\u8fc7\u7684\u503c\u7684\u65f6\u5019\uff0c\u4e0d\u60f3\u518d\u8017\u65f6\u8fdb\u884c\u4e8c\u6b21\u8ba1\u7b97\uff0c\u800c\u662f\u5e0c\u671b\u80fd\u4ece\u5185\u5b58\u91cc\u53bb\u53d6\u51fa\u73b0\u6210\u7684\u8ba1\u7b97\u7ed3\u679c\u3002\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u5c31\u9700\u8981\u4e00\u4e2a\u4ee3\u7406\u6765\u5e2e\u6211\u4eec\u5728\u8fdb\u884c\u8ba1\u7b97\u7684\u540c\u65f6\uff0c\u8fdb\u884c\u8ba1\u7b97\u7ed3\u679c\u7684\u7f13\u5b58\u4e86")),l.a.createElement("li",null,l.a.createElement("p",null,"vue \u4e2d\u7684 ",l.a.createElement("code",null,"computed"),"\u3001react \u4e2d\u7684 ",l.a.createElement("code",null,"memo"))))),l.a.createElement("li",null,l.a.createElement("p",null,"\u4e0d\u4f7f\u7528\u7f13\u5b58\u4ee3\u7406\uff08\u6bcf\u6b21\u90fd\u4f1a\u8ba1\u7b97\uff09"),l.a.createElement(c["a"],{code:"// addAll\u65b9\u6cd5\u4f1a\u5bf9\u4f60\u4f20\u5165\u7684\u6240\u6709\u53c2\u6570\u505a\u6c42\u548c\u64cd\u4f5c\nconst addAll = function () {\n  console.log('\u8fdb\u884c\u4e86\u4e00\u6b21\u65b0\u8ba1\u7b97');\n  let result = 0;\n  const len = arguments.length;\n  for (let i = 0; i < len; i++) {\n    result += arguments[i];\n  }\n  return result;\n};",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"\u4f7f\u7528\u7f13\u5b58\u4ee3\u7406"),l.a.createElement(c["a"],{code:"// \u4e3a\u6c42\u548c\u65b9\u6cd5\u521b\u5efa\u4ee3\u7406\nconst proxyAddAll = (function () {\n  // \u6c42\u548c\u7ed3\u679c\u7684\u7f13\u5b58\u6c60\n  const resultCache = {};\n  return function () {\n    // \u5c06\u5165\u53c2\u8f6c\u5316\u4e3a\u4e00\u4e2a\u552f\u4e00\u7684\u5165\u53c2\u5b57\u7b26\u4e32\n    const args = Array.prototype.join.call(arguments, ',');\n\n    // \u68c0\u67e5\u672c\u6b21\u5165\u53c2\u662f\u5426\u6709\u5bf9\u5e94\u7684\u8ba1\u7b97\u7ed3\u679c\n    if (args in resultCache) {\n      // \u5982\u679c\u6709\uff0c\u5219\u8fd4\u56de\u7f13\u5b58\u6c60\u91cc\u73b0\u6210\u7684\u7ed3\u679c\n      return resultCache[args];\n    }\n    return (resultCache[args] = addAll(...arguments));\n  };\n})();",lang:"js"}))),l.a.createElement("h3",{id:"4\u4fdd\u62a4\u4ee3\u7406"},l.a.createElement(r["AnchorLink"],{to:"#4\u4fdd\u62a4\u4ee3\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u4fdd\u62a4\u4ee3\u7406"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u8bbf\u95ee\u5c42\u9762\u505a\u6587\u7ae0\uff0c\u5728 getter \u548c setter \u51fd\u6570\u91cc\u53bb\u8fdb\u884c\u6821\u9a8c\u548c\u62e6\u622a\uff0c\u786e\u4fdd\u4e00\u90e8\u5206\u53d8\u91cf\u662f\u5b89\u5168\u7684")))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[146],{IwzA:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5c0f\u7a0b\u5e8f\u573a\u666f"},l.a.createElement(c["AnchorLink"],{to:"#\u5c0f\u7a0b\u5e8f\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c0f\u7a0b\u5e8f\u573a\u666f"),l.a.createElement("h2",{id:"1\u83b7\u53d6-openid--unionid"},l.a.createElement(c["AnchorLink"],{to:"#1\u83b7\u53d6-openid--unionid","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u83b7\u53d6 openid / unionid"),l.a.createElement("h3",{id:"1wxlogin"},l.a.createElement(c["AnchorLink"],{to:"#1wxlogin","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09wx.login"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5ba2\u6237\u7aef\u8c03\u7528"))),l.a.createElement(r["a"],{code:"wx.login({\n  success: async ({ code }) => {\n    console.log('wx.login', code);\n    // \u53d1\u9001 res.code \u5230\u540e\u53f0\u6362\u53d6 openId, sessionKey, unionId\n    const { data } = await services.getOpenId({\n      data: { code },\n      preloader: true,\n    });\n    const { unionid, session_key, openid } = data;\n  },\n});",lang:"js"}),l.a.createElement("h3",{id:"2\u901a\u8fc7-code-\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f"},l.a.createElement(c["AnchorLink"],{to:"#2\u901a\u8fc7-code-\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u901a\u8fc7 code \u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u670d\u52a1\u7aef\u83b7\u53d6")),l.a.createElement("li",null,l.a.createElement("p",null,"openid\uff1a\u7528\u6237\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u7684\u552f\u4e00\u6807\u8bc6")),l.a.createElement("li",null,l.a.createElement("p",null,"session_key\uff1a\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5")),l.a.createElement("li",null,l.a.createElement("p",null,"unionid\uff1a\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0\u5e10\u53f7\u4e0b\u7684\u552f\u4e00\u6807\u8bc6"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9700\u8981\u5c06\u5f53\u524d\u5c0f\u7a0b\u5e8f\u7ed1\u5b9a\u5230\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0")))),l.a.createElement(r["a"],{code:"const wechatConfig = {\n  appid: 'xxx', // \u5c0f\u7a0b\u5e8f appId\n  secret: 'xxx', // \u5c0f\u7a0b\u5e8f appSecret\n};\n\nconst { code } = ctx.request.body;\nconst { data } = await axios.get(\n  'https://api.weixin.qq.com/sns/jscode2session',\n  {\n    params: {\n      appid: wechatConfig.appid,\n      secret: wechatConfig.secret,\n      js_code: code,\n      grant_type: 'authorization_code',\n    },\n  },\n);",lang:"js"}),l.a.createElement("h2",{id:"2\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},l.a.createElement(c["AnchorLink"],{to:"#2\u83b7\u53d6\u7528\u6237\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"wx.getUserProfile\uff1a\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u9875\u9762\u4ea7\u751f\u70b9\u51fb\u4e8b\u4ef6\uff08\u4f8b\u5982 button \u4e0a bindtap \u7684\u56de\u8c03\u4e2d\uff09\u540e\u624d\u53ef\u8c03\u7528")),l.a.createElement("li",null,l.a.createElement("p",null,"\u8be5\u63a5\u53e3\u7528\u4e8e\u66ff\u6362 wx.getUserInfo"))),l.a.createElement(r["a"],{code:"wx.getUserProfile({\n  desc: '\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u8d44\u6599', // \u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u540e\u7eed\u4f1a\u5c55\u793a\u5728\u5f39\u7a97\u4e2d\uff0c\u8bf7\u8c28\u614e\u586b\u5199\n  success: (res) => {\n    console.log('getUserProfile', res.userInfo);\n  },\n  fail: (err) => {\n    console.log('getUserProfile\u5931\u8d25', err);\n  },\n});",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u53c2\u6570"),l.a.createElement("th",{align:"left"},"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"nickName"),l.a.createElement("td",{align:"left"},"\u7528\u6237\u6635\u79f0")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"avatarUrl"),l.a.createElement("td",{align:"left"},"\u7528\u6237\u5934\u50cf\u56fe\u7247\u7684 URL")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"language"),l.a.createElement("td",{align:"left"},"\u663e\u793a country\uff0cprovince\uff0ccity \u6240\u7528\u7684\u8bed\u8a00")))),l.a.createElement("h2",{id:"3\u83b7\u53d6\u624b\u673a\u53f7"},l.a.createElement(c["AnchorLink"],{to:"#3\u83b7\u53d6\u624b\u673a\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u83b7\u53d6\u624b\u673a\u53f7"),l.a.createElement("h3",{id:"1wxml-\u90e8\u5206"},l.a.createElement(c["AnchorLink"],{to:"#1wxml-\u90e8\u5206","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09wxml \u90e8\u5206"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"button")," \u7684 ",l.a.createElement("code",null,"open-type")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l.a.createElement("code",null,"getPhoneNumber"))),l.a.createElement("h3",{id:"2\u5c0f\u7a0b\u5e8f-js-\u90e8\u5206"},l.a.createElement(c["AnchorLink"],{to:"#2\u5c0f\u7a0b\u5e8f-js-\u90e8\u5206","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u5c0f\u7a0b\u5e8f js \u90e8\u5206"),l.a.createElement(r["a"],{code:"function getPhone(e) {\n  const { encryptedData, iv } = e.detail;\n  if (!encryptedData) {\n    return openTip('\u83b7\u53d6\u624b\u673a\u53f7\u5931\u8d25');\n  };\n},",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5c06 encryptedData, iv \u4ee5\u53ca wx.login \u6362\u53d6\u7684 session_key \u53d1\u9001\u7ed9\u670d\u52a1\u7aef")),l.a.createElement("h3",{id:"3\u670d\u52a1\u7aef\u5904\u7406"},l.a.createElement(c["AnchorLink"],{to:"#3\u670d\u52a1\u7aef\u5904\u7406","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u670d\u52a1\u7aef\u5904\u7406"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u901a\u8fc7 appid\u3001session_key\u3001encryptedData\u3001iv \u89e3\u5bc6")),l.a.createElement(r["a"],{code:"const WXBizDataCrypt = require('../tools/WXBizDataCrypt');\n\nasync function getPhoneNumber(ctx) {\n  try {\n    const { session_key, encryptedData, iv } = ctx.request.body;\n    const pc = new WXBizDataCrypt(appid, session_key);\n    const data = pc.decryptData(encryptedData, iv);\n    ctx.state.code = 0;\n    ctx.state.data = data; // phoneNumber\n  } catch (err) {\n    ctx.state.code = -1;\n    throw new Error(err);\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"WXBizDataCrypt.js")),l.a.createElement(r["a"],{code:"var crypto = require('crypto');\n\nfunction WXBizDataCrypt(appId, sessionKey) {\n  this.appId = appId;\n  this.sessionKey = sessionKey;\n}\n\nWXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {\n  // base64 decode\n  var sessionKey = new Buffer(this.sessionKey, 'base64');\n  encryptedData = new Buffer(encryptedData, 'base64');\n  iv = new Buffer(iv, 'base64');\n\n  try {\n    // \u89e3\u5bc6\n    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);\n    // \u8bbe\u7f6e\u81ea\u52a8 padding \u4e3a true\uff0c\u5220\u9664\u586b\u5145\u8865\u4f4d\n    decipher.setAutoPadding(true);\n    var decoded = decipher.update(encryptedData, 'binary', 'utf8');\n    decoded += decipher.final('utf8');\n\n    decoded = JSON.parse(decoded);\n  } catch (err) {\n    throw new Error('\u767b\u5f55\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6');\n  }\n\n  if (decoded.watermark.appid !== this.appId) {\n    throw new Error('Illegal Buffer');\n  }\n\n  return decoded;\n};\n\nmodule.exports = WXBizDataCrypt;",lang:"js"}),l.a.createElement("h2",{id:"4\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1"},l.a.createElement(c["AnchorLink"],{to:"#4\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"auth.getAccessToken\uff1a\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00\u540e\u53f0\u63a5\u53e3\u8c03\u7528\u51ed\u636e\uff08access_token\uff09")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5185\u5bb9\u5b89\u5168\u6821\u9a8c\uff1a\u6587\u5b57\u3001\u56fe\u7247\uff0c\u9700\u643a\u5e26 access_token")),l.a.createElement("li",null,l.a.createElement("p",null,"\u9700\u8981\u5b58\u50a8\u5728\u670d\u52a1\u7aef\uff0c\u8fc7\u671f\u65f6\u5e38\uff1a2h"))),l.a.createElement(r["a"],{code:"const { data } = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {\n  params: {\n    grant_type: 'client_credential',\n    appid,\n    secret,\n  },\n  timeout: 40 * 1000,\n});\nconsole.log('getAccessToken', data);\nif (data.errmsg) {\n  throw 'err';\n}\n// \u5199\u5165\u6587\u4ef6\nawait wirteFileFun('/file/access_token.txt', data.access_token);\n\nfunction wirteFileFun(filePath, result) {\n  return new Promise((resolve, reject) => {\n    fs.writeFile(filePath, result, 'binary', async (err) => {\n      if (err) {\n        reject(err);\n      } else {\n        console.log('\u751f\u6210\u6210\u529f\uff01');\n        resolve();\n      }\n    });\n  });\n}",lang:"js"}),l.a.createElement("h2",{id:"5\u5185\u5bb9\u5b89\u5168"},l.a.createElement(c["AnchorLink"],{to:"#5\u5185\u5bb9\u5b89\u5168","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.\u5185\u5bb9\u5b89\u5168"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5355\u4e2a appId \u8c03\u7528\u4e0a\u9650\u4e3a 2000 \u6b21/\u5206\u949f\uff0c200,000 \u6b21/\u5929")),l.a.createElement("li",null,l.a.createElement("p",null,"\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u4e0d\u8d85\u8fc7 10M"))),l.a.createElement("h3",{id:"1\u6587\u672c\u5b89\u5168"},l.a.createElement(c["AnchorLink"],{to:"#1\u6587\u672c\u5b89\u5168","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u6587\u672c\u5b89\u5168"),l.a.createElement(r["a"],{code:"// \u6821\u9a8c\u6587\u672c\u5b89\u5168\nfunction msgSecCheck(content, name) {\n  return new Promise(async (resolve, reject) => {\n    try {\n      const access_token = await readAccessToken();\n      const { data } = await axios.post(\n        `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${access_token}`,\n        { content },\n      );\n      console.log('msgSecCheck res', data);\n      if (data.errcode === 0) {\n        return resolve();\n      }\n      if (data.errcode === 87014) {\n        return reject(`${name}\u542b\u6709\u654f\u611f\u8bcd\u6c47`);\n      }\n      reject(data.errmsg);\n    } catch (err) {\n      console.log('msgSecCheck err', err);\n      reject(err);\n    }\n  });\n}",lang:"js"}),l.a.createElement("h3",{id:"2\u56fe\u7247\u5b89\u5168"},l.a.createElement(c["AnchorLink"],{to:"#2\u56fe\u7247\u5b89\u5168","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u56fe\u7247\u5b89\u5168"),l.a.createElement(r["a"],{code:"// \u6821\u9a8c\u56fe\u7247\u5b89\u5168\nfunction imgSecCheck(media) {\n  return new Promise(async (resolve, reject) => {\n    try {\n      const access_token = await readAccessToken();\n      const form = {\n        media: fs.createReadStream(media),\n      };\n      const data = await httpForm(\n        `https://api.weixin.qq.com/wxa/img_sec_check?access_token=${access_token}`,\n        form,\n      );\n      console.log('data', data);\n      console.log('imgSecCheck res', data);\n      if (data.errcode === 0) {\n        return resolve();\n      }\n      if (data.errcode === 87014) {\n        return reject('\u56fe\u7247\u542b\u6709\u8fdd\u6cd5\u8fdd\u89c4\u5185\u5bb9');\n      }\n      reject(data.errmsg);\n    } catch (err) {\n      console.log('imgSecCheck err', err);\n      reject(err);\n    }\n  });\n}",lang:"js"}),l.a.createElement("h2",{id:"6\u5904\u7406\u56fe\u7247"},l.a.createElement(c["AnchorLink"],{to:"#6\u5904\u7406\u56fe\u7247","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.\u5904\u7406\u56fe\u7247"),l.a.createElement("h3",{id:"1\u56fe\u7247\u9009\u62e9\u65f6\u8fdb\u884c\u56fe\u7247\u5b89\u5168\u6821\u9a8c"},l.a.createElement(c["AnchorLink"],{to:"#1\u56fe\u7247\u9009\u62e9\u65f6\u8fdb\u884c\u56fe\u7247\u5b89\u5168\u6821\u9a8c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u56fe\u7247\u9009\u62e9\u65f6\u8fdb\u884c\u56fe\u7247\u5b89\u5168\u6821\u9a8c"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6821\u9a8c\u56fe\u7247\u662f\u5426\u8fdd\u6cd5\u8fdd\u89c4")),l.a.createElement("h3",{id:"2\u56fe\u7247\u9009\u62e9\u540e\u5c06\u56fe\u7247\u8def\u5f84\u4fe1\u606f\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d"},l.a.createElement(c["AnchorLink"],{to:"#2\u56fe\u7247\u9009\u62e9\u540e\u5c06\u56fe\u7247\u8def\u5f84\u4fe1\u606f\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u56fe\u7247\u9009\u62e9\u540e\uff0c\u5c06\u56fe\u7247\u8def\u5f84\u4fe1\u606f\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9632\u6b62\u7528\u6237\u610f\u5916\u9000\u51fa\u9875\u9762\uff0c\u56fe\u7247\u91cd\u65b0\u9009\u62e9")),l.a.createElement("h3",{id:"3\u56fe\u7247\u4e0a\u4f20\u8fdb\u5165\u5ba1\u6838"},l.a.createElement(c["AnchorLink"],{to:"#3\u56fe\u7247\u4e0a\u4f20\u8fdb\u5165\u5ba1\u6838","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u56fe\u7247\u4e0a\u4f20\u8fdb\u5165\u5ba1\u6838"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6e05\u9664\u672c\u5730\u56fe\u7247\u7f13\u5b58")),l.a.createElement("li",null,l.a.createElement("p",null,"\u65b0\u589e\u7684\u56fe\u7247\u76f4\u63a5\u5b58\u50a8\u5728 review \u76ee\u5f55\u4e0b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u4e4b\u524d\u7684\u56fe\u7247\uff0c\u4e0d\u505a\u5904\u7406\uff0c\u53ea\u628a\u56fe\u7247\u8def\u5f84\u653e\u5728\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u524d\u63d0\u662f\u5546\u54c1\u5728\u5ba1\u6838\u671f\uff0c\u4e0d\u80fd\u518d\u8fdb\u884c\u5546\u54c1\u4fee\u6539\u64cd\u4f5c\uff0c\u9632\u6b62\u7528\u6237\u5220\u9664\u539f\u56fe\u7247\uff0c\u5bfc\u81f4\u5728\u5ba1\u6838\u5217\u8868\u4e2d\u4e0d\u80fd\u8fdb\u884c\u9884\u89c8")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u5ba1\u6838\u671f\u53ef\u4ee5\u8fdb\u884c\u64a4\u9500\u5ba1\u6838\uff0c\u64a4\u9500\u5ba1\u6838\u540e\uff0c\u53ef\u4ee5\u518d\u6b21\u8fdb\u884c\u4fee\u6539"))))),l.a.createElement("h3",{id:"4\u56fe\u7247\u5ba1\u6838\u901a\u8fc7"},l.a.createElement(c["AnchorLink"],{to:"#4\u56fe\u7247\u5ba1\u6838\u901a\u8fc7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u56fe\u7247\u5ba1\u6838\u901a\u8fc7"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5c06\u5ba1\u6838\u901a\u8fc7\u7684\u56fe\u7247 copy \u5230\u5546\u54c1\u76ee\u5f55\u4e0b")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5bf9\u6bd4\u539f\u56fe\u7247\u5217\u8868\u548c\u5ba1\u6838\u901a\u8fc7\u540e\u7684\u56fe\u7247\u5217\u8868"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5982\u679c\u5ba1\u6838\u901a\u8fc7\u540e\u7684\u56fe\u7247\u4e2d\u6709\u539f\u56fe\u7247\u5217\u8868\u4e2d\u7684\u56fe\u7247\uff0c\u4fdd\u6301\u4e0d\u53d8")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5ba1\u6838\u901a\u8fc7\u540e\u7684\u56fe\u7247\u662f\u65b0\u589e\u7684\uff0c\u76f4\u63a5 copy \u8fdb\u76ee\u5f55")),l.a.createElement("li",null,l.a.createElement("p",null,"\u539f\u56fe\u7247\u5728\u5ba1\u6838\u901a\u8fc7\u540e\u7684\u5217\u8868\u4e2d\u627e\u4e0d\u5230\uff0c\u5220\u9664\u539f\u56fe\u7247"))))))))},JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
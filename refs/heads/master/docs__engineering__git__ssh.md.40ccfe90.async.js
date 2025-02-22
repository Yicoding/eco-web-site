(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{JjdP:function(e,a,t){"use strict";t.r(a),a["default"]={}},W9b9:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("dEAq"),i=t("H1Ra");t("JjdP");a["default"]=e=>(l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"ssh-keys"},l.a.createElement(c["AnchorLink"],{to:"#ssh-keys","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"SSH keys"),l.a.createElement("h2",{id:"1\u751f\u6210\u65b0\u7684-ssh-keys"},l.a.createElement(c["AnchorLink"],{to:"#1\u751f\u6210\u65b0\u7684-ssh-keys","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u751f\u6210\u65b0\u7684 SSH keys"),l.a.createElement("h3",{id:"1github-\u7684\u94a5\u5319"},l.a.createElement(c["AnchorLink"],{to:"#1github-\u7684\u94a5\u5319","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09GitHub \u7684\u94a5\u5319"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\uff0c\u65b9\u4fbf\u540e\u9762\u64cd\u505a\uff1a~/.ssh/id_rsa.github")),l.a.createElement(i["a"],{code:'ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "abc@qq.com"',lang:"shell"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u76f4\u63a5\u56de\u8f66 3 \u4e0b\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u8981\u8f93\u5165\uff0c\u5c31\u662f\u9ed8\u8ba4\u6ca1\u6709\u5bc6\u7801")),l.a.createElement("h3",{id:"2gitlab-\u7684\u94a5\u5319"},l.a.createElement(c["AnchorLink"],{to:"#2gitlab-\u7684\u94a5\u5319","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09GitLab \u7684\u94a5\u5319"),l.a.createElement(i["a"],{code:'ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "abcdef@qq.com"',lang:"shell"}),l.a.createElement("h2",{id:"2github-\u548c-gitlab-\u540c\u65f6\u4f7f\u7528-ssh-keys"},l.a.createElement(c["AnchorLink"],{to:"#2github-\u548c-gitlab-\u540c\u65f6\u4f7f\u7528-ssh-keys","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.github \u548c gitlab \u540c\u65f6\u4f7f\u7528 SSH keys"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u591a\u5e10\u53f7\u5fc5\u987b\u914d\u7f6e config \u6587\u4ef6(\u91cd\u70b9)\uff0c\u82e5\u65e0 config \u6587\u4ef6\uff0c\u5219\u9700\u5efa\u7acb config \u6587\u4ef6")),l.a.createElement("h3",{id:"1\u521b\u5efa-config-\u6587\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#1\u521b\u5efa-config-\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u521b\u5efa config \u6587\u4ef6"),l.a.createElement(i["a"],{code:"touch ~/.ssh/config",lang:"shell"}),l.a.createElement("h3",{id:"2\u914d\u7f6e-config"},l.a.createElement(c["AnchorLink"],{to:"#2\u914d\u7f6e-config","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u914d\u7f6e config"),l.a.createElement(i["a"],{code:"Host gitlab\n\tHostkeyAlgorithms +ssh-rsa\n\tPubkeyAcceptedAlgorithms +ssh-rsa\n\tHostName \u516c\u53f8\u7684\u4ee3\u7801\u4ed3\u5e93\u670d\u52a1\u5668\u5730\u5740(gitlab.xxx.com)\n\tUser git\n\tIdentityFile ~/.ssh/id_rsa.gitlab\nHost github.com\n\tHostkeyAlgorithms +ssh-rsa\n\tPubkeyAcceptedAlgorithms +ssh-rsa\n\tHostName github.com\n\tUser git\n\tIdentityFile ~/.ssh/id_rsa.github",lang:"unknown"}),l.a.createElement("p",null,"\u6ce8\u610f\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"\u516c\u53f8\u7684\u4ee3\u7801\u4ed3\u5e93\u670d\u52a1\u5668\u5730\u5740(gitlab.xxx.com)")," \u8fd9\u4e2a\u5730\u65b9\u9700\u8981\u66ff\u6362\u6210 ",l.a.createElement("code",null,"gitlab.xxx.com"))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"macOS")," \u5347 ",l.a.createElement("code",null,"Ventura")," \u540e\u65e0\u6cd5\u4f7f\u7528 ",l.a.createElement("code",null,"git ssh"),", ",l.a.createElement("code",null,"openssh")," \u4e0d\u518d\u652f\u6301 ",l.a.createElement("code",null,"ssh-rsa")," \u7b97\u6cd5")),l.a.createElement("li",null,l.a.createElement("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u6dfb\u52a0"))),l.a.createElement(i["a"],{code:"HostkeyAlgorithms +ssh-rsa\nPubkeyAcceptedAlgorithms +ssh-rsa",lang:"unknown"}),l.a.createElement("h2",{id:"3\u6dfb\u52a0-ssh-\u516c\u94a5"},l.a.createElement(c["AnchorLink"],{to:"#3\u6dfb\u52a0-ssh-\u516c\u94a5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u6dfb\u52a0 SSH \u516c\u94a5"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u767b\u9646 Github")),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u70b9\u51fb\u53f3\u4e0a\u65b9\u7684\u5934\u50cf\uff0c\u70b9\u51fb settings")),l.a.createElement("li",null,l.a.createElement("p",null,"3.\u9009\u62e9 SSH key")),l.a.createElement("li",null,l.a.createElement("p",null,"4.\u70b9\u51fb Add SSH key")),l.a.createElement("li",null,l.a.createElement("p",null,"5.\u5728\u51fa\u73b0\u7684\u754c\u9762\u4e2d\u586b\u5199 SSH key \u7684\u540d\u79f0\uff0c\u586b\u4e00\u4e2a\u4f60\u672c\u8eab\u559c\u6b22\u7684\u540d\u79f0\u4fbf\u53ef")),l.a.createElement("li",null,l.a.createElement("p",null,"6.\u5c06\u4e0a\u9762\u62f7\u8d1d\u7684~/.ssh/id_rsa.xxx.pub \u6587\u4ef6\u5185\u5bb9\u7c98\u5e16\u5230 key \u4e00\u680f\uff0c\u5728\u70b9\u51fb \u201cadd key\u201d \u6309\u94ae\u5c31\u53ef\u4ee5\u4e86"))),l.a.createElement("h2",{id:"4\u6d4b\u8bd5\u662f\u5426\u94fe\u63a5\u6210\u529f"},l.a.createElement(c["AnchorLink"],{to:"#4\u6d4b\u8bd5\u662f\u5426\u94fe\u63a5\u6210\u529f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.\u6d4b\u8bd5\u662f\u5426\u94fe\u63a5\u6210\u529f"),l.a.createElement(i["a"],{code:"ssh -T git@github.com\nssh -T git@gitlab.com",lang:"shell"}),l.a.createElement("h2",{id:"5\u591a-git-\u8d26\u6237\u7684\u672c\u5730\u914d\u7f6e\u4e0e\u4f7f\u7528"},l.a.createElement(c["AnchorLink"],{to:"#5\u591a-git-\u8d26\u6237\u7684\u672c\u5730\u914d\u7f6e\u4e0e\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.\u591a Git \u8d26\u6237\u7684\u672c\u5730\u914d\u7f6e\u4e0e\u4f7f\u7528"),l.a.createElement("p",null,"\u6709\u65f6\u5019\u4e0d\u540c\u7684 Git \u9879\u76ee\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u8d26\u6237\u3002\u5728\u672c\u5730\u7684 Git \u4ed3\u5e93\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",l.a.createElement("code",null,"user.name")," \u548c ",l.a.createElement("code",null,"user.email")," \u6765\u6307\u5b9a\u4f7f\u7528\u7684\u8d26\u6237\u3002"),l.a.createElement("p",null,"\u4e3a\u5355\u4e2a\u9879\u76ee\u8bbe\u7f6e\u7279\u5b9a\u7684\u8d26\u6237\uff1a \u8fdb\u5165\u4f60\u7684\u4ed3\u5e93\u6839\u76ee\u5f55\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),l.a.createElement(i["a"],{code:'git config user.name "Your Name"\ngit config user.email "your_email@example.com"',lang:"bash"}),l.a.createElement("p",null,"\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u751f\u6548\uff1a"),l.a.createElement(i["a"],{code:"git config user.name\ngit config user.email",lang:"bash"}))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
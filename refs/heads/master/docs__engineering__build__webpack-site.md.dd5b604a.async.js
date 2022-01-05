(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},"v+BO":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"webpack-\u4ece-0-\u642d\u5efa"},l.a.createElement(c["AnchorLink"],{to:"#webpack-\u4ece-0-\u642d\u5efa","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"webpack \u4ece 0 \u642d\u5efa"),l.a.createElement("h2",{id:"1\u521d\u59cb\u5316\u76ee\u5f55"},l.a.createElement(c["AnchorLink"],{to:"#1\u521d\u59cb\u5316\u76ee\u5f55","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u521d\u59cb\u5316\u76ee\u5f55"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u751f\u6210 package.json \u6587\u4ef6")),l.a.createElement(r["a"],{code:"yarn init",lang:"bash"}),l.a.createElement("h2",{id:"2\u5b89\u88c5-webpack"},l.a.createElement(c["AnchorLink"],{to:"#2\u5b89\u88c5-webpack","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u5b89\u88c5 webpack"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b89\u88c5\u5230 devDependencies")),l.a.createElement(r["a"],{code:"yarn add webpack webpack-cli -D",lang:"bash"}),l.a.createElement("h2",{id:"3\u65b0\u5efa\u6587\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#3\u65b0\u5efa\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u65b0\u5efa\u6587\u4ef6"),l.a.createElement("h3",{id:"1webpackconfigjs"},l.a.createElement(c["AnchorLink"],{to:"#1webpackconfigjs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09webpack.config.js"),l.a.createElement(r["a"],{code:"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist'),\n  },\n};",lang:"js"}),l.a.createElement("h3",{id:"2index-\u5165\u53e3\u6587\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#2index-\u5165\u53e3\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09index \u5165\u53e3\u6587\u4ef6"),l.a.createElement("ul",null,l.a.createElement("li",null,"src \u76ee\u5f55\u4e0b\u65b0\u5efa index.js")),l.a.createElement(r["a"],{code:"// src/index.js\nfunction component() {\n  const element = document.createElement('div');\n\n  // lodash\uff08\u76ee\u524d\u901a\u8fc7\u4e00\u4e2a script \u5f15\u5165\uff09\u5bf9\u4e8e\u6267\u884c\u8fd9\u4e00\u884c\u662f\u5fc5\u9700\u7684\n  element.innerHTML = ['Hello', 'webpack'].join(' ');\n\n  return element;\n}\n\ndocument.body.appendChild(component());",lang:"js"}),l.a.createElement("h3",{id:"3\u521b\u5efa-html-\u6587\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#3\u521b\u5efa-html-\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u521b\u5efa html \u6587\u4ef6"),l.a.createElement("ul",null,l.a.createElement("li",null,"dist \u76ee\u5f55\u4e0b\u65b0\u5efa index.html")),l.a.createElement(r["a"],{code:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="bundle.js"><\/script>\n  </body>\n</html>',lang:"html"}),l.a.createElement("h3",{id:"4\u4fee\u6539-packagejson-\u6587\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#4\u4fee\u6539-packagejson-\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u4fee\u6539 package.json \u6587\u4ef6"),l.a.createElement(r["a"],{code:'"scripts": {\n  "build": "webpack" // \u9ed8\u8ba4\u8bfb\u53d6--config webpack.config.js\n}',lang:"js"}),l.a.createElement("h2",{id:"4\u52a0\u8f7d-css"},l.a.createElement(c["AnchorLink"],{to:"#4\u52a0\u8f7d-css","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.\u52a0\u8f7d css"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u4f5c\u7528\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6dfb\u52a0\u540e\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a",l.a.createElement("code",null,"import './style.css'"))))),l.a.createElement("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b89\u88c5\u4f9d\u8d56","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b89\u88c5\u4f9d\u8d56"),l.a.createElement(r["a"],{code:"yarn add style-loader css-loader -D",lang:"bash"}),l.a.createElement("h3",{id:"2\u6dfb\u52a0-loader"},l.a.createElement(c["AnchorLink"],{to:"#2\u6dfb\u52a0-loader","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u6dfb\u52a0 loader"),l.a.createElement("ul",null,l.a.createElement("li",null,"webpack.config.js \u4e2d\u6dfb\u52a0")),l.a.createElement(r["a"],{code:"module: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ['style-loader', 'css-loader'],\n    },\n  ];\n}",lang:"js"}),l.a.createElement("h2",{id:"5\u52a0\u8f7d-image"},l.a.createElement(c["AnchorLink"],{to:"#5\u52a0\u8f7d-image","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.\u52a0\u8f7d image"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u4f5c\u7528\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6dfb\u52a0\u540e\uff0c\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a",l.a.createElement("code",null,"import MyImage from './my-image.png'")))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("code",null,"webpack 5")," \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 ",l.a.createElement("code",null,"Asset Modules"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u4fee\u6539 webpack.config.js"))),l.a.createElement(r["a"],{code:"module: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ['style-loader', 'css-loader'],\n    },\n    {\n      test: /\\.(png|svg|jpg|jpeg|gif|webp)$/i,\n      type: 'asset/resource',\n    },\n  ];\n}",lang:"js"}),l.a.createElement("h2",{id:"6\u52a0\u8f7d-fonts-\u5b57\u4f53"},l.a.createElement(c["AnchorLink"],{to:"#6\u52a0\u8f7d-fonts-\u5b57\u4f53","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.\u52a0\u8f7d fonts \u5b57\u4f53"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u4f5c\u7528\uff1a\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u5b57\u4f53\u6587\u4ef6")),l.a.createElement("li",null,l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"Asset Modules")," \u53ef\u4ee5\u63a5\u6536\u5e76\u52a0\u8f7d",l.a.createElement("code",null,"\u4efb\u4f55\u7c7b\u578b\u6587\u4ef6")))),l.a.createElement(r["a"],{code:"module: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ['style-loader', 'css-loader'],\n    },\n    {\n      test: /\\.(png|svg|jpg|jpeg|gif|webp)$/i,\n      type: 'asset/resource',\n    },\n    {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/i,\n      type: 'asset/resource',\n    },\n  ];\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9875\u9762\u4e2d\u4f7f\u7528")),l.a.createElement(r["a"],{code:"@font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'), url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n.hello {\n  color: red;\n  font-family: 'MyFont';\n  background: url('./icon.png');\n}",lang:"css"}),l.a.createElement("h2",{id:"7\u5bfc\u5165-csvtsv-\u548c-xml"},l.a.createElement(c["AnchorLink"],{to:"#7\u5bfc\u5165-csvtsv-\u548c-xml","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.\u5bfc\u5165 CSV\u3001TSV \u548c XML"),l.a.createElement("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56-1"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b89\u88c5\u4f9d\u8d56-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b89\u88c5\u4f9d\u8d56"),l.a.createElement(r["a"],{code:"yarn add csv-loader xml-loader -D",lang:"bash"}),l.a.createElement("h3",{id:"2\u4fee\u6539-loader"},l.a.createElement(c["AnchorLink"],{to:"#2\u4fee\u6539-loader","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u4fee\u6539 loader"),l.a.createElement("ul",null,l.a.createElement("li",null,"webpack.config.js")),l.a.createElement(r["a"],{code:"module: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ['style-loader', 'css-loader'],\n    },\n    {\n      test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n      type: 'asset/resource',\n    },\n    {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/i,\n      type: 'asset/resource',\n    },\n    {\n      test: /\\.(csv|tsv)$/i,\n      use: ['csv-loader'],\n    },\n    {\n      test: /\\.xml$/i,\n      use: ['xml-loader'],\n    },\n  ],\n}",lang:"js"}),l.a.createElement("h2",{id:"8htmlwebpackplugin"},l.a.createElement(c["AnchorLink"],{to:"#8htmlwebpackplugin","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"8.HtmlWebpackPlugin"),l.a.createElement("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56-2"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b89\u88c5\u4f9d\u8d56-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b89\u88c5\u4f9d\u8d56"),l.a.createElement(r["a"],{code:"yarn add html-webpack-plugin -D",lang:"bash"}),l.a.createElement("h3",{id:"2\u4fee\u6539-webpackconfigjs"},l.a.createElement(c["AnchorLink"],{to:"#2\u4fee\u6539-webpackconfigjs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u4fee\u6539 webpack.config.js"),l.a.createElement(r["a"],{code:"const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  entry: {\n    index: './src/index.js',\n    print: './src/print.js',\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: '\u7ba1\u7406\u8f93\u51fa',\n    }),\n  ],\n  output: {\n    filename: '[name].bundle.js',\n    path: path.resolve(__dirname, 'dist'),\n  },\n};",lang:"js"}),l.a.createElement("h2",{id:"9\u6e05\u7406-dist-\u6587\u4ef6\u5939"},l.a.createElement(c["AnchorLink"],{to:"#9\u6e05\u7406-dist-\u6587\u4ef6\u5939","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"9.\u6e05\u7406 /dist \u6587\u4ef6\u5939"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u6bcf\u6b21\u6784\u5efa\u524d\u6e05\u7406 dist \u76ee\u5f55")),l.a.createElement("li",null,l.a.createElement("p",null,"\u7528 output.",l.a.createElement("code",null,"clean")," \u5b9e\u73b0"))),l.a.createElement(r["a"],{code:"// webpack.config.js\noutput: {\n  filename: '[name].bundle.js',\n  path: path.resolve(__dirname, 'dist'),\n  clean: true,\n},",lang:"js"}),l.a.createElement("h2",{id:"10\u6dfb\u52a0-source-map"},l.a.createElement(c["AnchorLink"],{to:"#10\u6dfb\u52a0-source-map","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"10.\u6dfb\u52a0 source map"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f5c\u7528\uff1a\u8ffd\u8e2a error(\u9519\u8bef) \u548c warning(\u8b66\u544a) \u5728\u6e90\u4ee3\u7801\u4e2d\u7684\u539f\u59cb\u4f4d\u7f6e")),l.a.createElement(r["a"],{code:"// webpack.config.js\nmodule.exports = {\n  mode: 'development',\n  devtool: 'inline-source-map',\n};",lang:"js"}),l.a.createElement("h2",{id:"11\u4f7f\u7528-webpack-dev-server"},l.a.createElement(c["AnchorLink"],{to:"#11\u4f7f\u7528-webpack-dev-server","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"11.\u4f7f\u7528 webpack-dev-server"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7684 web server\uff0c\u5e76\u4e14\u5177\u6709 live reloading(\u5b9e\u65f6\u91cd\u65b0\u52a0\u8f7d) \u529f\u80fd")),l.a.createElement("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56-3"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b89\u88c5\u4f9d\u8d56-3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b89\u88c5\u4f9d\u8d56"),l.a.createElement(r["a"],{code:"yarn add webpack-dev-server -D",lang:"bash"}),l.a.createElement("h3",{id:"2\u4fee\u6539-webpackconfigjs-1"},l.a.createElement(c["AnchorLink"],{to:"#2\u4fee\u6539-webpackconfigjs-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u4fee\u6539 webpack.config.js"),l.a.createElement(r["a"],{code:"module.exports = {\n  devServer: {\n    static: './dist',\n  },\n};",lang:"js"}),l.a.createElement("h3",{id:"3\u4fee\u6539-packagejson"},l.a.createElement(c["AnchorLink"],{to:"#3\u4fee\u6539-packagejson","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u4fee\u6539 package.json"),l.a.createElement(r["a"],{code:'"scripts": {\n  "start": "webpack serve --open",\n  "build": "webpack"\n},',lang:"js"}),l.a.createElement("h2",{id:"12splitchunksplugin-\u4ee3\u7801\u5206\u5272"},l.a.createElement(c["AnchorLink"],{to:"#12splitchunksplugin-\u4ee3\u7801\u5206\u5272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"12.SplitChunksPlugin \u4ee3\u7801\u5206\u5272"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4fee\u6539 webpack.config.js")),l.a.createElement(r["a"],{code:"module.exports = {\n  optimization: {\n    splitChunks: {\n      chunks: 'all',\n    },\n  },\n};",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5229\u7528 client \u7684\u957f\u6548\u7f13\u5b58\u673a\u5236\uff0c\u547d\u4e2d\u7f13\u5b58\u6765\u6d88\u9664\u8bf7\u6c42\uff0c\u5e76\u51cf\u5c11\u5411 server \u83b7\u53d6\u8d44\u6e90\uff0c\u540c\u65f6\u8fd8\u80fd\u4fdd\u8bc1 client \u4ee3\u7801\u548c server \u4ee3\u7801\u7248\u672c\u4e00\u81f4:")),l.a.createElement(r["a"],{code:"module.exports = {\n  optimization: {\n    splitChunks: {\n      cacheGroups: {\n        vendor: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendors',\n          chunks: 'all',\n        },\n      },\n    },\n  },\n};",lang:"js"}),l.a.createElement("h2",{id:"13\u63d0\u53d6-runtime-\u4ee3\u7801"},l.a.createElement(c["AnchorLink"],{to:"#13\u63d0\u53d6-runtime-\u4ee3\u7801","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"13.\u63d0\u53d6 runtime \u4ee3\u7801"),l.a.createElement(r["a"],{code:"optimization: {\n  runtimeChunk: 'single',\n},",lang:"js"}),l.a.createElement("h2",{id:"14\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u6253\u5305\u540e\u4e0d\u91cd\u65b0\u751f\u6210"},l.a.createElement(c["AnchorLink"],{to:"#14\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u6253\u5305\u540e\u4e0d\u91cd\u65b0\u751f\u6210","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"14.\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\uff0c\u6253\u5305\u540e\uff0c\u4e0d\u91cd\u65b0\u751f\u6210"),l.a.createElement(r["a"],{code:"optimization: {\n  moduleIds: 'deterministic',\n}",lang:"js"}),l.a.createElement("h2",{id:"15webpack-bundle-analyzer"},l.a.createElement(c["AnchorLink"],{to:"#15webpack-bundle-analyzer","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"15.webpack-bundle-analyzer"),l.a.createElement("ul",null,l.a.createElement("li",null,"bundle \u5206\u6790")),l.a.createElement("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56-4"},l.a.createElement(c["AnchorLink"],{to:"#1\u5b89\u88c5\u4f9d\u8d56-4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5b89\u88c5\u4f9d\u8d56"),l.a.createElement(r["a"],{code:"yarn add -D webpack-bundle-analyzer",lang:"bash"}),l.a.createElement("h3",{id:"2\u4fee\u6539-webpackconfigjs-2"},l.a.createElement(c["AnchorLink"],{to:"#2\u4fee\u6539-webpackconfigjs-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u4fee\u6539 webpack.config.js"),l.a.createElement(r["a"],{code:"const BundleAnalyzerPlugin =\n  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\n\nconst webpackConfig = {\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: 'Development',\n    }),\n  ],\n};\n\nif (process.env.ANALYZER) {\n  webpackConfig.plugins.push(new BundleAnalyzerPlugin());\n}\n\nmodule.exports = webpackConfig;",lang:"js"}),l.a.createElement("h3",{id:"3\u4fee\u6539-packagejson-1"},l.a.createElement(c["AnchorLink"],{to:"#3\u4fee\u6539-packagejson-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u4fee\u6539 package.json"),l.a.createElement(r["a"],{code:'"scripts": {\n  "start": "webpack serve --open",\n  "analyz": "analyz": "ANALYZER=true npm run build",\n  "build": "webpack"\n}',lang:"js"}),l.a.createElement("h2",{id:"16\u73af\u5883\u53d8\u91cf"},l.a.createElement(c["AnchorLink"],{to:"#16\u73af\u5883\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"16.\u73af\u5883\u53d8\u91cf"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"--env \u53c2\u6570"),"\uff0c\u53ef\u4ee5\u5141\u8bb8\u4f20\u5165\u4efb\u610f\u6570\u91cf\u7684\u73af\u5883\u53d8\u91cf")),l.a.createElement("h3",{id:"1packagejson"},l.a.createElement(c["AnchorLink"],{to:"#1packagejson","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09package.json"),l.a.createElement(r["a"],{code:'"scripts": {\n  "mock": "webpack serve --open --env MOCK=true --env MODE=development"\n},',lang:"js"}),l.a.createElement("h3",{id:"2webpackconfigjs"},l.a.createElement(c["AnchorLink"],{to:"#2webpackconfigjs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09webpack.config.js"),l.a.createElement(r["a"],{code:"module.exports = function (env) {\n  console.log('MOCK:', env.MOCK); // MOCK: true\n  console.log('MODE:', env.MODE); // MODE: development\n  return {\n    entry: './src/index.js',\n    output: {\n      filename: 'bundle.js',\n      path: path.resolve(__dirname, 'dist'),\n    },\n  };\n};",lang:"js"}))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},qZSH:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("H1Ra");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"webpack"},l.a.createElement(r["AnchorLink"],{to:"#webpack","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"webpack"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"webpack \u662f\u4e00\u4e2a JS \u4ee3\u7801\u6a21\u5757\u5316\u7684\u6253\u5305\u5de5\u5177")),l.a.createElement("li",null,l.a.createElement("p",null,"webpack-cli \u662f\u4f7f\u7528 webpack \u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c"))),l.a.createElement("h2",{id:"1\u6982\u5ff5"},l.a.createElement(r["AnchorLink"],{to:"#1\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.\u6982\u5ff5"),l.a.createElement("h3",{id:"1\u5165\u53e3entry"},l.a.createElement(r["AnchorLink"],{to:"#1\u5165\u53e3entry","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u5165\u53e3(entry)"),l.a.createElement("p",null,"string | object | array"),l.a.createElement(c["a"],{code:"const config = {\n  entry: './path/to/my/entry/file.js', // \u5355\u4e2a\u5165\u53e3\n  entry: ['./app/entry1', './app/entry2'],\n  entry: {\n    // \u5206\u79bb \u5e94\u7528\u7a0b\u5e8f(app) \u548c \u7b2c\u4e09\u65b9\u5e93(vendor) \u5165\u53e3\n    app: './src/app.js',\n    vendors: './src/vendors.js',\n  },\n  entry: {\n    // \u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\n    pageOne: './src/pageOne/index.js',\n    pageTwo: './src/pageTwo/index.js',\n    pageThree: './src/pageThree/index.js',\n  },\n};\n\nmodule.exports = config;",lang:"js"}),l.a.createElement("h3",{id:"2\u51fa\u53e3output"},l.a.createElement(r["AnchorLink"],{to:"#2\u51fa\u53e3output","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u51fa\u53e3(output)"),l.a.createElement("p",null,"\u5373\u4f7f\u53ef\u4ee5\u5b58\u5728\u591a\u4e2a\u5165\u53e3\u8d77\u70b9\uff0c\u4f46\u53ea\u6307\u5b9a\u4e00\u4e2a\u8f93\u51fa\u914d\u7f6e\u3002"),l.a.createElement(c["a"],{code:"const path = require('path');\n\nmodule.exports = {\n  output: {\n    // \u8f93\u51fa\u6587\u4ef6\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u5fc5\u987b\u662f string \u7c7b\u578b\u7684\u7edd\u5bf9\u8def\u5f84\u3002\n    path: path.resolve(__dirname, 'dist'),\n\n    // \u8f93\u51fa\u6587\u4ef6\u7684\u540d\u79f0\n    filename: 'bundle.js', // \u5b8c\u6574\u7684\u540d\u79f0\n    filename: '[name].js', // \u5f53\u914d\u7f6e\u4e86\u591a\u4e2a entry \u65f6\uff0c\u901a\u8fc7\u540d\u79f0\u6a21\u7248\u4e3a\u4e0d\u540c\u7684 entry \u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u540d\u79f0\n    filename: '[chunkhash].js', // \u6839\u636e\u6587\u4ef6\u5185\u5bb9 hash \u503c\u751f\u6210\u6587\u4ef6\u540d\u79f0\uff0c\u7528\u4e8e\u6d4f\u89c8\u5668\u957f\u65f6\u95f4\u7f13\u5b58\u6587\u4ef6\n\n    // \u53d1\u5e03\u5230\u7ebf\u4e0a\u7684\u6240\u6709\u8d44\u6e90\u7684 URL \u524d\u7f00\uff0cstring \u7c7b\u578b\n    publicPath: '/assets/', // \u653e\u5230\u6307\u5b9a\u76ee\u5f55\u4e0b\n    publicPath: '', // \u653e\u5230\u6839\u76ee\u5f55\u4e0b\n    publicPath: 'https://cdn.example.com/', // \u653e\u5230 CDN \u4e0a\u53bb\n\n    // \u5bfc\u51fa\u5e93\u7684\u540d\u79f0\uff0cstring \u7c7b\u578b\n    // \u4e0d\u586b\u5b83\u65f6\uff0c\u9ed8\u8ba4\u8f93\u51fa\u683c\u5f0f\u662f\u533f\u540d\u7684\u7acb\u5373\u6267\u884c\u51fd\u6570\n    library: 'MyLibrary',\n\n    // \u5bfc\u51fa\u5e93\u7684\u7c7b\u578b\uff0c\u679a\u4e3e\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f var\n    // \u53ef\u4ee5\u662f umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp \uff0c\n    libraryTarget: 'umd', //\u6d4f\u89c8\u5668\u548cnode\u7aef\u90fd\u53ef\u4ee5\u8fd0\u884c\n\n    // \u662f\u5426\u5305\u542b\u6709\u7528\u7684\u6587\u4ef6\u8def\u5f84\u4fe1\u606f\u5230\u751f\u6210\u7684\u4ee3\u7801\u91cc\u53bb\uff0cboolean \u7c7b\u578b\n    pathinfo: true,\n\n    // \u9644\u52a0 Chunk \u7684\u6587\u4ef6\u540d\u79f0\n    chunkFilename: '[id].js',\n    chunkFilename: '[chunkhash].js',\n\n    // JSONP \u5f02\u6b65\u52a0\u8f7d\u8d44\u6e90\u65f6\u7684\u56de\u8c03\u51fd\u6570\u540d\u79f0\uff0c\u9700\u8981\u548c\u670d\u52a1\u7aef\u642d\u914d\u4f7f\u7528\n    jsonpFunction: 'myWebpackJsonp',\n\n    // \u751f\u6210\u7684 Source Map \u6587\u4ef6\u540d\u79f0\n    sourceMapFilename: '[file].map',\n\n    // \u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u5de5\u5177\u91cc\u663e\u793a\u7684\u6e90\u7801\u6a21\u5757\u540d\u79f0\n    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',\n\n    // \u5f02\u6b65\u52a0\u8f7d\u8de8\u57df\u7684\u8d44\u6e90\u65f6\u4f7f\u7528\u7684\u65b9\u5f0f\n    crossOriginLoading: 'use-credentials',\n    crossOriginLoading: 'anonymous',\n    crossOriginLoading: false,\n  },\n};",lang:"js"}),l.a.createElement("h3",{id:"3\u6a21\u5f0fmode"},l.a.createElement(r["AnchorLink"],{to:"#3\u6a21\u5f0fmode","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u6a21\u5f0f(mode)"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"development | production | none")),l.a.createElement("li",null,l.a.createElement("p",null,"\u8bb0\u4f4f\uff0c\u53ea\u8bbe\u7f6e NODE_ENV\uff0c\u5219\u4e0d\u4f1a\u81ea\u52a8\u8bbe\u7f6e mode"))),l.a.createElement(c["a"],{code:'module.exports = {\n  mode: \'production\', // "production" | "development" | "none"\n};',lang:"js"}),l.a.createElement("p",null,"or"),l.a.createElement(c["a"],{code:'"script": {\n  build: "webpack --mode=production"\n}',lang:"js"}),l.a.createElement("h3",{id:"4\u6a21\u5757loader"},l.a.createElement(r["AnchorLink"],{to:"#4\u6a21\u5757loader","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u6a21\u5757(loader)"),l.a.createElement("p",null,"loader \u7528\u4e8e\u5bf9\u6a21\u5757\u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u8f6c\u6362"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"test \u5c5e\u6027\uff0c\u7528\u4e8e\u6807\u8bc6\u51fa\u5e94\u8be5\u88ab\u5bf9\u5e94\u7684 loader \u8fdb\u884c\u8f6c\u6362\u7684\u67d0\u4e2a\u6216\u67d0\u4e9b\u6587\u4ef6\u3002")),l.a.createElement("li",null,l.a.createElement("p",null,"use \u5c5e\u6027\uff0c\u8868\u793a\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a loader\u3002"))),l.a.createElement("p",null,"\u4e09\u79cd\u4f7f\u7528\u65b9\u5f0f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u914d\u7f6e[Configuration]"),l.a.createElement(c["a"],{code:"const config = {\n  module: {\n    rules: [\n      // \u914d\u7f6e Loader\n      {\n        test: /\\.jsx?$/, // \u6b63\u5219\u5339\u914d\u547d\u4e2d\u8981\u4f7f\u7528 Loader \u7684\u6587\u4ef6\n        include: [\n          // \u53ea\u4f1a\u547d\u4e2d\u8fd9\u91cc\u9762\u7684\u6587\u4ef6\n          path.resolve(__dirname, 'app'),\n        ],\n        exclude: [\n          // \u5ffd\u7565\u8fd9\u91cc\u9762\u7684\u6587\u4ef6\n          path.resolve(__dirname, 'app/demo-files'),\n        ],\n        use: [\n          // \u4f7f\u7528\u90a3\u4e9b Loader\uff0c\u6709\u5148\u540e\u6b21\u5e8f\uff0c\u4ece\u540e\u5f80\u524d\u6267\u884c\n          'style-loader', // \u76f4\u63a5\u4f7f\u7528 Loader \u7684\u540d\u79f0\n          {\n            loader: 'css-loader',\n            options: {\n              // \u7ed9 html-loader \u4f20\u4e00\u4e9b\u53c2\u6570\n            },\n          },\n        ],\n      },\n    ],\n    noParse: [\n      // \u4e0d\u7528\u89e3\u6790\u548c\u5904\u7406\u7684\u6a21\u5757\n      /special-library\\.js$/, // \u7528\u6b63\u5219\u5339\u914d\n    ],\n  },\n};\n\nmodule.exports = config;",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u5185\u8054"),l.a.createElement(c["a"],{code:"import Styles from 'style-loader!css-loader?modules!./styles.css';",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"3.CLI"),l.a.createElement(c["a"],{code:'"script": {\n  build: "webpack --module-bind jade-loader --module-bind \'css=style-loader!css-loader\'"\n}',lang:"js"}))),l.a.createElement("h3",{id:"5\u63d2\u4ef6plugins"},l.a.createElement(r["AnchorLink"],{to:"#5\u63d2\u4ef6plugins","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5\uff09\u63d2\u4ef6(plugins)"),l.a.createElement("p",null,"\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\uff0c\u5305\u62ec\u4ece\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29\uff0c\u4e00\u76f4\u5230\u91cd\u65b0\u5b9a\u4e49\u73af\u5883\u4e2d\u7684\u53d8\u91cf"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"1.\u5256\u6790"),l.a.createElement("ul",null,l.a.createElement("li",null,"webpack \u63d2\u4ef6\u662f\u4e00\u4e2a\u5177\u6709 apply \u5c5e\u6027\u7684 JavaScript \u5bf9\u8c61\u3002apply \u5c5e\u6027\u4f1a\u88ab webpack compiler \u8c03\u7528\uff0c\u5e76\u4e14 compiler \u5bf9\u8c61\u53ef\u5728\u6574\u4e2a\u7f16\u8bd1\u751f\u547d\u5468\u671f\u8bbf\u95ee")),l.a.createElement(c["a"],{code:"const pluginName = 'ConsoleLogOnBuildWebpackPlugin';\n\nclass ConsoleLogOnBuildWebpackPlugin {\n  apply(compiler) {\n    compiler.hooks.run.tap(pluginName, (compilation) => {\n      console.log('webpack \u6784\u5efa\u8fc7\u7a0b\u5f00\u59cb\uff01');\n    });\n  }\n}",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"2.\u914d\u7f6e\u4e2d\u4f7f\u7528"),l.a.createElement(c["a"],{code:"const HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\nconst webpack = require('webpack'); // \u8bbf\u95ee\u5185\u7f6e\u7684\u63d2\u4ef6\n\nconst config = {\n  plugins: [\n    new webpack.optimize.UglifyJsPlugin(),\n    new HtmlWebpackPlugin({ template: './src/index.html' }),\n  ],\n};\n\nmodule.exports = config;",lang:"js"})),l.a.createElement("li",null,l.a.createElement("p",null,"3.Node API"),l.a.createElement(c["a"],{code:"const webpack = require('webpack'); //\u8bbf\u95ee webpack \u8fd0\u884c\u65f6(runtime)\nconst configuration = require('./webpack.config.js');\n\nlet compiler = webpack(configuration);\ncompiler.apply(new webpack.ProgressPlugin());\n\ncompiler.run(function (err, stats) {\n  // ...\n});",lang:"js"}))),l.a.createElement("h2",{id:"2\u89e3\u6790\u89c4\u5219"},l.a.createElement(r["AnchorLink"],{to:"#2\u89e3\u6790\u89c4\u5219","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2.\u89e3\u6790\u89c4\u5219"),l.a.createElement("h3",{id:"1\u7edd\u5bf9\u8def\u5f84"},l.a.createElement(r["AnchorLink"],{to:"#1\u7edd\u5bf9\u8def\u5f84","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1\uff09\u7edd\u5bf9\u8def\u5f84"),l.a.createElement(c["a"],{code:"import '/home/me/file';\nimport 'C:\\\\Users\\\\me\\\\file';",lang:"js"}),l.a.createElement("h3",{id:"2\u76f8\u5bf9\u8def\u5f84"},l.a.createElement(r["AnchorLink"],{to:"#2\u76f8\u5bf9\u8def\u5f84","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2\uff09\u76f8\u5bf9\u8def\u5f84"),l.a.createElement(c["a"],{code:"import '../src/file1';\nimport './file2';",lang:"js"}),l.a.createElement("h3",{id:"3\u6a21\u5757\u8def\u5f84"},l.a.createElement(r["AnchorLink"],{to:"#3\u6a21\u5757\u8def\u5f84","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3\uff09\u6a21\u5757\u8def\u5f84"),l.a.createElement(c["a"],{code:"import 'module';\nimport 'module/lib/file';",lang:"js"}),l.a.createElement("h2",{id:"3\u6784\u5efa\u76ee\u6807-targets"},l.a.createElement(r["AnchorLink"],{to:"#3\u6784\u5efa\u76ee\u6807-targets","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.\u6784\u5efa\u76ee\u6807 targets"),l.a.createElement(c["a"],{code:"module.exports = {\n  target: 'web', // <=== \u9ed8\u8ba4\u662f 'web'\uff0c\u53ef\u7701\u7565\n  target: 'node', // node\u73af\u5883\n};",lang:"js"}),l.a.createElement("h2",{id:"4hrm"},l.a.createElement(r["AnchorLink"],{to:"#4hrm","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.HRM"),l.a.createElement("p",null,"\u6a21\u5757\u70ed\u66ff\u6362(HMR - Hot Module Replacement)\u529f\u80fd\u4f1a\u5728\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u66ff\u6362\u3001\u6dfb\u52a0\u6216\u5220\u9664\u6a21\u5757\uff0c\u800c\u65e0\u9700\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u9875\u9762\uff0c\u70ed\u66f4\u65b0\u53ef\u4f7f\u7528",l.a.createElement("code",null,"webpack-dev-server")),l.a.createElement(c["a"],{code:"// webpack.config.js\u5f00\u542f\u70ed\u66f4\u65b0\u914d\u7f6e\n{\n  devServer: {\n    port: 8000,\n    hot: true\n  }\n}\n// App.js\u914d\u7f6e\u70ed\u66f4\u65b0\u7684\u56de\u8c03\uff0c\u6709\u66f4\u65b0\u56de\u8c03\uff0c\u7c7b\u4f3c\u4e8eajax\uff0c\u4e0d\u4f1a\u5237\u65b0\u9875\u9762\nif (module.hot) {\n  module.hot.accept(App, () => {\n    render(<App />, document.querySelector('#app'));\n  });\n}\n// \u5982\u679c App \u7ec4\u4ef6\u662f\u5916\u90e8\u6587\u4ef6\u521b\u5efa\u7684\uff0c\u901a\u5e38\u5199\u4f5c\uff08\u4e0eimport\u5bfc\u5165\u7684\u8def\u5f84\u4e00\u81f4\uff09\nif (module.hot) {\n  module.hot.accept('./App', () => {\n    render(<App />, document.querySelector('#app'));\n  });\n}",lang:"js"}))))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[195],{HZyj:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("dEAq"),c=t("H1Ra");t("JjdP");n["default"]=e=>(a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u624b\u5199\u9898\u6c47\u603b"},a.a.createElement(o["AnchorLink"],{to:"#\u624b\u5199\u9898\u6c47\u603b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u624b\u5199\u9898\u6c47\u603b"),a.a.createElement("h2",{id:"1js"},a.a.createElement(o["AnchorLink"],{to:"#1js","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1.js"),a.a.createElement("h3",{id:"1reduce"},a.a.createElement(o["AnchorLink"],{to:"#1reduce","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1\uff09reduce"),a.a.createElement(c["a"],{code:"var arr = [1, 2, 3, 4, 5];\nvar result = arr.reduce((prev, item) => {\n  return prev + item;\n}, 0);\nconsole.log('result', result); // 15",lang:"js"}),a.a.createElement("h3",{id:"2some"},a.a.createElement(o["AnchorLink"],{to:"#2some","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2\uff09some"),a.a.createElement(c["a"],{code:"var arr = [{ flag: true }, { flag: false }, { flag: true }];\nvar result = arr.some((item) => !item.flag);\nconsole.log('result', result); // true",lang:"js"}),a.a.createElement("h3",{id:"3every"},a.a.createElement(o["AnchorLink"],{to:"#3every","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3\uff09every"),a.a.createElement(c["a"],{code:"var arr = [{ flag: true }, { flag: false }, { flag: true }];\nvar result = arr.every((item) => !item.flag);\nconsole.log('result', result); // false",lang:"js"}),a.a.createElement("h3",{id:"4\u6570\u636e\u7c7b\u578b"},a.a.createElement(o["AnchorLink"],{to:"#4\u6570\u636e\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"4\uff09\u6570\u636e\u7c7b\u578b"),a.a.createElement(c["a"],{code:"// String\u3001Number\u3001Null\u3001Undefined\u3001Boolean\u3001Symbol\u3001BigInt\n// Object: Object\u3001Array\u3001Date\u3001Function\u3001RegExp\u3001Error",lang:"js"}),a.a.createElement("h3",{id:"50102--030000000000000004"},a.a.createElement(o["AnchorLink"],{to:"#50102--030000000000000004","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"5\uff090.1+0.2 = 0.30000000000000004"),a.a.createElement(c["a"],{code:"// \u6d6e\u70b9\u6570\u8ba1\u7b97\u5b58\u5728\u820d\u5165\u8bef\u5dee\uff0c\u8fd9\u662f\u7531\u4e8e\u4f7f\u7528\u57fa\u4e8eIEEE754\u6570\u503c\u7684\u6d6e\u70b9\u8ba1\u7b97\u7684\u901a\u75c5\n(0.1 * 10 + 0.2 * 10) / 10;\nparseFloat((0.1 + 0.2).toFixed(10));",lang:"js"}),a.a.createElement("h3",{id:"6parseint"},a.a.createElement(o["AnchorLink"],{to:"#6parseint","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"6\uff09parseInt"),a.a.createElement(c["a"],{code:"// \u7b2c\u4e8c\u4e2a\u53c2\u6570: \u8f6c\u6362\u65f6\u4f7f\u7528\u7684\u57fa\u6570(\u5373\u591a\u5c11\u8fdb\u5236)\uff0c\u533a\u95f4\u8303\u56f4\u4ecb\u4e8e 2~36 \u4e4b\u95f4\n[1, 2, 3].map(parseInt); // [1, NaN, NaN]\n// ===>\n[1, 2, 3].map((item, index) => {\n  return parseInt(item, index);\n});\n// ===>\nparseInt(1, 0); // 1\nparseInt(2, 1); // NaN(1\u4e0d\u5728parseInt\u7b2c\u4e8c\u4e2a\u53c2\u6570\u89e3\u6790\u533a\u95f4\u5185)\nparseInt(3, 2); // Nan(\u75282\u8fdb\u5236\u6765\u89e3\u6790\uff0c\u5e94\u4ee5 0 \u548c 1 \u5f00\u5934\uff0c\u6240\u4ee5\u7ed3\u679c\u4e3a NaN)",lang:"js"}),a.a.createElement("h3",{id:"7typeof"},a.a.createElement(o["AnchorLink"],{to:"#7typeof","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"7\uff09typeof"),a.a.createElement(c["a"],{code:"typeof '1' === 'string';\ntypeof 1 === 'number';\ntypeof true === 'boolean';\ntypeof null === 'object';\ntypeof undefined === 'undefined';\ntypeof {} === 'object';\ntypeof function () {} === 'function';",lang:"js"}),a.a.createElement("h3",{id:"8instanceof"},a.a.createElement(o["AnchorLink"],{to:"#8instanceof","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"8\uff09instanceof"),a.a.createElement(c["a"],{code:"function _instanceof(left, right) {\n  if (typeof left !== 'object' || left === null) return false;\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    if (proto === null) return false;\n    if (proto === right.prototype) return true;\n    proto = Object.getPrototypeOf(left);\n  }\n}",lang:"js"}),a.a.createElement("h3",{id:"9new"},a.a.createElement(o["AnchorLink"],{to:"#9new","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"9\uff09new"),a.a.createElement(c["a"],{code:"// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\n// \u5c06\u8fd9\u4e2a\u5bf9\u8c61\u7684__proto__\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\n// \u5c06this\u6307\u5411\u8fd9\u4e2a\u5bf9\u8c61\n// \u5bf9\u6784\u9020\u51fd\u6570\u8fd4\u56de\u503c\u505a\u5224\u65ad\uff0c\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u503c\nfunction _new(Constructor, ...args) {\n  if (typeof Constructor !== 'function') {\n    throw TypeError('must be a function');\n  }\n  let obj = {};\n  Object.setPrototypeOf(obj, Constructor.prototype);\n  const result = Constructor.apply(obj, [...args]);\n  return result instanceof Object ? result : obj;\n}",lang:"js"}),a.a.createElement("h3",{id:"10call"},a.a.createElement(o["AnchorLink"],{to:"#10call","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"10\uff09call"),a.a.createElement(c["a"],{code:"Function.prototype._call = function (context, ...args) {\n  if (typeof this !== 'function') {\n    throw TypeError('must be a function');\n  }\n  context = context || window;\n  context.fn = this;\n  const result = context.fn(...args);\n  delete context.fn;\n  return result;\n};",lang:"js"}),a.a.createElement("h3",{id:"11apply"},a.a.createElement(o["AnchorLink"],{to:"#11apply","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"11\uff09apply"),a.a.createElement(c["a"],{code:"Function.prototype._apply = function (context, args) {\n  if (typeof this !== 'function') {\n    throw TypeError('must be a function');\n  }\n  context = context || window;\n  context.fn = this;\n  let result;\n  if (args) {\n    result = context.fn(...args);\n  } else {\n    result = context.fn();\n  }\n  delete context.fn;\n  return result;\n};",lang:"js"}),a.a.createElement("h3",{id:"12bind"},a.a.createElement(o["AnchorLink"],{to:"#12bind","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"12\uff09bind"),a.a.createElement(c["a"],{code:"Function.prototype._bind = function (context, ...args) {\n  if (typeof this !== 'function') {\n    throw TypeError('must be a function');\n  }\n  const _this = this;\n  return function F() {\n    if (this instanceof F) {\n      return new _this(...args, ...arguments);\n    }\n    return _this.apply(context, args.concat(...arguments));\n  };\n};",lang:"js"}),a.a.createElement("h3",{id:"12inherit"},a.a.createElement(o["AnchorLink"],{to:"#12inherit","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"12\uff09inherit"),a.a.createElement(c["a"],{code:"function inherit(p) {\n  if (p === null) {\n    throw TypeError();\n  }\n  if (Object.create) {\n    return Object.create(p);\n  }\n  if (typeof p !== 'object' || typeof p !== 'function') {\n    throw TypeError();\n  }\n  function F() {}\n  F.prototype = p;\n  return new F();\n}",lang:"js"}),a.a.createElement("h3",{id:"13debounce"},a.a.createElement(o["AnchorLink"],{to:"#13debounce","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"13\uff09debounce"),a.a.createElement(c["a"],{code:"function debounce(fn, t) {\n  let timee = null;\n  return function (...args) {\n    if (timee) {\n      clearTimeout(timee);\n    }\n    timee = setTimeout(() => {\n      fn.apply(this, args);\n      timee = null;\n    }, t);\n  };\n}",lang:"js"}),a.a.createElement("h3",{id:"14throttle"},a.a.createElement(o["AnchorLink"],{to:"#14throttle","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"14\uff09throttle"),a.a.createElement(c["a"],{code:"function throttle(fn, t) {\n  let timee = null;\n  return function (...args) {\n    if (!timee) {\n      timee = setTimeout(() => {\n        fn.apply(this, args);\n        timee = null;\n      }, t);\n    }\n  };\n}",lang:"js"}),a.a.createElement("h3",{id:"15\u539f\u578b\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#15\u539f\u578b\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"15\uff09\u539f\u578b\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function P() {}\nP.prototype.say = function () {};\nfunction C() {}\nC.prototype = new P();\nC.prototype.constructor = C;",lang:"js"}),a.a.createElement("h3",{id:"16\u6784\u9020\u51fd\u6570\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#16\u6784\u9020\u51fd\u6570\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"16\uff09\u6784\u9020\u51fd\u6570\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function P() {}\nP.prototype.say = function () {};\nfunction C() {\n  P.call(this);\n}",lang:"js"}),a.a.createElement("h3",{id:"17\u7ec4\u5408\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#17\u7ec4\u5408\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"17\uff09\u7ec4\u5408\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function P() {}\nP.prototype.say = function () {};\nfunction C() {\n  P.call(this);\n}\nC.prototype = new P();\nC.prototype.constructor = C;",lang:"js"}),a.a.createElement("h3",{id:"18\u539f\u578b\u5f0f\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#18\u539f\u578b\u5f0f\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"18\uff09\u539f\u578b\u5f0f\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function copyObj(p) {\n  function F() {}\n  F.prototype = p;\n  return new F();\n}\n// \u76f8\u5f53\u4e8e\nObject.create();",lang:"js"}),a.a.createElement("h3",{id:"19\u5bc4\u751f\u5f0f\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#19\u5bc4\u751f\u5f0f\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"19\uff09\u5bc4\u751f\u5f0f\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function copyObj(p) {\n  function F() {}\n  F.prototype = p;\n  return new F();\n}\nfunction createObj(obj) {\n  let clone = copyObj(obj);\n  clone.getName = function () {};\n  return clone;\n}",lang:"js"}),a.a.createElement("h3",{id:"20\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},a.a.createElement(o["AnchorLink"],{to:"#20\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"20\uff09\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),a.a.createElement(c["a"],{code:"function clone(Parent, Child) {\n  Child.prototype = Object.create(Parent.prototype);\n  Child.prototype.constructor = Child;\n}\nfunction P() {}\nfunction C() {\n  P.call(this);\n}\nclone(P, C);\nlet child = new C();",lang:"js"}),a.a.createElement("h2",{id:"2es"},a.a.createElement(o["AnchorLink"],{to:"#2es","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2.ES"),a.a.createElement("h3",{id:"1promise"},a.a.createElement(o["AnchorLink"],{to:"#1promise","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1\uff09Promise"),a.a.createElement(c["a"],{code:"const PENDING = 'pending';\nconst FULFILLED = 'fulfilled';\nconst REJECTED = 'rejected';\n\nclass MyPromise {\n  constructor(exector) {\n    this._status = PENDING;\n    this._value = undefined;\n    this._reason = undefined;\n    this._resolveQueue = [];\n    this._rejectQueue = [];\n\n    let _resolve = (val) => {\n      const run = () => {\n        if (this._status !== PENDING) return;\n        this._status = FULFILLED;\n        this._value = val;\n        while (this._resolveQueue.length) {\n          const cb = this._resolveQueue.shift();\n          cb(val);\n        }\n      };\n      setTimeout(run);\n    };\n    let _reject = (val) => {\n      const run = () => {\n        if (this._status !== PENDING) return;\n        this._status = REJECTED;\n        this._reason = val;\n        while (this._rejectQueue.length) {\n          const cb = this._rejectQueue.shift();\n          cb(val);\n        }\n      };\n      setTimeout(run);\n    };\n    exector(_resolve, _reject);\n  }\n  then(resolveFn, rejectFn) {\n    if (typeof resolveFn !== 'function') {\n      resolveFn = (val) => val;\n    }\n    if (typeof resolveFn !== 'function') {\n      resolveFn = (reason) => {\n        throw new Error(reason instanceof Error ? reason.message : reason);\n      };\n    }\n    return new MyPromise((resole, reject) => {\n      const fulfilledFn = (value) => {\n        try {\n          let x = resolveFn(value);\n          x instanceof MyPromise ? x.then(resole, reject) : resolve(x);\n        } catch (error) {\n          reject(error);\n        }\n      };\n      const rejectedFn = (reason) => {\n        try {\n          let x = rejectFn(reason);\n          x instanceof MyPromise ? x.then(resole, reject) : resolve(x);\n        } catch (error) {\n          reject(error);\n        }\n      };\n      switch (this._status) {\n        case PENDING:\n          this._resolveQueue.push(fulfilledFn);\n          this._rejectQueue.push(rejectedFn);\n          break;\n        case FULFILLED:\n          fulfilledFn(this._value);\n          break;\n        case REJECTED:\n          fulfilledFn(this._reason);\n          break;\n      }\n    });\n  }\n  catch(rejectedFn) {\n    return this.then(undefined, rejectedFn);\n  }\n  finally(cb) {\n    return this.then(\n      (val) => MyPromise.resolve(cb()).then(() => val),\n      (reason) =>\n        MyPromise.resolve(cb()).then(() => {\n          throw reason;\n        }),\n    );\n  }\n  static resolve(value) {\n    if (value instanceof MyPromise) return value;\n    return new MyPromise((resolve) => resolve(value));\n  }\n  static reject(reason) {\n    return new MyPromise((resolve, reject) => reject(reason));\n  }\n  static all(promiseQueue) {\n    return new MyPromise((resolve, reject) => {\n      if (!Array.isArray(promiseQueue)) {\n        return reject('must be array');\n      }\n      let index = 0;\n      let result = [];\n      promiseQueue.forEach((p, i) => {\n        MyPromise.resolve(p).then(\n          (val) => {\n            index++;\n            result[i] = val;\n            if (index === promiseQueue.length) {\n              resolve(result);\n            }\n          },\n          (err) => {\n            reject(err);\n          },\n        );\n      });\n    });\n  }\n  static allSellte(promiseQueue) {\n    return new MyPromise((resolve, reject) => {\n      if (!Array.isArray(promiseQueue)) {\n        return reject('must be array');\n      }\n      let index = 0;\n      let result = [];\n      promiseQueue.forEach((p, i) => {\n        index++;\n        MyPromise.resolve(p).then(\n          (val) => {\n            result[i] = val;\n            if (index === promiseQueue.length) {\n              resolve(result);\n            }\n          },\n          (err) => {\n            result[i] = err;\n            if (index === promiseQueue.length) {\n              resolve(result);\n            }\n          },\n        );\n      });\n    });\n  }\n  static race(promiseQueue) {\n    return new MyPromise((resolve, reject) => {\n      for (let p of promiseQueue) {\n        MyPromise.resolve(p).then(\n          (val) => resolve(val),\n          (err) => reject(err),\n        );\n      }\n    });\n  }\n}",lang:"js"}),a.a.createElement("h3",{id:"2async-await"},a.a.createElement(o["AnchorLink"],{to:"#2async-await","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2\uff09async await"),a.a.createElement(c["a"],{code:"function generatorToAsync(generatorFn) {\n  return function () {\n    const gen = generatorFn.apply(this, arguments); // gen\u6709\u53ef\u80fd\u4f20\u53c2\n    // \u8fd4\u56de\u4e00\u4e2aPromise\n    return new Promise((resolve, reject) => {\n      function go(key, arg) {\n        let res;\n        try {\n          res = gen[key](arg); // \u8fd9\u91cc\u6709\u53ef\u80fd\u4f1a\u6267\u884c\u8fd4\u56dereject\u72b6\u6001\u7684Promise\n        } catch (error) {\n          return reject(error); // \u62a5\u9519\u7684\u8bdd\u4f1a\u8d70catch\uff0c\u76f4\u63a5reject\n        }\n        // \u89e3\u6784\u83b7\u5f97value\u548cdone\n        const { value, done } = res;\n        if (done) {\n          // \u5982\u679cdone\u4e3atrue\uff0c\u8bf4\u660e\u8d70\u5b8c\u4e86\uff0c\u8fdb\u884cresolve(value)\n          return resolve(value);\n        } else {\n          // \u5982\u679cdone\u4e3afalse\uff0c\u8bf4\u660e\u6ca1\u8d70\u5b8c\uff0c\u8fd8\u5f97\u7ee7\u7eed\u8d70\n          // value\u6709\u53ef\u80fd\u662f\uff1a\u5e38\u91cf\uff0cPromise\uff0cPromise\u6709\u53ef\u80fd\u662f\u6210\u529f\u6216\u8005\u5931\u8d25\n          return Promise.resolve(value).then(\n            (val) => go('next', val),\n            (err) => go('throw', err),\n          );\n        }\n      }\n      go('next'); // \u7b2c\u4e00\u6b21\u6267\u884c\n    });\n  };\n}\n\nfunction* myGenerator() {\n  try {\n    console.log(yield Promise.resolve(1));\n    console.log(yield 2); //2\n    console.log(yield Promise.reject('error'));\n  } catch (error) {\n    console.log(error);\n  }\n}\nconst asyncFn = generatorToAsync(myGenerator);\nasyncFn().then((res) => console.log(res));",lang:"js"}))))},JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
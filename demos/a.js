function _instanceof(left, right) {
  // if (typeof left)
}

Function.prototype._bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('must a function');
  }
  var _this = this;
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};

class EventEmiter {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    if (typeof cb !== 'function') {
      throw TypeError();
    }
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
    return this;
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.warn();
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  off(event, cb) {
    if (!cb) {
      this.events[event].length = 0;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.apply(this, args);
    };
    this.on(event, func);
    return this;
  }
}

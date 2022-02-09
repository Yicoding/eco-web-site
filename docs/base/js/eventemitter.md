---
toc: menu
---

# EventEmitter

```js
class EventEmitter {
  constructor(maxListeners) {
    this.events = {}; // 监听key-value
    this.maxListeners = maxListeners || Infinity;
  }
  on(event, cb) {
    if (!(cb instanceof Function)) {
      console.warn('must be a function');
      return this;
    }
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (
      this.maxListeners !== Infinity &&
      this.events[event].length >= this.maxListeners
    ) {
      console.warn(`${event} has reached max listeners.`);
      return this;
    }
    this.events[event].push(cb);
    return this;
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.warn(`${event} event is not registered.`);
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  /* 无cb全部移除：事件名、callback */
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this; // 链式调用
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func); // 先移除
      cb.apply(this, args);
    };
    this.on(event, func);
    return this;
  }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
const event = new EventEmitter();

event.on('add', add);
event.on('log', log);
event.emit('add', 1, 2); // 3
event.emit('log', 'hi~'); // 'hi~'
event.off('add');
event.emit('add', 1, 2); // Error: add event is not registered.
event.once('once', add);
event.emit('once', 1, 2); // 3
event.emit('once', 1, 2);
event.emit('once', 1, 2);
```

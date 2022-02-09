---
toc: menu
---

# Promise/async/Generator 实现原理解析

## 1.Promise

### 1）观察者模式

- `收集依赖` -> `触发通知` -> `取出依赖执行` 的方式，被广泛运用于`观察者模式`的实现

- 在 Promise 里，执行顺序是 `then 收集依赖` -> `异步触发 resolve` -> `resolve 执行依赖`

  - `Promise` 的构造方法接收一个 `executor()`，在 `new Promise()`时就立刻执行这个 `executor` 回调
  - `executor()`内部的异步任务被放入`宏/微任务队列`，等待执行
  - `then()`被执行，收集`成功/失败回调`，放入成功/失败队列
  - `executor()`的异步任务被执行，触发 resolve/reject，从成功/失败队列中取出回调依次执行

```js
class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._resolveQueue = []; // then收集的执行成功的回调队列
    this._rejectQueue = []; // then收集的执行失败的回调队列

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      // 从成功队列里取出回调依次执行
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    };
    // 实现同resolve
    let _reject = (val) => {
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    };
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  }
}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result');
  }, 1000);
});
p1.then((res) => console.log(res));
//一秒后输出result
```

### 2）Promise A+规范

- Promise 本质是一个状态机，且状态只能为以下三种：`Pending（等待态）`、`Fulfilled（执行态）`、`Rejected（拒绝态）`，状态的变更是单向的，只能从 Pending -> Fulfilled 或 Pending -> Rejected，`状态变更不可逆`
- then 方法接收`两个可选参数`，分别对应状态改变时触发的回调。then 方法`返回一个 promise`。then 方法可以被同一个 promise 调用多次。
  - then 中 return 返回的值才能被下一个 then 使用

```js
// Promise/A+规范的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING; // Promise状态
    this._resolveQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = []; // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
      this._status = FULFILLED; // 变更状态

      // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
      // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    };
    // 实现同resolve
    let _reject = (val) => {
      if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
      this._status = REJECTED; // 变更状态
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    };
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  }
}
```

### 3）then 的链式调用

```js
const p1 = new Promise((resolve, reject) => {
  resolve(1);
});

p1.then((res) => {
  console.log(res);
  // then回调中可以return一个Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
})
  .then((res) => {
    console.log(res);
    // then回调中也可以return一个值
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
```

- `.then()`需要返回一个 `Promise`，这样才能找到 then 方法，所以我们会把 then 方法的返回值包装成 Promise。
- .then()的回调需要拿到`上一个.then()的返回值`
- .then()的回调需要顺序执行，以上面这段代码为例，虽然中间 return 了一个 Promise，但执行顺序仍要保证是 1->2->3。我们要等待当前 Promise 状态变更后，再执行下一个 then 收集的回调，这就要求我们对 then 的返回值分类讨论

```js
// then方法,接收一个成功的回调和一个失败的回调
then(resolveFn, rejectFn) {
  // return一个新的promise
  return new MyPromise((resolve, reject) => {
    //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
    const fulfilledFn = (value) => {
      try {
        // 执行第一个(当前的)Promise的成功回调,并获取返回值
        let x = resolveFn(value);
        // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        // 这里resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    };
    // 把后续then收集的依赖都push进当前Promise的成功回调队列中(_rejectQueue), 这是为了保证顺序调用
    this._resolveQueue.push(fulfilledFn);

    // reject同理
    const rejectedFn = (error) => {
      try {
        let x = rejectFn(error);
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    };
    this._rejectQueue.push(rejectedFn);
  });
}
```

### 4）值穿透 & 状态已变更的情况

- `值穿透`：根据规范，如果 then() 接收的参数不是 function，那么我们应该忽略它。如果没有忽略，当 then()回调不为 function 时将会抛出异常，导致链式调用中断
- `处理状态为resolve/reject的情况`：其实我们上边 then() 的写法是对应状态为 pedding 的情况，但是有些时候，resolve/reject 在 then() 之前就被执行（比如 Promise.resolve().then()），如果这个时候还把 then()回调 push 进 resolve/reject 的执行队列里，那么回调将不会被执行，因此对于状态已经变为 fulfilled 或 rejected 的情况，我们直接执行 then 回调：

```js
// then方法,接收一个成功的回调和一个失败的回调
then(resolveFn, rejectFn) {
  // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
  typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null;
  typeof rejectFn !== 'function'
    ? (rejectFn = (reason) => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      })
    : null;

  // return一个新的promise
  return new MyPromise((resolve, reject) => {
    // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
    const fulfilledFn = (value) => {
      try {
        // 执行第一个(当前的)Promise的成功回调,并获取返回值
        let x = resolveFn(value);
        // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    };

    // reject同理
    const rejectedFn = (error) => {
      try {
        let x = rejectFn(error);
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    };

    switch (this._status) {
      // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
      case PENDING:
        this._resolveQueue.push(fulfilledFn);
        this._rejectQueue.push(rejectedFn);
        break;
      // 当状态已经变为resolve/reject时,直接执行then回调
      case FULFILLED:
        fulfilledFn(this._value); // this._value是上一个then回调return的值(见完整版代码)
        break;
      case REJECTED:
        rejectedFn(this._value);
        break;
    }
  });
}
```

### 5）兼容同步任务

- Promise 的执行顺序是 `new Promise -> then()收集回调 -> resolve/reject 执行回调`，这一顺序是建立在 executor 是异步任务的前提上的，如果 executor 是一个同步任务，那么顺序就会变成 `new Promise -> resolve/reject 执行回调 -> then()收集回调`，resolve 的执行跑到 then 之前去了，为了兼容这种情况，需要给 `resolve/reject` 执行回调的操作包一个 `setTimeout，让它异步执行`

> 其实 Promise 的默认实现是放进了微任务队列，这里的实现（包括大多数 Promise 手动实现和 polyfill 的转化）都是使用 setTimeout 放入了宏任务队列（当然也可以用 MutationObserver 模拟微任务）

```js
//Promise/A+规定的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING; // Promise状态
    this._value = undefined; // 储存then回调return的值
    this._resolveQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = []; // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED; // 变更状态
        this._value = val; // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(val);
        }
      };
      setTimeout(run);
    };
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED; // 变更状态
        this._value = val; // 储存当前value
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift();
          callback(val);
        }
      };
      setTimeout(run);
    };
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null;
    typeof rejectFn !== 'function'
      ? (rejectFn = (reason) => {
          throw new Error(reason instanceof Error ? reason.message : reason);
        })
      : null;

    // return一个新的promise
    return new MyPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = (value) => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value);
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      // reject同理
      const rejectedFn = (error) => {
        try {
          let x = rejectFn(error);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value); // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
      }
    });
  }
}
```

### 6）实现 Promise.prototype.catch()

- `catch()`方法返回一个 Promise，并且处理拒绝的情况。它的行为与调用 Promise.prototype.then(undefined, onRejected) 相同。

```js
// catch方法其实就是执行一下then的第二个回调
catch(rejectFn) {
  return this.then(undefined, rejectFn);
}
```

### 7）实现 Promise.prototype.finally()

- `finally()`方法返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。在 finally 之后，还可以继续 then。并且会将值原封不动的传递给后面的 then

```js
// finally方法
finally(callback) {
  return this.then(
    value => MyPromise.resolve(callback()).then(() => value), // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
    reason => MyPromise.resolve(callback()).then(() => { throw reason }) // reject同理
  )
}
```

### 8）实现 Promise.resolve()

- `Promise.resolve(value)`方法返回一个以给定值解析后的 Promise 对象。如果该值为 promise，返回这个 promise；如果这个值是 thenable（即带有"then" 方法)），返回的 promise 会“跟随”这个 thenable 的对象，采用它的最终状态；否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平

```js
// 静态的resolve方法
static resolve(value) {
  if(value instanceof MyPromise) return value; // 根据规范, 如果参数是Promise实例, 直接return这个实例
  return new MyPromise(resolve => resolve(value));
}
```

### 9）实现 Promise.reject()

- Promise.reject()方法返回一个带有拒绝原因的 Promise 对象

```js
// 静态的reject方法
static reject(reason) {
  return new MyPromise((resolve, reject) => reject(reason));
}
```

### 9）实现 Promise.all()

- `Promise.all(iterable)`方法返回一个 `Promise 实例`，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果

```js
// 静态的all方法
static all(promiseArr) {
  let index = 0
  let result = []
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((p, i) => {
      // Promise.resolve(p)用于处理传入值不为Promise的情况
      MyPromise.resolve(p).then(
        val => {
          index++
          result[i] = val
          //所有then执行后, resolve结果
          if(index === promiseArr.length) {
            resolve(result)
          }
        },
        err => {
          // 有一个Promise被reject时，MyPromise的状态变为reject
          reject(err)
        }
      )
    })
  })
}
```

### 10）实现 Promise.race()

- `Promise.race(iterable)`方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝

### 11）完整代码

```js
// Promise/A+规定的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING; // Promise状态
    this._value = undefined; // 储存then回调return的值
    this._resolveQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = []; // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      // 把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED; // 变更状态
        this._value = val; // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(val);
        }
      };
      setTimeout(run);
    };
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED; // 变更状态
        this._value = val; // 储存当前value
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift();
          callback(val);
        }
      };
      setTimeout(run);
    };
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null;
    typeof rejectFn !== 'function'
      ? (rejectFn = (reason) => {
          throw new Error(reason instanceof Error ? reason.message : reason);
        })
      : null;

    // return一个新的promise
    return new MyPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = (value) => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value);
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      // reject同理
      const rejectedFn = (error) => {
        try {
          let x = rejectFn(error);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value); // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
      }
    });
  }

  // catch方法其实就是执行一下then的第二个回调
  catch(rejectFn) {
    return this.then(undefined, rejectFn);
  }

  // finally方法
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value), // 执行回调,并returnvalue传递给后面的then
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason;
        }), // reject同理
    );
  }

  // 静态的resolve方法
  static resolve(value) {
    if (value instanceof MyPromise) return value; // 根据规范, 如果参数是Promise实例, 直接return这个实例
    return new MyPromise((resolve) => resolve(value));
  }

  // 静态的reject方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  // 静态的all方法
  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promiseArr)) {
        return reject(new TypeError('arguments must be array'));
      }
      let index = 0;
      let result = [];
      promiseArr.forEach((p, i) => {
        // Promise.resolve(p)用于处理传入值不为Promise的情况，强行转为promise，避免使用 instanceof 再进行一次判断
        MyPromise.resolve(p).then(
          (val) => {
            index++;
            result[i] = val;
            if (index === promiseArr.length) {
              resolve(result);
            }
            // 错误写法
            // if (result.length === promiseArr.length)
          },
          (err) => {
            reject(err);
          },
        );
      });
    });
  }

  // 静态的race方法
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      // 同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
      for (let p of promiseArr) {
        MyPromise.resolve(p).then(
          // Promise.resolve(p)用于处理传入值不为Promise的情况
          (value) => {
            resolve(value); // 注意这个resolve是上边new MyPromise的
          },
          (err) => {
            reject(err);
          },
        );
      }
    });
  }
}
```

## 2.async/await

- 使用意义

  - 在多个回调依赖的场景中，尽管 Promise 通过链式调用取代了回调嵌套，但过多的链式调用可读性仍然不佳，流程控制也不方便
  - 让 JS 对于`异步操作`有了`终极解决方案`

- 原理
  - async/await 实际上是对 `Generator`（生成器）的`封装`

### 1）自动执行

- run 方法里我们把执行下一步的操作封装成`_next()`，每次 Promise.then()的时候都去执行\_next()，实现自动迭代的效果。在迭代的过程中，我们还把 resolve 的值传入 `gen.next()`，使得 yield 得以返回 Promise 的 resolve 的值

```js
function run(gen) {
  var g = gen(); //由于每次gen()获取到的都是最新的迭代器,因此获取迭代器操作要放在_next()之前,否则会进入死循环

  function _next(val) {
    //封装一个方法, 递归执行g.next()
    var res = g.next(val); //获取迭代器对象，并返回resolve的值
    if (res.done) return res.value; //递归终止条件
    res.value.then((val) => {
      //Promise的then方法是实现自动迭代的前提
      _next(val); //等待Promise完成就自动执行下一个next，并传入resolve的值
    });
  }
  _next(); //第一次执行
}

function* myGenerator() {
  console.log(yield Promise.resolve(1)); // 1
  console.log(yield Promise.resolve(2)); // 2
  console.log(yield Promise.resolve(3)); // 3
}

run(myGenerator);
```

### 2）返回 Promise & 异常处理

- 需要改进的问题
  - 需要兼容基本类型：这段代码能自动执行的前提是 `yield` 后面跟 Promise，为了兼容后面跟着基本类型值的情况，我们需要把 yield 跟的内容(`gen().next.value`)都用 `Promise.resolve()`转化一遍
  - 缺少错误处理：上边代码里的 Promise 如果执行失败，就会导致后续执行直接中断，我们需要通过调用 `Generator.prototype.throw()`，把错误抛出来，才能被外层的 try-catch 捕获到
  - 返回值是 Promise：`async/await` 的返回值是一个 Promise，我们这里也需要保持一致，给返回值包一个 Promise

```js
function generatorToAsync(generatorFn) {
  return function () {
    const gen = generatorFn.apply(this, arguments); // gen有可能传参

    // 返回一个Promise
    return new Promise((resolve, reject) => {
      function go(key, arg) {
        let res;
        try {
          res = gen[key](arg); // 这里有可能会执行返回reject状态的Promise
        } catch (error) {
          return reject(error); // 报错的话会走catch，直接reject
        }

        // 解构获得value和done
        const { value, done } = res;
        if (done) {
          // 如果done为true，说明走完了，进行resolve(value)
          return resolve(value);
        } else {
          // 如果done为false，说明没走完，还得继续走

          // value有可能是：常量，Promise，Promise有可能是成功或者失败
          return Promise.resolve(value).then(
            (val) => go('next', val),
            (err) => go('throw', err),
          );
        }
      }

      go('next'); // 第一次执行
    });
  };
}

function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1));
    console.log(yield 2); //2
    console.log(yield Promise.reject('error'));
  } catch (error) {
    console.log(error);
  }
}
const asyncFn = generatorToAsync(myGenerator);

asyncFn().then((res) => console.log(res));
//输出 1 2 error

// const result = run(myGenerator); //result是一个Promise
//输出 1 2 error
```

## 3.Generator

- 生成器函数根据 yield 语句将代码分割为 switch-case 块，后续通过切换\_context.prev 和\_context.next 来分别执行各个 case

```js
function* foo() {
  yield 'result1';
  yield 'result2';
  yield 'result3';
}

const gen = foo();
console.log(gen.next().value); // result1
console.log(gen.next().value); // result2
console.log(gen.next().value); // result3
```

### 1）核心

- Generator 实现的核心在于`上下文的保存`，函数并没有真的被挂起，每一次 yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个 context 对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样

### 2）实现

```js
// 生成器函数根据yield语句将代码分割为switch-case块，后续通过切换_context.prev和_context.next来分别执行各个case
function gen$(_context) {
  while (1) {
    switch ((_context.prev = _context.next)) {
      case 0:
        _context.next = 2;
        return 'result1';

      case 2:
        _context.next = 4;
        return 'result2';

      case 4:
        _context.next = 6;
        return 'result3';

      case 6:
      case 'end':
        return _context.stop();
    }
  }
}

// 低配版context
var context = {
  next: 0,
  prev: 0,
  done: false,
  stop: function stop() {
    this.done = true;
  },
};

// 低配版invoke
let gen = function () {
  return {
    next: function () {
      value = context.done ? undefined : gen$(context);
      done = context.done;
      return {
        value,
        done,
      };
    },
  };
};

// 测试使用
var g = gen();
g.next(); // {value: "result1", done: false}
g.next(); // {value: "result2", done: false}
g.next(); // {value: "result3", done: false}
g.next(); // {value: undefined, done: true}
```

- function\* 生成器函数被转化为以上代码
  转化后的代码分为三大块：

  - `gen$(_context)`由 yield 分割生成器函数代码而来
  - `context 对象`用于储存函数执行上下文
  - `invoke()`方法定义 next()，用于执行 gen$(\_context)来跳到下一步

- 调用 g.next()，就相当于调用 invoke()方法，执行 gen$(\_context)，进入 switch 语句，switch 根据 context 的标识，执行对应的 case 块，return 对应结果
- 当生成器函数运行到末尾（没有下一个 yield 或已经 return），switch 匹配不到对应代码块，就会 return 空值，这时 g.next()返回{value: undefined, done: true}

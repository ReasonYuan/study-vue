
function Promise(fn) {
  this.name = 'promise-' + new Date().getTime() + '-' + Math.round(Math.random()*1000);
  this.callbacks = [];
  this.state = 'pending';
  this.data = null;

  let self = this;

  
  this.then = function (onResolved) {
    const self = this;
    let promise2;

    // return new Promise(resolve => {
    //   handle({
    //     resolve: resolve,
    //     onFulfilled: cb
    //   })
    // })
    // if (state === 'pending') {
    //   callbacks.push(cb);
    //   return this;
    // }
    // cb(value);
    // return this;
    if (self.state === 'pending') {
      return promise2 = new Promise(resolve => {

        self.callbacks.push(
          () => {
            const x = onResolved(self.data);
            resolve(x);
            console.log('---------->>> callback pending x:', x )
            // if (x instanceof Promise) {
            //     x.then(resolve)
            // } else {
            //     resolve(x);
            // }
            // resolvePromise(promise2, x, resolve, null)
          }
        )
      })
    }

    // if (self.state === 'resolved') {
    //   return promise2 = new Promise(resolve => {
    //     var x = onResolved(self.data)
    //     console.log('---------- resolved x:', x)
    //     resolvePromise(promise2, x, resolve, null)
    //   })
    // }
  }

  function resolvePromise(promise, x, resolve, reject) {
    var then
    var thenCalledOrThrow = false

    if (promise === x) {
      return null;
    }

    if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            then = x.then
            if (typeof then === 'function') {
                then.call(x, function rs(y) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return resolvePromise(promise, y, resolve, reject)
                })
            } else {
                return resolve(x)
            }
        } catch(e) {
            // if (thenCalledOrThrow) return
            // thenCalledOrThrow = true
            // return reject(e)
        }
    } else {
        return resolve(x)
    }
}
  
//   function resolvePromise(promise, x, resolve, reject) {
//     var then
//     var thenCalledOrThrow = false

//     if (promise === x) {
//       return null;
//       return reject(new TypeError('Chaining cycle detected for promise!'))
//     }

//     if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
//         try {
//             then = x.then
//             if (typeof then === 'function') {
//                 then.call(x, function rs(y) {
//                     if (thenCalledOrThrow) return
//                     thenCalledOrThrow = true
//                     return resolvePromise(promise, y, resolve, reject)
//                 }, function rj(r) {
//                     if (thenCalledOrThrow) return
//                     thenCalledOrThrow = true
//                     return reject(r)
//                 })
//             } else {
//                 return resolve(x)
//             }
//         } catch(e) {
//             if (thenCalledOrThrow) return
//             thenCalledOrThrow = true
//             return reject(e)
//         }
//     } else {
//         return resolve(x)
//     }
// }

// const handle = function (callback) {
//   console.log('----------state:', self.state);
//   if (self.state === 'pending') {
//     self.callbacks.push(callback);
//     return;
//   }

//   if (!callback.onFulfilled){
//     callback.resolve(value);
//     return;
//   }

//   const res = callback.onFulfilled(value);
//   callback.resolve(res)
// }


  // setTimeout机制,resolve中执行回调的逻辑放置到JS任务队列末尾，以保证在resolve执行时，then方法的回调函数已经注册完成. 
  // Javascript执行引擎是单线程的，主线程的语句和方法，会阻塞定时任务的运行，在Javascript执行引擎之外，存在一个任务队列，
  // 当在代码中调用setTimeout()方法时，注册的延时方法会挂到浏览器内核其他模块处理，当延时方法到达触发条件，即到达设置的延时时间时，该模块再将要执行的方法添加至该模块的任务队列中。
  // 这一过程与执行引擎主线程独立，执行引擎在主线程方法执行完毕，到达空闲状态时，才会从该模块的任务队列中顺序提取任务来执行，这期间的时间，可能大于注册任务时设置的延时时间。
  const resolve = function(newValue) {
    console.log('-------resolve:', self.name, newValue)

    setTimeout(() => {
      if(self.state !== 'pending') {
        return;
      }
      self.state = 'resolved';
      self.data = newValue;
      self.callbacks.forEach(function (callback) {
          // handle(callback);
        callback(newValue)  
      });
    })

    // callback(value);
    // value = newValue;
    // state = 'fulfilled';
    // setTimeout(() => {
    //   callbacks.forEach(cb => cb(value))
    // })
    // if (newValue && (newValue instanceof Promise)) { // typeof newValue === 'object' || typeof newValue === 'function'
    //   var then = newValue.then;
    //   if (typeof then === 'function') {
    //       then.call(newValue, resolve);
    //       return;
    //   }
    // }
    // self.state = 'fulfilled';
    // value = newValue;
    // setTimeout(function () {
    //     self.callbacks.forEach(function (callback) {
    //         handle(callback);
    //     });
    // });
  }
  
  console.log('\n-----promise:', this.name)
  fn(resolve)
}

// ***** promise里面的then函数仅仅是注册了后续需要执行的代码，真正的执行是在resolve方法里面执行的，理清了这层，再来分析源码会省力的多。


function login() {
  return new Promise(resolve => {
    resolve(true);
    // setTimeout(()=>{
    //   resolve(true);
    // },20)
  })
}

function getUserId() {
  return new Promise(resolve => {
    resolve(998)
  })
  // setTimeout(()=>{
  //   return 998;
  // }, 20)
  // return 998
}

const p = login();
p.then(res => { console.log('------>登录结果1:', res)})
const p2 = p.then(res => { console.log('------>登录结果:', res); return getUserId()})
.then(res => console.log('-------->then2:', res))
console.log('------>p2:', p2.name)


// 核心逻辑： 异步链式（ 链式Promise ） -> 在then函数里面注册的仍然是一个Promise
// 链式Promise是指在当前promise达到fulfilled状态后，即开始进行下一个promise
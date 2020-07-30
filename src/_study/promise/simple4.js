
// 核心逻辑： 异步链式（ 链式Promise ） -> 在then函数里面注册的仍然是一个Promise
// 链式Promise是指在当前promise达到fulfilled状态后，即开始进行下一个promise

// ***** promise里面的then函数仅仅是注册了后续需要执行的代码，真正的执行是在resolve方法里面执行的，理清了这层，再来分析源码会省力的多。


let index = 0;

function Promise(fn) {
  this.name = 'promise-' + (++index);
  this.callbacks = [];
  this.data = null;
  this.status = 'pending';
   
  const self = this;

  //  this.then = function (onResolved) {
  //   if (!onResolved) return
  //   self.callbacks.push(onResolved)
  // }

  // setTimeout => timer模块
  // setTimeout机制,resolve中执行回调的逻辑放置到JS任务队列末尾，以保证在resolve执行时，then方法的回调函数已经注册完成. 
  // Javascript执行引擎是单线程的，主线程的语句和方法，会阻塞定时任务的运行，在Javascript执行引擎之外，存在一个任务队列，
  // 当在代码中调用setTimeout()方法时，注册的延时方法会挂到浏览器内核其他模块处理，当延时方法到达触发条件，即到达设置的延时时间时，该模块再将要执行的方法添加至该模块的任务队列中。
  // 这一过程与执行引擎主线程独立，执行引擎在主线程方法执行完毕，到达空闲状态时，才会从该模块的任务队列中顺序提取任务来执行，这期间的时间，可能大于注册任务时设置的延时时间。
  const resolve = function (value) {
    setTimeout(() => {
      console.log('---------status:', self.name, self.status)
      if (self.status !== 'pending')return;
      self.status = 'resolved';
      self.data = value;
      self.callbacks.forEach(callback => callback(value));
    })
  }

  // console.log('=== new promise name:', this.name)
  fn(resolve)
}


Promise.prototype.then = function(onResolved) {
  // console.log('--------onResolved:', this.name , onResolved)
    if (!onResolved) return
    // this.callbacks.push(onResolved)
    const self = this;
    // return this;
    return new Promise(resolve => {
      self.callbacks.push((value) => {
        const x = onResolved(value)
        if (x instanceof Promise) {
          x.then(resolve)
        } else {
          resolve(x)
        }
      })
    })
}


function login() {
  return new Promise(resolve => {
    resolve(true)
    // setTimeout(()=>{
    //   resolve(true)
    // })
  })
}

function getUserId() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(998)
    })
  })
}

function getUserName() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('zhangsan')
    })
  })
}

const p1 = login();
// console.log('---------p1:', p1.name)
// p1.then(() => console.log('------------sb'))
const p2 = p1.then((res) => {console.log('------------then1 res:', res); return getUserId()})
// console.log('-----p2:', p2.name)
p2.then(res => { console.log('------------then2:', res); return getUserName()})
.then(res => {console.log('-----------then3:', res); return 8;})
.then(res => console.log('-----------then4:', res))
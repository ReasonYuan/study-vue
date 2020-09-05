/*
 * @Author: reason
 * @Date: 2020-07-08 13:51:48
 * @LastEditTime: 2020-09-05 18:01:13
 * @FilePath: /study-vue/src/_study/promise/simple.js
 * @Descripttion: 
 */
 
export default {

}

function Promise(fn) {
  var state = 'pending'
  var callbacks = [];
  var value = null;
  this.name = 'sb-' + new Date().getTime();
  const name = this.value;


  this.then = function (onFulfilled) {
    // callbacks.push(onResolved);
    return new Promise(function (resolve) {
      handle({
          onFulfilled: onFulfilled || null,
          resolve: resolve
      });
    });
  }

  const handle = function(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return;
  }
    if(!callback.onFulfilled) {
      callback.resolve(value);
      return;
    }
    var ret = callback.onFulfilled(value);
    callback.resolve(ret);
  }



  const resolve = function (newValue) {
    // value = val;
    console.log(`---------${name} resovel() value:`, value);
    // // callbacks.forEach(cb => cb(value));
    // setTimeout(()=> {
    //   this.callbacks.forEach(cb => cb(val));
    // })
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
          then.call(newValue, resolve);
          return;
      }
    }
    state = 'fulfilled';
    value = newValue;
    setTimeout(function () {
        callbacks.forEach(function (callback) {
            handle(callback);
        });
    }, 0);

  }


  console.log('\n\n-----promise:', this.name, callbacks)
  fn(resolve);
}


function login() {
  return new Promise (resolve => {
    resolve(true);
    // setTimeout(() => {
    //   resolve(998);
    // })
  });
}


function getUserId() {
  return new Promise (resolve => {
    resolve(998);
    // setTimeout(() => {
    //   resolve(998);
    // })
  });
}

// const p = login();
// console.log('----------p:', p);
// const p2 = p.then((val) => { console.log('----------then1:', val); return getUserId()})
// console.log('----------p2:', p2)
// p2.then((val) => console.log('----------then2:', val))

login()
.then((val) => { console.log('----------then1:', val); return getUserId()})
.then((val) => console.log('----------then2:', val))
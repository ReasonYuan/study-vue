/*
 * @Author: reason
 * @Date: 2020-09-07 16:02:27
 * @LastEditTime: 2020-09-08 14:42:13
 * @FilePath: /study-vue/src/_study/design/proxy.js
 * @Descripttion: 代理模式：保护代理、虚拟代理、缓存代理
 */

// ===== 保护代理 =====
// 主体，发送消息
function sendMsg (msg) {
  console.log(msg)
}

// 代理，对消息进行过滤
function proxySendMsg (msg) {
  if (typeof msg === 'undefined') {
    console.log('no msg find')
    return
  }

  msg += ' !!!'
  sendMsg(msg)
}

const msg = '为了部落';
sendMsg(msg)
proxySendMsg();
proxySendMsg(msg);


// ====== 虚拟代理 =====
// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才一次性处理
function debounce(fn, delay) {
  delay = delay || 200;
  let timer = null;
  return function() {
    let arg = arguments;
      // 每次操作时，清除上次的定时器
      clearTimeout(timer);
      timer = null;
      // 定义新的定时器，一段时间后进行操作
      timer = setTimeout(function() {
        fn.apply(this, arg);
      }, delay);
  }
};
let count = 0;
// 主体
function scrollHandle() {
  console.log('---->count:', ++count);
}
// 代理
const proxyScrollHandle = (function() {
  return debounce(scrollHandle, 10);
})();
for(let i = 0; i < 10; i++) {
  proxyScrollHandle()
}

// ====== 缓存代理 =====
// 主体
function add() {
  var arg = [].slice.call(arguments);
  console.log('arguments:', arguments)
  return arg.reduce(function(a, b) {
      return a + b;
  });
}

// 代理
var proxyAdd = (function() {
  var cache = [];
  return function() {
      var arg = [].slice.call(arguments).join(',');
      
      // 如果有，则直接从缓存返回
      if (cache[arg]) {
          return cache[arg];
      } else {
          var ret = add.apply(this, arguments);
          cache[arg] = ret
          return ret;
      }
  };
})();

console.log(
  add(1, 2, 3, 4),
  add(1, 2, 3, 4),
  proxyAdd(10, 20, 30, 40),
  proxyAdd(10, 20, 30, 40)
); // 10 10 100 100
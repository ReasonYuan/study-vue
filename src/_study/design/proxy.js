/*
 * @Author: reason
 * @Date: 2020-09-07 16:02:27
 * @LastEditTime: 2020-09-07 17:27:16
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

  msg += ' ^_^'
  sendMsg(msg)
}

const msg = '为了部落';
sendMsg(msg)
proxySendMsg();
proxySendMsg(msg);


// ====== 虚拟代理 =====

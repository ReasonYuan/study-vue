/*
 * @Author: reason
 * @Date: 2020-09-08 17:39:39
 * @LastEditTime: 2020-09-09 15:25:46
 * @FilePath: /study-vue/src/_study/design/observer.js
 * @Descripttion: 观察者模式
 */

 
const observer = {
  subscribes: [],
  // 订阅
  subscribe: function(cb) {
    if (!cb) return;
    if (this.subscribes.includes(cb)) return;
    this.subscribes.push(cb)
    console.log('有人订阅，总订阅数:', this.subscribes.length)
  },
  // 发布
  publish: function (msg) {
    this.subscribes.forEach(cb => {
      cb(msg)
    });
  },
  // 取消订阅
  remove: function(cb) {
    const index = this.subscribes.indexOf(cb);
    if (index > -1) { 
      this.subscribes.splice(index, 1);
      console.log('有人取消订阅，总订阅数:', this.subscribes.length)
    }
  } 
}
// ==== 测试使用 ====
// 订阅者1
const zsan = (msg) => {
  console.log('---------zsan收到通知:', msg)
}
// 订阅者2
const lisi = (msg) => {
  console.log('---------lisi收到通知:', msg)
}

observer.subscribe(zsan)
observer.subscribe(lisi)
observer.publish.call(observer, '张老师来了')
observer.remove(zsan)
observer.publish.call(observer, '他走了走了')
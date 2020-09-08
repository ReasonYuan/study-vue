/*
 * @Author: reason
 * @Date: 2020-09-08 14:45:24
 * @LastEditTime: 2020-09-08 17:07:05
 * @FilePath: /study-vue/src/_study/design/iterator.js
 * @Descripttion: 迭代器模式
 */

[1,2,3].forEach((item, index, arr) => {
  console.log(item, index, arr)
})


Array.prototype.each = function (callback) {
  if (!callback) return;
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const ary = [];
[1, 2].each((item, idx, array) => {
  console.log(`item: ${item}, index: ${idx}, array: ${array}`)
})


// console.log(Object.prototype.toString.call(ary))
// 外部迭代器
const each = function (array, callback) {
  if (!array || !callback)return;
  for(let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

// 使用
each([1, 5], (item, idx, array) => {
  console.log(`外部迭代：item: ${item}, index: ${idx}, array: ${array}`)
})
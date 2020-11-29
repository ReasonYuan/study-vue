/*
 * @Author: reason
 * @Date: 2020-10-10 10:17:32
 * @LastEditTime: 2020-10-19 15:30:49
 * @FilePath: /study-vue/src/_study/react/test.js
 * @Descripttion: 
 */

 
 
import React from './react'

const div = <div className="hello">hello</div>
console.log('-----div', div)
// babel 转换后：
React.createElement("div", {className: "header"}, "hello")

/*
const array = ['a', 'b', 'c', 'd', 'e', 'f']
const map = {
  name: '张三',
  gender: '男',
  age: 18
}

// for in 遍历的key
console.log('====== in =====')
for (let item in array) {
  console.log('---------array item:', item)
}
console.log('---- map --->')
for (let item in map) {
  console.log('---------map:', item)
}

// for of 只能数组用，用于遍历数组
console.log('\n====== of =====')
for (let item of array) {
  console.log('---------array item:', item)
}
console.log('---- map --->')
for (let item of map) {
  console.log('---------map item:', item)
}
*/

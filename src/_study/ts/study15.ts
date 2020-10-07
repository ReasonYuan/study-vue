/*
 * @Author: reason
 * @Date: 2020-10-07 10:51:51
 * @LastEditTime: 2020-10-07 10:58:49
 * @FilePath: /study-vue/src/_study/ts/study15.ts
 * @Descripttion: 枚举 Enum
 */

 // 初级写法
function getServe (status: number) {
  if (status === 0) {
    return 'java'
  } else if (status === 1) {
    return 'C'
  } else if (status === 2) {
    return 'python'
  }
}
console.log('=====result:', getServe(0))


// 中级写法
const Status = {
  'JAVA': 0,
  'C': 1,
  'PYTHON': 2
}
function getServe2 (status: number) {
  if (status === Status.JAVA) {
    return 'java'
  } else if (status === Status.C) {
    return 'C'
  } else if (status === Status.PYTHON) {
    return 'python'
  }
}
console.log('=====result:', getServe2(Status.JAVA))


// 高级写法：枚举(默认值从0开始)
enum Status1 {
  JAVA, C, PYTHON,
  PHP = 5 // ===> 自定义值
}


function getServe3 (status: number) {
  if (status === Status1.JAVA) {
    return 'java'
  } else if (status === Status1.C) {
    return 'C'
  } else if (status === Status1.PYTHON) {
    return 'python'
  }
}
console.log('=====result:', getServe2(Status1.JAVA))
/*
 * @Author: reason
 * @Date: 2020-08-25 15:06:17
 * @LastEditTime: 2020-08-25 15:13:01
 * @FilePath: /study-vue/src/_study/ts/study5.ts
 * @Descripttion: 元组
 */


// 数组
const girl0: (string | number)[] = ['nice', 'teacher', 28];
// 元组
const girl2: [string, string, number] = ['nice', 'teacher', 28]; // 换位置会报数据错误
// CSV (以前的一种类型)
const girls: [string, string, number][] = [
  ['nice', 'teacher', 28],
  ['good', 'teacher', 28],
  ['better', 'teacher', 18],
] 

// 现在基本为object
const g = { name: 's', job: 's', age: 10 }
/*
 * @Author: reason
 * @Date: 2020-10-07 11:00:22
 * @LastEditTime: 2020-10-07 11:10:00
 * @FilePath: /study-vue/src/_study/ts/study16.ts
 * @Descripttion: 泛型 <>
 */

// 泛型  <>指定类型
function join<NM> (first : NM, second: NM) {
  return `${first}${second}`
}
join(1, 2)
join('163', '.com')
join<string>('163', '192')

// 泛型中数组的使用 - 1
function myFun<ANY> (params: ANY[]) {
  return params
}
myFun<string>(['sb']) // 必须是字符串的数组

// 泛型中数组的使用 - 2
function myFun2<ANY> (params: Array<ANY>) {
  return params
}
myFun2<string>(['sb']) // 必须是字符串的数组


// 一般泛型用T来代表
function myFun3<T> (params: Array<T>) {
  return params
}


// 多个泛型定义
function join2<T, P> (first: T, second: P) {
  return `${first}${second}`
}
join2<string, number>('sb', 2)
/*
 * @Author: reason
 * @Date: 2020-10-07 14:19:39
 * @LastEditTime: 2020-10-07 14:37:08
 * @FilePath: /study-vue/src/_study/ts/TSTest/src/page.ts
 * @Descripttion: 
 */

declare var $: any // 解决下面 $ 报错找不到的问题

const teacher: string = '悟空'
console.log(teacher)

$(function(){
  alert('sb')
})
/*
 * @Author: reason
 * @Date: 2020-11-02 14:13:22
 * @LastEditTime: 2020-11-02 14:14:27
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/hooks/useNowTime.ts
 * @Descripttion: 
 */

import { ref } from "vue"

const nowTime = ref('00:00:00')
const getNowTime = () => {
  const now = new Date()
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  nowTime.value = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
  setTimeout(getNowTime, 1000);
}

export { nowTime, getNowTime }
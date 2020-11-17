<!--
 * @Author: reason
 * @Date: 2020-10-07 16:19:16
 * @LastEditTime: 2020-11-17 14:12:02
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/components/Timer.vue
 * @Descripttion: 模块化
-->


<template>
  <div>{{nowTime}}</div>
  <div><button @click="getNowTime">计时开始</button></div>
</template>

<script lang="ts">
// ===== reactive =====
// import { ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered, watch } from "vue"
// import { ref } from "vue"
import {nowTime, getNowTime} from '../hooks/useNowTime'

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "Timer",
  setup() {
    return { nowTime, getNowTime }
  },
}

</script>
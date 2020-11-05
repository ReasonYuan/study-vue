<!--
 * @Author: reason
 * @Date: 2020-11-02 14:20:29
 * @LastEditTime: 2020-11-05 17:09:13
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/components/RadomGirl.vue
 * @Descripttion: 远程获取数据，随机出现美女
-->

<template>
  <h3>欢迎光临美女峡谷</h3>
  <div>系统将随机选择一位美女为您服务:</div>
  <div v-if="loading">Loading...</div>
  <img v-if="loaded" :src="result.imgUrl" />
  <modal />
</template>

<script lang="ts">

// ===== reactive =====
// import { ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered, watch } from "vue"
import useUrlAxios from '../hooks/useURLAxios'
import modal from './Modal.vue'

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "Timer",
  components: { modal },
  setup() {
    const { result, loading, loaded } = useUrlAxios('https://apiblog.jspang.com/default/getGirl')
    return { result, loading, loaded }
  }
}
</script>
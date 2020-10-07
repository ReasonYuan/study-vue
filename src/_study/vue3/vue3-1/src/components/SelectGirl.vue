<!--
 * @Author: reason
 * @Date: 2020-10-07 16:19:16
 * @LastEditTime: 2020-10-07 16:23:27
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/components/SelectGirl.vue
 * @Descripttion: 
-->
<template>
  <div>
  <h2>Hello World</h2>
  <div>
    <button v-for="(item, index) in girls" v-bind:key="index" @click="() => selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>您选择了 {{selectGirl}} 为你服务</div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "SelectGirl",
  setup() {
    const girls = ref(['刘亦菲', '佟亚丽'])
    const selectGirl = ref('');
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index]
    }
    return {
      girls, selectGirl, selectGirlFun
    }
  }
})
</script>
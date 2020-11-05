<!--
 * @Author: reason
 * @Date: 2020-11-05 17:02:28
 * @LastEditTime: 2020-11-05 17:17:18
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/components/Modal.vue
 * @Descripttion: Teleport - 瞬移组件，解决问题：1、逻辑干扰；2、样式混乱
-->
<template>
  <teleport to="#modal">
    <div id="center">
      <h2>Welcome</h2>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
   name: "modal",
}
</script>

<style scoped>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>

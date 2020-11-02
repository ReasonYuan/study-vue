<!--
 * @Author: reason
 * @Date: 2020-10-07 15:36:40
 * @LastEditTime: 2020-11-02 14:00:25
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/App.vue
 * @Descripttion: 
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <SelectGirl /> -->
    <Content />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import SelectGirl from './components/SelectGirl.vue';
import Content from './components/Timer.vue'

@Options({
  components: {
    // HelloWorld,
    SelectGirl,
    Content
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--
 * @Author: reason
 * @Date: 2020-10-07 16:19:16
 * @LastEditTime: 2020-10-07 16:38:58
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/components/SelectGirl.vue
 * @Descripttion: setup 和 ref 函数
-->
<template>
  <div>
  <h2>Hello World</h2>
  
  <!--
  <div>
    <button v-for="(item, index) in girls" v-bind:key="index" @click="() => selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>您选择了 {{selectGirl}} 为你服务</div>
  </div>
  -->

  <!-- reactive -->
  <!-- <div>
    <button v-for="(item, index) in data.girls" v-bind:key="index" @click="() => data.selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>您选择了 {{data.selectGirl}} 为你服务</div>
  </div> -->

  <!-- toRefs -->
  <div>
    <button v-for="(item, index) in girls" v-bind:key="index" @click="() => selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>您选择了 {{selectGirl}} 为你服务</div>
  </div>


  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from "vue"
// export default defineComponent({
//   name: "SelectGirl",
//   setup() {
//     const girls = ref(['刘亦菲', '佟亚丽'])
//     const selectGirl = ref('');
//     const selectGirlFun = (index: number) => {
//       selectGirl.value = girls.value[index]
//     }
//     return {
//       girls, selectGirl, selectGirlFun
//     }
//   }
// })


// ===== reactive =====
import { reactive, toRefs } from "vue"

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "SelectGirl",
  setup() {
    const data: DataProps = reactive({
      girls: ['刘亦菲', '佟亚丽'],
      selectGirl: '',
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    // return { data }

    // ===== toRefs =====
    const refData = toRefs(data)
    return { ...refData }
  }
}

</script>
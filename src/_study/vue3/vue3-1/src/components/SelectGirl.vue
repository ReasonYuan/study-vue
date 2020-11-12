<!--
 * @Author: reason
 * @Date: 2020-10-07 16:19:16
 * @LastEditTime: 2020-11-12 08:53:35
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
    <button @click="overAction">确认</button>
    <div>{{overText}}</div>
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
import { ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered, watch } from "vue"

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "SelectGirl",
  setup() {
    console.log('1 - 开始创建组件：setup')
    const data: DataProps = reactive({
      girls: ['刘亦菲', '佟亚丽'],
      selectGirl: '',
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    });
    // return { data }

    // ===== 生命周期钩子函数 =====
    /*
    onBeforeMount(() => {
      console.log('2 - 组件挂载到页面之前执行：onBeforeMount')
    });
    onMounted(() => {
      console.log('3 - 组件挂载到页面之后执行：onMounted')
    });
    onBeforeUpdate(() => {
      console.log('4 - 组件更新之前执行：onBeforeUpdate')
    });
    onUpdated(() => {
      console.log('5 - 组件更新之后执行：onUpdated')
    });

    // ===== 状态跟踪 =====
    // onRenderTracked((event: any) => {
    //   console.log('状态跟踪钩子函数 -----> ', event)
    // });
    // onRenderTriggered((event: any) => {
    //   console.log('单一状态跟踪钩子函数 -----> ', event)
    // })
    */

    // ===== toRefs =====
    const refData = toRefs(data)
    const overText = ref('美人集')
    const overAction = () => {
      overText.value = '确认完成：' + data.selectGirl
    }

    watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log('-------new:', newValue, oldValue)
      document.title = overText.value
    })

    return { 
      ...refData,
      overText,
      overAction
    }
  },

  // ===== vue2的生命周期 =====
  /*
  beforeCreate() {
    console.log('#1.1 - 组件创建之前：beforeCreate')
  },
  beforeMount() {
    console.log('#2.1 - 组件挂载到页面之前执行：beforeMount')
  },
  mounted() {
    console.log('#3.1 - 组件挂载到页面之后执行：mounted')
  },
  beforeUpdate() {
    console.log('#4.1 - 组件更新之前执行：beforeUpdate')
  },
  updated() {
    console.log('#5.1 - 组件更新之后执行：updated')
  }
  */
  // beforeDestroy => onBeforedUnmount
  // destroyed => onUnmounted
}

// 生命周期
// setup
// beforeCreate created

// onBeforeUnmount()    // 组件卸载之前执行 <= beforeDestroy
// onUnmounted()        // 组件销毁之后执行 <= destroyed
// onActivated()        // 组件激活时，在组件<keep-alive></keep-alive>内存在
// onDeactivated()      // 组件未激活时（到后台时），在组件<keep-alive></keep-alive>内存在
// onErrorCaptured()    // 捕获子组件异常时

// onRenderTracked()    // 状态跟踪：每一个数据
// onRenderTriggered()  // 状态触发：只跟踪一个值
</script>
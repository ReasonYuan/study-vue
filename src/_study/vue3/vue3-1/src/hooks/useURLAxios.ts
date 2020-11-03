/*
 * @Author: reason
 * @Date: 2020-11-02 14:24:12
 * @LastEditTime: 2020-11-02 14:28:03
 * @FilePath: /study-vue/src/_study/vue3/vue3-1/src/hooks/useURLAxios.ts
 * @Descripttion: 远程获取数据
 */


import { ref } from 'vue'
import axios from 'axios'

function useUrlAxios (url: string) {
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios.get(url).then(res => {
    loaded.value = true
    result.value = res.data
  }).catch (e => {
    error.value = e
  }).finally(() => {
    loading.value = false
  })

  return { result, loading, loaded, error }
}

export default useUrlAxios
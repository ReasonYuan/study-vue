import Vue from 'vue'
import App from './App.vue'
import Test from './_study/promise/simple4'

Test

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
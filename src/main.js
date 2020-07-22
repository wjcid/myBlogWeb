import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import components from '@/utils/components.js'
import Highlight from '@/assets/js/highlight.js'; // 代码高亮库
import axios from '@/axiosConfig'
Vue.prototype.$axios=axios
Vue.use(Highlight);

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(components)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

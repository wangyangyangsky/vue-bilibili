import Vue from 'vue'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import http from './http'

// import Vant from 'vant'

import { Toast, Field, Icon } from 'vant'

Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.config.productionTip = false

Vue.use(Field)
Vue.use(Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

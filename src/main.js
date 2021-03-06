import Vue from 'vue'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import http from './http'
import Vant from 'vant'
import '@/assets/style.css'

// import { Toast } from 'vant'

// import { Toast, Field, Icon, Uploader, Dialog, ActionSheet, Cell, Calendar, Tab, Tabs, List } from 'vant'

Vue.prototype.$http = http
// Vue.prototype.$msg = Toast
Vue.config.productionTip = false

// Vue.use(Field)
// Vue.use(Icon)
// Vue.use(Uploader)
// Vue.use(Dialog)
// Vue.use(ActionSheet)
// Vue.use(Cell)
// Vue.use(Calendar)
// Vue.use(Tab)
// Vue.use(Tabs)
// Vue.use(List)
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

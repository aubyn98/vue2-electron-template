import './common/pollify'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// common -------------------
import plugins from 'plugins'
import 'styles'
// --------------------------
Vue.config.productionTip = false
Vue.use(plugins)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
import store from './store/store'

//import './assets/styles/page.css'
import './assets/styles/reset.styl'
import './assets/incofont/iconfont.css'
import './assets/styles/movie-item.css'

import './mixins/scroll'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

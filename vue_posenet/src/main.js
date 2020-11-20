import Vue from 'vue'
import router from "./router";
import App from "./App";
import 'chart.js'
import 'hchs-vue-charts'
import vueMoment from 'vue-moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store'

import "./common/plugins/bootstrap-vue";

Vue.use(window.VueCharts)
Vue.use(vueMoment)
Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

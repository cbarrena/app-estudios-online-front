import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://proyecto-agiles-grupo5.herokuapp.com/api/v1'
Vue.prototype.$axios = axios;
Vue.prototype.$islogged = 'no';
Vue.prototype.$idUsuario = 0;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

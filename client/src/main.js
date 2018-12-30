import Vue from 'vue'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'
import requests from './requests/api'

Vue.config.productionTip = false;
Vue.use(VueAxios, requests());

new Vue({
  render: h => h(App),
}).$mount('#app')

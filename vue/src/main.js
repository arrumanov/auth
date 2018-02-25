import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'

Vue.use(VueCookie)

new Vue({
  el: '#app',
  render: h => h(App)
})

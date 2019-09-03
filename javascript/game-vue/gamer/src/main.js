// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http/index'


Vue.config.productionTip = false
Vue.use(api)
// function getUrlKey(name) {
//   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
// }
//Cookies.set('markToken',getUrlKey('code'))
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

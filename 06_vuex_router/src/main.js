import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
// /index.js 생략 가능

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  // reneder: function (createElement) {
  //   return createElement(App)
  // }
})
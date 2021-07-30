import Vue from "vue";
import VueRouter from "vue-router";
import Home from './Home.vue'
import About from './About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 페이지들
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})
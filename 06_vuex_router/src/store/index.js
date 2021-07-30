import Vue from 'vue'
import Vuex from 'vuex'
import message from './message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message
  }
})
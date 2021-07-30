export default {
  // 모듈로 쓸 때는 namespaced를 적어야 한다
  namespaced: true,
  // data
  state: () => ({
    msg: 'Hello Vuex!'
  }),
  // computed
  getters: {
    reversedMsg(state) {
      return state.msg.split('').reverse().join('')
    }
  },
  // 변이 가능
  mutations: {
    updateMsg(state, newMsg) {
      state.msg = newMsg
    }
  },
  // methods 비동기로 동작한다. 동작만 가능 변이 불가
  actions: {
    reverseMsg({ state, commit }) {
      commit('updateMsg', state.msg.split('').reverse().join(''))
    }
  }
}
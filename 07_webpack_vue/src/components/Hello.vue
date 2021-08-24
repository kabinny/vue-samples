<template>
  <h1
    id="hello"
    class="hello"
    title="hello"
    @click="reverseMsg">
    {{ msg }}
  </h1>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  computed: { // 데이터를 가져올 때
    msg() {
      return this.$store.state.message.msg
    },
    reversedMsg() {
      return this.$store.getters['message/reversedMsg']
    }
  },
  methods: { // 동작을 가져올 때
    updateMsg() {
      this.$store.commit('message/updateMsg', '1234')
    },
    reverseMsg() {
      this.$store.dispatch('message/reverseMsg')
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  $color: salmon;
  background-color: $color;
  display: flex; 
}
</style>
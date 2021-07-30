<template>
  <div>
    <h1 @click="updateMsg">{{ msg }}</h1>
    <h2>{{ reversedMsg }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      // 스토어.스테이트.모듈이름.스테이트(데이터)이름
      return this.$store.state.message.msg
    },
    reversedMsg() {
      return this.$store.getters['message/reversedMsg']
    }
  },
  methods: {
    updateMsg() {
      this.$store.commit('message/updateMsg', 'new message')
    },
    reverseMsg() {
      // index.js 에 등록한 모듈 이름/액션이름, 
      this.$store.dispatch('message/reverseMsg')
    }
  }
}
</script>

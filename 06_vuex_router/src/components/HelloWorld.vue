<template>
  <div>
    <h1 @click="updateMsg('parameter here')">{{ msg }}</h1>
    <h2>{{ reversedMsg }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('message', [ // 모듈 이름
      'msg' // 가져올 상태들
    ]),
    ...mapGetters('message', [
      'reversedMsg'
    ])
  },
  methods: {
    ...mapMutations('message', [
      'updateMsg'
    ]),
    ...mapActions('message', [
      'reverseMsg'
    ])
  }
}
</script>

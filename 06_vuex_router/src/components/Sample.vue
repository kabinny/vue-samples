<template>
  <h2>Sample: {{ reversedMsg }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('message', [
      'reversedMsg'
    ])
  }
}
</script>
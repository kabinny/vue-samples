<template>
  <div>
    <hello />
    <router-view />
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue'

export default {
  components: {
    Hello
  }
}
</script>
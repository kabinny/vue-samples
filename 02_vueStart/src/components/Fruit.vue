<template>
  <li class="list-item">
    {{ fruitName }}
  </li>
</template>

<script>
export default {
  props: {
    fruitName: String
  }
}
</script>

<style scoped>
  li {
    color: salmon;
  }
  li::after {
    content: '!';
  }
</style>>

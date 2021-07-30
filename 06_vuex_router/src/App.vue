<template>
  <div>
    <!-- <hello-world></hello-world>
    <sample></sample> -->

    <my-header></my-header>

    <!-- 페이지가 바뀌면 이 부분만 바뀌게 된다. -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sample from './components/Sample.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  components: {
    HelloWorld,
    Sample,
    MyHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <button @click="handler();reverseMsg()">Click me!</button>
    <h1 v-if="isShow">
      {{ msg }}
    </h1>
    <h2>{{ reversedMsg }}</h2>
    <ul>
      <li v-for="fruit in fruits" v-bind:key="fruit">
        {{ fruit }}
      </li>
    </ul>
    <ul>
      <Fruit v-for="fruit in fruits" 
             :key="fruit" 
             :fruit-name="fruit" />
    </ul>
  </div>
</template>

<script>
import Fruit from './components/Fruit.vue'

export default {
  components: {
    Fruit
  },
  data () {
    return {
      msg: 'Hello Vue?!',
      reversedMsg: '',
      isShow: true,
      fruits: [
        'Apple', 'Banana', 'Cherry', 'Mango'
      ]
    }
  },
  beforeCreate() {
    console.log('beforeCreate:', this.msg)
  },
  created() {
    console.log('created:', this.msg)
  },
  beforeMount() {
    console.log('beforeMount:', document.querySelector('button'))
  },
  mounted() {
    console.log('mounted:', document.querySelector('button'))
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
    },
    reverseMsg() {
      this.reversedMsg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

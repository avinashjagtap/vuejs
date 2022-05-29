<template>
  <p>Hi👋</p>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  setup(){
    onMounted(() => console.log(`I'm mounted`))
    onUnmounted(() => console.log(`I'm unmounted`))
    console.log(`I'm created`)
  }
}
</script>
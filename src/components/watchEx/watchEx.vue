<template>
  <button @click="count++">+1</button>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'

export default {
  setup(){
    const count = ref(0)
    
    watch(count, () => {
      console.log('count is updated')
    })

    watchEffect(() => {
      console.log(`count is ${count.value}`)
    })

    return { count }
  }
}
</script>
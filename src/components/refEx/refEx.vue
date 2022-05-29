<template>
  <p>{{count}}</p>
  <button @click="count++">+1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const count = ref(0);
    setInterval(() => count.value++, 5000)
    return { count }
  }
}
</script>
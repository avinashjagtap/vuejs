<template>
  <p>{{human.name}}</p>
  <p>{{human.age}}</p>
  <button @click="human.age++">Increment</button>
</template>

<script>
import { reactive } from 'vue';
// , toRefs } from 'vue'

export default {
  setup(){
    const human = reactive({
      name: 'abc',
      age: 29
    })

    setInterval(() => human.age++, 5000)

    return { human }

    
    //return { ...toRefs(human) }
    //const { name, age } = toRefs(human)
    //return { name, age }
  }
}
</script>
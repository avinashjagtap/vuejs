<template>
  <p>Addition</p>
  <input v-model="a"/>
  <input v-model="b"/>
  <p>Addition: {{c}} </p>
  <p>---------</p>
  <input v-model="me.firstname"/>
  <input v-model="me.lastname"/>
  <p>{{me.fullname}}</p>
</template>

<script>
import { ref, computed, reactive } from 'vue'

export default {
  setup(){
    const a = ref(4)
    const b = ref(3)

    const c = computed(() => {
      return Number(a.value) + Number(b.value)
    })

    const me = reactive({
      firstname: 'abc ',
      lastname: 'xyz',
      fullname: computed(() => me.firstname + me.lastname)
    })

    return { a, b, c, me }
  }
}
</script>
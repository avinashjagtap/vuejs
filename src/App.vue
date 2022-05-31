<template>
  <button @click="show = true">Login</button>
  <login-popup v-if="show" />
</template>

<script>
  // import LoginPopup from '@/components/LoginPopup.vue'
  import { defineAsyncComponent, ref } from 'vue'
  export default {
    // components: { LoginPopup },
    components: {
      "LoginPopup" : defineAsyncComponent(() => import('./components/LoginPopup.vue'))
    },
    setup(){
      const show = ref(false)
      return { show }
    }
  }
</script>

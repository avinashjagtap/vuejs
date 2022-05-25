<template>
  <div class="nav">
      <router-link to="/home/Team">Home</router-link>
      <router-link to="/conditional">Conditional</router-link>
      <router-link to="/looping">Looping</router-link>
  </div>
  <router-view />
  <div class="footer">
    <img v-bind:src="imgURL" v-bind:alt="imgDescription" width="150" height="100">
  </div>
  <!-- interating component -->
  <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import image from './assets/test.png';

export default {
  name: 'App',
  data() {
        return {
            product: 'Vue 3 Course!',
            imgURL: image,
            imgDescription: 'An image with a desktop computer',
        }
    },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav, .footer {
  background-color: bisque;
}

.nav a {
  width: 50px;
  margin-right: 10px;
}
</style>

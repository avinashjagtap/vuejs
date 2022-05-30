<template>
  <div id="app">
    <hello-world-props msg="Welcome to Your Vue.js App"/>
    <hello-world-slots><h2>Welcome to Your Vue.js App</h2></hello-world-slots>
    <NamedSlotExample>
      <template v-slot:main>
        <p>Custom Main</p>
      </template>
      <template v-slot:aside>
        <p>Custom Aside</p>
      </template>
      <div>
        <p>Custom Content</p>
      </div>
    </NamedSlotExample>
  </div>
</template>

<script>
import HelloWorldProps from './components/HelloWorldProps.vue'
import HelloWorldSlots from './components/HelloWorldSlots.vue'
import NamedSlotExample from './components/NamedSlotExample.vue'

export default {
  name: 'App',
  components: {
    HelloWorldProps,
    HelloWorldSlots,
    NamedSlotExample
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
</style>

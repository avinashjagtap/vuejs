<template>
  <div>
    <h3>use key to reset input fields</h3>
    <button @click="foo = !foo">toggle</button>
    <div class="field" v-if="foo">
      foo
      <input type="text">
    </div>
    <div class="field" v-else>
      bar
      <input type="text">
    </div>
    <h3>Event Handling</h3>
    <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
</template>

<script>
export default {
  name: 'ConditionalDemoPage',
  data() {
    return {
      foo :true,
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  display: block;
}
button {
  margin-bottom: 10px;
}
.field {
  margin: 20px;
}
a {
  color: #42b983;
}
</style>

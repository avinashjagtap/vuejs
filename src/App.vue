<template>
  <div>
      <div>{{ message }}</div>
      <div>Count: {{ $store.state.count }}</div>
      <button-counter />
    </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter';
export default {
  name: 'App',
  components: {
    ButtonCounter
  },
  data: function () {
    return {
      message: 'Hello Vue!'
    }
  },
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

main{
  border: 1px solid rgba(0, 0, 0, 0.432);
  margin: 5px 0;
  padding: 15px;
  font-size: 1.5em;
}

main p{
  font-size: 1.4em;
}

main button{
  font-size: inherit;
}

footer{
  position: absolute;
  bottom: 0;
  font-size: 0.8rem;
}
</style>

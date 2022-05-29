<template>
  <header>
    <button @click="ex = 'ref'">ref</button>
    <button @click="ex = 'reactive'">reactive</button>
    <button @click="ex = 'computed'">computed</button>
    <button @click="ex = 'watch'">watch</button>
    <button @click="ex = 'lifecycle'">lifecycle</button>
    <button @click="ex = 'global'">global</button>
    <button @click="ex = 'reuse'">re-use</button>
    <button @click="ex = 'readonly'">readonly</button>
    <button @click="ex = 'templateref'">templateRef</button>
  </header>
  <main>
    <ref-ex v-if="ex === 'ref'"/>
    <reactive-ex v-else-if="ex === 'reactive'"/>
    <computed-ex v-else-if="ex === 'computed'"/>
    <watch-ex v-else-if="ex === 'watch'"/>
    <lifecycle-ex v-else-if="ex === 'lifecycle'"/>
    <shop-ex v-else-if="ex === 'global'"/>
    <div v-else-if="ex === 'reuse'">
      <likes-button/>
      <heart-button/>
    </div>
    <readonly-ex v-else-if="ex === 'readonly'"/>
    <template-ref-ex v-else-if="ex === 'templateref'"/>
  </main>
  <footer>
    <p>
      Composition API Demo
    </p>
  </footer>
</template>

<script>
import { ref } from 'vue'
import RefEx from '@/components/refEx/refEx.vue';
import ReactiveEx from '@/components/reactiveEx/reactiveEx.vue';
import computedEx from '@/components/computedEx/computedEx.vue';
import watchEx from '@/components/watchEx/watchEx.vue';
import lifecycleEx from '@/components/lifecycleEx/lifecycleEx.vue';
import shopEx from '@/components/global/shopEx.vue';
import heartButton from '@/components/reuse/HeartButton.vue';
import likesButton from '@/components/reuse/LikesButton.vue';
import readonlyEx from '@/components/readonlyEx/readonlyEx.vue';
import templateRefEx from '@/components/templateRef/templateRefEx.vue';
export default {
  name: 'App',
  components: {
    RefEx,
    ReactiveEx,
    computedEx,
    watchEx,
    lifecycleEx,
    shopEx,
    heartButton,
    likesButton,
    readonlyEx,
    templateRefEx
  },
  setup(){
    const ex = ref('ref')
    return { ex }
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

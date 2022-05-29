<template>
  <span ref="butterfly">🦋</span>
  <button @click="capture">Catch</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const butterfly = ref(null)

    const capture = () => {
      butterfly.value.textContent = '💀'
    }

    return { butterfly, capture }
  }
}
</script>

<style scoped>
span{
  position: absolute;
  animation: move 5s infinite alternate;
}

@keyframes move{
  0%{
    left: 25px;
    top: 15px;
  }
  10%{
    left: 295px;
    top: 50px;
  }  
  20%{
    left: 200px;
    top: 421px;
  }  
  30%{
    left: 11px;
    top: 321px;
  }  
  40%{
    left: 84px;
    top: 111px;
  }  
  50%{
    left: 222px;
    top: 222px;
  }     
  60%{
    left: 123px;
    top: 123px;
  }  
  70%{
    left: 321px;
    top: 100px;
  }  
  80%{
    left: 27px;
    top: 240px;
  }  
  90%{
    left: 79px;
    top: 74px;
  }         
  100%{
    left: 123px;
    top: 74px;
  }
}
</style>
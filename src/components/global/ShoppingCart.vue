<template>
  <p>Total Amount = {{total}}</p>
</template>

<script>
import { total } from './items'

export default {
  setup(){
    return { total }
  }
}
</script>
<template>
	<p>Window height: {{windowHeight}}</p>
</template>

<script>
import { windowHeight } from './windowHeight';
export default {
  setup(){
    // windowHeight.value = 999999 // fails
    return { windowHeight }
  }
}
</script>
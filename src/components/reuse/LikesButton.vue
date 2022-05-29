<template>
	<div>
		{{likes}}👍
		<button @click="likes++">Like</button>
		<button @click="superLike">🖖✌👌🤙</button>
	</div>
</template>

<script>
import { useLikes } from './useLikes';
export default {
  setup(){
    const { likes, superLike } = useLikes();
    return { likes, superLike }
  }
}
</script>
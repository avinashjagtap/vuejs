<template>
  <button @click="addItemToCart({price: 20})">Buy icecream🍦</button>
  <button @click="addItemToCart({price: 100000000})">Buy a house🏡</button>
  <shopping-cart/>
</template>

<script>
import ShoppingCart from './ShoppingCart'
import { addItemToCart } from './items'

export default {
  setup(){
    return { addItemToCart }
  },
  components: { ShoppingCart }
}
</script>
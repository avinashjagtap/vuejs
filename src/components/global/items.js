import { ref, computed } from 'vue'

const cart = ref([])

const total = computed(() => cart.value.reduce((acc,item) => acc + item.price, 0))

const addItemToCart = (item) => cart.value.push(item)

export { total, addItemToCart }
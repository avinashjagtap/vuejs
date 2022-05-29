import { ref, readonly } from 'vue'

const windowHeight = ref(window.innerHeight)

window.addEventListener('resize',  () => windowHeight.value = window.innerHeight);

const readonlyWindowHeight = readonly(windowHeight)

export { readonlyWindowHeight as windowHeight }
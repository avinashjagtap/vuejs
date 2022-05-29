import { ref } from "vue"

const useLikes = () => {
    const likes = ref(0)
    const superLike = () => likes.value += 1000;
    return { likes, superLike }
}

export { useLikes }
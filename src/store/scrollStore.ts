import { ref, onMounted, onUnmounted } from 'vue'

export default function useScrollStore() {

    const x = ref(0)
    const y = ref(0)

    const update = () => {
      y.value = window.scrollY;
    }

    onMounted(() => window.addEventListener('scroll', update))
    onUnmounted(() => window.removeEventListener('scroll', update))

    return { x, y }
}
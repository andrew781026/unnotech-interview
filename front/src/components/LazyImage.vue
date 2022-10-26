<template>
  <img ref="imageRef" src="https://fakeimg.pl/800x600/"
       :data-src="`https://picsum.photos/800/600/?random=${ isbn }`" alt="圖片">
</template>

<script lang="ts">
import {onBeforeUnmount, onMounted, Ref, ref} from 'vue'

const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target instanceof HTMLImageElement) {
      const isIntersecting = entry.isIntersecting
      const dataSrc = entry.target.dataset.src
      const isReal = entry.target.dataset.isReal
      const needUpdateSrc = isIntersecting && dataSrc && !isReal
      if (needUpdateSrc) {
        entry.target.src = dataSrc
        entry.target.dataset.isReal = 'true'
      }
    }
  })
})

const useImage = (imageRef: Ref<HTMLImageElement>) => {
  onMounted(() => {
    // 開始觀察
    imgObserver.observe(imageRef.value)
  })

  onBeforeUnmount(() => {
    // 停止觀察
    imgObserver.unobserve(imageRef.value)
  })
  return imgObserver
}

export default {
  name: 'LazyImage',
  props: {
    isbn: String
  },
  setup() {
    const imageRef = ref(new Image())

    useImage(imageRef)
    return {imageRef}
  }
}
</script>

<style scoped>

</style>

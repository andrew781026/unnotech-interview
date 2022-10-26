<template>
  <div class="detail-list">
    <img :src="`https://picsum.photos/800/600/?random=${book.isbn}`" alt="圖片">
    <div class="info">
      <h3 class="title">{{ book.title }}</h3>
      <h3 class="author">{{ book.author }}</h3>
      <h3 class="date">Published on {{ book.published }}</h3>
      <h4 class="description">{{ book.description }}</h4>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {getSingleBook, singleBook} from './useBook'

export default defineComponent({
  name: 'DetailView',
  setup() {
    const route = useRoute()
    onMounted(async () => {
      await getSingleBook(route.params.id, singleBook.value)
    })
    return {book: singleBook}
  }
})
</script>

<style scoped>
</style>

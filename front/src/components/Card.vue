<template>
  <div class="card">
    <LazyImage :isbn="book.isbn"/>
    <div class="info">
      <h3 class="title" :title="book.title">{{ book.title }}</h3>
      <h4 class="author" :title="book.author">{{ book.author }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LazyImage from '@/components/LazyImage.vue'

export default defineComponent({
  name: 'PureCard',
  props: {
    book: Object
  },
  components: {
    LazyImage
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>

<template>
  <div class="card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-110 transition-all">
    <figure class="h-64">
      <img class="h-full object-cover" :src="book.image || defaultImage" alt="圖片" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{book.title}}</h2>
      <span class="text-xs">{{book.author}}</span>
      <span class="font-bold self-start whitespace-pre-line line-clamp-3">
        {{book.description}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import defaultImage from '../assets/icons/books.svg'

export default defineComponent({
  name: 'PureCard',
  props: {
    book: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      defaultImage
    }
  }
})
</script>

<style scoped>
</style>

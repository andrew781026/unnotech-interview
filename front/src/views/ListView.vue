<template>
  <div class="list">
    <div class="book-list">
      <Card v-for="book in bookList" :key="book.id" :book="book" @click="viewDetail(book)"></Card>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Card from '@/components/Card.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import {bookList, setSingleBook, useBook, listAllBooks} from './useBook'
import {useRouterCustom} from './useMyRoute'

export default defineComponent({
  name: 'ListView',
  setup() {
    useBook()
    const {toViewPage} = useRouterCustom()

    const viewDetail = book => {
      setSingleBook(book)
      toViewPage(book.id)
    }

    return {bookList, getMoreBooks: listAllBooks, viewDetail}
  },
  components: {
    Card,
    PrimaryButton
  }
})
</script>

<style scoped>
.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  justify-content: center;
}
</style>

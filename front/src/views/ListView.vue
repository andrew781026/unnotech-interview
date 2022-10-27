<template>
  <div class="list">
    <div class="book-list">
      <Card v-for="book in bookList" :key="book.id" :book="book" @click="viewDetail(book)"></Card>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import Card from '@/components/Card.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import {bookList, listAllBooks, setSingleBook} from '../controllers/useBook'
import {useRouterCustom} from '../controllers/useMyRoute'

export default defineComponent({
  name: 'ListView',
  setup() {
    onMounted(() => listAllBooks())

    const {toViewPage} = useRouterCustom()

    const viewDetail = book => {
      setSingleBook(book)
      toViewPage(book.id)
    }

    return {bookList, viewDetail}
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

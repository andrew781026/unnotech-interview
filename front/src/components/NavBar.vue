<template>
  <nav class="navbar px-8 flex border-b-2 border-gray-200 sticky">
    <SvgIcon
      name="back"
      class="cursor-pointer"
      v-if="showBack"
      :size="24"
      @click="goBack()"
    />
    <div class="flex-1 justify-center bg-base-100">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
    </div>
    <SvgIcon
      name="plus"
      class="text-accent cursor-pointer"
      :size="24"
      v-if="isListPage"
      @click="toAddPage()"
    />
    <SvgIcon
      name="edit"
      class="text-accent cursor-pointer"
      :size="24"
      v-else-if="isViewPage"
      @click="toEditPage(book.id)"
    />
  </nav>
</template>

<script>
import {computed, defineComponent, onMounted} from 'vue'
import {getSingleBook, singleBook} from '../views/useBook.ts'
import {useRouterCustom} from '../views/useMyRoute.ts'
import {useRoute} from 'vue-router'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const route = useRoute()
    const {
      toListPage,
      toViewPage,
      toAddPage,
      toEditPage,
      isViewPage,
      isAddPage,
      isListPage,
      isEditPage
    } = useRouterCustom()

    const showBack = computed(() => route.name !== 'list')
    const goBack = () => {
      if (isViewPage.value || isAddPage.value) toListPage()
      else if (isEditPage.value) toViewPage(singleBook.value.id)
    }
    const title = computed(() => {
      if (route.name === 'list') return '書本列表'
      else if (route.name === 'add') return '新增書本'
      return singleBook.value.title
    })

    return {book: singleBook, toAddPage, toEditPage, showBack, isListPage, isViewPage, goBack, title}
  }
})
</script>

<style scoped>
</style>

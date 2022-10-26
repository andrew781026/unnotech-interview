<template>
  <nav class="navbar px-8 flex">
    <SvgIcon
      name="back"
      class="cursor-pointer"
      v-if="showBack"
      size="24"
      @click="toListPage()"
    />
    <div class="flex-1 justify-center bg-base-100">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
    </div>
    <SvgIcon
      name="plus"
      class="text-accent cursor-pointer"
      size="24"
      v-if="isListPage"
      @click="toAddPage()"
    />
    <SvgIcon
      name="edit"
      class="text-accent cursor-pointer"
      size="24"
      v-else-if="isViewPage"
      @click="toEditPage()"
    />
  </nav>
</template>

<script setup>
import {computed} from 'vue'
import {singleBook} from '../views/useBook.ts'
import {useRouterCustom, isAddPage, isListPage, isViewPage} from '../views/useMyRoute.ts'

const {toListPage, toAddPage, toEditPage} = useRouterCustom()

const showBack = computed(() => !isListPage)
const title = computed(() => {
  if (isListPage) return '書本列表'
  else if (isAddPage) return '新增書本'
  return singleBook.value.title
})
</script>

<style scoped>
</style>

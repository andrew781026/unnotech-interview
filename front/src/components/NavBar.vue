<template>
  <nav class="navbar px-8 flex">
    <SvgIcon name="back" v-if="showBack" size="24"/>
    <div class="flex-1 justify-center bg-base-100">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
    </div>
    <SvgIcon name="plus" class="text-accent" size="24" v-if="isListPage"/>
    <SvgIcon name="edit" class="text-accent" size="24" v-else-if="isViewPage"/>
  </nav>
</template>

<script setup>
import {defineComponent, computed} from 'vue'
import {singleBook} from '../views/useBook.ts'
import {useRouterCustom, isAddPage, isListPage, isEditPage, isViewPage} from '../views/useMyRoute.ts'

const {toListPage} = useRouterCustom()

const showBack = computed(() => !isListPage)
const title = computed(() => {
  if (isListPage) return '書本列表'
  else if (isAddPage) return '新增書本'
  return singleBook.value.title
})
</script>

<style scoped>
</style>

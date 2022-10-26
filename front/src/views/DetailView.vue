<template>
  <div class="container mx-auto flex flex-col items-center py-4">
    <img class="h-128 max-w-full px-4" :src="book.image" alt="圖片">

    <!-- 新增/修改的編輯區域 -->
    <div class="flex flex-col gap-4 sm:w-96 w-full p-4" v-if="!isViewPage">
      <input class="p-4" type="text" v-model="book.title" placeholder="名稱">
      <span v-if="v$.title.$errors.length > 0" class="text-error font-bold">錯誤訊息錯誤訊息錯誤訊息錯誤訊息</span>
      <input class="p-4" type="text" v-model="book.author" placeholder="作者">
      <span class="text-error font-bold">錯誤訊息錯誤訊息錯誤訊息錯誤訊息</span>
      <textarea class="p-4 h-64 resize-none" type="text" v-model="book.description" placeholder="備註"/>
      <span class="text-error font-bold">錯誤訊息錯誤訊息錯誤訊息錯誤訊息</span>
    </div>

    <!-- 查看的文字區域 -->
    <div class="flex flex-col gap-4 sm:w-96 w-full p-4" v-else>
      <label class="font-bold text-xl">名稱：</label><span>{{ book.title }}</span>
      <label class="font-bold text-xl">作者：</label><span>{{ book.author }}</span>
      <label class="font-bold text-xl">備註：</label><span>{{ book.description }}</span>
    </div>

    <!-- 修改的按鈕區塊 -->
    <div class="flex gap-4 sm:w-96 w-full p-4" v-if="isEditPage">
      <PrimaryButton class="flex-1" disabled @click="cancel">取消</PrimaryButton>
      <PrimaryButton class="flex-1" @click="updateSingleBook(book.id,book)">修改</PrimaryButton>
    </div>

    <!-- 新增的按鈕區塊 -->
    <div class="flex gap-4 sm:w-96 w-full p-4" v-if="isAddPage">
      <PrimaryButton class="flex-1" disabled @click="cancel">取消</PrimaryButton>
      <PrimaryButton class="flex-1" @click="addSingleBook(book)">修改</PrimaryButton>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {getSingleBook, singleBook, updateSingleBook, addSingleBook} from './useBook'
import defaultImage from '../assets/icons/books.svg'
import PrimaryButton from "@/components/PrimaryButton.vue"
import {useRouterCustom} from "./useMyRoute"
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'

export default defineComponent({
  name: 'DetailView',
  setup() {
    const route = useRoute()
    const {toAddPage, toEditPage, toViewPage} = useRouterCustom()
    onMounted(async () => {
      if (route !== 'add') await getSingleBook(route.params.id, singleBook.value)
    })
    const isViewPage = computed(() => route.name === 'view')
    const isAddPage = computed(() => route.name === 'add')
    const isEditPage = computed(() => route.name === 'edit')

    return {
      book: singleBook,
      defaultImage,
      isViewPage,
      isAddPage,
      isEditPage,
      updateSingleBook,
      addSingleBook,
      v$: useVuelidate()
    }
  },
  components: {
    PrimaryButton
  },
  validations () {
    return {
      book:{
        title: { // Matches this.book.firstName
          required
        },
      },
    }
  }
})
</script>

<style scoped>
</style>

<template>
  <div class="container mx-auto flex flex-col items-center py-4">

    <!-- 圖片的區域 -->
    <Uploadzone
      v-if="!book.image"
      class="bg-white h-80 w-80 rounded"
      @addImgUrl="addImgUrl"/>
    <div v-else class="relative mx-4">
      <img class="h-80 max-w-full" :src="book.image" alt="圖片"/>
      <SvgIcon
        name="cancel"
        class="hover:scale-125 text-error cursor-pointer absolute top-0 right-0 m-2"
        :size="24"
        @click="clearImgUrl"
      />
    </div>

    <!-- 新增/修改的編輯區域 -->
    <div class="flex flex-col gap-4 sm:w-96 w-full p-4" v-if="!isViewPage">
      <input class="p-4" type="text" v-model="book.title" placeholder="名稱">
      <span v-if="errors.title?.length > 0" class="text-error font-bold">{{ errors.title[0] }}</span>
      <input class="p-4" type="text" v-model="book.author" placeholder="作者">
      <span v-if="errors.author?.length > 0" class="text-error font-bold">{{ errors.author[0] }}</span>
      <textarea class="p-4 h-64 resize-none" type="text" v-model="book.description" placeholder="備註"/>
      <span v-if="errors.description?.length > 0" class="text-error font-bold">{{ errors.description[0] }}</span>
    </div>

    <!-- 查看的文字區域 -->
    <div class="flex flex-col gap-4 sm:w-96 w-full p-4" v-else>
      <label class="font-bold text-xl">名稱：</label><span>{{ book.title }}</span>
      <label class="font-bold text-xl">作者：</label><span>{{ book.author }}</span>
      <label class="font-bold text-xl">備註：</label><span>{{ book.description }}</span>
    </div>

    <!-- 修改的按鈕區塊 -->
    <div class="flex gap-4 sm:w-96 w-full p-4" v-if="isEditPage">
      <PrimaryButton class="flex-1" :disabled="!isDirty" @click="cancel">取消</PrimaryButton>
      <PrimaryButton class="flex-1" @click="update">修改</PrimaryButton>
    </div>

    <!-- 新增的按鈕區塊 -->
    <div class="flex gap-4 sm:w-96 w-full p-4" v-if="isAddPage">
      <PrimaryButton class="flex-1" :disabled="!isDirty" @click="cancel">取消</PrimaryButton>
      <PrimaryButton class="flex-1" @click="add">新增</PrimaryButton>
    </div>
  </div>
</template>

<script>
import {ref, watch, defineComponent, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {getSingleBook, singleBook, updateSingleBook, addSingleBook} from './useBook'
import defaultImage from '../assets/icons/books.svg'
import PrimaryButton from "@/components/PrimaryButton.vue"
import Uploadzone from "@/components/Uploadzone.vue"
import {useRouterCustom} from "./useMyRoute"
import validator from "validate.js"

const valid = (book) => {

  const constraints = {
    "title": {
      presence: {
        allowEmpty: false,
        // 去除預設參數名稱 ref : https://github.com/ansman/validate.js/issues/68
        message: "^名稱不能為空"
      }
    },
    "author": {presence: {allowEmpty: false, message: "^作者不能為空"}},
  };

  return validator(book, constraints);
};

export default defineComponent({
  name: 'DetailView',
  components: {
    PrimaryButton,
    Uploadzone
  },
  setup() {
    const isDirty = ref(false)
    const book = ref({})
    const errors = ref([])
    const route = useRoute()
    const {toListPage, toViewPage, isViewPage, isAddPage, isEditPage} = useRouterCustom()

    onMounted(async () => {
      if (isViewPage.value || isEditPage.value) {
        await getSingleBook(route.params.id)
        book.value = Object.assign({}, singleBook.value)
      }

      watch(() => book.value, () => isDirty.value = true, {deep: true})
    })

    const cancel = () => {
      book.value = Object.assign({}, defaultBook.value)
      isDirty.value = false

      if (isAddPage.value) toListPage()
      else if (isEditPage.value) toViewPage(book.value.id)
    };

    const add = async () => {
      const validInfo = valid(book.value)
      if (validInfo) this.errors = validInfo
      else {
        const newBook = await addSingleBook(book.value)
        toViewPage(newBook.id)
      }
    };

    const update = async () => {
      const validInfo = valid(book.value)
      if (validInfo) this.errors = validInfo
      else {
        const newBook = await updateSingleBook(book.value.id, book.value)
        toViewPage(newBook.id)
      }
    };

    const addImgUrl = (url) => book.value.image = url
    const clearImgUrl = () => book.value.image = undefined

    return {
      book,
      errors,
      defaultBook: singleBook,
      defaultImage,
      isViewPage,
      isAddPage,
      isEditPage,
      isDirty,
      updateSingleBook,
      addSingleBook,
      toListPage,
      toViewPage,
      valid,
      cancel,
      add,
      update,
      addImgUrl,
      clearImgUrl
    }
  },
})
</script>

<style scoped>
</style>

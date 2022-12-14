import {ref, Ref} from 'vue'
import BookService from '../api/book'
import {Book, EmptyObject} from '../types/book'

export const isLoading = ref(false)

// 細節頁面的 singleBook
export const singleBook: Ref<Book | EmptyObject> = ref({})

// 列表頁面的所有 Book 資訊
export const bookList: Ref<Array<Book>> = ref([])

export const openLoader = () => isLoading.value = true
export const closeLoader = () => isLoading.value = false

const loaderWrapper = async (fn: () => Promise<any>) => {
  try {
    openLoader()
    return await fn()
  } catch (e) {
    console.error(e)
  } finally {
    setTimeout(() => closeLoader(), 1000)
  }
}

export const setSingleBook = (newSingleBook: Book) => {
  singleBook.value = newSingleBook || {}
}

export const getSingleBook = async (id: number) => loaderWrapper(async () => {
  const sameId = singleBook.value?.id === id
  if (!sameId) setSingleBook(await BookService.get(id))
})

export const updateSingleBook = async (id: number, newSingleBook: Book) => loaderWrapper(async () => {
  const book = await BookService.update(id, newSingleBook)
  singleBook.value = book
  return book
})

export const addSingleBook = async (newSingleBook: Book) => loaderWrapper(async () => {
  const book = await BookService.add(newSingleBook)
  singleBook.value = book
  return book
})

// 使用 BookService 取得 book 的列表資料
export const listAllBooks = async () => loaderWrapper(async () => {
  const books = await BookService.list()
  bookList.value = books
  return books
})

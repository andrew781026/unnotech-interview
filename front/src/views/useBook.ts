import {onMounted, ref, Ref} from 'vue'
import {Router} from 'vue-router'
import BookService from '../api/book'
import {Book, EmptyObject} from '../types/book'

export const dialogShow = ref(false)
export const dialogType = ref('')
export const isLoading = ref(false)

// 細節頁面的 singleBook
export const singleBook: Ref<Book | EmptyObject> = ref({})

// 列表頁面的所有 Book 資訊
export const bookList: Ref<Array<Book>> = ref([])

export const openLoader = () => isLoading.value = true
export const closeLoader = () => isLoading.value = false

export const setSingleBook = (newSingleBook: Book) => {
  singleBook.value = newSingleBook || {}
}

export const getSingleBook = async (id: number) => {
  openLoader()
  const sameId = singleBook.value?.id === id
  if (!sameId) setSingleBook(await BookService.get(id))
  closeLoader()
}

export const updateSingleBook = (router: Router) => (id: string, newSingleBook: Book) => {
  openLoader()
  return BookService.update(id, newSingleBook)
    .then(book => {
      singleBook.value = book
      router.push({name: 'view', params: {id: book.id}})
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const addSingleBook = (router: Router) => (newSingleBook: Book) => {
  openLoader()
  return BookService.add(newSingleBook)
    .then(book => {
      singleBook.value = book
      router.push({name: 'view', params: {id: book.id}})
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

// 使用 BookService 取得 book 的列表資料
export const listAllBooks = () => {
  openLoader()
  BookService.list()
    .then(books => bookList.value = books)
    .catch(console.error)
    .finally(() => closeLoader())
}

export const useBook = (bookId: number) => {
  onMounted(() => {
    if (bookId) getSingleBook(bookId)
    else listAllBooks()
  })
}

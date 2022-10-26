import {computed} from 'vue'
import {NavigationFailure, useRoute, useRouter} from 'vue-router'

interface result {
  toListPage: () => Promise<NavigationFailure | void | undefined>
  toViewPage: (id: number) => Promise<NavigationFailure | void | undefined>
  toEditPage: (id: number) => Promise<NavigationFailure | void | undefined>
  toAddPage: () => Promise<NavigationFailure | void | undefined>
}

export const useRouterCustom = (): result => {
  const router = useRouter()
  const toListPage = () => router.push({name: 'list'})
  const toViewPage = (id: number) => router.push({name: 'view', params: {id}})
  const toEditPage = (id: number) => router.push({name: 'edit', params: {id}})
  const toAddPage = () => router.push({name: 'add'})
  return {toListPage, toViewPage, toEditPage, toAddPage}
}

// 初次載入時， vue-router 可能尚未載入完成，router 就需要取資料了！
export const isListPage = computed(() => useRoute().name === 'list')
export const isViewPage = computed(() => useRoute().name === 'view')
export const isEditPage = computed(() => useRoute().name === 'edit')
export const isAddPage = computed(() => useRoute().name === 'add')

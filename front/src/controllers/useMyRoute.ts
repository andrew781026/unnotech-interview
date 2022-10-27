import {NavigationFailure, useRouter, useRoute} from 'vue-router'
import {computed} from "vue";
import {ComputedRef} from "@vue/reactivity";

interface result {
  toListPage: () => Promise<NavigationFailure | void | undefined>
  toViewPage: (id: number) => Promise<NavigationFailure | void | undefined>
  toEditPage: (id: number) => Promise<NavigationFailure | void | undefined>
  toAddPage: () => Promise<NavigationFailure | void | undefined>
  isViewPage: ComputedRef<boolean>
  isAddPage: ComputedRef<boolean>
  isEditPage: ComputedRef<boolean>
  isListPage: ComputedRef<boolean>
}

export const useRouterCustom = (): result => {
  const route = useRoute()
  const router = useRouter()
  const toListPage = () => router.push({name: 'list'})
  const toViewPage = (id: number) => router.push({name: 'view', params: {id}})
  const toEditPage = (id: number) => router.push({name: 'edit', params: {id}})
  const toAddPage = () => router.push({name: 'add'})

  const isViewPage = computed(() => route.name === 'view')
  const isAddPage = computed(() => route.name === 'add')
  const isListPage = computed(() => route.name === 'list')
  const isEditPage = computed(() => route.name === 'edit')

  return {toListPage, toViewPage, toEditPage, toAddPage, isViewPage, isListPage, isAddPage, isEditPage}
}

import {NavigationFailure, useRouter, RouteLocationNormalizedLoaded} from 'vue-router'
import {computed} from "vue";

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

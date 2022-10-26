import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/ListView.vue'),
    meta: {title: 'Tree 圖書館 🏛'}
  },
  {
    path: '/view/:id',
    name: 'view',
    component: () => import('../views/DetailView.vue'),
    meta: {title: '單本書籍', mode: 'view'}
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/DetailView.vue'),
    meta: {title: '單本書籍', mode: 'edit'}
  },
  {
    path: '/add/:id',
    name: 'add',
    component: () => import('../views/DetailView.vue'),
    meta: {title: '單本書籍', mode: 'add'}
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue'),
    meta: {title: '找不到書籍'}
  },
  {
    path: '/:catchAll(.*)',
    redirect: () => ({name: 'error'})
  }
]

const router = createRouter({
  history: createWebHistory('/unnotech-interview/'),
  routes
})

router.beforeEach((to, from, next) => {
  // TypeGuard
  if (typeof to.meta.title === 'string') {
    window.document.title = to.meta.title
  }
  next()
})

export default router

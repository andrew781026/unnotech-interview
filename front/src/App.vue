<template>
  <nav-bar></nav-bar>
  <main class="bg-base-200">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
  <LoadingMask></LoadingMask>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoadingMask from './components/LoadingMask.vue'

export default {
  name: 'BookList',
  components: {
    'nav-bar': NavBar,
    LoadingMask
  }
}
</script>

<style>
main {
  overflow: auto;
  height: calc(100vh - var(--nav-height));
}

/* the transition related classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <button class="btn btn-accent rounded-full text-xl text-white"
          :class="{'btn-disabled':disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    disabled: Boolean
  }
}
</script>

<style scoped>

</style>

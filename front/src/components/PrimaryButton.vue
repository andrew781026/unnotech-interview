<template>
  <button class="btn"
          :class="{'btn-primary':type === 'primary','rounded-full':round}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    type: String,
    round: Boolean
  }
}
</script>

<style scoped>

</style>

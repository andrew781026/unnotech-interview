<template>
  <svg aria-hidden="true" :style="style()">
    <use :href="symbolId"/>
  </svg>
</template>

<script>
import {defineComponent, computed} from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return {symbolId}
  },
  methods: {
    style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    },
  },
})
</script>

<style scoped>
svg {
  fill: currentColor;
  overflow: hidden;
}
</style>

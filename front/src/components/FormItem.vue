<template>
  <div class="row">
    <label :class="[required && 'required']">{{ label }}</label>
    <div class="input-block">
      <slot></slot>
      <div class="error-block" v-if="errorMsg">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: String,
    errorMsg: String,
    required: Boolean
  }
}
</script>

<template>
  <div class="tm-app-input-text" :class="`tm-app-input-text--el-${elem}`">
    <input
        class="tm-app-input-text__elem"
        type="text"
        :placeholder="title"
        :value="value"
        @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    elem: {
      type: String,
      default: 'base'
    }
  },
}
</script>

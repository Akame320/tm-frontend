<template>
  <div class="tm-app-input-text" :class="`tm-app-input-text--th-${theme}`">
    <div class="">{{ error }}</div>
    <div class="tm-app-input-text__elem-wrapper">
      <input
        class="tm-app-input-text__elem"
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)">
    </div>

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
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'base'
    },
    error: {
      type: String,
      default: ''
    }
  },
}
</script>

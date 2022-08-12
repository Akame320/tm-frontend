<template>
<button @click="$emit('click')" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    elem: {
      type: String,
      default: ''
    },
  },
  computed: {
    classes() {
      const list = ['tm-app-button']

      if(this.elem) list.push(`tm-app-button--el-${this.elem}`)

      return list
    }
  }
}
</script>


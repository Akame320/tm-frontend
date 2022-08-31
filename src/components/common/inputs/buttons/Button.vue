<template>
<button @click="$emit('click')" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    themes: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    classes() {
      const list = ['tm-app-button']
      if(!this.themes) return list

      for (const theme of this.themes) list.push(`tm-app-button--${theme}`)
      return list
    }
  }
}
</script>


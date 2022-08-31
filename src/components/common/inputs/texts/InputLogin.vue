<template>
  <div class="tm-app-input-it" :class="`tm-app-input-it--th-${theme}`">
    <div class="tm-app-input-it__error-wrapper">
      <span class="tm-app-input-it__error">{{ error }}</span>
    </div>
    <div class="tm-app-input-it__elem-wrapper">
      <div class="tm-app-input-it__icon">
        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6.5641 10.8683C6.5641 10.8683 7.99888 10.7609 8.71629 9.56527C9.43368 8.3696 7.28151 5.36829 7.28151 5.36829C7.28151 5.36829 6.08586 6.67129 4.41197 6.56394C2.73808 6.45656 2.02065 5.36829 2.02065 5.36829C2.02065 5.36829 -0.609821 7.75959 0.34672 9.67263C1.30326 11.5857 6.5641 10.8683 6.5641 10.8683Z"
              fill="white"/>
          <path
              d="M4.66434 6.1908C6.37388 6.1908 7.75974 4.80494 7.75974 3.0954C7.75974 1.38586 6.37388 0 4.66434 0C2.9548 0 1.56894 1.38586 1.56894 3.0954C1.56894 4.80494 2.9548 6.1908 4.66434 6.1908Z"
              fill="white"/>
        </svg>
      </div>

      <input
          class="tm-app-input-it__elem"
          type="text"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value)">
    </div>

  </div>
</template>

<script>
export default {
  name: "InputLogin",
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

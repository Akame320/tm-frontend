<template>
  <div class="tm-app-input-it" :class="`tm-app-input-it--th-${theme}`">
    <div class="tm-app-input-it__error-wrapper">
      <span class="tm-app-input-it__error">{{ error }}</span>
    </div>
    <div class="tm-app-input-it__elem-wrapper">
      <div class="tm-app-input-it__icon">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 4.66667V3.5C9.5 2.57174 9.13125 1.6815 8.47487 1.02513C7.8185 0.368749 6.92826 0 6 0C5.07174 0 4.1815 0.368749 3.52513 1.02513C2.86875 1.6815 2.5 2.57174 2.5 3.5V4.66667C2.0363 4.66805 1.59198 4.85287 1.26409 5.18076C0.936204 5.50865 0.751385 5.95296 0.75 6.41667V10.5C0.75 11.4283 1.11875 12.3185 1.77513 12.9749C2.4315 13.6313 3.32174 14 4.25 14H7.75C8.67826 14 9.5685 13.6313 10.2249 12.9749C10.8813 12.3185 11.25 11.4283 11.25 10.5V6.41667C11.2486 5.95296 11.0638 5.50865 10.7359 5.18076C10.408 4.85287 9.9637 4.66805 9.5 4.66667V4.66667ZM3.66667 3.5C3.66667 2.88116 3.9125 2.28767 4.35008 1.85008C4.78767 1.4125 5.38116 1.16667 6 1.16667C6.61884 1.16667 7.21233 1.4125 7.64992 1.85008C8.0875 2.28767 8.33333 2.88116 8.33333 3.5V4.66667H3.66667V3.5ZM6.58333 10.5C6.58333 10.6547 6.52187 10.8031 6.41248 10.9125C6.30308 11.0219 6.15471 11.0833 6 11.0833C5.84529 11.0833 5.69692 11.0219 5.58752 10.9125C5.47812 10.8031 5.41667 10.6547 5.41667 10.5V8.16667C5.41667 8.01196 5.47812 7.86358 5.58752 7.75419C5.69692 7.64479 5.84529 7.58333 6 7.58333C6.15471 7.58333 6.30308 7.64479 6.41248 7.75419C6.52187 7.86358 6.58333 8.01196 6.58333 8.16667V10.5Z" fill="white"/>
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
  name: "InputPassword",
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

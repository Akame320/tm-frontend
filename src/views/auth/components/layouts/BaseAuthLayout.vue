<template>
  <div class="tm-at-page">
    <div class="tm-at-page__main">
      <div class="tm-at-page__title-wrapper">
        <h1 class="tm-at-page__title">{{ title }}</h1>
      </div>
      <div class="tm-at-page__line"></div>
      <div class="tm-at-page__subtitle-wrapper">
        <p class="tm-at-page__subtitle">
          {{ subtitle }}
        </p>
      </div>
      <div class="tm-at-page__action">
        <Button @click="$router.push('/information/more')" :themes="['th-gradient', 'sz-medium']" class="tm-at-page__btn-more">Узнать больше</Button>
      </div>
    </div>
    <div class="tm-at-page__form">
      <slot/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/inputs/buttons/Button";

export default {
  name: "BaseAuthLayout",
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

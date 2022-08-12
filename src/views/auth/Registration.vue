<template>
  <div class="tm-at-page">
    <Header class="tm-at-page__header"/>
    <main class="tm-at-page__main">
      <div class="tm-at-form">
        <div class="tm-at-form__title-wrapper">
          <h1 class="tm-at-form__title">Регистрация</h1>
        </div>
        <div class="tm-at-form__body">
          <div class="tm-at-form__input">
            <InputText elem="base" v-model="login" title="Почта"/>
          </div>
          <div class="tm-at-form__input">
            <InputText elem="base" v-model="password" title="Пароль"/>
          </div>
          <div class="tm-at-form__input">
            <InputText elem="base" v-model="confirmPassword" title="Подтвердите Пароль"/>
          </div>
          <div class="tm-at-form__button">
            <Button elem="auth-registration">Регистрация</Button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import InputText from "@/components/common/texts/InputText";
import Button from "@/components/common/buttons/Button";
import Header from "@/components/layouts/base/Header";

export default {
  name: "Registration",
  components: {
    InputText,
    Button,
    Header
  },
  data() {
    return {
      login: '',
      password: '',
      confirmPassword: '',
    }
  }
}
</script>

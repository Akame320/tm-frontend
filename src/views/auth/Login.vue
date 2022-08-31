<template>
  <LayoutAuth
      @clickRegistration="$router.push('./Registration')"
      theme="login"
      :use-action="headerAction"
  >
    <BaseAuthLayout
        title="Авторизация"
        subtitle="Пожалуйста, войдите в систему, для дальнейшей работы"
    >
      <div class="tm-at-form">
        <div class="tm-at-form__title-wrapper">
          <h1 class="tm-at-form__title">Вход</h1>
        </div>
        <div class="tm-at-form__body">
          <div class="tm-at-form__input">
            <InputLogin placeholder="Логин" elem="base" v-model="v$.form.$model.login" title="Почта"/>
          </div>
          <div class="tm-at-form__input">
            <InputPassword placeholder="Пароль" elem="base" v-model="v$.form.$model.password" title="Пароль"/>
          </div>
          <div class="tm-at-form__button">
            <Button class="tm-at-form__button" :themes="['th-blue', 'sz-medium']">Войти</Button>
          </div>
        </div>
      </div>
    </BaseAuthLayout>
  </LayoutAuth>
</template>

<script>
import Button from "@/components/common/inputs/buttons/Button";
import BaseAuthLayout from "@/views/auth/components/layouts/BaseAuthLayout";
import HeaderActions from "@/views/auth/components/const/actions";
import LayoutAuth from "@/layouts/Auth";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";
import InputLogin from "@/components/common/inputs/texts/InputLogin";
import InputPassword from "@/components/common/inputs/texts/InputPassword";

export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    InputLogin,
    InputPassword,
    Button,
    BaseAuthLayout,
    LayoutAuth
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
    }
  },
  validations() {
    return {
      form: {
        login: {
          required: helpers.withMessage('Обязательное поле', required),
          email: helpers.withMessage('Введите email', email),
        },
        password: {
          required: helpers.withMessage('Обязательное поле', required),
        },
      }
    }
  },
  computed: {
    headerAction() {
      return HeaderActions.Registration
    }
  }
}
</script>

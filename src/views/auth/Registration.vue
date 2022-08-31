<template>
  <LayoutAuth
      @clickLogin="$router.push('./login')"
      :use-action="headerAction"
      theme="registration"
  >
    <BaseAuthLayout
        title="Регистрация"
        subtitle="Мы помогаем в оптимизации работы и управления людьми"
    >
      <div class="tm-at-form">
        <div class="tm-at-form__title-wrapper">
          <h2 class="tm-at-form__title">Регистрация</h2>
        </div>
        <div class="tm-at-form__body">
          <InputLogin
              class="tm-at-form__input"
              :error="v$.form.login.$errors[0]?.$message"
              v-model="v$.form.login.$model"
              placeholder="Почта"/>
          <InputPassword
              class="tm-at-form__input"
              :error="v$.form.password.$errors[0]?.$message"
              v-model="v$.form.password.$model"
              placeholder="Пароль"/>
          <InputPassword
              class="tm-at-form__input"
              :error="v$.form.confirmPassword.$errors[0]?.$message"
              v-model="v$.form.confirmPassword.$model"
              placeholder="Подтвердите Пароль"/>
          <div class="tm-at-form__button-wrapper">
            <Button class="tm-at-form__button" @click="submit" :themes="['th-blue', 'sz-medium']">Регистрация</Button>
          </div>
        </div>
      </div>
    </BaseAuthLayout>
  </LayoutAuth>
</template>

<script>
import Button from "@/components/common/inputs/buttons/Button";
import InputLogin from "@/components/common/inputs/texts/InputLogin";
import InputPassword from "@/components/common/inputs/texts/InputPassword";

import LayoutAuth from "@/layouts/Auth";
import BaseAuthLayout from "@/views/auth/components/layouts/BaseAuthLayout";

import authApi from "@/api/auth"
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators';
import HeaderActions from "@/views/auth/components/const/actions"

export default {
  name: "Registration",
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    Button,
    InputLogin,
    InputPassword,

    LayoutAuth,
    BaseAuthLayout
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  validations() {
    return {
      form: {
        login: {
          required: helpers.withMessage('Обязательное поле', required),
          email: helpers.withMessage('Введите email', email),
          asyncValidator: helpers.withMessage('Такой email уже зарегистрирован', helpers.withAsync(validateLogin)),
        },
        password: {
          required: helpers.withMessage('Обязательное поле', required),
          minLength: helpers.withMessage('Минимальная длина 6 символов', minLength(6)),
        },
        confirmPassword: {
          password: helpers.withMessage('пароли не совпадают', sameAs(this.form.password))
        }
      }
    }
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate()
      if (!result) return false

      await authApi.registration({
        password: this.form.password,
        login: this.form.login
      })

      this.clearForm()
      this.v$.$reset()
    },
    clearForm() {
      this.form.login = ''
      this.form.password = ''
      this.form.confirmPassword = ''
    }
  },
  computed: {
    headerAction() {
      return HeaderActions.Login
    }
  }
}

const validateLogin = async (value) => {
  if (value.length < 5) return false

  const res = await authApi.checkUserEmail({ login: value })
  return { $valid: res.data.status >= 400 }
}
</script>

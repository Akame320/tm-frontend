<template>
  <div :class="classes">
    <header class="tm-auth-header">
      <div class="tm-container">
        <div class="tm-auth-header__inner">
          <div class="tm-auth-header__logo-wrapper">
            <span class="tm-auth-header__logo">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.4951 16.1172V41H25.3853V16.1172H30.4951ZM38.1514 16.1172V20.1333H17.8486V16.1172H38.1514Z"
                  fill="#BBDFFC"/>
            <rect width="56" height="56" rx="10" fill="#E2EFFC" fill-opacity="0.2"/>
          </svg>
            </span>
          </div>
          <div class="tm-auth-header__aside">
            <ul class="tm-auth-header__actions">
              <li v-if="isLogin" class="tm-auth-header__button">
                <Button
                    @click="$emit('clickLogin')"
                    :themes="['th-purple-ghost', 'sz-medium']"
                    class="tm-auth-header__btn-login">
                  Войти
                </Button>
              </li>
              <li v-if="isRegistration" class="tm-auth-header__button">
                <Button @click="$emit('clickRegistration')" :themes="['th-purple-ghost', 'sz-medium']"
                        class="tm-auth-header__btn-registration">Регистрация
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main class="tm-auth-main">
      <slot/>
    </main>
    <footer class="tm-auth-footer">
      <div class="tm-container">
        <div class="tm-auth-footer__inner">
          <div class="tm-auth-footer__back-link-wrapper">
            <router-link class="tm-auth-footer__back-link" to="/">
              Назад
            </router-link>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M6.4999 12.9998C2.9158 12.9998 0 10.084 0 6.4999C0 2.9158 2.9158 0 6.4999 0C10.084 0 13 2.9158 13 6.4999C13 10.084 10.084 12.9998 6.4999 12.9998ZM6.4999 0.786247C3.34941 0.786247 0.786247 3.34961 0.786247 6.4999C0.786247 9.6502 3.34941 12.2136 6.4999 12.2136C9.65039 12.2136 12.2138 9.65039 12.2138 6.4999C12.2138 3.34941 9.65039 0.786247 6.4999 0.786247Z"
                  fill="#BBDFFC"/>
              <path d="M9.09275 6.23352H4.67581V7.01977H9.09275V6.23352Z" fill="#BBDFFC"/>
              <path
                  d="M5.61281 9.07525L3.81152 6.62727L5.61281 4.17969L6.24614 4.64554L4.78765 6.62727L6.24614 8.60921L5.61281 9.07525Z"
                  fill="#BBDFFC"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Button from "@/components/common/inputs/buttons/Button";
import HeaderActions from "@/views/auth/components/const/actions"

export default {
  name: "LayoutAuth",
  components: {
    Button
  },
  props: {
    theme: {
      type: String,
      default: ''
    },
    useAction: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      const list = ['tm-auth-layout']
      if (this.theme) list.push(`tm-auth-layout--th-${this.theme}`)
      return list
    },
    isRegistration() {
      return this.useAction === HeaderActions.Registration
    },
    isLogin() {
      return this.useAction === HeaderActions.Login
    }
  }
}
</script>

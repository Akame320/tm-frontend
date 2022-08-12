<template>
  <div class="tm-hm-page">
    <Header class="tm-hm-page__header"/>
    <main class="tm-hm-page__main">
      <div class="tm-hm-intro">
        <div class="tm-hm-intro__inner">
          <div class="tm-container">
            <div class="tm-hm-intro__title-wrapper">
              <h1 class="tm-hm-intro__title">Планировщик задач и менеджер работы</h1>
            </div>
            <div class="tm-hm-intro__subtitle-wrapper">
              <p class="tm-hm-intro__subtitle">Наше приложение помогает оптимизировать работу и управление людьми. </p>
            </div>
            <ul class="tm-hm-intro__actions">
              <li class="tm-hm-intro__button">
                <Button
                    @click="$router.push('./auth/login')"
                    elem="intro-more">Войти
                </Button>
              </li>
              <li class="tm-hm-intro__button">
                <Button
                    @click="$router.push('./auth/registration')"
                    elem="intro-registration">Зарегистрироваться
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/layouts/base/Header";
import Button from "@/components/common/buttons/Button";

export default {
  name: 'Home',
  components: {
    Header,
    Button
  },
}
</script>

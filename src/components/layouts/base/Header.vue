<template>
  <header class="tm-app-header">
    <div class="tm-container">
      <div class="tm-app-header__inner">
        <div class="tm-app-header__logo-wrapper">
          <div class="tm-app-header__logo-box-wrapper">
            <span class="tm-app-header__logo-box">T</span>
          </div>
          <div class="tm-app-header__logo-label-wrapper">
            <span class="tm-app-header__logo-label">Manager</span></div>
        </div>
        <div class="tm-app-header__aside">
          <nav class="tm-app-header__nav-wrapper">
            <ul class="tm-app-header__nav tm-app-nav">
              <li :key="item.name" v-for="item of navigation" class="tm-app-nav__item-wrapper">
                <router-link active-class="tm-app-nav__item--el-active" class="tm-app-nav__item" :to="item.path">{{ item.name }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      navigation: [
        {
          path: '/home',
          name: 'Home',
        },
        {
          path: '/about',
          name: 'About',
        },
        {
          path: '/auth/registration',
          name: 'Registration',
        },
        {
          path: '/auth/login',
          name: 'Login',
        }
      ]
    }
  },
}
</script>

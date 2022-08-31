import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/scss/index.scss'
import './assets/fonts/Oswald-VariableFont_wght.ttf'

console.log(process.env.SERVER_API)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

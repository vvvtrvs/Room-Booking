import Vue from 'vue'
import VCalendar from 'v-calendar'
import { ButtonPlugin, FormPlugin, FormGroupPlugin, FormInputPlugin, FormCheckboxPlugin } from "bootstrap-vue";

import App from './App.vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VCalendar)

Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormCheckboxPlugin)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

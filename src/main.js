import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const $axios = axios.create({baseURL: process.env.VUE_APP_API_URL})
app.provide("$axios", $axios)
app.provide("baseURL", process.env.VUE_APP_API_URL)
app.use(store).use(router).mount('#app')
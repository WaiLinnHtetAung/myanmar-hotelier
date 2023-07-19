import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/style.css'

import Pagination from 'v-pagination-3'


createApp(App)
    .use(store)
    .use(router)
    .component('pagination', Pagination)
    .mount('#app')
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugin/router/index'

createApp(App).use(router).mount('#app')

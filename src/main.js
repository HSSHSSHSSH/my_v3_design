import { createApp } from 'vue'
import App from './App.vue'
import router from './plugin/router/index'
import myDesign from '../lib/index'

let app = createApp(App)
// createApp(App).use(router).mount('#app')

app.use(router)
app.use(myDesign)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useTimeout } from './utilities'

const app = createApp(App)

app.config.globalProperties.$apiBasePath = 'https://kitsu.io/api/edge'

app.use(createPinia())
app.use(router)
app.use(useTimeout)

app.mount('#app')

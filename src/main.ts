import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

//@ts-ignore
window.require = (str: string) => new URL(str, import.meta.url).href

createApp(App)
    .mount('#app')

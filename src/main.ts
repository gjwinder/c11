import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.config.globalProperties.$API_BASE_URL = 'http://192.168.1.49:8080';
app.use(router)
app.use(VueSidebarMenu)
app.mount('#app')

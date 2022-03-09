import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { naive } from '@/plugins'
import './mock/index'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

// 注册全局常用的 naive-ui 组件
app.use(naive)
app.use(router)
app.mount('#app')
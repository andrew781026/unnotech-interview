import {createApp} from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

// ref 会飞的青蛙 : https://juejin.cn/post/7094060278475653128
import SvgIcon from "./components/SvgIcon.vue";
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(router)
app.component('SvgIcon', SvgIcon)
app.mount('#app')

import { createApp } from 'vue'
import { Button } from 'vant'
import { Image as VanImage } from 'vant'
import { Search } from 'vant'
import { Icon } from 'vant'
import { NavBar } from 'vant'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css' // 引入全局样式
import 'lib-flexible/flexible.js'
import './index.css'

const app = createApp(App) // 创建实例

app.use(Button)
app.use(VanImage)
app.use(Search)
app.use(Icon)
app.use(NavBar)
app.use(router)

app.mount('#app')

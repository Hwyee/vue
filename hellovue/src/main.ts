import './assets/main.css'
//创建app
import { createApp } from 'vue'
//app的根组件
// import App from './App.vue'

//可以创建多个应用
import helloapp from './components/helloapp.vue'
import router from './router'

// //app挂载到id为app元素上
// createApp(App).mount('#app')
const app = createApp(helloapp);
//加载路由器插件
/**
 * 1.全局注册 RouterView 和 RouterLink 组件。
 * 2.添加全局 $router 和 $route 属性。
 * 3.启用 useRouter() 和 useRoute() 组合式函数。
 * 4.触发路由器解析初始路由。
 */
app.use(router);
app.mount("#hello")

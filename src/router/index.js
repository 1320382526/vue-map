import Vue from 'vue'
import VueRouter from 'vue-router'
import mobile from '../pages'//引入自己的两个代码块作为自定义组件

Vue.use(VueRouter)

  const routes = [
  {
    path: '/mobile/:id',
    component: mobile,//当访问这个路径'/'时，访问的组件就是first,也就是FirstPage.vue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/user/admin/login.vue'
import User  from '../views/user/index.vue'



Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  
  {
    path: '/',
  	redirect:'/login'
  },
  //默认跳到login
  {
    path: '/login',
  	name: 'Login',
  	component:Login
  },
  {
    path: '/user',
  	name: 'User',
  	component:User
  },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router

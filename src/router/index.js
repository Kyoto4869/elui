import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/user/admin/login.vue'
import User from '../views/user/index.vue'
import Shop from '../views/shop/index.vue'
import Admin from '../views/user/admin/index.vue'
import ReleaseCom from '../views/merchandise/releaseCom.vue'

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
		redirect: '/login'
	},
	//默认跳到login
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		// 用户登录后的页面
		path: '/user',
		name: 'User',
		component: User,
		children: [{
				/* 商店页面 */
				path: 'shop',
				name: "Shop",
				component: Shop
			},
			{
				/* 首页 */
				path: 'admin',
				component: Admin,
				name: 'Admin'
			},
			{
				/* 发布商品活动 */
				path: 'releasecom',
				component: ReleaseCom,
				name: 'ReleaseCom'
			},
			{
				/* 商品活动列表 */
				path: 'listactivities',
				name: "ListActivities",
				component: () => import( /* webpackChunkName: "about" */ '../views/merchandise/listActivities.vue')
			},
			{
				/* 交易列表 */
				path: 'transaction',
				name: "Transaction",
				component: () => import( /* webpackChunkName: "about" */ '../views/transaction/index.vue')
			},
			{
				/* 用户列表 */
				path: 'userlist',
				name: "UserList",
				component: () => import( /* webpackChunkName: "about" */ '../views/user/admin/user.vue')
			}






		]



	},


]

const router = new VueRouter({
	routes
})

export default router

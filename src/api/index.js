import request from '@/utils/request.js'
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;

// export const GetUserInfo = () => {
// 	return new Promise((resolve, reject) => {
// 		request.get('/usercode')
// 			.then(res => resolve(res))
// 			.catch(err => reject(err))
// 	})
// }

/* 退出登录 */
export const Exit = data => {
	return new Promise((resolve, reject) => {
		request.postURL("/member/index_login.php", data)
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}


/* 获取验证码api */
export const getcode = () => {
	return new Promise((resolve, reject) => {
		axios.get('usercode')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/* 获取门店数据 */
export const getshop = () => {
	return new Promise((resolve, reject) => {
		axios.get('shop')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

export const getadmin = () => {
	return new Promise((resolve, reject) => {
		axios.get('admin')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/* 获取活动商品数据 */

export const getreleaseComShop = () => {
	return new Promise((resolve, reject) => {
		axios.get('releaseComShop')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}
/* 获取活动列表数据 */
export const getlistActivities = () => {
	return new Promise((resolve, reject) => {
		axios.get('listactivities')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/* 获取订单数据 */

export const getorderlistdata = () => {
	return new Promise((resolve, reject) => {
		axios.get('orderlistdata')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

/* 获取用户信息表 */
export const getuserlistdata = () => {
	return new Promise((resolve, reject) => {
		axios.get('userlist')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}
import request from '@/utils/request.js'
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http=axios;

// export const GetUserInfo = () => {
// 	return new Promise((resolve, reject) => {
// 		request.get('/usercode')
// 			.then(res => resolve(res))
// 			.catch(err => reject(err))
// 	})
// }

/* 退出登录 */
export const Exit=data=>{
	return new Promise((resolve,reject)=>{
		request.postURL("/member/index_login.php",data)
		.then(res=>resolve(res))
		.catch(err=>reject(err))
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
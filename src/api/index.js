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

// export const Exit=data=>{
// 	return new Promise((resolve,reject)=>{
// 		request.postURL("/member/index_login.php",data)
// 		.then(res=>resolve(res))
// 		.catch(err=>reject(err))
// 	})
// }


/* 获取验证码api */
export const getcode = () => {
	return new Promise((resolve, reject) => {
	         axios.get('usercode')
			.then(res => resolve(res))
			.catch(err => reject(err))
	})
}

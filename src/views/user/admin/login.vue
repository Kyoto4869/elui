<template>
	<div class="login">
		<div class="login-box">
			<template>
				<el-carousel height="720px" :autoplay="true" :loop="true" :interval="6000">
					<el-carousel-item><img src="../../../assets/img/1.jpg" alt="" width="100%" height="800" /></el-carousel-item>
					<el-carousel-item><img src="../../../assets/img/2.jpg" alt="" width="100%" height="800" /></el-carousel-item>
					<el-carousel-item><img src="../../../assets/img/3.jpg" alt="" width="100%" height="800" /></el-carousel-item>
					<el-carousel-item><img src="../../../assets/img/4.jpg" alt="" width="100%" height="800" /></el-carousel-item>
				</el-carousel>
			</template>

			<div class="loginsuc">
				<div class="titleone">
					<h3>登录</h3>
					<span>欢迎使用悦朋软件</span>
				</div>
				<div><el-input prefix-icon="el-icon-s-custom" placeholder="请输入用户名" clearable v-model="name"></el-input></div>
				<div><el-input prefix-icon="el-icon-lock" placeholder="请输入密码" show-password v-model="pwd"></el-input></div>
				<div class="title">
					<span>立即注册</span>
					<span>忘记密码？</span>
				</div>
				<div class="yzm">
					<el-input placeholder="请输入验证码" v-model="code"></el-input>
					<span @click="getcode()">{{ mockcode }}</span>
				</div>

				<div><el-button type="primary" @click="login()">登录</el-button></div>
			</div>
		</div>
	</div>
</template>

<script>
/* 导入封装的axios */
import request from '@/utils/request.js';
import { getcode } from '../../../api/index.js';
export default {
	data() {
		return {
			bgimgsrc: [], //背景图片
			name: '', //输入的用户名
			pwd: '', //输入的密码
			code: '', //输入的验证码
			userInfo: {}, //用户信息
			mockcode: '' //mock获取的验证密
		};
	},
	created() {
		this.getUserInfo();
		this.getcode();
	},
	methods: {
		getcode() {
			/**
			 * 获取随机生成的验证码
			 * */
			getcode()
				.then(res => {
					this.mockcode = res.data.score;
				})
				.catch(err => {
					console.log(err);
				});
		},
		getUserInfo() {
			// 通过get 去获取用户信息
			this.$http.get('/member/ajax_login.php').then(res => {
				if (res.data) {
					// console.log(res.data);
					this.userInfo = res.data;
					// 获取到的用户信息赋值给 userInfo
				}
			});
		},
		login() {
			/**
			 * 实现和服务器对比数据，根据数据情况判断是否登陆成功
			 *
			 */
			// 根据接口，url，data参数，header
			if (this.code == this.mockcode) {
				//判断验证码是否正确
				this.code = '';
				request
					.postURL('/member/index_login2.php', { userid: this.name, pwd: this.pwd, fmdo: 'login', dopost: 'login' })
					.then(res => {
						if (res.data.status) {
							//如果status为1 成功
							var that = this; // 保存个this
							sessionStorage.setItem('token', res.data.token);
							console.log('登陆成功');

							this.$router.push('/user');
						} else {
							console.log('失败');
							// 提示登录失败信息
						}
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				alert('验证码错误');
				this.code = '';
			}
		}
	}
};
</script>

<style>
.login {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}

.login .login-box {
	position: relative;
	height: 100%;
}

.loginsuc {
	position: absolute;
	top: 220px;
	left: 940px;
	z-index: 1000;
	width: 300px;
	height: 350px;
	background-color: #ffff;
	border-radius: 10px;
	border: 1px solid blue;
	padding: 50px;
	text-align: center;
}
.loginsuc .title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.loginsuc .titleone {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
.loginsuc .titleone span {
	font-size: 12px;
	margin-top: 10px;
	margin-left: 5px;
	color: #a9a9a9;
}
.loginsuc .titleone h3 {
	color: #0000ff;
}
.loginsuc .title h3 {
	color: #0000ff;
	margin-right: 10px;
}
.loginsuc .title span {
	font-size: 12px;
	margin-top: 10px;
	color: #a9a9a9;
}
.loginsuc div {
	margin-top: 5px;
}
.loginsuc .el-button {
	width: 180px;
	border-radius: 30px;
}
.loginsuc .yzm .el-input__inner {
	width: 130px;
}
.loginsuc .yzm {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.loginsuc .yzm span {
	width: 90px;
	height: 35px;
	line-height: 35px;
	background-color: darkgray;
}
.login-box .el-carousel__indicators--horizontal {
	top: 600px;
	left: 30% !important;
}
.login-box .el-carousel__button {
	width: 12px;
	height: 12px;
	border-radius: 100%;
}
.login-box .is-active .el-carousel__button {
	width: 30px;
	border-radius: 10px;
}
</style>

<template>
	<!-- 首页 -->
	<div class="admin" v-if="$store.state.Adminid!=null?true:$router.push('/login')">
		<p>待处理</p>
		<div class="cont-top">
			<!-- 头部 -->
			<div v-for="item in listadmin.listtop">
				<img :src="item.imgsrc" alt="" />
				<div>
					<p>{{ item.title }}</p>
					<p>{{ item.count }}</p>
				</div>
			</div>
		</div>
		<div class="admin admin-cox">
			<p>销售总览</p>
			<p>活动总览</p>
		</div>
		<!-- 中间 -->
		<div class="con-cont">
			<div v-for="item in listadmin.listcont">
				<div class="box">
					<img :src="item.imgsrc" alt="" />
					<span>{{ item.count }}</span>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<div class="admin admin-cox">
			<p>商品总览</p>
			<p>用户总览</p>
		</div>
		<div class="con-bot">
			<div>
				<div v-for="item in listadmin.listbtn1">
					<div class="con-bot-box">
						<div>
							<p>{{ item.count }}</p>
							<p>{{ item.title }}</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div v-for="item in listadmin.listbtn2">
					<div class="con-bot-box">
						<div>
							<p>{{ item.count }}</p>
							<p>{{ item.title }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getadmin } from '../../../api/index.js';
export default {
	data() {
		return {
			listadmin: []
		};
	},
	created() {
		this.getadminlist();
	},
	methods: {
		getadminlist() {
			getadmin()
				.then(res => {
					// console.log(res.data.listtop);
					this.listadmin = res.data;
				})
				.catch(err => {
					console.log(err);
				});
				
		}
	}
};
</script>

<style>
@import url('../../../assets/css/admin.css');
</style>

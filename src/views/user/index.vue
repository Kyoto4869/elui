<template>
	<div class="user-index" v-if="loginsucid">
		<el-container class="full">
			<!-- 侧边栏 -->
			<el-aside width="200px" class="asside">
				<div class="title"><h1>管理系统</h1></div>

				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">分组一</span>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2"><el-menu-item index="1-3">选项3</el-menu-item></el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<!-- 侧边栏 -->

			<el-container>
				<!-- 头部-->
				<el-header class="headers">Header</el-header>

				<!-- 内容 -->
				<el-main>Main</el-main>

				<!-- 底部 -->
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import {getcode} from '../../api/index.js'
export default {
	data() {
		return {
			isCollapse: true,
			loginsucid: sessionStorage.getItem('token') //登陆成功标准
		};
	},
	created() {
		this.test()
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		/* test */
		test() {
			getcode().then(res => {
				console.log(res.data, 'test');
			});
		}
	}
};
</script>

<style>
.full {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}
.asside {
	background-color: #f0f0f0;
}
.headers {
	background-color: dodgerblue;
	color: #fff;
}
</style>

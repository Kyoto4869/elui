<template>
	<div class="user-index" v-if="$store.state.Adminid!=null?true:$router.push('/login')">
		<el-container class="full">
			<!-- 侧边栏 -->
			<el-aside :width="wei" class="asside">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<div class="title" style="margin-top: 20px; margin-bottom: 20px;margin-left: 5px; transition: ease 3s;" v-if="!isCollapse">
						<span style="color: #1b2e80; font-size: 24px;">悦朋</span>
						<span style="color: #4a7ff6;">管理系统(mvp版)</span>
					</div>

					<div v-if="isCollapse" class="title" style="margin-top: 20px; margin-bottom: 20px;margin-left: 5px;transition: ease 3s;">
						<span style="color: #1b2e80; font-size: 20px;">悦朋</span>
					</div>

					<el-menu-item
						index="100"
						@click="
							isCollapse = !isCollapse;
							changecollapse();
						"
					>
						<i class="el-icon-s-fold"></i>
						<span slot="title">收起</span>
					</el-menu-item>

					<!--  -->
					<el-menu-item index="0">
						<i class="el-icon-s-home"></i>
						<span slot="title" @click="addTab(editableTabsValue, '首页', '/user/admin')"><router-link to="/user/admin" class="a-color">首页</router-link></span>
					</el-menu-item>
					<!--  -->
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-shopping-bag-2"></i>
							<span slot="title">商品</span>
						</template>

						<el-submenu index="1-1">
							<span slot="title">商品管理</span>
							<el-menu-item index="1-1-1">
								<!-- <span slot="title" @click="addTab(editableTabsValue, '发布商品', '/user/releasecom')">
									<router-link to="/user/releasecom" class="a-color">发布商品</router-link>
								</span> -->
							</el-menu-item>
						</el-submenu>

						<el-submenu index="1-2">
							<span slot="title">商品配置</span>
							<el-menu-item index="1-2-1">商品后台分类</el-menu-item>
						</el-submenu>

						<el-menu-item index="1-3"><span slot="title">图片库管理</span></el-menu-item>
					</el-submenu>
					<!--  -->

					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-coin"></i>
							<span slot="title">交易</span>
						</template>
						<el-menu-item index="2-1">
							<!-- 添加tab标签，然后继续路由 -->
							<span slot="title" @click="addTab(editableTabsValue, '订单列表', '/user/transaction')">
								<router-link to="/user/transaction" class="a-color">订单列表</router-link>
							</span>
						</el-menu-item>
					</el-submenu>
					<!--  -->
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-user"></i>
							<span slot="title">用户</span>
						</template>
						<el-menu-item index="3-1">
							<!-- 添加tab标签，然后继续路由 -->
							<span slot="title" @click="addTab(editableTabsValue, '用户管理', '/user/userlist')">
								<router-link to="/user/userlist" class="a-color">用户管理</router-link>
							</span>
						</el-menu-item>
					</el-submenu>
					<!--  -->

					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-s-shop"></i>
							<span slot="title">门店</span>
						</template>
						<el-menu-item index="4-1">
							<!-- 添加tab标签，然后继续路由 -->
							<span slot="title" @click="addTab(editableTabsValue, '门店管理', '/user/shop')">
								<router-link to="/user/shop" class="a-color">门店管理</router-link>
							</span>
						</el-menu-item>
					</el-submenu>
					<!--  -->
				
					<el-submenu index="5">
						<template slot="title">
							<i class="iconfont icon-yingxiao"></i>
							<span slot="title" style="margin-left: 5px;">营销</span>
						</template>
						<el-menu-item index="6-1">
							<!-- 添加tab标签，然后继续路由 -->
							<span slot="title" @click="addTab(editableTabsValue, '发布商品', '/user/releasecom')">
								<router-link to="/user/releasecom" class="a-color">创建活动</router-link>
							</span>
						</el-menu-item>
						<el-menu-item index="6-2">
							<!-- 添加tab标签，然后继续路由 -->
							<span slot="title" @click="addTab(editableTabsValue, '活动列表', '/user/listactivities')">
								<router-link to="/user/listactivities" class="a-color">活动列表</router-link>
							</span>
						</el-menu-item>
					</el-submenu>
					
					
					
					
					<!--  -->
				</el-menu>
			</el-aside>
			<!-- 侧边栏 -->

			<el-container>
				<!-- 头部-->
				<el-header class="headers">
					<div class="hearder-cont">
						<i class="el-icon-message-solid" style="color: #0000FF;font-size: 24px;margin-right: 10px;"></i>
						 <el-avatar style="margin-right: 10px;"> user </el-avatar>
						 <div @click="exit()">
							 <span >
							 	退出登录
							 </span>
							 <i class="iconfont icon-sign-out" style="color: #0000FF;font-size: 32px;margin-right: 10px;"></i>
						 </div>
						
					</div>
				</el-header>
                   <!-- d动态创建tab-->
				<el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" @tab-click="tabClick">
					<el-tab-pane
						v-for="(item, index) in editableTabs"
						:key="item.name"
						:label="item.title"
						:name="item.name"
						:closable="item.name == '1' ? false : true"
					></el-tab-pane>
				</el-tabs>
				<!-- 内容 -->
				<el-main class="con"><router-view></router-view></el-main>

				<!-- 底部 -->
				<!-- <el-footer>Footer</el-footer> -->
			</el-container>
		</el-container>
	</div>
</template>

<script>
import { getcode,Exit} from '../../api/index.js';
export default {
	data() {
		return {
			isCollapse: false,
			// loginsucid: sessionStorage.getItem('token'), //登陆成功标准
			wei: '200px',
			/* 标签页 */
			editableTabsValue: '2',
			editableTabs: [
				{
					title: '首页',
					name: '1',
					content: '/user/admin'
				}
			],
			tabIndex: 1
		};
	},
	created() {},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		changecollapse() {
			if (this.isCollapse == true) {
				console.log(this.isCollapse);
				this.wei = '50px';
			} else {
				this.wei = '200px';
			}
		},
		/* 删除表标签页 */
		removeTab(targetName) {
			let tabs = this.editableTabs;
			let activeName = this.editableTabsValue;
			if (activeName === targetName) {
				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
						}
					}
				});
			}

			this.editableTabsValue = activeName;
			this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			/* 删除后都会转向首页*/
			this.$router.push('/user/admin');
		},
		/* 添加标签页 */
		addTab(targetName, title, content) {
			let newTabName = ++this.tabIndex + '';
			this.editableTabs.push({
				title: title,
				name: newTabName,
				content: content
			});
			this.editableTabsValue = newTabName;
		},
		/* 点击事件 */
		tabClick(tab) {
			/* 实现tab标签的路由跳转 */
			let path = parseInt(tab.name);
			for (let i of this.editableTabs) {
				if (i.name == path) {
					this.$router.push(i.content);
				}
			}
		},
		exit(){
			/* 退出登录 */
			Exit({dopost:'exit'})
			.then(res=>{
				if(res.data.status){ //如果status为1
				sessionStorage.removeItem("token") //删除token
		
			    this.$notify({ type: 'success', message: '退出成功' });
					// 提示用户退出成功
					
					
				this.$router.push('/login')
				}
			})
			.catch(err=>console.log(err))
			
		}
	}
};
</script>

<style>
.user-index .a-color {
	color: #000;
}
.user-index .full {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: #f0f0f0;
}
.user-index .asside {
	background-color: #ffffff;
}
.user-index .headers {
	margin-left: 3%;
	width: 97%;
	height: 45px !important;
	background-color: #ffffff;
	margin-bottom: 10px;
	border-radius: 0 0 0 30px;
}
.user-index .con {
	margin-top: -15px;
	margin-left: 30px;

	background-color: #ffffff;
}

.user-index .el-menu-item {
}
.headers .hearder-cont {
	float: right;
	display: flex;
	align-items: center;
}
.user-index .el-tabs__item {
	margin-right: 10px;
	background-color: #fff;
	border-radius: 10px 10px 0 0;
	border: none;
}
/* is-top */
.user-index .el-tabs__nav {
	margin-left: 30px;
}
</style>

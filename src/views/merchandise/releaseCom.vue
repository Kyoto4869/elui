<template>
	<!-- 发布商品 -->

	<div class="releasecom" v-if="$store.state.Adminid != null ? true : $router.push('/login')">
		<!-- 步骤-->
		<div class="step">
			<el-steps :active="step" space="20%">
				<el-step title="活动信息" icon="el-icon-check"></el-step>
				<el-step title="添加活动产品" icon="el-icon-check"></el-step>
				<el-step title="创建成功" icon="el-icon-check"></el-step>
			</el-steps>
		</div>
		
		
		<!-- 第一步 -->
		<step-one v-if="step==1" :step.sync="step"></step-one>
		
		
		<!-- 第二步 -->
		
		<step-two v-if="step==2" :step.sync="step"></step-two>
		
		<!-- 第三步，结束步骤 -->
		<step-end v-if="step==3" ></step-end>
	</div>
</template>

<script>
	
import StepOne from '../../components/merchandise/releaseComOne.vue'	//发布商品第一步
import StepTwo from '../../components/merchandise/releaseComTwo.vue'    //发布商品第二步
import  StepEnd from '../../components/merchandise/releaseComEnd.vue'  //结束步骤
export default {
	data() {
		return {
			step: 1,
			
		};
	},
	components:{
		StepOne,StepTwo,StepEnd
		
	}
	
};
</script>

<style>
@import url('../../assets/css/releaseCom.css');
</style>

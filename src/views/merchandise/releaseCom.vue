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
		
		<step-one></step-one>
		
		
		
	</div>
</template>

<script>
	
import StepOne from '../../components/merchandise/releaseComOne.vue'	
	
export default {
	data() {
		return {
			step: 1,
			radio: '1'
		};
	},
	components:{
		StepOne
		
	}
	
};
</script>

<style>
@import url('../../assets/css/releaseCom.css');
</style>

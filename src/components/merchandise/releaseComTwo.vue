<template>
	<!-- 添加活动弄商品第二步 -->
	<div class="releaseComTwo">
		<!-- 标题标签 -->
		<div class="title"><P>添加活动商品</P></div>

		<!-- 搜索内容 -->
		<div class="serach">
			<div class="box">
				<span>商品编码：</span>
				<el-input placeholder="商品编码" v-model="input" clearable></el-input>
			</div>
			<div class="box">
				<span>sku码：</span>
				<el-input placeholder="sku码" v-model="input" clearable></el-input>
			</div>
			<div class="box">
				<span>商品名称：</span>
				<el-input placeholder="商品名称" v-model="input" clearable></el-input>
			</div>

			<div class="boxts">
				<el-link class="link">重置条件</el-link>
				<el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
			</div>
		</div>

		<!-- 添加 删除 -->

		<div class="btn boxts">
			<el-button type="primary" icon="el-icon-plus">添加活动商品</el-button>
			<el-button type="danger" icon="el-icon-delete">删除</el-button>
		</div>
		
		
		<!--  -->
		
	</div>
</template>

<script></script>

<style>
@import url('../../assets/css/releaseCom/releaseComTwo.css');
</style>

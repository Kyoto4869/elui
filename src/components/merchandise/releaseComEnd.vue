<template>
	<div class="releaseComEnd">
		<div>
			<div class="block">
				<el-image :src="require('../../assets/img/stepend.png')" style="margin-left: -30px; margin-bottom: 50px;">
					<div slot="placeholder" class="image-slot">
						正在提交数据
						<span class="dot">...</span>
					</div>
				</el-image>
			</div>

			<div>
				<el-button><router-link to="/user/listactivities">活动列表</router-link></el-button>

				<el-button type="primary">活动详情</el-button>
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
.releaseComEnd > div {
	margin-left: 500px;
}
</style>

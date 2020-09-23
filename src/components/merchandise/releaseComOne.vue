<template>
	<div>
		<!-- 基本信息 -->

		<div class="information admin">
			<p>基本信息</p>

			<div>
				<!-- iconfont icon-zhong -->
				<div class="box">
					<span>活动名称：</span>
					<el-input placeholder="30个字以内" maxlength="30" clearable></el-input>
				</div>

				<div class="box box-cont">
					<span>活动时间：</span>
					<template>
						<el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
						<span>至</span>
						<el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
					</template>
				</div>

				<div class="box">
					<span>广告语：</span>
					<el-input placeholder="12个字以内" maxlength="12" clearable></el-input>
				</div>

				<div class="box">
					<span>活动类型：</span>
					<el-input placeholder="30个字以内" maxlength="30" clearable></el-input>
				</div>
			</div>
		</div>

		<!-- 规则设置 -->
		<div class="information admin">
			<p>规则设置</p>

			<div>
				<div class="box box-cont">
					<span>活动时间预告：</span>
					<template>
						<el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
					</template>
				</div>

				<div class="box">
					<span>活动对象：</span>
					<template>
						<el-radio v-model="radio" label="1" name="不限">不限</el-radio>
						<el-radio v-model="radio" label="2">限新用户</el-radio>
					</template>
				</div>
				<div class="box">
					<span>购买限定：</span>
					<template>
						<el-radio v-model="radio" label="1">不限</el-radio>
						<el-radio v-model="radio" label="2">每人活动期限量</el-radio>
						<el-radio v-model="radio" label="2">每人每天限量</el-radio>
					</template>
				</div>

				<div class="box">
					<span>门店限制：</span>
					<template>
						<el-radio v-model="radio" label="1" name="不限">不限</el-radio>
						<el-radio v-model="radio" label="2">指定门店</el-radio>
						<el-button type="primary" size="small">选择门店</el-button>
					</template>
				</div>

				<div class="box">
					<span>配送方式：</span>
					<template>
						<el-radio v-model="radio" label="1" name="不限">不限</el-radio>
						<el-radio v-model="radio" label="2">仅自提</el-radio>
						<el-radio v-model="radio" label="2">仅配送</el-radio>
					</template>
				</div>

				<div class="box">
					<span>提货时间：</span>
					<template>
						<el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
					</template>
				</div>

				<div class="boxks"><el-button type="primary">下一步,添加活动商品</el-button></div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style></style>

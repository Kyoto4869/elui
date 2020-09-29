<template>
	<!-- 发布商品第一步 -->
	<div v-if="$store.state.Adminid!=null?true:$router.push('/login')">
		<!-- 基本信息 -->

		<div class="information admin">
			<p>基本信息</p>

			<div>
				<!-- iconfont icon-zhong -->
				<div class="box">
					<span>活动名称：</span>
					<el-input placeholder="30个字以内" maxlength="30" clearable v-model="activity.name"></el-input>
				</div>

				<div class="box box-cont">
					<span>活动时间：</span>
					<template>
						<el-date-picker v-model="activity.starttime" type="datetime" placeholder="选择日期时间"  value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
						<span>至</span>
						<el-date-picker v-model="activity.endtime" type="datetime" placeholder="选择日期时间"  value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
					</template>
				</div>

				<div class="box">
					<span>广告语：</span>
					<el-input placeholder="12个字以内" maxlength="12" v-model="activity.slogan" clearable></el-input>
				</div>

				<div class="box">
					<span>活动类型：</span>
					<el-input placeholder="30个字以内" maxlength="30" clearable v-model="activity.type"></el-input>
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
						<el-date-picker v-model="activity.noticetime" type="datetime" placeholder="选择日期时间"  value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
					</template>
				</div>

				<div class="box">
					<span>活动对象：</span>
					<template>
						<el-radio v-model="activity.objradio" label="不限" name="不限">不限</el-radio>
						<el-radio v-model="activity.objradio" label="限新用户" name="限新用户">限新用户</el-radio>
					</template>
				</div>
				<div class="box">
					<span>购买限定：</span>
					<template>
						<el-radio v-model="activity.buyradio" label="不限" name="不限">不限</el-radio>
						<el-radio v-model="activity.buyradio" label="每人活动期限量" name="每人活动期限量">每人活动期限量</el-radio>
						<el-radio v-model="activity.buyradio" label="每人每天限量" name="每人每天限量">每人每天限量</el-radio>
					</template>
				</div>

				<div class="box">
					<span>门店限制：</span>
					<template>
						<el-radio v-model="activity.storeslimited" label="不限" name="不限">不限</el-radio>
						<el-radio v-model="activity.storeslimited" label="指定门店" name="指定门店">指定门店</el-radio>
						<el-button type="primary" size="small">选择门店</el-button>
					</template>
				</div>

				<div class="box">
					<span>配送方式：</span>
					<template>
						<el-radio v-model="activity.distribution" label="不限" name="不限">不限</el-radio>
						<el-radio v-model="activity.distribution" label="仅自提" name="仅自提">仅自提</el-radio>
						<el-radio v-model="activity.distribution" label="仅配送" name="仅配送">仅配送</el-radio>
					</template>
				</div>

				<div class="box">
					<span>提货时间：</span>
					<template>
						<el-date-picker v-model="activity.pickuptime" type="datetime" placeholder="选择日期时间"  value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
					</template>
				</div>

				<div class="boxks"><el-button type="primary" @click="nextStep()">下一步,添加活动商品</el-button></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activity: {
				id:"",
				name: '', //活动名称
				starttime: '', //开始时间
				endtime: '', //结束时间
				slogan: '', //广告语
				type: '', //类型
				noticetime: '', //活动时间预告
				objradio: '不限', //活动对象
				buyradio: '不限', //购买限定
				storeslimited: '不限', //门店限制
				distribution: '不限', //配送方式
				pickuptime: '' //提货时间
			}
		};
	},
	created() {
		this.getdataback();
	},
	methods: {
		getdataback() {
			/* 返回后获取数据 */

			if (this.$store.state.Merchandise.nextStepOne.length == 0) {
				console.log('数据为空');
			} else {
				this.activity = this.$store.state.Merchandise.nextStepOne;
			}
		},
		nextStep() {
			/* 第一步提交数据 */

			let con = true;
			
			for (let i in this.activity) {
				if (this.activity[i] == '') {
					if (this.activity[i] == this.activity.noticetime) {
						con = true;
					}
				}
			}
			if (this.activity.pickuptime == '') {
				con = false;
			}

			if (con == true) {
				this.$store.state.Merchandise.nextStepOne = ''; //先清空数据
				/* 参数活动编号 */
				let id=parseInt(Math.random()*10000+1);
				this.$store.state.Merchandise.nextStepOne = {...this.activity,id}; //载入第一步的数据
				// console.log(this.$store.state.Merchandise.nextStepOne)
				this.$emit('update:step', 2); //发送完成的信息
			} else {
				this.$notify({
					title: '警告',
					message: '所填入的信息不能为空',
					type: 'warning'
				});
			}
		}
	}
};
</script>

<style></style>

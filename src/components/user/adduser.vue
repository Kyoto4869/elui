<template>
	<div class="adduser">
		<div>
			<span>账号</span>
			<el-input placeholder="账号" v-model="adduser.id" clearable :disabled="true"></el-input>
		</div>
		<div>
			<span>密码</span>
			<el-input placeholder="密码" v-model="adduser.pass" show-password :disabled="true"></el-input>
		</div>
		<div>
			<span>真实姓名</span>
			<el-input placeholder="真实姓名" v-model="adduser.name" clearable></el-input>
		</div>
		<div>
			<span>联系方式</span>
			<el-input placeholder="联系方式" v-model="adduser.phone" clearable></el-input>
		</div>
		<div>
			<span>邮箱</span>
			<el-input placeholder="邮箱" v-model="adduser.email" clearable></el-input>
		</div>

		<div>
			<span>角色</span>
			<template>
				<el-select v-model="adduser.role" multiple placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</template>
		</div>

		<div>
			<span>所属门店</span>
			<el-input placeholder="所属门店" v-model="adduser.Subordinateshop" clearable></el-input>
		</div>
		<div>
			<span>状态</span>
			<template>
				<el-radio v-model="adduser.status" label="有效">有效</el-radio>
				<el-radio v-model="adduser.status" label="无效">无效</el-radio>
			</template>
		</div>
		<div><el-button type="primary" @click="adduserdata()">保存</el-button></div>
	</div>
</template>

<script>
export default {
	props: {
		tableData: {
			type: Array,
			default: []
		},
		visible: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			addtab: this.tableData,
			visi: this.visible,
			options: [
				{
					value: '管理员',
					label: '管理员'
				},
				{
					value: '运营',
					label: '运营'
				},
				{
					value: '店长',
					label: '店长'
				},
				{
					value: '普通员工',
					label: '普通员工'
				}
			],
			adduser: {
				id: 'zeng12333',
				pass: '1111111',
				name: '',
				phone: '',
				role: [],
				Subordinateshop: '',
				status: '有效',
				email: '',
				namebf: '瑞鹏',
				lasttime: ''
			},
			adduserbf: {
				id: 'zeng12333',
				pass: '1111111',
				name: '',
				phone: '',
				role: [],
				Subordinateshop: '',
				status: '有效',
				email: '',
				namebf: '瑞鹏',
				lasttime: ''
			}
		};
	},
	created() {
		this.getdata();
	},
	methods: {
		getdata() {
			console.log(this.adduser);
			var date = new Date();
			var year = date.getFullYear(); //获取当前年份
			var mon = date.getMonth() + 1; //获取当前月份
			var da = date.getDate(); //获取当前日
			var h = date.getHours(); //获取小时
			var m = date.getMinutes(); //获取分钟
			var s = date.getSeconds(); //获取秒

			var time = year + '-' + mon + '-' + da + ' ' + h + ':' + m + ':' + s;
			console.log(this.adduser.lasttime);
			this.adduser.lasttime = time;
		},
		adduserdata() {
			this.addtab.unshift(this.adduser);
			console.log(this.tableData, 'addtab');
			this.$emit('update', this.tableData);
			this.$notify({
				title: '添加数据成功',
				type: 'success'
			});

			this.visi = false;
			this.adduser = this.adduserbf;
		}
	}
};
</script>

<style>
.adduser .el-input__inner {
	width: 300px;
}

.adduser {
	display: flex;
	justify-content: space-between;
	width: 300px;
	flex-wrap: wrap;
}
.adduser > div {
	margin: auto;
	display: flex;
	margin-top: 10px;
}
.adduser > div > span {
	width: 100px;
}
</style>

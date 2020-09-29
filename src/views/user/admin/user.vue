<template>
	<!-- 用户列表 -->
	<div class="user">
		<!-- 搜索 -->
		<div class="search">
			<div>
				<span>账号</span>
				<el-input placeholder="账号" v-model="search.id" clearable></el-input>
			</div>
			<div>
				<span>真实姓名</span>
				<el-input placeholder="真实姓名" v-model="search.name" clearable></el-input>
			</div>
			<div>
				<span>所属门店</span>
				<el-input placeholder="所属门店" v-model="search.Subordinateshop" clearable></el-input>
			</div>
			<div>
				<span>状态</span>
				<el-cascader :options="options" v-model="search.status">
					<template slot-scope="{ node, data }">
						<span>{{ data.label }}</span>
					</template>
				</el-cascader>
			</div>

			<div class="conten">
				<el-link class="link" @click="reset()">重置条件</el-link>
				<el-button type="primary" icon="el-icon-search" size="mini" @click="searchuser()">搜索</el-button>
			</div>
		</div>

		<!-- 操作 -->
		<div class="operation">
			<el-button type="primary" icon="el-icon-circle-plus-outline" @click="viewDetails()">新增</el-button>
			<el-button type="primary" icon="el-icon-edit">编辑</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="delVisi()">批量删除</el-button>
		</div>

		<!-- 数据表单 -->

		<div class="usertable">
			<template>
				<el-table :data="tableDataPage" height="400" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
					<!-- 实现部分删除  ref="multipleTable" -->

					<el-table-column type="selection" width="30"></el-table-column>

					<el-table-column prop="id" label="账号" width="180"></el-table-column>
					<el-table-column prop="namebf" label="昵称" width="180"></el-table-column>
					<el-table-column prop="name" label="真实姓名"></el-table-column>
					<el-table-column prop="Subordinateshop" label="所属门店"></el-table-column>
					<el-table-column prop="role" label="角色"></el-table-column>
					<el-table-column label="状态">
						<template slot-scope="scope">
							<span v-if="scope.row.status == '有效'">
								<el-tag type="success">{{ scope.row.status }}</el-tag>
							</span>
							<span v-else>
								<el-tag type="info">{{ scope.row.status }}</el-tag>
							</span>
						</template>
					</el-table-column>
					<el-table-column prop="phone" label="手机号"></el-table-column>
					<el-table-column prop="lasttime" label="最后登录时间" width="180"></el-table-column>
				</el-table>
			</template>
		</div>

		<!-- 数据表单 -->

		<!-- 分页器 -->
		<template>
			<div class="block">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[10, 50, 100, 200]"
					layout="total, sizes, prev, pager, next, jumper"
					:total="total"
				></el-pagination>
			</div>
		</template>

		<!-- 分页器 -->

		<!-- 删除提示框 -->
		<el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
			<div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="delVisible = false">取 消</el-button>
				<el-button type="primary" @click="deldata">确 定</el-button>
			</span>
		</el-dialog>
		<!--  -->
		<el-dialog title="新增用户" :visible.sync="Visible" class="add" width="500px">
			
			<adduser :tableData.sync="tableData" :visible.sync="Visible"></adduser>
			
			
			
	    </el-dialog>
	</div>
</template>

<script>
import adduser from '../../../components/user/adduser.vue';
import { getuserlistdata } from '../../../api/index.js';
export default {
	components: {
		adduser
	},
	data() {
		return {
			options: [
				{
					value: '有效',
					label: '有效'
				},
				{
					value: '无效',
					label: '无效'
				}
			],
			tableData: [],
			currentPage: 1, //换页的开始页面,与对应的页面
			tableDataPage: [], //页的数据
			total: 0, //总条数
			pageSize: 8, //每页条数
			multipleSelection: [], //多选的数据
			delVisible: false, //删除提示弹框的状态
			delarr: [], //存放删除的数据
			tableDataBf: [], //全部数据备份
			search: {
				id: '',
				name: '',
				Subordinateshop: '',
				status: ''
			},
			Visible: false
		};
	},
	created() {
		this.gettabuserlist();
	},
	methods: {
		/* 换页部分 */
		gx() {
			this.total = this.tableData.length; //计算有多少个数
			this.tableDataPage = this.tableData.slice(0, this.pageSize);
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pageSize = val;
			this.handleCurrentChange(this.currentPage);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			let start = (val - 1) * this.pageSize;
			let end = val * this.pageSize;
			this.tableDataPage = this.tableData.slice(start, end);
		},
		gettabuserlist() {
			getuserlistdata()
				.then(res => {
					console.log(res.data.list);
					this.tableData = res.data.list;
					this.gx();
				})
				.catch(err => console.log(err));
		},
		delVisi() {
			/* 显示删除提升 */
			this.delVisible = true; //显示删除弹框
		},
		deldata() {
			/* 删除部分 */
			console.log('删除');
			const length = this.multipleSelection.length;
			// for (let i = 0; i < length; i++) {
			// 	this.delarr.push(this.multipleSelection[i].id);
			// }

			for (let j = 0; j < this.tableData.length; j++) {
				for (let i = 0; i < length; i++) {
					if (this.tableData[j].id == this.multipleSelection[i].id) {
						console.log(j);
						this.tableData.splice(j, 1);
						console.log(this.tableData);
					}
				}
			}

			this.gx();
			this.delVisible = false; //关闭删除提示模态框
		},
		handleSelectionChange(val) {
			//操作多选，把选择的物质传入
			this.multipleSelection = val;
			console.log(this.multipleSelection);
		},

		searchuser() {
			/* 根据条件查找数据 */
			this.tableDataBf = this.tableData; //数据备份

			this.tableData = this.tableData.filter(item => {
				var con = true;

				// search: {
				// 	id: '',
				// 	name: '',
				// 	Subordinateshop: '',
				// 	role: '',
				// 	status: ''
				// }

				if (this.search.id && this.search.id != item.id) {
					con = false;
				}
				if (this.search.name && item.name.indexOf(this.search.name) == -1) {
					con = false;
				}
				if (this.search.Subordinateshop && item.Subordinateshop.indexOf(this.search.Subordinateshop) == -1) {
					con = false;
				}
				console.log(this.search.status);
				console.log(item.status);
				if (this.search.status && item.status != this.search.status) {
					con = false;
				}

				return con;
			});
			this.total = this.tableData.length; //计算有多少个数据
			this.handleCurrentChange(this.currentPage);
		},
		reset() {
			/* 恢复查询条件 */
			if (this.tableDataBf != '') {
				this.tableData = this.tableDataBf; //将备份数据给原始数据
				this.search.id = '';
				this.search.Subordinateshop = '';
				this.search.name = '';
				this.search.status = '';
				this.searchuser();
			}
		},
		viewDetails() {
			/* 添加数据 */

			this.Visible = true;
		}
	},
	watch: {
		tableData: {
			// 每个属性值发生变化就会调用这个函数
			handler(newVal, oldVal) {
				console.log(newVal);
				this.gx();
				
			},
			// 立即处理 进入页面就触发
			immediate: true,
			// 深度监听 属性的变化
			deep: true
		},
		Visible: {
			// 每个属性值发生变化就会调用这个函数
			handler(newVal, oldVal) {
				this.Visible=newVal;
				
			},
			// 立即处理 进入页面就触发
			immediate: true,
			// 深度监听 属性的变化
			deep: true
		},
		
		
	}
};
</script>

<style>
@import url('../../../assets/css/user/user.css');
</style>

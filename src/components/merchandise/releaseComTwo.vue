<template>
	<!-- 添加活动弄商品第二步 -->
	<div class="releaseComTwo" >
		<!-- 标题标签 -->
		<div class="title"><P>添加活动商品</P></div>

		<!-- 搜索内容 -->
		<div class="serach">
			<div class="box">
				<span>商品编码：</span>
				<el-input placeholder="商品编码" v-model="search.comCode" clearable></el-input>
			</div>
			<div class="box">
				<span>sku码：</span>
				<el-input placeholder="sku码" v-model="search.skucode" clearable></el-input>
			</div>
			<div class="box">
				<span>商品名称：</span>
				<el-input placeholder="商品名称" v-model="search.name" clearable></el-input>
			</div>

			<div class="boxts">
				<el-link class="link" @click="reset()">重置条件</el-link>
				<el-button type="primary" icon="el-icon-search" size="mini" @click="searchshop()">搜索</el-button>
			</div>
		</div>

		<!-- 添加 删除 -->

		<div class="btn boxts">
			<el-button type="primary" icon="el-icon-plus">添加活动商品</el-button>
			<el-button type="danger" icon="el-icon-delete">删除所选</el-button>
		</div>

		<!-- 商品表格 -->

		<div class="tab">
			<template>
				<el-table :data="tableDataPage" height="270" border style="width: 100%">
					<!-- 选择 -->
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="comCode" label="商品编码" width="100"></el-table-column>
					<el-table-column prop="skucode" label="SKU码" width="100"></el-table-column>
					<el-table-column prop="imgsrc" label="商品图片">
						<template slot-scope="scope">
							<img :src="scope.row.imgsrc" alt="" />
						</template>
					</el-table-column>
					<el-table-column prop="name" label="商品各称"></el-table-column>
					<el-table-column prop="original_price" label="正常价/元"></el-table-column>

					<el-table-column label="促销价/元">
						<template slot-scope="scope">
							<el-input v-model="scope.row.price" clearable></el-input>
						</template>
					</el-table-column>

					<el-table-column label="佣金比例/%">
						<template slot-scope="scope">
							<el-input v-model="scope.row.commission" clearable></el-input>
						</template>
					</el-table-column>

					<el-table-column label="限购量/件">
						<template slot-scope="scope">
							<el-input v-model="scope.row.pl" clearable></el-input>
						</template>
					</el-table-column>

					<el-table-column prop="count" label="活动总厍存/件">
						<template slot-scope="scope">
							<el-input v-model="scope.row.count" clearable></el-input>
						</template>
					</el-table-column>

					<el-table-column width="120" label="操作">
						<template slot-scope="scope">
							<el-link icon="el-icon-s-management" type="primary">保存</el-link>
							<el-link icon="el-icon-delete" type="danger" @click="handleDel(scope.$index, scope.row)">停用</el-link>
						</template>
					</el-table-column>
				</el-table>

				<div class="block">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-size="pageSize"
						layout="total,  prev, pager, next, jumper"
						:total="total"
					></el-pagination>
				</div>
			</template>
		</div>

		<!-- 商品表格 -->

		<!-- 提交数据 -->

		<div class="btn">
			<el-button size="small" @click="getback()">上一步活动信息</el-button>
			<el-button size="small" type="primary" @click="nextStep()">完成</el-button>
		</div>
	</div>
</template>

<script>
import { getreleaseComShop } from '../../api/index.js';
export default {
	data() {
		return {
			search: {
				// 查询条件
				name: '',
				skucode: '',
				comCode: ''
			},
			releaseComShop: [], //活动商品数据
			currentPage: 1, //换页的开始页面,与对应的页面
			total: 0, //总条数
			pageSize: 3, //每页条数
			tableDataBf: [], //全部数据备份
			tableData: [], //全部数据
			tableDataPage: [], //页的数据
			nextStepbf: [{ "essential": {}, "shop": {} }],//数据结构备份
			
		};
	},
	created() {
		this.getreleaseComShop();
	},
	methods: {
		getreleaseComShop() {
			/* 获取每次添加活动商品信息 里面固定有的活动商品 */
			getreleaseComShop()
				.then(res => {
					this.tableData = res.data.listcom;
					this.total = this.tableData.length; //计算有多少个数据
					this.tableDataPage = this.tableData.slice(0, this.pageSize); //分页
				})
				.catch(err => {
					console.log(err);
				});
		},
		/* 换页部分 */
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			console.log(this.tableData);

			let start = (val - 1) * this.pageSize;
			let end = val * this.pageSize;
			this.tableDataPage = this.tableData.slice(start, end);
		},
		/* 换页部分*/
		handleDel(index, row) {
			/* 删除数据 */
			console.log(index);
			this.tableDataPage.splice(index, 1); //删除单个页面的数据
			let count = (this.currentPage - 1) * this.pageSize + index;
			this.tableData.splice(count, 1); //删除总的数据shop
			this.tableDataBf.splice(count, 1); //删除总的数据shop
			this.total = this.tableData.length; //计算有多少个数据
			/* 对数据进行重新更新排序 */
			this.handleCurrentChange(this.currentPage);
		},

		searchshop() {
			/* 根据条件查找数据 */
			this.tableDataBf = this.tableData; //数据备份

			this.tableData = this.tableData.filter(item => {
				var con = true;
				if (this.search.name && item.name.indexOf(this.search.name) == -1) {
					con = false;
				}
				if (this.search.skucode && item.skucode != this.search.skucode) {
					con = false;
				}
				if (this.search.comCode && item.comCode != this.search.comCode) {
					con = false;
				}

				return con;
			});
			this.total = this.tableData.length; //计算有多少个数据
			this.handleCurrentChange(this.currentPage);
		},
		reset() {
			/* 删除查询条件 */
			if (this.tableDataBf != '') {
				this.tableData = this.tableDataBf; //将备份数据给原始数据
				this.search.name = '';
				this.search.skucode = '';
				this.search.comCode = '';
				this.searchshop();
			}
		},
		getback() {
			/* 返回上一步 */
			this.$emit('update:step', 1);
		},
		nextStep() {
			/* 完成第二步，提交数据  this.$store.state.Merchandise.nextStepTwo =*/

			this.$store.state.Merchandise.nextStepEnd = this.nextStepbf; //设置值为空，先清空数据第二步的存储空间
			this.$store.state.Merchandise.nextStepTwo = this.tableData;
			console.log(this.$store.state.Merchandise.nextStepTwo);
			// nextStepEnd:[],//结合总和
			//console.log(this.$store.state.Merchandise.nextStepEnd[0].one)
			this.$store.state.Merchandise.nextStepEnd[0].essential = this.$store.state.Merchandise.nextStepOne;
			this.$store.state.Merchandise.nextStepEnd[0].shop = this.$store.state.Merchandise.nextStepTwo;
			console.log(this.$store.state.Merchandise.nextStepEnd[0],"一次");
			
			
			/* 实现多次加入数据 */
			this.$store.state.Merchandise.addActivityS.unshift(this.$store.state.Merchandise.nextStepEnd[0])
			console.log(this.$store.state.Merchandise.addActivityS,"addActivityS")
			
			
			/* 清空数据 */
			this.$store.state.Merchandise.nextStepOne=[];
			this.$store.state.Merchandise.nextStepTwo=[];
			
			this.$emit('update:step', 3);
		}
	}
};
</script>

<style>
@import url('../../assets/css/releaseCom/releaseComTwo.css');
</style>

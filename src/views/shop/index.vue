<template>
	<!-- 门店 -->
	<div class="shop">
		<div class="hearder">
			<div>
				<span>门店名</span>
				<el-input placeholder="门店名" clearable size="small"></el-input>
			</div>
			<div>
				<span>门店地址</span>
				<el-input placeholder="门店地址" clearable size="small"></el-input>
			</div>
			<div>
				<span>业态</span>
				<el-input placeholder="业态" clearable size="small"></el-input>
			</div>

			<div class="cx">
				<el-link class="link">重置条件</el-link>
				<el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
			</div>

			<div style="margin-left: 20px;">
				<!-- 新增门店 -->
				<el-button size="mini" icon="el-icon-plus" type="primary">新增</el-button>
			</div>
		</div>
		<div class="content">
			<div class="about">
				<!-- 表单 -->
				<template>
					<el-table ref="multipleTable" :data="tableDataPage" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>

						<el-table-column prop="name" label="店名" width="120"></el-table-column>
						<el-table-column prop="commercial" label="业态" width="120"></el-table-column>
						<el-table-column prop="address" label="地址" show-overflow-tooltip width="300"></el-table-column>
						<el-table-column prop="starttime" label="开始营业时间" width="150"></el-table-column>
						<el-table-column prop="endtime" label="结束营业时间" width="150"></el-table-column>
						<el-table-column label="是否上线" width="100">
							<template slot-scope="scope">
								<el-switch :value="scope.row.olloutr" active-color="#427af6" inactive-color="#ff4949" @change="scope.row.olloutr = !scope.row.olloutr"></el-switch>
							</template>
						</el-table-column>

						<el-table-column label="操作" width="150">
							<template slot-scope="scope">
								<span style="color: #427af6;margin-right: 15px;">
									<i class="el-icon-edit-outline"></i>
									编辑
								</span>
								<!-- 删除操作 -->
								<span style="color: red;" @click="handleDel(scope.$index, scope.row)">
									<i class="el-icon-delete"></i>
									删除
								</span>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<!-- 表单 -->
			</div>
		</div>

		<div class="footer">
			<!-- 分页 -->

			<template>
				<div class="block">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage"
						:page-size="pageSize"
						layout="total, prev, pager, next"
						:total="total"
					></el-pagination>
				</div>
			</template>
			<!-- 分页 -->
		</div>
	</div>
</template>

<script>
import { getshop } from '../../api/index.js';
export default {
	data() {
		return {
			tableData: [],//全部数据
			multipleSelection: [],
			currentPage: 1,//换页的开始页面,与对应的页面
			tableDataPage: [],//页的数据
			total:0,//总条数
			pageSize:8,//每页条数
			
		};
	},
	created() {
		this.getshoplist();
	},
	methods: {
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
			console.log(this.tableData)
			
			let start=(val-1)*this.pageSize;
			let end=val*this.pageSize;
			this.tableDataPage=this.tableData.slice(start,end)
			
			
			
			
		},
       /* 换页部分*/


		getshoplist() {
			/* 获取店铺数据*/
			getshop()
				.then(res => {
					this.tableData = res.data.list;
					// console.log(res.data.list);
					
					this.total=this.tableData.length;//计算有多少个数据
					
					this.tableDataPage=this.tableData.slice(0,this.pageSize)
				})
				.catch(err => {
					console.log(err);
				});
		},
		handleDel(index,row) {
			/* 删除事件shop的数据 */
			console.log(index)
			this.tableDataPage.splice(index, 1);//删除单个页面的数据
			/*  */
			
			let count=((this.currentPage-1)*this.pageSize)+index;
			this.tableData.splice(count,1);//删除总的数据shop
			
			
		}
	}
};
</script>

<style>
@import url('../../assets/css/shop.css');
</style>

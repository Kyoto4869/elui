<template>
	<!-- 活动列表 -->
	<div class="listActivities" v-if="$store.state.Adminid!=null?true:$router.push('/login')">
		<!-- 第一层头部 -->

		<div class="topone">
			<div>
				<span>活动编号</span>
				<el-input placeholder="活动编号" v-model="id" clearable></el-input>
			</div>
			<div>
				<span>活动名称</span>
				<el-input placeholder="活动名称" v-model="name" clearable></el-input>
			</div>
			<div>
				<span>活动状态</span>
				<el-button size="mini" type="primary">全部{{ total }}</el-button>
				<el-button size="mini">待开始</el-button>
				<el-button size="mini">进行中</el-button>
				<el-button size="mini">已经结束999</el-button>
			</div>
		</div>

		<!-- 第二层头 -->
		<div class="toptow">
			<div>
				<span>活动状态:</span>
				<template>
					<el-radio-group v-model="radio">
						<el-radio :label="1">全部</el-radio>
						<el-radio :label="2">社区团购</el-radio>
						<el-radio :label="3">折扣</el-radio>
						<el-radio :label="4">直降</el-radio>
					</el-radio-group>
				</template>
			</div>

			<div>
				<el-link type="primary" style="margin-right: 20px;" @click="reset()">重置筛选条件</el-link>
				<el-button size="mini" type="primary" @click="search()">查询</el-button>
			</div>
		</div>

		<!-- 表单start-->
		<div class="tabl">
			<template>
				<el-table
					:data="tableDataPage"
					height="400"
					border
					style="width: 100%"
					v-loading="loading"
					element-loading-text="拼命加载中"
					element-loading-spinner="el-icon-loading"
					element-loading-background="rgba(255, 255, 255, 0.4)"
				>
					<el-table-column type="selection" width="30"></el-table-column>

					<el-table-column prop="essential.type" label="活动类型" width="100"></el-table-column>

					<el-table-column prop="essential.id" label="活动编号" width="100"></el-table-column>
					<el-table-column prop="essential.name" label="活动名称" width="120"></el-table-column>
					<el-table-column prop="essential.starttime" label="开始时间" width="300"></el-table-column>
					<el-table-column prop="essential.endtime" label="结束时间" width="300"></el-table-column>
					<!-- 	<el-table-column prop="essential.endtime" label="结束时间"></el-table-column> -->
					<el-table-column label="状态">
						<template slot-scope="scope">
							<el-link type="danger" v-if="scope.row.essential.noticetime == '' || scope.row.essential.starttime > scope.row.essential.noticetime">等待开始</el-link>
							<el-link type="success" v-if="scope.row.essential.noticetime > scope.row.essential.starttime">进行中</el-link>
							<el-link type="info" v-if="datetime > scope.row.essential.endtime">已结束</el-link>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-link icon="el-icon-date" type="primary" @click="viewDetails(scope.row)">详情</el-link>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<!-- 表单end -->
		<!-- 分页 -->
		<template>
			<div class="block">
				<span class="demonstration">显示总数</span>
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="currentPage"
					:page-sizes="[10, 20, 30, 40]"
					layout="total, sizes, prev, pager, next, jumper"
					:total="total"
				></el-pagination>
			</div>
		</template>

		<!-- 详情弹出框内容start -->
		<div v-if="Visible">
			<el-dialog title="活动信息" :visible.sync="Visible" width="1000px">
				<el-tabs type="border-card">
					<el-tab-pane label="活动信息">
						<div class="el-dia-listactivity">
							<p>活动信息</p>
							<div>
								<span>活动名称：</span>
								<span>{{ detailsData.essential.name }}</span>
								<br />
								<span>活动时间：</span>
								<span>{{ detailsData.essential.starttime }}</span>
								至
								<span>{{ detailsData.essential.endtime }}</span>
								<br />
								<span>广告语：</span>
								<span>{{ detailsData.essential.slogan }}</span>
								<br />
								<span>促销类型：</span>
								<span>{{ detailsData.essential.type }}</span>
							</div>
							<p>活动规矩</p>
							<div>
								<span>顾客类型：</span>
								<span>{{ detailsData.essential.objradio }}</span>
								<br />
								<span>是否限量：</span>
								<span>{{ detailsData.essential.buyradio }}</span>
								<br />
								<span>配送方式：</span>
								<span>{{ detailsData.essential.distribution }}</span>
								<br />
								<span>提货时间：</span>
								<span>{{ detailsData.essential.pickuptime }}</span>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="商品列表">
						<div class="el-dia-listactivity">
							<template>
								<el-table :data="shop" height="270" border style="width: 100%">
									<el-table-column prop="comCode" label="商品编码" width="100"></el-table-column>
									<el-table-column prop="skucode" label="SKU码" width="100"></el-table-column>
									<el-table-column prop="imgsrc" label="商品图片">
										<template slot-scope="scope">
											<img :src="scope.row.imgsrc" alt="" />
										</template>
									</el-table-column>
									<el-table-column prop="name" label="商品各称"></el-table-column>
									<el-table-column prop="original_price" label="正常价/元"></el-table-column>

									<el-table-column label="促销价/元" prop="price"></el-table-column>

									<el-table-column label="佣金比例/%" prop="commission"></el-table-column>

									<el-table-column label="限购量/件" prop="pl"></el-table-column>

									<el-table-column prop="count" label="活动总厍存/件"></el-table-column>
								</el-table>
							</template>
						</div>
					</el-tab-pane>
					<el-tab-pane label="门店列表">
						<div class="el-dia-listactivity">
							<template>
								<el-table :data="store" height="270" border style="width: 100%">
									<el-table-column prop="id" label="门店编码" width="300"></el-table-column>
									<el-table-column prop="name" label="门店名称" width="300"></el-table-column>
									

									<el-table-column prop="commercial" label="业态" width="300"></el-table-column>
								</el-table>
							</template>
							
							
							
							
					</div>
					</el-tab-pane>
				</el-tabs>
			</el-dialog>

			<!-- 详情弹出框内容end -->
		</div>
	</div>
</template>

<script>
import { getlistActivities } from '../../api/index.js';

export default {
	components: {},
	data() {
		return {
			loading: true,
			nextStepbf: [{ essential: {}, shop: {} }], //数据结构备份this.$store.state.Merchandise.nextStepEn
			datetime: '', //当前时间
			id: '', //活动编号
			name: '', //活动名称
			radio: 1,
			currentPage: 1,
			total: 0, //总条数
			pageSize: 10, //每页条数
			tableDataBf: [], //全部数据备份
			tableData: [], //全部数据
			tableDataPage: [], //页的数据
			tableDataBf: [], //全部数据备份
			activeName: 'first',
			Visible: false,
			detailsData: [],
			shop: [],
			store:[],
			
		};
	},
	created() {
		this.getlistactivities();
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
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
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pageSize = val;
			console.log(this.pageSize);
			this.handleCurrentChange(this.currentPage);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			let start = (val - 1) * this.pageSize;
			let end = val * this.pageSize;
			this.tableDataPage = this.tableData.slice(start, end);
		},
		getlistactivities() {
			getlistActivities()
				.then(res => {
					/* 获取之前存的值 */
					// console.log(this.$store.state.Merchandise.nextStepEnd, 'vuex');
					this.tableData = res.data.listactivities;
					/* 将之前添加的活动就加入 */

					this.tableData = this.$store.state.Merchandise.addActivityS.concat(this.tableData);
					this.total = this.tableData.length;
					this.tableDataPage = this.tableData.slice(0, this.pageSize);
					this.loading = false;
					// console.log(this.liactshop);
				})
				.catch(err => console.log(err));
		},
		getdate() {
			//获取当前时间
			var date = new Date();
			var seperator1 = '-';
			var seperator2 = ':';
			var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
			var strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
			var currentdate =
				date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();

			this.datetime = currentdate;
		},
		search() {
			/*筛选数据 */
			this.tableDataBf = this.tableData; //数据备份
			this.tableData = this.tableData.filter(item => {
				var con = true;
				if (this.name && item.essential.name.indexOf(this.name) == -1) {
					con = false;
				}
				if (this.id && item.essential.id != this.id) {
					con = false;
				}
				// if (this.radio==1&&this.radio) {

				// 	con = false;
				// }
				return con;
			});
			this.total = this.tableData.length; //计算有多少个数据
			this.handleCurrentChange(this.currentPage);
		},
		reset() {
			// 重置

			if (this.tableDataBf != '') {
				this.tableData = this.tableDataBf; //将备份数据给原始数据
				this.id = '';
				this.name = '';
				this.radio = 1;
				this.search();
			}
		},
		viewDetails(data) {
			/* 查看详情 */
			this.detailsData = [];
			this.detailsData = data;
			console.log(this.detailsData);
			this.Visible = true;
			this.shop=this.detailsData.shop;
			this.store=this.detailsData.store;
			//this.shop.unshift(this.detailsData.shop);
			console.log(this.detailsData.shop, '1111');
		}
	}
};
</script>

<style>
@import url('../../assets/css/releaseCom/listActivities.css');
</style>

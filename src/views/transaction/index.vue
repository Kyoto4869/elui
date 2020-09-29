<template>
	<div class="transaction" v-if="$store.state.Adminid != null ? true : $router.push('/login')">
		<div class="search-top">
			<div class="cont-top">
				<!-- 单选 -->
				<div>
					<span>配送方式 :</span>
					<template>
						<el-radio v-model="radio" label="全部">全部</el-radio>
						<el-radio v-model="radio" label="自提">自提</el-radio>
						<el-radio v-model="radio" label="配送">配送</el-radio>
					</template>
				</div>
			</div>

			<div class="cont-top-box">
				<div>
					<span>订单编号</span>
					<el-input placeholder="订单编号" v-model="search.id" clearable></el-input>
					<span>商品编号</span>
					<el-input placeholder="商品编号" v-model="search.Paymentorder" clearable></el-input>
					<span>所属门店</span>
					<el-input placeholder="所属门店" v-model="search.store" clearable></el-input>
				</div>

				<div>
					<el-link class="link" @click="reset()">重置条件</el-link>
					<el-button type="primary" icon="el-icon-search" size="mini" @click="searchlist()">搜索</el-button>
				</div>
			</div>

			<div class="cont-top-box">
				<div class="cont-top-box-two">
					<span>会员账号</span>
					<el-input placeholder="会员账号" v-model="search.Memberid" clearable></el-input>
					<span>收货人</span>
					<el-input placeholder="收货人" v-model="search.name" clearable></el-input>
					<span>下单时间</span>
					<el-date-picker type="datetime" v-model="search.starttime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
					至
					<el-date-picker type="datetime" v-model="search.endtime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				</div>
			</div>
		</div>

		<!-- 表单-->
		<div class="transaction-cont">
			<template>
				<el-table :data="tableDataPage" height="400" border style="width: 100%">
					<el-table-column type="selection" width="30"></el-table-column>
					<el-table-column prop="essential.id" label="订单编号" width="180"></el-table-column>
					<el-table-column prop="essential.ordertime" label="下单时间" width="180"></el-table-column>
					<el-table-column prop="essential.Memberid" label="会员账号"></el-table-column>
					<el-table-column prop="essential.amount" label="订单总额"></el-table-column>
					<el-table-column prop="essential.store" label="所属门店"></el-table-column>
					<el-table-column label="订单状态">
						<template slot-scope="scope">
							<span style="color: red;" v-if="scope.row.essential.status == '待付款'">{{ scope.row.essential.status }}</span>

							<span style="color: blue;" v-if="scope.row.essential.status == '拒接'">{{ scope.row.essential.status }}</span>
							<span style="color: black;" v-if="scope.row.essential.status == '已经处理'">{{ scope.row.essential.status }}</span>
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
		<!-- 表单-->

		<!-- 分页 -->
		<div class="btn">
			<template>
				<div class="block">
				
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-sizes="[50, 100, 200, 400]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="total"
					></el-pagination>
				</div>
			</template>
		</div>
		
		
		<!-- 弹出组件 -->
		<div >
			<el-dialog title="订单详情" :visible.sync="Visible">
			  <orderdetails :onelistdata.sync="onelistdata"></orderdetails>
			</el-dialog>
		</div>
		
		
		
		
	</div>
</template>

<script>
import { getorderlistdata } from '../../api/index.js';
import orderdetails from '../../components/transaction/orderdetails.vue'
export default {
	components:{
		orderdetails
	},
	data() {
		return {
			onelistdata:[],//传入组件的数据
			loading: true,
			Visible: false,
			input: '',
			radio: '全部',
			activeName: '1', //头部选择
			tableData: [], //订单数据
			total: 0, //总条数
			pageSize: 10, //每页条数
			currentPage: 1,
			tableDataPage: [], //页的数据
			tableDataBf: [], //全部数据备份
			search: {
				id: '',
				Paymentorder: '',
				store: '',
				Memberid: '',
				name: '',
				starttime: '',
				endtime: ''
			},
			searchbf: {
				id: '',
				Paymentorder: '',
				store: '',
				Memberid: '',
				name: '',
				starttime: '',
				endtime: ''
			}
		};
	},

	created() {
		this.getorderlist();
	},

	methods: {
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
		handleClick(tab, event) {
			console.log(tab, event);
		},
		getorderlist() {
			getorderlistdata()
				.then(res => {
					this.tableData = res.data.orderlist;
					this.total = this.tableData.length; //计算有多少个数据
					this.tableDataPage = this.tableData.slice(0, this.pageSize);
					this.loading = false;
				})
				.catch(err => console.log(err));
		},
		viewDetails(data) {
			/* 查看详情 */
			console.log(data);
			this.Visible = true;
		    this.onelistdata=[];
			this.onelistdata.unshift(data);
			console.log(this.onelistdata)
		},
		searchlist() {
			/*筛选数据 */
			this.tableDataBf = this.tableData; //数据备份
			this.tableData = this.tableData.filter(item => {
				var con = true;

				if (this.search.id && this.search.id != item.essential.id) {
					con = false;
				}
				if (this.search.name && this.search.name != item.harvester.name) {
					con = false;
				}
				if (this.search.Paymentorder && this.search.Paymentorder != item.essential.Paymentorder) {
					con = false;
				}
				if (this.search.store && this.search.store != this.essential.store) {
					con = false;
				}
				if (this.search.Memberid && this.search.Memberid != this.essential.Memberid) {
					con = false;
				}
				if (this.search.starttime && this.search.endtime && this.search.starttime < item.essential.ordertime && this.search.endtime > item.essential.ordertime) {
					con = false;
				}

				return con;
			});
			this.total = this.tableData.length; //计算有多少个数据
			this.handleCurrentChange(this.currentPage);
		},
		reset(){
			if(this.tableDataBf!=""){
				this.tableData=this.tableDataBf;//将备份数据给原始数据
				this.search=this.searchbf;
				this.searchlist()
			}
			
			
			
			
			
			
			
			
		}
		
		
		
		
	}
};
</script>

<style>
@import url('../../assets/css/transaction/ind.css');
</style>

<template>
	<div class="orderdetails">
		<el-steps :active="1">
			<el-step title="提交订单" icon="el-icon-check"></el-step>
			<el-step title="支付订单" icon="el-icon-check"></el-step>
			<el-step title="待发货" icon="el-icon-check"></el-step>
			<el-step title="待收货" icon="el-icon-check"></el-step>
			<el-step title="已收货" icon="el-icon-check"></el-step>
		</el-steps>

		<div>
			<el-button type="primary">当前状态：待付款</el-button>
			<el-button>备注信息</el-button>
			<el-button type="primary">添加备注</el-button>
		</div>

		<div class="order-top">
			<h4>基本信息</h4>
			<template>
				<el-table :data="listdata" border style="width: 100%">
					<el-table-column prop="essential.id" label="订单编号" width="180"></el-table-column>
					<el-table-column prop="essential.Memberid" label="会员账号" width="180"></el-table-column>
					<el-table-column prop="essential.payment" label="支付方式"></el-table-column>
					<el-table-column prop="essential.Paymentorder" label="支付单号"></el-table-column>
					<el-table-column prop="essential.Delivery" label="提货日期"></el-table-column>
					<el-table-column prop="essential.store" label="提货门店"></el-table-column>
				</el-table>
			</template>
		</div>
		<div  class="order-top">
			<h4>收货人信息</h4>
			<template>
				<el-table :data="listdata"  border style="width: 100%">
					<el-table-column prop="harvester.name" label="姓名" width="180"></el-table-column>
					<el-table-column prop="harvester.phone" label="手机号" width="180"></el-table-column>
					<el-table-column prop="harvester.address" label="地址"></el-table-column>
				</el-table>
			</template>
		</div>
		<div  class="order-top">
			<h4>商品信息</h4>
			<template>
				<el-table :data="shop" border style="width: 100%">
					
					<el-table-column  label="商品图片" width="180">
						<template slot-scope="scope">
							<img :src="scope.row.imgsrc" alt="" />
						</template>
					</el-table-column>
					<el-table-column prop="name" label="商品各称" width="180"></el-table-column>
					<el-table-column prop="price" label="价格"></el-table-column>
					<el-table-column prop="specification" label="规格"></el-table-column>
					<el-table-column prop="count" label="数量"></el-table-column>
					<el-table-column  label="小计">
						<template slot-scope="scope">
							{{scope.row.count*scope.row.price}}
						</template>
						
					</el-table-column>
				</el-table>
			</template>
		</div>
		<div  class="order-top">
			<h4>费用信息</h4>
			<template>
				<el-table :data="sum"  border style="width: 100%">
					<el-table-column prop="sum" label="商品合计" width="180">
						
					</el-table-column>
					<el-table-column prop="add" label="活动优惠" width="180"></el-table-column>
					<el-table-column prop="sum" label="订单总金额"></el-table-column>
					<el-table-column prop="sum" label="应付金额"></el-table-column>
				</el-table>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		onelistdata: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			shop:[],
			active: 1,
			listdata: this.onelistdata,
			sum:[{
				sum:200,
				add:0
			}]
			
		};
	},
	created() {
		this.datalist()
	},
	methods:{
		datalist(){
			// console.log(this.listdata)
			this.shop=this.listdata[0].shop;
			// console.log(this.shop)
			
			
			/* 订单总金额度 */
			
			
			
			
		}
		
		
	}
	
};
</script>

<style>
	
	
	.order-top{
		margin-top: 30px;
	}
</style>

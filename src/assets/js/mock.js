import Mock from 'mockjs'
const Random = Mock.Random;

Mock.mock('uersbgimg', {
	msg: "succees",
	status: 0,
	list: [{
		imgsrc: '/assets/img/1.jpg',


	}, ]
})

/* 获取随机生成的验证码 */
Mock.mock('usercode', {

	"score|1000-9999": 1000, //随机生成1-800的数字
})


/* 获取店铺信息 */
Mock.mock('shop', {
	msg: "succees",
	status: 0,
	list: [

		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道2号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道3号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道4号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道5号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道6号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道7号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		}, {
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道8号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
		{
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道9号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		}, {
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道10号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		}, {
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道11号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		}, {
			name: "九龙城店",
			commercial: "大卖场",
			address: '威海大道12号',
			starttime: "8：00",
			endtime: "20：00",
			olloutr: true,
		},
	]



})


/* 首页数据 */

Mock.mock('admin', {

	msg: "succees",
	status: 0,
	/* 产生头部数据 */
	listtop: [{
			imgsrc: "@image('60x60')",
			title: '待接收货订单',
			"count|0-10000": 10000,
		},
		{
			imgsrc: "@image('60x60')",
			title: '待处理退款',
			"count|0-10000": 10000,
		},
		{
			imgsrc: "@image('60x60')",
			title: '待接收货订单',
			"count|0-10000": 10000,
		},
		{
			imgsrc: "@image('60x60')",
			title: '待处理退款',
			"count|0-10000": 10000,
		},
	],
	listcont: [{
			imgsrc: require('../../assets/img/首页1.png'),
			"count|0-10000": 10000,
		},
		{
			imgsrc: require('../../assets/img/首页2.png'),
			"count|5000-100000": 10000,
		}, {
			imgsrc: require('../../assets/img/首页3.png'),
			"count|0-10000": 10000,
		}, {
			imgsrc: require('../../assets/img/首页4.png'),
			"count|0-10000": 10000,
		},
	],
	listbtn1: [{
			title: '已下架',
			"count|0-5000": 5000,
		},
		{
			title: '已上架',
			"count|5000-50000": 50000,
		},
		{
			title: '活动商品',
			"count|0-500": 500,
		},
		{
			title: '全部商品',
			"count|1000-199999": 99999,
		},
	],
	listbtn2: [{
			title: '今日新增',
			"count|20-500": 500,
		},
		{
			title: '昨日新增',
			"count|50-500": 500,
		},
		{
			title: '本月新增',
			"count|0-5000": 5000,
		},
		{
			title: '用户天数',
			"count|10-199": 99,
		},
	]







})


/* 每次添加活动商品信息 里面固定有的活动商品 */
Mock.mock('releaseComShop', {
	msg: "succees",
	status: 0,
	/* 商品编码SKU码
商后图片―商品各称
正常价《元〉促逆价〔元〕佣金比例%限购量〔性》话动总厍存〔件〕
 */

	listcom: [{
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}, {
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}, {
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}, {
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}, {
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}, {
			"comCode": Random.integer(1000000, 9999999), //商品编码
			"skucode": Random.integer(6000000000, 6999999999), //SKU码
			"imgsrc": "@image('40x40')", //商品图片
			"name": Random.csentence(3, 5), //商品各称
			'original_price': Random.integer(50, 100), //正常价
			"price": Random.integer(5, 50), //促销价
			"commission": Random.integer(1, 20), //佣金比例%
			"pl": Random.integer(10, 999), //限购量
			"count": Random.integer(999, 9999) //活动总厍存
		}


	]
})



/* 营销-活动列表数据   需要模仿这个结构

nextStepEnd: [{
		"essential": {
			//基本信息
			name: '', //活动名称
			starttime: '',//开始时间
			endtime: '',//结束时间
			slogan: '', //广告语
			type: '', //类型
			noticetime: '', //活动时间预告（这个信息可以无）
		   objradio: '不限', //活动对象
			buyradio: '不限', //购买限定
			storeslimited: '不限', //门店限制
			distribution: '不限', //配送方式
			pickuptime: '' //提货时间
			
			
			
		},
		"shop": {
           //活动商品信息
		   "comCode": Random.integer(1000000, 9999999), //商品编码
		   "skucode": Random.integer(6000000000, 6999999999), //SKU码
		   "imgsrc": "@image('40x40')", //商品图片
		   "name": Random.csentence(3, 5), //商品各称
		   'original_price': Random.integer(50, 100), //正常价
		   "price": Random.integer(5, 50), //促销价
		   "commission": Random.integer(1, 20), //佣金比例%
		   "pl": Random.integer(10, 999), //限购量
		   "count": Random.integer(999, 9999) //活动总厍存
		},
	}], //结合总和


*/

/*营销-活动列表数据   需要模仿上面结构  */
Mock.mock('listactivities', {
	msg: "succees",
	status: 0,

	"listactivities|1000": [{

			"essential": {
				"id|+1": 10008, //活动编号
				name: '@ctitle', //活动名称
				starttime: '@date("yyyy-MM-dd HH:mm:ss")', //开始时间
				endtime: '@date("yyyy-MM-dd HH:mm:ss")', //结束时间
				slogan: '@ctitle', //广告语'name|min-max': string
				type: '社区团购', //类型
				noticetime: '@date("yyyy-MM-dd HH:mm:ss")', //活动时间预告（这个信息可以无）
				objradio: '不限', //活动对象
				buyradio: '不限', //购买限定
				storeslimited: '不限', //门店限制
				distribution: '不限', //配送方式
				pickuptime: '@date("yyyy-MM-dd HH:mm:ss")' //提货时间
			},
			"shop|10": [


				{
					"comCode": Random.integer(1000000, 9999999), //商品编码
					"skucode": Random.integer(6000000000, 6999999999), //SKU码
					"imgsrc": "@image('40x40')", //商品图片
					"name": Random.csentence(3, 5), //商品各称
					'original_price': Random.integer(50, 100), //正常价
					"price": Random.integer(5, 50), //促销价
					"commission": Random.integer(1, 20), //佣金比例%
					"pl": Random.integer(10, 999), //限购量
					"count": Random.integer(999, 9999) //活动总厍存
				}
			],

			"store|2": [{
				id: 111111,
				name: "龙城店",
				commercial: "大卖场",
			}]




		}


	]

})



/* 订单-订单列表数据 */

Mock.Random.extend({
	phone: function() {
		var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
		return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
	}
})


var arr = ["已经处理", "拒接", "待付款"];
var arr2 = ["自提", "配送"]
Mock.mock('orderlistdata', {
	msg: "succees",
	status: 0,

	"orderlist|100": [{
			/* 基本信息 */
			"essential": {
				"id|+1": 10000008, //订单编号
				ordertime: '@date("yyyy-MM-dd HH:mm:ss")', //下单时间
				"Memberid|+1": 11111111, //会员账号
				amount: 200, //订单金额
				store: "九龙仓店", //门店
				"status": arr[Math.floor((Math.random() * arr.length))], //订单状态 1 处理  2 拒接 3 代付款
				"payment": "微信支付",
				"Paymentorder|+1": 12345678910, //支付单号
				"Delivery": '@date("yyyy-MM-dd")', //提货日期
				"distribution|0-1": arr2[Math.floor((Math.random() * arr2.length))], //配送方式 1 为自己提 
				"amount": "200" //订单总额
			},

			"harvester": {
				/* 收件人信息 */
				name: Random.cfirst(), //姓名
				phone: '@phone', //手机号
				address: Random.province() //地址
			},

			"shop|3": [{
				"imgsrc": "@image('40x40')", //商品图片
				"name": Random.csentence(3, 5), //商品各称
				'original_price': Random.integer(50, 100), //正常价
				"price": Random.integer(5, 50), //促销价
				"count": Random.integer(1, 50), //购买数量
				"specification": 500,

			}],
			"leave|3": [{
				cont: Random.csentence(1, 3),
				name: "小艺",
				bool: true,
			}]

		},
		{
			/* 基本信息 */
			"essential": {
				"id|+1": 10000008, //订单编号
				ordertime: '@date("yyyy-MM-dd HH:mm:ss")', //下单时间
				"Memberid|+1": 11111111, //会员账号
				amount: 200, //订单金额
				store: "九龙仓店", //门店
				"status": arr[Math.floor((Math.random() * arr.length))], //订单状态 1 处理  2 拒接 3 代付款
				"payment": "微信支付",
				"Paymentorder|+1": 12345678910, //支付单号
				"Delivery": '@date("yyyy-MM-dd")', //提货日期
				"distribution|0-1": arr2[Math.floor((Math.random() * arr2.length))], //配送方式 1 为自己提 
				"amount": "200" //订单总额
			},

			"harvester": {
				/* 收件人信息 */
				name: Random.cfirst(), //姓名
				phone: '@phone', //手机号
				address: Random.province() //地址
			},

			"shop|3": [{
				"imgsrc": "@image('40x40')", //商品图片
				"name": Random.csentence(3, 5), //商品各称
				'original_price': Random.integer(50, 100), //正常价
				"price": Random.integer(5, 50), //促销价
				"count": Random.integer(1, 50), //购买数量
				"specification": 500

			}],
			"leave|3": [{
				cont: Random.csentence(1, 3),
				name: "小艺",
				bool: true,
			}]








		},
		{
			/* 基本信息 */
			"essential": {
				"id|+1": 10000008, //订单编号
				ordertime: '@date("yyyy-MM-dd HH:mm:ss")', //下单时间
				"Memberid|+1": 11111111, //会员账号
				amount: 200, //订单金额
				store: "九龙仓店", //门店
				"status": arr[Math.floor((Math.random() * arr.length))], //订单状态 1 处理  2 拒接 3 代付款
				"payment": "微信支付",
				"Paymentorder|+1": 12345678910, //支付单号
				"Delivery": '@date("yyyy-MM-dd")', //提货日期
				"distribution|0-1": arr2[Math.floor((Math.random() * arr2.length))], //配送方式 1 为自己提 
				"amount": "200" //订单总额
			},

			"harvester": {
				/* 收件人信息 */
				name: Random.cfirst(), //姓名
				phone: '@phone', //手机号
				address: Random.province() //地址
			},

			"shop|3": [{
				"imgsrc": "@image('40x40')", //商品图片
				"name": Random.csentence(3, 5), //商品各称
				'original_price': Random.integer(50, 100), //正常价
				"price": Random.integer(5, 50), //促销价
				"count": Random.integer(1, 50), //购买数量
				"specification": 500

			}],
			"leave|3": [{
				cont: Random.csentence(1, 3),
				name: "小艺",
				bool: true,
			}]








		}






	]




})




/* 用户列表数据 */
var arr3 = ["有效", "无效","有效"]
Mock.mock("userlist", {
	msg: "succees",
	status: 0,


	"list|100": [{
			"id|+1": 70008, //账号
			namebf: Random.csentence(3, 5), //昵称
			name: Random.cfirst(), //姓
			Subordinateshop: "九龙仓店", //所属门店
			role: "系统管理员,运营",
			phone: '@phone', //手机号
			lasttime: '@date("yyyy-MM-dd HH:mm:ss")', //最后登录时间
			"status": arr3[Math.floor((Math.random() * arr3.length))], //状态 
		}, {
			"id|+1": 80008, //账号
			namebf: Random.csentence(3, 5), //昵称
			name: Random.cfirst(), //姓
			Subordinateshop: "九龙仓店", //所属门店
			role: "系统管理员,运营",
			phone: '@phone', //手机号
			lasttime: '@date("yyyy-MM-dd HH:mm:ss")', //最后登录时间
			"status": arr3[Math.floor((Math.random() * arr3.length))], //状态 
		}, {
			"id|+1": 90008, //账号
			namebf: Random.csentence(3, 5), //昵称
			name: Random.cfirst(), //姓
			Subordinateshop: "九龙仓店", //所属门店
			role: "系统管理员,运营",
			phone: '@phone', //手机号
			lasttime: '@date("yyyy-MM-dd HH:mm:ss")', //最后登录时间
			"status": arr3[Math.floor((Math.random() * arr3.length))], //状态 
		},

	]



})

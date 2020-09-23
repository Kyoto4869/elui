import Mock from 'mockjs'


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

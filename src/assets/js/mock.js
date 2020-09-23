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

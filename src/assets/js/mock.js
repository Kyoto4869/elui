import Mock from 'mockjs'


Mock.mock('uersbgimg',{
	msg:"succees",
	status:0,
	list:[{
		imgsrc:'/assets/img/1.jpg',
	
		
	},
	]
})

/* 获取随机生成的验证码 */
Mock.mock('usercode',{
	
	 "score|1000-9999": 1000,//随机生成1-800的数字
})


/* 获取店铺信息 */
Mock.mock('shop',{
	msg:"succees",
	status:0,
	list:[
		
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},{
		 name:"九龙城店",
		 commercial:"大卖场",
		 address:'威海大道2号',
		 starttime:"8：00",
		 endtime:"20：00",
		 olloutr:true,
		},
		
	]
	
	
	
})
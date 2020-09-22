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

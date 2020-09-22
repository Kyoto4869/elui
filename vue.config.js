module.exports = { // 导出模块 
	devServer: { //开发服务器
		proxy: { //代理
			'/mobile': { //代理标识 遇到什么请求开始代理     "localhost:8080/v1/home/category_v2"
				target: 'http://www.7hpt.com/', //本地服务就会 请求 https://m.mi.com/v1/home/category_v2   返回给前端 
				changeOrigin: true, //是否跨域，跨域
				
			},
			'/member':{
						  target:"http://www.520mg.com",
						  
			},
			'/mi':{
				target:"http://www.520mg.com",
						  
			}
			
		}
	}
}

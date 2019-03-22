// 创建一下小型的node服务器

// 启动服务器  nodemon + 启动的文件地址

// 导入http内置模块
const http = require('http')

// 导入url模块,这个模块能解析url地址，从而拿到  pathname  query
const urlModule = require('url')

// 创建一个http服务器
const server = http.createServer()

// 监听http服务器的 request 请求
server.on('request',function(req,res){
	
	// const url = req.url
	const { pathname:url,query } = urlModule.parse(req.url,true)
	
	if(url === '/getscript'){
		// 拼接一个合法的js脚本,这里拼接的是一个方法的调用
		// var scriptStr = 'show()'
		
		var data = {
			name:'xjj',
			age:'18',
			gender:'女孩子'
		}
		
		
		var scriptStr = `${query.callback}(${JSON.stringify(data)})`
		// res.end 发送给客户端,客户端去把这个字符串当作js代码去解析
		res.end(scriptStr)
	}else{
		res.end('404')
	}
	
})

// 指定端口号并启动服务器监听
server.listen(3000,function(){
	console.log('server listen at http://127.0.0.1:3000')
})
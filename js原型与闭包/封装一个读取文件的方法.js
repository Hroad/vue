const fs = require('fs')
const path = require('path')

// function getFiles(fpath){
// 	fs.readFile(fpath,'utf-8',(err,dataStr) => {
// 		if(err) throw err
// 		console.log(dataStr)
// 	})
// }

// 总共三个参数: 第一个为路径  第二个为成功的回调  第三个为失败的回调
function getFiles(fpath,secCb,errCb){
	fs.readFile(fpath,'utf-8',(err,dataStr) => {
		if(err) return errCb(err)
		secCb(dataStr)
	})
}

// 读取单个文件
// getFiles(path.join(__dirname, 'files/1.txt'),function (data) {
// 	// 成功了
// 	console.log('成功执行了---------------' + data);
// },function(err){
// 	// 失败了
// 	console.log('执行失败了---------------' + err);
// })


// 需求:3个文件依次读取  先读取1.txt  然后读取2.txt  最后读取3.txt
// 回调地狱（ 多层回调嵌套导致的代码可读性差 ）   解决办法：promise单纯的解决回调地狱的问题，并不能减少代码量
getFiles(path.join(__dirname, 'files/1.txt'),function(data){
	console.log(data);
	getFiles(path.join(__dirname, 'files/2.txt'),function(data){
		console.log(data);
		getFiles(path.join(__dirname, 'files/3.txt'),function(data){
			console.log(data);
		})
	})
})











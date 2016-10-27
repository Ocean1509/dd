const http=require('http');
const url=require('url');
const process=require('process');
const path=require('path')
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain;charset=utf-8'});
	res.end('发送成功')
});
server.listen(8083)

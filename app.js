//加入系统模块
var http = require('http');
var os = require('os');

//创建服务器，监听3000端口
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('1234567890\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');


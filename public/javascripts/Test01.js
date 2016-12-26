var http = require('http');
var os = require('os');
var fs = require('fs'); //文件系统

http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    //读取一个文件
    fs.readFile("../html/Test01.html",function (err,data){
        response.end(data);
    });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
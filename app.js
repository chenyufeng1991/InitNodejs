//加入系统模块
var http = require('http');
var os = require('os');
var url = require('url');
var fs = require('fs');

/**
 * 总结js和html之间加载的问题
 * （1）node可以解析url的请求，然后根据请求的html页面去显示；这是一种服务器端做出的响应；
 * （2）在html中可以加入js脚本，然后执行js中的方法；
 *
 */
//创建服务器，监听3000端口
http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end('1234567890\n');

    //以下方法可以使用url来请求任意路径下的每一个html文件
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");
    //从文件系统中读取请求的文件内容
    fs.readFile("./public/html/" + pathname.substr(1), function (err, data) {
        if(err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            //响应文件内容
            response.write(data.toString());
        }
        // 发送响应数据
        response.end();
    });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');


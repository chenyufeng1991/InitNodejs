var express = require("express");
var app = express();

//根据不同的请求进行响应
/**
 * 这里其实就是RESTful的设计，根据url的不同响应来处理请求；
 * 一般express都是和RESTful一起来进行设计的。
 * 一般前端数据可以通过form表单来提交。
 *
 *
 *
 * 参考文档：http://www.runoob.com/nodejs/nodejs-restful-api.html
 */

app.get("/", function (request, response) {
    response.send("For One");
});

app.get("/getName", function (request, response) {
    response.send("For Two");
    console.log("baseUrl：" + request.baseUrl);
    console.log("body：" + request.body);
    console.log("hostname:" + request.hostname);
    console.log("originalUrl:" + request.originalUrl);
    console.log("params:" + request.params);
    console.log("path:" + request.path);
    console.log("protocol:" + request.protocol);
    console.log("query:" + request.query);
    console.log("subdomains:" + request.subdomains);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
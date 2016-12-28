var http = require('http');

var qs = require('querystring');

//这是一个对象
var data = {
    a: 123,
    timeS: new Date().getTime()
};//这是需要提交的数据

//qs可以把对象类型转化为字符串，成为url中的请求参数
var content = qs.stringify(data);
console.log("content:"+ content);

var options = {
    hostname: '127.0.0.1',
    port: 8081,
    path: '/getHeight?' + content,
    method: 'GET'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();
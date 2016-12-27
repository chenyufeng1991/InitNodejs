var express = require('express');
var app = express();

app.use(express.static('public'));

//接收到请求做响应，实现和html的交互
app.get('/index2.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index2.html" );
});

//html使用表单提交，接收提交的数据
app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response)); //JSON转字符串输出
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
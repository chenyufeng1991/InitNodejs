var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Hello");
    res.send("Hello");
    res.end();
});

//html使用表单提交，接收提交的数据
app.get('/getName', function (req, res) {

    console.log("baseUrl:" + req.baseUrl);
    console.log("hostname:" + req.hostname);
    console.log("originalUrl:" + req.originalUrl);
    console.log("params:" + req.params);
    console.log("path:" + req.path);
    console.log("query:" + req.query.a + "    " + req.query.timeS);

    // 输出 JSON 格式
    response = {
        first_name:"chen",
        last_name:"yufeng"
    };
    console.log(response);
    res.send(JSON.stringify(response));
    res.end();
});

app.get('/getAge', function (req, res) {

    console.log("23");
    res.send("23");
    res.end();
});

app.get('/getHome', function (req, res) {

    console.log("Shaoxing");
    res.send("Shaoxing");
    res.end();
});

var getHeight = require('../../routes/getHeight');
app.get('/getHeight', getHeight.index);

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
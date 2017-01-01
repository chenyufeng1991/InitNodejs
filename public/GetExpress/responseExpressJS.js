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

//这里是使用路由，由其他的文件来做处理
var getHeight = require('../../routes/getHeight');
app.get('/getHeight', getHeight.index);

//把其他文件作为一个模块引入，然后调用模块中的方法,nodejs的模块化编程；
//注意脚本是按行解释执行的，除了调用的方法以外的代码也会被执行
var de = require('./otherModule');
de.deploy();
console.log("引入模块的参数：" + de.deployParams);

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    global.ttt = 12345;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
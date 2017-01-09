var express = require('express');
var app = express();

//中间件相当于起一个过滤的作用，所有匹配这个路径的都会被执行；
app.use('/', function (req, res, next) {
    console.log("000000000000");
    next();
});

app.get('/getOne', function (req, res) {
    console.log("11111111111");
    res.send("1111111111");
    res.end();
});

app.get('/getTwo', function (req, res) {
    console.log("22222222222");
    res.send("22222222");
    res.end();
});

app.listen(8000,function () {
    console.log("start");
});
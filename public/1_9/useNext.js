var express = require('express');
var app = express();

//中间件和普通get都可以有next();所有相同的请求url也可以由不同的路由去实现；
app.use('/', function (req, res, next) {
    console.log("000000000000");
    next();
});

app.get('/getOne', function (req, res, next) {
    console.log("11111111111");
    next();
});

app.get('/getOne', function (req, res) {
    console.log("22222222222");
    res.send("22222222");
    res.end();
});

app.listen(8000, function () {
    console.log("start");
});
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//可以通过这种方式快速开启
app.listen(8888, function () {
    console.log("开启服务");
});
var express = require('express');
var app = express();

/**
 * 这里是对上面useNext()的优化,也是对相同的请求进行同步处理；
 * 进行模块化实现；
 * 一个get请求里面可以有同步执行的两个路由
 */
var stackModule = require('./stackModule');
app.get('/getStack',stackModule.moduleOne01, stackModule.moduleOne02);

app.listen(8000, function () {
    console.log("start");
});
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

/**
 * 多路由响应，同一个请求url用多个路由去响应；
 * 这是比较推荐的方式；
 * 比如一个请求转发给区块链，另一个请求转发给数据库；
 * 其实这里就是中间件的使用：服务器采取的动作就是middleware
 */

/**
 * express应用其实就是由一系列顺序执行的中间件组成；
 * 中间件就是一个访问express应用传入的req,res,next参数的函数，这个函数可以访问任何通过req,res传入的资源；
 *
 */
var moduleOne = require('./moduleOne');
app.get('/getModule', moduleOne.moduleOne01);
app.get('/getModule', moduleOne.moduleOne02);

app.listen(8000, function () {
    console.log("start");
});
var express = require('express');

/**
 * 中间件栈
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.moduleOne01 = function (req, res, next) {
    console.log("3333333333333333");
    //继续由下一个get去处理
    console.log("请求的参数1：" + req);
    //将控制权交给下一个中间件
    next();
};

module.exports.moduleOne02 = function (req, res, next) {
    console.log("444444444444444");
    console.log("请求的参数2：" + req);
    next();
};

module.exports.moduleOne03 = function (req, res) {
    console.log("555555555555");
    console.log("请求的参数3：" + req);
    res.send("5555555555");
};

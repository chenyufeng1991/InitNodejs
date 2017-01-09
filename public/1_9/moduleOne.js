var express = require('express');

module.exports.moduleOne01 = function (req, res, next) {
    console.log("3333333333333333");
    //继续由下一个get去处理
    console.log("请求的参数1：" + req);

    //设置延迟执行，异步执行
    setTimeout(function () {
       console.log("5555555555555");
       next();
    }, 5000);
};

module.exports.moduleOne02 = function (req, res) {
    console.log("444444444444444");
    console.log("请求的参数2：" + req);
    res.send("444444444444444");
};

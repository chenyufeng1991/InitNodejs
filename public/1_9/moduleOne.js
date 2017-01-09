var express = require('express');

module.exports.moduleOne01 = function (req, res, next) {
    console.log("3333333333333333");
    //继续由下一个get去处理
    next();
};

module.exports.moduleOne02 = function (req, res) {
    console.log("444444444444444");
    res.send("444444444444444");
};

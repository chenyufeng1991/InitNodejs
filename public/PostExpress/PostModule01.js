var express = require('express');

module.exports.postModule01 = function (req, res) {
    //成功接收post过来的数据，并返回json数据，前端只能进行post请求，get则失败
    console.log("请求的参数：" + req.query.key1 + "       " + req.query.key2);

    var response = {
        code: 1,
        message: "请求成功",
        error: ""
    };
    res.send(response);
    res.end();
};
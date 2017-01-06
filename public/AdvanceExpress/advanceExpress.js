var express = require("express");
var app = express();

/**
 * (1)res.json()同res.send()，也可以发送数据；更普遍的可以使用res.send();
 * (2)res.cookie()可以以键值对的形式发送cookie；
 * (3)__dirname  /__filename ,获取目录路径、文件路径(可以不包含path模块)；
 * (4)res.sendFile()用来发送html文件；
 * (5)res.status(...)可以设置返回码状态；
 *
 * -------------
 * (6)客户端发送过来的cookie是在header中的，使用req.headers.cookie读取；然后写一个解析函数，返回的cookie即可用键值对读取；
 */
console.log(__dirname);
console.log(__filename);

// 解析cookie
var parseCookie = function(cookie) {
    var cookies = {};
    if (!cookie) {
        return cookie;
    }
    var list = cookie.split(';');
    for (var i = 0; i < list.length; i++) {
        var pair = list[i].split('=');
        cookies[pair[0].trim()] = pair[1];
    }
    return cookies;
};

app.get("/", function (req, res) {

    var cookiesList = parseCookie(req.headers.cookie);
    console.log(cookiesList["key1"] + "    " +cookiesList["key2"]);
    res.end();
});

var server = app.listen(8888, function () {
    console.log("开启服务");
});
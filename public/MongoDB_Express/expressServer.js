/**
 * Created by chenyufeng on 1/10/17.
 */

var express = require('express');
var app = express();
//数据库mongodb使用
var mongoosejs = require('./mongoose');
var db = mongoosejs();

var mongoose = require('mongoose');
var User = mongoose.model('User');

app.get('/createUser', function (req, res, next) {
    var user = new User({
        uid: 2,
        username: "gaowenjing"
    });

    user.save(function (error) {
        if (!error) {
            User.find({}, function (error, result) {
                if (!error) {
                    res.json(result);
                }
                else {
                    res.send("error");
                }
            });
        }
    });
});

app.listen(8080, function () {
   console.log("Start...");
});
var mongoose = require('mongoose');
var model = require('./model');

var Book = mongoose.model('Book');

//如果不设置条件，则返回第一条数据；如果设置条件，则返回满足条件的第一条数据
Book.findOne({}, function (error, result) {
    if(!error) {

        //可以直接对返回的数据操作
        // result.author = "yufeng22";
        // result.save();

        console.log(result);
    }
    else {
        console.log(error.toString());
    }
});
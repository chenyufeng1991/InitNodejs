var mongoose = require('mongoose');

var model = require('./model');

var Book = mongoose.model('Book');

//如果不设置条件，则会把所有记录都输出；如果设置条件，则会把符合条件的记录都输出
Book.find({}, function (error, result) {
    if(!error) {
        console.log(result);
    }
    else {
        console.log(error.toString());
    }
});
var mongoose = require('mongoose');
var model = require('./model');

var Book = mongoose.model('Book');

var book = new Book({
    name: "chen3",
    author: "yufeng3",
    publishTime: new Date()
});

book.save(function (error, result) {
    if(!error) {
        console.log("Success");
    }
    else {
        console.log("Failed");
    }
});
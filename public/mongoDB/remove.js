var mongoose = require('mongoose');
var model = require('./model');

var Book = mongoose.model('Book');

Book.findOne({name: 'chen3'}, function (error, result) {
    if(!error) {
        if(result) {
            result.remove();
        }
    }
    else {
        console.log(error);
    }

});
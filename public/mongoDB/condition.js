var mongoose = require('mongoose');
var model = require('./model');

var Book = mongoose.model('Book');

var cond = {
    $or:[
        {name: "chen"},
        {name: "chen2"}
    ]
};

Book.find(cond, function (error, result) {
   if(!error) {
       console.log(result);
   }
   else {
       console.log(error);
   }
});
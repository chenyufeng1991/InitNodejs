var mongoose = require('mongoose');
var uri = "mongodb://localhost/Score";
mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    publishTime: Date
});

mongoose.model('Book', BookSchema);
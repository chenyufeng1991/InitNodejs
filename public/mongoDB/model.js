var mongoose = require('mongoose');
//Score为数据库名
var uri = "mongodb://localhost/Score";
mongoose.connect(uri);

//可以把Schema理解为表中对象的结构
var BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    publishTime: Date
});

//Book可以理解为表名
mongoose.model('Book', BookSchema);
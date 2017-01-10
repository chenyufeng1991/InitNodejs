/**
 * Created by chenyufeng on 1/10/17.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    uid: Number,
    username: String,
    createTime: Date
});

mongoose.model('User', UserSchema);
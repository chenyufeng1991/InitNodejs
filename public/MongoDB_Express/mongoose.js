/**
 * Created by chenyufeng on 1/10/17.
 */
var mongoose = require('mongoose');
var config = require('./config');

module.exports = function () {
    var db = mongoose.connect(config.mongodb);
    require('./user.server.model');
    return db;
};
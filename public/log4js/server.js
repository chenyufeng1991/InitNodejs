/**
 * Created by chenyufeng on 16/01/2017.
 */

var express = require('express');
var app = express();

var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},
        {
            type: 'file',
            filename: './access.log',
            maxLogSize: 102400,
            backups: 3,
            category: 'cheese'
        }
    ],
    replaceConsole: true
});

var logger = log4js.getLogger('cheese');

app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));

logger.debug("loglog");
logger.info("infoinfo");
logger.error("errorerror");

console.log("测试");
console.error("错误");


app.get('/', function (req, res) {
    res.send("hello");

});

app.listen(8888, function () {

});
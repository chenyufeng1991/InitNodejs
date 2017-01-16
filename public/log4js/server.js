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
            category: 'normal'
        }
    ],
    replaceConsole: true
});

//参数要和category中的参数相同
var logger = log4js.getLogger('normal');
//如果设置为INFO，则不会打印出比INFO级别低的日志，如：DEBUG/TRACE.
//INFO级别及以上的日志会记录在日志文件中
logger.setLevel('INFO');

//请求的默认级别是INFO
//调整日志输入格式
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO, format:':method :url'}));

logger.debug("loglog");
logger.info("infoinfo");
logger.error("errorerror");

//console.log的方式可以在控制台打印日志，但是无法记录在日志文件中
console.log("测试");
console.error("错误");


app.get('/', function (req, res) {
    res.send("hello");

});

app.listen(8888, function () {

});
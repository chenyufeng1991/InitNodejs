//加载fs模块
var fs = require('fs');

//写入文件， 文件如果不存在，则会创建，然后插入数据；如果存在，则会覆盖原有内容
fs.writeFile("./file01.txt", "插入的数据内容", function (error, result) {
    if(!error) {
        console.log("写入文件成功");
    }
    else {
        console.log("写入文件失败");
    }
});

//读取文件
fs.readFile("./file01.txt", function (error, result) {
    if(error) {
        console.log("读取文件失败");
    }
    else {
        //转化为字符串输出
        console.log("第一次读取文件内容：" + result.toString());
    }
});

//在源文件后面添加内容，不覆盖原有内容
fs.appendFile("./file01.txt", ",后面添加的内容", function (error, result) {
    if(!error) {
        console.log("添加内容成功");
    }
    else {
        console.log("添加内容失败");
    }
});

fs.readFile("./file01.txt", function (error, result) {
    if(error) {
        console.log("读取文件失败");
    }
    else {
        console.log("第二次读取文件内容：" + result.toString());
    }
});

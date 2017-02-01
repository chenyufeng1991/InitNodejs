//变量
var name1 = "Jack";

//函数
// function getName() {
//     console.log("Mary");
// }

//如果require该文件，则会打印
console.log("Running name.js");

//分别导出变量和函数
// module.exports.name1 = name1;
// module.exports.getName = getName;

//一种更优雅的导出方式，功能同上，更为简洁，可以把所有的变量写入
module.exports = {
    name1: name1
};

exports.name2 = "123";

//对于函数，则有更方便的导出方式,函数推荐使用这种方式，定义的时候同时导出
module.exports.getName = function () {
    console.log("Mary");
};



//如果引入该模块，调用deploy()方法，console.log("12345678");也会被执行。
console.log("12345678");
function deploy() {
    console.log("qwerty");

}

var deployParams = 4321;

module.exports.deploy = deploy; //方法的导出
module.exports.deployParams = deployParams; //变量的导出

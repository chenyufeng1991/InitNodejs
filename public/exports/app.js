//引入同一目录下的name.js
var name = require('./name');

//使用name.js中的变量
console.log(name.name1);
console.log(name.name2);
//调用name.js中的函数
name.getName();
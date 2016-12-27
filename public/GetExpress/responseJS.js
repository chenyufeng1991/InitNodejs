var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function (request, response) {

    var resName = url.parse(request.url).pathname.substr(1);
    console.log(request.url);

    var arg = url.parse(request.url).query;
    var value1 = qs.parse(arg)["a"];
    var value2 = qs.parse(arg)["timeS"];
    console.log(value1 + "  " + value2);

    if(resName === "getName") {
        //user是一个标准的JSON
        var user = {
            "user4" : {
                "name" : "mohit",
                "password" : "password4",
                "profession" : "teacher",
                "id": 4
            }
        };
        response.write(JSON.stringify(user));
    } else if(resName === "getAge") {
        response.write("25");
    } else if(resName === "getHome") {
        response.write("Shaoxing");
    } else if(resName === "") {
        response.write("nullnull");
    }

    response.end();

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');


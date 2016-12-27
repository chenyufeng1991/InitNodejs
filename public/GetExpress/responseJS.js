var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

    var resName = url.parse(request.url).pathname.substr(1);
    if(resName === "getName") {
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


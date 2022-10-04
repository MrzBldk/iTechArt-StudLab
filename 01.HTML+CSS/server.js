const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);
    if (request.url != '/') {
        filePath = 'src' + request.url;
        fs.readFile(filePath, function (error, data) {
            if (error) {
                response.statusCode = 404;
                response.end("Resourse not found!");
            }
            else {
                response.end(data);
            }
        });
    }
    else {
        response.writeHead(302, {
            'Location': '/index.html'
        });
        response.end();
    }
}).listen(3000, function () {
    console.log("Server started at 3000");
});
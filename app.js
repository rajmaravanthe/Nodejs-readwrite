var http = require('http');
fs = require('fs')

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    var readableStream = fs.createReadStream('./file.txt');
    var data = '';

    var writeStream = fs.createWriteStream('./file1.txt');

    readableStream.on('data', function (chunk) {
        writeStream.write(chunk);
    });

});

server.listen(3000);


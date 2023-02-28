// read a file contents

var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })

}).listen(8080);




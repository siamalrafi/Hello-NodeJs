// read a file contents

/* var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080); */



// appendFile data 

var fs = require('fs');

fs.appendFile('newFile.text', ' append text ', (err) => {
    if (err) {
        console.log(error.message);
    } else {
        console.log('Successfully append');
    }
});











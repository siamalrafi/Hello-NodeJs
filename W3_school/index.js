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
/* var fs = require('fs');

fs.appendFile('newFile.text', ' append text ', (err) => {
    if (err) {
        console.log(error.message);
    } else {
        console.log('Successfully append');
    }
}); */



//  create new file and also replace existing file content
/* var fs = require('fs');

fs.writeFile('text1.txt', 'Successfully', (err) => {
    if (err) { console.log(err.message); } else {
        console.log('Successfully')
    }
}) */



/* 
// Delete existing file
var fs = require('fs');

fs.unlink('mynewfile2.txt', (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('successfully deleted');
    };
}) */


// Rename Existing file name
/* var fs = require('fs');


fs.rename('n', 'NewRenamed.txt', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('successfully renamed');
    }
}); */

































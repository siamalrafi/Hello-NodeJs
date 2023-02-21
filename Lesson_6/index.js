var http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write(`<html><head><title>Form</title><head><body>
        <form method="post" action="/process"><input name="massage"></input></form></body></html>`);
        res.end();
    }
    else if (req.url === '/process') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not Found');
    }



}).listen(8080);


console.log('Server listening on port8080');
var http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write(`<html><head><title>Form</title><head><body>
        <form method="POST" action="/process"><input name="massage"></input></form></body></html>`);
        res.end();
    }
    else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });

        req.on('end', () => {
            const parsedData = Buffer.concat(body);
            res.write('Thank you for submitting.');
            res.end();
        });

    }
    else {
        res.write('Not Found');
    };

}).listen(8080);


console.log('Server listening on port8080');
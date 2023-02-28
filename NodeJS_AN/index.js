var http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text.html' });
  res.write(req.url);
  res.end();
}).listen(8080)
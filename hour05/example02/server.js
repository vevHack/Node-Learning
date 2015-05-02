var http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<div><h1>Hello</h1></div>');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');


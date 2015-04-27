/**
 * Created by Zen on 2015/4/27.
 */
var http = require('http');

var outText = 'Hello Node';
var outHTML = '<h1>Hello Node</h1>';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(outText);
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end(outHTML);
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

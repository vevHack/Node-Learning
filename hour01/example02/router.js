/**
 * Created by Zen on 2015/4/27.
 */
var http = require('http');

http.createServer(function (req, res) {
    //规范化url，去掉字符串，可选的反斜杠，并把它变为小写
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('HomePage');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About');
            break;
        default :
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
            break;
    }
}).listen(3000,"127.0.0.1");

console.log('Serve started at  http://127.0.0.1:3000.');

// the callback is an event listener

var http = require('http');

http.createServer(function(req,res){

    // 組response
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World!!\n");

}).listen(1337,'127.0.0.1');
// localhost:1337 這個program就會收到
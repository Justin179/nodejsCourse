// the callback is an event listener

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    // 組response
    res.writeHead(200,{'Content-Type':'text/html'});

    // 加了utf-8後，html就成了String
    var html = fs.readFileSync(__dirname+'/index.html','utf-8');
    var message = "Hello World...";
    html = html.replace('{message}',message);

    res.end(html);

}).listen(1337,'127.0.0.1');
// localhost:1337 這個program就會收到(server object.listen())
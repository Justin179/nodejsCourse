// the callback is an event listener

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    // 組response
    res.writeHead(200,{'Content-Type':'application/json'});

    var obj = {
        firstname: 'Justin',
        lastname: 'Chen'
    }

    // string will be formatted as JSON format
    res.end(JSON.stringify(obj));

}).listen(1337,'127.0.0.1');
// localhost:1337 這個program就會收到(server object.listen())
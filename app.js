// the callback is an event listener

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    // http request (totally ignored, not even looking at the incoming url)

    // Routing
    if(req.url==='/'){
        // 讀進來(stream)，寫出去 一行解決
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    } else if(req.url==='/api'){
        // http response
        // 組response
        res.writeHead(200,{'Content-Type':'application/json'});
        var obj = {
            firstname: 'Justin',
            lastname: 'Chen'
        };
        // string will be formatted as JSON format 
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

    

}).listen(1337,'127.0.0.1');
// localhost:1337 這個program就會收到(server object.listen())
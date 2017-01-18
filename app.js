var fs = require('fs');
var readable = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf-8'});

readable.on('data',function(chunk){
    console.log(chunk);
});
var fs = require('fs');
var readable = fs.createReadStream(__dirname+'/greet.txt'
,{encoding:'utf-8',highWaterMark:32 * 1024});
// highWaterMark: each chunk's size

var writable = fs.createWriteStream(__dirname+'/greet2.txt');

readable.on('data',function(chunk){
    console.log(chunk);
    writable.write(chunk); // 把資料寫(複製)到greet2.txt
});
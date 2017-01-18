var fs = require('fs');
var zlib = require('zlib');

// read from greet.txt
var readable = fs.createReadStream(__dirname+'/greet.txt'
,{encoding:'utf-8',highWaterMark:32 * 1024});
// highWaterMark: each chunk's size

// write to greet2.txt
var writable = fs.createWriteStream(__dirname+'/greet2.txt');

// when read a chunk of data from readable, invoke the function
// readable.on('data',function(chunk){
//     console.log(chunk);
//     writable.write(chunk); // 把資料寫(複製)到greet2.txt
// });

// 用pipe簡化寫法, 從file讀進來，(通過pipe)，寫出去到file

var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

// on every chunk pipe to gzip, then piping the compressed data to a file
readable.pipe(gzip).pipe(compressed);
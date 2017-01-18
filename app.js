var fs = require('fs');
// 這裡Sync指的是，process會等到資料都load完了，程式才會往下執行
// 這不適用多人同時使用的平台，特別是檔案大時
var greet = fs.readFileSync(__dirname+'/greet.txt','utf-8'); // './greet.txt'也可以

console.log(greet);

// 非同步
var greet = fs.readFile(__dirname+'/greet.txt','utf-8',
    function(err,data){
        console.log(data);
    });

console.log('DONE'); // 非同步的證明 
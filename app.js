var express = require('express');
// 這樣就拿到關鍵物件了
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// 如果部署的環境(Server)沒有設PORT，那就用本機開發的portx
var port = process.env.PORT || 3000;

// 處理(自動載入)靜態資源，像是HTML, CSS, image (認http request的pattern)
app.use('/assets',express.static(__dirname+'/public'));

// by default will look at views folder, 第二個參數是副檔名
app.set('view engine','ejs');

// 自製middleware
app.use('/',function(req,res,next){
    console.log('request url: '+req.url);
    // run the next middleware (差不多就是程式繼續執行的意思)
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "2315",
        database: "addressbook"
    });

    con.query('SELECT addressbook.people.ID,addressbook.people.Firstname,addressbook.people.Lastname,addressbook.addresses.Address FROM addressbook.people inner join addressbook.personaddresses on addressbook.people.ID = addressbook.personaddresses.PersonID inner join addressbook.addresses on addressbook.addresses.ID = addressbook.personaddresses.AddressID', function(err,rows){
        if(err) throw err;
        console.log(rows[0].Firstname);
    });

    next();
});

// (模組化)其他比照辦理 
htmlController(app);

// (模組化)其他比照辦理
apiController(app);

app.listen(port);
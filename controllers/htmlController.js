// 處理http method: POST
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app){
    app.get('/',function(req,res){
        //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Justin</h1></body></html>');
        // 會自動去views下面找index.ejs
        res.render('index');
    }); 

    app.get('/person/:id',function(req,res){
        // res.send('<html><head></head><body><h1>Hello '+req.params.id+'</h1></body></html>');
        res.render('person',{ID:req.params.id, Qstr:req.query.xxx}); // http://127.0.0.1:3000/person/100?xxx=30
    });

    app.post('/person',urlencodedParser,function(req,res){
        res.send('thanks');
        // 下面是urlencodedParser的傑作
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}
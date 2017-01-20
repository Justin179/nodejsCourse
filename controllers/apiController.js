module.exports = function(app){
    app.get('/api/person/:id',function(req,res){
        // get the data from db, then send it to the browser
        res.json({firstname: 'Justin', lastname:'Chen'});
    });

    // jsonParser
    app.post('/api/person',function(req,res){
        // save to the db
    });

    app.delete('/api/person/:id', function(req,res){
        // delete from the db
    });
}
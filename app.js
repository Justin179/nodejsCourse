// callback
function greet(callback){
    console.log('this is greet');
    var data = {
        name: 'john doe'
    };
    callback(data);
}

greet(function(data){
    console.log('this is callback');
    console.log(data);
});

greet(function(data){
    console.log('this is second callback');
    console.log(data.name);
});
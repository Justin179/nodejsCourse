var Emitter = require('./emitter');

var emtr = new Emitter();

// 置放listeners that will response (把function放到greet property 陣列裡面)
emtr.on('greet',function(){
    console.log('A');
}); 

// (把function放到greet property 陣列裡面)
emtr.on('greet',function(){
    console.log('B');
});

// 發動xxx event(greet event in this case)，同時觸發多個listeners
emtr.emit('greet');
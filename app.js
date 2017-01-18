// use nodejs' event emitter
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// 置放listeners that will response (把function放到greet property 陣列裡面)
emtr.on(eventConfig.GREET,function(){
    console.log('A-');
}); 

// (把function放到greet property 陣列裡面)
emtr.on(eventConfig.GREET,function(){
    console.log('B-');
});

// 發動xxx event(greet event in this case)，同時觸發多個listeners
emtr.emit(eventConfig.GREET);
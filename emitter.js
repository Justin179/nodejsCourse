// function constructor
function Emitter(){
    // one property which is an object
    this.events = {
        //greet:[function1,function2,function3]
    };
}

/*
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']); 
*/

// 在Emitter的父類別，放兩個方法
// 讓其他的物件share共同的function
Emitter.prototype.on = function(type,listener){
    this.events[type] = this.events[type]||[];
    this.events[type].push(listener);
} 

// emit means something happens
Emitter.prototype.emit = function(type){
    if(this.events[type]){ // 拿到property, which is an Array (inside has two functions)
        this.events[type].forEach(function(listener){
            listener(); // run function1, function2, function3
        });
    }
}

module.exports = Emitter;
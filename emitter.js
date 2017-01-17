// function constructor
function Emitter(){
    this.events = {};
}

/*
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
*/

// 讓其他的物件share共同的function
Emitter.prototype.on = function(type,listener){
    this.events[type] = this.events[type]||[];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){ // 拿到property, which is an Array (inside has two functions)
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;
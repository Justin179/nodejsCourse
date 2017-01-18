'use strict'

// require 'events' & 'util'
var EventEmitter = require('events');

class Greetr extends EventEmitter {
    constructor(){
        super(); // 等同呼叫父類別的建構子EventEmitter.call(this);
        this.greeting = "Hello world";
    }

    greet(data){
        // console.log(this.greeting+': '+data); // hello world
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet',data); // 因為繼承，Greetr有拿到emit方法
    }
}

module.exports = Greetr;
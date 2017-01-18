'use strict';

// 以es6 改寫eventEmitter

// javascript實現了import 其他類別
var Greetr = require('./greetr.js');

// 以下一整塊搬到module
// -----------------------------------------
// var EventEmitter = require('events');

// class Greetr extends EventEmitter {
//     constructor(){
//         super(); // 等同呼叫父類別的建構子EventEmitter.call(this);
//         this.greeting = "Hello world";
//     }

//     greet(data){
//         // console.log(this.greeting+': '+data); // hello world
//         console.log(`${this.greeting}: ${data}`);
//         this.emit('greet',data); // 因為繼承，Greetr有拿到emit方法
//     }
// }
// -----------------------------------------


// 建立Greetr物件
var greeter1 = new Greetr();
// 把方法放進陣列
greeter1.on('greet',function(data){
    console.log('someone greeted: '+data);
});

// 建立Greetr物件
var greeter2 = new Greetr();
// 把方法放進陣列
greeter2.on('greet',function(data){
    console.log('greeter2 someone greeted: '+data);
});

// 從prototype拿到function greet
greeter1.greet('Justin');
// hello world (emit - event)
// someone greeted (event listener)

greeter2.greet('Hi there');
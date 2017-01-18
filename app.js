'use strict';
// 改用es6 class語法，取代prototype
// class 完全替代 function constructor

// function constructor
// function Person(firstname,lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// class
class Person {
    constructor(firstname,lastname){
        // this here is each object created
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // 此方法會自動會被放到prototype
    greet(){
        console.log(this.firstname+' '+this.lastname);    
    }
}

// adding method/function to the prototype(父類別)
// Person.prototype.greet = function(){
//     console.log(this.firstname+' '+this.lastname);
// }

// 創造一個物件，繼承自person object
// create an empty object whose prototype is person
var john = new Person('john','doe'); 
john.greet();

var jane = new Person('jane','doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__===jane.__proto__);
// 拿到util
var util = require('util');


// function Person
function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
};

// greet function 放到父類別
Person.prototype.greet = function(){
    console.log('hello! '+this.firstname+' '+this.lastname);
}

// 另一個function constructor
function Policeman(){
    Person.call(this); // the key line
    this.badgenumber = "1234";
}

// Policeman extends Person
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();



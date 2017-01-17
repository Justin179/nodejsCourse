// function constructor
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

// 在該物件的prototype放進一個greet方法
Person.prototype.greet = function(){
    console.log('hello, '+this.firstname+' '+this.lastname);
}

// 物件實體化
var person = new Person('John','Doe');
// person本身並沒有greet這個方法，這是繼承而來的方法
person.greet();

// 另一個物件也share了同樣的方法
var person2 = new Person('jane','doe');
person2.greet(); 

// 證明是share同一個物件
console.log(person.__proto__ === person2.__proto__);
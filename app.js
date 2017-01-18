var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname + ' '+this.lastname;
    }
}

// 創造一個物件，繼承自person object
// create an empty object whose prototype is person
var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'doe';

var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'doe';
// john & jane share

console.log(john.greet());
console.log(jane.greet()); 
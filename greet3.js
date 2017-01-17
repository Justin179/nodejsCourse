// module pattern 3 - function constructor
function greet3(){
    this.greeting = "modul pattern 3";
    this.greet = function(){
        console.log(this.greeting);
    }
}


module.exports = new greet3();
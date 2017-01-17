// module pattern 4 - function constructor
function greet4(){
    this.greeting = "modul pattern 4";
    this.greet = function(){
        console.log(this.greeting);
    }
}


module.exports = greet4;
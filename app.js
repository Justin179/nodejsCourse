var firstname = 'jane';

// function expression(在這裡面有獨立的scope)
(function(){
    var firstname = 'john';
    console.log(firstname);
})();

console.log(firstname);

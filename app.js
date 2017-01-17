// module pattern 1
var greet = require('./greet1');
greet();

// module pattern 2
var greet2 = require('./greet2').greet;
greet2();

// module pattern 3 function constructor
var greet3 = require('./greet3');
//greet3(); // error: greet3 is not a function
greet3.greet(); // function constructor 回傳的是一個物件，所以要呼叫該物件內的方法
greet3.greeting = "City Cafe";

var greet33 = require('./greet3');
console.log(greet33.greeting); // City Cafe 所以是拿到同一個物件參考


// module pattern 4 
var Greet4 = require('./greet4'); // 回function
var gt4 = new Greet4(); // function constructor回物件
gt4.greet();


// module pattern 5 (只曝露方法，不曝露變數，但該方法仍可使用該變數，user動不到該property)
var greet5 = require('./greet5').greet;
greet5();
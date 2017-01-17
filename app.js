// object properties and methods
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var arr = [];
arr.push(function(){
    console.log('hi 1');
});
arr.push(function(){
    console.log('hi 2');
});
arr.push(function(){
    console.log('hi 3');
});

// item就是陣列中的每一個物件
arr.forEach(function(item){
    item();
});
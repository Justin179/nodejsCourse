// take a string and convert it to binary data
// the second param is character encoding
var buffer = new Buffer('hello','utf-8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[1]);

buffer.write('xx');
console.log(buffer.toString());
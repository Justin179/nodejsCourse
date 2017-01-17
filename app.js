const util = require('util');

var name = 'Justin';
var greeting = util.format('Hello, %s',name);
util.log(greeting);
const _ = require('ramda');

var addFourNumbers = (a, b, c, d) => a + b + c + d;

var curriedAddFourNumbers = _.curry(addFourNumbers);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
console.log(g(4)); //=> 10

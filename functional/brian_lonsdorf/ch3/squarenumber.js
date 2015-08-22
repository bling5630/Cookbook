var _ = require('lodash');
// cachable

var squareNumber = _.memoize(function(x) {
	return x * x;
});

console.log(squareNumber(4));
//=> 16

console.log(squareNumber(4) + ' returns cache for input 4'); // returns cache for input 4
//=> 16

console.log(squareNumber(5));
//=> 25

console.log(squareNumber(5) + ' returns cache for input 5'); // returns cache for input 5
//=> 25
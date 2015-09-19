var _ = require('ramda');

var numbers = [4, 8, 15, 16, 23, 42];

console.log(_.map(function(n) {
	return n * 2;
}, numbers));

// => [8, 16, 30, 32, 46, 84]

console.log(_.reduce(function(sum, n) {
	return sum + n;
}, 0, numbers));

// => 108

console.log(_.filter(function(n) {
	return n > 10;
}, numbers));

// => [15, 16, 23, 42]
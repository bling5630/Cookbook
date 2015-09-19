var _ = require('lodash');

var numbers = [4, 8, 15, 16, 23, 42];

console.log(_.map(numbers, function(n) {
	return n * 2;
}));

// => [ 8, 16, 30, 32, 46, 84 ]

console.log(_.reduce(numbers, function(sum, n) {
	return sum + n;
}));

// => 108 

console.log(_.filter(numbers, function(n) {
	return n > 10;
}));

// => [ 15, 16, 23, 42 ]

console.log(_(numbers)
	.filter(function(n) {
		return n > 10;
	})
	.reverse()
	.map(function(n) {
		return n * 2;
	})
	.value());

// => [84, 46, 32, 30]


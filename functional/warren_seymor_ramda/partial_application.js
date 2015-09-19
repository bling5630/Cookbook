var _ = require('lodash');

var numbers = [4, 8, 15, 16, 23, 42];

function greaterThan(compare, number) {
	return number > compare;
}

var greaterThanTen = _.partial(greaterThan, 10);

console.log(_.filter(numbers, greaterThanTen));

// => [15, 16, 23, 42]
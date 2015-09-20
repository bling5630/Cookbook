var _ = require('ramda');

function sum(x, y) {
	return x + y;
}

var sumWithFixedToTen = _.partial(sum, 10);

console.log(typeof sumWithFixedToTen);

console.log(sumWithFixedToTen(2));
console.log(sumWithFixedToTen(12));
console.log(sumWithFixedToTen(22));
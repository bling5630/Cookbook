var _ = require('ramda');

var numbers = [4, 8, 15, 16, 23, 42];

var pipe = _.pipe(
	_.filter(_.lt(10)),
	_.reverse,
	_.map(_.multiply(2))
);

console.log(pipe(numbers));

// => // => [84, 46, 32, 30]
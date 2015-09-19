var _ = require('ramda');

var numbers = [4, 8, 15, 16, 23, 42];

function firstToUpper(string) {
	return _.head(_.toUpper(string));
}

function lastToUpper(string) {
	return _.last(_.toUpper(string));
}

console.log(firstToUpper('abc'));
//=> 'A'

console.log(lastToUpper('abc'));
//=> 'C'

var firstToUpper_a = _.compose(_.head, _.toUpper);

console.log(firstToUpper_a('korte'));
// => K
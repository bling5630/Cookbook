var _ = require('lodash'),
	R = require('ramda');

// console.log(_.pluck('abc', 'length')); 
//=> [1, 1, 1] , Lo-Dash way

// console.log(R.map(R.always(1), R.split('', 'abc'))); 
//=> [1, 1, 1] , Ramda way

// Flinstones dataset

var flintstones1 = {
	A: {
		name: 'fred',
		age: 30
	},
	B: {
		name: 'wilma',
		age: 28
	},
	C: {
		name: 'pebbles',
		age: 2
	}
};

// console.log(_.pluck(flintstones1, 'age')); //=> [30, 28, 2]

var flintstones2 = flintstones1;

// console.log(_.isEqual(flintstones1, flintstones2)); // => true

// console.log(_.pluck(flintstones1, 'age') === _.pluck(flintstones2, 'age'));
// => false





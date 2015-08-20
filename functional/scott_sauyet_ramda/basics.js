var _ = require('lodash'),
	R = require('ramda');

R.is(Number, 42); // true	
R.is(Function, 42); // false	
R.is(Object, {}); // true

// console.log(R.is(Number, 42)); // true

R.is(Rectangle, new Square(4)); // true


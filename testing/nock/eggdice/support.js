var curry = require('ramda').curry;

reduce = curry(function(f, a, xs) {
	return xs.reduce(f, a);
});
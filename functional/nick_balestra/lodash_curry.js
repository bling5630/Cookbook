var _ = require('lodash');

var sum3 = function(a, b, c) {
	return a + b + c;
};

var curriedSum = _.curry(sum3);

console.log(curriedSum(1)(2)(3)); // -> 6

console.log(curriedSum(1, 2)(3)); // -> 6

console.log(curriedSum(1, 2, 3)); // -> 6

console.log(curriedSum(1)(_, 3)(2)); // -> 6
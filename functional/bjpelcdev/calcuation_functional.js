var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

var xs = [1, 2, 3, 4, 5];

var curry = function(fn, fnLength) {
	fnLength = fnLength || fn.length;
	return function() {
		var suppliedArgs = Array.prototype.slice.call(arguments);
		if (suppliedArgs.length >= fn.length) {
			return fn.apply(this, suppliedArgs);
		} else if (!suppliedArgs.length) {
			return fn;
		} else {
			return curry(fn.bind.apply(fn, [this].concat(suppliedArgs)), fnLength - suppliedArgs.length);
		}
	};
};

var compose = function() {
	var funcs = arguments;
	return function() {
		var args = arguments;
		for (var i = funcs.length; i-- > 0;) {
			args = [funcs[i].apply(this, args)];
		}
		return args[0];
	};
};

var reduce = curry(function(func, init, xs) {
	return xs.reduce(func, init);
});

var map = curry(function(func, xs) {
	return xs.map(func);
});

var length = function(xs) {
	return xs.length;
};

var square = function(x) {
	return x * x;
};

var add = function(a, b) {
	return a + b;
};

var sum = reduce(add, 0);

var mean = function(xs) {
	return sum(xs) / length(xs);
};

var squaredDeviations = function(xs) {
	return map(function(x) {
		return square(x - mean(xs));
	}, xs);
};

// console.log(sum([1, 2, 3, 4, 5])); //>> 15

var std = compose(Math.sqrt, mean, squaredDeviations);

// test it out
console.log(std([1, 2, 3, 4, 5])); // >> 1.414

// this is the same as:
console.log(compose(Math.sqrt, mean, squaredDeviations)([1, 2, 3, 4, 5])); // >> 1.414

// and the same as the nested implementation
console.log(Math.sqrt(mean(squaredDeviations([1, 2, 3, 4, 5])))); // >> 1.414
var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

var head = function(x) {
	return x[0];
};

var reverse = reduce(function(acc, x) {
	return [x].concat(acc);
}, []);

var toUpperCase = function(x) {
	return x.toUpperCase();
};

var exclaim = function(x) {
	return x + ' ! ';
};

// or
var last = compose(head, reverse);
var loudLastUpper = compose(exclaim, toUpperCase, last);

// or
var last = compose(head, reverse);
var angry = compose(exclaim, toUpperCase);
var loudLastUpper = compose(angry, last);

// more variations...
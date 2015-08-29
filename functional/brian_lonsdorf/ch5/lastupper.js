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

// previously we'd have to write two composes, but since it's associative, we can give compose as many fn's as we like and let it decide how to group them.
var lastUpper = compose(toUpperCase, head, reverse);

lastUpper(['jumpkick', 'roundhouse', 'uppercut']);

console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']));
//=> 'UPPERCUT'


var loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);
//=> 'UPPERCUT!'

console.log(loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));
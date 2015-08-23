var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);


var head = function(x) {
	return x[0];
};
// fail
var reverse = reduce(function(acc, x) {
	return [x].concat(acc);
}, []);
var last = compose(head, reverse);

last(['jumpkick', 'roundhouse', 'uppercut']);
//=> 'uppercut'

console.log(last(['jumpkick', 'roundhouse', 'uppercut']));
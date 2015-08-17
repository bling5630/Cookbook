var _ = require('lodash');

/*
// reduce implementation

var reduce = function(fn, init, list) {
	for (var i = 0; i < list.length; i++)
		init = fn(init, list[i], i, list);
	return init;
};
*/

// list numbers from the array

var items = [1, 2, 3];

console.log(_.reduce(items, function(crnt, val) {
	return crnt + val;
}, 0)); // 6


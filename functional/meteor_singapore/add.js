var _ = require('ramda');

var add = _.curry(function(x, y) {
	return x + y;
});

var addOne = add(1);

console.log(addOne(1));
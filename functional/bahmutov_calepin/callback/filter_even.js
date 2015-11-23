var _ = require('lodash');

var numbers = [1, 2, 3, 4, 5];

var isEven = function(x) {
	return x % 2 === 0;
};

var _ = require('lodash');
var filterEven = _.partial(_.filter, _, isEven);
console.log(filterEven(numbers));
// [2, 4]
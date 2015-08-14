var _ = require('lodash');

/*
var worker = function(item) {
	return _.sortBy(item, function(item) {
		return -item.quantity;
	});
};
*/

var worker = function(item) {
	return _.sortBy(item, "quantity").reverse();
};

module.exports = worker;

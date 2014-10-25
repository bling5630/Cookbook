var _ = require('lodash');

var analyze = function(item) {
	var average,
		underperform,
		overperform;

	item = _.sortBy(item, "income");

	average = _.reduce(item, function(sum, num) {
		return sum + num.income;
	}, 0);

	average = average / item.length;

	underperform = _.filter(item, function(num) {
		return num.income <= average;
	});
	overperform = _.filter(item, function(num) {
		return num.income > average;
	});
	return {
		average: average,
		underperform: underperform,
		overperform: overperform
	};
};

module.exports = analyze;
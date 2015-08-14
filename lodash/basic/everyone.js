var _ = require('lodash');

var worker = function(item) {
	var result = {
		hot: [],
		warm: []
	};

	function temp(item) {
		return item > 19;
	}

	_.forEach(item, function(town, townname) {
		if (_.every(town, temp)) {
			result.hot.push(townname);
		} else if (_.some(town, temp)) {
			result.warm.push(townname);
		}
	});
	return result;
};

module.exports = worker;
var _ = require('lodash');

function filterByLength(content) {
	return _.filter(content.split(' '), function(n) {
		return n.length > 2 && n.length < 8;
	});
}

module.exports = filterByLength;
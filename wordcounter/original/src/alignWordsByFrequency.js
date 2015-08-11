var _ = require('lodash');

function alignWordsByFrequency(array) {
	return array.sort(function(a, b) {
		return a[1] - b[1];
	});
}


console.log(alignWordsByFrequency(x));

module.exports = alignWordsByFrequency;
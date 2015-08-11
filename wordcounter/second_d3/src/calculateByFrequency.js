var _ = require('lodash');

function calculateByFrequency(content) {
	return _.reduce(content, function(a, c) {
		if (typeof a[c] == 'undefined') {
			a[c] = 1;
		} else {
			a[c] += 1;
		}
		return a;
	}, {});
}

var x = ['musing',
	'from',
	'tariq',
	'and',
	'musing',
	'from',
	'tariq',
	'and',
	'musing',
	'from',
	'tariq'
];

console.log((calculateByFrequency(x)));

module.exports = calculateByFrequency;
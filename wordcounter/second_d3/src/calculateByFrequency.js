var _ = require('lodash');

function calculateByFrequency(content) {
	return _.reduce(content, function(countMap, word) {
		countMap[word] = ++countMap[word] || 1;
		return countMap;
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
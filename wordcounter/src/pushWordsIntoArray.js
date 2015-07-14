var _ = require('lodash');

function pushWordsIntoArray(content) {
	for (word in content)
		listOfWords.push([word, content[word]]);
}

var listOfWords = [];

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

console.log(typeof pushWordsIntoArray(x));

module.exports = pushWordsIntoArray;
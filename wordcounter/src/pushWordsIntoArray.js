var _ = require('lodash');

function pushWordsIntoArray(content) {
	var listOfWords = [];

	for (var word in content)
		listOfWords.push([word, content[word]]);
}

// var listOfWords = [];

var x = {
	your: 2,
	among: 1,
	others: 1,
	app: 1,
	read: 2,
	respond: 1,
	write: 1,
	months: 2,
	nni: 1
};

console.log(pushWordsIntoArray(x));

module.exports = pushWordsIntoArray;
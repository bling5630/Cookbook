var _ = require('lodash');

function printResult(content) {
	console.log(content);
}

var input = ('alma');
var output = printResult(input);
 console.log(output);


module.exports = printResult;

/*
function sortWords(array) {
	return array.sort(function(a, b) {
		return a[1] - b[1];
	});
}

function pushWordsIntoArray(content) {
	for (word in content)
		sortable.push([word, content[word]]);
}

function countWords(content) {
	return _.reduce(content, function(a, c) {
		if (typeof a[c] == 'undefined') {
			a[c] = 1;
		} else {
			a[c] += 1;
		}
		return a;
	}, {});
}

function filterContent(content) {
	return _.filter(content.split(' '), function(n) {
		return n.length > 2 && n.length < 8;
	});
}

function clearContent(content) {
	return content.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();
}
*/
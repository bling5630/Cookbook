var request = require("request"),
	cheerio = require("cheerio"),
//emitter = require('events').EventEmitter.prototype._maxListeners = 100,
	_ = require('lodash');

var url = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

// kivenni!!
var listOfWords = [];

var wordcounter = request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	var $page = cheerio.load(body),
		article = $page('body').text();

	var loadedText = clearTheParsedText(article),

		listedMixedWords = filterByLength(loadedText),

		sortedByCount = calculateByFrequency(listedMixedWords),

		// testing ??
		pushedWordsInArray = pushWordsIntoArray(sortedByCount),

		listedWordsByFrequency = alignWordsByFrequency(listOfWords),

		transformedDataToJSON = JSON.stringify(listedWordsByFrequency);


	
	console.log(JSON.stringify(sortedByCount, null, 2));
	/*
	console.log(listedMixedWords.slice(-10));
	console.log(transformedDataToJSON);
	console.log(loadedText);
	console.log(printTheFinalVersion(transformedDataToJSON));
	console.log(listedWordsByFrelquency.splice(-5));
	*/
});

function printTheFinalVersion(content) {
	return content;
}

function alignWordsByFrequency(array) {
	return array.sort(function(a, b) {
		return a[1] - b[1];
	});
}

function pushWordsIntoArray(content) {
	for (var word in content)
		listOfWords.push([word, content[word]]);
}

/*
function pushWordsIntoArray(content) {
	_.forIn(content, function(word, content) {
		listOfWords.push([word, content[word]]);
	});
}
*/


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

function filterByLength(content) {
	return _.filter(content.split(' '), function(n) {
		return n.length > 2 && n.length < 8;
	});
}

function clearTheParsedText(content) {
	return content.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();
}

module.exports = wordcounter;
module.exports = calculateByFrequency;

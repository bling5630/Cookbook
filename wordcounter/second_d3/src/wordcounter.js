var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');

var url = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';


var wordcounter = request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	var $page = cheerio.load(body),
		article = $page('body').text();

	// print the raw text
	var loadedText = clearTheParsedText(article),

		// print  text ['musing','from','tariq' ]
		listedMixedWords = filterByLength(loadedText),

		// print write: 1, months: 2, nni: 1 }
		sortedByCount = calculateByFrequency(listedMixedWords),

		// print transformed JSON from invalid JSON
		unsortedJSON = transformDataToJSON(sortedByCount);


	console.log(JSON.stringify(_.map(_.sortByOrder(unsortedJSON, 'quantity', 'asc')).splice(-5), null, 2));

});

console.log(typeof wordcounter);

function transformDataToJSON(input) {

	var output = [];

	for (var key in input) {
		output.push({
			name: key,
			quantity: input[key]
		});
	}
	return output;
}

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

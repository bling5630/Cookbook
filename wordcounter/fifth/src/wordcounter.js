'use strict';

var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');


var BASE_URL = 'http://nba.com';

function wordcounter(callback) {

	request(BASE_URL, function(error, response, body) {

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

		callback(error, JSON.stringify(_.map(_.sortByOrder(unsortedJSON, 'quantity', 'asc'))
			.splice(-20), null, 2));

	});
}


function transformDataToJSON(content) {

	var output = [];

	_.forIn(content, function(value, key) {
		output.push({
			name: key,
			quantity: content[key]
		});
	});
	return output;
}

function calculateByFrequency(content) {
	return _.reduce(content, function(countMap, word) {
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {});
}

function filterByLength(content) {
	return _.filter(content.split(' '), function(n) {
		return n.length > 2 && n.length < 8;
	});
}

function clearTheParsedText(content) {
	return content
		.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();
}


module.exports = wordcounter;

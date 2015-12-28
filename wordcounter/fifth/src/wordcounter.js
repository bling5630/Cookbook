'use strict';

var request = require("request"),
	cheerio = require("cheerio"),
	fs = require('fs'),
	_ = require('lodash');


/*
var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';
*/
fs.readFile("./text.txt", function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

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
			.splice(-3), null, 2));

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

// ezeket miert nem tudom betenni?
//module.exports = calculateByFrequency;
//module.exports = clearTheParsedText;
//module.exports = filterByLength;

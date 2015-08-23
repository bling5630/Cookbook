'use strict';

var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

// szetbontani load & parse ra?
function something(t) {
	return wordcounter(BASE_URL);
}

function wordcounter(callback) {
	// body undefined lesz s beakasztja az egesz grafikonos dolgot
	request(BASE_URL, function(error, response, body) {
		callback(error, body); // igy a teszt torik el, 3*[]
	});
}
// console.log(wordcounter(BASE_URL));

function parser(content) {
	var $page = cheerio.load(content),
		article = $page('content').text();
}

function converter(content) {
	// print the raw text
	var loadedText = clearTheParsedText(content),

		// print  text ['musing','from','tariq' ]
		listedMixedWords = filterByLength(loadedText),

		// print write: 1, months: 2, nni: 1 }
		sortedByCount = calculateByFrequency(listedMixedWords),

		// print transformed JSON from invalid JSON
		unsortedJSON = transformDataToJSON(sortedByCount);

	console.log(JSON.stringify(_.map(_.sortByOrder(unsortedJSON, 'quantity', 'asc'))
		.splice(-3), null, 2));
	/*
	 */
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


module.exports = something;

// ezeket miert nem tudom betenni?
//module.exports = calculateByFrequency;
//module.exports = clearTheParsedText;
//module.exports = filterByLength;

/*
		.replace(/\s+/g, " ")
		 ^
TypeError: Cannot call method 'replace' of undefined

	return _.filter(content.split(' '), function(n) {
	                        ^
TypeError: Cannot call method 'split' of undefined
*/
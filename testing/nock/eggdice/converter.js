var cheerio = require('cheerio'),
	request = require('request'),
	ljs = require('lambdajs').expose(global),
	_ = require('lodash');


var BASE_MOCK_HTML =
	[
		'<!DOCTYPE html>',
		'<body>',
		'<div id="comic">',
		'</div>',
		'<p> My first paragraph. </p>',
		'<p> My second paragraph. </p>',
		'<p> My third paragraph. </p>',
		'<p> My fourth paragraph. </p>',
		'</body>',
		'</html>'
	].join('');


function wordcounter(content) {

	// print the raw text
	var loadedText = clearTheParsedText(content),

		// print  text ['musing','from','tariq' ]
		listedMixedWords = filterByLength(loadedText),

		// print write: 1, months: 2, nni: 1 }
		sortedByCount = calculateByFrequency(listedMixedWords),

		// print transformed JSON from invalid JSON
		unsortedJSON = transformDataToJSON(sortedByCount);

	console.log(JSON.stringify(_.map(_.sortByOrder(unsortedJSON, 'quantity', 'asc'))
		.splice(-2), null, 2));

}

console.log(wordcounter(BASE_MOCK_HTML));


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
	return _.filter(split(' ', content), function(n) {
		return n.length > 2 && n.length < 10;
	});
}

function clearTheParsedText(content) {
	return content.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();
}
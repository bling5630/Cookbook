var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');

var url = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

var sortable = [];
var word;

request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	var $page = cheerio.load(body),
		article = $page('body').text();

	var text = clearContent(article);

	var wordArray = filterContent(text);

	var data = countWords(wordArray);

	var pushedArray = pushWordsIntoArray(data);

	var x = sortWords(sortable);

	var jsonData = JSON.stringify(x);


	/*
	console.log(jsonData);
	printResult(sortWords(sortable).slice(-10));
	*/
	console.log(jsonData);
});

function printResult(content) {
	console.log(content);
}

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
var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');

var url = 'http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=';

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

	var data = _.reduce(wordArray, function(acc, curr) {
		if (typeof acc[curr] == 'undefined') {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});

	for (word in data)
		sortable.push([word, data[word]]);


	sortable.sort(function(a, b) {
		return a[1] - b[1];
	});

	console.log(sortable.slice(-20));
	console.log(wordArray.length);
	console.log(text.length);
	//console.log(data);
});

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
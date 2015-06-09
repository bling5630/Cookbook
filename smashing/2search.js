var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash'),
	fs = require('fs');

var url = 'http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=';

request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	var $page = cheerio.load(body),
		article = $page('body').text();

	var text = article.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();

	var wordArray = _.filter(text.split(' '), function(n) {
		return n.length > 3 && n.length < 5;
	});

	var wordArray4 = _.reduce(wordArray, function(acc, curr) {
		if (typeof acc[curr] == 'undefined') {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});

	var jsonData = JSON.stringify(wordArray4);
	
	var sortable = [];

	sortable.push(jsonData);

	console.log(sortable);
});

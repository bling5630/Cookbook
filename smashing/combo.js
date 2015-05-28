var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');

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
		return n.length > 2 && n.length < 8;
	});

	var wordArray2 = _.map(text.split(' '), function(n) {
		return n.match(/([a-z]+)/g);
	}).reduce(function(last, now) {
		return last.concat(now);
	}, []);

	var wordArray3 = _.remove(wordArray2, function(n) {
		return n !== null;
	});


	console.log(wordArray3);
	//console.log(text.length);
	console.log(wordArray.length);
	console.log(wordArray2.length);
	console.log(wordArray3.length);
});
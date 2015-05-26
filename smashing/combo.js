var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');
url = 'http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=';

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

	var wordArray = text.split(' ').slice(0, 20);

	console.log(text.length);
	console.log(wordArray.length);
	console.log(wordArray);
});
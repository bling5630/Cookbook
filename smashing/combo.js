var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');
url = 'http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=';

var corpus = {};

request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	// load the body of the page into Cheerio so we can traverse the DOM
	//var $ = cheerio.load(body);

	// print the length of the body
	//console.log(body.length);

	var $page = cheerio.load(body),
		article = $page('body').text();

	// Throw away extra white space and non-alphanumeric characters.

	var text = article.replace(/[^a-zA-Z ]/g,'')
		.replace(/\s+/g, '')
		.toLowerCase();

	// Split on spaces for a list of all the words on that page and 
	// loop through that list.
	_.forEach(text, function(word) {
		if (word.length < 4 || word.length > 20) {
			return;
		}
		if (corpus[word]) {
			corpus[word] ++;
		} else {
			corpus[word] = 1;
		}
	});
	console.log(text);


});
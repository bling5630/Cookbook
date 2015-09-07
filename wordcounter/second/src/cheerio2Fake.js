var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');


var BASE_URL = 'https://medium.com/life-at-confetti';

//var cheerioFake = 

request(BASE_URL, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}

	var $page = cheerio.load(body),
		article = $page('body').text();

	console.log(article);
});


//module.exports = cheerioFake;
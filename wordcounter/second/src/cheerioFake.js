var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash');


exports.getWordsJSON = function(callback) {
	var url = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

	request(url, function(error, response, body) {
		if (error) {
			console.log("Couldn’t get page because of error: " + error);
			return;
		}

		var $page = cheerio.load(body),
			article = $page('body').text();

		callback(body);

		console.log(article);
	});
};


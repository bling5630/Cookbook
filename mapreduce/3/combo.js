var cheerio = require('cheerio'),
	request = require('request'),
	_ = require('lodash');

request('https://news.ycombinator.com', function(err, res, html) {
	if (!err && res.statusCode === 200) {
		var $ = cheerio.load(body);

		var rawData = html;
		console.log(rawData.length);
	}
});
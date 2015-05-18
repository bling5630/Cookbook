var cheerio = require('cheerio'),
	request = require('request'),
	_ = require('lodash');

request('https://news.ycombinator.com', function(err, res, html) {
	if (!err && res.statusCode === 200) {
		var $ = cheerio.load(html);
		$('span.sitebit').each(function(i, element) {
			var a = $(this).prev(),
				rank = a.parent().parent().text(),
				title = a.text();

			// Our parsed meta data object

			var metadata = {
				rank: parseInt(rank),
				title: title,
			};

			//console.log(a.text());
			//console.log(metadata);
			console.log(html);
		});
	}
});
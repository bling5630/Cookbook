var cheerio = require('cheerio'),
	request = require('request'),
	_ = require('lodash');

var title = request('https://news.ycombinator.com', function(err, res, html) {
	if (!err && res.statusCode === 200) {
		var $ = cheerio.load(html);
		var parsedResults = [];
		$('span.sitebit').each(function(i, element) {
			var a = $(this).prev(),
				rank = a.parent().parent().text(),
				title = a.text(),
				subtext = a.parent().parent().next().children('.subtext').children(),
				username = $(subtext).eq(1).text();

			// Our parsed meta data object

			var metadata = {
				//rank: parseInt(rank),
				title: title,
				//username: username,
			};
			//parsedResults.push(metadata);
			parsedResults.push(title);
			console.log(parsedResults);
			//console.log(metadata);
			//console.log(html);
		});
		//console.log(parsedResults);
		//console.log(parsedResults.length);
	}
});
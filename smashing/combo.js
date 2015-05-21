var request = require("request"),
	cheerio = require("cheerio"),
	url = 'http://koponyeg.hu/t/Budapest';

request(url, function(error, response, body) {
	if (error) {
		console.log("Couldn’t get page because of error: " + error);
		return;
	}
	//console.log(body.length);

	// load the body of the page into Cheerio so we can traverse the DOM
	var $ = cheerio.load(body),
		links = $(".r a");

	links.each(function(i, link) {
		// get the href attribute of each link
		var url = $(link).attr("href");

		// strip out unnecessary junk
		url = url.replace("/url?q=", "").split("&")[0];

		if (url.charAt(0) === "/") {
			return;
		}

		// this link counts as a result, so increment results
		totalResults++;
	});
});
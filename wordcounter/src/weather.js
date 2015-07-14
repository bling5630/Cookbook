var request = require("request"),
	cheerio = require("cheerio"),
	//url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
	url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 'Budaors';

request(url, function(err, response, body) {
	if (!err) {
		var $ = cheerio.load(body),
			temperature = $("[data-variable='temperature'] .wx-value").html();
		console.log('It is ' + temperature);
	} else {
		console.log('We encountered an error: ' + err);
	}
	//console.log(body);
});	

url2 = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 'Bucharest';

request(url2, function(err, response, body) {
	if (!err) {
		var $ = cheerio.load(body),
			temperature = $("[data-variable='temperature'] .wx-value").html();
		console.log('It is ' + temperature);
	} else {
		console.log('We encountered an err: ' + err);
	}
	//console.log(body);
});
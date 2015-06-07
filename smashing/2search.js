var request = require("request"),
	cheerio = require("cheerio"),
	_ = require('lodash'),
	fs = require('fs');

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
		return n.length > 3 && n.length < 5;
	});

	var wordArray4 = _.reduce(wordArray, function(acc, curr) {
		if (typeof acc[curr] == 'undefined') {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});

	//var data = JSON.stringify(wordArray4);
	var jsonData = JSON.stringify(wordArray4);
	//var parsedJsonData = JSON.parse(jsonData);
	var sortable = [];

	sortable.push(wordArray4);
	//sortable.push(jsonData);

	/*
		for (var word in data)
			sortable.push([word, data[word]]);
		sortable.sort(function(a, b) {
			return a[1] - b[1];
		});

	var file = fs.createWriteStream('data.json');
	file.on('error', function(err) {

	});
	sortable.forEach(function(v) {
		file.write(v.join(', ') + '\n');
	});
	file.end();
	*/
	console.log(wordArray4);
	//console.log(JSON.stringify(wordArray4));
	//console.log(sortable.slice(-5));
	//console.log(text.length);
	//console.log(wordArray.length);
	//console.log(data);
});

/*
var sortable = [];

module.exports = sortable;
*/
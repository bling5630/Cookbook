var wordCount = require('./request');

wordCount(function(error, body) {
	console.log(body);
});
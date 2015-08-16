'use strict';

var request = require('request');

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

function wordCount(callback) {
	request(BASE_URL, function(error, response, body) {
		callback(error, body);
	});
}

module.exports = wordCount;
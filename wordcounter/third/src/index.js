'use strict';

var wordcounter = require('./wordcounter');

wordcounter(function(error, callback) {
	console.log(callback);
});


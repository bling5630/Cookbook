'use strict';

var wordcounter = require('./wordcounter');

wordcounter('http://index.hu', function(error, callback) {
	console.log(callback);
});

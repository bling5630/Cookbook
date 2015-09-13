var fs = require('fs');

var callback = function(err, data) {
	if (err)
		return console.error(err);
	console.log(data);
};

var x = fs.readFile('text.txt', callback, 'utf-8');

console.log(x);
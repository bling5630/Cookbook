var fs = require('fs');
var dir = process.argv[2];

fs.readFile(dir, function(err, content) {
	var lines = content.toString().split('\n').length - 1
	console.log(lines)
});
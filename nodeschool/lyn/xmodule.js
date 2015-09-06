var mymodule = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
	if (err)
		return console.error("Mehh...", err)
	list.forEach(function(data) {
		console.log(data)
	});
});
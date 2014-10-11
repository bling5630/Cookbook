var mymodule = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];

/**
 *Create a program that prints a list
 *of files in a given directory,
 *filtered by the extension of the files.
 *The first argument is the directory name
 *and the second argument is the extension filter.
 */

mymodule(dir, ext, function(err, list) {
	if (err)
		return console1.error('Mehhh: ', err)

	list.forEach(function(file) {
		console.log(file)
	})

})
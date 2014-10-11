var fs = require('fs');
var path = require('path');

/**
 *module must export a single function
 *that takes three arguments:
 *the directory name, the filename extension string
 *and a callback function
 */

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list) {
		if (err)
			return callback(err)

		list = list.filter(function(file) {
			return path.extname(file) === '.' + ext
		})
		callback(null, list)
	})
};
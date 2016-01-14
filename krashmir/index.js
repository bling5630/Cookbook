var glob = require("glob"),
	path = require("path"),
	fs = require("fs");

glob(__dirname + "/pictures/**/*.*", function(err, files) {
	var processed = 0;
	files.forEach(function(file) {
		var dir = path.dirname(file);
		var filename = path.basename(file);
		fs.renameSync(file, dir + "/" + filename.toLowerCase());
		processed++;
	});
	console.log(processed + " files processed");
});

fs.readFile('/foo.txt', function(err, data) {
	// TODO: Error Handling Still Needed!
	console.log(data);
});

fs.readFile('/foo.txt', function(err, data) {
	// If an error occurred, handle it (throw, propagate, etc)
	if (err) {
		console.log('Unknown Error');
		return;
	}
	// Otherwise, log the file contents
	console.log(data);
});

if(err) {
  // Handle "Not Found" by responding with a custom error page
  if(err.fileNotFound) {
    return this.sendErrorMessage('File Does not Exist');
  }
  // Ignore "No Permission" errors, this controller knows that we don't care
  // Propagate all other errors (Express will catch them)
  if(!err.noPermission) {
    return next(err);
  }
}
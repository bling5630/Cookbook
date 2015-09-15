// old sync way

function processData() {
	var data = fetchData();
	data += 1;
	return data;
}

// async node way

function processData_2(callback) {
	fetchData(function(err, data) {
		if (err) {
			console.log('Error popped up!!');
			callback(err);
		}
		data += 1;
		callback(data);
	});
}

// the typical convention with asynchronous functions 

function asyncOperation(a, b, c, callback) {
	// ... lots of hard work ...
	if ( /* an error occurs */ ) {
		return callback(new Error("An error has occured"));
	}
	// ... more work ...
	callback(null, d, e, f);
}

asyncOperation(params.., function(err, returnValues..) {
	//This code gets run after the async operation gets run
});
var myCallback = function(data) {
	console.log('Got data: ' + data);
};

var usingItNow = function(callback) {
	callback('Get it?');
};

usingItNow(myCallback);
// -> Got data: Get it?
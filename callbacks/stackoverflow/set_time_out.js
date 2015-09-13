setTimeout(function() {
	console.log('5 seconds later...');
}, 5000);

var callback = function() {
	console.log('5 seconds later...');
};

setTimeout(callback, 5000)
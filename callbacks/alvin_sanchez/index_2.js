callback(5, function() {
	console.log('I am from an anonymous function!');
});

function callback(x, cb) {
	console.log(x);
	cb();
}
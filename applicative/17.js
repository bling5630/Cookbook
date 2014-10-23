var foo = function(s, n, o, a, f) {
	[].forEach.call(arguments, function(e) {
		console.log(e);
	});
};

foo('s', 1, {}, [], function() {});
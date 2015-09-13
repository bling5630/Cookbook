// older way

function add(a, b, c) {
	return a + b + c;
}

// curried way

function curriedAdd(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		};
	};
}


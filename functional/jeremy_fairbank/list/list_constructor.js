var list = function() {
	if (arguments.length === 0) {
		return Nil;
	}

	var head = arguments[0];
	var tail = [].slice.call(arguments, 1);

	return cons(head, list.apply(null, tail));
};
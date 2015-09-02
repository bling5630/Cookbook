var map = function(list, fn) {
	if (list.isEmpty) {
		return list;
	}

	return cons(fn(list.head), map(list.tail, fn));
};
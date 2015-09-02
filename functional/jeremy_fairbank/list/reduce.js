var reduce = function(list, fn, memo) {
	if (list.isEmpty) {
		return memo;
	}

	return reduce(list.tail, fn, fn(memo, list.head));
};
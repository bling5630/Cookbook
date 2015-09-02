Cons.prototype.reduce = function(fn, memo) {
	return this.tail.reduce(fn, fn(memo, this.head));
};

Nil.reduce = function(fn, memo) {
	return memo;
};
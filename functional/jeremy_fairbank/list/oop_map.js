Cons.prototype.map = function(fn) {
	return cons(fn(this.head), this.tail.map(fn));
};

Nil.map = function() {
	return this;
};
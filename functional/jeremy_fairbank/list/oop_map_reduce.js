Cons.prototype.map = function(fn) {
	var consBuilder = function(memo, value) {
		return cons(fn(value), memo);
	};

	return this.reduceRight(consBuilder, Nil);
};
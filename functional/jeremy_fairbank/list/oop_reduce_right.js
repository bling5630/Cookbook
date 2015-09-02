Cons.prototype.reduceRight = function(fn, memo) {
	return fn(this.tail.reduceRight(fn, memo), this.head);
};

Nil.reduceRight = Nil.reduce;
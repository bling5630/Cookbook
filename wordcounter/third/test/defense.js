// old way

Foo.prototype.bar = function() {
	var self = this; //see how it's AWFUL?
	something.act(function() {
		self.baz();
	});
};




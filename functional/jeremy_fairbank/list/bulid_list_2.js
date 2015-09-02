var cons = function(head, tail) {
	return new Cons(head, tail);
};

var list = cons(1, cons(3, cons(42, cons(28, Nil))));
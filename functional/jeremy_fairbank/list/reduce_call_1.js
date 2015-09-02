var list = cons(1, cons(2, cons(3, Nil)));
var add = (x, y) => x + y;

reduce(list, add, 0); //=> 6
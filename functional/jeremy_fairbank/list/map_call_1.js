var list = cons(1, cons(2, cons(3, Nil)));
var double = (n) => n * 2;

map(list, double); // yields:

cons(2, map(cons(2, cons(3, Nil)), double));
cons(2, cons(4, map(cons(3, Nil), double)));
cons(2, cons(4, cons(6, map(Nil, double))));
cons(2, cons(4, cons(6, Nil)));

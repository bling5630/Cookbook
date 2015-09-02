var list = cons(1, cons(2, cons(3, Nil)));
var double = (n) => n * 2;

list.map(double); // cons(2, cons(4, cons(6, Nil)))
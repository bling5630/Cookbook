var myList = list(1, 3, 5);
//=> cons(1, cons(3, cons(5, Nil)));

var myOtherList = myList.map(n => n * 3);
//=> cons(3, cons(9, cons(15, Nil)));

var nine = myList.reduce((x, y) => x + y);
//=> 9

var listOfLists = list(list(1), list(2), list(3));
//=> cons(cons(1, Nil), cons(cons(2, Nil), cons(cons(3, Nil), Nil)));

var flattened = listOfLists.map(innerList => innerList.head);
//=> cons(1, cons(2, cons(3, Nil)));
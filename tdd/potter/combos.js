var _ = require('lodash');

var BASE_PRICE = 8,
	BASE_BOOK_1 = 1,
	BASE_BOOK_2 = 2,
	BASE_BOOK_3 = 3,
	BASE_BOOK_4 = 4,
	BASE_BOOK_5 = 5;

var DISCOUNT = {
	1: 1,
	2: 0.95,
	3: 0.90,
	4: 0.80,
	5: 0.75
};

function isDoubledDifferentBooks(books) {
	var a = [],
		b = [];

	_.forEach(books, function(book) {
		if (book === BASE_BOOK_1) {
			return a.push(book);
		} else {
			return b.push(book);
		}
	});
	return a.length * BASE_PRICE * DISCOUNT[a.length] + b.length * BASE_PRICE * DISCOUNT[b.length];
}

console.log(isDoubledDifferentBooks([1, 1, 2, 2]));

console.log(_.indexOf([1, 2, 3, 4, 5, 6, 1, 2, 4, 5, 5, 6, 7], 2, 2));
var _ = require('lodash');

var BASE_PRICE = 8,
	DISCOUNT = {
		1: 1,
		2: 0.95,
		3: 0.90,
		4: 0.80,
		5: 0.75
	};

// example[1, 1, 2] -> 23.2

function calculateDiscountedPrice(books) {
	return books.length * BASE_PRICE * DISCOUNT[books.length];
}

function sliceBooks(books) {
	var combo = _.remove(books, function(book) {
		return book !== 1;
	});
	return combo.length * BASE_PRICE + calculateDiscountedPrice(books);
}

// example[1, 1, 2, 2] -> 30.4

function seekDoubles(books) {
	var combo = _.remove(books, function(book) {
		return book !== 1;
	});
	return combo.length * BASE_PRICE + calculateDiscountedPrice(books);
}

console.log(seekDoubles([1, 1, 2, 2]));
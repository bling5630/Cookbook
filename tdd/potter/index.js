// kataPotter

var _ = require('lodash');

var BASE_PRICE = 8,
	DISCOUNT = {
		1: 1,
		2: 0.95,
		3: 0.90,
		4: 0.80,
		5: 0.75
	};

function kataPotter(books) {
	validateInput(books);
	return calculateOutput(books);
}

function validateInput(books) {
	if (!books) {
		throw new Error('No book provided!!');
	}
}

function calculateOutput(books) {
	if (!books.length) {
		return 0;
	}
	if (isAllElementsSame(books)) {
		return calculateDiscountedPrice(books);
	} else {
		return isOneDifferentElement(books);
	}
}

function calculateDiscountedPrice(books) {
	return books.length * BASE_PRICE * DISCOUNT[books.length];
}

function isAllElementsSame(list) {
	var first = list[0];
	// every egy true false ertek s ezert kell a return
	return _.every(list, function(i) {
		if (first !== list[i]) {
			return false;
		}
		return true;
	});
}

function isOneDifferentElement(books) {
	var combo = _.remove(books, function(book) {
		return book !== 1;
	});
	return combo.length * BASE_PRICE + calculateDiscountedPrice(books);
}

console.log(kataPotter([1, 2, 1, 2]));

module.exports = kataPotter;
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
	_.forEach(list, function(i) {
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

function findPairs(books) {
	var a = [],
		b = [];

	_.forEach(books, function(book) {
		if (book === 1) {
			return a.push(book);
		} else {
			return b.push(book);
		}
	});
	return a.length * BASE_PRICE * DISCOUNT[a.length] + b.length * BASE_PRICE * DISCOUNT[b.length];
}

console.log(kataPotter([1, 2, 1, 2]));

module.exports = kataPotter;
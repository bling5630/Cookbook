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
	var a = [],
		b = [],
		prev;

	//_.sortBy(books);
	_.forEach(books, function(book, i) {
		if (books[i] !== prev) {
			a.push(books[i]);
			b.push(1);
		} else {
			b[b.length - 1] ++;
		}
		prev = books[i];
	});
	// return [a];
	return _.flatten([a]);
}

//

function findPairs(books) {
	var result = [];
	_.forEach(books, function(item) {
		if (result.indexOf(item) < 0) {
			result.push(item);
		}
	});
	return result;
}

console.log(findPairs([1, 2, 1, 2]));
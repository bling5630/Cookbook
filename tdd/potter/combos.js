var _ = require('lodash');

var BASE_PRICE = 8,
	DISCOUNT = {
		1: 1,
		2: 0.95,
		3: 0.90,
		4: 0.80,
		5: 0.75
	};

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

console.log(findPairs([1, 1, 2, 2]));
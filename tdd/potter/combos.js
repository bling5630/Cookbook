var BASE_PRICE = 8,
	DISCOUNT = {
		1: 1,
		2: 0.95,
		3: 0.90,
		4: 0.80,
		5: 0.75
	};

function calculateDiscountedPrice(books) {
	return books.length * BASE_PRICE * DISCOUNT[books.length];
}

function listOrder(books) {
	var result = books.reduce(function(p, c) {
		if (c in p) {
			p[c] ++;
		} else {
			p[c] = 1;
		}
		return p;
	}, {});
	return result;
}

function sortOrder(books) {

	}

// console.log(calculateDiscountedPrice([1, 2, 3]));
console.log(listOrder([1, 1, 2]));
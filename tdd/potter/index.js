// kataPotter

var BASE_PRICE = 8,
	BOOK_LIST = [1, 0, 0, 0, 0],
	DISCOUNTS = {
		'1': 1,
		'2': 0.95,
		'3': 0.90,
		'4': 0.80,
		'5': 0.75
	};

function kataPotter(book, price) {
	return book * price;
}

function getDiscount(bookDiscount) {
	return bookDiscount === 0 && 0 ||
		bookDiscount === 1 && 0 ||
		bookDiscount === 2 && 0.95 ||
		bookDiscount === 3 && 0.9 ||
		bookDiscount === 4 && 0.8 ||
		bookDiscount === 5 && 0.75;
}


console.log(kataPotter(8, 3));
console.log(BOOK_LIST[0]);

module.exports = kataPotter;
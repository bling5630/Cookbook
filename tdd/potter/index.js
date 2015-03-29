// kataPotter

var BASE_PRICE = 8;

function kataPotter(book, price) {
	return book * price;
}

console.log(kataPotter(8, 3));

module.exports = kataPotter;
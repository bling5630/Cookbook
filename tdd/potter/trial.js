var BASE_PRICE = 8,
	DISCOUNT = {
		1: 1,
		2: 0.95,
		3: 0.90,
		4: 0.80,
		5: 0.75
	};

var total = [1, 1, 2].reduce(function(index, array) {
	return index + array;
});

console.log(total);
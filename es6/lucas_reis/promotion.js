// old way

var calculateTotalPromotions = cart =>
	getPromotions(cart.products[0])
	.then(calculateTotal);

// pointfree way

var calculateTotalPromotions = composeP(
	calculateTotal,
	getPromotions,
	head, // head returns first element
	prop('products'));
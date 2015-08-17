var R = require('ramda'),
	_ = require('lodash');

// curry examples

R.multiply(2, 10); // returns 20

// console.log(R.multiply(2,10));

var multiplyByTwo = R.multiply(2);
multiplyByTwo(10); // returns 20

// console.log(multiplyByTwo(10));
// Currying proceeds from right-to-left

// underscore way

_.map([1, 2, 3], _.add(1)); // 2,3,4

// Ramda way

R.map(R.add(1), [1, 2, 3]); // 2,3,4

// console.log(R.map(R.add(1), [1, 2, 3]));

var addOneToAll = R.map(R.add(1));
addOneToAll([1, 2, 3]); // [ 2, 3, 4 ]

// console.log(addOneToAll([1, 2, 3]));

/*
// underscore way

return getItems()
	.then(function(items) {
		return _.pluck(items, 'cost');
	});

// Ramda way

return getItems()
	.then(R.pluck('cost'));

*/

// composition examples

// The standard “compose” function is right-associative. That is, operations proceed from right to left.
var getCostWithTax = R.compose(
	R.multiply(1 + TAX_RATE), // calculate the tax
	R.prop('cost') // pull out the 'cost' property
);


// R.pipe(), which is the same as R.compose() but works from left to right
var getCostWithTax = R.pipe(
	R.prop('cost'), // pull out the 'cost' property
	R.multiply(1 + TAX_RATE) // calculate the tax
);

// R.compose and R.pipe can take up to 10 arguments.

// then examples

var getCostWithTaxAsync = function() {
	var getCostWithTax = R.pipe(
		R.prop('cost'), // pull out the 'cost' property
		R.multiply(1 + TAX_RATE) // multiply it by 1.13
	);

	return getItem()
		.then(getCostWithTax);
};

var getCostWithTaxAsync = R.pipe(
	getItem, // get the item
	R.prop('cost'), // pull out the 'cost' property
	R.multiply(1 + TAX_RATE) // multiply it by 1.13
);

var getCostWithTaxAsync = R.pPipe(
	getItem, // get a promise for the item
	R.prop('cost'), // pull out the 'cost' property
	R.multiply(1 + TAX_RATE) // multiply it by 1.13
); // returns a promise for the cost with tax
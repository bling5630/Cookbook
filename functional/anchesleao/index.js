var _ = require('lodash'),
	R = require('ramda');

// old way

var isGreaterThan = function(limit) {
	return function(value) {
		return value > limit;
	};
};

// ES6 way

var isGreaterThan = (limit) => (value) => value > limit;

// Ramda curry way

var isGreaterThan = R.curry(function(limit, value) {
	return value > limit;
});

greaterThan(10)(20); //true
greaterThan(10, 20); //true
var greaterThanTen = greaterThan(10);
greaterThanTen(20); //true

//Using lodash here. 
//We flip the order of the arguments in the filter
//function, passing the data last, and curry it.
var filter = _.curry(function(fn, collection) {
	return _.filter(collection, fn);
});


// curried functions

var onlyPositives = filter(greaterThan(0));
onlyPositives([-1, 4, 2, -5]); // [4, 5]

//read from bottom to top

//+ getFirstPositivePlusOne :: [Number] => Number
var getFirstPositivePlusOne = R.compose(
	R.add(1), // 4
	R.get(0), // 3
	filter(greaterThan(0))); // [3, 6]

getFirstPositive([-2, -1, 3, 6]); // 4

//lodash way
var onlyPositives = function(data) { //glue variable (data)
	return data.filter(function(item) { //glue variable (item)
		return greaterThan(0, item);
	});
}

//pointfree ramda way
var onlyPositivesPF = R.filter(greaterThan(0)); //no glue variables
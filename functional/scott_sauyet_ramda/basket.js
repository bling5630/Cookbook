var R = require('ramda'),
	_ = require('lodash');

// add function

var add = function(a, b) {
	return a + b;
};

// data set

var basket = [{
	item: 'apples',
	per: 95,
	count: 3,
	cost: 2.85
}, {
	item: 'peaches',
	per: 80,
	count: 2,
	cost: 1.60
}, {
	item: 'plums',
	per: 55,
	count: 4,
	cost: 2.20
}];

/*
var sum = reduce(add, 0);

var totalCost = compose(sum, pluck('cost'));
*/

// Lo-dash way #1

var sum = function(list) {
	return _.reduce(list, add, 0);
};
var totalCost = function(basket) {
	return sum(_.pluck(basket, 'cost'));
};

// console.log(totalCost(basket)); // 6.65

// Lo-dash way #2

var sum = function(list) {
    return _.reduce(list, add, 0);
};

var getCosts = _.partialRight(_.pluck, 'cost');
var totalCost = _.compose(sum, getCosts);

// console.log(totalCost(basket)); // 6.65

// Lo-dash way #3

var sum = function(list) {
    return _.reduce(list, add, 0);
};
var totalCost = _.compose(sum, _.partialRight(_.pluck, 'cost'));

// console.log(totalCost(basket)); // 6.65

// Ramda way

var sum = R.reduce(add, 0);
var total = R.compose(sum, R.pluck('cost'));

// console.log(total(basket)); // 6.65

R.pluck('cost'); // function :: [Object] -> [costs]

// next exercise Lo-Dash way

var sum = function(list) {
    return _.reduce(list, add, 0);
};
var total = function(basket) {
    return sum(_.pluck(basket, 'cost'));
};

// next exercise Ramda way

var sum = R.reduce(add, 0);
var total = R.compose(sum, R.pluck('cost'));
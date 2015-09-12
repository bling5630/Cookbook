var u = require('underscore');
var _ = require('lodash');
var _fp = require('lodash-fp');
var R = require('ramda');

var movies = [{
		title: "Mad Max: Fury Road",
		ratings: [8.9, 9.9, 7.9],
		year: 2015
	}, {
		title: "Tomorrowland",
		ratings: [6.0, 7.0, 8.0],
		year: 2015
	}, {
		title: "Jurassic World",
		ratings: [7.2, 8.2, 9.2],
		year: 2015
	}, {
		title: "Inception",
		ratings: [7.5, 7.5, 8.5],
		year: 2010
	}

];

var sum = function(numbers) {
	return _.reduce(numbers, function(sum, n) {
		return sum + n;
	}, 0);
};

var average = function(numbers) {
	return sum(numbers) / numbers.length;
};

var isRecommended = function(movie) {
	return average(movie.ratings) >= 8;
};

// lodash flow
// passing anonimous functions
var a = _.flow(
	function(list) {
		return _.filter(list, isRecommended);
	},
	function(list) {
		return _.pluck(list, 'ratings');
	},
	_.flatten,
	_.min)(movies);

console.log(a);

// lodash flow
// passing named functions
var customfilter = function(list) {
	return _.filter(list, isRecommended);
};
var custompluck = function(list) {
	return _.pluck(list, 'ratings');
};

var b = _.flow(
	customfilter,
	custompluck,
	_.flatten,
	_.min)(movies);

console.log(b);

// lodash flow
// passing curried functions
var curriedfilter = _.curry(_.filter)(_, isRecommended, null);
var curriedpluck = _.curry(_.pluck)(_, 'ratings');

var c = _.flow(
	curriedfilter,
	curriedpluck,
	_.flatten,
	_.min)(movies);


console.log(c);

// lodash-fp flow
// Function-first + Auto-curry awesomeness in action
var d = _fp.flow(
	_fp.filter(isRecommended),
	_fp.pluck('ratings'),
	_fp.flatten,
	_fp.min
)(movies);

console.log(d);
var _ = require('ramda'),
	support = require('./support');

// Exercise 1
//==============
// Refactor to remove all arguments 
// by partially applying the function

var words_a = function(str) {
	return split(' ', str);
};

//console.log(words('dvpfjsvő jdődsfjő pnepf'));

// answer

var words = split(' ');

console.log(words('dvpfjsvő jdődsfjő pnepf'));

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

// answer

var sentences = map(words);

// Exercise 2
//==============
// Refactor to remove all arguments 
// by partially applying the functions

var filterQs_a = function(xs) {
	return filter(function(x) {
		return match(/q/i, x);
	}, xs);
};

// answer

var filterQs = filter(match(/q/i));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

var _keepHighest = function(x, y) {
	return x >= y ? x : y;
}; // <- leave be

// REFACTOR THIS ONE:
var max = function(xs) {
	return reduce(function(acc, x) {
		return _keepHighest(acc, x);
	}, 0, xs);
};

// answer

var max = reduce(_keepHighest, 0);

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = undefined;

// answer

var slice = _.curry(function(start, end, xs) {
	return xs.slice(start, end);
});

// Bonus 2:
// ============
// use slice to define a function "take" 
// that takes n elements. make it curried

var take = undefined;


module.exports = {
	words: words,
	sentences: sentences,
	filterQs: filterQs,
	max: max,
	slice: slice,
	take: take
};

// answer

var take = slice(0);


module.exports = {
	words: words,
	sentences: sentences,
	filterQs: filterQs,
	max: max,
	slice: slice,
	take: take
};
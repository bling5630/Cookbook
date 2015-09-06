var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

// Underscore way

var firstTwoLetters = function(words) {
	return _.map(words, function(word) {
		return _.first(word, 2);
	});
};

// FP way

var firstTwo = _.map(_.first(2));

// Underscore way
console.log(firstTwoLetters(['jim', 'kate'])); // ['ji', 'ka']

// FP way

console.log(_.map(_.first(2))); // ['ji', 'ka']

//console.log(firstTwo(['jim', 'kate']));
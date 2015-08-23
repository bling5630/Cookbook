var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

var toUpperCase = function(x) {
	return x.toUpperCase();
};

var exclaim = function(x) {
	return x + ' ! ';
};

// older way
/*
var shout = function(x){
  return exclaim(toUpperCase(x));
};
*/

// compose/flow way

var shout = compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'));
//=> "SEND IN THE CLOWNS!"
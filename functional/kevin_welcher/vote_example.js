var _ = require('lodash'),
	ljs = require('lambdajs').expose(global),
	ramda = require('ramda');

var input = '-1 kevin + kevin -1 kevin + kevin test +1 -1 joe ';

//+ not :: a -> boolean

var not = function(x) {
	return !x;
};

//+ words :: string -> array

var words = split(" ", input);

//+ arrayToTuples :: array -> array

var arrayToTuples = reduce(function(memo, item, index, list) {
	return push([item, item[index + 1]], memo);
}, []);

//+ tupleToVote :: array -> object

var tupleToVote = function(tuple) {
	return {
		points: _.find(isVoteString, tuple),
		username: _.find(_.compose(not, isVoteString), tuple)
	};
};

//+ isVoteString :: string -> boolean

var isVoteString = test(/^[\+|\-]\d+$/);

//+ isValidVote :: object(vote) -> boolean

var isValidVote = function(vote) {
	return vote && vote.points && vote.username;
};

//+ uniqBy :: string -> array -> array

var uniqBy = function (param, arr) {
  return reduce(function (memo, item) {
    var items = pluck(param, memo);
    return (_.indexOf(item[param], items) > -1) ? memo : push(item, memo);
  }, [], arr);
}.autoCurry();

// break

_.compose(console.log,uniqBy('username'), filter(isValidVote), map(tupleToVote), arrayToTuples)(words);
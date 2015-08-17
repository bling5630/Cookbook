// To play around with this code, copy and paste the contents of this gist
// into the javascript pane of http://jsbin.com/umoK/1/edit or go to 
// http://jsbin.com/uZAfIqA/2/edit

// =============================================================================
// Generic API
// =============================================================================
var _ = require('lodash'),
  ljs = require('lambdajs').expose(global),
  ramda = require('ramda');
//+ words :: string -> array
var words = split(' ');

//+ not :: _ -> boolean
var not = function (x) { return !x; };

//+ uniqBy :: array -> array
var uniqBy = function (param, arr) {
  return reduce(function (memo, item) {
    var items = pluck(param, memo);
    return (_.indexOf(item[param], items) > -1) ? memo : push(item, memo);
  }, [], arr);
}.autoCurry();

//+ arrayToTuples :: array -> array
var arrayToTuples = reduce(function(memo, item, index, list) {
  return push([item, list[index+1]], memo);
}, []);



// =============================================================================
// Application API
// =============================================================================

//+ isVoteString :: string -> boolean
var isVoteString = test(/^[\+|\-]\d+$/);

//+ isValidVote :: object -> boolean
var isValidVote = function (vote) {
  return vote.user && vote.points; 
};

//+ tupleToVote :: array -> object
var tupleToVote = function (tuple) {
  return {
    points: find(isVoteString, tuple),
    user: find(compose(not, isVoteString), tuple)
  };
};

//+ getAllVotes :: string -> array
var getAllVotes = compose(map(tupleToVote), arrayToTuples, words);

//+ getUniqVotes :: string -> array
var getUniqVotes = compose(uniqBy('user'), filter(isValidVote), getAllVotes);



// =============================================================================
// Execution Logic
// =============================================================================

var input = '-1 kevin +1 kevin +1 test +1 +1 joe +1';

compose(console.log, getUniqVotes)(input);
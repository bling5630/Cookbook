var curry_1 = require('./curryOne');
var _ = require('ramda');

module.exports = curry_1(function allUniq(list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    if (_.indexOf(list, list[idx], idx + 1) >= 0) {
      return false;
    }
    idx += 1;
  }
  return true;
});


/*
var myTool = require('./allUniq');
var _ = require('ramda');

console.log(myTool(['1', 1]));
console.log(myTool([[42], [42]]));
console.log(myTool([1, 1]));

console.log(_.indexOf(3, [1,2,3]));

function whatever(list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    if (_.indexOf(list, list[idx], idx + 1) >= 0) {
      return false;
    }
    idx += 1;
  }
  return true;
}

console.log(whatever([1, 1]));
console.log(_.allUniq(([1, 1])));
*/

var curry_3 = require('./curryThree');

module.exports = function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
};

var tool = require('./assoc');


/*
@example
var tool = require('./assoc');

console.log(tool('c', 3, {a: 1, b: 2})); //=> {a: 1, b: 2, c: 3}
*/

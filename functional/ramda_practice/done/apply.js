var curry_2 = require('./curryTwo');
var _ = require('ramda');

module.exports = curry_2(function apply(fn, args) {
  return fn.apply(this, args);
});

var tool = require('./apply');


/*
@example
var tool = require('./apply');
var nums = [1, 2, 3, -99, 42, 6, 7];
console.log(tool(Math.max, nums)); //=> 42
*/

var _ = require('ramda');

/*
Problem: given a geographical extent as
an array of floating-point numbers, return
an array of numbers
with fixed decimal precision
*/

// solution

var fixedBounds = bounds.map(R.invoker(1, 'toFixed')(1));

console.log(fixedBounds);

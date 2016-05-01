var _ = require('ramda');

var a = [1,2,3];
var sum = a.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);

console.log([1,2,3,4,5,6].reduceRight(function(a,b){return a+b;}));

console.log(_.sum(a));

var numbers = [1, 2, 3];
var add = (function(a, b) { return a + b; });

console.log(_.reduce(add, 10, numbers)); //=> 16

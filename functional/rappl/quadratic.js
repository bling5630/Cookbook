var _ = require('ramda');
var quadratic = ((a,b,c,x) => x*x*a+x*b+c);

var result_1 = quadratic(1,0,0,2);
// var result_2 = quadratic(1,0,0)(2); //=> TypeError: quadratic(..) is not a function


// console.log(result_1 + ' and ' + result_2);
console.log(result_1 + ' is the real result');

/*
var xOffset = quadratic(0,1,-1);
console.log(xOffset(0));
xOffset(1);
*/

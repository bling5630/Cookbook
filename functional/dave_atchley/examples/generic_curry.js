var _ = require('ramda');

function foo(a, b, c) {
	return a + b + c;
}
var curriedFoo = _.curry(foo);

console.log(curriedFoo(1, 2, 3)); // -> 6 
console.log(curriedFoo(1)(2, 3)); // -> 6 
console.log(curriedFoo(1)(2)(3)); // -> 6 
console.log(curriedFoo(1, 2)(3)); // -> 6
var curry = require('curry');

var sum3 = curry(function(a, b, c) {
	return a + b + c;
});


console.log(sum3(1, 2, 3)); // 6 
console.log(sum3(1)(2, 3)); // 6 
console.log(sum3(1, 2)(3)); // 6

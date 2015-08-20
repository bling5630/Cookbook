var curry = require('curry');

var add = curry(function(a, b) {
	return a + b;
});

var add100 = add(100);

console.log(add100(1)); // 101